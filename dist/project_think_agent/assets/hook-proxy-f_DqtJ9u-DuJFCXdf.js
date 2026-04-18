//#region node_modules/@cloudflare/think/dist/hook-proxy-f_DqtJ9u.js
/**
* Create a serializable snapshot from a TurnContext.
*/
function createTurnContextSnapshot(ctx) {
	return {
		system: ctx.system,
		toolNames: Object.keys(ctx.tools),
		messageCount: ctx.messages.length,
		continuation: ctx.continuation,
		body: ctx.body,
		modelId: ctx.model.modelId ?? "unknown"
	};
}
/**
* Parse a hook result from the extension Worker's JSON response.
* Returns a TurnConfig or null if the extension skipped/errored.
*/
function parseHookResult(json) {
	try {
		const parsed = JSON.parse(json);
		if (parsed.skipped) return { skipped: true };
		if (parsed.error) return { error: parsed.error };
		return { config: parsed.result ?? {} };
	} catch {
		return { error: "Failed to parse hook result" };
	}
}
//#endregion
export { createTurnContextSnapshot, parseHookResult };
