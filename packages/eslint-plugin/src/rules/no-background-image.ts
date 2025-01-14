import { ESLintUtils } from "@typescript-eslint/utils";

const createRule = ESLintUtils.RuleCreator(() => {
  return "https://remotion.dev/docs/troubleshooting/background-image";
});

type Options = [];
type MessageIds = "BackgroundImage";

const BackgroundImage = [
  "Don't use background-image in Remotion.",
  "See: https://remotion.dev/docs/troubleshooting/background-image",
].join("\n");

export default createRule<Options, MessageIds>({
  name: "no-background-image",
  meta: {
    type: "problem",
    docs: {
      description: BackgroundImage,
      recommended: "error",
    },
    fixable: undefined,
    schema: [],
    messages: {
      BackgroundImage: BackgroundImage,
    },
  },
  defaultOptions: [],
  create: (context) => {
    return {
      Property: (node) => {
        if (node.key.type !== "Identifier") {
          return;
        }
        if (node.key.name !== "backgroundImage") {
          return;
        }

        context.report({
          messageId: "BackgroundImage",
          node,
        });
      },
    };
  },
});
