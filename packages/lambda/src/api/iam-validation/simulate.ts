import {GetUserCommand} from '@aws-sdk/client-iam';
import {AwsRegion} from '../../pricing/aws-regions';
import {getIamClient} from '../../shared/aws-clients';
import {EvalDecision, simulateRule, SimulationResult} from './simulate-rule';
import {requiredPermissions} from './user-permissions';

const getEmojiForStatus = (decision: EvalDecision) => {
	switch (decision) {
		case 'allowed':
			return '✅';
		default:
			return '❌';
	}
};

export const logPermissionOutput = (output: SimulationResult) => {
	return [getEmojiForStatus(output.decision), output.name].join(' ');
};

export const simulatePermissions = async (options: {
	region: AwsRegion;
	onSimulation?: (result: SimulationResult) => void;
}): Promise<{
	results: SimulationResult[];
}> => {
	const user = await getIamClient(options.region).send(new GetUserCommand({}));

	if (!user || !user.User) {
		throw new Error('No valid AWS user detected');
	}

	const results: SimulationResult[] = [];

	for (const per of requiredPermissions) {
		const result = await simulateRule({
			actionNames: per.actions,
			arn: user.User.Arn as string,
			region: options.region,
			resource: per.resource,
			retries: 2,
		});
		for (const res of result) {
			results.push(res);
			options.onSimulation?.(res);
		}
	}

	return {results};
};