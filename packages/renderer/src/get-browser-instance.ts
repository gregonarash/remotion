import {Browser, Page} from 'puppeteer-core';
import {BrowserExecutable, Internals} from 'remotion';
import {ChromiumOptions, openBrowser} from './open-browser';

export const getPageAndCleanupFn = async ({
	passedInInstance,
	browserExecutable,
	chromiumOptions,
}: {
	passedInInstance: Browser | undefined;
	browserExecutable: BrowserExecutable | null;
	chromiumOptions: ChromiumOptions;
}): Promise<{
	cleanup: () => void;
	page: Page;
}> => {
	if (passedInInstance) {
		const page = await passedInInstance.newPage();
		return {
			page,
			cleanup: () => {
				// Close puppeteer page and don't wait for it to finish.
				// Keep browser open.
				page.close().catch((err) => {
					console.error('Was not able to close puppeteer page', err);
				});
			},
		};
	}

	const browserInstance = await openBrowser(Internals.DEFAULT_BROWSER, {
		browserExecutable,
		chromiumOptions,
	});
	const browserPage = await browserInstance.newPage();

	return {
		page: browserPage,
		cleanup: () => {
			// Close whole browser that was just created and don't wait for it to finish.
			browserInstance.close().catch((err) => {
				console.error('Was not able to close puppeteer page', err);
			});
		},
	};
};