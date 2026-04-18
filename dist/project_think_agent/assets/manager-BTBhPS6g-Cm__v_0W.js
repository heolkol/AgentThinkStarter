import { r as __exportAll$1, t as __commonJSMin } from "./chunk-CULJAie3.js";
//#region node_modules/@ai-sdk/provider/dist/index.mjs
var marker$2 = "vercel.ai.error";
var symbol$4 = Symbol.for(marker$2);
var _a$4, _b$2;
var AISDKError = class _AISDKError extends (_b$2 = Error, _a$4 = symbol$4, _b$2) {
	/**
	* Creates an AI SDK Error.
	*
	* @param {Object} params - The parameters for creating the error.
	* @param {string} params.name - The name of the error.
	* @param {string} params.message - The error message.
	* @param {unknown} [params.cause] - The underlying cause of the error.
	*/
	constructor({ name: name14, message, cause }) {
		super(message);
		this[_a$4] = true;
		this.name = name14;
		this.cause = cause;
	}
	/**
	* Checks if the given error is an AI SDK Error.
	* @param {unknown} error - The error to check.
	* @returns {boolean} True if the error is an AI SDK Error, false otherwise.
	*/
	static isInstance(error) {
		return _AISDKError.hasMarker(error, marker$2);
	}
	static hasMarker(error, marker15) {
		const markerSymbol = Symbol.for(marker15);
		return error != null && typeof error === "object" && markerSymbol in error && typeof error[markerSymbol] === "boolean" && error[markerSymbol] === true;
	}
};
var name$3 = "AI_APICallError";
var marker2$2 = `vercel.ai.error.${name$3}`;
var symbol2$2 = Symbol.for(marker2$2);
var _a2$2, _b2$1;
var APICallError = class extends (_b2$1 = AISDKError, _a2$2 = symbol2$2, _b2$1) {
	constructor({ message, url, requestBodyValues, statusCode, responseHeaders, responseBody, cause, isRetryable = statusCode != null && (statusCode === 408 || statusCode === 409 || statusCode === 429 || statusCode >= 500), data }) {
		super({
			name: name$3,
			message,
			cause
		});
		this[_a2$2] = true;
		this.url = url;
		this.requestBodyValues = requestBodyValues;
		this.statusCode = statusCode;
		this.responseHeaders = responseHeaders;
		this.responseBody = responseBody;
		this.isRetryable = isRetryable;
		this.data = data;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker2$2);
	}
};
var name2$2 = "AI_EmptyResponseBodyError";
var marker3$2 = `vercel.ai.error.${name2$2}`;
var symbol3$2 = Symbol.for(marker3$2);
var _a3$2, _b3$1;
var EmptyResponseBodyError = class extends (_b3$1 = AISDKError, _a3$2 = symbol3$2, _b3$1) {
	constructor({ message = "Empty response body" } = {}) {
		super({
			name: name2$2,
			message
		});
		this[_a3$2] = true;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker3$2);
	}
};
function getErrorMessage$1(error) {
	if (error == null) return "unknown error";
	if (typeof error === "string") return error;
	if (error instanceof Error) return error.message;
	return JSON.stringify(error);
}
var name3$2 = "AI_InvalidArgumentError";
var marker4$2 = `vercel.ai.error.${name3$2}`;
var symbol4$2 = Symbol.for(marker4$2);
var _a4$2, _b4$1;
var InvalidArgumentError$1 = class extends (_b4$1 = AISDKError, _a4$2 = symbol4$2, _b4$1) {
	constructor({ message, cause, argument }) {
		super({
			name: name3$2,
			message,
			cause
		});
		this[_a4$2] = true;
		this.argument = argument;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker4$2);
	}
};
var name4$2 = "AI_InvalidPromptError";
var marker5$2 = `vercel.ai.error.${name4$2}`;
var symbol5$2 = Symbol.for(marker5$2);
var _a5$2, _b5$1;
var InvalidPromptError = class extends (_b5$1 = AISDKError, _a5$2 = symbol5$2, _b5$1) {
	constructor({ prompt, message, cause }) {
		super({
			name: name4$2,
			message: `Invalid prompt: ${message}`,
			cause
		});
		this[_a5$2] = true;
		this.prompt = prompt;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker5$2);
	}
};
var name5$2 = "AI_InvalidResponseDataError";
var marker6$2 = `vercel.ai.error.${name5$2}`;
var symbol6$2 = Symbol.for(marker6$2);
var _a6$2, _b6$1;
var InvalidResponseDataError = class extends (_b6$1 = AISDKError, _a6$2 = symbol6$2, _b6$1) {
	constructor({ data, message = `Invalid response data: ${JSON.stringify(data)}.` }) {
		super({
			name: name5$2,
			message
		});
		this[_a6$2] = true;
		this.data = data;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker6$2);
	}
};
var name6$2 = "AI_JSONParseError";
var marker7$2 = `vercel.ai.error.${name6$2}`;
var symbol7$2 = Symbol.for(marker7$2);
var _a7$2, _b7$1;
var JSONParseError = class extends (_b7$1 = AISDKError, _a7$2 = symbol7$2, _b7$1) {
	constructor({ text, cause }) {
		super({
			name: name6$2,
			message: `JSON parsing failed: Text: ${text}.
Error message: ${getErrorMessage$1(cause)}`,
			cause
		});
		this[_a7$2] = true;
		this.text = text;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker7$2);
	}
};
var name7$2 = "AI_LoadAPIKeyError";
var marker8$2 = `vercel.ai.error.${name7$2}`;
var symbol8$2 = Symbol.for(marker8$2);
var _a8$2, _b8$1;
var LoadAPIKeyError = class extends (_b8$1 = AISDKError, _a8$2 = symbol8$2, _b8$1) {
	constructor({ message }) {
		super({
			name: name7$2,
			message
		});
		this[_a8$2] = true;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker8$2);
	}
};
var name11$1 = "AI_TooManyEmbeddingValuesForCallError";
var marker12$1 = `vercel.ai.error.${name11$1}`;
var symbol12$1 = Symbol.for(marker12$1);
var _a12$1, _b12;
var TooManyEmbeddingValuesForCallError = class extends (_b12 = AISDKError, _a12$1 = symbol12$1, _b12) {
	constructor(options) {
		super({
			name: name11$1,
			message: `Too many values for a single embedding call. The ${options.provider} model "${options.modelId}" can only embed up to ${options.maxEmbeddingsPerCall} values per call, but ${options.values.length} values were provided.`
		});
		this[_a12$1] = true;
		this.provider = options.provider;
		this.modelId = options.modelId;
		this.maxEmbeddingsPerCall = options.maxEmbeddingsPerCall;
		this.values = options.values;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker12$1);
	}
};
var name12$1 = "AI_TypeValidationError";
var marker13$1 = `vercel.ai.error.${name12$1}`;
var symbol13$1 = Symbol.for(marker13$1);
var _a13$1, _b13;
var TypeValidationError = class _TypeValidationError extends (_b13 = AISDKError, _a13$1 = symbol13$1, _b13) {
	constructor({ value, cause, context }) {
		let contextPrefix = "Type validation failed";
		if (context == null ? void 0 : context.field) contextPrefix += ` for ${context.field}`;
		if ((context == null ? void 0 : context.entityName) || (context == null ? void 0 : context.entityId)) {
			contextPrefix += " (";
			const parts = [];
			if (context.entityName) parts.push(context.entityName);
			if (context.entityId) parts.push(`id: "${context.entityId}"`);
			contextPrefix += parts.join(", ");
			contextPrefix += ")";
		}
		super({
			name: name12$1,
			message: `${contextPrefix}: Value: ${JSON.stringify(value)}.
Error message: ${getErrorMessage$1(cause)}`,
			cause
		});
		this[_a13$1] = true;
		this.value = value;
		this.context = context;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker13$1);
	}
	/**
	* Wraps an error into a TypeValidationError.
	* If the cause is already a TypeValidationError with the same value and context, it returns the cause.
	* Otherwise, it creates a new TypeValidationError.
	*
	* @param {Object} params - The parameters for wrapping the error.
	* @param {unknown} params.value - The value that failed validation.
	* @param {unknown} params.cause - The original error or cause of the validation failure.
	* @param {TypeValidationContext} params.context - Optional context about what is being validated.
	* @returns {TypeValidationError} A TypeValidationError instance.
	*/
	static wrap({ value, cause, context }) {
		var _a15, _b15, _c;
		if (_TypeValidationError.isInstance(cause) && cause.value === value && ((_a15 = cause.context) == null ? void 0 : _a15.field) === (context == null ? void 0 : context.field) && ((_b15 = cause.context) == null ? void 0 : _b15.entityName) === (context == null ? void 0 : context.entityName) && ((_c = cause.context) == null ? void 0 : _c.entityId) === (context == null ? void 0 : context.entityId)) return cause;
		return new _TypeValidationError({
			value,
			cause,
			context
		});
	}
};
var name13$1 = "AI_UnsupportedFunctionalityError";
var marker14$1 = `vercel.ai.error.${name13$1}`;
var symbol14$1 = Symbol.for(marker14$1);
var _a14$1, _b14;
var UnsupportedFunctionalityError = class extends (_b14 = AISDKError, _a14$1 = symbol14$1, _b14) {
	constructor({ functionality, message = `'${functionality}' functionality not supported.` }) {
		super({
			name: name13$1,
			message
		});
		this[_a14$1] = true;
		this.functionality = functionality;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker14$1);
	}
};
//#endregion
//#region node_modules/zod/v4/core/core.js
/** A special constant with type `never` */
var NEVER = Object.freeze({ status: "aborted" });
function $constructor(name, initializer, params) {
	function init(inst, def) {
		if (!inst._zod) Object.defineProperty(inst, "_zod", {
			value: {
				def,
				constr: _,
				traits: /* @__PURE__ */ new Set()
			},
			enumerable: false
		});
		if (inst._zod.traits.has(name)) return;
		inst._zod.traits.add(name);
		initializer(inst, def);
		const proto = _.prototype;
		const keys = Object.keys(proto);
		for (let i = 0; i < keys.length; i++) {
			const k = keys[i];
			if (!(k in inst)) inst[k] = proto[k].bind(inst);
		}
	}
	const Parent = params?.Parent ?? Object;
	class Definition extends Parent {}
	Object.defineProperty(Definition, "name", { value: name });
	function _(def) {
		var _a;
		const inst = params?.Parent ? new Definition() : this;
		init(inst, def);
		(_a = inst._zod).deferred ?? (_a.deferred = []);
		for (const fn of inst._zod.deferred) fn();
		return inst;
	}
	Object.defineProperty(_, "init", { value: init });
	Object.defineProperty(_, Symbol.hasInstance, { value: (inst) => {
		if (params?.Parent && inst instanceof params.Parent) return true;
		return inst?._zod?.traits?.has(name);
	} });
	Object.defineProperty(_, "name", { value: name });
	return _;
}
var $ZodAsyncError = class extends Error {
	constructor() {
		super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`);
	}
};
var $ZodEncodeError = class extends Error {
	constructor(name) {
		super(`Encountered unidirectional transform during encode: ${name}`);
		this.name = "ZodEncodeError";
	}
};
var globalConfig = {};
function config(newConfig) {
	if (newConfig) Object.assign(globalConfig, newConfig);
	return globalConfig;
}
//#endregion
//#region node_modules/zod/v4/core/util.js
function getEnumValues(entries) {
	const numericValues = Object.values(entries).filter((v) => typeof v === "number");
	return Object.entries(entries).filter(([k, _]) => numericValues.indexOf(+k) === -1).map(([_, v]) => v);
}
function jsonStringifyReplacer(_, value) {
	if (typeof value === "bigint") return value.toString();
	return value;
}
function cached(getter) {
	return { get value() {
		{
			const value = getter();
			Object.defineProperty(this, "value", { value });
			return value;
		}
		throw new Error("cached value already set");
	} };
}
function nullish$1(input) {
	return input === null || input === void 0;
}
function cleanRegex(source) {
	const start = source.startsWith("^") ? 1 : 0;
	const end = source.endsWith("$") ? source.length - 1 : source.length;
	return source.slice(start, end);
}
function floatSafeRemainder$1(val, step) {
	const valDecCount = (val.toString().split(".")[1] || "").length;
	const stepString = step.toString();
	let stepDecCount = (stepString.split(".")[1] || "").length;
	if (stepDecCount === 0 && /\d?e-\d?/.test(stepString)) {
		const match = stepString.match(/\d?e-(\d?)/);
		if (match?.[1]) stepDecCount = Number.parseInt(match[1]);
	}
	const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
	return Number.parseInt(val.toFixed(decCount).replace(".", "")) % Number.parseInt(step.toFixed(decCount).replace(".", "")) / 10 ** decCount;
}
var EVALUATING = Symbol("evaluating");
function defineLazy(object, key, getter) {
	let value = void 0;
	Object.defineProperty(object, key, {
		get() {
			if (value === EVALUATING) return;
			if (value === void 0) {
				value = EVALUATING;
				value = getter();
			}
			return value;
		},
		set(v) {
			Object.defineProperty(object, key, { value: v });
		},
		configurable: true
	});
}
function assignProp(target, prop, value) {
	Object.defineProperty(target, prop, {
		value,
		writable: true,
		enumerable: true,
		configurable: true
	});
}
function mergeDefs(...defs) {
	const mergedDescriptors = {};
	for (const def of defs) Object.assign(mergedDescriptors, Object.getOwnPropertyDescriptors(def));
	return Object.defineProperties({}, mergedDescriptors);
}
function esc(str) {
	return JSON.stringify(str);
}
function slugify(input) {
	return input.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
var captureStackTrace = "captureStackTrace" in Error ? Error.captureStackTrace : (..._args) => {};
function isObject(data) {
	return typeof data === "object" && data !== null && !Array.isArray(data);
}
var allowsEval = cached(() => {
	if (typeof navigator !== "undefined" && navigator?.userAgent?.includes("Cloudflare")) return false;
	try {
		new Function("");
		return true;
	} catch (_) {
		return false;
	}
});
function isPlainObject(o) {
	if (isObject(o) === false) return false;
	const ctor = o.constructor;
	if (ctor === void 0) return true;
	if (typeof ctor !== "function") return true;
	const prot = ctor.prototype;
	if (isObject(prot) === false) return false;
	if (Object.prototype.hasOwnProperty.call(prot, "isPrototypeOf") === false) return false;
	return true;
}
function shallowClone(o) {
	if (isPlainObject(o)) return { ...o };
	if (Array.isArray(o)) return [...o];
	return o;
}
var propertyKeyTypes = new Set([
	"string",
	"number",
	"symbol"
]);
var primitiveTypes = new Set([
	"string",
	"number",
	"bigint",
	"boolean",
	"symbol",
	"undefined"
]);
function escapeRegex(str) {
	return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function clone(inst, def, params) {
	const cl = new inst._zod.constr(def ?? inst._zod.def);
	if (!def || params?.parent) cl._zod.parent = inst;
	return cl;
}
function normalizeParams(_params) {
	const params = _params;
	if (!params) return {};
	if (typeof params === "string") return { error: () => params };
	if (params?.message !== void 0) {
		if (params?.error !== void 0) throw new Error("Cannot specify both `message` and `error` params");
		params.error = params.message;
	}
	delete params.message;
	if (typeof params.error === "string") return {
		...params,
		error: () => params.error
	};
	return params;
}
function optionalKeys(shape) {
	return Object.keys(shape).filter((k) => {
		return shape[k]._zod.optin === "optional" && shape[k]._zod.optout === "optional";
	});
}
var NUMBER_FORMAT_RANGES = {
	safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
	int32: [-2147483648, 2147483647],
	uint32: [0, 4294967295],
	float32: [-34028234663852886e22, 34028234663852886e22],
	float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
var BIGINT_FORMAT_RANGES = {
	int64: [/* @__PURE__ */ BigInt("-9223372036854775808"), /* @__PURE__ */ BigInt("9223372036854775807")],
	uint64: [/* @__PURE__ */ BigInt(0), /* @__PURE__ */ BigInt("18446744073709551615")]
};
function pick(schema, mask) {
	const currDef = schema._zod.def;
	const checks = currDef.checks;
	if (checks && checks.length > 0) throw new Error(".pick() cannot be used on object schemas containing refinements");
	return clone(schema, mergeDefs(schema._zod.def, {
		get shape() {
			const newShape = {};
			for (const key in mask) {
				if (!(key in currDef.shape)) throw new Error(`Unrecognized key: "${key}"`);
				if (!mask[key]) continue;
				newShape[key] = currDef.shape[key];
			}
			assignProp(this, "shape", newShape);
			return newShape;
		},
		checks: []
	}));
}
function omit(schema, mask) {
	const currDef = schema._zod.def;
	const checks = currDef.checks;
	if (checks && checks.length > 0) throw new Error(".omit() cannot be used on object schemas containing refinements");
	return clone(schema, mergeDefs(schema._zod.def, {
		get shape() {
			const newShape = { ...schema._zod.def.shape };
			for (const key in mask) {
				if (!(key in currDef.shape)) throw new Error(`Unrecognized key: "${key}"`);
				if (!mask[key]) continue;
				delete newShape[key];
			}
			assignProp(this, "shape", newShape);
			return newShape;
		},
		checks: []
	}));
}
function extend(schema, shape) {
	if (!isPlainObject(shape)) throw new Error("Invalid input to extend: expected a plain object");
	const checks = schema._zod.def.checks;
	if (checks && checks.length > 0) {
		const existingShape = schema._zod.def.shape;
		for (const key in shape) if (Object.getOwnPropertyDescriptor(existingShape, key) !== void 0) throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
	}
	return clone(schema, mergeDefs(schema._zod.def, { get shape() {
		const _shape = {
			...schema._zod.def.shape,
			...shape
		};
		assignProp(this, "shape", _shape);
		return _shape;
	} }));
}
function safeExtend(schema, shape) {
	if (!isPlainObject(shape)) throw new Error("Invalid input to safeExtend: expected a plain object");
	return clone(schema, mergeDefs(schema._zod.def, { get shape() {
		const _shape = {
			...schema._zod.def.shape,
			...shape
		};
		assignProp(this, "shape", _shape);
		return _shape;
	} }));
}
function merge(a, b) {
	return clone(a, mergeDefs(a._zod.def, {
		get shape() {
			const _shape = {
				...a._zod.def.shape,
				...b._zod.def.shape
			};
			assignProp(this, "shape", _shape);
			return _shape;
		},
		get catchall() {
			return b._zod.def.catchall;
		},
		checks: []
	}));
}
function partial(Class, schema, mask) {
	const checks = schema._zod.def.checks;
	if (checks && checks.length > 0) throw new Error(".partial() cannot be used on object schemas containing refinements");
	return clone(schema, mergeDefs(schema._zod.def, {
		get shape() {
			const oldShape = schema._zod.def.shape;
			const shape = { ...oldShape };
			if (mask) for (const key in mask) {
				if (!(key in oldShape)) throw new Error(`Unrecognized key: "${key}"`);
				if (!mask[key]) continue;
				shape[key] = Class ? new Class({
					type: "optional",
					innerType: oldShape[key]
				}) : oldShape[key];
			}
			else for (const key in oldShape) shape[key] = Class ? new Class({
				type: "optional",
				innerType: oldShape[key]
			}) : oldShape[key];
			assignProp(this, "shape", shape);
			return shape;
		},
		checks: []
	}));
}
function required(Class, schema, mask) {
	return clone(schema, mergeDefs(schema._zod.def, { get shape() {
		const oldShape = schema._zod.def.shape;
		const shape = { ...oldShape };
		if (mask) for (const key in mask) {
			if (!(key in shape)) throw new Error(`Unrecognized key: "${key}"`);
			if (!mask[key]) continue;
			shape[key] = new Class({
				type: "nonoptional",
				innerType: oldShape[key]
			});
		}
		else for (const key in oldShape) shape[key] = new Class({
			type: "nonoptional",
			innerType: oldShape[key]
		});
		assignProp(this, "shape", shape);
		return shape;
	} }));
}
function aborted(x, startIndex = 0) {
	if (x.aborted === true) return true;
	for (let i = startIndex; i < x.issues.length; i++) if (x.issues[i]?.continue !== true) return true;
	return false;
}
function prefixIssues(path, issues) {
	return issues.map((iss) => {
		var _a;
		(_a = iss).path ?? (_a.path = []);
		iss.path.unshift(path);
		return iss;
	});
}
function unwrapMessage(message) {
	return typeof message === "string" ? message : message?.message;
}
function finalizeIssue(iss, ctx, config) {
	const full = {
		...iss,
		path: iss.path ?? []
	};
	if (!iss.message) full.message = unwrapMessage(iss.inst?._zod.def?.error?.(iss)) ?? unwrapMessage(ctx?.error?.(iss)) ?? unwrapMessage(config.customError?.(iss)) ?? unwrapMessage(config.localeError?.(iss)) ?? "Invalid input";
	delete full.inst;
	delete full.continue;
	if (!ctx?.reportInput) delete full.input;
	return full;
}
function getSizableOrigin(input) {
	if (input instanceof Set) return "set";
	if (input instanceof Map) return "map";
	if (input instanceof File) return "file";
	return "unknown";
}
function getLengthableOrigin(input) {
	if (Array.isArray(input)) return "array";
	if (typeof input === "string") return "string";
	return "unknown";
}
function issue(...args) {
	const [iss, input, inst] = args;
	if (typeof iss === "string") return {
		message: iss,
		code: "custom",
		input,
		inst
	};
	return { ...iss };
}
//#endregion
//#region node_modules/zod/v4/core/errors.js
var initializer$1 = (inst, def) => {
	inst.name = "$ZodError";
	Object.defineProperty(inst, "_zod", {
		value: inst._zod,
		enumerable: false
	});
	Object.defineProperty(inst, "issues", {
		value: def,
		enumerable: false
	});
	inst.message = JSON.stringify(def, jsonStringifyReplacer, 2);
	Object.defineProperty(inst, "toString", {
		value: () => inst.message,
		enumerable: false
	});
};
var $ZodError = $constructor("$ZodError", initializer$1);
var $ZodRealError = $constructor("$ZodError", initializer$1, { Parent: Error });
function flattenError(error, mapper = (issue) => issue.message) {
	const fieldErrors = {};
	const formErrors = [];
	for (const sub of error.issues) if (sub.path.length > 0) {
		fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
		fieldErrors[sub.path[0]].push(mapper(sub));
	} else formErrors.push(mapper(sub));
	return {
		formErrors,
		fieldErrors
	};
}
function formatError(error, mapper = (issue) => issue.message) {
	const fieldErrors = { _errors: [] };
	const processError = (error) => {
		for (const issue of error.issues) if (issue.code === "invalid_union" && issue.errors.length) issue.errors.map((issues) => processError({ issues }));
		else if (issue.code === "invalid_key") processError({ issues: issue.issues });
		else if (issue.code === "invalid_element") processError({ issues: issue.issues });
		else if (issue.path.length === 0) fieldErrors._errors.push(mapper(issue));
		else {
			let curr = fieldErrors;
			let i = 0;
			while (i < issue.path.length) {
				const el = issue.path[i];
				if (!(i === issue.path.length - 1)) curr[el] = curr[el] || { _errors: [] };
				else {
					curr[el] = curr[el] || { _errors: [] };
					curr[el]._errors.push(mapper(issue));
				}
				curr = curr[el];
				i++;
			}
		}
	};
	processError(error);
	return fieldErrors;
}
//#endregion
//#region node_modules/zod/v4/core/parse.js
var _parse$1 = (_Err) => (schema, value, _ctx, _params) => {
	const ctx = _ctx ? Object.assign(_ctx, { async: false }) : { async: false };
	const result = schema._zod.run({
		value,
		issues: []
	}, ctx);
	if (result instanceof Promise) throw new $ZodAsyncError();
	if (result.issues.length) {
		const e = new (_params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
		captureStackTrace(e, _params?.callee);
		throw e;
	}
	return result.value;
};
var parse$1 = /* @__PURE__ */ _parse$1($ZodRealError);
var _parseAsync = (_Err) => async (schema, value, _ctx, params) => {
	const ctx = _ctx ? Object.assign(_ctx, { async: true }) : { async: true };
	let result = schema._zod.run({
		value,
		issues: []
	}, ctx);
	if (result instanceof Promise) result = await result;
	if (result.issues.length) {
		const e = new (params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
		captureStackTrace(e, params?.callee);
		throw e;
	}
	return result.value;
};
var parseAsync$1 = /* @__PURE__ */ _parseAsync($ZodRealError);
var _safeParse = (_Err) => (schema, value, _ctx) => {
	const ctx = _ctx ? {
		..._ctx,
		async: false
	} : { async: false };
	const result = schema._zod.run({
		value,
		issues: []
	}, ctx);
	if (result instanceof Promise) throw new $ZodAsyncError();
	return result.issues.length ? {
		success: false,
		error: new (_Err ?? $ZodError)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
	} : {
		success: true,
		data: result.value
	};
};
var safeParse$1 = /* @__PURE__ */ _safeParse($ZodRealError);
var _safeParseAsync = (_Err) => async (schema, value, _ctx) => {
	const ctx = _ctx ? Object.assign(_ctx, { async: true }) : { async: true };
	let result = schema._zod.run({
		value,
		issues: []
	}, ctx);
	if (result instanceof Promise) result = await result;
	return result.issues.length ? {
		success: false,
		error: new _Err(result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
	} : {
		success: true,
		data: result.value
	};
};
var safeParseAsync$1 = /* @__PURE__ */ _safeParseAsync($ZodRealError);
var _encode = (_Err) => (schema, value, _ctx) => {
	const ctx = _ctx ? Object.assign(_ctx, { direction: "backward" }) : { direction: "backward" };
	return _parse$1(_Err)(schema, value, ctx);
};
var _decode = (_Err) => (schema, value, _ctx) => {
	return _parse$1(_Err)(schema, value, _ctx);
};
var _encodeAsync = (_Err) => async (schema, value, _ctx) => {
	const ctx = _ctx ? Object.assign(_ctx, { direction: "backward" }) : { direction: "backward" };
	return _parseAsync(_Err)(schema, value, ctx);
};
var _decodeAsync = (_Err) => async (schema, value, _ctx) => {
	return _parseAsync(_Err)(schema, value, _ctx);
};
var _safeEncode = (_Err) => (schema, value, _ctx) => {
	const ctx = _ctx ? Object.assign(_ctx, { direction: "backward" }) : { direction: "backward" };
	return _safeParse(_Err)(schema, value, ctx);
};
var _safeDecode = (_Err) => (schema, value, _ctx) => {
	return _safeParse(_Err)(schema, value, _ctx);
};
var _safeEncodeAsync = (_Err) => async (schema, value, _ctx) => {
	const ctx = _ctx ? Object.assign(_ctx, { direction: "backward" }) : { direction: "backward" };
	return _safeParseAsync(_Err)(schema, value, ctx);
};
var _safeDecodeAsync = (_Err) => async (schema, value, _ctx) => {
	return _safeParseAsync(_Err)(schema, value, _ctx);
};
//#endregion
//#region node_modules/zod/v4/core/regexes.js
var regexes_exports = /* @__PURE__ */ __exportAll$1({
	base64: () => base64$1,
	base64url: () => base64url$1,
	bigint: () => bigint$1,
	boolean: () => boolean$1,
	browserEmail: () => browserEmail,
	cidrv4: () => cidrv4$1,
	cidrv6: () => cidrv6$1,
	cuid: () => cuid$1,
	cuid2: () => cuid2$1,
	date: () => date$2,
	datetime: () => datetime$1,
	domain: () => domain,
	duration: () => duration$1,
	e164: () => e164$1,
	email: () => email$1,
	emoji: () => emoji$1,
	extendedDuration: () => extendedDuration,
	guid: () => guid$1,
	hex: () => hex$1,
	hostname: () => hostname$1,
	html5Email: () => html5Email,
	idnEmail: () => idnEmail,
	integer: () => integer,
	ipv4: () => ipv4$1,
	ipv6: () => ipv6$1,
	ksuid: () => ksuid$1,
	lowercase: () => lowercase,
	mac: () => mac$1,
	md5_base64: () => md5_base64,
	md5_base64url: () => md5_base64url,
	md5_hex: () => md5_hex,
	nanoid: () => nanoid$1,
	null: () => _null$2,
	number: () => number$1,
	rfc5322Email: () => rfc5322Email,
	sha1_base64: () => sha1_base64,
	sha1_base64url: () => sha1_base64url,
	sha1_hex: () => sha1_hex,
	sha256_base64: () => sha256_base64,
	sha256_base64url: () => sha256_base64url,
	sha256_hex: () => sha256_hex,
	sha384_base64: () => sha384_base64,
	sha384_base64url: () => sha384_base64url,
	sha384_hex: () => sha384_hex,
	sha512_base64: () => sha512_base64,
	sha512_base64url: () => sha512_base64url,
	sha512_hex: () => sha512_hex,
	string: () => string$1,
	time: () => time$1,
	ulid: () => ulid$1,
	undefined: () => _undefined$2,
	unicodeEmail: () => unicodeEmail,
	uppercase: () => uppercase,
	uuid: () => uuid$1,
	uuid4: () => uuid4,
	uuid6: () => uuid6,
	uuid7: () => uuid7,
	xid: () => xid$1
});
var cuid$1 = /^[cC][^\s-]{8,}$/;
var cuid2$1 = /^[0-9a-z]+$/;
var ulid$1 = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/;
var xid$1 = /^[0-9a-vA-V]{20}$/;
var ksuid$1 = /^[A-Za-z0-9]{27}$/;
var nanoid$1 = /^[a-zA-Z0-9_-]{21}$/;
/** ISO 8601-1 duration regex. Does not support the 8601-2 extensions like negative durations or fractional/negative components. */
var duration$1 = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
/** Implements ISO 8601-2 extensions like explicit +- prefixes, mixing weeks with other units, and fractional/negative components. */
var extendedDuration = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
/** A regex for any UUID-like identifier: 8-4-4-4-12 hex pattern */
var guid$1 = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
/** Returns a regex for validating an RFC 9562/4122 UUID.
*
* @param version Optionally specify a version 1-8. If no version is specified, all versions are supported. */
var uuid$1 = (version) => {
	if (!version) return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
	return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${version}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`);
};
var uuid4 = /* @__PURE__ */ uuid$1(4);
var uuid6 = /* @__PURE__ */ uuid$1(6);
var uuid7 = /* @__PURE__ */ uuid$1(7);
/** Practical email validation */
var email$1 = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
/** Equivalent to the HTML5 input[type=email] validation implemented by browsers. Source: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email */
var html5Email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
/** The classic emailregex.com regex for RFC 5322-compliant emails */
var rfc5322Email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
/** A loose regex that allows Unicode characters, enforces length limits, and that's about it. */
var unicodeEmail = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u;
var idnEmail = unicodeEmail;
var browserEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var _emoji$1 = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
function emoji$1() {
	return new RegExp(_emoji$1, "u");
}
var ipv4$1 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv6$1 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;
var mac$1 = (delimiter) => {
	const escapedDelim = escapeRegex(delimiter ?? ":");
	return new RegExp(`^(?:[0-9A-F]{2}${escapedDelim}){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}${escapedDelim}){5}[0-9a-f]{2}$`);
};
var cidrv4$1 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
var cidrv6$1 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64$1 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/;
var base64url$1 = /^[A-Za-z0-9_-]*$/;
var hostname$1 = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/;
var domain = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
var e164$1 = /^\+[1-9]\d{6,14}$/;
var dateSource = `(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`;
var date$2 = /* @__PURE__ */ new RegExp(`^${dateSource}$`);
function timeSource(args) {
	const hhmm = `(?:[01]\\d|2[0-3]):[0-5]\\d`;
	return typeof args.precision === "number" ? args.precision === -1 ? `${hhmm}` : args.precision === 0 ? `${hhmm}:[0-5]\\d` : `${hhmm}:[0-5]\\d\\.\\d{${args.precision}}` : `${hhmm}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function time$1(args) {
	return new RegExp(`^${timeSource(args)}$`);
}
function datetime$1(args) {
	const time = timeSource({ precision: args.precision });
	const opts = ["Z"];
	if (args.local) opts.push("");
	if (args.offset) opts.push(`([+-](?:[01]\\d|2[0-3]):[0-5]\\d)`);
	const timeRegex = `${time}(?:${opts.join("|")})`;
	return new RegExp(`^${dateSource}T(?:${timeRegex})$`);
}
var string$1 = (params) => {
	const regex = params ? `[\\s\\S]{${params?.minimum ?? 0},${params?.maximum ?? ""}}` : `[\\s\\S]*`;
	return new RegExp(`^${regex}$`);
};
var bigint$1 = /^-?\d+n?$/;
var integer = /^-?\d+$/;
var number$1 = /^-?\d+(?:\.\d+)?$/;
var boolean$1 = /^(?:true|false)$/i;
var _null$2 = /^null$/i;
var _undefined$2 = /^undefined$/i;
var lowercase = /^[^A-Z]*$/;
var uppercase = /^[^a-z]*$/;
var hex$1 = /^[0-9a-fA-F]*$/;
function fixedBase64(bodyLength, padding) {
	return new RegExp(`^[A-Za-z0-9+/]{${bodyLength}}${padding}$`);
}
function fixedBase64url(length) {
	return new RegExp(`^[A-Za-z0-9_-]{${length}}$`);
}
var md5_hex = /^[0-9a-fA-F]{32}$/;
var md5_base64 = /* @__PURE__ */ fixedBase64(22, "==");
var md5_base64url = /* @__PURE__ */ fixedBase64url(22);
var sha1_hex = /^[0-9a-fA-F]{40}$/;
var sha1_base64 = /* @__PURE__ */ fixedBase64(27, "=");
var sha1_base64url = /* @__PURE__ */ fixedBase64url(27);
var sha256_hex = /^[0-9a-fA-F]{64}$/;
var sha256_base64 = /* @__PURE__ */ fixedBase64(43, "=");
var sha256_base64url = /* @__PURE__ */ fixedBase64url(43);
var sha384_hex = /^[0-9a-fA-F]{96}$/;
var sha384_base64 = /* @__PURE__ */ fixedBase64(64, "");
var sha384_base64url = /* @__PURE__ */ fixedBase64url(64);
var sha512_hex = /^[0-9a-fA-F]{128}$/;
var sha512_base64 = /* @__PURE__ */ fixedBase64(86, "==");
var sha512_base64url = /* @__PURE__ */ fixedBase64url(86);
//#endregion
//#region node_modules/zod/v4/core/checks.js
var $ZodCheck = /* @__PURE__ */ $constructor("$ZodCheck", (inst, def) => {
	var _a;
	inst._zod ?? (inst._zod = {});
	inst._zod.def = def;
	(_a = inst._zod).onattach ?? (_a.onattach = []);
});
var numericOriginMap = {
	number: "number",
	bigint: "bigint",
	object: "date"
};
var $ZodCheckLessThan = /* @__PURE__ */ $constructor("$ZodCheckLessThan", (inst, def) => {
	$ZodCheck.init(inst, def);
	const origin = numericOriginMap[typeof def.value];
	inst._zod.onattach.push((inst) => {
		const bag = inst._zod.bag;
		const curr = (def.inclusive ? bag.maximum : bag.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
		if (def.value < curr) if (def.inclusive) bag.maximum = def.value;
		else bag.exclusiveMaximum = def.value;
	});
	inst._zod.check = (payload) => {
		if (def.inclusive ? payload.value <= def.value : payload.value < def.value) return;
		payload.issues.push({
			origin,
			code: "too_big",
			maximum: typeof def.value === "object" ? def.value.getTime() : def.value,
			input: payload.value,
			inclusive: def.inclusive,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckGreaterThan = /* @__PURE__ */ $constructor("$ZodCheckGreaterThan", (inst, def) => {
	$ZodCheck.init(inst, def);
	const origin = numericOriginMap[typeof def.value];
	inst._zod.onattach.push((inst) => {
		const bag = inst._zod.bag;
		const curr = (def.inclusive ? bag.minimum : bag.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
		if (def.value > curr) if (def.inclusive) bag.minimum = def.value;
		else bag.exclusiveMinimum = def.value;
	});
	inst._zod.check = (payload) => {
		if (def.inclusive ? payload.value >= def.value : payload.value > def.value) return;
		payload.issues.push({
			origin,
			code: "too_small",
			minimum: typeof def.value === "object" ? def.value.getTime() : def.value,
			input: payload.value,
			inclusive: def.inclusive,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckMultipleOf = /* @__PURE__ */ $constructor("$ZodCheckMultipleOf", (inst, def) => {
	$ZodCheck.init(inst, def);
	inst._zod.onattach.push((inst) => {
		var _a;
		(_a = inst._zod.bag).multipleOf ?? (_a.multipleOf = def.value);
	});
	inst._zod.check = (payload) => {
		if (typeof payload.value !== typeof def.value) throw new Error("Cannot mix number and bigint in multiple_of check.");
		if (typeof payload.value === "bigint" ? payload.value % def.value === BigInt(0) : floatSafeRemainder$1(payload.value, def.value) === 0) return;
		payload.issues.push({
			origin: typeof payload.value,
			code: "not_multiple_of",
			divisor: def.value,
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckNumberFormat = /* @__PURE__ */ $constructor("$ZodCheckNumberFormat", (inst, def) => {
	$ZodCheck.init(inst, def);
	def.format = def.format || "float64";
	const isInt = def.format?.includes("int");
	const origin = isInt ? "int" : "number";
	const [minimum, maximum] = NUMBER_FORMAT_RANGES[def.format];
	inst._zod.onattach.push((inst) => {
		const bag = inst._zod.bag;
		bag.format = def.format;
		bag.minimum = minimum;
		bag.maximum = maximum;
		if (isInt) bag.pattern = integer;
	});
	inst._zod.check = (payload) => {
		const input = payload.value;
		if (isInt) {
			if (!Number.isInteger(input)) {
				payload.issues.push({
					expected: origin,
					format: def.format,
					code: "invalid_type",
					continue: false,
					input,
					inst
				});
				return;
			}
			if (!Number.isSafeInteger(input)) {
				if (input > 0) payload.issues.push({
					input,
					code: "too_big",
					maximum: Number.MAX_SAFE_INTEGER,
					note: "Integers must be within the safe integer range.",
					inst,
					origin,
					inclusive: true,
					continue: !def.abort
				});
				else payload.issues.push({
					input,
					code: "too_small",
					minimum: Number.MIN_SAFE_INTEGER,
					note: "Integers must be within the safe integer range.",
					inst,
					origin,
					inclusive: true,
					continue: !def.abort
				});
				return;
			}
		}
		if (input < minimum) payload.issues.push({
			origin: "number",
			input,
			code: "too_small",
			minimum,
			inclusive: true,
			inst,
			continue: !def.abort
		});
		if (input > maximum) payload.issues.push({
			origin: "number",
			input,
			code: "too_big",
			maximum,
			inclusive: true,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckBigIntFormat = /* @__PURE__ */ $constructor("$ZodCheckBigIntFormat", (inst, def) => {
	$ZodCheck.init(inst, def);
	const [minimum, maximum] = BIGINT_FORMAT_RANGES[def.format];
	inst._zod.onattach.push((inst) => {
		const bag = inst._zod.bag;
		bag.format = def.format;
		bag.minimum = minimum;
		bag.maximum = maximum;
	});
	inst._zod.check = (payload) => {
		const input = payload.value;
		if (input < minimum) payload.issues.push({
			origin: "bigint",
			input,
			code: "too_small",
			minimum,
			inclusive: true,
			inst,
			continue: !def.abort
		});
		if (input > maximum) payload.issues.push({
			origin: "bigint",
			input,
			code: "too_big",
			maximum,
			inclusive: true,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckMaxSize = /* @__PURE__ */ $constructor("$ZodCheckMaxSize", (inst, def) => {
	var _a;
	$ZodCheck.init(inst, def);
	(_a = inst._zod.def).when ?? (_a.when = (payload) => {
		const val = payload.value;
		return !nullish$1(val) && val.size !== void 0;
	});
	inst._zod.onattach.push((inst) => {
		const curr = inst._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
		if (def.maximum < curr) inst._zod.bag.maximum = def.maximum;
	});
	inst._zod.check = (payload) => {
		const input = payload.value;
		if (input.size <= def.maximum) return;
		payload.issues.push({
			origin: getSizableOrigin(input),
			code: "too_big",
			maximum: def.maximum,
			inclusive: true,
			input,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckMinSize = /* @__PURE__ */ $constructor("$ZodCheckMinSize", (inst, def) => {
	var _a;
	$ZodCheck.init(inst, def);
	(_a = inst._zod.def).when ?? (_a.when = (payload) => {
		const val = payload.value;
		return !nullish$1(val) && val.size !== void 0;
	});
	inst._zod.onattach.push((inst) => {
		const curr = inst._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
		if (def.minimum > curr) inst._zod.bag.minimum = def.minimum;
	});
	inst._zod.check = (payload) => {
		const input = payload.value;
		if (input.size >= def.minimum) return;
		payload.issues.push({
			origin: getSizableOrigin(input),
			code: "too_small",
			minimum: def.minimum,
			inclusive: true,
			input,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckSizeEquals = /* @__PURE__ */ $constructor("$ZodCheckSizeEquals", (inst, def) => {
	var _a;
	$ZodCheck.init(inst, def);
	(_a = inst._zod.def).when ?? (_a.when = (payload) => {
		const val = payload.value;
		return !nullish$1(val) && val.size !== void 0;
	});
	inst._zod.onattach.push((inst) => {
		const bag = inst._zod.bag;
		bag.minimum = def.size;
		bag.maximum = def.size;
		bag.size = def.size;
	});
	inst._zod.check = (payload) => {
		const input = payload.value;
		const size = input.size;
		if (size === def.size) return;
		const tooBig = size > def.size;
		payload.issues.push({
			origin: getSizableOrigin(input),
			...tooBig ? {
				code: "too_big",
				maximum: def.size
			} : {
				code: "too_small",
				minimum: def.size
			},
			inclusive: true,
			exact: true,
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckMaxLength = /* @__PURE__ */ $constructor("$ZodCheckMaxLength", (inst, def) => {
	var _a;
	$ZodCheck.init(inst, def);
	(_a = inst._zod.def).when ?? (_a.when = (payload) => {
		const val = payload.value;
		return !nullish$1(val) && val.length !== void 0;
	});
	inst._zod.onattach.push((inst) => {
		const curr = inst._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
		if (def.maximum < curr) inst._zod.bag.maximum = def.maximum;
	});
	inst._zod.check = (payload) => {
		const input = payload.value;
		if (input.length <= def.maximum) return;
		const origin = getLengthableOrigin(input);
		payload.issues.push({
			origin,
			code: "too_big",
			maximum: def.maximum,
			inclusive: true,
			input,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckMinLength = /* @__PURE__ */ $constructor("$ZodCheckMinLength", (inst, def) => {
	var _a;
	$ZodCheck.init(inst, def);
	(_a = inst._zod.def).when ?? (_a.when = (payload) => {
		const val = payload.value;
		return !nullish$1(val) && val.length !== void 0;
	});
	inst._zod.onattach.push((inst) => {
		const curr = inst._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
		if (def.minimum > curr) inst._zod.bag.minimum = def.minimum;
	});
	inst._zod.check = (payload) => {
		const input = payload.value;
		if (input.length >= def.minimum) return;
		const origin = getLengthableOrigin(input);
		payload.issues.push({
			origin,
			code: "too_small",
			minimum: def.minimum,
			inclusive: true,
			input,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckLengthEquals = /* @__PURE__ */ $constructor("$ZodCheckLengthEquals", (inst, def) => {
	var _a;
	$ZodCheck.init(inst, def);
	(_a = inst._zod.def).when ?? (_a.when = (payload) => {
		const val = payload.value;
		return !nullish$1(val) && val.length !== void 0;
	});
	inst._zod.onattach.push((inst) => {
		const bag = inst._zod.bag;
		bag.minimum = def.length;
		bag.maximum = def.length;
		bag.length = def.length;
	});
	inst._zod.check = (payload) => {
		const input = payload.value;
		const length = input.length;
		if (length === def.length) return;
		const origin = getLengthableOrigin(input);
		const tooBig = length > def.length;
		payload.issues.push({
			origin,
			...tooBig ? {
				code: "too_big",
				maximum: def.length
			} : {
				code: "too_small",
				minimum: def.length
			},
			inclusive: true,
			exact: true,
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckStringFormat = /* @__PURE__ */ $constructor("$ZodCheckStringFormat", (inst, def) => {
	var _a, _b;
	$ZodCheck.init(inst, def);
	inst._zod.onattach.push((inst) => {
		const bag = inst._zod.bag;
		bag.format = def.format;
		if (def.pattern) {
			bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
			bag.patterns.add(def.pattern);
		}
	});
	if (def.pattern) (_a = inst._zod).check ?? (_a.check = (payload) => {
		def.pattern.lastIndex = 0;
		if (def.pattern.test(payload.value)) return;
		payload.issues.push({
			origin: "string",
			code: "invalid_format",
			format: def.format,
			input: payload.value,
			...def.pattern ? { pattern: def.pattern.toString() } : {},
			inst,
			continue: !def.abort
		});
	});
	else (_b = inst._zod).check ?? (_b.check = () => {});
});
var $ZodCheckRegex = /* @__PURE__ */ $constructor("$ZodCheckRegex", (inst, def) => {
	$ZodCheckStringFormat.init(inst, def);
	inst._zod.check = (payload) => {
		def.pattern.lastIndex = 0;
		if (def.pattern.test(payload.value)) return;
		payload.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "regex",
			input: payload.value,
			pattern: def.pattern.toString(),
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckLowerCase = /* @__PURE__ */ $constructor("$ZodCheckLowerCase", (inst, def) => {
	def.pattern ?? (def.pattern = lowercase);
	$ZodCheckStringFormat.init(inst, def);
});
var $ZodCheckUpperCase = /* @__PURE__ */ $constructor("$ZodCheckUpperCase", (inst, def) => {
	def.pattern ?? (def.pattern = uppercase);
	$ZodCheckStringFormat.init(inst, def);
});
var $ZodCheckIncludes = /* @__PURE__ */ $constructor("$ZodCheckIncludes", (inst, def) => {
	$ZodCheck.init(inst, def);
	const escapedRegex = escapeRegex(def.includes);
	const pattern = new RegExp(typeof def.position === "number" ? `^.{${def.position}}${escapedRegex}` : escapedRegex);
	def.pattern = pattern;
	inst._zod.onattach.push((inst) => {
		const bag = inst._zod.bag;
		bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
		bag.patterns.add(pattern);
	});
	inst._zod.check = (payload) => {
		if (payload.value.includes(def.includes, def.position)) return;
		payload.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "includes",
			includes: def.includes,
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckStartsWith = /* @__PURE__ */ $constructor("$ZodCheckStartsWith", (inst, def) => {
	$ZodCheck.init(inst, def);
	const pattern = new RegExp(`^${escapeRegex(def.prefix)}.*`);
	def.pattern ?? (def.pattern = pattern);
	inst._zod.onattach.push((inst) => {
		const bag = inst._zod.bag;
		bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
		bag.patterns.add(pattern);
	});
	inst._zod.check = (payload) => {
		if (payload.value.startsWith(def.prefix)) return;
		payload.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "starts_with",
			prefix: def.prefix,
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckEndsWith = /* @__PURE__ */ $constructor("$ZodCheckEndsWith", (inst, def) => {
	$ZodCheck.init(inst, def);
	const pattern = new RegExp(`.*${escapeRegex(def.suffix)}$`);
	def.pattern ?? (def.pattern = pattern);
	inst._zod.onattach.push((inst) => {
		const bag = inst._zod.bag;
		bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
		bag.patterns.add(pattern);
	});
	inst._zod.check = (payload) => {
		if (payload.value.endsWith(def.suffix)) return;
		payload.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "ends_with",
			suffix: def.suffix,
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
function handleCheckPropertyResult(result, payload, property) {
	if (result.issues.length) payload.issues.push(...prefixIssues(property, result.issues));
}
var $ZodCheckProperty = /* @__PURE__ */ $constructor("$ZodCheckProperty", (inst, def) => {
	$ZodCheck.init(inst, def);
	inst._zod.check = (payload) => {
		const result = def.schema._zod.run({
			value: payload.value[def.property],
			issues: []
		}, {});
		if (result instanceof Promise) return result.then((result) => handleCheckPropertyResult(result, payload, def.property));
		handleCheckPropertyResult(result, payload, def.property);
	};
});
var $ZodCheckMimeType = /* @__PURE__ */ $constructor("$ZodCheckMimeType", (inst, def) => {
	$ZodCheck.init(inst, def);
	const mimeSet = new Set(def.mime);
	inst._zod.onattach.push((inst) => {
		inst._zod.bag.mime = def.mime;
	});
	inst._zod.check = (payload) => {
		if (mimeSet.has(payload.value.type)) return;
		payload.issues.push({
			code: "invalid_value",
			values: def.mime,
			input: payload.value.type,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckOverwrite = /* @__PURE__ */ $constructor("$ZodCheckOverwrite", (inst, def) => {
	$ZodCheck.init(inst, def);
	inst._zod.check = (payload) => {
		payload.value = def.tx(payload.value);
	};
});
//#endregion
//#region node_modules/zod/v4/core/doc.js
var Doc = class {
	constructor(args = []) {
		this.content = [];
		this.indent = 0;
		if (this) this.args = args;
	}
	indented(fn) {
		this.indent += 1;
		fn(this);
		this.indent -= 1;
	}
	write(arg) {
		if (typeof arg === "function") {
			arg(this, { execution: "sync" });
			arg(this, { execution: "async" });
			return;
		}
		const lines = arg.split("\n").filter((x) => x);
		const minIndent = Math.min(...lines.map((x) => x.length - x.trimStart().length));
		const dedented = lines.map((x) => x.slice(minIndent)).map((x) => " ".repeat(this.indent * 2) + x);
		for (const line of dedented) this.content.push(line);
	}
	compile() {
		const F = Function;
		const args = this?.args;
		const lines = [...(this?.content ?? [``]).map((x) => `  ${x}`)];
		return new F(...args, lines.join("\n"));
	}
};
//#endregion
//#region node_modules/zod/v4/core/versions.js
var version = {
	major: 4,
	minor: 3,
	patch: 6
};
//#endregion
//#region node_modules/zod/v4/core/schemas.js
var $ZodType = /* @__PURE__ */ $constructor("$ZodType", (inst, def) => {
	var _a;
	inst ?? (inst = {});
	inst._zod.def = def;
	inst._zod.bag = inst._zod.bag || {};
	inst._zod.version = version;
	const checks = [...inst._zod.def.checks ?? []];
	if (inst._zod.traits.has("$ZodCheck")) checks.unshift(inst);
	for (const ch of checks) for (const fn of ch._zod.onattach) fn(inst);
	if (checks.length === 0) {
		(_a = inst._zod).deferred ?? (_a.deferred = []);
		inst._zod.deferred?.push(() => {
			inst._zod.run = inst._zod.parse;
		});
	} else {
		const runChecks = (payload, checks, ctx) => {
			let isAborted = aborted(payload);
			let asyncResult;
			for (const ch of checks) {
				if (ch._zod.def.when) {
					if (!ch._zod.def.when(payload)) continue;
				} else if (isAborted) continue;
				const currLen = payload.issues.length;
				const _ = ch._zod.check(payload);
				if (_ instanceof Promise && ctx?.async === false) throw new $ZodAsyncError();
				if (asyncResult || _ instanceof Promise) asyncResult = (asyncResult ?? Promise.resolve()).then(async () => {
					await _;
					if (payload.issues.length === currLen) return;
					if (!isAborted) isAborted = aborted(payload, currLen);
				});
				else {
					if (payload.issues.length === currLen) continue;
					if (!isAborted) isAborted = aborted(payload, currLen);
				}
			}
			if (asyncResult) return asyncResult.then(() => {
				return payload;
			});
			return payload;
		};
		const handleCanaryResult = (canary, payload, ctx) => {
			if (aborted(canary)) {
				canary.aborted = true;
				return canary;
			}
			const checkResult = runChecks(payload, checks, ctx);
			if (checkResult instanceof Promise) {
				if (ctx.async === false) throw new $ZodAsyncError();
				return checkResult.then((checkResult) => inst._zod.parse(checkResult, ctx));
			}
			return inst._zod.parse(checkResult, ctx);
		};
		inst._zod.run = (payload, ctx) => {
			if (ctx.skipChecks) return inst._zod.parse(payload, ctx);
			if (ctx.direction === "backward") {
				const canary = inst._zod.parse({
					value: payload.value,
					issues: []
				}, {
					...ctx,
					skipChecks: true
				});
				if (canary instanceof Promise) return canary.then((canary) => {
					return handleCanaryResult(canary, payload, ctx);
				});
				return handleCanaryResult(canary, payload, ctx);
			}
			const result = inst._zod.parse(payload, ctx);
			if (result instanceof Promise) {
				if (ctx.async === false) throw new $ZodAsyncError();
				return result.then((result) => runChecks(result, checks, ctx));
			}
			return runChecks(result, checks, ctx);
		};
	}
	defineLazy(inst, "~standard", () => ({
		validate: (value) => {
			try {
				const r = safeParse$1(inst, value);
				return r.success ? { value: r.data } : { issues: r.error?.issues };
			} catch (_) {
				return safeParseAsync$1(inst, value).then((r) => r.success ? { value: r.data } : { issues: r.error?.issues });
			}
		},
		vendor: "zod",
		version: 1
	}));
});
var $ZodString = /* @__PURE__ */ $constructor("$ZodString", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.pattern = [...inst?._zod.bag?.patterns ?? []].pop() ?? string$1(inst._zod.bag);
	inst._zod.parse = (payload, _) => {
		if (def.coerce) try {
			payload.value = String(payload.value);
		} catch (_) {}
		if (typeof payload.value === "string") return payload;
		payload.issues.push({
			expected: "string",
			code: "invalid_type",
			input: payload.value,
			inst
		});
		return payload;
	};
});
var $ZodStringFormat = /* @__PURE__ */ $constructor("$ZodStringFormat", (inst, def) => {
	$ZodCheckStringFormat.init(inst, def);
	$ZodString.init(inst, def);
});
var $ZodGUID = /* @__PURE__ */ $constructor("$ZodGUID", (inst, def) => {
	def.pattern ?? (def.pattern = guid$1);
	$ZodStringFormat.init(inst, def);
});
var $ZodUUID = /* @__PURE__ */ $constructor("$ZodUUID", (inst, def) => {
	if (def.version) {
		const v = {
			v1: 1,
			v2: 2,
			v3: 3,
			v4: 4,
			v5: 5,
			v6: 6,
			v7: 7,
			v8: 8
		}[def.version];
		if (v === void 0) throw new Error(`Invalid UUID version: "${def.version}"`);
		def.pattern ?? (def.pattern = uuid$1(v));
	} else def.pattern ?? (def.pattern = uuid$1());
	$ZodStringFormat.init(inst, def);
});
var $ZodEmail = /* @__PURE__ */ $constructor("$ZodEmail", (inst, def) => {
	def.pattern ?? (def.pattern = email$1);
	$ZodStringFormat.init(inst, def);
});
var $ZodURL = /* @__PURE__ */ $constructor("$ZodURL", (inst, def) => {
	$ZodStringFormat.init(inst, def);
	inst._zod.check = (payload) => {
		try {
			const trimmed = payload.value.trim();
			const url = new URL(trimmed);
			if (def.hostname) {
				def.hostname.lastIndex = 0;
				if (!def.hostname.test(url.hostname)) payload.issues.push({
					code: "invalid_format",
					format: "url",
					note: "Invalid hostname",
					pattern: def.hostname.source,
					input: payload.value,
					inst,
					continue: !def.abort
				});
			}
			if (def.protocol) {
				def.protocol.lastIndex = 0;
				if (!def.protocol.test(url.protocol.endsWith(":") ? url.protocol.slice(0, -1) : url.protocol)) payload.issues.push({
					code: "invalid_format",
					format: "url",
					note: "Invalid protocol",
					pattern: def.protocol.source,
					input: payload.value,
					inst,
					continue: !def.abort
				});
			}
			if (def.normalize) payload.value = url.href;
			else payload.value = trimmed;
			return;
		} catch (_) {
			payload.issues.push({
				code: "invalid_format",
				format: "url",
				input: payload.value,
				inst,
				continue: !def.abort
			});
		}
	};
});
var $ZodEmoji = /* @__PURE__ */ $constructor("$ZodEmoji", (inst, def) => {
	def.pattern ?? (def.pattern = emoji$1());
	$ZodStringFormat.init(inst, def);
});
var $ZodNanoID = /* @__PURE__ */ $constructor("$ZodNanoID", (inst, def) => {
	def.pattern ?? (def.pattern = nanoid$1);
	$ZodStringFormat.init(inst, def);
});
var $ZodCUID = /* @__PURE__ */ $constructor("$ZodCUID", (inst, def) => {
	def.pattern ?? (def.pattern = cuid$1);
	$ZodStringFormat.init(inst, def);
});
var $ZodCUID2 = /* @__PURE__ */ $constructor("$ZodCUID2", (inst, def) => {
	def.pattern ?? (def.pattern = cuid2$1);
	$ZodStringFormat.init(inst, def);
});
var $ZodULID = /* @__PURE__ */ $constructor("$ZodULID", (inst, def) => {
	def.pattern ?? (def.pattern = ulid$1);
	$ZodStringFormat.init(inst, def);
});
var $ZodXID = /* @__PURE__ */ $constructor("$ZodXID", (inst, def) => {
	def.pattern ?? (def.pattern = xid$1);
	$ZodStringFormat.init(inst, def);
});
var $ZodKSUID = /* @__PURE__ */ $constructor("$ZodKSUID", (inst, def) => {
	def.pattern ?? (def.pattern = ksuid$1);
	$ZodStringFormat.init(inst, def);
});
var $ZodISODateTime = /* @__PURE__ */ $constructor("$ZodISODateTime", (inst, def) => {
	def.pattern ?? (def.pattern = datetime$1(def));
	$ZodStringFormat.init(inst, def);
});
var $ZodISODate = /* @__PURE__ */ $constructor("$ZodISODate", (inst, def) => {
	def.pattern ?? (def.pattern = date$2);
	$ZodStringFormat.init(inst, def);
});
var $ZodISOTime = /* @__PURE__ */ $constructor("$ZodISOTime", (inst, def) => {
	def.pattern ?? (def.pattern = time$1(def));
	$ZodStringFormat.init(inst, def);
});
var $ZodISODuration = /* @__PURE__ */ $constructor("$ZodISODuration", (inst, def) => {
	def.pattern ?? (def.pattern = duration$1);
	$ZodStringFormat.init(inst, def);
});
var $ZodIPv4 = /* @__PURE__ */ $constructor("$ZodIPv4", (inst, def) => {
	def.pattern ?? (def.pattern = ipv4$1);
	$ZodStringFormat.init(inst, def);
	inst._zod.bag.format = `ipv4`;
});
var $ZodIPv6 = /* @__PURE__ */ $constructor("$ZodIPv6", (inst, def) => {
	def.pattern ?? (def.pattern = ipv6$1);
	$ZodStringFormat.init(inst, def);
	inst._zod.bag.format = `ipv6`;
	inst._zod.check = (payload) => {
		try {
			new URL(`http://[${payload.value}]`);
		} catch {
			payload.issues.push({
				code: "invalid_format",
				format: "ipv6",
				input: payload.value,
				inst,
				continue: !def.abort
			});
		}
	};
});
var $ZodMAC = /* @__PURE__ */ $constructor("$ZodMAC", (inst, def) => {
	def.pattern ?? (def.pattern = mac$1(def.delimiter));
	$ZodStringFormat.init(inst, def);
	inst._zod.bag.format = `mac`;
});
var $ZodCIDRv4 = /* @__PURE__ */ $constructor("$ZodCIDRv4", (inst, def) => {
	def.pattern ?? (def.pattern = cidrv4$1);
	$ZodStringFormat.init(inst, def);
});
var $ZodCIDRv6 = /* @__PURE__ */ $constructor("$ZodCIDRv6", (inst, def) => {
	def.pattern ?? (def.pattern = cidrv6$1);
	$ZodStringFormat.init(inst, def);
	inst._zod.check = (payload) => {
		const parts = payload.value.split("/");
		try {
			if (parts.length !== 2) throw new Error();
			const [address, prefix] = parts;
			if (!prefix) throw new Error();
			const prefixNum = Number(prefix);
			if (`${prefixNum}` !== prefix) throw new Error();
			if (prefixNum < 0 || prefixNum > 128) throw new Error();
			new URL(`http://[${address}]`);
		} catch {
			payload.issues.push({
				code: "invalid_format",
				format: "cidrv6",
				input: payload.value,
				inst,
				continue: !def.abort
			});
		}
	};
});
function isValidBase64(data) {
	if (data === "") return true;
	if (data.length % 4 !== 0) return false;
	try {
		atob(data);
		return true;
	} catch {
		return false;
	}
}
var $ZodBase64 = /* @__PURE__ */ $constructor("$ZodBase64", (inst, def) => {
	def.pattern ?? (def.pattern = base64$1);
	$ZodStringFormat.init(inst, def);
	inst._zod.bag.contentEncoding = "base64";
	inst._zod.check = (payload) => {
		if (isValidBase64(payload.value)) return;
		payload.issues.push({
			code: "invalid_format",
			format: "base64",
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
function isValidBase64URL(data) {
	if (!base64url$1.test(data)) return false;
	const base64 = data.replace(/[-_]/g, (c) => c === "-" ? "+" : "/");
	return isValidBase64(base64.padEnd(Math.ceil(base64.length / 4) * 4, "="));
}
var $ZodBase64URL = /* @__PURE__ */ $constructor("$ZodBase64URL", (inst, def) => {
	def.pattern ?? (def.pattern = base64url$1);
	$ZodStringFormat.init(inst, def);
	inst._zod.bag.contentEncoding = "base64url";
	inst._zod.check = (payload) => {
		if (isValidBase64URL(payload.value)) return;
		payload.issues.push({
			code: "invalid_format",
			format: "base64url",
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodE164 = /* @__PURE__ */ $constructor("$ZodE164", (inst, def) => {
	def.pattern ?? (def.pattern = e164$1);
	$ZodStringFormat.init(inst, def);
});
function isValidJWT$1(token, algorithm = null) {
	try {
		const tokensParts = token.split(".");
		if (tokensParts.length !== 3) return false;
		const [header] = tokensParts;
		if (!header) return false;
		const parsedHeader = JSON.parse(atob(header));
		if ("typ" in parsedHeader && parsedHeader?.typ !== "JWT") return false;
		if (!parsedHeader.alg) return false;
		if (algorithm && (!("alg" in parsedHeader) || parsedHeader.alg !== algorithm)) return false;
		return true;
	} catch {
		return false;
	}
}
var $ZodJWT = /* @__PURE__ */ $constructor("$ZodJWT", (inst, def) => {
	$ZodStringFormat.init(inst, def);
	inst._zod.check = (payload) => {
		if (isValidJWT$1(payload.value, def.alg)) return;
		payload.issues.push({
			code: "invalid_format",
			format: "jwt",
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCustomStringFormat = /* @__PURE__ */ $constructor("$ZodCustomStringFormat", (inst, def) => {
	$ZodStringFormat.init(inst, def);
	inst._zod.check = (payload) => {
		if (def.fn(payload.value)) return;
		payload.issues.push({
			code: "invalid_format",
			format: def.format,
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodNumber = /* @__PURE__ */ $constructor("$ZodNumber", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.pattern = inst._zod.bag.pattern ?? number$1;
	inst._zod.parse = (payload, _ctx) => {
		if (def.coerce) try {
			payload.value = Number(payload.value);
		} catch (_) {}
		const input = payload.value;
		if (typeof input === "number" && !Number.isNaN(input) && Number.isFinite(input)) return payload;
		const received = typeof input === "number" ? Number.isNaN(input) ? "NaN" : !Number.isFinite(input) ? "Infinity" : void 0 : void 0;
		payload.issues.push({
			expected: "number",
			code: "invalid_type",
			input,
			inst,
			...received ? { received } : {}
		});
		return payload;
	};
});
var $ZodNumberFormat = /* @__PURE__ */ $constructor("$ZodNumberFormat", (inst, def) => {
	$ZodCheckNumberFormat.init(inst, def);
	$ZodNumber.init(inst, def);
});
var $ZodBoolean = /* @__PURE__ */ $constructor("$ZodBoolean", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.pattern = boolean$1;
	inst._zod.parse = (payload, _ctx) => {
		if (def.coerce) try {
			payload.value = Boolean(payload.value);
		} catch (_) {}
		const input = payload.value;
		if (typeof input === "boolean") return payload;
		payload.issues.push({
			expected: "boolean",
			code: "invalid_type",
			input,
			inst
		});
		return payload;
	};
});
var $ZodBigInt = /* @__PURE__ */ $constructor("$ZodBigInt", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.pattern = bigint$1;
	inst._zod.parse = (payload, _ctx) => {
		if (def.coerce) try {
			payload.value = BigInt(payload.value);
		} catch (_) {}
		if (typeof payload.value === "bigint") return payload;
		payload.issues.push({
			expected: "bigint",
			code: "invalid_type",
			input: payload.value,
			inst
		});
		return payload;
	};
});
var $ZodBigIntFormat = /* @__PURE__ */ $constructor("$ZodBigIntFormat", (inst, def) => {
	$ZodCheckBigIntFormat.init(inst, def);
	$ZodBigInt.init(inst, def);
});
var $ZodSymbol = /* @__PURE__ */ $constructor("$ZodSymbol", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, _ctx) => {
		const input = payload.value;
		if (typeof input === "symbol") return payload;
		payload.issues.push({
			expected: "symbol",
			code: "invalid_type",
			input,
			inst
		});
		return payload;
	};
});
var $ZodUndefined = /* @__PURE__ */ $constructor("$ZodUndefined", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.pattern = _undefined$2;
	inst._zod.values = new Set([void 0]);
	inst._zod.optin = "optional";
	inst._zod.optout = "optional";
	inst._zod.parse = (payload, _ctx) => {
		const input = payload.value;
		if (typeof input === "undefined") return payload;
		payload.issues.push({
			expected: "undefined",
			code: "invalid_type",
			input,
			inst
		});
		return payload;
	};
});
var $ZodNull = /* @__PURE__ */ $constructor("$ZodNull", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.pattern = _null$2;
	inst._zod.values = new Set([null]);
	inst._zod.parse = (payload, _ctx) => {
		const input = payload.value;
		if (input === null) return payload;
		payload.issues.push({
			expected: "null",
			code: "invalid_type",
			input,
			inst
		});
		return payload;
	};
});
var $ZodAny = /* @__PURE__ */ $constructor("$ZodAny", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload) => payload;
});
var $ZodUnknown = /* @__PURE__ */ $constructor("$ZodUnknown", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload) => payload;
});
var $ZodNever = /* @__PURE__ */ $constructor("$ZodNever", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, _ctx) => {
		payload.issues.push({
			expected: "never",
			code: "invalid_type",
			input: payload.value,
			inst
		});
		return payload;
	};
});
var $ZodVoid = /* @__PURE__ */ $constructor("$ZodVoid", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, _ctx) => {
		const input = payload.value;
		if (typeof input === "undefined") return payload;
		payload.issues.push({
			expected: "void",
			code: "invalid_type",
			input,
			inst
		});
		return payload;
	};
});
var $ZodDate = /* @__PURE__ */ $constructor("$ZodDate", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, _ctx) => {
		if (def.coerce) try {
			payload.value = new Date(payload.value);
		} catch (_err) {}
		const input = payload.value;
		const isDate = input instanceof Date;
		if (isDate && !Number.isNaN(input.getTime())) return payload;
		payload.issues.push({
			expected: "date",
			code: "invalid_type",
			input,
			...isDate ? { received: "Invalid Date" } : {},
			inst
		});
		return payload;
	};
});
function handleArrayResult(result, final, index) {
	if (result.issues.length) final.issues.push(...prefixIssues(index, result.issues));
	final.value[index] = result.value;
}
var $ZodArray = /* @__PURE__ */ $constructor("$ZodArray", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, ctx) => {
		const input = payload.value;
		if (!Array.isArray(input)) {
			payload.issues.push({
				expected: "array",
				code: "invalid_type",
				input,
				inst
			});
			return payload;
		}
		payload.value = Array(input.length);
		const proms = [];
		for (let i = 0; i < input.length; i++) {
			const item = input[i];
			const result = def.element._zod.run({
				value: item,
				issues: []
			}, ctx);
			if (result instanceof Promise) proms.push(result.then((result) => handleArrayResult(result, payload, i)));
			else handleArrayResult(result, payload, i);
		}
		if (proms.length) return Promise.all(proms).then(() => payload);
		return payload;
	};
});
function handlePropertyResult(result, final, key, input, isOptionalOut) {
	if (result.issues.length) {
		if (isOptionalOut && !(key in input)) return;
		final.issues.push(...prefixIssues(key, result.issues));
	}
	if (result.value === void 0) {
		if (key in input) final.value[key] = void 0;
	} else final.value[key] = result.value;
}
function normalizeDef(def) {
	const keys = Object.keys(def.shape);
	for (const k of keys) if (!def.shape?.[k]?._zod?.traits?.has("$ZodType")) throw new Error(`Invalid element at key "${k}": expected a Zod schema`);
	const okeys = optionalKeys(def.shape);
	return {
		...def,
		keys,
		keySet: new Set(keys),
		numKeys: keys.length,
		optionalKeys: new Set(okeys)
	};
}
function handleCatchall(proms, input, payload, ctx, def, inst) {
	const unrecognized = [];
	const keySet = def.keySet;
	const _catchall = def.catchall._zod;
	const t = _catchall.def.type;
	const isOptionalOut = _catchall.optout === "optional";
	for (const key in input) {
		if (keySet.has(key)) continue;
		if (t === "never") {
			unrecognized.push(key);
			continue;
		}
		const r = _catchall.run({
			value: input[key],
			issues: []
		}, ctx);
		if (r instanceof Promise) proms.push(r.then((r) => handlePropertyResult(r, payload, key, input, isOptionalOut)));
		else handlePropertyResult(r, payload, key, input, isOptionalOut);
	}
	if (unrecognized.length) payload.issues.push({
		code: "unrecognized_keys",
		keys: unrecognized,
		input,
		inst
	});
	if (!proms.length) return payload;
	return Promise.all(proms).then(() => {
		return payload;
	});
}
var $ZodObject = /* @__PURE__ */ $constructor("$ZodObject", (inst, def) => {
	$ZodType.init(inst, def);
	if (!Object.getOwnPropertyDescriptor(def, "shape")?.get) {
		const sh = def.shape;
		Object.defineProperty(def, "shape", { get: () => {
			const newSh = { ...sh };
			Object.defineProperty(def, "shape", { value: newSh });
			return newSh;
		} });
	}
	const _normalized = cached(() => normalizeDef(def));
	defineLazy(inst._zod, "propValues", () => {
		const shape = def.shape;
		const propValues = {};
		for (const key in shape) {
			const field = shape[key]._zod;
			if (field.values) {
				propValues[key] ?? (propValues[key] = /* @__PURE__ */ new Set());
				for (const v of field.values) propValues[key].add(v);
			}
		}
		return propValues;
	});
	const isObject$2 = isObject;
	const catchall = def.catchall;
	let value;
	inst._zod.parse = (payload, ctx) => {
		value ?? (value = _normalized.value);
		const input = payload.value;
		if (!isObject$2(input)) {
			payload.issues.push({
				expected: "object",
				code: "invalid_type",
				input,
				inst
			});
			return payload;
		}
		payload.value = {};
		const proms = [];
		const shape = value.shape;
		for (const key of value.keys) {
			const el = shape[key];
			const isOptionalOut = el._zod.optout === "optional";
			const r = el._zod.run({
				value: input[key],
				issues: []
			}, ctx);
			if (r instanceof Promise) proms.push(r.then((r) => handlePropertyResult(r, payload, key, input, isOptionalOut)));
			else handlePropertyResult(r, payload, key, input, isOptionalOut);
		}
		if (!catchall) return proms.length ? Promise.all(proms).then(() => payload) : payload;
		return handleCatchall(proms, input, payload, ctx, _normalized.value, inst);
	};
});
var $ZodObjectJIT = /* @__PURE__ */ $constructor("$ZodObjectJIT", (inst, def) => {
	$ZodObject.init(inst, def);
	const superParse = inst._zod.parse;
	const _normalized = cached(() => normalizeDef(def));
	const generateFastpass = (shape) => {
		const doc = new Doc([
			"shape",
			"payload",
			"ctx"
		]);
		const normalized = _normalized.value;
		const parseStr = (key) => {
			const k = esc(key);
			return `shape[${k}]._zod.run({ value: input[${k}], issues: [] }, ctx)`;
		};
		doc.write(`const input = payload.value;`);
		const ids = Object.create(null);
		let counter = 0;
		for (const key of normalized.keys) ids[key] = `key_${counter++}`;
		doc.write(`const newResult = {};`);
		for (const key of normalized.keys) {
			const id = ids[key];
			const k = esc(key);
			const isOptionalOut = shape[key]?._zod?.optout === "optional";
			doc.write(`const ${id} = ${parseStr(key)};`);
			if (isOptionalOut) doc.write(`
        if (${id}.issues.length) {
          if (${k} in input) {
            payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${k}, ...iss.path] : [${k}]
            })));
          }
        }
        
        if (${id}.value === undefined) {
          if (${k} in input) {
            newResult[${k}] = undefined;
          }
        } else {
          newResult[${k}] = ${id}.value;
        }
        
      `);
			else doc.write(`
        if (${id}.issues.length) {
          payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${k}, ...iss.path] : [${k}]
          })));
        }
        
        if (${id}.value === undefined) {
          if (${k} in input) {
            newResult[${k}] = undefined;
          }
        } else {
          newResult[${k}] = ${id}.value;
        }
        
      `);
		}
		doc.write(`payload.value = newResult;`);
		doc.write(`return payload;`);
		const fn = doc.compile();
		return (payload, ctx) => fn(shape, payload, ctx);
	};
	let fastpass;
	const isObject$1 = isObject;
	const jit = !globalConfig.jitless;
	const fastEnabled = jit && allowsEval.value;
	const catchall = def.catchall;
	let value;
	inst._zod.parse = (payload, ctx) => {
		value ?? (value = _normalized.value);
		const input = payload.value;
		if (!isObject$1(input)) {
			payload.issues.push({
				expected: "object",
				code: "invalid_type",
				input,
				inst
			});
			return payload;
		}
		if (jit && fastEnabled && ctx?.async === false && ctx.jitless !== true) {
			if (!fastpass) fastpass = generateFastpass(def.shape);
			payload = fastpass(payload, ctx);
			if (!catchall) return payload;
			return handleCatchall([], input, payload, ctx, value, inst);
		}
		return superParse(payload, ctx);
	};
});
function handleUnionResults(results, final, inst, ctx) {
	for (const result of results) if (result.issues.length === 0) {
		final.value = result.value;
		return final;
	}
	const nonaborted = results.filter((r) => !aborted(r));
	if (nonaborted.length === 1) {
		final.value = nonaborted[0].value;
		return nonaborted[0];
	}
	final.issues.push({
		code: "invalid_union",
		input: final.value,
		inst,
		errors: results.map((result) => result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
	});
	return final;
}
var $ZodUnion = /* @__PURE__ */ $constructor("$ZodUnion", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazy(inst._zod, "optin", () => def.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0);
	defineLazy(inst._zod, "optout", () => def.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0);
	defineLazy(inst._zod, "values", () => {
		if (def.options.every((o) => o._zod.values)) return new Set(def.options.flatMap((option) => Array.from(option._zod.values)));
	});
	defineLazy(inst._zod, "pattern", () => {
		if (def.options.every((o) => o._zod.pattern)) {
			const patterns = def.options.map((o) => o._zod.pattern);
			return new RegExp(`^(${patterns.map((p) => cleanRegex(p.source)).join("|")})$`);
		}
	});
	const single = def.options.length === 1;
	const first = def.options[0]._zod.run;
	inst._zod.parse = (payload, ctx) => {
		if (single) return first(payload, ctx);
		let async = false;
		const results = [];
		for (const option of def.options) {
			const result = option._zod.run({
				value: payload.value,
				issues: []
			}, ctx);
			if (result instanceof Promise) {
				results.push(result);
				async = true;
			} else {
				if (result.issues.length === 0) return result;
				results.push(result);
			}
		}
		if (!async) return handleUnionResults(results, payload, inst, ctx);
		return Promise.all(results).then((results) => {
			return handleUnionResults(results, payload, inst, ctx);
		});
	};
});
function handleExclusiveUnionResults(results, final, inst, ctx) {
	const successes = results.filter((r) => r.issues.length === 0);
	if (successes.length === 1) {
		final.value = successes[0].value;
		return final;
	}
	if (successes.length === 0) final.issues.push({
		code: "invalid_union",
		input: final.value,
		inst,
		errors: results.map((result) => result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
	});
	else final.issues.push({
		code: "invalid_union",
		input: final.value,
		inst,
		errors: [],
		inclusive: false
	});
	return final;
}
var $ZodXor = /* @__PURE__ */ $constructor("$ZodXor", (inst, def) => {
	$ZodUnion.init(inst, def);
	def.inclusive = false;
	const single = def.options.length === 1;
	const first = def.options[0]._zod.run;
	inst._zod.parse = (payload, ctx) => {
		if (single) return first(payload, ctx);
		let async = false;
		const results = [];
		for (const option of def.options) {
			const result = option._zod.run({
				value: payload.value,
				issues: []
			}, ctx);
			if (result instanceof Promise) {
				results.push(result);
				async = true;
			} else results.push(result);
		}
		if (!async) return handleExclusiveUnionResults(results, payload, inst, ctx);
		return Promise.all(results).then((results) => {
			return handleExclusiveUnionResults(results, payload, inst, ctx);
		});
	};
});
var $ZodDiscriminatedUnion = /* @__PURE__ */ $constructor("$ZodDiscriminatedUnion", (inst, def) => {
	def.inclusive = false;
	$ZodUnion.init(inst, def);
	const _super = inst._zod.parse;
	defineLazy(inst._zod, "propValues", () => {
		const propValues = {};
		for (const option of def.options) {
			const pv = option._zod.propValues;
			if (!pv || Object.keys(pv).length === 0) throw new Error(`Invalid discriminated union option at index "${def.options.indexOf(option)}"`);
			for (const [k, v] of Object.entries(pv)) {
				if (!propValues[k]) propValues[k] = /* @__PURE__ */ new Set();
				for (const val of v) propValues[k].add(val);
			}
		}
		return propValues;
	});
	const disc = cached(() => {
		const opts = def.options;
		const map = /* @__PURE__ */ new Map();
		for (const o of opts) {
			const values = o._zod.propValues?.[def.discriminator];
			if (!values || values.size === 0) throw new Error(`Invalid discriminated union option at index "${def.options.indexOf(o)}"`);
			for (const v of values) {
				if (map.has(v)) throw new Error(`Duplicate discriminator value "${String(v)}"`);
				map.set(v, o);
			}
		}
		return map;
	});
	inst._zod.parse = (payload, ctx) => {
		const input = payload.value;
		if (!isObject(input)) {
			payload.issues.push({
				code: "invalid_type",
				expected: "object",
				input,
				inst
			});
			return payload;
		}
		const opt = disc.value.get(input?.[def.discriminator]);
		if (opt) return opt._zod.run(payload, ctx);
		if (def.unionFallback) return _super(payload, ctx);
		payload.issues.push({
			code: "invalid_union",
			errors: [],
			note: "No matching discriminator",
			discriminator: def.discriminator,
			input,
			path: [def.discriminator],
			inst
		});
		return payload;
	};
});
var $ZodIntersection = /* @__PURE__ */ $constructor("$ZodIntersection", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, ctx) => {
		const input = payload.value;
		const left = def.left._zod.run({
			value: input,
			issues: []
		}, ctx);
		const right = def.right._zod.run({
			value: input,
			issues: []
		}, ctx);
		if (left instanceof Promise || right instanceof Promise) return Promise.all([left, right]).then(([left, right]) => {
			return handleIntersectionResults(payload, left, right);
		});
		return handleIntersectionResults(payload, left, right);
	};
});
function mergeValues$1(a, b) {
	if (a === b) return {
		valid: true,
		data: a
	};
	if (a instanceof Date && b instanceof Date && +a === +b) return {
		valid: true,
		data: a
	};
	if (isPlainObject(a) && isPlainObject(b)) {
		const bKeys = Object.keys(b);
		const sharedKeys = Object.keys(a).filter((key) => bKeys.indexOf(key) !== -1);
		const newObj = {
			...a,
			...b
		};
		for (const key of sharedKeys) {
			const sharedValue = mergeValues$1(a[key], b[key]);
			if (!sharedValue.valid) return {
				valid: false,
				mergeErrorPath: [key, ...sharedValue.mergeErrorPath]
			};
			newObj[key] = sharedValue.data;
		}
		return {
			valid: true,
			data: newObj
		};
	}
	if (Array.isArray(a) && Array.isArray(b)) {
		if (a.length !== b.length) return {
			valid: false,
			mergeErrorPath: []
		};
		const newArray = [];
		for (let index = 0; index < a.length; index++) {
			const itemA = a[index];
			const itemB = b[index];
			const sharedValue = mergeValues$1(itemA, itemB);
			if (!sharedValue.valid) return {
				valid: false,
				mergeErrorPath: [index, ...sharedValue.mergeErrorPath]
			};
			newArray.push(sharedValue.data);
		}
		return {
			valid: true,
			data: newArray
		};
	}
	return {
		valid: false,
		mergeErrorPath: []
	};
}
function handleIntersectionResults(result, left, right) {
	const unrecKeys = /* @__PURE__ */ new Map();
	let unrecIssue;
	for (const iss of left.issues) if (iss.code === "unrecognized_keys") {
		unrecIssue ?? (unrecIssue = iss);
		for (const k of iss.keys) {
			if (!unrecKeys.has(k)) unrecKeys.set(k, {});
			unrecKeys.get(k).l = true;
		}
	} else result.issues.push(iss);
	for (const iss of right.issues) if (iss.code === "unrecognized_keys") for (const k of iss.keys) {
		if (!unrecKeys.has(k)) unrecKeys.set(k, {});
		unrecKeys.get(k).r = true;
	}
	else result.issues.push(iss);
	const bothKeys = [...unrecKeys].filter(([, f]) => f.l && f.r).map(([k]) => k);
	if (bothKeys.length && unrecIssue) result.issues.push({
		...unrecIssue,
		keys: bothKeys
	});
	if (aborted(result)) return result;
	const merged = mergeValues$1(left.value, right.value);
	if (!merged.valid) throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(merged.mergeErrorPath)}`);
	result.value = merged.data;
	return result;
}
var $ZodTuple = /* @__PURE__ */ $constructor("$ZodTuple", (inst, def) => {
	$ZodType.init(inst, def);
	const items = def.items;
	inst._zod.parse = (payload, ctx) => {
		const input = payload.value;
		if (!Array.isArray(input)) {
			payload.issues.push({
				input,
				inst,
				expected: "tuple",
				code: "invalid_type"
			});
			return payload;
		}
		payload.value = [];
		const proms = [];
		const reversedIndex = [...items].reverse().findIndex((item) => item._zod.optin !== "optional");
		const optStart = reversedIndex === -1 ? 0 : items.length - reversedIndex;
		if (!def.rest) {
			const tooBig = input.length > items.length;
			const tooSmall = input.length < optStart - 1;
			if (tooBig || tooSmall) {
				payload.issues.push({
					...tooBig ? {
						code: "too_big",
						maximum: items.length,
						inclusive: true
					} : {
						code: "too_small",
						minimum: items.length
					},
					input,
					inst,
					origin: "array"
				});
				return payload;
			}
		}
		let i = -1;
		for (const item of items) {
			i++;
			if (i >= input.length) {
				if (i >= optStart) continue;
			}
			const result = item._zod.run({
				value: input[i],
				issues: []
			}, ctx);
			if (result instanceof Promise) proms.push(result.then((result) => handleTupleResult(result, payload, i)));
			else handleTupleResult(result, payload, i);
		}
		if (def.rest) {
			const rest = input.slice(items.length);
			for (const el of rest) {
				i++;
				const result = def.rest._zod.run({
					value: el,
					issues: []
				}, ctx);
				if (result instanceof Promise) proms.push(result.then((result) => handleTupleResult(result, payload, i)));
				else handleTupleResult(result, payload, i);
			}
		}
		if (proms.length) return Promise.all(proms).then(() => payload);
		return payload;
	};
});
function handleTupleResult(result, final, index) {
	if (result.issues.length) final.issues.push(...prefixIssues(index, result.issues));
	final.value[index] = result.value;
}
var $ZodRecord = /* @__PURE__ */ $constructor("$ZodRecord", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, ctx) => {
		const input = payload.value;
		if (!isPlainObject(input)) {
			payload.issues.push({
				expected: "record",
				code: "invalid_type",
				input,
				inst
			});
			return payload;
		}
		const proms = [];
		const values = def.keyType._zod.values;
		if (values) {
			payload.value = {};
			const recordKeys = /* @__PURE__ */ new Set();
			for (const key of values) if (typeof key === "string" || typeof key === "number" || typeof key === "symbol") {
				recordKeys.add(typeof key === "number" ? key.toString() : key);
				const result = def.valueType._zod.run({
					value: input[key],
					issues: []
				}, ctx);
				if (result instanceof Promise) proms.push(result.then((result) => {
					if (result.issues.length) payload.issues.push(...prefixIssues(key, result.issues));
					payload.value[key] = result.value;
				}));
				else {
					if (result.issues.length) payload.issues.push(...prefixIssues(key, result.issues));
					payload.value[key] = result.value;
				}
			}
			let unrecognized;
			for (const key in input) if (!recordKeys.has(key)) {
				unrecognized = unrecognized ?? [];
				unrecognized.push(key);
			}
			if (unrecognized && unrecognized.length > 0) payload.issues.push({
				code: "unrecognized_keys",
				input,
				inst,
				keys: unrecognized
			});
		} else {
			payload.value = {};
			for (const key of Reflect.ownKeys(input)) {
				if (key === "__proto__") continue;
				let keyResult = def.keyType._zod.run({
					value: key,
					issues: []
				}, ctx);
				if (keyResult instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
				if (typeof key === "string" && number$1.test(key) && keyResult.issues.length) {
					const retryResult = def.keyType._zod.run({
						value: Number(key),
						issues: []
					}, ctx);
					if (retryResult instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
					if (retryResult.issues.length === 0) keyResult = retryResult;
				}
				if (keyResult.issues.length) {
					if (def.mode === "loose") payload.value[key] = input[key];
					else payload.issues.push({
						code: "invalid_key",
						origin: "record",
						issues: keyResult.issues.map((iss) => finalizeIssue(iss, ctx, config())),
						input: key,
						path: [key],
						inst
					});
					continue;
				}
				const result = def.valueType._zod.run({
					value: input[key],
					issues: []
				}, ctx);
				if (result instanceof Promise) proms.push(result.then((result) => {
					if (result.issues.length) payload.issues.push(...prefixIssues(key, result.issues));
					payload.value[keyResult.value] = result.value;
				}));
				else {
					if (result.issues.length) payload.issues.push(...prefixIssues(key, result.issues));
					payload.value[keyResult.value] = result.value;
				}
			}
		}
		if (proms.length) return Promise.all(proms).then(() => payload);
		return payload;
	};
});
var $ZodMap = /* @__PURE__ */ $constructor("$ZodMap", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, ctx) => {
		const input = payload.value;
		if (!(input instanceof Map)) {
			payload.issues.push({
				expected: "map",
				code: "invalid_type",
				input,
				inst
			});
			return payload;
		}
		const proms = [];
		payload.value = /* @__PURE__ */ new Map();
		for (const [key, value] of input) {
			const keyResult = def.keyType._zod.run({
				value: key,
				issues: []
			}, ctx);
			const valueResult = def.valueType._zod.run({
				value,
				issues: []
			}, ctx);
			if (keyResult instanceof Promise || valueResult instanceof Promise) proms.push(Promise.all([keyResult, valueResult]).then(([keyResult, valueResult]) => {
				handleMapResult(keyResult, valueResult, payload, key, input, inst, ctx);
			}));
			else handleMapResult(keyResult, valueResult, payload, key, input, inst, ctx);
		}
		if (proms.length) return Promise.all(proms).then(() => payload);
		return payload;
	};
});
function handleMapResult(keyResult, valueResult, final, key, input, inst, ctx) {
	if (keyResult.issues.length) if (propertyKeyTypes.has(typeof key)) final.issues.push(...prefixIssues(key, keyResult.issues));
	else final.issues.push({
		code: "invalid_key",
		origin: "map",
		input,
		inst,
		issues: keyResult.issues.map((iss) => finalizeIssue(iss, ctx, config()))
	});
	if (valueResult.issues.length) if (propertyKeyTypes.has(typeof key)) final.issues.push(...prefixIssues(key, valueResult.issues));
	else final.issues.push({
		origin: "map",
		code: "invalid_element",
		input,
		inst,
		key,
		issues: valueResult.issues.map((iss) => finalizeIssue(iss, ctx, config()))
	});
	final.value.set(keyResult.value, valueResult.value);
}
var $ZodSet = /* @__PURE__ */ $constructor("$ZodSet", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, ctx) => {
		const input = payload.value;
		if (!(input instanceof Set)) {
			payload.issues.push({
				input,
				inst,
				expected: "set",
				code: "invalid_type"
			});
			return payload;
		}
		const proms = [];
		payload.value = /* @__PURE__ */ new Set();
		for (const item of input) {
			const result = def.valueType._zod.run({
				value: item,
				issues: []
			}, ctx);
			if (result instanceof Promise) proms.push(result.then((result) => handleSetResult(result, payload)));
			else handleSetResult(result, payload);
		}
		if (proms.length) return Promise.all(proms).then(() => payload);
		return payload;
	};
});
function handleSetResult(result, final) {
	if (result.issues.length) final.issues.push(...result.issues);
	final.value.add(result.value);
}
var $ZodEnum = /* @__PURE__ */ $constructor("$ZodEnum", (inst, def) => {
	$ZodType.init(inst, def);
	const values = getEnumValues(def.entries);
	const valuesSet = new Set(values);
	inst._zod.values = valuesSet;
	inst._zod.pattern = new RegExp(`^(${values.filter((k) => propertyKeyTypes.has(typeof k)).map((o) => typeof o === "string" ? escapeRegex(o) : o.toString()).join("|")})$`);
	inst._zod.parse = (payload, _ctx) => {
		const input = payload.value;
		if (valuesSet.has(input)) return payload;
		payload.issues.push({
			code: "invalid_value",
			values,
			input,
			inst
		});
		return payload;
	};
});
var $ZodLiteral = /* @__PURE__ */ $constructor("$ZodLiteral", (inst, def) => {
	$ZodType.init(inst, def);
	if (def.values.length === 0) throw new Error("Cannot create literal schema with no valid values");
	const values = new Set(def.values);
	inst._zod.values = values;
	inst._zod.pattern = new RegExp(`^(${def.values.map((o) => typeof o === "string" ? escapeRegex(o) : o ? escapeRegex(o.toString()) : String(o)).join("|")})$`);
	inst._zod.parse = (payload, _ctx) => {
		const input = payload.value;
		if (values.has(input)) return payload;
		payload.issues.push({
			code: "invalid_value",
			values: def.values,
			input,
			inst
		});
		return payload;
	};
});
var $ZodFile = /* @__PURE__ */ $constructor("$ZodFile", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, _ctx) => {
		const input = payload.value;
		if (input instanceof File) return payload;
		payload.issues.push({
			expected: "file",
			code: "invalid_type",
			input,
			inst
		});
		return payload;
	};
});
var $ZodTransform = /* @__PURE__ */ $constructor("$ZodTransform", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, ctx) => {
		if (ctx.direction === "backward") throw new $ZodEncodeError(inst.constructor.name);
		const _out = def.transform(payload.value, payload);
		if (ctx.async) return (_out instanceof Promise ? _out : Promise.resolve(_out)).then((output) => {
			payload.value = output;
			return payload;
		});
		if (_out instanceof Promise) throw new $ZodAsyncError();
		payload.value = _out;
		return payload;
	};
});
function handleOptionalResult(result, input) {
	if (result.issues.length && input === void 0) return {
		issues: [],
		value: void 0
	};
	return result;
}
var $ZodOptional = /* @__PURE__ */ $constructor("$ZodOptional", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.optin = "optional";
	inst._zod.optout = "optional";
	defineLazy(inst._zod, "values", () => {
		return def.innerType._zod.values ? new Set([...def.innerType._zod.values, void 0]) : void 0;
	});
	defineLazy(inst._zod, "pattern", () => {
		const pattern = def.innerType._zod.pattern;
		return pattern ? new RegExp(`^(${cleanRegex(pattern.source)})?$`) : void 0;
	});
	inst._zod.parse = (payload, ctx) => {
		if (def.innerType._zod.optin === "optional") {
			const result = def.innerType._zod.run(payload, ctx);
			if (result instanceof Promise) return result.then((r) => handleOptionalResult(r, payload.value));
			return handleOptionalResult(result, payload.value);
		}
		if (payload.value === void 0) return payload;
		return def.innerType._zod.run(payload, ctx);
	};
});
var $ZodExactOptional = /* @__PURE__ */ $constructor("$ZodExactOptional", (inst, def) => {
	$ZodOptional.init(inst, def);
	defineLazy(inst._zod, "values", () => def.innerType._zod.values);
	defineLazy(inst._zod, "pattern", () => def.innerType._zod.pattern);
	inst._zod.parse = (payload, ctx) => {
		return def.innerType._zod.run(payload, ctx);
	};
});
var $ZodNullable = /* @__PURE__ */ $constructor("$ZodNullable", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazy(inst._zod, "optin", () => def.innerType._zod.optin);
	defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
	defineLazy(inst._zod, "pattern", () => {
		const pattern = def.innerType._zod.pattern;
		return pattern ? new RegExp(`^(${cleanRegex(pattern.source)}|null)$`) : void 0;
	});
	defineLazy(inst._zod, "values", () => {
		return def.innerType._zod.values ? new Set([...def.innerType._zod.values, null]) : void 0;
	});
	inst._zod.parse = (payload, ctx) => {
		if (payload.value === null) return payload;
		return def.innerType._zod.run(payload, ctx);
	};
});
var $ZodDefault = /* @__PURE__ */ $constructor("$ZodDefault", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.optin = "optional";
	defineLazy(inst._zod, "values", () => def.innerType._zod.values);
	inst._zod.parse = (payload, ctx) => {
		if (ctx.direction === "backward") return def.innerType._zod.run(payload, ctx);
		if (payload.value === void 0) {
			payload.value = def.defaultValue;
			/**
			* $ZodDefault returns the default value immediately in forward direction.
			* It doesn't pass the default value into the validator ("prefault"). There's no reason to pass the default value through validation. The validity of the default is enforced by TypeScript statically. Otherwise, it's the responsibility of the user to ensure the default is valid. In the case of pipes with divergent in/out types, you can specify the default on the `in` schema of your ZodPipe to set a "prefault" for the pipe.   */
			return payload;
		}
		const result = def.innerType._zod.run(payload, ctx);
		if (result instanceof Promise) return result.then((result) => handleDefaultResult(result, def));
		return handleDefaultResult(result, def);
	};
});
function handleDefaultResult(payload, def) {
	if (payload.value === void 0) payload.value = def.defaultValue;
	return payload;
}
var $ZodPrefault = /* @__PURE__ */ $constructor("$ZodPrefault", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.optin = "optional";
	defineLazy(inst._zod, "values", () => def.innerType._zod.values);
	inst._zod.parse = (payload, ctx) => {
		if (ctx.direction === "backward") return def.innerType._zod.run(payload, ctx);
		if (payload.value === void 0) payload.value = def.defaultValue;
		return def.innerType._zod.run(payload, ctx);
	};
});
var $ZodNonOptional = /* @__PURE__ */ $constructor("$ZodNonOptional", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazy(inst._zod, "values", () => {
		const v = def.innerType._zod.values;
		return v ? new Set([...v].filter((x) => x !== void 0)) : void 0;
	});
	inst._zod.parse = (payload, ctx) => {
		const result = def.innerType._zod.run(payload, ctx);
		if (result instanceof Promise) return result.then((result) => handleNonOptionalResult(result, inst));
		return handleNonOptionalResult(result, inst);
	};
});
function handleNonOptionalResult(payload, inst) {
	if (!payload.issues.length && payload.value === void 0) payload.issues.push({
		code: "invalid_type",
		expected: "nonoptional",
		input: payload.value,
		inst
	});
	return payload;
}
var $ZodSuccess = /* @__PURE__ */ $constructor("$ZodSuccess", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, ctx) => {
		if (ctx.direction === "backward") throw new $ZodEncodeError("ZodSuccess");
		const result = def.innerType._zod.run(payload, ctx);
		if (result instanceof Promise) return result.then((result) => {
			payload.value = result.issues.length === 0;
			return payload;
		});
		payload.value = result.issues.length === 0;
		return payload;
	};
});
var $ZodCatch = /* @__PURE__ */ $constructor("$ZodCatch", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazy(inst._zod, "optin", () => def.innerType._zod.optin);
	defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
	defineLazy(inst._zod, "values", () => def.innerType._zod.values);
	inst._zod.parse = (payload, ctx) => {
		if (ctx.direction === "backward") return def.innerType._zod.run(payload, ctx);
		const result = def.innerType._zod.run(payload, ctx);
		if (result instanceof Promise) return result.then((result) => {
			payload.value = result.value;
			if (result.issues.length) {
				payload.value = def.catchValue({
					...payload,
					error: { issues: result.issues.map((iss) => finalizeIssue(iss, ctx, config())) },
					input: payload.value
				});
				payload.issues = [];
			}
			return payload;
		});
		payload.value = result.value;
		if (result.issues.length) {
			payload.value = def.catchValue({
				...payload,
				error: { issues: result.issues.map((iss) => finalizeIssue(iss, ctx, config())) },
				input: payload.value
			});
			payload.issues = [];
		}
		return payload;
	};
});
var $ZodNaN = /* @__PURE__ */ $constructor("$ZodNaN", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, _ctx) => {
		if (typeof payload.value !== "number" || !Number.isNaN(payload.value)) {
			payload.issues.push({
				input: payload.value,
				inst,
				expected: "nan",
				code: "invalid_type"
			});
			return payload;
		}
		return payload;
	};
});
var $ZodPipe = /* @__PURE__ */ $constructor("$ZodPipe", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazy(inst._zod, "values", () => def.in._zod.values);
	defineLazy(inst._zod, "optin", () => def.in._zod.optin);
	defineLazy(inst._zod, "optout", () => def.out._zod.optout);
	defineLazy(inst._zod, "propValues", () => def.in._zod.propValues);
	inst._zod.parse = (payload, ctx) => {
		if (ctx.direction === "backward") {
			const right = def.out._zod.run(payload, ctx);
			if (right instanceof Promise) return right.then((right) => handlePipeResult(right, def.in, ctx));
			return handlePipeResult(right, def.in, ctx);
		}
		const left = def.in._zod.run(payload, ctx);
		if (left instanceof Promise) return left.then((left) => handlePipeResult(left, def.out, ctx));
		return handlePipeResult(left, def.out, ctx);
	};
});
function handlePipeResult(left, next, ctx) {
	if (left.issues.length) {
		left.aborted = true;
		return left;
	}
	return next._zod.run({
		value: left.value,
		issues: left.issues
	}, ctx);
}
var $ZodCodec = /* @__PURE__ */ $constructor("$ZodCodec", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazy(inst._zod, "values", () => def.in._zod.values);
	defineLazy(inst._zod, "optin", () => def.in._zod.optin);
	defineLazy(inst._zod, "optout", () => def.out._zod.optout);
	defineLazy(inst._zod, "propValues", () => def.in._zod.propValues);
	inst._zod.parse = (payload, ctx) => {
		if ((ctx.direction || "forward") === "forward") {
			const left = def.in._zod.run(payload, ctx);
			if (left instanceof Promise) return left.then((left) => handleCodecAResult(left, def, ctx));
			return handleCodecAResult(left, def, ctx);
		} else {
			const right = def.out._zod.run(payload, ctx);
			if (right instanceof Promise) return right.then((right) => handleCodecAResult(right, def, ctx));
			return handleCodecAResult(right, def, ctx);
		}
	};
});
function handleCodecAResult(result, def, ctx) {
	if (result.issues.length) {
		result.aborted = true;
		return result;
	}
	if ((ctx.direction || "forward") === "forward") {
		const transformed = def.transform(result.value, result);
		if (transformed instanceof Promise) return transformed.then((value) => handleCodecTxResult(result, value, def.out, ctx));
		return handleCodecTxResult(result, transformed, def.out, ctx);
	} else {
		const transformed = def.reverseTransform(result.value, result);
		if (transformed instanceof Promise) return transformed.then((value) => handleCodecTxResult(result, value, def.in, ctx));
		return handleCodecTxResult(result, transformed, def.in, ctx);
	}
}
function handleCodecTxResult(left, value, nextSchema, ctx) {
	if (left.issues.length) {
		left.aborted = true;
		return left;
	}
	return nextSchema._zod.run({
		value,
		issues: left.issues
	}, ctx);
}
var $ZodReadonly = /* @__PURE__ */ $constructor("$ZodReadonly", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazy(inst._zod, "propValues", () => def.innerType._zod.propValues);
	defineLazy(inst._zod, "values", () => def.innerType._zod.values);
	defineLazy(inst._zod, "optin", () => def.innerType?._zod?.optin);
	defineLazy(inst._zod, "optout", () => def.innerType?._zod?.optout);
	inst._zod.parse = (payload, ctx) => {
		if (ctx.direction === "backward") return def.innerType._zod.run(payload, ctx);
		const result = def.innerType._zod.run(payload, ctx);
		if (result instanceof Promise) return result.then(handleReadonlyResult);
		return handleReadonlyResult(result);
	};
});
function handleReadonlyResult(payload) {
	payload.value = Object.freeze(payload.value);
	return payload;
}
var $ZodTemplateLiteral = /* @__PURE__ */ $constructor("$ZodTemplateLiteral", (inst, def) => {
	$ZodType.init(inst, def);
	const regexParts = [];
	for (const part of def.parts) if (typeof part === "object" && part !== null) {
		if (!part._zod.pattern) throw new Error(`Invalid template literal part, no pattern found: ${[...part._zod.traits].shift()}`);
		const source = part._zod.pattern instanceof RegExp ? part._zod.pattern.source : part._zod.pattern;
		if (!source) throw new Error(`Invalid template literal part: ${part._zod.traits}`);
		const start = source.startsWith("^") ? 1 : 0;
		const end = source.endsWith("$") ? source.length - 1 : source.length;
		regexParts.push(source.slice(start, end));
	} else if (part === null || primitiveTypes.has(typeof part)) regexParts.push(escapeRegex(`${part}`));
	else throw new Error(`Invalid template literal part: ${part}`);
	inst._zod.pattern = new RegExp(`^${regexParts.join("")}$`);
	inst._zod.parse = (payload, _ctx) => {
		if (typeof payload.value !== "string") {
			payload.issues.push({
				input: payload.value,
				inst,
				expected: "string",
				code: "invalid_type"
			});
			return payload;
		}
		inst._zod.pattern.lastIndex = 0;
		if (!inst._zod.pattern.test(payload.value)) {
			payload.issues.push({
				input: payload.value,
				inst,
				code: "invalid_format",
				format: def.format ?? "template_literal",
				pattern: inst._zod.pattern.source
			});
			return payload;
		}
		return payload;
	};
});
var $ZodFunction = /* @__PURE__ */ $constructor("$ZodFunction", (inst, def) => {
	$ZodType.init(inst, def);
	inst._def = def;
	inst._zod.def = def;
	inst.implement = (func) => {
		if (typeof func !== "function") throw new Error("implement() must be called with a function");
		return function(...args) {
			const parsedArgs = inst._def.input ? parse$1(inst._def.input, args) : args;
			const result = Reflect.apply(func, this, parsedArgs);
			if (inst._def.output) return parse$1(inst._def.output, result);
			return result;
		};
	};
	inst.implementAsync = (func) => {
		if (typeof func !== "function") throw new Error("implementAsync() must be called with a function");
		return async function(...args) {
			const parsedArgs = inst._def.input ? await parseAsync$1(inst._def.input, args) : args;
			const result = await Reflect.apply(func, this, parsedArgs);
			if (inst._def.output) return await parseAsync$1(inst._def.output, result);
			return result;
		};
	};
	inst._zod.parse = (payload, _ctx) => {
		if (typeof payload.value !== "function") {
			payload.issues.push({
				code: "invalid_type",
				expected: "function",
				input: payload.value,
				inst
			});
			return payload;
		}
		if (inst._def.output && inst._def.output._zod.def.type === "promise") payload.value = inst.implementAsync(payload.value);
		else payload.value = inst.implement(payload.value);
		return payload;
	};
	inst.input = (...args) => {
		const F = inst.constructor;
		if (Array.isArray(args[0])) return new F({
			type: "function",
			input: new $ZodTuple({
				type: "tuple",
				items: args[0],
				rest: args[1]
			}),
			output: inst._def.output
		});
		return new F({
			type: "function",
			input: args[0],
			output: inst._def.output
		});
	};
	inst.output = (output) => {
		const F = inst.constructor;
		return new F({
			type: "function",
			input: inst._def.input,
			output
		});
	};
	return inst;
});
var $ZodPromise = /* @__PURE__ */ $constructor("$ZodPromise", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, ctx) => {
		return Promise.resolve(payload.value).then((inner) => def.innerType._zod.run({
			value: inner,
			issues: []
		}, ctx));
	};
});
var $ZodLazy = /* @__PURE__ */ $constructor("$ZodLazy", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazy(inst._zod, "innerType", () => def.getter());
	defineLazy(inst._zod, "pattern", () => inst._zod.innerType?._zod?.pattern);
	defineLazy(inst._zod, "propValues", () => inst._zod.innerType?._zod?.propValues);
	defineLazy(inst._zod, "optin", () => inst._zod.innerType?._zod?.optin ?? void 0);
	defineLazy(inst._zod, "optout", () => inst._zod.innerType?._zod?.optout ?? void 0);
	inst._zod.parse = (payload, ctx) => {
		return inst._zod.innerType._zod.run(payload, ctx);
	};
});
var $ZodCustom = /* @__PURE__ */ $constructor("$ZodCustom", (inst, def) => {
	$ZodCheck.init(inst, def);
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, _) => {
		return payload;
	};
	inst._zod.check = (payload) => {
		const input = payload.value;
		const r = def.fn(input);
		if (r instanceof Promise) return r.then((r) => handleRefineResult(r, payload, input, inst));
		handleRefineResult(r, payload, input, inst);
	};
});
function handleRefineResult(result, payload, input, inst) {
	if (!result) {
		const _iss = {
			code: "custom",
			input,
			inst,
			path: [...inst._zod.def.path ?? []],
			continue: !inst._zod.def.abort
		};
		if (inst._zod.def.params) _iss.params = inst._zod.def.params;
		payload.issues.push(issue(_iss));
	}
}
//#endregion
//#region node_modules/zod/v4/core/registries.js
var _a$3;
var $ZodRegistry = class {
	constructor() {
		this._map = /* @__PURE__ */ new WeakMap();
		this._idmap = /* @__PURE__ */ new Map();
	}
	add(schema, ..._meta) {
		const meta = _meta[0];
		this._map.set(schema, meta);
		if (meta && typeof meta === "object" && "id" in meta) this._idmap.set(meta.id, schema);
		return this;
	}
	clear() {
		this._map = /* @__PURE__ */ new WeakMap();
		this._idmap = /* @__PURE__ */ new Map();
		return this;
	}
	remove(schema) {
		const meta = this._map.get(schema);
		if (meta && typeof meta === "object" && "id" in meta) this._idmap.delete(meta.id);
		this._map.delete(schema);
		return this;
	}
	get(schema) {
		const p = schema._zod.parent;
		if (p) {
			const pm = { ...this.get(p) ?? {} };
			delete pm.id;
			const f = {
				...pm,
				...this._map.get(schema)
			};
			return Object.keys(f).length ? f : void 0;
		}
		return this._map.get(schema);
	}
	has(schema) {
		return this._map.has(schema);
	}
};
function registry() {
	return new $ZodRegistry();
}
(_a$3 = globalThis).__zod_globalRegistry ?? (_a$3.__zod_globalRegistry = registry());
var globalRegistry = globalThis.__zod_globalRegistry;
//#endregion
//#region node_modules/zod/v4/core/api.js
/* @__NO_SIDE_EFFECTS__ */
function _string(Class, params) {
	return new Class({
		type: "string",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _email(Class, params) {
	return new Class({
		type: "string",
		format: "email",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _guid(Class, params) {
	return new Class({
		type: "string",
		format: "guid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _uuid(Class, params) {
	return new Class({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _uuidv4(Class, params) {
	return new Class({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: false,
		version: "v4",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _uuidv6(Class, params) {
	return new Class({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: false,
		version: "v6",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _uuidv7(Class, params) {
	return new Class({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: false,
		version: "v7",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _url(Class, params) {
	return new Class({
		type: "string",
		format: "url",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _emoji(Class, params) {
	return new Class({
		type: "string",
		format: "emoji",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _nanoid(Class, params) {
	return new Class({
		type: "string",
		format: "nanoid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _cuid(Class, params) {
	return new Class({
		type: "string",
		format: "cuid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _cuid2(Class, params) {
	return new Class({
		type: "string",
		format: "cuid2",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _ulid(Class, params) {
	return new Class({
		type: "string",
		format: "ulid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _xid(Class, params) {
	return new Class({
		type: "string",
		format: "xid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _ksuid(Class, params) {
	return new Class({
		type: "string",
		format: "ksuid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _ipv4(Class, params) {
	return new Class({
		type: "string",
		format: "ipv4",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _ipv6(Class, params) {
	return new Class({
		type: "string",
		format: "ipv6",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _mac(Class, params) {
	return new Class({
		type: "string",
		format: "mac",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _cidrv4(Class, params) {
	return new Class({
		type: "string",
		format: "cidrv4",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _cidrv6(Class, params) {
	return new Class({
		type: "string",
		format: "cidrv6",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _base64(Class, params) {
	return new Class({
		type: "string",
		format: "base64",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _base64url(Class, params) {
	return new Class({
		type: "string",
		format: "base64url",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _e164(Class, params) {
	return new Class({
		type: "string",
		format: "e164",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _jwt(Class, params) {
	return new Class({
		type: "string",
		format: "jwt",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _isoDateTime(Class, params) {
	return new Class({
		type: "string",
		format: "datetime",
		check: "string_format",
		offset: false,
		local: false,
		precision: null,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _isoDate(Class, params) {
	return new Class({
		type: "string",
		format: "date",
		check: "string_format",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _isoTime(Class, params) {
	return new Class({
		type: "string",
		format: "time",
		check: "string_format",
		precision: null,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _isoDuration(Class, params) {
	return new Class({
		type: "string",
		format: "duration",
		check: "string_format",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _number(Class, params) {
	return new Class({
		type: "number",
		checks: [],
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _coercedNumber(Class, params) {
	return new Class({
		type: "number",
		coerce: true,
		checks: [],
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _int(Class, params) {
	return new Class({
		type: "number",
		check: "number_format",
		abort: false,
		format: "safeint",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _float32(Class, params) {
	return new Class({
		type: "number",
		check: "number_format",
		abort: false,
		format: "float32",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _float64(Class, params) {
	return new Class({
		type: "number",
		check: "number_format",
		abort: false,
		format: "float64",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _int32(Class, params) {
	return new Class({
		type: "number",
		check: "number_format",
		abort: false,
		format: "int32",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _uint32(Class, params) {
	return new Class({
		type: "number",
		check: "number_format",
		abort: false,
		format: "uint32",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _boolean(Class, params) {
	return new Class({
		type: "boolean",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _bigint(Class, params) {
	return new Class({
		type: "bigint",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _int64(Class, params) {
	return new Class({
		type: "bigint",
		check: "bigint_format",
		abort: false,
		format: "int64",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _uint64(Class, params) {
	return new Class({
		type: "bigint",
		check: "bigint_format",
		abort: false,
		format: "uint64",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _symbol(Class, params) {
	return new Class({
		type: "symbol",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _undefined$1(Class, params) {
	return new Class({
		type: "undefined",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _null$1(Class, params) {
	return new Class({
		type: "null",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _any(Class) {
	return new Class({ type: "any" });
}
/* @__NO_SIDE_EFFECTS__ */
function _unknown(Class) {
	return new Class({ type: "unknown" });
}
/* @__NO_SIDE_EFFECTS__ */
function _never(Class, params) {
	return new Class({
		type: "never",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _void$1(Class, params) {
	return new Class({
		type: "void",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _date(Class, params) {
	return new Class({
		type: "date",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _nan(Class, params) {
	return new Class({
		type: "nan",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _lt(value, params) {
	return new $ZodCheckLessThan({
		check: "less_than",
		...normalizeParams(params),
		value,
		inclusive: false
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _lte(value, params) {
	return new $ZodCheckLessThan({
		check: "less_than",
		...normalizeParams(params),
		value,
		inclusive: true
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _gt(value, params) {
	return new $ZodCheckGreaterThan({
		check: "greater_than",
		...normalizeParams(params),
		value,
		inclusive: false
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _gte(value, params) {
	return new $ZodCheckGreaterThan({
		check: "greater_than",
		...normalizeParams(params),
		value,
		inclusive: true
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _positive(params) {
	return /* @__PURE__ */ _gt(0, params);
}
/* @__NO_SIDE_EFFECTS__ */
function _negative(params) {
	return /* @__PURE__ */ _lt(0, params);
}
/* @__NO_SIDE_EFFECTS__ */
function _nonpositive(params) {
	return /* @__PURE__ */ _lte(0, params);
}
/* @__NO_SIDE_EFFECTS__ */
function _nonnegative(params) {
	return /* @__PURE__ */ _gte(0, params);
}
/* @__NO_SIDE_EFFECTS__ */
function _multipleOf(value, params) {
	return new $ZodCheckMultipleOf({
		check: "multiple_of",
		...normalizeParams(params),
		value
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _maxSize(maximum, params) {
	return new $ZodCheckMaxSize({
		check: "max_size",
		...normalizeParams(params),
		maximum
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _minSize(minimum, params) {
	return new $ZodCheckMinSize({
		check: "min_size",
		...normalizeParams(params),
		minimum
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _size(size, params) {
	return new $ZodCheckSizeEquals({
		check: "size_equals",
		...normalizeParams(params),
		size
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _maxLength(maximum, params) {
	return new $ZodCheckMaxLength({
		check: "max_length",
		...normalizeParams(params),
		maximum
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _minLength(minimum, params) {
	return new $ZodCheckMinLength({
		check: "min_length",
		...normalizeParams(params),
		minimum
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _length(length, params) {
	return new $ZodCheckLengthEquals({
		check: "length_equals",
		...normalizeParams(params),
		length
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _regex(pattern, params) {
	return new $ZodCheckRegex({
		check: "string_format",
		format: "regex",
		...normalizeParams(params),
		pattern
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _lowercase(params) {
	return new $ZodCheckLowerCase({
		check: "string_format",
		format: "lowercase",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _uppercase(params) {
	return new $ZodCheckUpperCase({
		check: "string_format",
		format: "uppercase",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _includes(includes, params) {
	return new $ZodCheckIncludes({
		check: "string_format",
		format: "includes",
		...normalizeParams(params),
		includes
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _startsWith(prefix, params) {
	return new $ZodCheckStartsWith({
		check: "string_format",
		format: "starts_with",
		...normalizeParams(params),
		prefix
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _endsWith(suffix, params) {
	return new $ZodCheckEndsWith({
		check: "string_format",
		format: "ends_with",
		...normalizeParams(params),
		suffix
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _property(property, schema, params) {
	return new $ZodCheckProperty({
		check: "property",
		property,
		schema,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _mime(types, params) {
	return new $ZodCheckMimeType({
		check: "mime_type",
		mime: types,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _overwrite(tx) {
	return new $ZodCheckOverwrite({
		check: "overwrite",
		tx
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _normalize(form) {
	return /* @__PURE__ */ _overwrite((input) => input.normalize(form));
}
/* @__NO_SIDE_EFFECTS__ */
function _trim() {
	return /* @__PURE__ */ _overwrite((input) => input.trim());
}
/* @__NO_SIDE_EFFECTS__ */
function _toLowerCase() {
	return /* @__PURE__ */ _overwrite((input) => input.toLowerCase());
}
/* @__NO_SIDE_EFFECTS__ */
function _toUpperCase() {
	return /* @__PURE__ */ _overwrite((input) => input.toUpperCase());
}
/* @__NO_SIDE_EFFECTS__ */
function _slugify() {
	return /* @__PURE__ */ _overwrite((input) => slugify(input));
}
/* @__NO_SIDE_EFFECTS__ */
function _array(Class, element, params) {
	return new Class({
		type: "array",
		element,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _file(Class, params) {
	return new Class({
		type: "file",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _custom(Class, fn, _params) {
	const norm = normalizeParams(_params);
	norm.abort ?? (norm.abort = true);
	return new Class({
		type: "custom",
		check: "custom",
		fn,
		...norm
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _refine(Class, fn, _params) {
	return new Class({
		type: "custom",
		check: "custom",
		fn,
		...normalizeParams(_params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _superRefine(fn) {
	const ch = /* @__PURE__ */ _check((payload) => {
		payload.addIssue = (issue$2) => {
			if (typeof issue$2 === "string") payload.issues.push(issue(issue$2, payload.value, ch._zod.def));
			else {
				const _issue = issue$2;
				if (_issue.fatal) _issue.continue = false;
				_issue.code ?? (_issue.code = "custom");
				_issue.input ?? (_issue.input = payload.value);
				_issue.inst ?? (_issue.inst = ch);
				_issue.continue ?? (_issue.continue = !ch._zod.def.abort);
				payload.issues.push(issue(_issue));
			}
		};
		return fn(payload.value, payload);
	});
	return ch;
}
/* @__NO_SIDE_EFFECTS__ */
function _check(fn, params) {
	const ch = new $ZodCheck({
		check: "custom",
		...normalizeParams(params)
	});
	ch._zod.check = fn;
	return ch;
}
/* @__NO_SIDE_EFFECTS__ */
function describe$1(description) {
	const ch = new $ZodCheck({ check: "describe" });
	ch._zod.onattach = [(inst) => {
		const existing = globalRegistry.get(inst) ?? {};
		globalRegistry.add(inst, {
			...existing,
			description
		});
	}];
	ch._zod.check = () => {};
	return ch;
}
/* @__NO_SIDE_EFFECTS__ */
function meta$1(metadata) {
	const ch = new $ZodCheck({ check: "meta" });
	ch._zod.onattach = [(inst) => {
		const existing = globalRegistry.get(inst) ?? {};
		globalRegistry.add(inst, {
			...existing,
			...metadata
		});
	}];
	ch._zod.check = () => {};
	return ch;
}
/* @__NO_SIDE_EFFECTS__ */
function _stringbool(Classes, _params) {
	const params = normalizeParams(_params);
	let truthyArray = params.truthy ?? [
		"true",
		"1",
		"yes",
		"on",
		"y",
		"enabled"
	];
	let falsyArray = params.falsy ?? [
		"false",
		"0",
		"no",
		"off",
		"n",
		"disabled"
	];
	if (params.case !== "sensitive") {
		truthyArray = truthyArray.map((v) => typeof v === "string" ? v.toLowerCase() : v);
		falsyArray = falsyArray.map((v) => typeof v === "string" ? v.toLowerCase() : v);
	}
	const truthySet = new Set(truthyArray);
	const falsySet = new Set(falsyArray);
	const _Codec = Classes.Codec ?? $ZodCodec;
	const _Boolean = Classes.Boolean ?? $ZodBoolean;
	const codec = new _Codec({
		type: "pipe",
		in: new (Classes.String ?? $ZodString)({
			type: "string",
			error: params.error
		}),
		out: new _Boolean({
			type: "boolean",
			error: params.error
		}),
		transform: ((input, payload) => {
			let data = input;
			if (params.case !== "sensitive") data = data.toLowerCase();
			if (truthySet.has(data)) return true;
			else if (falsySet.has(data)) return false;
			else {
				payload.issues.push({
					code: "invalid_value",
					expected: "stringbool",
					values: [...truthySet, ...falsySet],
					input: payload.value,
					inst: codec,
					continue: false
				});
				return {};
			}
		}),
		reverseTransform: ((input, _payload) => {
			if (input === true) return truthyArray[0] || "true";
			else return falsyArray[0] || "false";
		}),
		error: params.error
	});
	return codec;
}
/* @__NO_SIDE_EFFECTS__ */
function _stringFormat(Class, format, fnOrRegex, _params = {}) {
	const params = normalizeParams(_params);
	const def = {
		...normalizeParams(_params),
		check: "string_format",
		type: "string",
		format,
		fn: typeof fnOrRegex === "function" ? fnOrRegex : (val) => fnOrRegex.test(val),
		...params
	};
	if (fnOrRegex instanceof RegExp) def.pattern = fnOrRegex;
	return new Class(def);
}
//#endregion
//#region node_modules/zod/v4/core/to-json-schema.js
function initializeContext(params) {
	let target = params?.target ?? "draft-2020-12";
	if (target === "draft-4") target = "draft-04";
	if (target === "draft-7") target = "draft-07";
	return {
		processors: params.processors ?? {},
		metadataRegistry: params?.metadata ?? globalRegistry,
		target,
		unrepresentable: params?.unrepresentable ?? "throw",
		override: params?.override ?? (() => {}),
		io: params?.io ?? "output",
		counter: 0,
		seen: /* @__PURE__ */ new Map(),
		cycles: params?.cycles ?? "ref",
		reused: params?.reused ?? "inline",
		external: params?.external ?? void 0
	};
}
function process$1(schema, ctx, _params = {
	path: [],
	schemaPath: []
}) {
	var _a;
	const def = schema._zod.def;
	const seen = ctx.seen.get(schema);
	if (seen) {
		seen.count++;
		if (_params.schemaPath.includes(schema)) seen.cycle = _params.path;
		return seen.schema;
	}
	const result = {
		schema: {},
		count: 1,
		cycle: void 0,
		path: _params.path
	};
	ctx.seen.set(schema, result);
	const overrideSchema = schema._zod.toJSONSchema?.();
	if (overrideSchema) result.schema = overrideSchema;
	else {
		const params = {
			..._params,
			schemaPath: [..._params.schemaPath, schema],
			path: _params.path
		};
		if (schema._zod.processJSONSchema) schema._zod.processJSONSchema(ctx, result.schema, params);
		else {
			const _json = result.schema;
			const processor = ctx.processors[def.type];
			if (!processor) throw new Error(`[toJSONSchema]: Non-representable type encountered: ${def.type}`);
			processor(schema, ctx, _json, params);
		}
		const parent = schema._zod.parent;
		if (parent) {
			if (!result.ref) result.ref = parent;
			process$1(parent, ctx, params);
			ctx.seen.get(parent).isParent = true;
		}
	}
	const meta = ctx.metadataRegistry.get(schema);
	if (meta) Object.assign(result.schema, meta);
	if (ctx.io === "input" && isTransforming(schema)) {
		delete result.schema.examples;
		delete result.schema.default;
	}
	if (ctx.io === "input" && result.schema._prefault) (_a = result.schema).default ?? (_a.default = result.schema._prefault);
	delete result.schema._prefault;
	return ctx.seen.get(schema).schema;
}
function extractDefs(ctx, schema) {
	const root = ctx.seen.get(schema);
	if (!root) throw new Error("Unprocessed schema. This is a bug in Zod.");
	const idToSchema = /* @__PURE__ */ new Map();
	for (const entry of ctx.seen.entries()) {
		const id = ctx.metadataRegistry.get(entry[0])?.id;
		if (id) {
			const existing = idToSchema.get(id);
			if (existing && existing !== entry[0]) throw new Error(`Duplicate schema id "${id}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
			idToSchema.set(id, entry[0]);
		}
	}
	const makeURI = (entry) => {
		const defsSegment = ctx.target === "draft-2020-12" ? "$defs" : "definitions";
		if (ctx.external) {
			const externalId = ctx.external.registry.get(entry[0])?.id;
			const uriGenerator = ctx.external.uri ?? ((id) => id);
			if (externalId) return { ref: uriGenerator(externalId) };
			const id = entry[1].defId ?? entry[1].schema.id ?? `schema${ctx.counter++}`;
			entry[1].defId = id;
			return {
				defId: id,
				ref: `${uriGenerator("__shared")}#/${defsSegment}/${id}`
			};
		}
		if (entry[1] === root) return { ref: "#" };
		const defUriPrefix = `#/${defsSegment}/`;
		const defId = entry[1].schema.id ?? `__schema${ctx.counter++}`;
		return {
			defId,
			ref: defUriPrefix + defId
		};
	};
	const extractToDef = (entry) => {
		if (entry[1].schema.$ref) return;
		const seen = entry[1];
		const { ref, defId } = makeURI(entry);
		seen.def = { ...seen.schema };
		if (defId) seen.defId = defId;
		const schema = seen.schema;
		for (const key in schema) delete schema[key];
		schema.$ref = ref;
	};
	if (ctx.cycles === "throw") for (const entry of ctx.seen.entries()) {
		const seen = entry[1];
		if (seen.cycle) throw new Error(`Cycle detected: #/${seen.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
	}
	for (const entry of ctx.seen.entries()) {
		const seen = entry[1];
		if (schema === entry[0]) {
			extractToDef(entry);
			continue;
		}
		if (ctx.external) {
			const ext = ctx.external.registry.get(entry[0])?.id;
			if (schema !== entry[0] && ext) {
				extractToDef(entry);
				continue;
			}
		}
		if (ctx.metadataRegistry.get(entry[0])?.id) {
			extractToDef(entry);
			continue;
		}
		if (seen.cycle) {
			extractToDef(entry);
			continue;
		}
		if (seen.count > 1) {
			if (ctx.reused === "ref") {
				extractToDef(entry);
				continue;
			}
		}
	}
}
function finalize(ctx, schema) {
	const root = ctx.seen.get(schema);
	if (!root) throw new Error("Unprocessed schema. This is a bug in Zod.");
	const flattenRef = (zodSchema) => {
		const seen = ctx.seen.get(zodSchema);
		if (seen.ref === null) return;
		const schema = seen.def ?? seen.schema;
		const _cached = { ...schema };
		const ref = seen.ref;
		seen.ref = null;
		if (ref) {
			flattenRef(ref);
			const refSeen = ctx.seen.get(ref);
			const refSchema = refSeen.schema;
			if (refSchema.$ref && (ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0")) {
				schema.allOf = schema.allOf ?? [];
				schema.allOf.push(refSchema);
			} else Object.assign(schema, refSchema);
			Object.assign(schema, _cached);
			if (zodSchema._zod.parent === ref) for (const key in schema) {
				if (key === "$ref" || key === "allOf") continue;
				if (!(key in _cached)) delete schema[key];
			}
			if (refSchema.$ref && refSeen.def) for (const key in schema) {
				if (key === "$ref" || key === "allOf") continue;
				if (key in refSeen.def && JSON.stringify(schema[key]) === JSON.stringify(refSeen.def[key])) delete schema[key];
			}
		}
		const parent = zodSchema._zod.parent;
		if (parent && parent !== ref) {
			flattenRef(parent);
			const parentSeen = ctx.seen.get(parent);
			if (parentSeen?.schema.$ref) {
				schema.$ref = parentSeen.schema.$ref;
				if (parentSeen.def) for (const key in schema) {
					if (key === "$ref" || key === "allOf") continue;
					if (key in parentSeen.def && JSON.stringify(schema[key]) === JSON.stringify(parentSeen.def[key])) delete schema[key];
				}
			}
		}
		ctx.override({
			zodSchema,
			jsonSchema: schema,
			path: seen.path ?? []
		});
	};
	for (const entry of [...ctx.seen.entries()].reverse()) flattenRef(entry[0]);
	const result = {};
	if (ctx.target === "draft-2020-12") result.$schema = "https://json-schema.org/draft/2020-12/schema";
	else if (ctx.target === "draft-07") result.$schema = "http://json-schema.org/draft-07/schema#";
	else if (ctx.target === "draft-04") result.$schema = "http://json-schema.org/draft-04/schema#";
	else if (ctx.target === "openapi-3.0") {}
	if (ctx.external?.uri) {
		const id = ctx.external.registry.get(schema)?.id;
		if (!id) throw new Error("Schema is missing an `id` property");
		result.$id = ctx.external.uri(id);
	}
	Object.assign(result, root.def ?? root.schema);
	const defs = ctx.external?.defs ?? {};
	for (const entry of ctx.seen.entries()) {
		const seen = entry[1];
		if (seen.def && seen.defId) defs[seen.defId] = seen.def;
	}
	if (ctx.external) {} else if (Object.keys(defs).length > 0) if (ctx.target === "draft-2020-12") result.$defs = defs;
	else result.definitions = defs;
	try {
		const finalized = JSON.parse(JSON.stringify(result));
		Object.defineProperty(finalized, "~standard", {
			value: {
				...schema["~standard"],
				jsonSchema: {
					input: createStandardJSONSchemaMethod(schema, "input", ctx.processors),
					output: createStandardJSONSchemaMethod(schema, "output", ctx.processors)
				}
			},
			enumerable: false,
			writable: false
		});
		return finalized;
	} catch (_err) {
		throw new Error("Error converting schema to JSON.");
	}
}
function isTransforming(_schema, _ctx) {
	const ctx = _ctx ?? { seen: /* @__PURE__ */ new Set() };
	if (ctx.seen.has(_schema)) return false;
	ctx.seen.add(_schema);
	const def = _schema._zod.def;
	if (def.type === "transform") return true;
	if (def.type === "array") return isTransforming(def.element, ctx);
	if (def.type === "set") return isTransforming(def.valueType, ctx);
	if (def.type === "lazy") return isTransforming(def.getter(), ctx);
	if (def.type === "promise" || def.type === "optional" || def.type === "nonoptional" || def.type === "nullable" || def.type === "readonly" || def.type === "default" || def.type === "prefault") return isTransforming(def.innerType, ctx);
	if (def.type === "intersection") return isTransforming(def.left, ctx) || isTransforming(def.right, ctx);
	if (def.type === "record" || def.type === "map") return isTransforming(def.keyType, ctx) || isTransforming(def.valueType, ctx);
	if (def.type === "pipe") return isTransforming(def.in, ctx) || isTransforming(def.out, ctx);
	if (def.type === "object") {
		for (const key in def.shape) if (isTransforming(def.shape[key], ctx)) return true;
		return false;
	}
	if (def.type === "union") {
		for (const option of def.options) if (isTransforming(option, ctx)) return true;
		return false;
	}
	if (def.type === "tuple") {
		for (const item of def.items) if (isTransforming(item, ctx)) return true;
		if (def.rest && isTransforming(def.rest, ctx)) return true;
		return false;
	}
	return false;
}
/**
* Creates a toJSONSchema method for a schema instance.
* This encapsulates the logic of initializing context, processing, extracting defs, and finalizing.
*/
var createToJSONSchemaMethod = (schema, processors = {}) => (params) => {
	const ctx = initializeContext({
		...params,
		processors
	});
	process$1(schema, ctx);
	extractDefs(ctx, schema);
	return finalize(ctx, schema);
};
var createStandardJSONSchemaMethod = (schema, io, processors = {}) => (params) => {
	const { libraryOptions, target } = params ?? {};
	const ctx = initializeContext({
		...libraryOptions ?? {},
		target,
		io,
		processors
	});
	process$1(schema, ctx);
	extractDefs(ctx, schema);
	return finalize(ctx, schema);
};
//#endregion
//#region node_modules/zod/v4/core/json-schema-processors.js
var formatMap = {
	guid: "uuid",
	url: "uri",
	datetime: "date-time",
	json_string: "json-string",
	regex: ""
};
var stringProcessor = (schema, ctx, _json, _params) => {
	const json = _json;
	json.type = "string";
	const { minimum, maximum, format, patterns, contentEncoding } = schema._zod.bag;
	if (typeof minimum === "number") json.minLength = minimum;
	if (typeof maximum === "number") json.maxLength = maximum;
	if (format) {
		json.format = formatMap[format] ?? format;
		if (json.format === "") delete json.format;
		if (format === "time") delete json.format;
	}
	if (contentEncoding) json.contentEncoding = contentEncoding;
	if (patterns && patterns.size > 0) {
		const regexes = [...patterns];
		if (regexes.length === 1) json.pattern = regexes[0].source;
		else if (regexes.length > 1) json.allOf = [...regexes.map((regex) => ({
			...ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0" ? { type: "string" } : {},
			pattern: regex.source
		}))];
	}
};
var numberProcessor = (schema, ctx, _json, _params) => {
	const json = _json;
	const { minimum, maximum, format, multipleOf, exclusiveMaximum, exclusiveMinimum } = schema._zod.bag;
	if (typeof format === "string" && format.includes("int")) json.type = "integer";
	else json.type = "number";
	if (typeof exclusiveMinimum === "number") if (ctx.target === "draft-04" || ctx.target === "openapi-3.0") {
		json.minimum = exclusiveMinimum;
		json.exclusiveMinimum = true;
	} else json.exclusiveMinimum = exclusiveMinimum;
	if (typeof minimum === "number") {
		json.minimum = minimum;
		if (typeof exclusiveMinimum === "number" && ctx.target !== "draft-04") if (exclusiveMinimum >= minimum) delete json.minimum;
		else delete json.exclusiveMinimum;
	}
	if (typeof exclusiveMaximum === "number") if (ctx.target === "draft-04" || ctx.target === "openapi-3.0") {
		json.maximum = exclusiveMaximum;
		json.exclusiveMaximum = true;
	} else json.exclusiveMaximum = exclusiveMaximum;
	if (typeof maximum === "number") {
		json.maximum = maximum;
		if (typeof exclusiveMaximum === "number" && ctx.target !== "draft-04") if (exclusiveMaximum <= maximum) delete json.maximum;
		else delete json.exclusiveMaximum;
	}
	if (typeof multipleOf === "number") json.multipleOf = multipleOf;
};
var booleanProcessor = (_schema, _ctx, json, _params) => {
	json.type = "boolean";
};
var bigintProcessor = (_schema, ctx, _json, _params) => {
	if (ctx.unrepresentable === "throw") throw new Error("BigInt cannot be represented in JSON Schema");
};
var symbolProcessor = (_schema, ctx, _json, _params) => {
	if (ctx.unrepresentable === "throw") throw new Error("Symbols cannot be represented in JSON Schema");
};
var nullProcessor = (_schema, ctx, json, _params) => {
	if (ctx.target === "openapi-3.0") {
		json.type = "string";
		json.nullable = true;
		json.enum = [null];
	} else json.type = "null";
};
var undefinedProcessor = (_schema, ctx, _json, _params) => {
	if (ctx.unrepresentable === "throw") throw new Error("Undefined cannot be represented in JSON Schema");
};
var voidProcessor = (_schema, ctx, _json, _params) => {
	if (ctx.unrepresentable === "throw") throw new Error("Void cannot be represented in JSON Schema");
};
var neverProcessor = (_schema, _ctx, json, _params) => {
	json.not = {};
};
var anyProcessor = (_schema, _ctx, _json, _params) => {};
var unknownProcessor = (_schema, _ctx, _json, _params) => {};
var dateProcessor = (_schema, ctx, _json, _params) => {
	if (ctx.unrepresentable === "throw") throw new Error("Date cannot be represented in JSON Schema");
};
var enumProcessor = (schema, _ctx, json, _params) => {
	const def = schema._zod.def;
	const values = getEnumValues(def.entries);
	if (values.every((v) => typeof v === "number")) json.type = "number";
	if (values.every((v) => typeof v === "string")) json.type = "string";
	json.enum = values;
};
var literalProcessor = (schema, ctx, json, _params) => {
	const def = schema._zod.def;
	const vals = [];
	for (const val of def.values) if (val === void 0) {
		if (ctx.unrepresentable === "throw") throw new Error("Literal `undefined` cannot be represented in JSON Schema");
	} else if (typeof val === "bigint") if (ctx.unrepresentable === "throw") throw new Error("BigInt literals cannot be represented in JSON Schema");
	else vals.push(Number(val));
	else vals.push(val);
	if (vals.length === 0) {} else if (vals.length === 1) {
		const val = vals[0];
		json.type = val === null ? "null" : typeof val;
		if (ctx.target === "draft-04" || ctx.target === "openapi-3.0") json.enum = [val];
		else json.const = val;
	} else {
		if (vals.every((v) => typeof v === "number")) json.type = "number";
		if (vals.every((v) => typeof v === "string")) json.type = "string";
		if (vals.every((v) => typeof v === "boolean")) json.type = "boolean";
		if (vals.every((v) => v === null)) json.type = "null";
		json.enum = vals;
	}
};
var nanProcessor = (_schema, ctx, _json, _params) => {
	if (ctx.unrepresentable === "throw") throw new Error("NaN cannot be represented in JSON Schema");
};
var templateLiteralProcessor = (schema, _ctx, json, _params) => {
	const _json = json;
	const pattern = schema._zod.pattern;
	if (!pattern) throw new Error("Pattern not found in template literal");
	_json.type = "string";
	_json.pattern = pattern.source;
};
var fileProcessor = (schema, _ctx, json, _params) => {
	const _json = json;
	const file = {
		type: "string",
		format: "binary",
		contentEncoding: "binary"
	};
	const { minimum, maximum, mime } = schema._zod.bag;
	if (minimum !== void 0) file.minLength = minimum;
	if (maximum !== void 0) file.maxLength = maximum;
	if (mime) if (mime.length === 1) {
		file.contentMediaType = mime[0];
		Object.assign(_json, file);
	} else {
		Object.assign(_json, file);
		_json.anyOf = mime.map((m) => ({ contentMediaType: m }));
	}
	else Object.assign(_json, file);
};
var successProcessor = (_schema, _ctx, json, _params) => {
	json.type = "boolean";
};
var customProcessor = (_schema, ctx, _json, _params) => {
	if (ctx.unrepresentable === "throw") throw new Error("Custom types cannot be represented in JSON Schema");
};
var functionProcessor = (_schema, ctx, _json, _params) => {
	if (ctx.unrepresentable === "throw") throw new Error("Function types cannot be represented in JSON Schema");
};
var transformProcessor = (_schema, ctx, _json, _params) => {
	if (ctx.unrepresentable === "throw") throw new Error("Transforms cannot be represented in JSON Schema");
};
var mapProcessor = (_schema, ctx, _json, _params) => {
	if (ctx.unrepresentable === "throw") throw new Error("Map cannot be represented in JSON Schema");
};
var setProcessor = (_schema, ctx, _json, _params) => {
	if (ctx.unrepresentable === "throw") throw new Error("Set cannot be represented in JSON Schema");
};
var arrayProcessor = (schema, ctx, _json, params) => {
	const json = _json;
	const def = schema._zod.def;
	const { minimum, maximum } = schema._zod.bag;
	if (typeof minimum === "number") json.minItems = minimum;
	if (typeof maximum === "number") json.maxItems = maximum;
	json.type = "array";
	json.items = process$1(def.element, ctx, {
		...params,
		path: [...params.path, "items"]
	});
};
var objectProcessor = (schema, ctx, _json, params) => {
	const json = _json;
	const def = schema._zod.def;
	json.type = "object";
	json.properties = {};
	const shape = def.shape;
	for (const key in shape) json.properties[key] = process$1(shape[key], ctx, {
		...params,
		path: [
			...params.path,
			"properties",
			key
		]
	});
	const allKeys = new Set(Object.keys(shape));
	const requiredKeys = new Set([...allKeys].filter((key) => {
		const v = def.shape[key]._zod;
		if (ctx.io === "input") return v.optin === void 0;
		else return v.optout === void 0;
	}));
	if (requiredKeys.size > 0) json.required = Array.from(requiredKeys);
	if (def.catchall?._zod.def.type === "never") json.additionalProperties = false;
	else if (!def.catchall) {
		if (ctx.io === "output") json.additionalProperties = false;
	} else if (def.catchall) json.additionalProperties = process$1(def.catchall, ctx, {
		...params,
		path: [...params.path, "additionalProperties"]
	});
};
var unionProcessor = (schema, ctx, json, params) => {
	const def = schema._zod.def;
	const isExclusive = def.inclusive === false;
	const options = def.options.map((x, i) => process$1(x, ctx, {
		...params,
		path: [
			...params.path,
			isExclusive ? "oneOf" : "anyOf",
			i
		]
	}));
	if (isExclusive) json.oneOf = options;
	else json.anyOf = options;
};
var intersectionProcessor = (schema, ctx, json, params) => {
	const def = schema._zod.def;
	const a = process$1(def.left, ctx, {
		...params,
		path: [
			...params.path,
			"allOf",
			0
		]
	});
	const b = process$1(def.right, ctx, {
		...params,
		path: [
			...params.path,
			"allOf",
			1
		]
	});
	const isSimpleIntersection = (val) => "allOf" in val && Object.keys(val).length === 1;
	json.allOf = [...isSimpleIntersection(a) ? a.allOf : [a], ...isSimpleIntersection(b) ? b.allOf : [b]];
};
var tupleProcessor = (schema, ctx, _json, params) => {
	const json = _json;
	const def = schema._zod.def;
	json.type = "array";
	const prefixPath = ctx.target === "draft-2020-12" ? "prefixItems" : "items";
	const restPath = ctx.target === "draft-2020-12" ? "items" : ctx.target === "openapi-3.0" ? "items" : "additionalItems";
	const prefixItems = def.items.map((x, i) => process$1(x, ctx, {
		...params,
		path: [
			...params.path,
			prefixPath,
			i
		]
	}));
	const rest = def.rest ? process$1(def.rest, ctx, {
		...params,
		path: [
			...params.path,
			restPath,
			...ctx.target === "openapi-3.0" ? [def.items.length] : []
		]
	}) : null;
	if (ctx.target === "draft-2020-12") {
		json.prefixItems = prefixItems;
		if (rest) json.items = rest;
	} else if (ctx.target === "openapi-3.0") {
		json.items = { anyOf: prefixItems };
		if (rest) json.items.anyOf.push(rest);
		json.minItems = prefixItems.length;
		if (!rest) json.maxItems = prefixItems.length;
	} else {
		json.items = prefixItems;
		if (rest) json.additionalItems = rest;
	}
	const { minimum, maximum } = schema._zod.bag;
	if (typeof minimum === "number") json.minItems = minimum;
	if (typeof maximum === "number") json.maxItems = maximum;
};
var recordProcessor = (schema, ctx, _json, params) => {
	const json = _json;
	const def = schema._zod.def;
	json.type = "object";
	const keyType = def.keyType;
	const patterns = keyType._zod.bag?.patterns;
	if (def.mode === "loose" && patterns && patterns.size > 0) {
		const valueSchema = process$1(def.valueType, ctx, {
			...params,
			path: [
				...params.path,
				"patternProperties",
				"*"
			]
		});
		json.patternProperties = {};
		for (const pattern of patterns) json.patternProperties[pattern.source] = valueSchema;
	} else {
		if (ctx.target === "draft-07" || ctx.target === "draft-2020-12") json.propertyNames = process$1(def.keyType, ctx, {
			...params,
			path: [...params.path, "propertyNames"]
		});
		json.additionalProperties = process$1(def.valueType, ctx, {
			...params,
			path: [...params.path, "additionalProperties"]
		});
	}
	const keyValues = keyType._zod.values;
	if (keyValues) {
		const validKeyValues = [...keyValues].filter((v) => typeof v === "string" || typeof v === "number");
		if (validKeyValues.length > 0) json.required = validKeyValues;
	}
};
var nullableProcessor = (schema, ctx, json, params) => {
	const def = schema._zod.def;
	const inner = process$1(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	if (ctx.target === "openapi-3.0") {
		seen.ref = def.innerType;
		json.nullable = true;
	} else json.anyOf = [inner, { type: "null" }];
};
var nonoptionalProcessor = (schema, ctx, _json, params) => {
	const def = schema._zod.def;
	process$1(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = def.innerType;
};
var defaultProcessor = (schema, ctx, json, params) => {
	const def = schema._zod.def;
	process$1(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = def.innerType;
	json.default = JSON.parse(JSON.stringify(def.defaultValue));
};
var prefaultProcessor = (schema, ctx, json, params) => {
	const def = schema._zod.def;
	process$1(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = def.innerType;
	if (ctx.io === "input") json._prefault = JSON.parse(JSON.stringify(def.defaultValue));
};
var catchProcessor = (schema, ctx, json, params) => {
	const def = schema._zod.def;
	process$1(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = def.innerType;
	let catchValue;
	try {
		catchValue = def.catchValue(void 0);
	} catch {
		throw new Error("Dynamic catch values are not supported in JSON Schema");
	}
	json.default = catchValue;
};
var pipeProcessor = (schema, ctx, _json, params) => {
	const def = schema._zod.def;
	const innerType = ctx.io === "input" ? def.in._zod.def.type === "transform" ? def.out : def.in : def.out;
	process$1(innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = innerType;
};
var readonlyProcessor = (schema, ctx, json, params) => {
	const def = schema._zod.def;
	process$1(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = def.innerType;
	json.readOnly = true;
};
var promiseProcessor = (schema, ctx, _json, params) => {
	const def = schema._zod.def;
	process$1(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = def.innerType;
};
var optionalProcessor = (schema, ctx, _json, params) => {
	const def = schema._zod.def;
	process$1(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = def.innerType;
};
var lazyProcessor = (schema, ctx, _json, params) => {
	const innerType = schema._zod.innerType;
	process$1(innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = innerType;
};
var allProcessors = {
	string: stringProcessor,
	number: numberProcessor,
	boolean: booleanProcessor,
	bigint: bigintProcessor,
	symbol: symbolProcessor,
	null: nullProcessor,
	undefined: undefinedProcessor,
	void: voidProcessor,
	never: neverProcessor,
	any: anyProcessor,
	unknown: unknownProcessor,
	date: dateProcessor,
	enum: enumProcessor,
	literal: literalProcessor,
	nan: nanProcessor,
	template_literal: templateLiteralProcessor,
	file: fileProcessor,
	success: successProcessor,
	custom: customProcessor,
	function: functionProcessor,
	transform: transformProcessor,
	map: mapProcessor,
	set: setProcessor,
	array: arrayProcessor,
	object: objectProcessor,
	union: unionProcessor,
	intersection: intersectionProcessor,
	tuple: tupleProcessor,
	record: recordProcessor,
	nullable: nullableProcessor,
	nonoptional: nonoptionalProcessor,
	default: defaultProcessor,
	prefault: prefaultProcessor,
	catch: catchProcessor,
	pipe: pipeProcessor,
	readonly: readonlyProcessor,
	promise: promiseProcessor,
	optional: optionalProcessor,
	lazy: lazyProcessor
};
function toJSONSchema(input, params) {
	if ("_idmap" in input) {
		const registry = input;
		const ctx = initializeContext({
			...params,
			processors: allProcessors
		});
		const defs = {};
		for (const entry of registry._idmap.entries()) {
			const [_, schema] = entry;
			process$1(schema, ctx);
		}
		const schemas = {};
		ctx.external = {
			registry,
			uri: params?.uri,
			defs
		};
		for (const entry of registry._idmap.entries()) {
			const [key, schema] = entry;
			extractDefs(ctx, schema);
			schemas[key] = finalize(ctx, schema);
		}
		if (Object.keys(defs).length > 0) schemas.__shared = { [ctx.target === "draft-2020-12" ? "$defs" : "definitions"]: defs };
		return { schemas };
	}
	const ctx = initializeContext({
		...params,
		processors: allProcessors
	});
	process$1(input, ctx);
	extractDefs(ctx, input);
	return finalize(ctx, input);
}
//#endregion
//#region node_modules/zod/v4/classic/checks.js
var checks_exports = /* @__PURE__ */ __exportAll$1({
	endsWith: () => _endsWith,
	gt: () => _gt,
	gte: () => _gte,
	includes: () => _includes,
	length: () => _length,
	lowercase: () => _lowercase,
	lt: () => _lt,
	lte: () => _lte,
	maxLength: () => _maxLength,
	maxSize: () => _maxSize,
	mime: () => _mime,
	minLength: () => _minLength,
	minSize: () => _minSize,
	multipleOf: () => _multipleOf,
	negative: () => _negative,
	nonnegative: () => _nonnegative,
	nonpositive: () => _nonpositive,
	normalize: () => _normalize,
	overwrite: () => _overwrite,
	positive: () => _positive,
	property: () => _property,
	regex: () => _regex,
	size: () => _size,
	slugify: () => _slugify,
	startsWith: () => _startsWith,
	toLowerCase: () => _toLowerCase,
	toUpperCase: () => _toUpperCase,
	trim: () => _trim,
	uppercase: () => _uppercase
});
//#endregion
//#region node_modules/zod/v4/classic/iso.js
var iso_exports = /* @__PURE__ */ __exportAll$1({
	ZodISODate: () => ZodISODate,
	ZodISODateTime: () => ZodISODateTime,
	ZodISODuration: () => ZodISODuration,
	ZodISOTime: () => ZodISOTime,
	date: () => date$1,
	datetime: () => datetime,
	duration: () => duration,
	time: () => time
});
var ZodISODateTime = /* @__PURE__ */ $constructor("ZodISODateTime", (inst, def) => {
	$ZodISODateTime.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function datetime(params) {
	return /* @__PURE__ */ _isoDateTime(ZodISODateTime, params);
}
var ZodISODate = /* @__PURE__ */ $constructor("ZodISODate", (inst, def) => {
	$ZodISODate.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function date$1(params) {
	return /* @__PURE__ */ _isoDate(ZodISODate, params);
}
var ZodISOTime = /* @__PURE__ */ $constructor("ZodISOTime", (inst, def) => {
	$ZodISOTime.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function time(params) {
	return /* @__PURE__ */ _isoTime(ZodISOTime, params);
}
var ZodISODuration = /* @__PURE__ */ $constructor("ZodISODuration", (inst, def) => {
	$ZodISODuration.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function duration(params) {
	return /* @__PURE__ */ _isoDuration(ZodISODuration, params);
}
//#endregion
//#region node_modules/zod/v4/classic/errors.js
var initializer = (inst, issues) => {
	$ZodError.init(inst, issues);
	inst.name = "ZodError";
	Object.defineProperties(inst, {
		format: { value: (mapper) => formatError(inst, mapper) },
		flatten: { value: (mapper) => flattenError(inst, mapper) },
		addIssue: { value: (issue) => {
			inst.issues.push(issue);
			inst.message = JSON.stringify(inst.issues, jsonStringifyReplacer, 2);
		} },
		addIssues: { value: (issues) => {
			inst.issues.push(...issues);
			inst.message = JSON.stringify(inst.issues, jsonStringifyReplacer, 2);
		} },
		isEmpty: { get() {
			return inst.issues.length === 0;
		} }
	});
};
$constructor("ZodError", initializer);
var ZodRealError = $constructor("ZodError", initializer, { Parent: Error });
//#endregion
//#region node_modules/zod/v4/classic/parse.js
var parse = /* @__PURE__ */ _parse$1(ZodRealError);
var parseAsync = /* @__PURE__ */ _parseAsync(ZodRealError);
var safeParse = /* @__PURE__ */ _safeParse(ZodRealError);
var safeParseAsync = /* @__PURE__ */ _safeParseAsync(ZodRealError);
var encode = /* @__PURE__ */ _encode(ZodRealError);
var decode = /* @__PURE__ */ _decode(ZodRealError);
var encodeAsync = /* @__PURE__ */ _encodeAsync(ZodRealError);
var decodeAsync = /* @__PURE__ */ _decodeAsync(ZodRealError);
var safeEncode = /* @__PURE__ */ _safeEncode(ZodRealError);
var safeDecode = /* @__PURE__ */ _safeDecode(ZodRealError);
var safeEncodeAsync = /* @__PURE__ */ _safeEncodeAsync(ZodRealError);
var safeDecodeAsync = /* @__PURE__ */ _safeDecodeAsync(ZodRealError);
//#endregion
//#region node_modules/zod/v4/classic/schemas.js
var schemas_exports = /* @__PURE__ */ __exportAll$1({
	ZodAny: () => ZodAny$1,
	ZodArray: () => ZodArray$1,
	ZodBase64: () => ZodBase64,
	ZodBase64URL: () => ZodBase64URL,
	ZodBigInt: () => ZodBigInt$1,
	ZodBigIntFormat: () => ZodBigIntFormat,
	ZodBoolean: () => ZodBoolean$1,
	ZodCIDRv4: () => ZodCIDRv4,
	ZodCIDRv6: () => ZodCIDRv6,
	ZodCUID: () => ZodCUID,
	ZodCUID2: () => ZodCUID2,
	ZodCatch: () => ZodCatch$1,
	ZodCodec: () => ZodCodec,
	ZodCustom: () => ZodCustom,
	ZodCustomStringFormat: () => ZodCustomStringFormat,
	ZodDate: () => ZodDate$1,
	ZodDefault: () => ZodDefault$1,
	ZodDiscriminatedUnion: () => ZodDiscriminatedUnion$1,
	ZodE164: () => ZodE164,
	ZodEmail: () => ZodEmail,
	ZodEmoji: () => ZodEmoji,
	ZodEnum: () => ZodEnum$1,
	ZodExactOptional: () => ZodExactOptional,
	ZodFile: () => ZodFile,
	ZodFunction: () => ZodFunction$1,
	ZodGUID: () => ZodGUID,
	ZodIPv4: () => ZodIPv4,
	ZodIPv6: () => ZodIPv6,
	ZodIntersection: () => ZodIntersection$1,
	ZodJWT: () => ZodJWT,
	ZodKSUID: () => ZodKSUID,
	ZodLazy: () => ZodLazy$1,
	ZodLiteral: () => ZodLiteral$1,
	ZodMAC: () => ZodMAC,
	ZodMap: () => ZodMap$1,
	ZodNaN: () => ZodNaN$1,
	ZodNanoID: () => ZodNanoID,
	ZodNever: () => ZodNever$1,
	ZodNonOptional: () => ZodNonOptional,
	ZodNull: () => ZodNull$1,
	ZodNullable: () => ZodNullable$1,
	ZodNumber: () => ZodNumber$1,
	ZodNumberFormat: () => ZodNumberFormat,
	ZodObject: () => ZodObject$1,
	ZodOptional: () => ZodOptional$1,
	ZodPipe: () => ZodPipe,
	ZodPrefault: () => ZodPrefault,
	ZodPromise: () => ZodPromise$1,
	ZodReadonly: () => ZodReadonly$1,
	ZodRecord: () => ZodRecord$1,
	ZodSet: () => ZodSet$1,
	ZodString: () => ZodString$1,
	ZodStringFormat: () => ZodStringFormat,
	ZodSuccess: () => ZodSuccess,
	ZodSymbol: () => ZodSymbol$1,
	ZodTemplateLiteral: () => ZodTemplateLiteral,
	ZodTransform: () => ZodTransform,
	ZodTuple: () => ZodTuple$1,
	ZodType: () => ZodType$1,
	ZodULID: () => ZodULID,
	ZodURL: () => ZodURL,
	ZodUUID: () => ZodUUID,
	ZodUndefined: () => ZodUndefined$1,
	ZodUnion: () => ZodUnion$1,
	ZodUnknown: () => ZodUnknown$1,
	ZodVoid: () => ZodVoid$1,
	ZodXID: () => ZodXID,
	ZodXor: () => ZodXor,
	_ZodString: () => _ZodString,
	_default: () => _default,
	_function: () => _function,
	any: () => any,
	array: () => array$1,
	base64: () => base64,
	base64url: () => base64url,
	bigint: () => bigint,
	boolean: () => boolean,
	catch: () => _catch,
	check: () => check,
	cidrv4: () => cidrv4,
	cidrv6: () => cidrv6,
	codec: () => codec,
	cuid: () => cuid,
	cuid2: () => cuid2,
	custom: () => custom,
	date: () => date,
	describe: () => describe,
	discriminatedUnion: () => discriminatedUnion,
	e164: () => e164,
	email: () => email,
	emoji: () => emoji,
	enum: () => _enum,
	exactOptional: () => exactOptional,
	file: () => file,
	float32: () => float32,
	float64: () => float64,
	function: () => _function,
	guid: () => guid,
	hash: () => hash,
	hex: () => hex,
	hostname: () => hostname,
	httpUrl: () => httpUrl,
	instanceof: () => _instanceof,
	int: () => int,
	int32: () => int32,
	int64: () => int64,
	intersection: () => intersection,
	ipv4: () => ipv4,
	ipv6: () => ipv6,
	json: () => json$1,
	jwt: () => jwt,
	keyof: () => keyof,
	ksuid: () => ksuid,
	lazy: () => lazy,
	literal: () => literal,
	looseObject: () => looseObject,
	looseRecord: () => looseRecord,
	mac: () => mac,
	map: () => map,
	meta: () => meta,
	nan: () => nan,
	nanoid: () => nanoid,
	nativeEnum: () => nativeEnum,
	never: () => never,
	nonoptional: () => nonoptional,
	null: () => _null,
	nullable: () => nullable,
	nullish: () => nullish,
	number: () => number,
	object: () => object$1,
	optional: () => optional,
	partialRecord: () => partialRecord,
	pipe: () => pipe,
	prefault: () => prefault,
	preprocess: () => preprocess,
	promise: () => promise,
	readonly: () => readonly,
	record: () => record,
	refine: () => refine,
	set: () => set,
	strictObject: () => strictObject,
	string: () => string,
	stringFormat: () => stringFormat,
	stringbool: () => stringbool,
	success: () => success,
	superRefine: () => superRefine,
	symbol: () => symbol$3,
	templateLiteral: () => templateLiteral,
	transform: () => transform,
	tuple: () => tuple,
	uint32: () => uint32,
	uint64: () => uint64,
	ulid: () => ulid,
	undefined: () => _undefined,
	union: () => union,
	unknown: () => unknown,
	url: () => url,
	uuid: () => uuid,
	uuidv4: () => uuidv4,
	uuidv6: () => uuidv6,
	uuidv7: () => uuidv7,
	void: () => _void,
	xid: () => xid,
	xor: () => xor
});
var ZodType$1 = /* @__PURE__ */ $constructor("ZodType", (inst, def) => {
	$ZodType.init(inst, def);
	Object.assign(inst["~standard"], { jsonSchema: {
		input: createStandardJSONSchemaMethod(inst, "input"),
		output: createStandardJSONSchemaMethod(inst, "output")
	} });
	inst.toJSONSchema = createToJSONSchemaMethod(inst, {});
	inst.def = def;
	inst.type = def.type;
	Object.defineProperty(inst, "_def", { value: def });
	inst.check = (...checks) => {
		return inst.clone(mergeDefs(def, { checks: [...def.checks ?? [], ...checks.map((ch) => typeof ch === "function" ? { _zod: {
			check: ch,
			def: { check: "custom" },
			onattach: []
		} } : ch)] }), { parent: true });
	};
	inst.with = inst.check;
	inst.clone = (def, params) => clone(inst, def, params);
	inst.brand = () => inst;
	inst.register = ((reg, meta) => {
		reg.add(inst, meta);
		return inst;
	});
	inst.parse = (data, params) => parse(inst, data, params, { callee: inst.parse });
	inst.safeParse = (data, params) => safeParse(inst, data, params);
	inst.parseAsync = async (data, params) => parseAsync(inst, data, params, { callee: inst.parseAsync });
	inst.safeParseAsync = async (data, params) => safeParseAsync(inst, data, params);
	inst.spa = inst.safeParseAsync;
	inst.encode = (data, params) => encode(inst, data, params);
	inst.decode = (data, params) => decode(inst, data, params);
	inst.encodeAsync = async (data, params) => encodeAsync(inst, data, params);
	inst.decodeAsync = async (data, params) => decodeAsync(inst, data, params);
	inst.safeEncode = (data, params) => safeEncode(inst, data, params);
	inst.safeDecode = (data, params) => safeDecode(inst, data, params);
	inst.safeEncodeAsync = async (data, params) => safeEncodeAsync(inst, data, params);
	inst.safeDecodeAsync = async (data, params) => safeDecodeAsync(inst, data, params);
	inst.refine = (check, params) => inst.check(refine(check, params));
	inst.superRefine = (refinement) => inst.check(superRefine(refinement));
	inst.overwrite = (fn) => inst.check(/* @__PURE__ */ _overwrite(fn));
	inst.optional = () => optional(inst);
	inst.exactOptional = () => exactOptional(inst);
	inst.nullable = () => nullable(inst);
	inst.nullish = () => optional(nullable(inst));
	inst.nonoptional = (params) => nonoptional(inst, params);
	inst.array = () => array$1(inst);
	inst.or = (arg) => union([inst, arg]);
	inst.and = (arg) => intersection(inst, arg);
	inst.transform = (tx) => pipe(inst, transform(tx));
	inst.default = (def) => _default(inst, def);
	inst.prefault = (def) => prefault(inst, def);
	inst.catch = (params) => _catch(inst, params);
	inst.pipe = (target) => pipe(inst, target);
	inst.readonly = () => readonly(inst);
	inst.describe = (description) => {
		const cl = inst.clone();
		globalRegistry.add(cl, { description });
		return cl;
	};
	Object.defineProperty(inst, "description", {
		get() {
			return globalRegistry.get(inst)?.description;
		},
		configurable: true
	});
	inst.meta = (...args) => {
		if (args.length === 0) return globalRegistry.get(inst);
		const cl = inst.clone();
		globalRegistry.add(cl, args[0]);
		return cl;
	};
	inst.isOptional = () => inst.safeParse(void 0).success;
	inst.isNullable = () => inst.safeParse(null).success;
	inst.apply = (fn) => fn(inst);
	return inst;
});
/** @internal */
var _ZodString = /* @__PURE__ */ $constructor("_ZodString", (inst, def) => {
	$ZodString.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => stringProcessor(inst, ctx, json, params);
	const bag = inst._zod.bag;
	inst.format = bag.format ?? null;
	inst.minLength = bag.minimum ?? null;
	inst.maxLength = bag.maximum ?? null;
	inst.regex = (...args) => inst.check(/* @__PURE__ */ _regex(...args));
	inst.includes = (...args) => inst.check(/* @__PURE__ */ _includes(...args));
	inst.startsWith = (...args) => inst.check(/* @__PURE__ */ _startsWith(...args));
	inst.endsWith = (...args) => inst.check(/* @__PURE__ */ _endsWith(...args));
	inst.min = (...args) => inst.check(/* @__PURE__ */ _minLength(...args));
	inst.max = (...args) => inst.check(/* @__PURE__ */ _maxLength(...args));
	inst.length = (...args) => inst.check(/* @__PURE__ */ _length(...args));
	inst.nonempty = (...args) => inst.check(/* @__PURE__ */ _minLength(1, ...args));
	inst.lowercase = (params) => inst.check(/* @__PURE__ */ _lowercase(params));
	inst.uppercase = (params) => inst.check(/* @__PURE__ */ _uppercase(params));
	inst.trim = () => inst.check(/* @__PURE__ */ _trim());
	inst.normalize = (...args) => inst.check(/* @__PURE__ */ _normalize(...args));
	inst.toLowerCase = () => inst.check(/* @__PURE__ */ _toLowerCase());
	inst.toUpperCase = () => inst.check(/* @__PURE__ */ _toUpperCase());
	inst.slugify = () => inst.check(/* @__PURE__ */ _slugify());
});
var ZodString$1 = /* @__PURE__ */ $constructor("ZodString", (inst, def) => {
	$ZodString.init(inst, def);
	_ZodString.init(inst, def);
	inst.email = (params) => inst.check(/* @__PURE__ */ _email(ZodEmail, params));
	inst.url = (params) => inst.check(/* @__PURE__ */ _url(ZodURL, params));
	inst.jwt = (params) => inst.check(/* @__PURE__ */ _jwt(ZodJWT, params));
	inst.emoji = (params) => inst.check(/* @__PURE__ */ _emoji(ZodEmoji, params));
	inst.guid = (params) => inst.check(/* @__PURE__ */ _guid(ZodGUID, params));
	inst.uuid = (params) => inst.check(/* @__PURE__ */ _uuid(ZodUUID, params));
	inst.uuidv4 = (params) => inst.check(/* @__PURE__ */ _uuidv4(ZodUUID, params));
	inst.uuidv6 = (params) => inst.check(/* @__PURE__ */ _uuidv6(ZodUUID, params));
	inst.uuidv7 = (params) => inst.check(/* @__PURE__ */ _uuidv7(ZodUUID, params));
	inst.nanoid = (params) => inst.check(/* @__PURE__ */ _nanoid(ZodNanoID, params));
	inst.guid = (params) => inst.check(/* @__PURE__ */ _guid(ZodGUID, params));
	inst.cuid = (params) => inst.check(/* @__PURE__ */ _cuid(ZodCUID, params));
	inst.cuid2 = (params) => inst.check(/* @__PURE__ */ _cuid2(ZodCUID2, params));
	inst.ulid = (params) => inst.check(/* @__PURE__ */ _ulid(ZodULID, params));
	inst.base64 = (params) => inst.check(/* @__PURE__ */ _base64(ZodBase64, params));
	inst.base64url = (params) => inst.check(/* @__PURE__ */ _base64url(ZodBase64URL, params));
	inst.xid = (params) => inst.check(/* @__PURE__ */ _xid(ZodXID, params));
	inst.ksuid = (params) => inst.check(/* @__PURE__ */ _ksuid(ZodKSUID, params));
	inst.ipv4 = (params) => inst.check(/* @__PURE__ */ _ipv4(ZodIPv4, params));
	inst.ipv6 = (params) => inst.check(/* @__PURE__ */ _ipv6(ZodIPv6, params));
	inst.cidrv4 = (params) => inst.check(/* @__PURE__ */ _cidrv4(ZodCIDRv4, params));
	inst.cidrv6 = (params) => inst.check(/* @__PURE__ */ _cidrv6(ZodCIDRv6, params));
	inst.e164 = (params) => inst.check(/* @__PURE__ */ _e164(ZodE164, params));
	inst.datetime = (params) => inst.check(datetime(params));
	inst.date = (params) => inst.check(date$1(params));
	inst.time = (params) => inst.check(time(params));
	inst.duration = (params) => inst.check(duration(params));
});
function string(params) {
	return /* @__PURE__ */ _string(ZodString$1, params);
}
var ZodStringFormat = /* @__PURE__ */ $constructor("ZodStringFormat", (inst, def) => {
	$ZodStringFormat.init(inst, def);
	_ZodString.init(inst, def);
});
var ZodEmail = /* @__PURE__ */ $constructor("ZodEmail", (inst, def) => {
	$ZodEmail.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function email(params) {
	return /* @__PURE__ */ _email(ZodEmail, params);
}
var ZodGUID = /* @__PURE__ */ $constructor("ZodGUID", (inst, def) => {
	$ZodGUID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function guid(params) {
	return /* @__PURE__ */ _guid(ZodGUID, params);
}
var ZodUUID = /* @__PURE__ */ $constructor("ZodUUID", (inst, def) => {
	$ZodUUID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function uuid(params) {
	return /* @__PURE__ */ _uuid(ZodUUID, params);
}
function uuidv4(params) {
	return /* @__PURE__ */ _uuidv4(ZodUUID, params);
}
function uuidv6(params) {
	return /* @__PURE__ */ _uuidv6(ZodUUID, params);
}
function uuidv7(params) {
	return /* @__PURE__ */ _uuidv7(ZodUUID, params);
}
var ZodURL = /* @__PURE__ */ $constructor("ZodURL", (inst, def) => {
	$ZodURL.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function url(params) {
	return /* @__PURE__ */ _url(ZodURL, params);
}
function httpUrl(params) {
	return /* @__PURE__ */ _url(ZodURL, {
		protocol: /^https?$/,
		hostname: domain,
		...normalizeParams(params)
	});
}
var ZodEmoji = /* @__PURE__ */ $constructor("ZodEmoji", (inst, def) => {
	$ZodEmoji.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function emoji(params) {
	return /* @__PURE__ */ _emoji(ZodEmoji, params);
}
var ZodNanoID = /* @__PURE__ */ $constructor("ZodNanoID", (inst, def) => {
	$ZodNanoID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function nanoid(params) {
	return /* @__PURE__ */ _nanoid(ZodNanoID, params);
}
var ZodCUID = /* @__PURE__ */ $constructor("ZodCUID", (inst, def) => {
	$ZodCUID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function cuid(params) {
	return /* @__PURE__ */ _cuid(ZodCUID, params);
}
var ZodCUID2 = /* @__PURE__ */ $constructor("ZodCUID2", (inst, def) => {
	$ZodCUID2.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function cuid2(params) {
	return /* @__PURE__ */ _cuid2(ZodCUID2, params);
}
var ZodULID = /* @__PURE__ */ $constructor("ZodULID", (inst, def) => {
	$ZodULID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function ulid(params) {
	return /* @__PURE__ */ _ulid(ZodULID, params);
}
var ZodXID = /* @__PURE__ */ $constructor("ZodXID", (inst, def) => {
	$ZodXID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function xid(params) {
	return /* @__PURE__ */ _xid(ZodXID, params);
}
var ZodKSUID = /* @__PURE__ */ $constructor("ZodKSUID", (inst, def) => {
	$ZodKSUID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function ksuid(params) {
	return /* @__PURE__ */ _ksuid(ZodKSUID, params);
}
var ZodIPv4 = /* @__PURE__ */ $constructor("ZodIPv4", (inst, def) => {
	$ZodIPv4.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function ipv4(params) {
	return /* @__PURE__ */ _ipv4(ZodIPv4, params);
}
var ZodMAC = /* @__PURE__ */ $constructor("ZodMAC", (inst, def) => {
	$ZodMAC.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function mac(params) {
	return /* @__PURE__ */ _mac(ZodMAC, params);
}
var ZodIPv6 = /* @__PURE__ */ $constructor("ZodIPv6", (inst, def) => {
	$ZodIPv6.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function ipv6(params) {
	return /* @__PURE__ */ _ipv6(ZodIPv6, params);
}
var ZodCIDRv4 = /* @__PURE__ */ $constructor("ZodCIDRv4", (inst, def) => {
	$ZodCIDRv4.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function cidrv4(params) {
	return /* @__PURE__ */ _cidrv4(ZodCIDRv4, params);
}
var ZodCIDRv6 = /* @__PURE__ */ $constructor("ZodCIDRv6", (inst, def) => {
	$ZodCIDRv6.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function cidrv6(params) {
	return /* @__PURE__ */ _cidrv6(ZodCIDRv6, params);
}
var ZodBase64 = /* @__PURE__ */ $constructor("ZodBase64", (inst, def) => {
	$ZodBase64.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function base64(params) {
	return /* @__PURE__ */ _base64(ZodBase64, params);
}
var ZodBase64URL = /* @__PURE__ */ $constructor("ZodBase64URL", (inst, def) => {
	$ZodBase64URL.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function base64url(params) {
	return /* @__PURE__ */ _base64url(ZodBase64URL, params);
}
var ZodE164 = /* @__PURE__ */ $constructor("ZodE164", (inst, def) => {
	$ZodE164.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function e164(params) {
	return /* @__PURE__ */ _e164(ZodE164, params);
}
var ZodJWT = /* @__PURE__ */ $constructor("ZodJWT", (inst, def) => {
	$ZodJWT.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function jwt(params) {
	return /* @__PURE__ */ _jwt(ZodJWT, params);
}
var ZodCustomStringFormat = /* @__PURE__ */ $constructor("ZodCustomStringFormat", (inst, def) => {
	$ZodCustomStringFormat.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function stringFormat(format, fnOrRegex, _params = {}) {
	return /* @__PURE__ */ _stringFormat(ZodCustomStringFormat, format, fnOrRegex, _params);
}
function hostname(_params) {
	return /* @__PURE__ */ _stringFormat(ZodCustomStringFormat, "hostname", hostname$1, _params);
}
function hex(_params) {
	return /* @__PURE__ */ _stringFormat(ZodCustomStringFormat, "hex", hex$1, _params);
}
function hash(alg, params) {
	const format = `${alg}_${params?.enc ?? "hex"}`;
	const regex = regexes_exports[format];
	if (!regex) throw new Error(`Unrecognized hash format: ${format}`);
	return /* @__PURE__ */ _stringFormat(ZodCustomStringFormat, format, regex, params);
}
var ZodNumber$1 = /* @__PURE__ */ $constructor("ZodNumber", (inst, def) => {
	$ZodNumber.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => numberProcessor(inst, ctx, json, params);
	inst.gt = (value, params) => inst.check(/* @__PURE__ */ _gt(value, params));
	inst.gte = (value, params) => inst.check(/* @__PURE__ */ _gte(value, params));
	inst.min = (value, params) => inst.check(/* @__PURE__ */ _gte(value, params));
	inst.lt = (value, params) => inst.check(/* @__PURE__ */ _lt(value, params));
	inst.lte = (value, params) => inst.check(/* @__PURE__ */ _lte(value, params));
	inst.max = (value, params) => inst.check(/* @__PURE__ */ _lte(value, params));
	inst.int = (params) => inst.check(int(params));
	inst.safe = (params) => inst.check(int(params));
	inst.positive = (params) => inst.check(/* @__PURE__ */ _gt(0, params));
	inst.nonnegative = (params) => inst.check(/* @__PURE__ */ _gte(0, params));
	inst.negative = (params) => inst.check(/* @__PURE__ */ _lt(0, params));
	inst.nonpositive = (params) => inst.check(/* @__PURE__ */ _lte(0, params));
	inst.multipleOf = (value, params) => inst.check(/* @__PURE__ */ _multipleOf(value, params));
	inst.step = (value, params) => inst.check(/* @__PURE__ */ _multipleOf(value, params));
	inst.finite = () => inst;
	const bag = inst._zod.bag;
	inst.minValue = Math.max(bag.minimum ?? Number.NEGATIVE_INFINITY, bag.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null;
	inst.maxValue = Math.min(bag.maximum ?? Number.POSITIVE_INFINITY, bag.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null;
	inst.isInt = (bag.format ?? "").includes("int") || Number.isSafeInteger(bag.multipleOf ?? .5);
	inst.isFinite = true;
	inst.format = bag.format ?? null;
});
function number(params) {
	return /* @__PURE__ */ _number(ZodNumber$1, params);
}
var ZodNumberFormat = /* @__PURE__ */ $constructor("ZodNumberFormat", (inst, def) => {
	$ZodNumberFormat.init(inst, def);
	ZodNumber$1.init(inst, def);
});
function int(params) {
	return /* @__PURE__ */ _int(ZodNumberFormat, params);
}
function float32(params) {
	return /* @__PURE__ */ _float32(ZodNumberFormat, params);
}
function float64(params) {
	return /* @__PURE__ */ _float64(ZodNumberFormat, params);
}
function int32(params) {
	return /* @__PURE__ */ _int32(ZodNumberFormat, params);
}
function uint32(params) {
	return /* @__PURE__ */ _uint32(ZodNumberFormat, params);
}
var ZodBoolean$1 = /* @__PURE__ */ $constructor("ZodBoolean", (inst, def) => {
	$ZodBoolean.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => booleanProcessor(inst, ctx, json, params);
});
function boolean(params) {
	return /* @__PURE__ */ _boolean(ZodBoolean$1, params);
}
var ZodBigInt$1 = /* @__PURE__ */ $constructor("ZodBigInt", (inst, def) => {
	$ZodBigInt.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => bigintProcessor(inst, ctx, json, params);
	inst.gte = (value, params) => inst.check(/* @__PURE__ */ _gte(value, params));
	inst.min = (value, params) => inst.check(/* @__PURE__ */ _gte(value, params));
	inst.gt = (value, params) => inst.check(/* @__PURE__ */ _gt(value, params));
	inst.gte = (value, params) => inst.check(/* @__PURE__ */ _gte(value, params));
	inst.min = (value, params) => inst.check(/* @__PURE__ */ _gte(value, params));
	inst.lt = (value, params) => inst.check(/* @__PURE__ */ _lt(value, params));
	inst.lte = (value, params) => inst.check(/* @__PURE__ */ _lte(value, params));
	inst.max = (value, params) => inst.check(/* @__PURE__ */ _lte(value, params));
	inst.positive = (params) => inst.check(/* @__PURE__ */ _gt(BigInt(0), params));
	inst.negative = (params) => inst.check(/* @__PURE__ */ _lt(BigInt(0), params));
	inst.nonpositive = (params) => inst.check(/* @__PURE__ */ _lte(BigInt(0), params));
	inst.nonnegative = (params) => inst.check(/* @__PURE__ */ _gte(BigInt(0), params));
	inst.multipleOf = (value, params) => inst.check(/* @__PURE__ */ _multipleOf(value, params));
	const bag = inst._zod.bag;
	inst.minValue = bag.minimum ?? null;
	inst.maxValue = bag.maximum ?? null;
	inst.format = bag.format ?? null;
});
function bigint(params) {
	return /* @__PURE__ */ _bigint(ZodBigInt$1, params);
}
var ZodBigIntFormat = /* @__PURE__ */ $constructor("ZodBigIntFormat", (inst, def) => {
	$ZodBigIntFormat.init(inst, def);
	ZodBigInt$1.init(inst, def);
});
function int64(params) {
	return /* @__PURE__ */ _int64(ZodBigIntFormat, params);
}
function uint64(params) {
	return /* @__PURE__ */ _uint64(ZodBigIntFormat, params);
}
var ZodSymbol$1 = /* @__PURE__ */ $constructor("ZodSymbol", (inst, def) => {
	$ZodSymbol.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => symbolProcessor(inst, ctx, json, params);
});
function symbol$3(params) {
	return /* @__PURE__ */ _symbol(ZodSymbol$1, params);
}
var ZodUndefined$1 = /* @__PURE__ */ $constructor("ZodUndefined", (inst, def) => {
	$ZodUndefined.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => undefinedProcessor(inst, ctx, json, params);
});
function _undefined(params) {
	return /* @__PURE__ */ _undefined$1(ZodUndefined$1, params);
}
var ZodNull$1 = /* @__PURE__ */ $constructor("ZodNull", (inst, def) => {
	$ZodNull.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => nullProcessor(inst, ctx, json, params);
});
function _null(params) {
	return /* @__PURE__ */ _null$1(ZodNull$1, params);
}
var ZodAny$1 = /* @__PURE__ */ $constructor("ZodAny", (inst, def) => {
	$ZodAny.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => anyProcessor(inst, ctx, json, params);
});
function any() {
	return /* @__PURE__ */ _any(ZodAny$1);
}
var ZodUnknown$1 = /* @__PURE__ */ $constructor("ZodUnknown", (inst, def) => {
	$ZodUnknown.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => unknownProcessor(inst, ctx, json, params);
});
function unknown() {
	return /* @__PURE__ */ _unknown(ZodUnknown$1);
}
var ZodNever$1 = /* @__PURE__ */ $constructor("ZodNever", (inst, def) => {
	$ZodNever.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => neverProcessor(inst, ctx, json, params);
});
function never(params) {
	return /* @__PURE__ */ _never(ZodNever$1, params);
}
var ZodVoid$1 = /* @__PURE__ */ $constructor("ZodVoid", (inst, def) => {
	$ZodVoid.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => voidProcessor(inst, ctx, json, params);
});
function _void(params) {
	return /* @__PURE__ */ _void$1(ZodVoid$1, params);
}
var ZodDate$1 = /* @__PURE__ */ $constructor("ZodDate", (inst, def) => {
	$ZodDate.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => dateProcessor(inst, ctx, json, params);
	inst.min = (value, params) => inst.check(/* @__PURE__ */ _gte(value, params));
	inst.max = (value, params) => inst.check(/* @__PURE__ */ _lte(value, params));
	const c = inst._zod.bag;
	inst.minDate = c.minimum ? new Date(c.minimum) : null;
	inst.maxDate = c.maximum ? new Date(c.maximum) : null;
});
function date(params) {
	return /* @__PURE__ */ _date(ZodDate$1, params);
}
var ZodArray$1 = /* @__PURE__ */ $constructor("ZodArray", (inst, def) => {
	$ZodArray.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => arrayProcessor(inst, ctx, json, params);
	inst.element = def.element;
	inst.min = (minLength, params) => inst.check(/* @__PURE__ */ _minLength(minLength, params));
	inst.nonempty = (params) => inst.check(/* @__PURE__ */ _minLength(1, params));
	inst.max = (maxLength, params) => inst.check(/* @__PURE__ */ _maxLength(maxLength, params));
	inst.length = (len, params) => inst.check(/* @__PURE__ */ _length(len, params));
	inst.unwrap = () => inst.element;
});
function array$1(element, params) {
	return /* @__PURE__ */ _array(ZodArray$1, element, params);
}
function keyof(schema) {
	const shape = schema._zod.def.shape;
	return _enum(Object.keys(shape));
}
var ZodObject$1 = /* @__PURE__ */ $constructor("ZodObject", (inst, def) => {
	$ZodObjectJIT.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => objectProcessor(inst, ctx, json, params);
	defineLazy(inst, "shape", () => {
		return def.shape;
	});
	inst.keyof = () => _enum(Object.keys(inst._zod.def.shape));
	inst.catchall = (catchall) => inst.clone({
		...inst._zod.def,
		catchall
	});
	inst.passthrough = () => inst.clone({
		...inst._zod.def,
		catchall: unknown()
	});
	inst.loose = () => inst.clone({
		...inst._zod.def,
		catchall: unknown()
	});
	inst.strict = () => inst.clone({
		...inst._zod.def,
		catchall: never()
	});
	inst.strip = () => inst.clone({
		...inst._zod.def,
		catchall: void 0
	});
	inst.extend = (incoming) => {
		return extend(inst, incoming);
	};
	inst.safeExtend = (incoming) => {
		return safeExtend(inst, incoming);
	};
	inst.merge = (other) => merge(inst, other);
	inst.pick = (mask) => pick(inst, mask);
	inst.omit = (mask) => omit(inst, mask);
	inst.partial = (...args) => partial(ZodOptional$1, inst, args[0]);
	inst.required = (...args) => required(ZodNonOptional, inst, args[0]);
});
function object$1(shape, params) {
	return new ZodObject$1({
		type: "object",
		shape: shape ?? {},
		...normalizeParams(params)
	});
}
function strictObject(shape, params) {
	return new ZodObject$1({
		type: "object",
		shape,
		catchall: never(),
		...normalizeParams(params)
	});
}
function looseObject(shape, params) {
	return new ZodObject$1({
		type: "object",
		shape,
		catchall: unknown(),
		...normalizeParams(params)
	});
}
var ZodUnion$1 = /* @__PURE__ */ $constructor("ZodUnion", (inst, def) => {
	$ZodUnion.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => unionProcessor(inst, ctx, json, params);
	inst.options = def.options;
});
function union(options, params) {
	return new ZodUnion$1({
		type: "union",
		options,
		...normalizeParams(params)
	});
}
var ZodXor = /* @__PURE__ */ $constructor("ZodXor", (inst, def) => {
	ZodUnion$1.init(inst, def);
	$ZodXor.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => unionProcessor(inst, ctx, json, params);
	inst.options = def.options;
});
/** Creates an exclusive union (XOR) where exactly one option must match.
* Unlike regular unions that succeed when any option matches, xor fails if
* zero or more than one option matches the input. */
function xor(options, params) {
	return new ZodXor({
		type: "union",
		options,
		inclusive: false,
		...normalizeParams(params)
	});
}
var ZodDiscriminatedUnion$1 = /* @__PURE__ */ $constructor("ZodDiscriminatedUnion", (inst, def) => {
	ZodUnion$1.init(inst, def);
	$ZodDiscriminatedUnion.init(inst, def);
});
function discriminatedUnion(discriminator, options, params) {
	return new ZodDiscriminatedUnion$1({
		type: "union",
		options,
		discriminator,
		...normalizeParams(params)
	});
}
var ZodIntersection$1 = /* @__PURE__ */ $constructor("ZodIntersection", (inst, def) => {
	$ZodIntersection.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => intersectionProcessor(inst, ctx, json, params);
});
function intersection(left, right) {
	return new ZodIntersection$1({
		type: "intersection",
		left,
		right
	});
}
var ZodTuple$1 = /* @__PURE__ */ $constructor("ZodTuple", (inst, def) => {
	$ZodTuple.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => tupleProcessor(inst, ctx, json, params);
	inst.rest = (rest) => inst.clone({
		...inst._zod.def,
		rest
	});
});
function tuple(items, _paramsOrRest, _params) {
	const hasRest = _paramsOrRest instanceof $ZodType;
	return new ZodTuple$1({
		type: "tuple",
		items,
		rest: hasRest ? _paramsOrRest : null,
		...normalizeParams(hasRest ? _params : _paramsOrRest)
	});
}
var ZodRecord$1 = /* @__PURE__ */ $constructor("ZodRecord", (inst, def) => {
	$ZodRecord.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => recordProcessor(inst, ctx, json, params);
	inst.keyType = def.keyType;
	inst.valueType = def.valueType;
});
function record(keyType, valueType, params) {
	return new ZodRecord$1({
		type: "record",
		keyType,
		valueType,
		...normalizeParams(params)
	});
}
function partialRecord(keyType, valueType, params) {
	const k = clone(keyType);
	k._zod.values = void 0;
	return new ZodRecord$1({
		type: "record",
		keyType: k,
		valueType,
		...normalizeParams(params)
	});
}
function looseRecord(keyType, valueType, params) {
	return new ZodRecord$1({
		type: "record",
		keyType,
		valueType,
		mode: "loose",
		...normalizeParams(params)
	});
}
var ZodMap$1 = /* @__PURE__ */ $constructor("ZodMap", (inst, def) => {
	$ZodMap.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => mapProcessor(inst, ctx, json, params);
	inst.keyType = def.keyType;
	inst.valueType = def.valueType;
	inst.min = (...args) => inst.check(/* @__PURE__ */ _minSize(...args));
	inst.nonempty = (params) => inst.check(/* @__PURE__ */ _minSize(1, params));
	inst.max = (...args) => inst.check(/* @__PURE__ */ _maxSize(...args));
	inst.size = (...args) => inst.check(/* @__PURE__ */ _size(...args));
});
function map(keyType, valueType, params) {
	return new ZodMap$1({
		type: "map",
		keyType,
		valueType,
		...normalizeParams(params)
	});
}
var ZodSet$1 = /* @__PURE__ */ $constructor("ZodSet", (inst, def) => {
	$ZodSet.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => setProcessor(inst, ctx, json, params);
	inst.min = (...args) => inst.check(/* @__PURE__ */ _minSize(...args));
	inst.nonempty = (params) => inst.check(/* @__PURE__ */ _minSize(1, params));
	inst.max = (...args) => inst.check(/* @__PURE__ */ _maxSize(...args));
	inst.size = (...args) => inst.check(/* @__PURE__ */ _size(...args));
});
function set(valueType, params) {
	return new ZodSet$1({
		type: "set",
		valueType,
		...normalizeParams(params)
	});
}
var ZodEnum$1 = /* @__PURE__ */ $constructor("ZodEnum", (inst, def) => {
	$ZodEnum.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => enumProcessor(inst, ctx, json, params);
	inst.enum = def.entries;
	inst.options = Object.values(def.entries);
	const keys = new Set(Object.keys(def.entries));
	inst.extract = (values, params) => {
		const newEntries = {};
		for (const value of values) if (keys.has(value)) newEntries[value] = def.entries[value];
		else throw new Error(`Key ${value} not found in enum`);
		return new ZodEnum$1({
			...def,
			checks: [],
			...normalizeParams(params),
			entries: newEntries
		});
	};
	inst.exclude = (values, params) => {
		const newEntries = { ...def.entries };
		for (const value of values) if (keys.has(value)) delete newEntries[value];
		else throw new Error(`Key ${value} not found in enum`);
		return new ZodEnum$1({
			...def,
			checks: [],
			...normalizeParams(params),
			entries: newEntries
		});
	};
});
function _enum(values, params) {
	return new ZodEnum$1({
		type: "enum",
		entries: Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values,
		...normalizeParams(params)
	});
}
/** @deprecated This API has been merged into `z.enum()`. Use `z.enum()` instead.
*
* ```ts
* enum Colors { red, green, blue }
* z.enum(Colors);
* ```
*/
function nativeEnum(entries, params) {
	return new ZodEnum$1({
		type: "enum",
		entries,
		...normalizeParams(params)
	});
}
var ZodLiteral$1 = /* @__PURE__ */ $constructor("ZodLiteral", (inst, def) => {
	$ZodLiteral.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => literalProcessor(inst, ctx, json, params);
	inst.values = new Set(def.values);
	Object.defineProperty(inst, "value", { get() {
		if (def.values.length > 1) throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
		return def.values[0];
	} });
});
function literal(value, params) {
	return new ZodLiteral$1({
		type: "literal",
		values: Array.isArray(value) ? value : [value],
		...normalizeParams(params)
	});
}
var ZodFile = /* @__PURE__ */ $constructor("ZodFile", (inst, def) => {
	$ZodFile.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => fileProcessor(inst, ctx, json, params);
	inst.min = (size, params) => inst.check(/* @__PURE__ */ _minSize(size, params));
	inst.max = (size, params) => inst.check(/* @__PURE__ */ _maxSize(size, params));
	inst.mime = (types, params) => inst.check(/* @__PURE__ */ _mime(Array.isArray(types) ? types : [types], params));
});
function file(params) {
	return /* @__PURE__ */ _file(ZodFile, params);
}
var ZodTransform = /* @__PURE__ */ $constructor("ZodTransform", (inst, def) => {
	$ZodTransform.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => transformProcessor(inst, ctx, json, params);
	inst._zod.parse = (payload, _ctx) => {
		if (_ctx.direction === "backward") throw new $ZodEncodeError(inst.constructor.name);
		payload.addIssue = (issue$1) => {
			if (typeof issue$1 === "string") payload.issues.push(issue(issue$1, payload.value, def));
			else {
				const _issue = issue$1;
				if (_issue.fatal) _issue.continue = false;
				_issue.code ?? (_issue.code = "custom");
				_issue.input ?? (_issue.input = payload.value);
				_issue.inst ?? (_issue.inst = inst);
				payload.issues.push(issue(_issue));
			}
		};
		const output = def.transform(payload.value, payload);
		if (output instanceof Promise) return output.then((output) => {
			payload.value = output;
			return payload;
		});
		payload.value = output;
		return payload;
	};
});
function transform(fn) {
	return new ZodTransform({
		type: "transform",
		transform: fn
	});
}
var ZodOptional$1 = /* @__PURE__ */ $constructor("ZodOptional", (inst, def) => {
	$ZodOptional.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => optionalProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
});
function optional(innerType) {
	return new ZodOptional$1({
		type: "optional",
		innerType
	});
}
var ZodExactOptional = /* @__PURE__ */ $constructor("ZodExactOptional", (inst, def) => {
	$ZodExactOptional.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => optionalProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
});
function exactOptional(innerType) {
	return new ZodExactOptional({
		type: "optional",
		innerType
	});
}
var ZodNullable$1 = /* @__PURE__ */ $constructor("ZodNullable", (inst, def) => {
	$ZodNullable.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => nullableProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
});
function nullable(innerType) {
	return new ZodNullable$1({
		type: "nullable",
		innerType
	});
}
function nullish(innerType) {
	return optional(nullable(innerType));
}
var ZodDefault$1 = /* @__PURE__ */ $constructor("ZodDefault", (inst, def) => {
	$ZodDefault.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => defaultProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
	inst.removeDefault = inst.unwrap;
});
function _default(innerType, defaultValue) {
	return new ZodDefault$1({
		type: "default",
		innerType,
		get defaultValue() {
			return typeof defaultValue === "function" ? defaultValue() : shallowClone(defaultValue);
		}
	});
}
var ZodPrefault = /* @__PURE__ */ $constructor("ZodPrefault", (inst, def) => {
	$ZodPrefault.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => prefaultProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
});
function prefault(innerType, defaultValue) {
	return new ZodPrefault({
		type: "prefault",
		innerType,
		get defaultValue() {
			return typeof defaultValue === "function" ? defaultValue() : shallowClone(defaultValue);
		}
	});
}
var ZodNonOptional = /* @__PURE__ */ $constructor("ZodNonOptional", (inst, def) => {
	$ZodNonOptional.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => nonoptionalProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
});
function nonoptional(innerType, params) {
	return new ZodNonOptional({
		type: "nonoptional",
		innerType,
		...normalizeParams(params)
	});
}
var ZodSuccess = /* @__PURE__ */ $constructor("ZodSuccess", (inst, def) => {
	$ZodSuccess.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => successProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
});
function success(innerType) {
	return new ZodSuccess({
		type: "success",
		innerType
	});
}
var ZodCatch$1 = /* @__PURE__ */ $constructor("ZodCatch", (inst, def) => {
	$ZodCatch.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => catchProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
	inst.removeCatch = inst.unwrap;
});
function _catch(innerType, catchValue) {
	return new ZodCatch$1({
		type: "catch",
		innerType,
		catchValue: typeof catchValue === "function" ? catchValue : () => catchValue
	});
}
var ZodNaN$1 = /* @__PURE__ */ $constructor("ZodNaN", (inst, def) => {
	$ZodNaN.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => nanProcessor(inst, ctx, json, params);
});
function nan(params) {
	return /* @__PURE__ */ _nan(ZodNaN$1, params);
}
var ZodPipe = /* @__PURE__ */ $constructor("ZodPipe", (inst, def) => {
	$ZodPipe.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => pipeProcessor(inst, ctx, json, params);
	inst.in = def.in;
	inst.out = def.out;
});
function pipe(in_, out) {
	return new ZodPipe({
		type: "pipe",
		in: in_,
		out
	});
}
var ZodCodec = /* @__PURE__ */ $constructor("ZodCodec", (inst, def) => {
	ZodPipe.init(inst, def);
	$ZodCodec.init(inst, def);
});
function codec(in_, out, params) {
	return new ZodCodec({
		type: "pipe",
		in: in_,
		out,
		transform: params.decode,
		reverseTransform: params.encode
	});
}
var ZodReadonly$1 = /* @__PURE__ */ $constructor("ZodReadonly", (inst, def) => {
	$ZodReadonly.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => readonlyProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
});
function readonly(innerType) {
	return new ZodReadonly$1({
		type: "readonly",
		innerType
	});
}
var ZodTemplateLiteral = /* @__PURE__ */ $constructor("ZodTemplateLiteral", (inst, def) => {
	$ZodTemplateLiteral.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => templateLiteralProcessor(inst, ctx, json, params);
});
function templateLiteral(parts, params) {
	return new ZodTemplateLiteral({
		type: "template_literal",
		parts,
		...normalizeParams(params)
	});
}
var ZodLazy$1 = /* @__PURE__ */ $constructor("ZodLazy", (inst, def) => {
	$ZodLazy.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => lazyProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.getter();
});
function lazy(getter) {
	return new ZodLazy$1({
		type: "lazy",
		getter
	});
}
var ZodPromise$1 = /* @__PURE__ */ $constructor("ZodPromise", (inst, def) => {
	$ZodPromise.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => promiseProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
});
function promise(innerType) {
	return new ZodPromise$1({
		type: "promise",
		innerType
	});
}
var ZodFunction$1 = /* @__PURE__ */ $constructor("ZodFunction", (inst, def) => {
	$ZodFunction.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => functionProcessor(inst, ctx, json, params);
});
function _function(params) {
	return new ZodFunction$1({
		type: "function",
		input: Array.isArray(params?.input) ? tuple(params?.input) : params?.input ?? array$1(unknown()),
		output: params?.output ?? unknown()
	});
}
var ZodCustom = /* @__PURE__ */ $constructor("ZodCustom", (inst, def) => {
	$ZodCustom.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => customProcessor(inst, ctx, json, params);
});
function check(fn) {
	const ch = new $ZodCheck({ check: "custom" });
	ch._zod.check = fn;
	return ch;
}
function custom(fn, _params) {
	return /* @__PURE__ */ _custom(ZodCustom, fn ?? (() => true), _params);
}
function refine(fn, _params = {}) {
	return /* @__PURE__ */ _refine(ZodCustom, fn, _params);
}
function superRefine(fn) {
	return /* @__PURE__ */ _superRefine(fn);
}
var describe = describe$1;
var meta = meta$1;
function _instanceof(cls, params = {}) {
	const inst = new ZodCustom({
		type: "custom",
		check: "custom",
		fn: (data) => data instanceof cls,
		abort: true,
		...normalizeParams(params)
	});
	inst._zod.bag.Class = cls;
	inst._zod.check = (payload) => {
		if (!(payload.value instanceof cls)) payload.issues.push({
			code: "invalid_type",
			expected: cls.name,
			input: payload.value,
			inst,
			path: [...inst._zod.def.path ?? []]
		});
	};
	return inst;
}
var stringbool = (...args) => /* @__PURE__ */ _stringbool({
	Codec: ZodCodec,
	Boolean: ZodBoolean$1,
	String: ZodString$1
}, ...args);
function json$1(params) {
	const jsonSchema = lazy(() => {
		return union([
			string(params),
			number(),
			boolean(),
			_null(),
			array$1(jsonSchema),
			record(string(), jsonSchema)
		]);
	});
	return jsonSchema;
}
function preprocess(fn, schema) {
	return pipe(transform(fn), schema);
}
//#endregion
//#region node_modules/zod/v3/helpers/util.js
var util;
(function(util) {
	util.assertEqual = (_) => {};
	function assertIs(_arg) {}
	util.assertIs = assertIs;
	function assertNever(_x) {
		throw new Error();
	}
	util.assertNever = assertNever;
	util.arrayToEnum = (items) => {
		const obj = {};
		for (const item of items) obj[item] = item;
		return obj;
	};
	util.getValidEnumValues = (obj) => {
		const validKeys = util.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
		const filtered = {};
		for (const k of validKeys) filtered[k] = obj[k];
		return util.objectValues(filtered);
	};
	util.objectValues = (obj) => {
		return util.objectKeys(obj).map(function(e) {
			return obj[e];
		});
	};
	util.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
		const keys = [];
		for (const key in object) if (Object.prototype.hasOwnProperty.call(object, key)) keys.push(key);
		return keys;
	};
	util.find = (arr, checker) => {
		for (const item of arr) if (checker(item)) return item;
	};
	util.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
	function joinValues(array, separator = " | ") {
		return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
	}
	util.joinValues = joinValues;
	util.jsonStringifyReplacer = (_, value) => {
		if (typeof value === "bigint") return value.toString();
		return value;
	};
})(util || (util = {}));
var objectUtil;
(function(objectUtil) {
	objectUtil.mergeShapes = (first, second) => {
		return {
			...first,
			...second
		};
	};
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
	"string",
	"nan",
	"number",
	"integer",
	"float",
	"boolean",
	"date",
	"bigint",
	"symbol",
	"function",
	"undefined",
	"null",
	"array",
	"object",
	"unknown",
	"promise",
	"void",
	"never",
	"map",
	"set"
]);
var getParsedType = (data) => {
	switch (typeof data) {
		case "undefined": return ZodParsedType.undefined;
		case "string": return ZodParsedType.string;
		case "number": return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
		case "boolean": return ZodParsedType.boolean;
		case "function": return ZodParsedType.function;
		case "bigint": return ZodParsedType.bigint;
		case "symbol": return ZodParsedType.symbol;
		case "object":
			if (Array.isArray(data)) return ZodParsedType.array;
			if (data === null) return ZodParsedType.null;
			if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") return ZodParsedType.promise;
			if (typeof Map !== "undefined" && data instanceof Map) return ZodParsedType.map;
			if (typeof Set !== "undefined" && data instanceof Set) return ZodParsedType.set;
			if (typeof Date !== "undefined" && data instanceof Date) return ZodParsedType.date;
			return ZodParsedType.object;
		default: return ZodParsedType.unknown;
	}
};
//#endregion
//#region node_modules/zod/v3/ZodError.js
var ZodIssueCode = util.arrayToEnum([
	"invalid_type",
	"invalid_literal",
	"custom",
	"invalid_union",
	"invalid_union_discriminator",
	"invalid_enum_value",
	"unrecognized_keys",
	"invalid_arguments",
	"invalid_return_type",
	"invalid_date",
	"invalid_string",
	"too_small",
	"too_big",
	"invalid_intersection_types",
	"not_multiple_of",
	"not_finite"
]);
var ZodError = class ZodError extends Error {
	get errors() {
		return this.issues;
	}
	constructor(issues) {
		super();
		this.issues = [];
		this.addIssue = (sub) => {
			this.issues = [...this.issues, sub];
		};
		this.addIssues = (subs = []) => {
			this.issues = [...this.issues, ...subs];
		};
		const actualProto = new.target.prototype;
		if (Object.setPrototypeOf) Object.setPrototypeOf(this, actualProto);
		else this.__proto__ = actualProto;
		this.name = "ZodError";
		this.issues = issues;
	}
	format(_mapper) {
		const mapper = _mapper || function(issue) {
			return issue.message;
		};
		const fieldErrors = { _errors: [] };
		const processError = (error) => {
			for (const issue of error.issues) if (issue.code === "invalid_union") issue.unionErrors.map(processError);
			else if (issue.code === "invalid_return_type") processError(issue.returnTypeError);
			else if (issue.code === "invalid_arguments") processError(issue.argumentsError);
			else if (issue.path.length === 0) fieldErrors._errors.push(mapper(issue));
			else {
				let curr = fieldErrors;
				let i = 0;
				while (i < issue.path.length) {
					const el = issue.path[i];
					if (!(i === issue.path.length - 1)) curr[el] = curr[el] || { _errors: [] };
					else {
						curr[el] = curr[el] || { _errors: [] };
						curr[el]._errors.push(mapper(issue));
					}
					curr = curr[el];
					i++;
				}
			}
		};
		processError(this);
		return fieldErrors;
	}
	static assert(value) {
		if (!(value instanceof ZodError)) throw new Error(`Not a ZodError: ${value}`);
	}
	toString() {
		return this.message;
	}
	get message() {
		return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
	}
	get isEmpty() {
		return this.issues.length === 0;
	}
	flatten(mapper = (issue) => issue.message) {
		const fieldErrors = Object.create(null);
		const formErrors = [];
		for (const sub of this.issues) if (sub.path.length > 0) {
			const firstEl = sub.path[0];
			fieldErrors[firstEl] = fieldErrors[firstEl] || [];
			fieldErrors[firstEl].push(mapper(sub));
		} else formErrors.push(mapper(sub));
		return {
			formErrors,
			fieldErrors
		};
	}
	get formErrors() {
		return this.flatten();
	}
};
ZodError.create = (issues) => {
	return new ZodError(issues);
};
//#endregion
//#region node_modules/zod/v3/locales/en.js
var errorMap = (issue, _ctx) => {
	let message;
	switch (issue.code) {
		case ZodIssueCode.invalid_type:
			if (issue.received === ZodParsedType.undefined) message = "Required";
			else message = `Expected ${issue.expected}, received ${issue.received}`;
			break;
		case ZodIssueCode.invalid_literal:
			message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
			break;
		case ZodIssueCode.unrecognized_keys:
			message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
			break;
		case ZodIssueCode.invalid_union:
			message = `Invalid input`;
			break;
		case ZodIssueCode.invalid_union_discriminator:
			message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
			break;
		case ZodIssueCode.invalid_enum_value:
			message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
			break;
		case ZodIssueCode.invalid_arguments:
			message = `Invalid function arguments`;
			break;
		case ZodIssueCode.invalid_return_type:
			message = `Invalid function return type`;
			break;
		case ZodIssueCode.invalid_date:
			message = `Invalid date`;
			break;
		case ZodIssueCode.invalid_string:
			if (typeof issue.validation === "object") if ("includes" in issue.validation) {
				message = `Invalid input: must include "${issue.validation.includes}"`;
				if (typeof issue.validation.position === "number") message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
			} else if ("startsWith" in issue.validation) message = `Invalid input: must start with "${issue.validation.startsWith}"`;
			else if ("endsWith" in issue.validation) message = `Invalid input: must end with "${issue.validation.endsWith}"`;
			else util.assertNever(issue.validation);
			else if (issue.validation !== "regex") message = `Invalid ${issue.validation}`;
			else message = "Invalid";
			break;
		case ZodIssueCode.too_small:
			if (issue.type === "array") message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
			else if (issue.type === "string") message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
			else if (issue.type === "number") message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
			else if (issue.type === "bigint") message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
			else if (issue.type === "date") message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
			else message = "Invalid input";
			break;
		case ZodIssueCode.too_big:
			if (issue.type === "array") message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
			else if (issue.type === "string") message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
			else if (issue.type === "number") message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
			else if (issue.type === "bigint") message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
			else if (issue.type === "date") message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
			else message = "Invalid input";
			break;
		case ZodIssueCode.custom:
			message = `Invalid input`;
			break;
		case ZodIssueCode.invalid_intersection_types:
			message = `Intersection results could not be merged`;
			break;
		case ZodIssueCode.not_multiple_of:
			message = `Number must be a multiple of ${issue.multipleOf}`;
			break;
		case ZodIssueCode.not_finite:
			message = "Number must be finite";
			break;
		default:
			message = _ctx.defaultError;
			util.assertNever(issue);
	}
	return { message };
};
//#endregion
//#region node_modules/zod/v3/errors.js
var overrideErrorMap = errorMap;
function getErrorMap() {
	return overrideErrorMap;
}
//#endregion
//#region node_modules/zod/v3/helpers/parseUtil.js
var makeIssue = (params) => {
	const { data, path, errorMaps, issueData } = params;
	const fullPath = [...path, ...issueData.path || []];
	const fullIssue = {
		...issueData,
		path: fullPath
	};
	if (issueData.message !== void 0) return {
		...issueData,
		path: fullPath,
		message: issueData.message
	};
	let errorMessage = "";
	const maps = errorMaps.filter((m) => !!m).slice().reverse();
	for (const map of maps) errorMessage = map(fullIssue, {
		data,
		defaultError: errorMessage
	}).message;
	return {
		...issueData,
		path: fullPath,
		message: errorMessage
	};
};
function addIssueToContext(ctx, issueData) {
	const overrideMap = getErrorMap();
	const issue = makeIssue({
		issueData,
		data: ctx.data,
		path: ctx.path,
		errorMaps: [
			ctx.common.contextualErrorMap,
			ctx.schemaErrorMap,
			overrideMap,
			overrideMap === errorMap ? void 0 : errorMap
		].filter((x) => !!x)
	});
	ctx.common.issues.push(issue);
}
var ParseStatus = class ParseStatus {
	constructor() {
		this.value = "valid";
	}
	dirty() {
		if (this.value === "valid") this.value = "dirty";
	}
	abort() {
		if (this.value !== "aborted") this.value = "aborted";
	}
	static mergeArray(status, results) {
		const arrayValue = [];
		for (const s of results) {
			if (s.status === "aborted") return INVALID;
			if (s.status === "dirty") status.dirty();
			arrayValue.push(s.value);
		}
		return {
			status: status.value,
			value: arrayValue
		};
	}
	static async mergeObjectAsync(status, pairs) {
		const syncPairs = [];
		for (const pair of pairs) {
			const key = await pair.key;
			const value = await pair.value;
			syncPairs.push({
				key,
				value
			});
		}
		return ParseStatus.mergeObjectSync(status, syncPairs);
	}
	static mergeObjectSync(status, pairs) {
		const finalObject = {};
		for (const pair of pairs) {
			const { key, value } = pair;
			if (key.status === "aborted") return INVALID;
			if (value.status === "aborted") return INVALID;
			if (key.status === "dirty") status.dirty();
			if (value.status === "dirty") status.dirty();
			if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) finalObject[key.value] = value.value;
		}
		return {
			status: status.value,
			value: finalObject
		};
	}
};
var INVALID = Object.freeze({ status: "aborted" });
var DIRTY = (value) => ({
	status: "dirty",
	value
});
var OK = (value) => ({
	status: "valid",
	value
});
var isAborted = (x) => x.status === "aborted";
var isDirty = (x) => x.status === "dirty";
var isValid = (x) => x.status === "valid";
var isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;
//#endregion
//#region node_modules/zod/v3/helpers/errorUtil.js
var errorUtil;
(function(errorUtil) {
	errorUtil.errToObj = (message) => typeof message === "string" ? { message } : message || {};
	errorUtil.toString = (message) => typeof message === "string" ? message : message?.message;
})(errorUtil || (errorUtil = {}));
//#endregion
//#region node_modules/zod/v3/types.js
var ParseInputLazyPath = class {
	constructor(parent, value, path, key) {
		this._cachedPath = [];
		this.parent = parent;
		this.data = value;
		this._path = path;
		this._key = key;
	}
	get path() {
		if (!this._cachedPath.length) if (Array.isArray(this._key)) this._cachedPath.push(...this._path, ...this._key);
		else this._cachedPath.push(...this._path, this._key);
		return this._cachedPath;
	}
};
var handleResult = (ctx, result) => {
	if (isValid(result)) return {
		success: true,
		data: result.value
	};
	else {
		if (!ctx.common.issues.length) throw new Error("Validation failed but no issues detected.");
		return {
			success: false,
			get error() {
				if (this._error) return this._error;
				this._error = new ZodError(ctx.common.issues);
				return this._error;
			}
		};
	}
};
function processCreateParams(params) {
	if (!params) return {};
	const { errorMap, invalid_type_error, required_error, description } = params;
	if (errorMap && (invalid_type_error || required_error)) throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
	if (errorMap) return {
		errorMap,
		description
	};
	const customMap = (iss, ctx) => {
		const { message } = params;
		if (iss.code === "invalid_enum_value") return { message: message ?? ctx.defaultError };
		if (typeof ctx.data === "undefined") return { message: message ?? required_error ?? ctx.defaultError };
		if (iss.code !== "invalid_type") return { message: ctx.defaultError };
		return { message: message ?? invalid_type_error ?? ctx.defaultError };
	};
	return {
		errorMap: customMap,
		description
	};
}
var ZodType = class {
	get description() {
		return this._def.description;
	}
	_getType(input) {
		return getParsedType(input.data);
	}
	_getOrReturnCtx(input, ctx) {
		return ctx || {
			common: input.parent.common,
			data: input.data,
			parsedType: getParsedType(input.data),
			schemaErrorMap: this._def.errorMap,
			path: input.path,
			parent: input.parent
		};
	}
	_processInputParams(input) {
		return {
			status: new ParseStatus(),
			ctx: {
				common: input.parent.common,
				data: input.data,
				parsedType: getParsedType(input.data),
				schemaErrorMap: this._def.errorMap,
				path: input.path,
				parent: input.parent
			}
		};
	}
	_parseSync(input) {
		const result = this._parse(input);
		if (isAsync(result)) throw new Error("Synchronous parse encountered promise.");
		return result;
	}
	_parseAsync(input) {
		const result = this._parse(input);
		return Promise.resolve(result);
	}
	parse(data, params) {
		const result = this.safeParse(data, params);
		if (result.success) return result.data;
		throw result.error;
	}
	safeParse(data, params) {
		const ctx = {
			common: {
				issues: [],
				async: params?.async ?? false,
				contextualErrorMap: params?.errorMap
			},
			path: params?.path || [],
			schemaErrorMap: this._def.errorMap,
			parent: null,
			data,
			parsedType: getParsedType(data)
		};
		return handleResult(ctx, this._parseSync({
			data,
			path: ctx.path,
			parent: ctx
		}));
	}
	"~validate"(data) {
		const ctx = {
			common: {
				issues: [],
				async: !!this["~standard"].async
			},
			path: [],
			schemaErrorMap: this._def.errorMap,
			parent: null,
			data,
			parsedType: getParsedType(data)
		};
		if (!this["~standard"].async) try {
			const result = this._parseSync({
				data,
				path: [],
				parent: ctx
			});
			return isValid(result) ? { value: result.value } : { issues: ctx.common.issues };
		} catch (err) {
			if (err?.message?.toLowerCase()?.includes("encountered")) this["~standard"].async = true;
			ctx.common = {
				issues: [],
				async: true
			};
		}
		return this._parseAsync({
			data,
			path: [],
			parent: ctx
		}).then((result) => isValid(result) ? { value: result.value } : { issues: ctx.common.issues });
	}
	async parseAsync(data, params) {
		const result = await this.safeParseAsync(data, params);
		if (result.success) return result.data;
		throw result.error;
	}
	async safeParseAsync(data, params) {
		const ctx = {
			common: {
				issues: [],
				contextualErrorMap: params?.errorMap,
				async: true
			},
			path: params?.path || [],
			schemaErrorMap: this._def.errorMap,
			parent: null,
			data,
			parsedType: getParsedType(data)
		};
		const maybeAsyncResult = this._parse({
			data,
			path: ctx.path,
			parent: ctx
		});
		return handleResult(ctx, await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult)));
	}
	refine(check, message) {
		const getIssueProperties = (val) => {
			if (typeof message === "string" || typeof message === "undefined") return { message };
			else if (typeof message === "function") return message(val);
			else return message;
		};
		return this._refinement((val, ctx) => {
			const result = check(val);
			const setError = () => ctx.addIssue({
				code: ZodIssueCode.custom,
				...getIssueProperties(val)
			});
			if (typeof Promise !== "undefined" && result instanceof Promise) return result.then((data) => {
				if (!data) {
					setError();
					return false;
				} else return true;
			});
			if (!result) {
				setError();
				return false;
			} else return true;
		});
	}
	refinement(check, refinementData) {
		return this._refinement((val, ctx) => {
			if (!check(val)) {
				ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
				return false;
			} else return true;
		});
	}
	_refinement(refinement) {
		return new ZodEffects({
			schema: this,
			typeName: ZodFirstPartyTypeKind.ZodEffects,
			effect: {
				type: "refinement",
				refinement
			}
		});
	}
	superRefine(refinement) {
		return this._refinement(refinement);
	}
	constructor(def) {
		/** Alias of safeParseAsync */
		this.spa = this.safeParseAsync;
		this._def = def;
		this.parse = this.parse.bind(this);
		this.safeParse = this.safeParse.bind(this);
		this.parseAsync = this.parseAsync.bind(this);
		this.safeParseAsync = this.safeParseAsync.bind(this);
		this.spa = this.spa.bind(this);
		this.refine = this.refine.bind(this);
		this.refinement = this.refinement.bind(this);
		this.superRefine = this.superRefine.bind(this);
		this.optional = this.optional.bind(this);
		this.nullable = this.nullable.bind(this);
		this.nullish = this.nullish.bind(this);
		this.array = this.array.bind(this);
		this.promise = this.promise.bind(this);
		this.or = this.or.bind(this);
		this.and = this.and.bind(this);
		this.transform = this.transform.bind(this);
		this.brand = this.brand.bind(this);
		this.default = this.default.bind(this);
		this.catch = this.catch.bind(this);
		this.describe = this.describe.bind(this);
		this.pipe = this.pipe.bind(this);
		this.readonly = this.readonly.bind(this);
		this.isNullable = this.isNullable.bind(this);
		this.isOptional = this.isOptional.bind(this);
		this["~standard"] = {
			version: 1,
			vendor: "zod",
			validate: (data) => this["~validate"](data)
		};
	}
	optional() {
		return ZodOptional.create(this, this._def);
	}
	nullable() {
		return ZodNullable.create(this, this._def);
	}
	nullish() {
		return this.nullable().optional();
	}
	array() {
		return ZodArray.create(this);
	}
	promise() {
		return ZodPromise.create(this, this._def);
	}
	or(option) {
		return ZodUnion.create([this, option], this._def);
	}
	and(incoming) {
		return ZodIntersection.create(this, incoming, this._def);
	}
	transform(transform) {
		return new ZodEffects({
			...processCreateParams(this._def),
			schema: this,
			typeName: ZodFirstPartyTypeKind.ZodEffects,
			effect: {
				type: "transform",
				transform
			}
		});
	}
	default(def) {
		const defaultValueFunc = typeof def === "function" ? def : () => def;
		return new ZodDefault({
			...processCreateParams(this._def),
			innerType: this,
			defaultValue: defaultValueFunc,
			typeName: ZodFirstPartyTypeKind.ZodDefault
		});
	}
	brand() {
		return new ZodBranded({
			typeName: ZodFirstPartyTypeKind.ZodBranded,
			type: this,
			...processCreateParams(this._def)
		});
	}
	catch(def) {
		const catchValueFunc = typeof def === "function" ? def : () => def;
		return new ZodCatch({
			...processCreateParams(this._def),
			innerType: this,
			catchValue: catchValueFunc,
			typeName: ZodFirstPartyTypeKind.ZodCatch
		});
	}
	describe(description) {
		const This = this.constructor;
		return new This({
			...this._def,
			description
		});
	}
	pipe(target) {
		return ZodPipeline.create(this, target);
	}
	readonly() {
		return ZodReadonly.create(this);
	}
	isOptional() {
		return this.safeParse(void 0).success;
	}
	isNullable() {
		return this.safeParse(null).success;
	}
};
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[0-9a-z]+$/;
var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var nanoidRegex = /^[a-z0-9_-]{21}$/i;
var jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
var durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
var emojiRegex$1;
var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
var ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
var ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
var base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
var dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
var dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
	let secondsRegexSource = `[0-5]\\d`;
	if (args.precision) secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
	else if (args.precision == null) secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
	const secondsQuantifier = args.precision ? "+" : "?";
	return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
}
function timeRegex(args) {
	return new RegExp(`^${timeRegexSource(args)}$`);
}
function datetimeRegex(args) {
	let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
	const opts = [];
	opts.push(args.local ? `Z?` : `Z`);
	if (args.offset) opts.push(`([+-]\\d{2}:?\\d{2})`);
	regex = `${regex}(${opts.join("|")})`;
	return new RegExp(`^${regex}$`);
}
function isValidIP(ip, version) {
	if ((version === "v4" || !version) && ipv4Regex.test(ip)) return true;
	if ((version === "v6" || !version) && ipv6Regex.test(ip)) return true;
	return false;
}
function isValidJWT(jwt, alg) {
	if (!jwtRegex.test(jwt)) return false;
	try {
		const [header] = jwt.split(".");
		if (!header) return false;
		const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
		const decoded = JSON.parse(atob(base64));
		if (typeof decoded !== "object" || decoded === null) return false;
		if ("typ" in decoded && decoded?.typ !== "JWT") return false;
		if (!decoded.alg) return false;
		if (alg && decoded.alg !== alg) return false;
		return true;
	} catch {
		return false;
	}
}
function isValidCidr(ip, version) {
	if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) return true;
	if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) return true;
	return false;
}
var ZodString = class ZodString extends ZodType {
	_parse(input) {
		if (this._def.coerce) input.data = String(input.data);
		if (this._getType(input) !== ZodParsedType.string) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.string,
				received: ctx.parsedType
			});
			return INVALID;
		}
		const status = new ParseStatus();
		let ctx = void 0;
		for (const check of this._def.checks) if (check.kind === "min") {
			if (input.data.length < check.value) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_small,
					minimum: check.value,
					type: "string",
					inclusive: true,
					exact: false,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "max") {
			if (input.data.length > check.value) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_big,
					maximum: check.value,
					type: "string",
					inclusive: true,
					exact: false,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "length") {
			const tooBig = input.data.length > check.value;
			const tooSmall = input.data.length < check.value;
			if (tooBig || tooSmall) {
				ctx = this._getOrReturnCtx(input, ctx);
				if (tooBig) addIssueToContext(ctx, {
					code: ZodIssueCode.too_big,
					maximum: check.value,
					type: "string",
					inclusive: true,
					exact: true,
					message: check.message
				});
				else if (tooSmall) addIssueToContext(ctx, {
					code: ZodIssueCode.too_small,
					minimum: check.value,
					type: "string",
					inclusive: true,
					exact: true,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "email") {
			if (!emailRegex.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "email",
					code: ZodIssueCode.invalid_string,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "emoji") {
			if (!emojiRegex$1) emojiRegex$1 = new RegExp(_emojiRegex, "u");
			if (!emojiRegex$1.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "emoji",
					code: ZodIssueCode.invalid_string,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "uuid") {
			if (!uuidRegex.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "uuid",
					code: ZodIssueCode.invalid_string,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "nanoid") {
			if (!nanoidRegex.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "nanoid",
					code: ZodIssueCode.invalid_string,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "cuid") {
			if (!cuidRegex.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "cuid",
					code: ZodIssueCode.invalid_string,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "cuid2") {
			if (!cuid2Regex.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "cuid2",
					code: ZodIssueCode.invalid_string,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "ulid") {
			if (!ulidRegex.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "ulid",
					code: ZodIssueCode.invalid_string,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "url") try {
			new URL(input.data);
		} catch {
			ctx = this._getOrReturnCtx(input, ctx);
			addIssueToContext(ctx, {
				validation: "url",
				code: ZodIssueCode.invalid_string,
				message: check.message
			});
			status.dirty();
		}
		else if (check.kind === "regex") {
			check.regex.lastIndex = 0;
			if (!check.regex.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "regex",
					code: ZodIssueCode.invalid_string,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "trim") input.data = input.data.trim();
		else if (check.kind === "includes") {
			if (!input.data.includes(check.value, check.position)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.invalid_string,
					validation: {
						includes: check.value,
						position: check.position
					},
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "toLowerCase") input.data = input.data.toLowerCase();
		else if (check.kind === "toUpperCase") input.data = input.data.toUpperCase();
		else if (check.kind === "startsWith") {
			if (!input.data.startsWith(check.value)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.invalid_string,
					validation: { startsWith: check.value },
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "endsWith") {
			if (!input.data.endsWith(check.value)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.invalid_string,
					validation: { endsWith: check.value },
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "datetime") {
			if (!datetimeRegex(check).test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.invalid_string,
					validation: "datetime",
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "date") {
			if (!dateRegex.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.invalid_string,
					validation: "date",
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "time") {
			if (!timeRegex(check).test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.invalid_string,
					validation: "time",
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "duration") {
			if (!durationRegex.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "duration",
					code: ZodIssueCode.invalid_string,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "ip") {
			if (!isValidIP(input.data, check.version)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "ip",
					code: ZodIssueCode.invalid_string,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "jwt") {
			if (!isValidJWT(input.data, check.alg)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "jwt",
					code: ZodIssueCode.invalid_string,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "cidr") {
			if (!isValidCidr(input.data, check.version)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "cidr",
					code: ZodIssueCode.invalid_string,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "base64") {
			if (!base64Regex.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "base64",
					code: ZodIssueCode.invalid_string,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "base64url") {
			if (!base64urlRegex.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "base64url",
					code: ZodIssueCode.invalid_string,
					message: check.message
				});
				status.dirty();
			}
		} else util.assertNever(check);
		return {
			status: status.value,
			value: input.data
		};
	}
	_regex(regex, validation, message) {
		return this.refinement((data) => regex.test(data), {
			validation,
			code: ZodIssueCode.invalid_string,
			...errorUtil.errToObj(message)
		});
	}
	_addCheck(check) {
		return new ZodString({
			...this._def,
			checks: [...this._def.checks, check]
		});
	}
	email(message) {
		return this._addCheck({
			kind: "email",
			...errorUtil.errToObj(message)
		});
	}
	url(message) {
		return this._addCheck({
			kind: "url",
			...errorUtil.errToObj(message)
		});
	}
	emoji(message) {
		return this._addCheck({
			kind: "emoji",
			...errorUtil.errToObj(message)
		});
	}
	uuid(message) {
		return this._addCheck({
			kind: "uuid",
			...errorUtil.errToObj(message)
		});
	}
	nanoid(message) {
		return this._addCheck({
			kind: "nanoid",
			...errorUtil.errToObj(message)
		});
	}
	cuid(message) {
		return this._addCheck({
			kind: "cuid",
			...errorUtil.errToObj(message)
		});
	}
	cuid2(message) {
		return this._addCheck({
			kind: "cuid2",
			...errorUtil.errToObj(message)
		});
	}
	ulid(message) {
		return this._addCheck({
			kind: "ulid",
			...errorUtil.errToObj(message)
		});
	}
	base64(message) {
		return this._addCheck({
			kind: "base64",
			...errorUtil.errToObj(message)
		});
	}
	base64url(message) {
		return this._addCheck({
			kind: "base64url",
			...errorUtil.errToObj(message)
		});
	}
	jwt(options) {
		return this._addCheck({
			kind: "jwt",
			...errorUtil.errToObj(options)
		});
	}
	ip(options) {
		return this._addCheck({
			kind: "ip",
			...errorUtil.errToObj(options)
		});
	}
	cidr(options) {
		return this._addCheck({
			kind: "cidr",
			...errorUtil.errToObj(options)
		});
	}
	datetime(options) {
		if (typeof options === "string") return this._addCheck({
			kind: "datetime",
			precision: null,
			offset: false,
			local: false,
			message: options
		});
		return this._addCheck({
			kind: "datetime",
			precision: typeof options?.precision === "undefined" ? null : options?.precision,
			offset: options?.offset ?? false,
			local: options?.local ?? false,
			...errorUtil.errToObj(options?.message)
		});
	}
	date(message) {
		return this._addCheck({
			kind: "date",
			message
		});
	}
	time(options) {
		if (typeof options === "string") return this._addCheck({
			kind: "time",
			precision: null,
			message: options
		});
		return this._addCheck({
			kind: "time",
			precision: typeof options?.precision === "undefined" ? null : options?.precision,
			...errorUtil.errToObj(options?.message)
		});
	}
	duration(message) {
		return this._addCheck({
			kind: "duration",
			...errorUtil.errToObj(message)
		});
	}
	regex(regex, message) {
		return this._addCheck({
			kind: "regex",
			regex,
			...errorUtil.errToObj(message)
		});
	}
	includes(value, options) {
		return this._addCheck({
			kind: "includes",
			value,
			position: options?.position,
			...errorUtil.errToObj(options?.message)
		});
	}
	startsWith(value, message) {
		return this._addCheck({
			kind: "startsWith",
			value,
			...errorUtil.errToObj(message)
		});
	}
	endsWith(value, message) {
		return this._addCheck({
			kind: "endsWith",
			value,
			...errorUtil.errToObj(message)
		});
	}
	min(minLength, message) {
		return this._addCheck({
			kind: "min",
			value: minLength,
			...errorUtil.errToObj(message)
		});
	}
	max(maxLength, message) {
		return this._addCheck({
			kind: "max",
			value: maxLength,
			...errorUtil.errToObj(message)
		});
	}
	length(len, message) {
		return this._addCheck({
			kind: "length",
			value: len,
			...errorUtil.errToObj(message)
		});
	}
	/**
	* Equivalent to `.min(1)`
	*/
	nonempty(message) {
		return this.min(1, errorUtil.errToObj(message));
	}
	trim() {
		return new ZodString({
			...this._def,
			checks: [...this._def.checks, { kind: "trim" }]
		});
	}
	toLowerCase() {
		return new ZodString({
			...this._def,
			checks: [...this._def.checks, { kind: "toLowerCase" }]
		});
	}
	toUpperCase() {
		return new ZodString({
			...this._def,
			checks: [...this._def.checks, { kind: "toUpperCase" }]
		});
	}
	get isDatetime() {
		return !!this._def.checks.find((ch) => ch.kind === "datetime");
	}
	get isDate() {
		return !!this._def.checks.find((ch) => ch.kind === "date");
	}
	get isTime() {
		return !!this._def.checks.find((ch) => ch.kind === "time");
	}
	get isDuration() {
		return !!this._def.checks.find((ch) => ch.kind === "duration");
	}
	get isEmail() {
		return !!this._def.checks.find((ch) => ch.kind === "email");
	}
	get isURL() {
		return !!this._def.checks.find((ch) => ch.kind === "url");
	}
	get isEmoji() {
		return !!this._def.checks.find((ch) => ch.kind === "emoji");
	}
	get isUUID() {
		return !!this._def.checks.find((ch) => ch.kind === "uuid");
	}
	get isNANOID() {
		return !!this._def.checks.find((ch) => ch.kind === "nanoid");
	}
	get isCUID() {
		return !!this._def.checks.find((ch) => ch.kind === "cuid");
	}
	get isCUID2() {
		return !!this._def.checks.find((ch) => ch.kind === "cuid2");
	}
	get isULID() {
		return !!this._def.checks.find((ch) => ch.kind === "ulid");
	}
	get isIP() {
		return !!this._def.checks.find((ch) => ch.kind === "ip");
	}
	get isCIDR() {
		return !!this._def.checks.find((ch) => ch.kind === "cidr");
	}
	get isBase64() {
		return !!this._def.checks.find((ch) => ch.kind === "base64");
	}
	get isBase64url() {
		return !!this._def.checks.find((ch) => ch.kind === "base64url");
	}
	get minLength() {
		let min = null;
		for (const ch of this._def.checks) if (ch.kind === "min") {
			if (min === null || ch.value > min) min = ch.value;
		}
		return min;
	}
	get maxLength() {
		let max = null;
		for (const ch of this._def.checks) if (ch.kind === "max") {
			if (max === null || ch.value < max) max = ch.value;
		}
		return max;
	}
};
ZodString.create = (params) => {
	return new ZodString({
		checks: [],
		typeName: ZodFirstPartyTypeKind.ZodString,
		coerce: params?.coerce ?? false,
		...processCreateParams(params)
	});
};
function floatSafeRemainder(val, step) {
	const valDecCount = (val.toString().split(".")[1] || "").length;
	const stepDecCount = (step.toString().split(".")[1] || "").length;
	const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
	return Number.parseInt(val.toFixed(decCount).replace(".", "")) % Number.parseInt(step.toFixed(decCount).replace(".", "")) / 10 ** decCount;
}
var ZodNumber = class ZodNumber extends ZodType {
	constructor() {
		super(...arguments);
		this.min = this.gte;
		this.max = this.lte;
		this.step = this.multipleOf;
	}
	_parse(input) {
		if (this._def.coerce) input.data = Number(input.data);
		if (this._getType(input) !== ZodParsedType.number) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.number,
				received: ctx.parsedType
			});
			return INVALID;
		}
		let ctx = void 0;
		const status = new ParseStatus();
		for (const check of this._def.checks) if (check.kind === "int") {
			if (!util.isInteger(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.invalid_type,
					expected: "integer",
					received: "float",
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "min") {
			if (check.inclusive ? input.data < check.value : input.data <= check.value) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_small,
					minimum: check.value,
					type: "number",
					inclusive: check.inclusive,
					exact: false,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "max") {
			if (check.inclusive ? input.data > check.value : input.data >= check.value) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_big,
					maximum: check.value,
					type: "number",
					inclusive: check.inclusive,
					exact: false,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "multipleOf") {
			if (floatSafeRemainder(input.data, check.value) !== 0) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.not_multiple_of,
					multipleOf: check.value,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "finite") {
			if (!Number.isFinite(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.not_finite,
					message: check.message
				});
				status.dirty();
			}
		} else util.assertNever(check);
		return {
			status: status.value,
			value: input.data
		};
	}
	gte(value, message) {
		return this.setLimit("min", value, true, errorUtil.toString(message));
	}
	gt(value, message) {
		return this.setLimit("min", value, false, errorUtil.toString(message));
	}
	lte(value, message) {
		return this.setLimit("max", value, true, errorUtil.toString(message));
	}
	lt(value, message) {
		return this.setLimit("max", value, false, errorUtil.toString(message));
	}
	setLimit(kind, value, inclusive, message) {
		return new ZodNumber({
			...this._def,
			checks: [...this._def.checks, {
				kind,
				value,
				inclusive,
				message: errorUtil.toString(message)
			}]
		});
	}
	_addCheck(check) {
		return new ZodNumber({
			...this._def,
			checks: [...this._def.checks, check]
		});
	}
	int(message) {
		return this._addCheck({
			kind: "int",
			message: errorUtil.toString(message)
		});
	}
	positive(message) {
		return this._addCheck({
			kind: "min",
			value: 0,
			inclusive: false,
			message: errorUtil.toString(message)
		});
	}
	negative(message) {
		return this._addCheck({
			kind: "max",
			value: 0,
			inclusive: false,
			message: errorUtil.toString(message)
		});
	}
	nonpositive(message) {
		return this._addCheck({
			kind: "max",
			value: 0,
			inclusive: true,
			message: errorUtil.toString(message)
		});
	}
	nonnegative(message) {
		return this._addCheck({
			kind: "min",
			value: 0,
			inclusive: true,
			message: errorUtil.toString(message)
		});
	}
	multipleOf(value, message) {
		return this._addCheck({
			kind: "multipleOf",
			value,
			message: errorUtil.toString(message)
		});
	}
	finite(message) {
		return this._addCheck({
			kind: "finite",
			message: errorUtil.toString(message)
		});
	}
	safe(message) {
		return this._addCheck({
			kind: "min",
			inclusive: true,
			value: Number.MIN_SAFE_INTEGER,
			message: errorUtil.toString(message)
		})._addCheck({
			kind: "max",
			inclusive: true,
			value: Number.MAX_SAFE_INTEGER,
			message: errorUtil.toString(message)
		});
	}
	get minValue() {
		let min = null;
		for (const ch of this._def.checks) if (ch.kind === "min") {
			if (min === null || ch.value > min) min = ch.value;
		}
		return min;
	}
	get maxValue() {
		let max = null;
		for (const ch of this._def.checks) if (ch.kind === "max") {
			if (max === null || ch.value < max) max = ch.value;
		}
		return max;
	}
	get isInt() {
		return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
	}
	get isFinite() {
		let max = null;
		let min = null;
		for (const ch of this._def.checks) if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") return true;
		else if (ch.kind === "min") {
			if (min === null || ch.value > min) min = ch.value;
		} else if (ch.kind === "max") {
			if (max === null || ch.value < max) max = ch.value;
		}
		return Number.isFinite(min) && Number.isFinite(max);
	}
};
ZodNumber.create = (params) => {
	return new ZodNumber({
		checks: [],
		typeName: ZodFirstPartyTypeKind.ZodNumber,
		coerce: params?.coerce || false,
		...processCreateParams(params)
	});
};
var ZodBigInt = class ZodBigInt extends ZodType {
	constructor() {
		super(...arguments);
		this.min = this.gte;
		this.max = this.lte;
	}
	_parse(input) {
		if (this._def.coerce) try {
			input.data = BigInt(input.data);
		} catch {
			return this._getInvalidInput(input);
		}
		if (this._getType(input) !== ZodParsedType.bigint) return this._getInvalidInput(input);
		let ctx = void 0;
		const status = new ParseStatus();
		for (const check of this._def.checks) if (check.kind === "min") {
			if (check.inclusive ? input.data < check.value : input.data <= check.value) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_small,
					type: "bigint",
					minimum: check.value,
					inclusive: check.inclusive,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "max") {
			if (check.inclusive ? input.data > check.value : input.data >= check.value) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_big,
					type: "bigint",
					maximum: check.value,
					inclusive: check.inclusive,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "multipleOf") {
			if (input.data % check.value !== BigInt(0)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.not_multiple_of,
					multipleOf: check.value,
					message: check.message
				});
				status.dirty();
			}
		} else util.assertNever(check);
		return {
			status: status.value,
			value: input.data
		};
	}
	_getInvalidInput(input) {
		const ctx = this._getOrReturnCtx(input);
		addIssueToContext(ctx, {
			code: ZodIssueCode.invalid_type,
			expected: ZodParsedType.bigint,
			received: ctx.parsedType
		});
		return INVALID;
	}
	gte(value, message) {
		return this.setLimit("min", value, true, errorUtil.toString(message));
	}
	gt(value, message) {
		return this.setLimit("min", value, false, errorUtil.toString(message));
	}
	lte(value, message) {
		return this.setLimit("max", value, true, errorUtil.toString(message));
	}
	lt(value, message) {
		return this.setLimit("max", value, false, errorUtil.toString(message));
	}
	setLimit(kind, value, inclusive, message) {
		return new ZodBigInt({
			...this._def,
			checks: [...this._def.checks, {
				kind,
				value,
				inclusive,
				message: errorUtil.toString(message)
			}]
		});
	}
	_addCheck(check) {
		return new ZodBigInt({
			...this._def,
			checks: [...this._def.checks, check]
		});
	}
	positive(message) {
		return this._addCheck({
			kind: "min",
			value: BigInt(0),
			inclusive: false,
			message: errorUtil.toString(message)
		});
	}
	negative(message) {
		return this._addCheck({
			kind: "max",
			value: BigInt(0),
			inclusive: false,
			message: errorUtil.toString(message)
		});
	}
	nonpositive(message) {
		return this._addCheck({
			kind: "max",
			value: BigInt(0),
			inclusive: true,
			message: errorUtil.toString(message)
		});
	}
	nonnegative(message) {
		return this._addCheck({
			kind: "min",
			value: BigInt(0),
			inclusive: true,
			message: errorUtil.toString(message)
		});
	}
	multipleOf(value, message) {
		return this._addCheck({
			kind: "multipleOf",
			value,
			message: errorUtil.toString(message)
		});
	}
	get minValue() {
		let min = null;
		for (const ch of this._def.checks) if (ch.kind === "min") {
			if (min === null || ch.value > min) min = ch.value;
		}
		return min;
	}
	get maxValue() {
		let max = null;
		for (const ch of this._def.checks) if (ch.kind === "max") {
			if (max === null || ch.value < max) max = ch.value;
		}
		return max;
	}
};
ZodBigInt.create = (params) => {
	return new ZodBigInt({
		checks: [],
		typeName: ZodFirstPartyTypeKind.ZodBigInt,
		coerce: params?.coerce ?? false,
		...processCreateParams(params)
	});
};
var ZodBoolean = class extends ZodType {
	_parse(input) {
		if (this._def.coerce) input.data = Boolean(input.data);
		if (this._getType(input) !== ZodParsedType.boolean) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.boolean,
				received: ctx.parsedType
			});
			return INVALID;
		}
		return OK(input.data);
	}
};
ZodBoolean.create = (params) => {
	return new ZodBoolean({
		typeName: ZodFirstPartyTypeKind.ZodBoolean,
		coerce: params?.coerce || false,
		...processCreateParams(params)
	});
};
var ZodDate = class ZodDate extends ZodType {
	_parse(input) {
		if (this._def.coerce) input.data = new Date(input.data);
		if (this._getType(input) !== ZodParsedType.date) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.date,
				received: ctx.parsedType
			});
			return INVALID;
		}
		if (Number.isNaN(input.data.getTime())) {
			addIssueToContext(this._getOrReturnCtx(input), { code: ZodIssueCode.invalid_date });
			return INVALID;
		}
		const status = new ParseStatus();
		let ctx = void 0;
		for (const check of this._def.checks) if (check.kind === "min") {
			if (input.data.getTime() < check.value) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_small,
					message: check.message,
					inclusive: true,
					exact: false,
					minimum: check.value,
					type: "date"
				});
				status.dirty();
			}
		} else if (check.kind === "max") {
			if (input.data.getTime() > check.value) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_big,
					message: check.message,
					inclusive: true,
					exact: false,
					maximum: check.value,
					type: "date"
				});
				status.dirty();
			}
		} else util.assertNever(check);
		return {
			status: status.value,
			value: new Date(input.data.getTime())
		};
	}
	_addCheck(check) {
		return new ZodDate({
			...this._def,
			checks: [...this._def.checks, check]
		});
	}
	min(minDate, message) {
		return this._addCheck({
			kind: "min",
			value: minDate.getTime(),
			message: errorUtil.toString(message)
		});
	}
	max(maxDate, message) {
		return this._addCheck({
			kind: "max",
			value: maxDate.getTime(),
			message: errorUtil.toString(message)
		});
	}
	get minDate() {
		let min = null;
		for (const ch of this._def.checks) if (ch.kind === "min") {
			if (min === null || ch.value > min) min = ch.value;
		}
		return min != null ? new Date(min) : null;
	}
	get maxDate() {
		let max = null;
		for (const ch of this._def.checks) if (ch.kind === "max") {
			if (max === null || ch.value < max) max = ch.value;
		}
		return max != null ? new Date(max) : null;
	}
};
ZodDate.create = (params) => {
	return new ZodDate({
		checks: [],
		coerce: params?.coerce || false,
		typeName: ZodFirstPartyTypeKind.ZodDate,
		...processCreateParams(params)
	});
};
var ZodSymbol = class extends ZodType {
	_parse(input) {
		if (this._getType(input) !== ZodParsedType.symbol) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.symbol,
				received: ctx.parsedType
			});
			return INVALID;
		}
		return OK(input.data);
	}
};
ZodSymbol.create = (params) => {
	return new ZodSymbol({
		typeName: ZodFirstPartyTypeKind.ZodSymbol,
		...processCreateParams(params)
	});
};
var ZodUndefined = class extends ZodType {
	_parse(input) {
		if (this._getType(input) !== ZodParsedType.undefined) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.undefined,
				received: ctx.parsedType
			});
			return INVALID;
		}
		return OK(input.data);
	}
};
ZodUndefined.create = (params) => {
	return new ZodUndefined({
		typeName: ZodFirstPartyTypeKind.ZodUndefined,
		...processCreateParams(params)
	});
};
var ZodNull = class extends ZodType {
	_parse(input) {
		if (this._getType(input) !== ZodParsedType.null) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.null,
				received: ctx.parsedType
			});
			return INVALID;
		}
		return OK(input.data);
	}
};
ZodNull.create = (params) => {
	return new ZodNull({
		typeName: ZodFirstPartyTypeKind.ZodNull,
		...processCreateParams(params)
	});
};
var ZodAny = class extends ZodType {
	constructor() {
		super(...arguments);
		this._any = true;
	}
	_parse(input) {
		return OK(input.data);
	}
};
ZodAny.create = (params) => {
	return new ZodAny({
		typeName: ZodFirstPartyTypeKind.ZodAny,
		...processCreateParams(params)
	});
};
var ZodUnknown = class extends ZodType {
	constructor() {
		super(...arguments);
		this._unknown = true;
	}
	_parse(input) {
		return OK(input.data);
	}
};
ZodUnknown.create = (params) => {
	return new ZodUnknown({
		typeName: ZodFirstPartyTypeKind.ZodUnknown,
		...processCreateParams(params)
	});
};
var ZodNever = class extends ZodType {
	_parse(input) {
		const ctx = this._getOrReturnCtx(input);
		addIssueToContext(ctx, {
			code: ZodIssueCode.invalid_type,
			expected: ZodParsedType.never,
			received: ctx.parsedType
		});
		return INVALID;
	}
};
ZodNever.create = (params) => {
	return new ZodNever({
		typeName: ZodFirstPartyTypeKind.ZodNever,
		...processCreateParams(params)
	});
};
var ZodVoid = class extends ZodType {
	_parse(input) {
		if (this._getType(input) !== ZodParsedType.undefined) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.void,
				received: ctx.parsedType
			});
			return INVALID;
		}
		return OK(input.data);
	}
};
ZodVoid.create = (params) => {
	return new ZodVoid({
		typeName: ZodFirstPartyTypeKind.ZodVoid,
		...processCreateParams(params)
	});
};
var ZodArray = class ZodArray extends ZodType {
	_parse(input) {
		const { ctx, status } = this._processInputParams(input);
		const def = this._def;
		if (ctx.parsedType !== ZodParsedType.array) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.array,
				received: ctx.parsedType
			});
			return INVALID;
		}
		if (def.exactLength !== null) {
			const tooBig = ctx.data.length > def.exactLength.value;
			const tooSmall = ctx.data.length < def.exactLength.value;
			if (tooBig || tooSmall) {
				addIssueToContext(ctx, {
					code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
					minimum: tooSmall ? def.exactLength.value : void 0,
					maximum: tooBig ? def.exactLength.value : void 0,
					type: "array",
					inclusive: true,
					exact: true,
					message: def.exactLength.message
				});
				status.dirty();
			}
		}
		if (def.minLength !== null) {
			if (ctx.data.length < def.minLength.value) {
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_small,
					minimum: def.minLength.value,
					type: "array",
					inclusive: true,
					exact: false,
					message: def.minLength.message
				});
				status.dirty();
			}
		}
		if (def.maxLength !== null) {
			if (ctx.data.length > def.maxLength.value) {
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_big,
					maximum: def.maxLength.value,
					type: "array",
					inclusive: true,
					exact: false,
					message: def.maxLength.message
				});
				status.dirty();
			}
		}
		if (ctx.common.async) return Promise.all([...ctx.data].map((item, i) => {
			return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
		})).then((result) => {
			return ParseStatus.mergeArray(status, result);
		});
		const result = [...ctx.data].map((item, i) => {
			return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
		});
		return ParseStatus.mergeArray(status, result);
	}
	get element() {
		return this._def.type;
	}
	min(minLength, message) {
		return new ZodArray({
			...this._def,
			minLength: {
				value: minLength,
				message: errorUtil.toString(message)
			}
		});
	}
	max(maxLength, message) {
		return new ZodArray({
			...this._def,
			maxLength: {
				value: maxLength,
				message: errorUtil.toString(message)
			}
		});
	}
	length(len, message) {
		return new ZodArray({
			...this._def,
			exactLength: {
				value: len,
				message: errorUtil.toString(message)
			}
		});
	}
	nonempty(message) {
		return this.min(1, message);
	}
};
ZodArray.create = (schema, params) => {
	return new ZodArray({
		type: schema,
		minLength: null,
		maxLength: null,
		exactLength: null,
		typeName: ZodFirstPartyTypeKind.ZodArray,
		...processCreateParams(params)
	});
};
function deepPartialify(schema) {
	if (schema instanceof ZodObject) {
		const newShape = {};
		for (const key in schema.shape) {
			const fieldSchema = schema.shape[key];
			newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
		}
		return new ZodObject({
			...schema._def,
			shape: () => newShape
		});
	} else if (schema instanceof ZodArray) return new ZodArray({
		...schema._def,
		type: deepPartialify(schema.element)
	});
	else if (schema instanceof ZodOptional) return ZodOptional.create(deepPartialify(schema.unwrap()));
	else if (schema instanceof ZodNullable) return ZodNullable.create(deepPartialify(schema.unwrap()));
	else if (schema instanceof ZodTuple) return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
	else return schema;
}
var ZodObject = class ZodObject extends ZodType {
	constructor() {
		super(...arguments);
		this._cached = null;
		/**
		* @deprecated In most cases, this is no longer needed - unknown properties are now silently stripped.
		* If you want to pass through unknown properties, use `.passthrough()` instead.
		*/
		this.nonstrict = this.passthrough;
		/**
		* @deprecated Use `.extend` instead
		*  */
		this.augment = this.extend;
	}
	_getCached() {
		if (this._cached !== null) return this._cached;
		const shape = this._def.shape();
		this._cached = {
			shape,
			keys: util.objectKeys(shape)
		};
		return this._cached;
	}
	_parse(input) {
		if (this._getType(input) !== ZodParsedType.object) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.object,
				received: ctx.parsedType
			});
			return INVALID;
		}
		const { status, ctx } = this._processInputParams(input);
		const { shape, keys: shapeKeys } = this._getCached();
		const extraKeys = [];
		if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
			for (const key in ctx.data) if (!shapeKeys.includes(key)) extraKeys.push(key);
		}
		const pairs = [];
		for (const key of shapeKeys) {
			const keyValidator = shape[key];
			const value = ctx.data[key];
			pairs.push({
				key: {
					status: "valid",
					value: key
				},
				value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
				alwaysSet: key in ctx.data
			});
		}
		if (this._def.catchall instanceof ZodNever) {
			const unknownKeys = this._def.unknownKeys;
			if (unknownKeys === "passthrough") for (const key of extraKeys) pairs.push({
				key: {
					status: "valid",
					value: key
				},
				value: {
					status: "valid",
					value: ctx.data[key]
				}
			});
			else if (unknownKeys === "strict") {
				if (extraKeys.length > 0) {
					addIssueToContext(ctx, {
						code: ZodIssueCode.unrecognized_keys,
						keys: extraKeys
					});
					status.dirty();
				}
			} else if (unknownKeys === "strip") {} else throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
		} else {
			const catchall = this._def.catchall;
			for (const key of extraKeys) {
				const value = ctx.data[key];
				pairs.push({
					key: {
						status: "valid",
						value: key
					},
					value: catchall._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
					alwaysSet: key in ctx.data
				});
			}
		}
		if (ctx.common.async) return Promise.resolve().then(async () => {
			const syncPairs = [];
			for (const pair of pairs) {
				const key = await pair.key;
				const value = await pair.value;
				syncPairs.push({
					key,
					value,
					alwaysSet: pair.alwaysSet
				});
			}
			return syncPairs;
		}).then((syncPairs) => {
			return ParseStatus.mergeObjectSync(status, syncPairs);
		});
		else return ParseStatus.mergeObjectSync(status, pairs);
	}
	get shape() {
		return this._def.shape();
	}
	strict(message) {
		errorUtil.errToObj;
		return new ZodObject({
			...this._def,
			unknownKeys: "strict",
			...message !== void 0 ? { errorMap: (issue, ctx) => {
				const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
				if (issue.code === "unrecognized_keys") return { message: errorUtil.errToObj(message).message ?? defaultError };
				return { message: defaultError };
			} } : {}
		});
	}
	strip() {
		return new ZodObject({
			...this._def,
			unknownKeys: "strip"
		});
	}
	passthrough() {
		return new ZodObject({
			...this._def,
			unknownKeys: "passthrough"
		});
	}
	extend(augmentation) {
		return new ZodObject({
			...this._def,
			shape: () => ({
				...this._def.shape(),
				...augmentation
			})
		});
	}
	/**
	* Prior to zod@1.0.12 there was a bug in the
	* inferred type of merged objects. Please
	* upgrade if you are experiencing issues.
	*/
	merge(merging) {
		return new ZodObject({
			unknownKeys: merging._def.unknownKeys,
			catchall: merging._def.catchall,
			shape: () => ({
				...this._def.shape(),
				...merging._def.shape()
			}),
			typeName: ZodFirstPartyTypeKind.ZodObject
		});
	}
	setKey(key, schema) {
		return this.augment({ [key]: schema });
	}
	catchall(index) {
		return new ZodObject({
			...this._def,
			catchall: index
		});
	}
	pick(mask) {
		const shape = {};
		for (const key of util.objectKeys(mask)) if (mask[key] && this.shape[key]) shape[key] = this.shape[key];
		return new ZodObject({
			...this._def,
			shape: () => shape
		});
	}
	omit(mask) {
		const shape = {};
		for (const key of util.objectKeys(this.shape)) if (!mask[key]) shape[key] = this.shape[key];
		return new ZodObject({
			...this._def,
			shape: () => shape
		});
	}
	/**
	* @deprecated
	*/
	deepPartial() {
		return deepPartialify(this);
	}
	partial(mask) {
		const newShape = {};
		for (const key of util.objectKeys(this.shape)) {
			const fieldSchema = this.shape[key];
			if (mask && !mask[key]) newShape[key] = fieldSchema;
			else newShape[key] = fieldSchema.optional();
		}
		return new ZodObject({
			...this._def,
			shape: () => newShape
		});
	}
	required(mask) {
		const newShape = {};
		for (const key of util.objectKeys(this.shape)) if (mask && !mask[key]) newShape[key] = this.shape[key];
		else {
			let newField = this.shape[key];
			while (newField instanceof ZodOptional) newField = newField._def.innerType;
			newShape[key] = newField;
		}
		return new ZodObject({
			...this._def,
			shape: () => newShape
		});
	}
	keyof() {
		return createZodEnum(util.objectKeys(this.shape));
	}
};
ZodObject.create = (shape, params) => {
	return new ZodObject({
		shape: () => shape,
		unknownKeys: "strip",
		catchall: ZodNever.create(),
		typeName: ZodFirstPartyTypeKind.ZodObject,
		...processCreateParams(params)
	});
};
ZodObject.strictCreate = (shape, params) => {
	return new ZodObject({
		shape: () => shape,
		unknownKeys: "strict",
		catchall: ZodNever.create(),
		typeName: ZodFirstPartyTypeKind.ZodObject,
		...processCreateParams(params)
	});
};
ZodObject.lazycreate = (shape, params) => {
	return new ZodObject({
		shape,
		unknownKeys: "strip",
		catchall: ZodNever.create(),
		typeName: ZodFirstPartyTypeKind.ZodObject,
		...processCreateParams(params)
	});
};
var ZodUnion = class extends ZodType {
	_parse(input) {
		const { ctx } = this._processInputParams(input);
		const options = this._def.options;
		function handleResults(results) {
			for (const result of results) if (result.result.status === "valid") return result.result;
			for (const result of results) if (result.result.status === "dirty") {
				ctx.common.issues.push(...result.ctx.common.issues);
				return result.result;
			}
			const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_union,
				unionErrors
			});
			return INVALID;
		}
		if (ctx.common.async) return Promise.all(options.map(async (option) => {
			const childCtx = {
				...ctx,
				common: {
					...ctx.common,
					issues: []
				},
				parent: null
			};
			return {
				result: await option._parseAsync({
					data: ctx.data,
					path: ctx.path,
					parent: childCtx
				}),
				ctx: childCtx
			};
		})).then(handleResults);
		else {
			let dirty = void 0;
			const issues = [];
			for (const option of options) {
				const childCtx = {
					...ctx,
					common: {
						...ctx.common,
						issues: []
					},
					parent: null
				};
				const result = option._parseSync({
					data: ctx.data,
					path: ctx.path,
					parent: childCtx
				});
				if (result.status === "valid") return result;
				else if (result.status === "dirty" && !dirty) dirty = {
					result,
					ctx: childCtx
				};
				if (childCtx.common.issues.length) issues.push(childCtx.common.issues);
			}
			if (dirty) {
				ctx.common.issues.push(...dirty.ctx.common.issues);
				return dirty.result;
			}
			const unionErrors = issues.map((issues) => new ZodError(issues));
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_union,
				unionErrors
			});
			return INVALID;
		}
	}
	get options() {
		return this._def.options;
	}
};
ZodUnion.create = (types, params) => {
	return new ZodUnion({
		options: types,
		typeName: ZodFirstPartyTypeKind.ZodUnion,
		...processCreateParams(params)
	});
};
var getDiscriminator = (type) => {
	if (type instanceof ZodLazy) return getDiscriminator(type.schema);
	else if (type instanceof ZodEffects) return getDiscriminator(type.innerType());
	else if (type instanceof ZodLiteral) return [type.value];
	else if (type instanceof ZodEnum) return type.options;
	else if (type instanceof ZodNativeEnum) return util.objectValues(type.enum);
	else if (type instanceof ZodDefault) return getDiscriminator(type._def.innerType);
	else if (type instanceof ZodUndefined) return [void 0];
	else if (type instanceof ZodNull) return [null];
	else if (type instanceof ZodOptional) return [void 0, ...getDiscriminator(type.unwrap())];
	else if (type instanceof ZodNullable) return [null, ...getDiscriminator(type.unwrap())];
	else if (type instanceof ZodBranded) return getDiscriminator(type.unwrap());
	else if (type instanceof ZodReadonly) return getDiscriminator(type.unwrap());
	else if (type instanceof ZodCatch) return getDiscriminator(type._def.innerType);
	else return [];
};
var ZodDiscriminatedUnion = class ZodDiscriminatedUnion extends ZodType {
	_parse(input) {
		const { ctx } = this._processInputParams(input);
		if (ctx.parsedType !== ZodParsedType.object) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.object,
				received: ctx.parsedType
			});
			return INVALID;
		}
		const discriminator = this.discriminator;
		const discriminatorValue = ctx.data[discriminator];
		const option = this.optionsMap.get(discriminatorValue);
		if (!option) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_union_discriminator,
				options: Array.from(this.optionsMap.keys()),
				path: [discriminator]
			});
			return INVALID;
		}
		if (ctx.common.async) return option._parseAsync({
			data: ctx.data,
			path: ctx.path,
			parent: ctx
		});
		else return option._parseSync({
			data: ctx.data,
			path: ctx.path,
			parent: ctx
		});
	}
	get discriminator() {
		return this._def.discriminator;
	}
	get options() {
		return this._def.options;
	}
	get optionsMap() {
		return this._def.optionsMap;
	}
	/**
	* The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
	* However, it only allows a union of objects, all of which need to share a discriminator property. This property must
	* have a different value for each object in the union.
	* @param discriminator the name of the discriminator property
	* @param types an array of object schemas
	* @param params
	*/
	static create(discriminator, options, params) {
		const optionsMap = /* @__PURE__ */ new Map();
		for (const type of options) {
			const discriminatorValues = getDiscriminator(type.shape[discriminator]);
			if (!discriminatorValues.length) throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
			for (const value of discriminatorValues) {
				if (optionsMap.has(value)) throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
				optionsMap.set(value, type);
			}
		}
		return new ZodDiscriminatedUnion({
			typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
			discriminator,
			options,
			optionsMap,
			...processCreateParams(params)
		});
	}
};
function mergeValues(a, b) {
	const aType = getParsedType(a);
	const bType = getParsedType(b);
	if (a === b) return {
		valid: true,
		data: a
	};
	else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
		const bKeys = util.objectKeys(b);
		const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
		const newObj = {
			...a,
			...b
		};
		for (const key of sharedKeys) {
			const sharedValue = mergeValues(a[key], b[key]);
			if (!sharedValue.valid) return { valid: false };
			newObj[key] = sharedValue.data;
		}
		return {
			valid: true,
			data: newObj
		};
	} else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
		if (a.length !== b.length) return { valid: false };
		const newArray = [];
		for (let index = 0; index < a.length; index++) {
			const itemA = a[index];
			const itemB = b[index];
			const sharedValue = mergeValues(itemA, itemB);
			if (!sharedValue.valid) return { valid: false };
			newArray.push(sharedValue.data);
		}
		return {
			valid: true,
			data: newArray
		};
	} else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) return {
		valid: true,
		data: a
	};
	else return { valid: false };
}
var ZodIntersection = class extends ZodType {
	_parse(input) {
		const { status, ctx } = this._processInputParams(input);
		const handleParsed = (parsedLeft, parsedRight) => {
			if (isAborted(parsedLeft) || isAborted(parsedRight)) return INVALID;
			const merged = mergeValues(parsedLeft.value, parsedRight.value);
			if (!merged.valid) {
				addIssueToContext(ctx, { code: ZodIssueCode.invalid_intersection_types });
				return INVALID;
			}
			if (isDirty(parsedLeft) || isDirty(parsedRight)) status.dirty();
			return {
				status: status.value,
				value: merged.data
			};
		};
		if (ctx.common.async) return Promise.all([this._def.left._parseAsync({
			data: ctx.data,
			path: ctx.path,
			parent: ctx
		}), this._def.right._parseAsync({
			data: ctx.data,
			path: ctx.path,
			parent: ctx
		})]).then(([left, right]) => handleParsed(left, right));
		else return handleParsed(this._def.left._parseSync({
			data: ctx.data,
			path: ctx.path,
			parent: ctx
		}), this._def.right._parseSync({
			data: ctx.data,
			path: ctx.path,
			parent: ctx
		}));
	}
};
ZodIntersection.create = (left, right, params) => {
	return new ZodIntersection({
		left,
		right,
		typeName: ZodFirstPartyTypeKind.ZodIntersection,
		...processCreateParams(params)
	});
};
var ZodTuple = class ZodTuple extends ZodType {
	_parse(input) {
		const { status, ctx } = this._processInputParams(input);
		if (ctx.parsedType !== ZodParsedType.array) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.array,
				received: ctx.parsedType
			});
			return INVALID;
		}
		if (ctx.data.length < this._def.items.length) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.too_small,
				minimum: this._def.items.length,
				inclusive: true,
				exact: false,
				type: "array"
			});
			return INVALID;
		}
		if (!this._def.rest && ctx.data.length > this._def.items.length) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.too_big,
				maximum: this._def.items.length,
				inclusive: true,
				exact: false,
				type: "array"
			});
			status.dirty();
		}
		const items = [...ctx.data].map((item, itemIndex) => {
			const schema = this._def.items[itemIndex] || this._def.rest;
			if (!schema) return null;
			return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
		}).filter((x) => !!x);
		if (ctx.common.async) return Promise.all(items).then((results) => {
			return ParseStatus.mergeArray(status, results);
		});
		else return ParseStatus.mergeArray(status, items);
	}
	get items() {
		return this._def.items;
	}
	rest(rest) {
		return new ZodTuple({
			...this._def,
			rest
		});
	}
};
ZodTuple.create = (schemas, params) => {
	if (!Array.isArray(schemas)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
	return new ZodTuple({
		items: schemas,
		typeName: ZodFirstPartyTypeKind.ZodTuple,
		rest: null,
		...processCreateParams(params)
	});
};
var ZodRecord = class ZodRecord extends ZodType {
	get keySchema() {
		return this._def.keyType;
	}
	get valueSchema() {
		return this._def.valueType;
	}
	_parse(input) {
		const { status, ctx } = this._processInputParams(input);
		if (ctx.parsedType !== ZodParsedType.object) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.object,
				received: ctx.parsedType
			});
			return INVALID;
		}
		const pairs = [];
		const keyType = this._def.keyType;
		const valueType = this._def.valueType;
		for (const key in ctx.data) pairs.push({
			key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
			value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
			alwaysSet: key in ctx.data
		});
		if (ctx.common.async) return ParseStatus.mergeObjectAsync(status, pairs);
		else return ParseStatus.mergeObjectSync(status, pairs);
	}
	get element() {
		return this._def.valueType;
	}
	static create(first, second, third) {
		if (second instanceof ZodType) return new ZodRecord({
			keyType: first,
			valueType: second,
			typeName: ZodFirstPartyTypeKind.ZodRecord,
			...processCreateParams(third)
		});
		return new ZodRecord({
			keyType: ZodString.create(),
			valueType: first,
			typeName: ZodFirstPartyTypeKind.ZodRecord,
			...processCreateParams(second)
		});
	}
};
var ZodMap = class extends ZodType {
	get keySchema() {
		return this._def.keyType;
	}
	get valueSchema() {
		return this._def.valueType;
	}
	_parse(input) {
		const { status, ctx } = this._processInputParams(input);
		if (ctx.parsedType !== ZodParsedType.map) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.map,
				received: ctx.parsedType
			});
			return INVALID;
		}
		const keyType = this._def.keyType;
		const valueType = this._def.valueType;
		const pairs = [...ctx.data.entries()].map(([key, value], index) => {
			return {
				key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
				value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
			};
		});
		if (ctx.common.async) {
			const finalMap = /* @__PURE__ */ new Map();
			return Promise.resolve().then(async () => {
				for (const pair of pairs) {
					const key = await pair.key;
					const value = await pair.value;
					if (key.status === "aborted" || value.status === "aborted") return INVALID;
					if (key.status === "dirty" || value.status === "dirty") status.dirty();
					finalMap.set(key.value, value.value);
				}
				return {
					status: status.value,
					value: finalMap
				};
			});
		} else {
			const finalMap = /* @__PURE__ */ new Map();
			for (const pair of pairs) {
				const key = pair.key;
				const value = pair.value;
				if (key.status === "aborted" || value.status === "aborted") return INVALID;
				if (key.status === "dirty" || value.status === "dirty") status.dirty();
				finalMap.set(key.value, value.value);
			}
			return {
				status: status.value,
				value: finalMap
			};
		}
	}
};
ZodMap.create = (keyType, valueType, params) => {
	return new ZodMap({
		valueType,
		keyType,
		typeName: ZodFirstPartyTypeKind.ZodMap,
		...processCreateParams(params)
	});
};
var ZodSet = class ZodSet extends ZodType {
	_parse(input) {
		const { status, ctx } = this._processInputParams(input);
		if (ctx.parsedType !== ZodParsedType.set) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.set,
				received: ctx.parsedType
			});
			return INVALID;
		}
		const def = this._def;
		if (def.minSize !== null) {
			if (ctx.data.size < def.minSize.value) {
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_small,
					minimum: def.minSize.value,
					type: "set",
					inclusive: true,
					exact: false,
					message: def.minSize.message
				});
				status.dirty();
			}
		}
		if (def.maxSize !== null) {
			if (ctx.data.size > def.maxSize.value) {
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_big,
					maximum: def.maxSize.value,
					type: "set",
					inclusive: true,
					exact: false,
					message: def.maxSize.message
				});
				status.dirty();
			}
		}
		const valueType = this._def.valueType;
		function finalizeSet(elements) {
			const parsedSet = /* @__PURE__ */ new Set();
			for (const element of elements) {
				if (element.status === "aborted") return INVALID;
				if (element.status === "dirty") status.dirty();
				parsedSet.add(element.value);
			}
			return {
				status: status.value,
				value: parsedSet
			};
		}
		const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
		if (ctx.common.async) return Promise.all(elements).then((elements) => finalizeSet(elements));
		else return finalizeSet(elements);
	}
	min(minSize, message) {
		return new ZodSet({
			...this._def,
			minSize: {
				value: minSize,
				message: errorUtil.toString(message)
			}
		});
	}
	max(maxSize, message) {
		return new ZodSet({
			...this._def,
			maxSize: {
				value: maxSize,
				message: errorUtil.toString(message)
			}
		});
	}
	size(size, message) {
		return this.min(size, message).max(size, message);
	}
	nonempty(message) {
		return this.min(1, message);
	}
};
ZodSet.create = (valueType, params) => {
	return new ZodSet({
		valueType,
		minSize: null,
		maxSize: null,
		typeName: ZodFirstPartyTypeKind.ZodSet,
		...processCreateParams(params)
	});
};
var ZodFunction = class ZodFunction extends ZodType {
	constructor() {
		super(...arguments);
		this.validate = this.implement;
	}
	_parse(input) {
		const { ctx } = this._processInputParams(input);
		if (ctx.parsedType !== ZodParsedType.function) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.function,
				received: ctx.parsedType
			});
			return INVALID;
		}
		function makeArgsIssue(args, error) {
			return makeIssue({
				data: args,
				path: ctx.path,
				errorMaps: [
					ctx.common.contextualErrorMap,
					ctx.schemaErrorMap,
					getErrorMap(),
					errorMap
				].filter((x) => !!x),
				issueData: {
					code: ZodIssueCode.invalid_arguments,
					argumentsError: error
				}
			});
		}
		function makeReturnsIssue(returns, error) {
			return makeIssue({
				data: returns,
				path: ctx.path,
				errorMaps: [
					ctx.common.contextualErrorMap,
					ctx.schemaErrorMap,
					getErrorMap(),
					errorMap
				].filter((x) => !!x),
				issueData: {
					code: ZodIssueCode.invalid_return_type,
					returnTypeError: error
				}
			});
		}
		const params = { errorMap: ctx.common.contextualErrorMap };
		const fn = ctx.data;
		if (this._def.returns instanceof ZodPromise) {
			const me = this;
			return OK(async function(...args) {
				const error = new ZodError([]);
				const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
					error.addIssue(makeArgsIssue(args, e));
					throw error;
				});
				const result = await Reflect.apply(fn, this, parsedArgs);
				return await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
					error.addIssue(makeReturnsIssue(result, e));
					throw error;
				});
			});
		} else {
			const me = this;
			return OK(function(...args) {
				const parsedArgs = me._def.args.safeParse(args, params);
				if (!parsedArgs.success) throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
				const result = Reflect.apply(fn, this, parsedArgs.data);
				const parsedReturns = me._def.returns.safeParse(result, params);
				if (!parsedReturns.success) throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
				return parsedReturns.data;
			});
		}
	}
	parameters() {
		return this._def.args;
	}
	returnType() {
		return this._def.returns;
	}
	args(...items) {
		return new ZodFunction({
			...this._def,
			args: ZodTuple.create(items).rest(ZodUnknown.create())
		});
	}
	returns(returnType) {
		return new ZodFunction({
			...this._def,
			returns: returnType
		});
	}
	implement(func) {
		return this.parse(func);
	}
	strictImplement(func) {
		return this.parse(func);
	}
	static create(args, returns, params) {
		return new ZodFunction({
			args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
			returns: returns || ZodUnknown.create(),
			typeName: ZodFirstPartyTypeKind.ZodFunction,
			...processCreateParams(params)
		});
	}
};
var ZodLazy = class extends ZodType {
	get schema() {
		return this._def.getter();
	}
	_parse(input) {
		const { ctx } = this._processInputParams(input);
		return this._def.getter()._parse({
			data: ctx.data,
			path: ctx.path,
			parent: ctx
		});
	}
};
ZodLazy.create = (getter, params) => {
	return new ZodLazy({
		getter,
		typeName: ZodFirstPartyTypeKind.ZodLazy,
		...processCreateParams(params)
	});
};
var ZodLiteral = class extends ZodType {
	_parse(input) {
		if (input.data !== this._def.value) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				received: ctx.data,
				code: ZodIssueCode.invalid_literal,
				expected: this._def.value
			});
			return INVALID;
		}
		return {
			status: "valid",
			value: input.data
		};
	}
	get value() {
		return this._def.value;
	}
};
ZodLiteral.create = (value, params) => {
	return new ZodLiteral({
		value,
		typeName: ZodFirstPartyTypeKind.ZodLiteral,
		...processCreateParams(params)
	});
};
function createZodEnum(values, params) {
	return new ZodEnum({
		values,
		typeName: ZodFirstPartyTypeKind.ZodEnum,
		...processCreateParams(params)
	});
}
var ZodEnum = class ZodEnum extends ZodType {
	_parse(input) {
		if (typeof input.data !== "string") {
			const ctx = this._getOrReturnCtx(input);
			const expectedValues = this._def.values;
			addIssueToContext(ctx, {
				expected: util.joinValues(expectedValues),
				received: ctx.parsedType,
				code: ZodIssueCode.invalid_type
			});
			return INVALID;
		}
		if (!this._cache) this._cache = new Set(this._def.values);
		if (!this._cache.has(input.data)) {
			const ctx = this._getOrReturnCtx(input);
			const expectedValues = this._def.values;
			addIssueToContext(ctx, {
				received: ctx.data,
				code: ZodIssueCode.invalid_enum_value,
				options: expectedValues
			});
			return INVALID;
		}
		return OK(input.data);
	}
	get options() {
		return this._def.values;
	}
	get enum() {
		const enumValues = {};
		for (const val of this._def.values) enumValues[val] = val;
		return enumValues;
	}
	get Values() {
		const enumValues = {};
		for (const val of this._def.values) enumValues[val] = val;
		return enumValues;
	}
	get Enum() {
		const enumValues = {};
		for (const val of this._def.values) enumValues[val] = val;
		return enumValues;
	}
	extract(values, newDef = this._def) {
		return ZodEnum.create(values, {
			...this._def,
			...newDef
		});
	}
	exclude(values, newDef = this._def) {
		return ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
			...this._def,
			...newDef
		});
	}
};
ZodEnum.create = createZodEnum;
var ZodNativeEnum = class extends ZodType {
	_parse(input) {
		const nativeEnumValues = util.getValidEnumValues(this._def.values);
		const ctx = this._getOrReturnCtx(input);
		if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
			const expectedValues = util.objectValues(nativeEnumValues);
			addIssueToContext(ctx, {
				expected: util.joinValues(expectedValues),
				received: ctx.parsedType,
				code: ZodIssueCode.invalid_type
			});
			return INVALID;
		}
		if (!this._cache) this._cache = new Set(util.getValidEnumValues(this._def.values));
		if (!this._cache.has(input.data)) {
			const expectedValues = util.objectValues(nativeEnumValues);
			addIssueToContext(ctx, {
				received: ctx.data,
				code: ZodIssueCode.invalid_enum_value,
				options: expectedValues
			});
			return INVALID;
		}
		return OK(input.data);
	}
	get enum() {
		return this._def.values;
	}
};
ZodNativeEnum.create = (values, params) => {
	return new ZodNativeEnum({
		values,
		typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
		...processCreateParams(params)
	});
};
var ZodPromise = class extends ZodType {
	unwrap() {
		return this._def.type;
	}
	_parse(input) {
		const { ctx } = this._processInputParams(input);
		if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.promise,
				received: ctx.parsedType
			});
			return INVALID;
		}
		return OK((ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data)).then((data) => {
			return this._def.type.parseAsync(data, {
				path: ctx.path,
				errorMap: ctx.common.contextualErrorMap
			});
		}));
	}
};
ZodPromise.create = (schema, params) => {
	return new ZodPromise({
		type: schema,
		typeName: ZodFirstPartyTypeKind.ZodPromise,
		...processCreateParams(params)
	});
};
var ZodEffects = class extends ZodType {
	innerType() {
		return this._def.schema;
	}
	sourceType() {
		return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
	}
	_parse(input) {
		const { status, ctx } = this._processInputParams(input);
		const effect = this._def.effect || null;
		const checkCtx = {
			addIssue: (arg) => {
				addIssueToContext(ctx, arg);
				if (arg.fatal) status.abort();
				else status.dirty();
			},
			get path() {
				return ctx.path;
			}
		};
		checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
		if (effect.type === "preprocess") {
			const processed = effect.transform(ctx.data, checkCtx);
			if (ctx.common.async) return Promise.resolve(processed).then(async (processed) => {
				if (status.value === "aborted") return INVALID;
				const result = await this._def.schema._parseAsync({
					data: processed,
					path: ctx.path,
					parent: ctx
				});
				if (result.status === "aborted") return INVALID;
				if (result.status === "dirty") return DIRTY(result.value);
				if (status.value === "dirty") return DIRTY(result.value);
				return result;
			});
			else {
				if (status.value === "aborted") return INVALID;
				const result = this._def.schema._parseSync({
					data: processed,
					path: ctx.path,
					parent: ctx
				});
				if (result.status === "aborted") return INVALID;
				if (result.status === "dirty") return DIRTY(result.value);
				if (status.value === "dirty") return DIRTY(result.value);
				return result;
			}
		}
		if (effect.type === "refinement") {
			const executeRefinement = (acc) => {
				const result = effect.refinement(acc, checkCtx);
				if (ctx.common.async) return Promise.resolve(result);
				if (result instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
				return acc;
			};
			if (ctx.common.async === false) {
				const inner = this._def.schema._parseSync({
					data: ctx.data,
					path: ctx.path,
					parent: ctx
				});
				if (inner.status === "aborted") return INVALID;
				if (inner.status === "dirty") status.dirty();
				executeRefinement(inner.value);
				return {
					status: status.value,
					value: inner.value
				};
			} else return this._def.schema._parseAsync({
				data: ctx.data,
				path: ctx.path,
				parent: ctx
			}).then((inner) => {
				if (inner.status === "aborted") return INVALID;
				if (inner.status === "dirty") status.dirty();
				return executeRefinement(inner.value).then(() => {
					return {
						status: status.value,
						value: inner.value
					};
				});
			});
		}
		if (effect.type === "transform") if (ctx.common.async === false) {
			const base = this._def.schema._parseSync({
				data: ctx.data,
				path: ctx.path,
				parent: ctx
			});
			if (!isValid(base)) return INVALID;
			const result = effect.transform(base.value, checkCtx);
			if (result instanceof Promise) throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
			return {
				status: status.value,
				value: result
			};
		} else return this._def.schema._parseAsync({
			data: ctx.data,
			path: ctx.path,
			parent: ctx
		}).then((base) => {
			if (!isValid(base)) return INVALID;
			return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({
				status: status.value,
				value: result
			}));
		});
		util.assertNever(effect);
	}
};
ZodEffects.create = (schema, effect, params) => {
	return new ZodEffects({
		schema,
		typeName: ZodFirstPartyTypeKind.ZodEffects,
		effect,
		...processCreateParams(params)
	});
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
	return new ZodEffects({
		schema,
		effect: {
			type: "preprocess",
			transform: preprocess
		},
		typeName: ZodFirstPartyTypeKind.ZodEffects,
		...processCreateParams(params)
	});
};
var ZodOptional = class extends ZodType {
	_parse(input) {
		if (this._getType(input) === ZodParsedType.undefined) return OK(void 0);
		return this._def.innerType._parse(input);
	}
	unwrap() {
		return this._def.innerType;
	}
};
ZodOptional.create = (type, params) => {
	return new ZodOptional({
		innerType: type,
		typeName: ZodFirstPartyTypeKind.ZodOptional,
		...processCreateParams(params)
	});
};
var ZodNullable = class extends ZodType {
	_parse(input) {
		if (this._getType(input) === ZodParsedType.null) return OK(null);
		return this._def.innerType._parse(input);
	}
	unwrap() {
		return this._def.innerType;
	}
};
ZodNullable.create = (type, params) => {
	return new ZodNullable({
		innerType: type,
		typeName: ZodFirstPartyTypeKind.ZodNullable,
		...processCreateParams(params)
	});
};
var ZodDefault = class extends ZodType {
	_parse(input) {
		const { ctx } = this._processInputParams(input);
		let data = ctx.data;
		if (ctx.parsedType === ZodParsedType.undefined) data = this._def.defaultValue();
		return this._def.innerType._parse({
			data,
			path: ctx.path,
			parent: ctx
		});
	}
	removeDefault() {
		return this._def.innerType;
	}
};
ZodDefault.create = (type, params) => {
	return new ZodDefault({
		innerType: type,
		typeName: ZodFirstPartyTypeKind.ZodDefault,
		defaultValue: typeof params.default === "function" ? params.default : () => params.default,
		...processCreateParams(params)
	});
};
var ZodCatch = class extends ZodType {
	_parse(input) {
		const { ctx } = this._processInputParams(input);
		const newCtx = {
			...ctx,
			common: {
				...ctx.common,
				issues: []
			}
		};
		const result = this._def.innerType._parse({
			data: newCtx.data,
			path: newCtx.path,
			parent: { ...newCtx }
		});
		if (isAsync(result)) return result.then((result) => {
			return {
				status: "valid",
				value: result.status === "valid" ? result.value : this._def.catchValue({
					get error() {
						return new ZodError(newCtx.common.issues);
					},
					input: newCtx.data
				})
			};
		});
		else return {
			status: "valid",
			value: result.status === "valid" ? result.value : this._def.catchValue({
				get error() {
					return new ZodError(newCtx.common.issues);
				},
				input: newCtx.data
			})
		};
	}
	removeCatch() {
		return this._def.innerType;
	}
};
ZodCatch.create = (type, params) => {
	return new ZodCatch({
		innerType: type,
		typeName: ZodFirstPartyTypeKind.ZodCatch,
		catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
		...processCreateParams(params)
	});
};
var ZodNaN = class extends ZodType {
	_parse(input) {
		if (this._getType(input) !== ZodParsedType.nan) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.nan,
				received: ctx.parsedType
			});
			return INVALID;
		}
		return {
			status: "valid",
			value: input.data
		};
	}
};
ZodNaN.create = (params) => {
	return new ZodNaN({
		typeName: ZodFirstPartyTypeKind.ZodNaN,
		...processCreateParams(params)
	});
};
var ZodBranded = class extends ZodType {
	_parse(input) {
		const { ctx } = this._processInputParams(input);
		const data = ctx.data;
		return this._def.type._parse({
			data,
			path: ctx.path,
			parent: ctx
		});
	}
	unwrap() {
		return this._def.type;
	}
};
var ZodPipeline = class ZodPipeline extends ZodType {
	_parse(input) {
		const { status, ctx } = this._processInputParams(input);
		if (ctx.common.async) {
			const handleAsync = async () => {
				const inResult = await this._def.in._parseAsync({
					data: ctx.data,
					path: ctx.path,
					parent: ctx
				});
				if (inResult.status === "aborted") return INVALID;
				if (inResult.status === "dirty") {
					status.dirty();
					return DIRTY(inResult.value);
				} else return this._def.out._parseAsync({
					data: inResult.value,
					path: ctx.path,
					parent: ctx
				});
			};
			return handleAsync();
		} else {
			const inResult = this._def.in._parseSync({
				data: ctx.data,
				path: ctx.path,
				parent: ctx
			});
			if (inResult.status === "aborted") return INVALID;
			if (inResult.status === "dirty") {
				status.dirty();
				return {
					status: "dirty",
					value: inResult.value
				};
			} else return this._def.out._parseSync({
				data: inResult.value,
				path: ctx.path,
				parent: ctx
			});
		}
	}
	static create(a, b) {
		return new ZodPipeline({
			in: a,
			out: b,
			typeName: ZodFirstPartyTypeKind.ZodPipeline
		});
	}
};
var ZodReadonly = class extends ZodType {
	_parse(input) {
		const result = this._def.innerType._parse(input);
		const freeze = (data) => {
			if (isValid(data)) data.value = Object.freeze(data.value);
			return data;
		};
		return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
	}
	unwrap() {
		return this._def.innerType;
	}
};
ZodReadonly.create = (type, params) => {
	return new ZodReadonly({
		innerType: type,
		typeName: ZodFirstPartyTypeKind.ZodReadonly,
		...processCreateParams(params)
	});
};
ZodObject.lazycreate;
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind) {
	ZodFirstPartyTypeKind["ZodString"] = "ZodString";
	ZodFirstPartyTypeKind["ZodNumber"] = "ZodNumber";
	ZodFirstPartyTypeKind["ZodNaN"] = "ZodNaN";
	ZodFirstPartyTypeKind["ZodBigInt"] = "ZodBigInt";
	ZodFirstPartyTypeKind["ZodBoolean"] = "ZodBoolean";
	ZodFirstPartyTypeKind["ZodDate"] = "ZodDate";
	ZodFirstPartyTypeKind["ZodSymbol"] = "ZodSymbol";
	ZodFirstPartyTypeKind["ZodUndefined"] = "ZodUndefined";
	ZodFirstPartyTypeKind["ZodNull"] = "ZodNull";
	ZodFirstPartyTypeKind["ZodAny"] = "ZodAny";
	ZodFirstPartyTypeKind["ZodUnknown"] = "ZodUnknown";
	ZodFirstPartyTypeKind["ZodNever"] = "ZodNever";
	ZodFirstPartyTypeKind["ZodVoid"] = "ZodVoid";
	ZodFirstPartyTypeKind["ZodArray"] = "ZodArray";
	ZodFirstPartyTypeKind["ZodObject"] = "ZodObject";
	ZodFirstPartyTypeKind["ZodUnion"] = "ZodUnion";
	ZodFirstPartyTypeKind["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
	ZodFirstPartyTypeKind["ZodIntersection"] = "ZodIntersection";
	ZodFirstPartyTypeKind["ZodTuple"] = "ZodTuple";
	ZodFirstPartyTypeKind["ZodRecord"] = "ZodRecord";
	ZodFirstPartyTypeKind["ZodMap"] = "ZodMap";
	ZodFirstPartyTypeKind["ZodSet"] = "ZodSet";
	ZodFirstPartyTypeKind["ZodFunction"] = "ZodFunction";
	ZodFirstPartyTypeKind["ZodLazy"] = "ZodLazy";
	ZodFirstPartyTypeKind["ZodLiteral"] = "ZodLiteral";
	ZodFirstPartyTypeKind["ZodEnum"] = "ZodEnum";
	ZodFirstPartyTypeKind["ZodEffects"] = "ZodEffects";
	ZodFirstPartyTypeKind["ZodNativeEnum"] = "ZodNativeEnum";
	ZodFirstPartyTypeKind["ZodOptional"] = "ZodOptional";
	ZodFirstPartyTypeKind["ZodNullable"] = "ZodNullable";
	ZodFirstPartyTypeKind["ZodDefault"] = "ZodDefault";
	ZodFirstPartyTypeKind["ZodCatch"] = "ZodCatch";
	ZodFirstPartyTypeKind["ZodPromise"] = "ZodPromise";
	ZodFirstPartyTypeKind["ZodBranded"] = "ZodBranded";
	ZodFirstPartyTypeKind["ZodPipeline"] = "ZodPipeline";
	ZodFirstPartyTypeKind["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
ZodString.create;
ZodNumber.create;
ZodNaN.create;
ZodBigInt.create;
ZodBoolean.create;
ZodDate.create;
ZodSymbol.create;
ZodUndefined.create;
ZodNull.create;
ZodAny.create;
ZodUnknown.create;
ZodNever.create;
ZodVoid.create;
ZodArray.create;
ZodObject.create;
ZodObject.strictCreate;
ZodUnion.create;
ZodDiscriminatedUnion.create;
ZodIntersection.create;
ZodTuple.create;
ZodRecord.create;
ZodMap.create;
ZodSet.create;
ZodFunction.create;
ZodLazy.create;
ZodLiteral.create;
ZodEnum.create;
ZodNativeEnum.create;
ZodPromise.create;
ZodEffects.create;
ZodOptional.create;
ZodNullable.create;
ZodEffects.createWithPreprocess;
ZodPipeline.create;
//#endregion
//#region node_modules/eventsource-parser/dist/index.js
var ParseError = class extends Error {
	constructor(message, options) {
		super(message), this.name = "ParseError", this.type = options.type, this.field = options.field, this.value = options.value, this.line = options.line;
	}
};
function noop(_arg) {}
function createParser(callbacks) {
	if (typeof callbacks == "function") throw new TypeError("`callbacks` must be an object, got a function instead. Did you mean `{onEvent: fn}`?");
	const { onEvent = noop, onError = noop, onRetry = noop, onComment } = callbacks;
	let incompleteLine = "", isFirstChunk = !0, id, data = "", eventType = "";
	function feed(newChunk) {
		const chunk = isFirstChunk ? newChunk.replace(/^\xEF\xBB\xBF/, "") : newChunk, [complete, incomplete] = splitLines(`${incompleteLine}${chunk}`);
		for (const line of complete) parseLine(line);
		incompleteLine = incomplete, isFirstChunk = !1;
	}
	function parseLine(line) {
		if (line === "") {
			dispatchEvent();
			return;
		}
		if (line.startsWith(":")) {
			onComment && onComment(line.slice(line.startsWith(": ") ? 2 : 1));
			return;
		}
		const fieldSeparatorIndex = line.indexOf(":");
		if (fieldSeparatorIndex !== -1) {
			const field = line.slice(0, fieldSeparatorIndex), offset = line[fieldSeparatorIndex + 1] === " " ? 2 : 1;
			processField(field, line.slice(fieldSeparatorIndex + offset), line);
			return;
		}
		processField(line, "", line);
	}
	function processField(field, value, line) {
		switch (field) {
			case "event":
				eventType = value;
				break;
			case "data":
				data = `${data}${value}
`;
				break;
			case "id":
				id = value.includes("\0") ? void 0 : value;
				break;
			case "retry":
				/^\d+$/.test(value) ? onRetry(parseInt(value, 10)) : onError(new ParseError(`Invalid \`retry\` value: "${value}"`, {
					type: "invalid-retry",
					value,
					line
				}));
				break;
			default:
				onError(new ParseError(`Unknown field "${field.length > 20 ? `${field.slice(0, 20)}\u2026` : field}"`, {
					type: "unknown-field",
					field,
					value,
					line
				}));
				break;
		}
	}
	function dispatchEvent() {
		data.length > 0 && onEvent({
			id,
			event: eventType || void 0,
			data: data.endsWith(`
`) ? data.slice(0, -1) : data
		}), id = void 0, data = "", eventType = "";
	}
	function reset(options = {}) {
		incompleteLine && options.consume && parseLine(incompleteLine), isFirstChunk = !0, id = void 0, data = "", eventType = "", incompleteLine = "";
	}
	return {
		feed,
		reset
	};
}
function splitLines(chunk) {
	const lines = [];
	let incompleteLine = "", searchIndex = 0;
	for (; searchIndex < chunk.length;) {
		const crIndex = chunk.indexOf("\r", searchIndex), lfIndex = chunk.indexOf(`
`, searchIndex);
		let lineEnd = -1;
		if (crIndex !== -1 && lfIndex !== -1 ? lineEnd = Math.min(crIndex, lfIndex) : crIndex !== -1 ? crIndex === chunk.length - 1 ? lineEnd = -1 : lineEnd = crIndex : lfIndex !== -1 && (lineEnd = lfIndex), lineEnd === -1) {
			incompleteLine = chunk.slice(searchIndex);
			break;
		} else {
			const line = chunk.slice(searchIndex, lineEnd);
			lines.push(line), searchIndex = lineEnd + 1, chunk[searchIndex - 1] === "\r" && chunk[searchIndex] === `
` && searchIndex++;
		}
	}
	return [lines, incompleteLine];
}
//#endregion
//#region node_modules/eventsource-parser/dist/stream.js
var EventSourceParserStream = class extends TransformStream {
	constructor({ onError, onRetry, onComment } = {}) {
		let parser;
		super({
			start(controller) {
				parser = createParser({
					onEvent: (event) => {
						controller.enqueue(event);
					},
					onError(error) {
						onError === "terminate" ? controller.error(error) : typeof onError == "function" && onError(error);
					},
					onRetry,
					onComment
				});
			},
			transform(chunk) {
				parser.feed(chunk);
			}
		});
	}
};
//#endregion
//#region node_modules/@ai-sdk/provider-utils/dist/index.mjs
function combineHeaders(...headers) {
	return headers.reduce((combinedHeaders, currentHeaders) => ({
		...combinedHeaders,
		...currentHeaders != null ? currentHeaders : {}
	}), {});
}
function createToolNameMapping({ tools = [], providerToolNames, resolveProviderToolName }) {
	var _a2;
	const customToolNameToProviderToolName = {};
	const providerToolNameToCustomToolName = {};
	for (const tool2 of tools) if (tool2.type === "provider") {
		const providerToolName = (_a2 = resolveProviderToolName == null ? void 0 : resolveProviderToolName(tool2)) != null ? _a2 : tool2.id in providerToolNames ? providerToolNames[tool2.id] : void 0;
		if (providerToolName == null) continue;
		customToolNameToProviderToolName[tool2.name] = providerToolName;
		providerToolNameToCustomToolName[providerToolName] = tool2.name;
	}
	return {
		toProviderToolName: (customToolName) => {
			var _a3;
			return (_a3 = customToolNameToProviderToolName[customToolName]) != null ? _a3 : customToolName;
		},
		toCustomToolName: (providerToolName) => {
			var _a3;
			return (_a3 = providerToolNameToCustomToolName[providerToolName]) != null ? _a3 : providerToolName;
		}
	};
}
async function delay(delayInMs, options) {
	if (delayInMs == null) return Promise.resolve();
	const signal = options == null ? void 0 : options.abortSignal;
	return new Promise((resolve2, reject) => {
		if (signal == null ? void 0 : signal.aborted) {
			reject(createAbortError());
			return;
		}
		const timeoutId = setTimeout(() => {
			cleanup();
			resolve2();
		}, delayInMs);
		const cleanup = () => {
			clearTimeout(timeoutId);
			signal?.removeEventListener("abort", onAbort);
		};
		const onAbort = () => {
			cleanup();
			reject(createAbortError());
		};
		signal?.addEventListener("abort", onAbort);
	});
}
function createAbortError() {
	return new DOMException("Delay was aborted", "AbortError");
}
var DelayedPromise = class {
	constructor() {
		this.status = { type: "pending" };
		this._resolve = void 0;
		this._reject = void 0;
	}
	get promise() {
		if (this._promise) return this._promise;
		this._promise = new Promise((resolve2, reject) => {
			if (this.status.type === "resolved") resolve2(this.status.value);
			else if (this.status.type === "rejected") reject(this.status.error);
			this._resolve = resolve2;
			this._reject = reject;
		});
		return this._promise;
	}
	resolve(value) {
		var _a2;
		this.status = {
			type: "resolved",
			value
		};
		if (this._promise) (_a2 = this._resolve) == null || _a2.call(this, value);
	}
	reject(error) {
		var _a2;
		this.status = {
			type: "rejected",
			error
		};
		if (this._promise) (_a2 = this._reject) == null || _a2.call(this, error);
	}
	isResolved() {
		return this.status.type === "resolved";
	}
	isRejected() {
		return this.status.type === "rejected";
	}
	isPending() {
		return this.status.type === "pending";
	}
};
function extractResponseHeaders(response) {
	return Object.fromEntries([...response.headers]);
}
var { btoa: btoa$1, atob: atob$1 } = globalThis;
function convertBase64ToUint8Array(base64String) {
	const latin1string = atob$1(base64String.replace(/-/g, "+").replace(/_/g, "/"));
	return Uint8Array.from(latin1string, (byte) => byte.codePointAt(0));
}
function convertUint8ArrayToBase64(array) {
	let latin1string = "";
	for (let i = 0; i < array.length; i++) latin1string += String.fromCodePoint(array[i]);
	return btoa$1(latin1string);
}
function convertToBase64(value) {
	return value instanceof Uint8Array ? convertUint8ArrayToBase64(value) : value;
}
function convertToFormData(input, options = {}) {
	const { useArrayBrackets = true } = options;
	const formData = new FormData();
	for (const [key, value] of Object.entries(input)) {
		if (value == null) continue;
		if (Array.isArray(value)) {
			if (value.length === 1) {
				formData.append(key, value[0]);
				continue;
			}
			const arrayKey = useArrayBrackets ? `${key}[]` : key;
			for (const item of value) formData.append(arrayKey, item);
			continue;
		}
		formData.append(key, value);
	}
	return formData;
}
var name$2 = "AI_DownloadError";
var marker$1 = `vercel.ai.error.${name$2}`;
var symbol$2 = Symbol.for(marker$1);
var _a$2, _b$1;
var DownloadError = class extends (_b$1 = AISDKError, _a$2 = symbol$2, _b$1) {
	constructor({ url, statusCode, statusText, cause, message = cause == null ? `Failed to download ${url}: ${statusCode} ${statusText}` : `Failed to download ${url}: ${cause}` }) {
		super({
			name: name$2,
			message,
			cause
		});
		this[_a$2] = true;
		this.url = url;
		this.statusCode = statusCode;
		this.statusText = statusText;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker$1);
	}
};
var DEFAULT_MAX_DOWNLOAD_SIZE = 2 * 1024 * 1024 * 1024;
async function readResponseWithSizeLimit({ response, url, maxBytes = DEFAULT_MAX_DOWNLOAD_SIZE }) {
	const contentLength = response.headers.get("content-length");
	if (contentLength != null) {
		const length = parseInt(contentLength, 10);
		if (!isNaN(length) && length > maxBytes) throw new DownloadError({
			url,
			message: `Download of ${url} exceeded maximum size of ${maxBytes} bytes (Content-Length: ${length}).`
		});
	}
	const body = response.body;
	if (body == null) return new Uint8Array(0);
	const reader = body.getReader();
	const chunks = [];
	let totalBytes = 0;
	try {
		while (true) {
			const { done, value } = await reader.read();
			if (done) break;
			totalBytes += value.length;
			if (totalBytes > maxBytes) throw new DownloadError({
				url,
				message: `Download of ${url} exceeded maximum size of ${maxBytes} bytes.`
			});
			chunks.push(value);
		}
	} finally {
		try {
			await reader.cancel();
		} finally {
			reader.releaseLock();
		}
	}
	const result = new Uint8Array(totalBytes);
	let offset = 0;
	for (const chunk of chunks) {
		result.set(chunk, offset);
		offset += chunk.length;
	}
	return result;
}
function validateDownloadUrl(url) {
	let parsed;
	try {
		parsed = new URL(url);
	} catch (e) {
		throw new DownloadError({
			url,
			message: `Invalid URL: ${url}`
		});
	}
	if (parsed.protocol === "data:") return;
	if (parsed.protocol !== "http:" && parsed.protocol !== "https:") throw new DownloadError({
		url,
		message: `URL scheme must be http, https, or data, got ${parsed.protocol}`
	});
	const hostname = parsed.hostname;
	if (!hostname) throw new DownloadError({
		url,
		message: `URL must have a hostname`
	});
	if (hostname === "localhost" || hostname.endsWith(".local") || hostname.endsWith(".localhost")) throw new DownloadError({
		url,
		message: `URL with hostname ${hostname} is not allowed`
	});
	if (hostname.startsWith("[") && hostname.endsWith("]")) {
		if (isPrivateIPv6(hostname.slice(1, -1))) throw new DownloadError({
			url,
			message: `URL with IPv6 address ${hostname} is not allowed`
		});
		return;
	}
	if (isIPv4(hostname)) {
		if (isPrivateIPv4(hostname)) throw new DownloadError({
			url,
			message: `URL with IP address ${hostname} is not allowed`
		});
		return;
	}
}
function isIPv4(hostname) {
	const parts = hostname.split(".");
	if (parts.length !== 4) return false;
	return parts.every((part) => {
		const num = Number(part);
		return Number.isInteger(num) && num >= 0 && num <= 255 && String(num) === part;
	});
}
function isPrivateIPv4(ip) {
	const [a, b] = ip.split(".").map(Number);
	if (a === 0) return true;
	if (a === 10) return true;
	if (a === 127) return true;
	if (a === 169 && b === 254) return true;
	if (a === 172 && b >= 16 && b <= 31) return true;
	if (a === 192 && b === 168) return true;
	return false;
}
function isPrivateIPv6(ip) {
	const normalized = ip.toLowerCase();
	if (normalized === "::1") return true;
	if (normalized === "::") return true;
	if (normalized.startsWith("::ffff:")) {
		const mappedPart = normalized.slice(7);
		if (isIPv4(mappedPart)) return isPrivateIPv4(mappedPart);
		const hexParts = mappedPart.split(":");
		if (hexParts.length === 2) {
			const high = parseInt(hexParts[0], 16);
			const low = parseInt(hexParts[1], 16);
			if (!isNaN(high) && !isNaN(low)) return isPrivateIPv4(`${high >> 8 & 255}.${high & 255}.${low >> 8 & 255}.${low & 255}`);
		}
	}
	if (normalized.startsWith("fc") || normalized.startsWith("fd")) return true;
	if (normalized.startsWith("fe80")) return true;
	return false;
}
async function downloadBlob(url, options) {
	var _a2, _b2;
	validateDownloadUrl(url);
	try {
		const response = await fetch(url, { signal: options == null ? void 0 : options.abortSignal });
		if (response.redirected) validateDownloadUrl(response.url);
		if (!response.ok) throw new DownloadError({
			url,
			statusCode: response.status,
			statusText: response.statusText
		});
		const data = await readResponseWithSizeLimit({
			response,
			url,
			maxBytes: (_a2 = options == null ? void 0 : options.maxBytes) != null ? _a2 : DEFAULT_MAX_DOWNLOAD_SIZE
		});
		const contentType = (_b2 = response.headers.get("content-type")) != null ? _b2 : void 0;
		return new Blob([data], contentType ? { type: contentType } : void 0);
	} catch (error) {
		if (DownloadError.isInstance(error)) throw error;
		throw new DownloadError({
			url,
			cause: error
		});
	}
}
var createIdGenerator = ({ prefix, size = 16, alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", separator = "-" } = {}) => {
	const generator = () => {
		const alphabetLength = alphabet.length;
		const chars = new Array(size);
		for (let i = 0; i < size; i++) chars[i] = alphabet[Math.random() * alphabetLength | 0];
		return chars.join("");
	};
	if (prefix == null) return generator;
	if (alphabet.includes(separator)) throw new InvalidArgumentError$1({
		argument: "separator",
		message: `The separator "${separator}" must not be part of the alphabet "${alphabet}".`
	});
	return () => `${prefix}${separator}${generator()}`;
};
var generateId = createIdGenerator();
function getErrorMessage(error) {
	if (error == null) return "unknown error";
	if (typeof error === "string") return error;
	if (error instanceof Error) return error.message;
	return JSON.stringify(error);
}
function isAbortError(error) {
	return (error instanceof Error || error instanceof DOMException) && (error.name === "AbortError" || error.name === "ResponseAborted" || error.name === "TimeoutError");
}
var FETCH_FAILED_ERROR_MESSAGES = ["fetch failed", "failed to fetch"];
var BUN_ERROR_CODES = [
	"ConnectionRefused",
	"ConnectionClosed",
	"FailedToOpenSocket",
	"ECONNRESET",
	"ECONNREFUSED",
	"ETIMEDOUT",
	"EPIPE"
];
function isBunNetworkError(error) {
	if (!(error instanceof Error)) return false;
	const code = error.code;
	if (typeof code === "string" && BUN_ERROR_CODES.includes(code)) return true;
	return false;
}
function handleFetchError({ error, url, requestBodyValues }) {
	if (isAbortError(error)) return error;
	if (error instanceof TypeError && FETCH_FAILED_ERROR_MESSAGES.includes(error.message.toLowerCase())) {
		const cause = error.cause;
		if (cause != null) return new APICallError({
			message: `Cannot connect to API: ${cause.message}`,
			cause,
			url,
			requestBodyValues,
			isRetryable: true
		});
	}
	if (isBunNetworkError(error)) return new APICallError({
		message: `Cannot connect to API: ${error.message}`,
		cause: error,
		url,
		requestBodyValues,
		isRetryable: true
	});
	return error;
}
function getRuntimeEnvironmentUserAgent(globalThisAny = globalThis) {
	var _a2, _b2, _c;
	if (globalThisAny.window) return `runtime/browser`;
	if ((_a2 = globalThisAny.navigator) == null ? void 0 : _a2.userAgent) return `runtime/${globalThisAny.navigator.userAgent.toLowerCase()}`;
	if ((_c = (_b2 = globalThisAny.process) == null ? void 0 : _b2.versions) == null ? void 0 : _c.node) return `runtime/node.js/${globalThisAny.process.version.substring(0)}`;
	if (globalThisAny.EdgeRuntime) return `runtime/vercel-edge`;
	return "runtime/unknown";
}
function normalizeHeaders(headers) {
	if (headers == null) return {};
	const normalized = {};
	if (headers instanceof Headers) headers.forEach((value, key) => {
		normalized[key.toLowerCase()] = value;
	});
	else {
		if (!Array.isArray(headers)) headers = Object.entries(headers);
		for (const [key, value] of headers) if (value != null) normalized[key.toLowerCase()] = value;
	}
	return normalized;
}
function withUserAgentSuffix(headers, ...userAgentSuffixParts) {
	const normalizedHeaders = new Headers(normalizeHeaders(headers));
	const currentUserAgentHeader = normalizedHeaders.get("user-agent") || "";
	normalizedHeaders.set("user-agent", [currentUserAgentHeader, ...userAgentSuffixParts].filter(Boolean).join(" "));
	return Object.fromEntries(normalizedHeaders.entries());
}
var VERSION$3 = "4.0.23";
var getOriginalFetch = () => globalThis.fetch;
var getFromApi = async ({ url, headers = {}, successfulResponseHandler, failedResponseHandler, abortSignal, fetch: fetch2 = getOriginalFetch() }) => {
	try {
		const response = await fetch2(url, {
			method: "GET",
			headers: withUserAgentSuffix(headers, `ai-sdk/provider-utils/${VERSION$3}`, getRuntimeEnvironmentUserAgent()),
			signal: abortSignal
		});
		const responseHeaders = extractResponseHeaders(response);
		if (!response.ok) {
			let errorInformation;
			try {
				errorInformation = await failedResponseHandler({
					response,
					url,
					requestBodyValues: {}
				});
			} catch (error) {
				if (isAbortError(error) || APICallError.isInstance(error)) throw error;
				throw new APICallError({
					message: "Failed to process error response",
					cause: error,
					statusCode: response.status,
					url,
					responseHeaders,
					requestBodyValues: {}
				});
			}
			throw errorInformation.value;
		}
		try {
			return await successfulResponseHandler({
				response,
				url,
				requestBodyValues: {}
			});
		} catch (error) {
			if (error instanceof Error) {
				if (isAbortError(error) || APICallError.isInstance(error)) throw error;
			}
			throw new APICallError({
				message: "Failed to process successful response",
				cause: error,
				statusCode: response.status,
				url,
				responseHeaders,
				requestBodyValues: {}
			});
		}
	} catch (error) {
		throw handleFetchError({
			error,
			url,
			requestBodyValues: {}
		});
	}
};
function isNonNullable(value) {
	return value != null;
}
function isUrlSupported({ mediaType, url, supportedUrls }) {
	url = url.toLowerCase();
	mediaType = mediaType.toLowerCase();
	return Object.entries(supportedUrls).map(([key, value]) => {
		const mediaType2 = key.toLowerCase();
		return mediaType2 === "*" || mediaType2 === "*/*" ? {
			mediaTypePrefix: "",
			regexes: value
		} : {
			mediaTypePrefix: mediaType2.replace(/\*/, ""),
			regexes: value
		};
	}).filter(({ mediaTypePrefix }) => mediaType.startsWith(mediaTypePrefix)).flatMap(({ regexes }) => regexes).some((pattern) => pattern.test(url));
}
function loadApiKey({ apiKey, environmentVariableName, apiKeyParameterName = "apiKey", description }) {
	if (typeof apiKey === "string") return apiKey;
	if (apiKey != null) throw new LoadAPIKeyError({ message: `${description} API key must be a string.` });
	if (typeof process === "undefined") throw new LoadAPIKeyError({ message: `${description} API key is missing. Pass it using the '${apiKeyParameterName}' parameter. Environment variables are not supported in this environment.` });
	apiKey = process.env[environmentVariableName];
	if (apiKey == null) throw new LoadAPIKeyError({ message: `${description} API key is missing. Pass it using the '${apiKeyParameterName}' parameter or the ${environmentVariableName} environment variable.` });
	if (typeof apiKey !== "string") throw new LoadAPIKeyError({ message: `${description} API key must be a string. The value of the ${environmentVariableName} environment variable is not a string.` });
	return apiKey;
}
function loadOptionalSetting({ settingValue, environmentVariableName }) {
	if (typeof settingValue === "string") return settingValue;
	if (settingValue != null || typeof process === "undefined") return;
	settingValue = process.env[environmentVariableName];
	if (settingValue == null || typeof settingValue !== "string") return;
	return settingValue;
}
function mediaTypeToExtension(mediaType) {
	var _a2;
	const [_type, subtype = ""] = mediaType.toLowerCase().split("/");
	return (_a2 = {
		mpeg: "mp3",
		"x-wav": "wav",
		opus: "ogg",
		mp4: "m4a",
		"x-m4a": "m4a"
	}[subtype]) != null ? _a2 : subtype;
}
var suspectProtoRx = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/;
var suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
function _parse(text) {
	const obj = JSON.parse(text);
	if (obj === null || typeof obj !== "object") return obj;
	if (suspectProtoRx.test(text) === false && suspectConstructorRx.test(text) === false) return obj;
	return filter(obj);
}
function filter(obj) {
	let next = [obj];
	while (next.length) {
		const nodes = next;
		next = [];
		for (const node of nodes) {
			if (Object.prototype.hasOwnProperty.call(node, "__proto__")) throw new SyntaxError("Object contains forbidden prototype property");
			if (Object.prototype.hasOwnProperty.call(node, "constructor") && node.constructor !== null && typeof node.constructor === "object" && Object.prototype.hasOwnProperty.call(node.constructor, "prototype")) throw new SyntaxError("Object contains forbidden prototype property");
			for (const key in node) {
				const value = node[key];
				if (value && typeof value === "object") next.push(value);
			}
		}
	}
	return obj;
}
function secureJsonParse(text) {
	const { stackTraceLimit } = Error;
	try {
		Error.stackTraceLimit = 0;
	} catch (e) {
		return _parse(text);
	}
	try {
		return _parse(text);
	} finally {
		Error.stackTraceLimit = stackTraceLimit;
	}
}
function addAdditionalPropertiesToJsonSchema(jsonSchema2) {
	if (jsonSchema2.type === "object" || Array.isArray(jsonSchema2.type) && jsonSchema2.type.includes("object")) {
		jsonSchema2.additionalProperties = false;
		const { properties } = jsonSchema2;
		if (properties != null) for (const key of Object.keys(properties)) properties[key] = visit(properties[key]);
	}
	if (jsonSchema2.items != null) jsonSchema2.items = Array.isArray(jsonSchema2.items) ? jsonSchema2.items.map(visit) : visit(jsonSchema2.items);
	if (jsonSchema2.anyOf != null) jsonSchema2.anyOf = jsonSchema2.anyOf.map(visit);
	if (jsonSchema2.allOf != null) jsonSchema2.allOf = jsonSchema2.allOf.map(visit);
	if (jsonSchema2.oneOf != null) jsonSchema2.oneOf = jsonSchema2.oneOf.map(visit);
	const { definitions } = jsonSchema2;
	if (definitions != null) for (const key of Object.keys(definitions)) definitions[key] = visit(definitions[key]);
	return jsonSchema2;
}
function visit(def) {
	if (typeof def === "boolean") return def;
	return addAdditionalPropertiesToJsonSchema(def);
}
var ignoreOverride = /* @__PURE__ */ Symbol("Let zodToJsonSchema decide on which parser to use");
var defaultOptions = {
	name: void 0,
	$refStrategy: "root",
	basePath: ["#"],
	effectStrategy: "input",
	pipeStrategy: "all",
	dateStrategy: "format:date-time",
	mapStrategy: "entries",
	removeAdditionalStrategy: "passthrough",
	allowedAdditionalProperties: true,
	rejectedAdditionalProperties: false,
	definitionPath: "definitions",
	strictUnions: false,
	definitions: {},
	errorMessages: false,
	patternStrategy: "escape",
	applyRegexFlags: false,
	emailStrategy: "format:email",
	base64Strategy: "contentEncoding:base64",
	nameStrategy: "ref"
};
var getDefaultOptions = (options) => typeof options === "string" ? {
	...defaultOptions,
	name: options
} : {
	...defaultOptions,
	...options
};
function parseAnyDef() {
	return {};
}
function parseArrayDef(def, refs) {
	var _a2, _b2, _c;
	const res = { type: "array" };
	if (((_a2 = def.type) == null ? void 0 : _a2._def) && ((_c = (_b2 = def.type) == null ? void 0 : _b2._def) == null ? void 0 : _c.typeName) !== ZodFirstPartyTypeKind.ZodAny) res.items = parseDef(def.type._def, {
		...refs,
		currentPath: [...refs.currentPath, "items"]
	});
	if (def.minLength) res.minItems = def.minLength.value;
	if (def.maxLength) res.maxItems = def.maxLength.value;
	if (def.exactLength) {
		res.minItems = def.exactLength.value;
		res.maxItems = def.exactLength.value;
	}
	return res;
}
function parseBigintDef(def) {
	const res = {
		type: "integer",
		format: "int64"
	};
	if (!def.checks) return res;
	for (const check of def.checks) switch (check.kind) {
		case "min":
			if (check.inclusive) res.minimum = check.value;
			else res.exclusiveMinimum = check.value;
			break;
		case "max":
			if (check.inclusive) res.maximum = check.value;
			else res.exclusiveMaximum = check.value;
			break;
		case "multipleOf":
			res.multipleOf = check.value;
			break;
	}
	return res;
}
function parseBooleanDef() {
	return { type: "boolean" };
}
function parseBrandedDef(_def, refs) {
	return parseDef(_def.type._def, refs);
}
var parseCatchDef = (def, refs) => {
	return parseDef(def.innerType._def, refs);
};
function parseDateDef(def, refs, overrideDateStrategy) {
	const strategy = overrideDateStrategy != null ? overrideDateStrategy : refs.dateStrategy;
	if (Array.isArray(strategy)) return { anyOf: strategy.map((item, i) => parseDateDef(def, refs, item)) };
	switch (strategy) {
		case "string":
		case "format:date-time": return {
			type: "string",
			format: "date-time"
		};
		case "format:date": return {
			type: "string",
			format: "date"
		};
		case "integer": return integerDateParser(def);
	}
}
var integerDateParser = (def) => {
	const res = {
		type: "integer",
		format: "unix-time"
	};
	for (const check of def.checks) switch (check.kind) {
		case "min":
			res.minimum = check.value;
			break;
		case "max":
			res.maximum = check.value;
			break;
	}
	return res;
};
function parseDefaultDef(_def, refs) {
	return {
		...parseDef(_def.innerType._def, refs),
		default: _def.defaultValue()
	};
}
function parseEffectsDef(_def, refs) {
	return refs.effectStrategy === "input" ? parseDef(_def.schema._def, refs) : parseAnyDef();
}
function parseEnumDef(def) {
	return {
		type: "string",
		enum: Array.from(def.values)
	};
}
var isJsonSchema7AllOfType = (type) => {
	if ("type" in type && type.type === "string") return false;
	return "allOf" in type;
};
function parseIntersectionDef(def, refs) {
	const allOf = [parseDef(def.left._def, {
		...refs,
		currentPath: [
			...refs.currentPath,
			"allOf",
			"0"
		]
	}), parseDef(def.right._def, {
		...refs,
		currentPath: [
			...refs.currentPath,
			"allOf",
			"1"
		]
	})].filter((x) => !!x);
	const mergedAllOf = [];
	allOf.forEach((schema) => {
		if (isJsonSchema7AllOfType(schema)) mergedAllOf.push(...schema.allOf);
		else {
			let nestedSchema = schema;
			if ("additionalProperties" in schema && schema.additionalProperties === false) {
				const { additionalProperties, ...rest } = schema;
				nestedSchema = rest;
			}
			mergedAllOf.push(nestedSchema);
		}
	});
	return mergedAllOf.length ? { allOf: mergedAllOf } : void 0;
}
function parseLiteralDef(def) {
	const parsedType = typeof def.value;
	if (parsedType !== "bigint" && parsedType !== "number" && parsedType !== "boolean" && parsedType !== "string") return { type: Array.isArray(def.value) ? "array" : "object" };
	return {
		type: parsedType === "bigint" ? "integer" : parsedType,
		const: def.value
	};
}
var emojiRegex = void 0;
var zodPatterns = {
	cuid: /^[cC][^\s-]{8,}$/,
	cuid2: /^[0-9a-z]+$/,
	ulid: /^[0-9A-HJKMNP-TV-Z]{26}$/,
	email: /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-\.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}$/,
	emoji: () => {
		if (emojiRegex === void 0) emojiRegex = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u");
		return emojiRegex;
	},
	uuid: /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/,
	ipv4: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
	ipv4Cidr: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
	ipv6: /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
	ipv6Cidr: /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
	base64: /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
	base64url: /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
	nanoid: /^[a-zA-Z0-9_-]{21}$/,
	jwt: /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/
};
function parseStringDef(def, refs) {
	const res = { type: "string" };
	if (def.checks) for (const check of def.checks) switch (check.kind) {
		case "min":
			res.minLength = typeof res.minLength === "number" ? Math.max(res.minLength, check.value) : check.value;
			break;
		case "max":
			res.maxLength = typeof res.maxLength === "number" ? Math.min(res.maxLength, check.value) : check.value;
			break;
		case "email":
			switch (refs.emailStrategy) {
				case "format:email":
					addFormat(res, "email", check.message, refs);
					break;
				case "format:idn-email":
					addFormat(res, "idn-email", check.message, refs);
					break;
				case "pattern:zod":
					addPattern(res, zodPatterns.email, check.message, refs);
					break;
			}
			break;
		case "url":
			addFormat(res, "uri", check.message, refs);
			break;
		case "uuid":
			addFormat(res, "uuid", check.message, refs);
			break;
		case "regex":
			addPattern(res, check.regex, check.message, refs);
			break;
		case "cuid":
			addPattern(res, zodPatterns.cuid, check.message, refs);
			break;
		case "cuid2":
			addPattern(res, zodPatterns.cuid2, check.message, refs);
			break;
		case "startsWith":
			addPattern(res, RegExp(`^${escapeLiteralCheckValue(check.value, refs)}`), check.message, refs);
			break;
		case "endsWith":
			addPattern(res, RegExp(`${escapeLiteralCheckValue(check.value, refs)}$`), check.message, refs);
			break;
		case "datetime":
			addFormat(res, "date-time", check.message, refs);
			break;
		case "date":
			addFormat(res, "date", check.message, refs);
			break;
		case "time":
			addFormat(res, "time", check.message, refs);
			break;
		case "duration":
			addFormat(res, "duration", check.message, refs);
			break;
		case "length":
			res.minLength = typeof res.minLength === "number" ? Math.max(res.minLength, check.value) : check.value;
			res.maxLength = typeof res.maxLength === "number" ? Math.min(res.maxLength, check.value) : check.value;
			break;
		case "includes":
			addPattern(res, RegExp(escapeLiteralCheckValue(check.value, refs)), check.message, refs);
			break;
		case "ip":
			if (check.version !== "v6") addFormat(res, "ipv4", check.message, refs);
			if (check.version !== "v4") addFormat(res, "ipv6", check.message, refs);
			break;
		case "base64url":
			addPattern(res, zodPatterns.base64url, check.message, refs);
			break;
		case "jwt":
			addPattern(res, zodPatterns.jwt, check.message, refs);
			break;
		case "cidr":
			if (check.version !== "v6") addPattern(res, zodPatterns.ipv4Cidr, check.message, refs);
			if (check.version !== "v4") addPattern(res, zodPatterns.ipv6Cidr, check.message, refs);
			break;
		case "emoji":
			addPattern(res, zodPatterns.emoji(), check.message, refs);
			break;
		case "ulid":
			addPattern(res, zodPatterns.ulid, check.message, refs);
			break;
		case "base64":
			switch (refs.base64Strategy) {
				case "format:binary":
					addFormat(res, "binary", check.message, refs);
					break;
				case "contentEncoding:base64":
					res.contentEncoding = "base64";
					break;
				case "pattern:zod":
					addPattern(res, zodPatterns.base64, check.message, refs);
					break;
			}
			break;
		case "nanoid": addPattern(res, zodPatterns.nanoid, check.message, refs);
		case "toLowerCase":
		case "toUpperCase":
		case "trim": break;
		default:
	}
	return res;
}
function escapeLiteralCheckValue(literal, refs) {
	return refs.patternStrategy === "escape" ? escapeNonAlphaNumeric(literal) : literal;
}
var ALPHA_NUMERIC = /* @__PURE__ */ new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
function escapeNonAlphaNumeric(source) {
	let result = "";
	for (let i = 0; i < source.length; i++) {
		if (!ALPHA_NUMERIC.has(source[i])) result += "\\";
		result += source[i];
	}
	return result;
}
function addFormat(schema, value, message, refs) {
	var _a2;
	if (schema.format || ((_a2 = schema.anyOf) == null ? void 0 : _a2.some((x) => x.format))) {
		if (!schema.anyOf) schema.anyOf = [];
		if (schema.format) {
			schema.anyOf.push({ format: schema.format });
			delete schema.format;
		}
		schema.anyOf.push({
			format: value,
			...message && refs.errorMessages && { errorMessage: { format: message } }
		});
	} else schema.format = value;
}
function addPattern(schema, regex, message, refs) {
	var _a2;
	if (schema.pattern || ((_a2 = schema.allOf) == null ? void 0 : _a2.some((x) => x.pattern))) {
		if (!schema.allOf) schema.allOf = [];
		if (schema.pattern) {
			schema.allOf.push({ pattern: schema.pattern });
			delete schema.pattern;
		}
		schema.allOf.push({
			pattern: stringifyRegExpWithFlags(regex, refs),
			...message && refs.errorMessages && { errorMessage: { pattern: message } }
		});
	} else schema.pattern = stringifyRegExpWithFlags(regex, refs);
}
function stringifyRegExpWithFlags(regex, refs) {
	var _a2;
	if (!refs.applyRegexFlags || !regex.flags) return regex.source;
	const flags = {
		i: regex.flags.includes("i"),
		m: regex.flags.includes("m"),
		s: regex.flags.includes("s")
	};
	const source = flags.i ? regex.source.toLowerCase() : regex.source;
	let pattern = "";
	let isEscaped = false;
	let inCharGroup = false;
	let inCharRange = false;
	for (let i = 0; i < source.length; i++) {
		if (isEscaped) {
			pattern += source[i];
			isEscaped = false;
			continue;
		}
		if (flags.i) {
			if (inCharGroup) {
				if (source[i].match(/[a-z]/)) {
					if (inCharRange) {
						pattern += source[i];
						pattern += `${source[i - 2]}-${source[i]}`.toUpperCase();
						inCharRange = false;
					} else if (source[i + 1] === "-" && ((_a2 = source[i + 2]) == null ? void 0 : _a2.match(/[a-z]/))) {
						pattern += source[i];
						inCharRange = true;
					} else pattern += `${source[i]}${source[i].toUpperCase()}`;
					continue;
				}
			} else if (source[i].match(/[a-z]/)) {
				pattern += `[${source[i]}${source[i].toUpperCase()}]`;
				continue;
			}
		}
		if (flags.m) {
			if (source[i] === "^") {
				pattern += `(^|(?<=[\r
]))`;
				continue;
			} else if (source[i] === "$") {
				pattern += `($|(?=[\r
]))`;
				continue;
			}
		}
		if (flags.s && source[i] === ".") {
			pattern += inCharGroup ? `${source[i]}\r
` : `[${source[i]}\r
]`;
			continue;
		}
		pattern += source[i];
		if (source[i] === "\\") isEscaped = true;
		else if (inCharGroup && source[i] === "]") inCharGroup = false;
		else if (!inCharGroup && source[i] === "[") inCharGroup = true;
	}
	try {
		new RegExp(pattern);
	} catch (e) {
		console.warn(`Could not convert regex pattern at ${refs.currentPath.join("/")} to a flag-independent form! Falling back to the flag-ignorant source`);
		return regex.source;
	}
	return pattern;
}
function parseRecordDef(def, refs) {
	var _a2, _b2, _c, _d, _e, _f;
	const schema = {
		type: "object",
		additionalProperties: (_a2 = parseDef(def.valueType._def, {
			...refs,
			currentPath: [...refs.currentPath, "additionalProperties"]
		})) != null ? _a2 : refs.allowedAdditionalProperties
	};
	if (((_b2 = def.keyType) == null ? void 0 : _b2._def.typeName) === ZodFirstPartyTypeKind.ZodString && ((_c = def.keyType._def.checks) == null ? void 0 : _c.length)) {
		const { type, ...keyType } = parseStringDef(def.keyType._def, refs);
		return {
			...schema,
			propertyNames: keyType
		};
	} else if (((_d = def.keyType) == null ? void 0 : _d._def.typeName) === ZodFirstPartyTypeKind.ZodEnum) return {
		...schema,
		propertyNames: { enum: def.keyType._def.values }
	};
	else if (((_e = def.keyType) == null ? void 0 : _e._def.typeName) === ZodFirstPartyTypeKind.ZodBranded && def.keyType._def.type._def.typeName === ZodFirstPartyTypeKind.ZodString && ((_f = def.keyType._def.type._def.checks) == null ? void 0 : _f.length)) {
		const { type, ...keyType } = parseBrandedDef(def.keyType._def, refs);
		return {
			...schema,
			propertyNames: keyType
		};
	}
	return schema;
}
function parseMapDef(def, refs) {
	if (refs.mapStrategy === "record") return parseRecordDef(def, refs);
	return {
		type: "array",
		maxItems: 125,
		items: {
			type: "array",
			items: [parseDef(def.keyType._def, {
				...refs,
				currentPath: [
					...refs.currentPath,
					"items",
					"items",
					"0"
				]
			}) || parseAnyDef(), parseDef(def.valueType._def, {
				...refs,
				currentPath: [
					...refs.currentPath,
					"items",
					"items",
					"1"
				]
			}) || parseAnyDef()],
			minItems: 2,
			maxItems: 2
		}
	};
}
function parseNativeEnumDef(def) {
	const object = def.values;
	const actualValues = Object.keys(def.values).filter((key) => {
		return typeof object[object[key]] !== "number";
	}).map((key) => object[key]);
	const parsedTypes = Array.from(new Set(actualValues.map((values) => typeof values)));
	return {
		type: parsedTypes.length === 1 ? parsedTypes[0] === "string" ? "string" : "number" : ["string", "number"],
		enum: actualValues
	};
}
function parseNeverDef() {
	return { not: parseAnyDef() };
}
function parseNullDef() {
	return { type: "null" };
}
var primitiveMappings = {
	ZodString: "string",
	ZodNumber: "number",
	ZodBigInt: "integer",
	ZodBoolean: "boolean",
	ZodNull: "null"
};
function parseUnionDef(def, refs) {
	const options = def.options instanceof Map ? Array.from(def.options.values()) : def.options;
	if (options.every((x) => x._def.typeName in primitiveMappings && (!x._def.checks || !x._def.checks.length))) {
		const types = options.reduce((types2, x) => {
			const type = primitiveMappings[x._def.typeName];
			return type && !types2.includes(type) ? [...types2, type] : types2;
		}, []);
		return { type: types.length > 1 ? types : types[0] };
	} else if (options.every((x) => x._def.typeName === "ZodLiteral" && !x.description)) {
		const types = options.reduce((acc, x) => {
			const type = typeof x._def.value;
			switch (type) {
				case "string":
				case "number":
				case "boolean": return [...acc, type];
				case "bigint": return [...acc, "integer"];
				case "object": if (x._def.value === null) return [...acc, "null"];
				default: return acc;
			}
		}, []);
		if (types.length === options.length) {
			const uniqueTypes = types.filter((x, i, a) => a.indexOf(x) === i);
			return {
				type: uniqueTypes.length > 1 ? uniqueTypes : uniqueTypes[0],
				enum: options.reduce((acc, x) => {
					return acc.includes(x._def.value) ? acc : [...acc, x._def.value];
				}, [])
			};
		}
	} else if (options.every((x) => x._def.typeName === "ZodEnum")) return {
		type: "string",
		enum: options.reduce((acc, x) => [...acc, ...x._def.values.filter((x2) => !acc.includes(x2))], [])
	};
	return asAnyOf(def, refs);
}
var asAnyOf = (def, refs) => {
	const anyOf = (def.options instanceof Map ? Array.from(def.options.values()) : def.options).map((x, i) => parseDef(x._def, {
		...refs,
		currentPath: [
			...refs.currentPath,
			"anyOf",
			`${i}`
		]
	})).filter((x) => !!x && (!refs.strictUnions || typeof x === "object" && Object.keys(x).length > 0));
	return anyOf.length ? { anyOf } : void 0;
};
function parseNullableDef(def, refs) {
	if ([
		"ZodString",
		"ZodNumber",
		"ZodBigInt",
		"ZodBoolean",
		"ZodNull"
	].includes(def.innerType._def.typeName) && (!def.innerType._def.checks || !def.innerType._def.checks.length)) return { type: [primitiveMappings[def.innerType._def.typeName], "null"] };
	const base = parseDef(def.innerType._def, {
		...refs,
		currentPath: [
			...refs.currentPath,
			"anyOf",
			"0"
		]
	});
	return base && { anyOf: [base, { type: "null" }] };
}
function parseNumberDef(def) {
	const res = { type: "number" };
	if (!def.checks) return res;
	for (const check of def.checks) switch (check.kind) {
		case "int":
			res.type = "integer";
			break;
		case "min":
			if (check.inclusive) res.minimum = check.value;
			else res.exclusiveMinimum = check.value;
			break;
		case "max":
			if (check.inclusive) res.maximum = check.value;
			else res.exclusiveMaximum = check.value;
			break;
		case "multipleOf":
			res.multipleOf = check.value;
			break;
	}
	return res;
}
function parseObjectDef(def, refs) {
	const result = {
		type: "object",
		properties: {}
	};
	const required = [];
	const shape = def.shape();
	for (const propName in shape) {
		let propDef = shape[propName];
		if (propDef === void 0 || propDef._def === void 0) continue;
		const propOptional = safeIsOptional(propDef);
		const parsedDef = parseDef(propDef._def, {
			...refs,
			currentPath: [
				...refs.currentPath,
				"properties",
				propName
			],
			propertyPath: [
				...refs.currentPath,
				"properties",
				propName
			]
		});
		if (parsedDef === void 0) continue;
		result.properties[propName] = parsedDef;
		if (!propOptional) required.push(propName);
	}
	if (required.length) result.required = required;
	const additionalProperties = decideAdditionalProperties(def, refs);
	if (additionalProperties !== void 0) result.additionalProperties = additionalProperties;
	return result;
}
function decideAdditionalProperties(def, refs) {
	if (def.catchall._def.typeName !== "ZodNever") return parseDef(def.catchall._def, {
		...refs,
		currentPath: [...refs.currentPath, "additionalProperties"]
	});
	switch (def.unknownKeys) {
		case "passthrough": return refs.allowedAdditionalProperties;
		case "strict": return refs.rejectedAdditionalProperties;
		case "strip": return refs.removeAdditionalStrategy === "strict" ? refs.allowedAdditionalProperties : refs.rejectedAdditionalProperties;
	}
}
function safeIsOptional(schema) {
	try {
		return schema.isOptional();
	} catch (e) {
		return true;
	}
}
var parseOptionalDef = (def, refs) => {
	var _a2;
	if (refs.currentPath.toString() === ((_a2 = refs.propertyPath) == null ? void 0 : _a2.toString())) return parseDef(def.innerType._def, refs);
	const innerSchema = parseDef(def.innerType._def, {
		...refs,
		currentPath: [
			...refs.currentPath,
			"anyOf",
			"1"
		]
	});
	return innerSchema ? { anyOf: [{ not: parseAnyDef() }, innerSchema] } : parseAnyDef();
};
var parsePipelineDef = (def, refs) => {
	if (refs.pipeStrategy === "input") return parseDef(def.in._def, refs);
	else if (refs.pipeStrategy === "output") return parseDef(def.out._def, refs);
	const a = parseDef(def.in._def, {
		...refs,
		currentPath: [
			...refs.currentPath,
			"allOf",
			"0"
		]
	});
	return { allOf: [a, parseDef(def.out._def, {
		...refs,
		currentPath: [
			...refs.currentPath,
			"allOf",
			a ? "1" : "0"
		]
	})].filter((x) => x !== void 0) };
};
function parsePromiseDef(def, refs) {
	return parseDef(def.type._def, refs);
}
function parseSetDef(def, refs) {
	const schema = {
		type: "array",
		uniqueItems: true,
		items: parseDef(def.valueType._def, {
			...refs,
			currentPath: [...refs.currentPath, "items"]
		})
	};
	if (def.minSize) schema.minItems = def.minSize.value;
	if (def.maxSize) schema.maxItems = def.maxSize.value;
	return schema;
}
function parseTupleDef(def, refs) {
	if (def.rest) return {
		type: "array",
		minItems: def.items.length,
		items: def.items.map((x, i) => parseDef(x._def, {
			...refs,
			currentPath: [
				...refs.currentPath,
				"items",
				`${i}`
			]
		})).reduce((acc, x) => x === void 0 ? acc : [...acc, x], []),
		additionalItems: parseDef(def.rest._def, {
			...refs,
			currentPath: [...refs.currentPath, "additionalItems"]
		})
	};
	else return {
		type: "array",
		minItems: def.items.length,
		maxItems: def.items.length,
		items: def.items.map((x, i) => parseDef(x._def, {
			...refs,
			currentPath: [
				...refs.currentPath,
				"items",
				`${i}`
			]
		})).reduce((acc, x) => x === void 0 ? acc : [...acc, x], [])
	};
}
function parseUndefinedDef() {
	return { not: parseAnyDef() };
}
function parseUnknownDef() {
	return parseAnyDef();
}
var parseReadonlyDef = (def, refs) => {
	return parseDef(def.innerType._def, refs);
};
var selectParser = (def, typeName, refs) => {
	switch (typeName) {
		case ZodFirstPartyTypeKind.ZodString: return parseStringDef(def, refs);
		case ZodFirstPartyTypeKind.ZodNumber: return parseNumberDef(def);
		case ZodFirstPartyTypeKind.ZodObject: return parseObjectDef(def, refs);
		case ZodFirstPartyTypeKind.ZodBigInt: return parseBigintDef(def);
		case ZodFirstPartyTypeKind.ZodBoolean: return parseBooleanDef();
		case ZodFirstPartyTypeKind.ZodDate: return parseDateDef(def, refs);
		case ZodFirstPartyTypeKind.ZodUndefined: return parseUndefinedDef();
		case ZodFirstPartyTypeKind.ZodNull: return parseNullDef();
		case ZodFirstPartyTypeKind.ZodArray: return parseArrayDef(def, refs);
		case ZodFirstPartyTypeKind.ZodUnion:
		case ZodFirstPartyTypeKind.ZodDiscriminatedUnion: return parseUnionDef(def, refs);
		case ZodFirstPartyTypeKind.ZodIntersection: return parseIntersectionDef(def, refs);
		case ZodFirstPartyTypeKind.ZodTuple: return parseTupleDef(def, refs);
		case ZodFirstPartyTypeKind.ZodRecord: return parseRecordDef(def, refs);
		case ZodFirstPartyTypeKind.ZodLiteral: return parseLiteralDef(def);
		case ZodFirstPartyTypeKind.ZodEnum: return parseEnumDef(def);
		case ZodFirstPartyTypeKind.ZodNativeEnum: return parseNativeEnumDef(def);
		case ZodFirstPartyTypeKind.ZodNullable: return parseNullableDef(def, refs);
		case ZodFirstPartyTypeKind.ZodOptional: return parseOptionalDef(def, refs);
		case ZodFirstPartyTypeKind.ZodMap: return parseMapDef(def, refs);
		case ZodFirstPartyTypeKind.ZodSet: return parseSetDef(def, refs);
		case ZodFirstPartyTypeKind.ZodLazy: return () => def.getter()._def;
		case ZodFirstPartyTypeKind.ZodPromise: return parsePromiseDef(def, refs);
		case ZodFirstPartyTypeKind.ZodNaN:
		case ZodFirstPartyTypeKind.ZodNever: return parseNeverDef();
		case ZodFirstPartyTypeKind.ZodEffects: return parseEffectsDef(def, refs);
		case ZodFirstPartyTypeKind.ZodAny: return parseAnyDef();
		case ZodFirstPartyTypeKind.ZodUnknown: return parseUnknownDef();
		case ZodFirstPartyTypeKind.ZodDefault: return parseDefaultDef(def, refs);
		case ZodFirstPartyTypeKind.ZodBranded: return parseBrandedDef(def, refs);
		case ZodFirstPartyTypeKind.ZodReadonly: return parseReadonlyDef(def, refs);
		case ZodFirstPartyTypeKind.ZodCatch: return parseCatchDef(def, refs);
		case ZodFirstPartyTypeKind.ZodPipeline: return parsePipelineDef(def, refs);
		case ZodFirstPartyTypeKind.ZodFunction:
		case ZodFirstPartyTypeKind.ZodVoid:
		case ZodFirstPartyTypeKind.ZodSymbol: return;
		default: return /* @__PURE__ */ ((_) => void 0)(typeName);
	}
};
var getRelativePath = (pathA, pathB) => {
	let i = 0;
	for (; i < pathA.length && i < pathB.length; i++) if (pathA[i] !== pathB[i]) break;
	return [(pathA.length - i).toString(), ...pathB.slice(i)].join("/");
};
function parseDef(def, refs, forceResolution = false) {
	var _a2;
	const seenItem = refs.seen.get(def);
	if (refs.override) {
		const overrideResult = (_a2 = refs.override) == null ? void 0 : _a2.call(refs, def, refs, seenItem, forceResolution);
		if (overrideResult !== ignoreOverride) return overrideResult;
	}
	if (seenItem && !forceResolution) {
		const seenSchema = get$ref(seenItem, refs);
		if (seenSchema !== void 0) return seenSchema;
	}
	const newItem = {
		def,
		path: refs.currentPath,
		jsonSchema: void 0
	};
	refs.seen.set(def, newItem);
	const jsonSchemaOrGetter = selectParser(def, def.typeName, refs);
	const jsonSchema2 = typeof jsonSchemaOrGetter === "function" ? parseDef(jsonSchemaOrGetter(), refs) : jsonSchemaOrGetter;
	if (jsonSchema2) addMeta(def, refs, jsonSchema2);
	if (refs.postProcess) {
		const postProcessResult = refs.postProcess(jsonSchema2, def, refs);
		newItem.jsonSchema = jsonSchema2;
		return postProcessResult;
	}
	newItem.jsonSchema = jsonSchema2;
	return jsonSchema2;
}
var get$ref = (item, refs) => {
	switch (refs.$refStrategy) {
		case "root": return { $ref: item.path.join("/") };
		case "relative": return { $ref: getRelativePath(refs.currentPath, item.path) };
		case "none":
		case "seen":
			if (item.path.length < refs.currentPath.length && item.path.every((value, index) => refs.currentPath[index] === value)) {
				console.warn(`Recursive reference detected at ${refs.currentPath.join("/")}! Defaulting to any`);
				return parseAnyDef();
			}
			return refs.$refStrategy === "seen" ? parseAnyDef() : void 0;
	}
};
var addMeta = (def, refs, jsonSchema2) => {
	if (def.description) jsonSchema2.description = def.description;
	return jsonSchema2;
};
var getRefs = (options) => {
	const _options = getDefaultOptions(options);
	const currentPath = _options.name !== void 0 ? [
		..._options.basePath,
		_options.definitionPath,
		_options.name
	] : _options.basePath;
	return {
		..._options,
		currentPath,
		propertyPath: void 0,
		seen: new Map(Object.entries(_options.definitions).map(([name2, def]) => [def._def, {
			def: def._def,
			path: [
				..._options.basePath,
				_options.definitionPath,
				name2
			],
			jsonSchema: void 0
		}]))
	};
};
var zod3ToJsonSchema = (schema, options) => {
	var _a2;
	const refs = getRefs(options);
	let definitions = typeof options === "object" && options.definitions ? Object.entries(options.definitions).reduce((acc, [name3, schema2]) => {
		var _a3;
		return {
			...acc,
			[name3]: (_a3 = parseDef(schema2._def, {
				...refs,
				currentPath: [
					...refs.basePath,
					refs.definitionPath,
					name3
				]
			}, true)) != null ? _a3 : parseAnyDef()
		};
	}, {}) : void 0;
	const name2 = typeof options === "string" ? options : (options == null ? void 0 : options.nameStrategy) === "title" ? void 0 : options == null ? void 0 : options.name;
	const main = (_a2 = parseDef(schema._def, name2 === void 0 ? refs : {
		...refs,
		currentPath: [
			...refs.basePath,
			refs.definitionPath,
			name2
		]
	}, false)) != null ? _a2 : parseAnyDef();
	const title = typeof options === "object" && options.name !== void 0 && options.nameStrategy === "title" ? options.name : void 0;
	if (title !== void 0) main.title = title;
	const combined = name2 === void 0 ? definitions ? {
		...main,
		[refs.definitionPath]: definitions
	} : main : {
		$ref: [
			...refs.$refStrategy === "relative" ? [] : refs.basePath,
			refs.definitionPath,
			name2
		].join("/"),
		[refs.definitionPath]: {
			...definitions,
			[name2]: main
		}
	};
	combined.$schema = "http://json-schema.org/draft-07/schema#";
	return combined;
};
var schemaSymbol = /* @__PURE__ */ Symbol.for("vercel.ai.schema");
function lazySchema(createSchema) {
	let schema;
	return () => {
		if (schema == null) schema = createSchema();
		return schema;
	};
}
function jsonSchema(jsonSchema2, { validate } = {}) {
	return {
		[schemaSymbol]: true,
		_type: void 0,
		get jsonSchema() {
			if (typeof jsonSchema2 === "function") jsonSchema2 = jsonSchema2();
			return jsonSchema2;
		},
		validate
	};
}
function isSchema(value) {
	return typeof value === "object" && value !== null && schemaSymbol in value && value[schemaSymbol] === true && "jsonSchema" in value && "validate" in value;
}
function asSchema(schema) {
	return schema == null ? jsonSchema({
		properties: {},
		additionalProperties: false
	}) : isSchema(schema) ? schema : "~standard" in schema ? schema["~standard"].vendor === "zod" ? zodSchema(schema) : standardSchema(schema) : schema();
}
function standardSchema(standardSchema2) {
	return jsonSchema(() => addAdditionalPropertiesToJsonSchema(standardSchema2["~standard"].jsonSchema.input({ target: "draft-07" })), { validate: async (value) => {
		const result = await standardSchema2["~standard"].validate(value);
		return "value" in result ? {
			success: true,
			value: result.value
		} : {
			success: false,
			error: new TypeValidationError({
				value,
				cause: result.issues
			})
		};
	} });
}
function zod3Schema(zodSchema2, options) {
	var _a2;
	const useReferences = (_a2 = options == null ? void 0 : options.useReferences) != null ? _a2 : false;
	return jsonSchema(() => zod3ToJsonSchema(zodSchema2, { $refStrategy: useReferences ? "root" : "none" }), { validate: async (value) => {
		const result = await zodSchema2.safeParseAsync(value);
		return result.success ? {
			success: true,
			value: result.data
		} : {
			success: false,
			error: result.error
		};
	} });
}
function zod4Schema(zodSchema2, options) {
	var _a2;
	const useReferences = (_a2 = options == null ? void 0 : options.useReferences) != null ? _a2 : false;
	return jsonSchema(() => addAdditionalPropertiesToJsonSchema(toJSONSchema(zodSchema2, {
		target: "draft-7",
		io: "input",
		reused: useReferences ? "ref" : "inline"
	})), { validate: async (value) => {
		const result = await safeParseAsync(zodSchema2, value);
		return result.success ? {
			success: true,
			value: result.data
		} : {
			success: false,
			error: result.error
		};
	} });
}
function isZod4Schema(zodSchema2) {
	return "_zod" in zodSchema2;
}
function zodSchema(zodSchema2, options) {
	if (isZod4Schema(zodSchema2)) return zod4Schema(zodSchema2, options);
	else return zod3Schema(zodSchema2, options);
}
async function validateTypes({ value, schema, context }) {
	const result = await safeValidateTypes({
		value,
		schema,
		context
	});
	if (!result.success) throw TypeValidationError.wrap({
		value,
		cause: result.error,
		context
	});
	return result.value;
}
async function safeValidateTypes({ value, schema, context }) {
	const actualSchema = asSchema(schema);
	try {
		if (actualSchema.validate == null) return {
			success: true,
			value,
			rawValue: value
		};
		const result = await actualSchema.validate(value);
		if (result.success) return {
			success: true,
			value: result.value,
			rawValue: value
		};
		return {
			success: false,
			error: TypeValidationError.wrap({
				value,
				cause: result.error,
				context
			}),
			rawValue: value
		};
	} catch (error) {
		return {
			success: false,
			error: TypeValidationError.wrap({
				value,
				cause: error,
				context
			}),
			rawValue: value
		};
	}
}
async function parseJSON({ text, schema }) {
	try {
		const value = secureJsonParse(text);
		if (schema == null) return value;
		return validateTypes({
			value,
			schema
		});
	} catch (error) {
		if (JSONParseError.isInstance(error) || TypeValidationError.isInstance(error)) throw error;
		throw new JSONParseError({
			text,
			cause: error
		});
	}
}
async function safeParseJSON({ text, schema }) {
	try {
		const value = secureJsonParse(text);
		if (schema == null) return {
			success: true,
			value,
			rawValue: value
		};
		return await safeValidateTypes({
			value,
			schema
		});
	} catch (error) {
		return {
			success: false,
			error: JSONParseError.isInstance(error) ? error : new JSONParseError({
				text,
				cause: error
			}),
			rawValue: void 0
		};
	}
}
function isParsableJson(input) {
	try {
		secureJsonParse(input);
		return true;
	} catch (e) {
		return false;
	}
}
function parseJsonEventStream({ stream, schema }) {
	return stream.pipeThrough(new TextDecoderStream()).pipeThrough(new EventSourceParserStream()).pipeThrough(new TransformStream({ async transform({ data }, controller) {
		if (data === "[DONE]") return;
		controller.enqueue(await safeParseJSON({
			text: data,
			schema
		}));
	} }));
}
async function parseProviderOptions({ provider, providerOptions, schema }) {
	if ((providerOptions == null ? void 0 : providerOptions[provider]) == null) return;
	const parsedProviderOptions = await safeValidateTypes({
		value: providerOptions[provider],
		schema
	});
	if (!parsedProviderOptions.success) throw new InvalidArgumentError$1({
		argument: "providerOptions",
		message: `invalid ${provider} provider options`,
		cause: parsedProviderOptions.error
	});
	return parsedProviderOptions.value;
}
var getOriginalFetch2 = () => globalThis.fetch;
var postJsonToApi = async ({ url, headers, body, failedResponseHandler, successfulResponseHandler, abortSignal, fetch: fetch2 }) => postToApi({
	url,
	headers: {
		"Content-Type": "application/json",
		...headers
	},
	body: {
		content: JSON.stringify(body),
		values: body
	},
	failedResponseHandler,
	successfulResponseHandler,
	abortSignal,
	fetch: fetch2
});
var postFormDataToApi = async ({ url, headers, formData, failedResponseHandler, successfulResponseHandler, abortSignal, fetch: fetch2 }) => postToApi({
	url,
	headers,
	body: {
		content: formData,
		values: Object.fromEntries(formData.entries())
	},
	failedResponseHandler,
	successfulResponseHandler,
	abortSignal,
	fetch: fetch2
});
var postToApi = async ({ url, headers = {}, body, successfulResponseHandler, failedResponseHandler, abortSignal, fetch: fetch2 = getOriginalFetch2() }) => {
	try {
		const response = await fetch2(url, {
			method: "POST",
			headers: withUserAgentSuffix(headers, `ai-sdk/provider-utils/${VERSION$3}`, getRuntimeEnvironmentUserAgent()),
			body: body.content,
			signal: abortSignal
		});
		const responseHeaders = extractResponseHeaders(response);
		if (!response.ok) {
			let errorInformation;
			try {
				errorInformation = await failedResponseHandler({
					response,
					url,
					requestBodyValues: body.values
				});
			} catch (error) {
				if (isAbortError(error) || APICallError.isInstance(error)) throw error;
				throw new APICallError({
					message: "Failed to process error response",
					cause: error,
					statusCode: response.status,
					url,
					responseHeaders,
					requestBodyValues: body.values
				});
			}
			throw errorInformation.value;
		}
		try {
			return await successfulResponseHandler({
				response,
				url,
				requestBodyValues: body.values
			});
		} catch (error) {
			if (error instanceof Error) {
				if (isAbortError(error) || APICallError.isInstance(error)) throw error;
			}
			throw new APICallError({
				message: "Failed to process successful response",
				cause: error,
				statusCode: response.status,
				url,
				responseHeaders,
				requestBodyValues: body.values
			});
		}
	} catch (error) {
		throw handleFetchError({
			error,
			url,
			requestBodyValues: body.values
		});
	}
};
function tool(tool2) {
	return tool2;
}
function createProviderToolFactory({ id, inputSchema }) {
	return ({ execute, outputSchema, needsApproval, toModelOutput, onInputStart, onInputDelta, onInputAvailable, ...args }) => tool({
		type: "provider",
		id,
		args,
		inputSchema,
		outputSchema,
		execute,
		needsApproval,
		toModelOutput,
		onInputStart,
		onInputDelta,
		onInputAvailable
	});
}
function createProviderToolFactoryWithOutputSchema({ id, inputSchema, outputSchema, supportsDeferredResults }) {
	return ({ execute, needsApproval, toModelOutput, onInputStart, onInputDelta, onInputAvailable, ...args }) => tool({
		type: "provider",
		id,
		args,
		inputSchema,
		outputSchema,
		execute,
		needsApproval,
		toModelOutput,
		onInputStart,
		onInputDelta,
		onInputAvailable,
		supportsDeferredResults
	});
}
async function resolve(value) {
	if (typeof value === "function") value = value();
	return Promise.resolve(value);
}
var createJsonErrorResponseHandler = ({ errorSchema, errorToMessage, isRetryable }) => async ({ response, url, requestBodyValues }) => {
	const responseBody = await response.text();
	const responseHeaders = extractResponseHeaders(response);
	if (responseBody.trim() === "") return {
		responseHeaders,
		value: new APICallError({
			message: response.statusText,
			url,
			requestBodyValues,
			statusCode: response.status,
			responseHeaders,
			responseBody,
			isRetryable: isRetryable == null ? void 0 : isRetryable(response)
		})
	};
	try {
		const parsedError = await parseJSON({
			text: responseBody,
			schema: errorSchema
		});
		return {
			responseHeaders,
			value: new APICallError({
				message: errorToMessage(parsedError),
				url,
				requestBodyValues,
				statusCode: response.status,
				responseHeaders,
				responseBody,
				data: parsedError,
				isRetryable: isRetryable == null ? void 0 : isRetryable(response, parsedError)
			})
		};
	} catch (parseError) {
		return {
			responseHeaders,
			value: new APICallError({
				message: response.statusText,
				url,
				requestBodyValues,
				statusCode: response.status,
				responseHeaders,
				responseBody,
				isRetryable: isRetryable == null ? void 0 : isRetryable(response)
			})
		};
	}
};
var createEventSourceResponseHandler = (chunkSchema) => async ({ response }) => {
	const responseHeaders = extractResponseHeaders(response);
	if (response.body == null) throw new EmptyResponseBodyError({});
	return {
		responseHeaders,
		value: parseJsonEventStream({
			stream: response.body,
			schema: chunkSchema
		})
	};
};
var createJsonResponseHandler = (responseSchema) => async ({ response, url, requestBodyValues }) => {
	const responseBody = await response.text();
	const parsedResult = await safeParseJSON({
		text: responseBody,
		schema: responseSchema
	});
	const responseHeaders = extractResponseHeaders(response);
	if (!parsedResult.success) throw new APICallError({
		message: "Invalid JSON response",
		cause: parsedResult.error,
		statusCode: response.status,
		responseHeaders,
		responseBody,
		url,
		requestBodyValues
	});
	return {
		responseHeaders,
		value: parsedResult.value,
		rawValue: parsedResult.rawValue
	};
};
var createBinaryResponseHandler = () => async ({ response, url, requestBodyValues }) => {
	const responseHeaders = extractResponseHeaders(response);
	if (!response.body) throw new APICallError({
		message: "Response body is empty",
		url,
		requestBodyValues,
		statusCode: response.status,
		responseHeaders,
		responseBody: void 0
	});
	try {
		const buffer = await response.arrayBuffer();
		return {
			responseHeaders,
			value: new Uint8Array(buffer)
		};
	} catch (error) {
		throw new APICallError({
			message: "Failed to read response as array buffer",
			url,
			requestBodyValues,
			statusCode: response.status,
			responseHeaders,
			responseBody: void 0,
			cause: error
		});
	}
};
function withoutTrailingSlash(url) {
	return url == null ? void 0 : url.replace(/\/$/, "");
}
function isAsyncIterable(obj) {
	return obj != null && typeof obj[Symbol.asyncIterator] === "function";
}
async function* executeTool({ execute, input, options }) {
	const result = execute(input, options);
	if (isAsyncIterable(result)) {
		let lastOutput;
		for await (const output of result) {
			lastOutput = output;
			yield {
				type: "preliminary",
				output
			};
		}
		yield {
			type: "final",
			output: lastOutput
		};
	} else yield {
		type: "final",
		output: await result
	};
}
//#endregion
//#region node_modules/@vercel/oidc/dist/get-context.js
var require_get_context = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __export = (target, all) => {
		for (var name in all) __defProp(target, name, {
			get: all[name],
			enumerable: true
		});
	};
	var __copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") {
			for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
				get: () => from[key],
				enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
			});
		}
		return to;
	};
	var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
	var get_context_exports = {};
	__export(get_context_exports, {
		SYMBOL_FOR_REQ_CONTEXT: () => SYMBOL_FOR_REQ_CONTEXT,
		getContext: () => getContext
	});
	module.exports = __toCommonJS(get_context_exports);
	var SYMBOL_FOR_REQ_CONTEXT = Symbol.for("@vercel/request-context");
	function getContext() {
		return globalThis[SYMBOL_FOR_REQ_CONTEXT]?.get?.() ?? {};
	}
}));
//#endregion
//#region node_modules/@ai-sdk/gateway/dist/index.mjs
var import_index_browser = (/* @__PURE__ */ __commonJSMin(((exports, module) => {
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __export = (target, all) => {
		for (var name in all) __defProp(target, name, {
			get: all[name],
			enumerable: true
		});
	};
	var __copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") {
			for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
				get: () => from[key],
				enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
			});
		}
		return to;
	};
	var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
	var index_browser_exports = {};
	__export(index_browser_exports, {
		getContext: () => import_get_context.getContext,
		getVercelOidcToken: () => getVercelOidcToken,
		getVercelOidcTokenSync: () => getVercelOidcTokenSync
	});
	module.exports = __toCommonJS(index_browser_exports);
	var import_get_context = require_get_context();
	async function getVercelOidcToken() {
		return "";
	}
	function getVercelOidcTokenSync() {
		return "";
	}
})))();
var symbol$1 = Symbol.for("vercel.ai.gateway.error");
var _a$1, _b;
var GatewayError = class _GatewayError extends (_b = Error, _a$1 = symbol$1, _b) {
	constructor({ message, statusCode = 500, cause, generationId }) {
		super(generationId ? `${message} [${generationId}]` : message);
		this[_a$1] = true;
		this.statusCode = statusCode;
		this.cause = cause;
		this.generationId = generationId;
	}
	/**
	* Checks if the given error is a Gateway Error.
	* @param {unknown} error - The error to check.
	* @returns {boolean} True if the error is a Gateway Error, false otherwise.
	*/
	static isInstance(error) {
		return _GatewayError.hasMarker(error);
	}
	static hasMarker(error) {
		return typeof error === "object" && error !== null && symbol$1 in error && error[symbol$1] === true;
	}
};
var name$1 = "GatewayAuthenticationError";
var marker2$1 = `vercel.ai.gateway.error.${name$1}`;
var symbol2$1 = Symbol.for(marker2$1);
var _a2$1, _b2;
var GatewayAuthenticationError = class _GatewayAuthenticationError extends (_b2 = GatewayError, _a2$1 = symbol2$1, _b2) {
	constructor({ message = "Authentication failed", statusCode = 401, cause, generationId } = {}) {
		super({
			message,
			statusCode,
			cause,
			generationId
		});
		this[_a2$1] = true;
		this.name = name$1;
		this.type = "authentication_error";
	}
	static isInstance(error) {
		return GatewayError.hasMarker(error) && symbol2$1 in error;
	}
	/**
	* Creates a contextual error message when authentication fails
	*/
	static createContextualError({ apiKeyProvided, oidcTokenProvided, message = "Authentication failed", statusCode = 401, cause, generationId }) {
		let contextualMessage;
		if (apiKeyProvided) contextualMessage = `AI Gateway authentication failed: Invalid API key.

Create a new API key: https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai%2Fapi-keys

Provide via 'apiKey' option or 'AI_GATEWAY_API_KEY' environment variable.`;
		else if (oidcTokenProvided) contextualMessage = `AI Gateway authentication failed: Invalid OIDC token.

Run 'npx vercel link' to link your project, then 'vc env pull' to fetch the token.

Alternatively, use an API key: https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai%2Fapi-keys`;
		else contextualMessage = `AI Gateway authentication failed: No authentication provided.

Option 1 - API key:
Create an API key: https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai%2Fapi-keys
Provide via 'apiKey' option or 'AI_GATEWAY_API_KEY' environment variable.

Option 2 - OIDC token:
Run 'npx vercel link' to link your project, then 'vc env pull' to fetch the token.`;
		return new _GatewayAuthenticationError({
			message: contextualMessage,
			statusCode,
			cause,
			generationId
		});
	}
};
var name2$1 = "GatewayInvalidRequestError";
var marker3$1 = `vercel.ai.gateway.error.${name2$1}`;
var symbol3$1 = Symbol.for(marker3$1);
var _a3$1, _b3;
var GatewayInvalidRequestError = class extends (_b3 = GatewayError, _a3$1 = symbol3$1, _b3) {
	constructor({ message = "Invalid request", statusCode = 400, cause, generationId } = {}) {
		super({
			message,
			statusCode,
			cause,
			generationId
		});
		this[_a3$1] = true;
		this.name = name2$1;
		this.type = "invalid_request_error";
	}
	static isInstance(error) {
		return GatewayError.hasMarker(error) && symbol3$1 in error;
	}
};
var name3$1 = "GatewayRateLimitError";
var marker4$1 = `vercel.ai.gateway.error.${name3$1}`;
var symbol4$1 = Symbol.for(marker4$1);
var _a4$1, _b4;
var GatewayRateLimitError = class extends (_b4 = GatewayError, _a4$1 = symbol4$1, _b4) {
	constructor({ message = "Rate limit exceeded", statusCode = 429, cause, generationId } = {}) {
		super({
			message,
			statusCode,
			cause,
			generationId
		});
		this[_a4$1] = true;
		this.name = name3$1;
		this.type = "rate_limit_exceeded";
	}
	static isInstance(error) {
		return GatewayError.hasMarker(error) && symbol4$1 in error;
	}
};
var name4$1 = "GatewayModelNotFoundError";
var marker5$1 = `vercel.ai.gateway.error.${name4$1}`;
var symbol5$1 = Symbol.for(marker5$1);
var modelNotFoundParamSchema = lazySchema(() => zodSchema(object$1({ modelId: string() })));
var _a5$1, _b5;
var GatewayModelNotFoundError = class extends (_b5 = GatewayError, _a5$1 = symbol5$1, _b5) {
	constructor({ message = "Model not found", statusCode = 404, modelId, cause, generationId } = {}) {
		super({
			message,
			statusCode,
			cause,
			generationId
		});
		this[_a5$1] = true;
		this.name = name4$1;
		this.type = "model_not_found";
		this.modelId = modelId;
	}
	static isInstance(error) {
		return GatewayError.hasMarker(error) && symbol5$1 in error;
	}
};
var name5$1 = "GatewayInternalServerError";
var marker6$1 = `vercel.ai.gateway.error.${name5$1}`;
var symbol6$1 = Symbol.for(marker6$1);
var _a6$1, _b6;
var GatewayInternalServerError = class extends (_b6 = GatewayError, _a6$1 = symbol6$1, _b6) {
	constructor({ message = "Internal server error", statusCode = 500, cause, generationId } = {}) {
		super({
			message,
			statusCode,
			cause,
			generationId
		});
		this[_a6$1] = true;
		this.name = name5$1;
		this.type = "internal_server_error";
	}
	static isInstance(error) {
		return GatewayError.hasMarker(error) && symbol6$1 in error;
	}
};
var name6$1 = "GatewayResponseError";
var marker7$1 = `vercel.ai.gateway.error.${name6$1}`;
var symbol7$1 = Symbol.for(marker7$1);
var _a7$1, _b7;
var GatewayResponseError = class extends (_b7 = GatewayError, _a7$1 = symbol7$1, _b7) {
	constructor({ message = "Invalid response from Gateway", statusCode = 502, response, validationError, cause, generationId } = {}) {
		super({
			message,
			statusCode,
			cause,
			generationId
		});
		this[_a7$1] = true;
		this.name = name6$1;
		this.type = "response_error";
		this.response = response;
		this.validationError = validationError;
	}
	static isInstance(error) {
		return GatewayError.hasMarker(error) && symbol7$1 in error;
	}
};
async function createGatewayErrorFromResponse({ response, statusCode, defaultMessage = "Gateway request failed", cause, authMethod }) {
	var _a9;
	const parseResult = await safeValidateTypes({
		value: response,
		schema: gatewayErrorResponseSchema
	});
	if (!parseResult.success) {
		const rawGenerationId = typeof response === "object" && response !== null && "generationId" in response ? response.generationId : void 0;
		return new GatewayResponseError({
			message: `Invalid error response format: ${defaultMessage}`,
			statusCode,
			response,
			validationError: parseResult.error,
			cause,
			generationId: rawGenerationId
		});
	}
	const validatedResponse = parseResult.value;
	const errorType = validatedResponse.error.type;
	const message = validatedResponse.error.message;
	const generationId = (_a9 = validatedResponse.generationId) != null ? _a9 : void 0;
	switch (errorType) {
		case "authentication_error": return GatewayAuthenticationError.createContextualError({
			apiKeyProvided: authMethod === "api-key",
			oidcTokenProvided: authMethod === "oidc",
			statusCode,
			cause,
			generationId
		});
		case "invalid_request_error": return new GatewayInvalidRequestError({
			message,
			statusCode,
			cause,
			generationId
		});
		case "rate_limit_exceeded": return new GatewayRateLimitError({
			message,
			statusCode,
			cause,
			generationId
		});
		case "model_not_found": {
			const modelResult = await safeValidateTypes({
				value: validatedResponse.error.param,
				schema: modelNotFoundParamSchema
			});
			return new GatewayModelNotFoundError({
				message,
				statusCode,
				modelId: modelResult.success ? modelResult.value.modelId : void 0,
				cause,
				generationId
			});
		}
		case "internal_server_error": return new GatewayInternalServerError({
			message,
			statusCode,
			cause,
			generationId
		});
		default: return new GatewayInternalServerError({
			message,
			statusCode,
			cause,
			generationId
		});
	}
}
var gatewayErrorResponseSchema = lazySchema(() => zodSchema(object$1({
	error: object$1({
		message: string(),
		type: string().nullish(),
		param: unknown().nullish(),
		code: union([string(), number()]).nullish()
	}),
	generationId: string().nullish()
})));
var name7$1 = "GatewayTimeoutError";
var marker8$1 = `vercel.ai.gateway.error.${name7$1}`;
var symbol8$1 = Symbol.for(marker8$1);
var _a8$1, _b8;
var GatewayTimeoutError = class _GatewayTimeoutError extends (_b8 = GatewayError, _a8$1 = symbol8$1, _b8) {
	constructor({ message = "Request timed out", statusCode = 408, cause, generationId } = {}) {
		super({
			message,
			statusCode,
			cause,
			generationId
		});
		this[_a8$1] = true;
		this.name = name7$1;
		this.type = "timeout_error";
	}
	static isInstance(error) {
		return GatewayError.hasMarker(error) && symbol8$1 in error;
	}
	/**
	* Creates a helpful timeout error message with troubleshooting guidance
	*/
	static createTimeoutError({ originalMessage, statusCode = 408, cause, generationId }) {
		return new _GatewayTimeoutError({
			message: `Gateway request timed out: ${originalMessage}

    This is a client-side timeout. To resolve this, increase your timeout configuration: https://vercel.com/docs/ai-gateway/capabilities/video-generation#extending-timeouts-for-node.js`,
			statusCode,
			cause,
			generationId
		});
	}
};
function isTimeoutError(error) {
	if (!(error instanceof Error)) return false;
	const errorCode = error.code;
	if (typeof errorCode === "string") return [
		"UND_ERR_HEADERS_TIMEOUT",
		"UND_ERR_BODY_TIMEOUT",
		"UND_ERR_CONNECT_TIMEOUT"
	].includes(errorCode);
	return false;
}
async function asGatewayError(error, authMethod) {
	var _a9;
	if (GatewayError.isInstance(error)) return error;
	if (isTimeoutError(error)) return GatewayTimeoutError.createTimeoutError({
		originalMessage: error instanceof Error ? error.message : "Unknown error",
		cause: error
	});
	if (APICallError.isInstance(error)) {
		if (error.cause && isTimeoutError(error.cause)) return GatewayTimeoutError.createTimeoutError({
			originalMessage: error.message,
			cause: error
		});
		return await createGatewayErrorFromResponse({
			response: extractApiCallResponse(error),
			statusCode: (_a9 = error.statusCode) != null ? _a9 : 500,
			defaultMessage: "Gateway request failed",
			cause: error,
			authMethod
		});
	}
	return await createGatewayErrorFromResponse({
		response: {},
		statusCode: 500,
		defaultMessage: error instanceof Error ? `Gateway request failed: ${error.message}` : "Unknown Gateway error",
		cause: error,
		authMethod
	});
}
function extractApiCallResponse(error) {
	if (error.data !== void 0) return error.data;
	if (error.responseBody != null) try {
		return JSON.parse(error.responseBody);
	} catch (e) {
		return error.responseBody;
	}
	return {};
}
var GATEWAY_AUTH_METHOD_HEADER = "ai-gateway-auth-method";
async function parseAuthMethod(headers) {
	const result = await safeValidateTypes({
		value: headers[GATEWAY_AUTH_METHOD_HEADER],
		schema: gatewayAuthMethodSchema
	});
	return result.success ? result.value : void 0;
}
var gatewayAuthMethodSchema = lazySchema(() => zodSchema(union([literal("api-key"), literal("oidc")])));
var GatewayFetchMetadata = class {
	constructor(config) {
		this.config = config;
	}
	async getAvailableModels() {
		try {
			const { value } = await getFromApi({
				url: `${this.config.baseURL}/config`,
				headers: await resolve(this.config.headers()),
				successfulResponseHandler: createJsonResponseHandler(gatewayAvailableModelsResponseSchema),
				failedResponseHandler: createJsonErrorResponseHandler({
					errorSchema: any(),
					errorToMessage: (data) => data
				}),
				fetch: this.config.fetch
			});
			return value;
		} catch (error) {
			throw await asGatewayError(error);
		}
	}
	async getCredits() {
		try {
			const { value } = await getFromApi({
				url: `${new URL(this.config.baseURL).origin}/v1/credits`,
				headers: await resolve(this.config.headers()),
				successfulResponseHandler: createJsonResponseHandler(gatewayCreditsResponseSchema),
				failedResponseHandler: createJsonErrorResponseHandler({
					errorSchema: any(),
					errorToMessage: (data) => data
				}),
				fetch: this.config.fetch
			});
			return value;
		} catch (error) {
			throw await asGatewayError(error);
		}
	}
};
var gatewayAvailableModelsResponseSchema = lazySchema(() => zodSchema(object$1({ models: array$1(object$1({
	id: string(),
	name: string(),
	description: string().nullish(),
	pricing: object$1({
		input: string(),
		output: string(),
		input_cache_read: string().nullish(),
		input_cache_write: string().nullish()
	}).transform(({ input, output, input_cache_read, input_cache_write }) => ({
		input,
		output,
		...input_cache_read ? { cachedInputTokens: input_cache_read } : {},
		...input_cache_write ? { cacheCreationInputTokens: input_cache_write } : {}
	})).nullish(),
	specification: object$1({
		specificationVersion: literal("v3"),
		provider: string(),
		modelId: string()
	}),
	modelType: _enum([
		"embedding",
		"image",
		"language",
		"reranking",
		"video"
	]).nullish()
})) })));
var gatewayCreditsResponseSchema = lazySchema(() => zodSchema(object$1({
	balance: string(),
	total_used: string()
}).transform(({ balance, total_used }) => ({
	balance,
	totalUsed: total_used
}))));
var GatewaySpendReport = class {
	constructor(config) {
		this.config = config;
	}
	async getSpendReport(params) {
		try {
			const baseUrl = new URL(this.config.baseURL);
			const searchParams = new URLSearchParams();
			searchParams.set("start_date", params.startDate);
			searchParams.set("end_date", params.endDate);
			if (params.groupBy) searchParams.set("group_by", params.groupBy);
			if (params.datePart) searchParams.set("date_part", params.datePart);
			if (params.userId) searchParams.set("user_id", params.userId);
			if (params.model) searchParams.set("model", params.model);
			if (params.provider) searchParams.set("provider", params.provider);
			if (params.credentialType) searchParams.set("credential_type", params.credentialType);
			if (params.tags && params.tags.length > 0) searchParams.set("tags", params.tags.join(","));
			const { value } = await getFromApi({
				url: `${baseUrl.origin}/v1/report?${searchParams.toString()}`,
				headers: await resolve(this.config.headers()),
				successfulResponseHandler: createJsonResponseHandler(gatewaySpendReportResponseSchema),
				failedResponseHandler: createJsonErrorResponseHandler({
					errorSchema: any(),
					errorToMessage: (data) => data
				}),
				fetch: this.config.fetch
			});
			return value;
		} catch (error) {
			throw await asGatewayError(error);
		}
	}
};
var gatewaySpendReportResponseSchema = lazySchema(() => zodSchema(object$1({ results: array$1(object$1({
	day: string().optional(),
	hour: string().optional(),
	user: string().optional(),
	model: string().optional(),
	tag: string().optional(),
	provider: string().optional(),
	credential_type: _enum(["byok", "system"]).optional(),
	total_cost: number(),
	market_cost: number().optional(),
	input_tokens: number().optional(),
	output_tokens: number().optional(),
	cached_input_tokens: number().optional(),
	cache_creation_input_tokens: number().optional(),
	reasoning_tokens: number().optional(),
	request_count: number().optional()
}).transform(({ credential_type, total_cost, market_cost, input_tokens, output_tokens, cached_input_tokens, cache_creation_input_tokens, reasoning_tokens, request_count, ...rest }) => ({
	...rest,
	...credential_type !== void 0 ? { credentialType: credential_type } : {},
	totalCost: total_cost,
	...market_cost !== void 0 ? { marketCost: market_cost } : {},
	...input_tokens !== void 0 ? { inputTokens: input_tokens } : {},
	...output_tokens !== void 0 ? { outputTokens: output_tokens } : {},
	...cached_input_tokens !== void 0 ? { cachedInputTokens: cached_input_tokens } : {},
	...cache_creation_input_tokens !== void 0 ? { cacheCreationInputTokens: cache_creation_input_tokens } : {},
	...reasoning_tokens !== void 0 ? { reasoningTokens: reasoning_tokens } : {},
	...request_count !== void 0 ? { requestCount: request_count } : {}
}))) })));
var GatewayGenerationInfoFetcher = class {
	constructor(config) {
		this.config = config;
	}
	async getGenerationInfo(params) {
		try {
			const { value } = await getFromApi({
				url: `${new URL(this.config.baseURL).origin}/v1/generation?id=${encodeURIComponent(params.id)}`,
				headers: await resolve(this.config.headers()),
				successfulResponseHandler: createJsonResponseHandler(gatewayGenerationInfoResponseSchema),
				failedResponseHandler: createJsonErrorResponseHandler({
					errorSchema: any(),
					errorToMessage: (data) => data
				}),
				fetch: this.config.fetch
			});
			return value;
		} catch (error) {
			throw await asGatewayError(error);
		}
	}
};
var gatewayGenerationInfoResponseSchema = lazySchema(() => zodSchema(object$1({ data: object$1({
	id: string(),
	total_cost: number(),
	upstream_inference_cost: number(),
	usage: number(),
	created_at: string(),
	model: string(),
	is_byok: boolean(),
	provider_name: string(),
	streamed: boolean(),
	finish_reason: string(),
	latency: number(),
	generation_time: number(),
	native_tokens_prompt: number(),
	native_tokens_completion: number(),
	native_tokens_reasoning: number(),
	native_tokens_cached: number(),
	native_tokens_cache_creation: number(),
	billable_web_search_calls: number()
}).transform(({ total_cost, upstream_inference_cost, created_at, is_byok, provider_name, finish_reason, generation_time, native_tokens_prompt, native_tokens_completion, native_tokens_reasoning, native_tokens_cached, native_tokens_cache_creation, billable_web_search_calls, ...rest }) => ({
	...rest,
	totalCost: total_cost,
	upstreamInferenceCost: upstream_inference_cost,
	createdAt: created_at,
	isByok: is_byok,
	providerName: provider_name,
	finishReason: finish_reason,
	generationTime: generation_time,
	promptTokens: native_tokens_prompt,
	completionTokens: native_tokens_completion,
	reasoningTokens: native_tokens_reasoning,
	cachedTokens: native_tokens_cached,
	cacheCreationTokens: native_tokens_cache_creation,
	billableWebSearchCalls: billable_web_search_calls
})) }).transform(({ data }) => data)));
var GatewayLanguageModel = class {
	constructor(modelId, config) {
		this.modelId = modelId;
		this.config = config;
		this.specificationVersion = "v3";
		this.supportedUrls = { "*/*": [/.*/] };
	}
	get provider() {
		return this.config.provider;
	}
	async getArgs(options) {
		const { abortSignal: _abortSignal, ...optionsWithoutSignal } = options;
		return {
			args: this.maybeEncodeFileParts(optionsWithoutSignal),
			warnings: []
		};
	}
	async doGenerate(options) {
		const { args, warnings } = await this.getArgs(options);
		const { abortSignal } = options;
		const resolvedHeaders = await resolve(this.config.headers());
		try {
			const { responseHeaders, value: responseBody, rawValue: rawResponse } = await postJsonToApi({
				url: this.getUrl(),
				headers: combineHeaders(resolvedHeaders, options.headers, this.getModelConfigHeaders(this.modelId, false), await resolve(this.config.o11yHeaders)),
				body: args,
				successfulResponseHandler: createJsonResponseHandler(any()),
				failedResponseHandler: createJsonErrorResponseHandler({
					errorSchema: any(),
					errorToMessage: (data) => data
				}),
				...abortSignal && { abortSignal },
				fetch: this.config.fetch
			});
			return {
				...responseBody,
				request: { body: args },
				response: {
					headers: responseHeaders,
					body: rawResponse
				},
				warnings
			};
		} catch (error) {
			throw await asGatewayError(error, await parseAuthMethod(resolvedHeaders));
		}
	}
	async doStream(options) {
		const { args, warnings } = await this.getArgs(options);
		const { abortSignal } = options;
		const resolvedHeaders = await resolve(this.config.headers());
		try {
			const { value: response, responseHeaders } = await postJsonToApi({
				url: this.getUrl(),
				headers: combineHeaders(resolvedHeaders, options.headers, this.getModelConfigHeaders(this.modelId, true), await resolve(this.config.o11yHeaders)),
				body: args,
				successfulResponseHandler: createEventSourceResponseHandler(any()),
				failedResponseHandler: createJsonErrorResponseHandler({
					errorSchema: any(),
					errorToMessage: (data) => data
				}),
				...abortSignal && { abortSignal },
				fetch: this.config.fetch
			});
			return {
				stream: response.pipeThrough(new TransformStream({
					start(controller) {
						if (warnings.length > 0) controller.enqueue({
							type: "stream-start",
							warnings
						});
					},
					transform(chunk, controller) {
						if (chunk.success) {
							const streamPart = chunk.value;
							if (streamPart.type === "raw" && !options.includeRawChunks) return;
							if (streamPart.type === "response-metadata" && streamPart.timestamp && typeof streamPart.timestamp === "string") streamPart.timestamp = new Date(streamPart.timestamp);
							controller.enqueue(streamPart);
						} else controller.error(chunk.error);
					}
				})),
				request: { body: args },
				response: { headers: responseHeaders }
			};
		} catch (error) {
			throw await asGatewayError(error, await parseAuthMethod(resolvedHeaders));
		}
	}
	isFilePart(part) {
		return part && typeof part === "object" && "type" in part && part.type === "file";
	}
	/**
	* Encodes file parts in the prompt to base64. Mutates the passed options
	* instance directly to avoid copying the file data.
	* @param options - The options to encode.
	* @returns The options with the file parts encoded.
	*/
	maybeEncodeFileParts(options) {
		for (const message of options.prompt) for (const part of message.content) if (this.isFilePart(part)) {
			const filePart = part;
			if (filePart.data instanceof Uint8Array) {
				const buffer = Uint8Array.from(filePart.data);
				const base64Data = Buffer.from(buffer).toString("base64");
				filePart.data = new URL(`data:${filePart.mediaType || "application/octet-stream"};base64,${base64Data}`);
			}
		}
		return options;
	}
	getUrl() {
		return `${this.config.baseURL}/language-model`;
	}
	getModelConfigHeaders(modelId, streaming) {
		return {
			"ai-language-model-specification-version": "3",
			"ai-language-model-id": modelId,
			"ai-language-model-streaming": String(streaming)
		};
	}
};
var GatewayEmbeddingModel = class {
	constructor(modelId, config) {
		this.modelId = modelId;
		this.config = config;
		this.specificationVersion = "v3";
		this.maxEmbeddingsPerCall = 2048;
		this.supportsParallelCalls = true;
	}
	get provider() {
		return this.config.provider;
	}
	async doEmbed({ values, headers, abortSignal, providerOptions }) {
		var _a9;
		const resolvedHeaders = await resolve(this.config.headers());
		try {
			const { responseHeaders, value: responseBody, rawValue } = await postJsonToApi({
				url: this.getUrl(),
				headers: combineHeaders(resolvedHeaders, headers != null ? headers : {}, this.getModelConfigHeaders(), await resolve(this.config.o11yHeaders)),
				body: {
					values,
					...providerOptions ? { providerOptions } : {}
				},
				successfulResponseHandler: createJsonResponseHandler(gatewayEmbeddingResponseSchema),
				failedResponseHandler: createJsonErrorResponseHandler({
					errorSchema: any(),
					errorToMessage: (data) => data
				}),
				...abortSignal && { abortSignal },
				fetch: this.config.fetch
			});
			return {
				embeddings: responseBody.embeddings,
				usage: (_a9 = responseBody.usage) != null ? _a9 : void 0,
				providerMetadata: responseBody.providerMetadata,
				response: {
					headers: responseHeaders,
					body: rawValue
				},
				warnings: []
			};
		} catch (error) {
			throw await asGatewayError(error, await parseAuthMethod(resolvedHeaders));
		}
	}
	getUrl() {
		return `${this.config.baseURL}/embedding-model`;
	}
	getModelConfigHeaders() {
		return {
			"ai-embedding-model-specification-version": "3",
			"ai-model-id": this.modelId
		};
	}
};
var gatewayEmbeddingResponseSchema = lazySchema(() => zodSchema(object$1({
	embeddings: array$1(array$1(number())),
	usage: object$1({ tokens: number() }).nullish(),
	providerMetadata: record(string(), record(string(), unknown())).optional()
})));
var GatewayImageModel = class {
	constructor(modelId, config) {
		this.modelId = modelId;
		this.config = config;
		this.specificationVersion = "v3";
		this.maxImagesPerCall = Number.MAX_SAFE_INTEGER;
	}
	get provider() {
		return this.config.provider;
	}
	async doGenerate({ prompt, n, size, aspectRatio, seed, files, mask, providerOptions, headers, abortSignal }) {
		var _a9, _b9, _c, _d;
		const resolvedHeaders = await resolve(this.config.headers());
		try {
			const { responseHeaders, value: responseBody, rawValue } = await postJsonToApi({
				url: this.getUrl(),
				headers: combineHeaders(resolvedHeaders, headers != null ? headers : {}, this.getModelConfigHeaders(), await resolve(this.config.o11yHeaders)),
				body: {
					prompt,
					n,
					...size && { size },
					...aspectRatio && { aspectRatio },
					...seed && { seed },
					...providerOptions && { providerOptions },
					...files && { files: files.map((file) => maybeEncodeImageFile(file)) },
					...mask && { mask: maybeEncodeImageFile(mask) }
				},
				successfulResponseHandler: createJsonResponseHandler(gatewayImageResponseSchema),
				failedResponseHandler: createJsonErrorResponseHandler({
					errorSchema: any(),
					errorToMessage: (data) => data
				}),
				...abortSignal && { abortSignal },
				fetch: this.config.fetch
			});
			return {
				images: responseBody.images,
				warnings: (_a9 = responseBody.warnings) != null ? _a9 : [],
				providerMetadata: responseBody.providerMetadata,
				response: {
					timestamp: /* @__PURE__ */ new Date(),
					modelId: this.modelId,
					headers: responseHeaders
				},
				...responseBody.usage != null && { usage: {
					inputTokens: (_b9 = responseBody.usage.inputTokens) != null ? _b9 : void 0,
					outputTokens: (_c = responseBody.usage.outputTokens) != null ? _c : void 0,
					totalTokens: (_d = responseBody.usage.totalTokens) != null ? _d : void 0
				} }
			};
		} catch (error) {
			throw await asGatewayError(error, await parseAuthMethod(resolvedHeaders));
		}
	}
	getUrl() {
		return `${this.config.baseURL}/image-model`;
	}
	getModelConfigHeaders() {
		return {
			"ai-image-model-specification-version": "3",
			"ai-model-id": this.modelId
		};
	}
};
function maybeEncodeImageFile(file) {
	if (file.type === "file" && file.data instanceof Uint8Array) return {
		...file,
		data: convertUint8ArrayToBase64(file.data)
	};
	return file;
}
var providerMetadataEntrySchema = object$1({ images: array$1(unknown()).optional() }).catchall(unknown());
var gatewayImageWarningSchema = discriminatedUnion("type", [
	object$1({
		type: literal("unsupported"),
		feature: string(),
		details: string().optional()
	}),
	object$1({
		type: literal("compatibility"),
		feature: string(),
		details: string().optional()
	}),
	object$1({
		type: literal("other"),
		message: string()
	})
]);
var gatewayImageUsageSchema = object$1({
	inputTokens: number().nullish(),
	outputTokens: number().nullish(),
	totalTokens: number().nullish()
});
var gatewayImageResponseSchema = object$1({
	images: array$1(string()),
	warnings: array$1(gatewayImageWarningSchema).optional(),
	providerMetadata: record(string(), providerMetadataEntrySchema).optional(),
	usage: gatewayImageUsageSchema.optional()
});
var GatewayVideoModel = class {
	constructor(modelId, config) {
		this.modelId = modelId;
		this.config = config;
		this.specificationVersion = "v3";
		this.maxVideosPerCall = Number.MAX_SAFE_INTEGER;
	}
	get provider() {
		return this.config.provider;
	}
	async doGenerate({ prompt, n, aspectRatio, resolution, duration, fps, seed, image, providerOptions, headers, abortSignal }) {
		var _a9;
		const resolvedHeaders = await resolve(this.config.headers());
		try {
			const { responseHeaders, value: responseBody } = await postJsonToApi({
				url: this.getUrl(),
				headers: combineHeaders(resolvedHeaders, headers != null ? headers : {}, this.getModelConfigHeaders(), await resolve(this.config.o11yHeaders), { accept: "text/event-stream" }),
				body: {
					prompt,
					n,
					...aspectRatio && { aspectRatio },
					...resolution && { resolution },
					...duration && { duration },
					...fps && { fps },
					...seed && { seed },
					...providerOptions && { providerOptions },
					...image && { image: maybeEncodeVideoFile(image) }
				},
				successfulResponseHandler: async ({ response, url, requestBodyValues }) => {
					if (response.body == null) throw new APICallError({
						message: "SSE response body is empty",
						url,
						requestBodyValues,
						statusCode: response.status
					});
					const reader = parseJsonEventStream({
						stream: response.body,
						schema: gatewayVideoEventSchema
					}).getReader();
					const { done, value: parseResult } = await reader.read();
					reader.releaseLock();
					if (done || !parseResult) throw new APICallError({
						message: "SSE stream ended without a data event",
						url,
						requestBodyValues,
						statusCode: response.status
					});
					if (!parseResult.success) throw new APICallError({
						message: "Failed to parse video SSE event",
						cause: parseResult.error,
						url,
						requestBodyValues,
						statusCode: response.status
					});
					const event = parseResult.value;
					if (event.type === "error") throw new APICallError({
						message: event.message,
						statusCode: event.statusCode,
						url,
						requestBodyValues,
						responseHeaders: Object.fromEntries([...response.headers]),
						responseBody: JSON.stringify(event),
						data: { error: {
							message: event.message,
							type: event.errorType,
							param: event.param
						} }
					});
					return {
						value: {
							videos: event.videos,
							warnings: event.warnings,
							providerMetadata: event.providerMetadata
						},
						responseHeaders: Object.fromEntries([...response.headers])
					};
				},
				failedResponseHandler: createJsonErrorResponseHandler({
					errorSchema: any(),
					errorToMessage: (data) => data
				}),
				...abortSignal && { abortSignal },
				fetch: this.config.fetch
			});
			return {
				videos: responseBody.videos,
				warnings: (_a9 = responseBody.warnings) != null ? _a9 : [],
				providerMetadata: responseBody.providerMetadata,
				response: {
					timestamp: /* @__PURE__ */ new Date(),
					modelId: this.modelId,
					headers: responseHeaders
				}
			};
		} catch (error) {
			throw await asGatewayError(error, await parseAuthMethod(resolvedHeaders));
		}
	}
	getUrl() {
		return `${this.config.baseURL}/video-model`;
	}
	getModelConfigHeaders() {
		return {
			"ai-video-model-specification-version": "3",
			"ai-model-id": this.modelId
		};
	}
};
function maybeEncodeVideoFile(file) {
	if (file.type === "file" && file.data instanceof Uint8Array) return {
		...file,
		data: convertUint8ArrayToBase64(file.data)
	};
	return file;
}
var providerMetadataEntrySchema2 = object$1({ videos: array$1(unknown()).optional() }).catchall(unknown());
var gatewayVideoDataSchema = union([object$1({
	type: literal("url"),
	url: string(),
	mediaType: string()
}), object$1({
	type: literal("base64"),
	data: string(),
	mediaType: string()
})]);
var gatewayVideoWarningSchema = discriminatedUnion("type", [
	object$1({
		type: literal("unsupported"),
		feature: string(),
		details: string().optional()
	}),
	object$1({
		type: literal("compatibility"),
		feature: string(),
		details: string().optional()
	}),
	object$1({
		type: literal("other"),
		message: string()
	})
]);
var gatewayVideoEventSchema = discriminatedUnion("type", [object$1({
	type: literal("result"),
	videos: array$1(gatewayVideoDataSchema),
	warnings: array$1(gatewayVideoWarningSchema).optional(),
	providerMetadata: record(string(), providerMetadataEntrySchema2).optional()
}), object$1({
	type: literal("error"),
	message: string(),
	errorType: string(),
	statusCode: number(),
	param: unknown().nullable()
})]);
var GatewayRerankingModel = class {
	constructor(modelId, config) {
		this.modelId = modelId;
		this.config = config;
		this.specificationVersion = "v3";
	}
	get provider() {
		return this.config.provider;
	}
	async doRerank({ documents, query, topN, headers, abortSignal, providerOptions }) {
		const resolvedHeaders = await resolve(this.config.headers());
		try {
			const { responseHeaders, value: responseBody, rawValue } = await postJsonToApi({
				url: this.getUrl(),
				headers: combineHeaders(resolvedHeaders, headers != null ? headers : {}, this.getModelConfigHeaders(), await resolve(this.config.o11yHeaders)),
				body: {
					documents,
					query,
					...topN != null ? { topN } : {},
					...providerOptions ? { providerOptions } : {}
				},
				successfulResponseHandler: createJsonResponseHandler(gatewayRerankingResponseSchema),
				failedResponseHandler: createJsonErrorResponseHandler({
					errorSchema: any(),
					errorToMessage: (data) => data
				}),
				...abortSignal && { abortSignal },
				fetch: this.config.fetch
			});
			return {
				ranking: responseBody.ranking,
				providerMetadata: responseBody.providerMetadata,
				response: {
					headers: responseHeaders,
					body: rawValue
				},
				warnings: []
			};
		} catch (error) {
			throw await asGatewayError(error, await parseAuthMethod(resolvedHeaders));
		}
	}
	getUrl() {
		return `${this.config.baseURL}/reranking-model`;
	}
	getModelConfigHeaders() {
		return {
			"ai-reranking-model-specification-version": "3",
			"ai-model-id": this.modelId
		};
	}
};
var gatewayRerankingResponseSchema = lazySchema(() => zodSchema(object$1({
	ranking: array$1(object$1({
		index: number(),
		relevanceScore: number()
	})),
	providerMetadata: record(string(), record(string(), unknown())).optional()
})));
var parallelSearchToolFactory = createProviderToolFactoryWithOutputSchema({
	id: "gateway.parallel_search",
	inputSchema: lazySchema(() => zodSchema(object$1({
		objective: string().describe("Natural-language description of the web research goal, including source or freshness guidance and broader context from the task. Maximum 5000 characters."),
		search_queries: array$1(string()).optional().describe("Optional search queries to supplement the objective. Maximum 200 characters per query."),
		mode: _enum(["one-shot", "agentic"]).optional().describe("Mode preset: \"one-shot\" for comprehensive results with longer excerpts (default), \"agentic\" for concise, token-efficient results for multi-step workflows."),
		max_results: number().optional().describe("Maximum number of results to return (1-20). Defaults to 10 if not specified."),
		source_policy: object$1({
			include_domains: array$1(string()).optional().describe("List of domains to include in search results."),
			exclude_domains: array$1(string()).optional().describe("List of domains to exclude from search results."),
			after_date: string().optional().describe("Only include results published after this date (ISO 8601 format).")
		}).optional().describe("Source policy for controlling which domains to include/exclude and freshness."),
		excerpts: object$1({
			max_chars_per_result: number().optional().describe("Maximum characters per result."),
			max_chars_total: number().optional().describe("Maximum total characters across all results.")
		}).optional().describe("Excerpt configuration for controlling result length."),
		fetch_policy: object$1({ max_age_seconds: number().optional().describe("Maximum age in seconds for cached content. Set to 0 to always fetch fresh content.") }).optional().describe("Fetch policy for controlling content freshness.")
	}))),
	outputSchema: lazySchema(() => zodSchema(union([object$1({
		searchId: string(),
		results: array$1(object$1({
			url: string(),
			title: string(),
			excerpt: string(),
			publishDate: string().nullable().optional(),
			relevanceScore: number().optional()
		}))
	}), object$1({
		error: _enum([
			"api_error",
			"rate_limit",
			"timeout",
			"invalid_input",
			"configuration_error",
			"unknown"
		]),
		statusCode: number().optional(),
		message: string()
	})])))
});
var parallelSearch = (config = {}) => parallelSearchToolFactory(config);
var perplexitySearchToolFactory = createProviderToolFactoryWithOutputSchema({
	id: "gateway.perplexity_search",
	inputSchema: lazySchema(() => zodSchema(object$1({
		query: union([string(), array$1(string())]).describe("Search query (string) or multiple queries (array of up to 5 strings). Multi-query searches return combined results from all queries."),
		max_results: number().optional().describe("Maximum number of search results to return (1-20, default: 10)"),
		max_tokens_per_page: number().optional().describe("Maximum number of tokens to extract per search result page (256-2048, default: 2048)"),
		max_tokens: number().optional().describe("Maximum total tokens across all search results (default: 25000, max: 1000000)"),
		country: string().optional().describe("Two-letter ISO 3166-1 alpha-2 country code for regional search results (e.g., 'US', 'GB', 'FR')"),
		search_domain_filter: array$1(string()).optional().describe("List of domains to include or exclude from search results (max 20). To include: ['nature.com', 'science.org']. To exclude: ['-example.com', '-spam.net']"),
		search_language_filter: array$1(string()).optional().describe("List of ISO 639-1 language codes to filter results (max 10, lowercase). Examples: ['en', 'fr', 'de']"),
		search_after_date: string().optional().describe("Include only results published after this date. Format: 'MM/DD/YYYY' (e.g., '3/1/2025'). Cannot be used with search_recency_filter."),
		search_before_date: string().optional().describe("Include only results published before this date. Format: 'MM/DD/YYYY' (e.g., '3/15/2025'). Cannot be used with search_recency_filter."),
		last_updated_after_filter: string().optional().describe("Include only results last updated after this date. Format: 'MM/DD/YYYY' (e.g., '3/1/2025'). Cannot be used with search_recency_filter."),
		last_updated_before_filter: string().optional().describe("Include only results last updated before this date. Format: 'MM/DD/YYYY' (e.g., '3/15/2025'). Cannot be used with search_recency_filter."),
		search_recency_filter: _enum([
			"day",
			"week",
			"month",
			"year"
		]).optional().describe("Filter results by relative time period. Cannot be used with search_after_date or search_before_date.")
	}))),
	outputSchema: lazySchema(() => zodSchema(union([object$1({
		results: array$1(object$1({
			title: string(),
			url: string(),
			snippet: string(),
			date: string().optional(),
			lastUpdated: string().optional()
		})),
		id: string()
	}), object$1({
		error: _enum([
			"api_error",
			"rate_limit",
			"timeout",
			"invalid_input",
			"unknown"
		]),
		statusCode: number().optional(),
		message: string()
	})])))
});
var perplexitySearch = (config = {}) => perplexitySearchToolFactory(config);
var gatewayTools = {
	parallelSearch,
	perplexitySearch
};
async function getVercelRequestId() {
	var _a9;
	return (_a9 = (0, import_index_browser.getContext)().headers) == null ? void 0 : _a9["x-vercel-id"];
}
var VERSION$2 = "3.0.98";
var AI_GATEWAY_PROTOCOL_VERSION = "0.0.1";
function createGatewayProvider(options = {}) {
	var _a9, _b9;
	let pendingMetadata = null;
	let metadataCache = null;
	const cacheRefreshMillis = (_a9 = options.metadataCacheRefreshMillis) != null ? _a9 : 1e3 * 60 * 5;
	let lastFetchTime = 0;
	const baseURL = (_b9 = withoutTrailingSlash(options.baseURL)) != null ? _b9 : "https://ai-gateway.vercel.sh/v3/ai";
	const getHeaders = async () => {
		try {
			const auth = await getGatewayAuthToken(options);
			return withUserAgentSuffix({
				Authorization: `Bearer ${auth.token}`,
				"ai-gateway-protocol-version": AI_GATEWAY_PROTOCOL_VERSION,
				[GATEWAY_AUTH_METHOD_HEADER]: auth.authMethod,
				...options.headers
			}, `ai-sdk/gateway/${VERSION$2}`);
		} catch (error) {
			throw GatewayAuthenticationError.createContextualError({
				apiKeyProvided: false,
				oidcTokenProvided: false,
				statusCode: 401,
				cause: error
			});
		}
	};
	const createO11yHeaders = () => {
		const deploymentId = loadOptionalSetting({
			settingValue: void 0,
			environmentVariableName: "VERCEL_DEPLOYMENT_ID"
		});
		const environment = loadOptionalSetting({
			settingValue: void 0,
			environmentVariableName: "VERCEL_ENV"
		});
		const region = loadOptionalSetting({
			settingValue: void 0,
			environmentVariableName: "VERCEL_REGION"
		});
		const projectId = loadOptionalSetting({
			settingValue: void 0,
			environmentVariableName: "VERCEL_PROJECT_ID"
		});
		return async () => {
			const requestId = await getVercelRequestId();
			return {
				...deploymentId && { "ai-o11y-deployment-id": deploymentId },
				...environment && { "ai-o11y-environment": environment },
				...region && { "ai-o11y-region": region },
				...requestId && { "ai-o11y-request-id": requestId },
				...projectId && { "ai-o11y-project-id": projectId }
			};
		};
	};
	const createLanguageModel = (modelId) => {
		return new GatewayLanguageModel(modelId, {
			provider: "gateway",
			baseURL,
			headers: getHeaders,
			fetch: options.fetch,
			o11yHeaders: createO11yHeaders()
		});
	};
	const getAvailableModels = async () => {
		var _a10, _b10, _c;
		const now = (_c = (_b10 = (_a10 = options._internal) == null ? void 0 : _a10.currentDate) == null ? void 0 : _b10.call(_a10).getTime()) != null ? _c : Date.now();
		if (!pendingMetadata || now - lastFetchTime > cacheRefreshMillis) {
			lastFetchTime = now;
			pendingMetadata = new GatewayFetchMetadata({
				baseURL,
				headers: getHeaders,
				fetch: options.fetch
			}).getAvailableModels().then((metadata) => {
				metadataCache = metadata;
				return metadata;
			}).catch(async (error) => {
				throw await asGatewayError(error, await parseAuthMethod(await getHeaders()));
			});
		}
		return metadataCache ? Promise.resolve(metadataCache) : pendingMetadata;
	};
	const getCredits = async () => {
		return new GatewayFetchMetadata({
			baseURL,
			headers: getHeaders,
			fetch: options.fetch
		}).getCredits().catch(async (error) => {
			throw await asGatewayError(error, await parseAuthMethod(await getHeaders()));
		});
	};
	const getSpendReport = async (params) => {
		return new GatewaySpendReport({
			baseURL,
			headers: getHeaders,
			fetch: options.fetch
		}).getSpendReport(params).catch(async (error) => {
			throw await asGatewayError(error, await parseAuthMethod(await getHeaders()));
		});
	};
	const getGenerationInfo = async (params) => {
		return new GatewayGenerationInfoFetcher({
			baseURL,
			headers: getHeaders,
			fetch: options.fetch
		}).getGenerationInfo(params).catch(async (error) => {
			throw await asGatewayError(error, await parseAuthMethod(await getHeaders()));
		});
	};
	const provider = function(modelId) {
		if (new.target) throw new Error("The Gateway Provider model function cannot be called with the new keyword.");
		return createLanguageModel(modelId);
	};
	provider.specificationVersion = "v3";
	provider.getAvailableModels = getAvailableModels;
	provider.getCredits = getCredits;
	provider.getSpendReport = getSpendReport;
	provider.getGenerationInfo = getGenerationInfo;
	provider.imageModel = (modelId) => {
		return new GatewayImageModel(modelId, {
			provider: "gateway",
			baseURL,
			headers: getHeaders,
			fetch: options.fetch,
			o11yHeaders: createO11yHeaders()
		});
	};
	provider.languageModel = createLanguageModel;
	const createEmbeddingModel = (modelId) => {
		return new GatewayEmbeddingModel(modelId, {
			provider: "gateway",
			baseURL,
			headers: getHeaders,
			fetch: options.fetch,
			o11yHeaders: createO11yHeaders()
		});
	};
	provider.embeddingModel = createEmbeddingModel;
	provider.textEmbeddingModel = createEmbeddingModel;
	provider.videoModel = (modelId) => {
		return new GatewayVideoModel(modelId, {
			provider: "gateway",
			baseURL,
			headers: getHeaders,
			fetch: options.fetch,
			o11yHeaders: createO11yHeaders()
		});
	};
	const createRerankingModel = (modelId) => {
		return new GatewayRerankingModel(modelId, {
			provider: "gateway",
			baseURL,
			headers: getHeaders,
			fetch: options.fetch,
			o11yHeaders: createO11yHeaders()
		});
	};
	provider.rerankingModel = createRerankingModel;
	provider.reranking = createRerankingModel;
	provider.chat = provider.languageModel;
	provider.embedding = provider.embeddingModel;
	provider.image = provider.imageModel;
	provider.video = provider.videoModel;
	provider.tools = gatewayTools;
	return provider;
}
var gateway = createGatewayProvider();
async function getGatewayAuthToken(options) {
	const apiKey = loadOptionalSetting({
		settingValue: options.apiKey,
		environmentVariableName: "AI_GATEWAY_API_KEY"
	});
	if (apiKey) return {
		token: apiKey,
		authMethod: "api-key"
	};
	return {
		token: await (0, import_index_browser.getVercelOidcToken)(),
		authMethod: "oidc"
	};
}
//#endregion
//#region node_modules/@opentelemetry/api/build/esm/platform/node/globalThis.js
/** only globals that common to node and browsers are allowed */
var _globalThis = typeof globalThis === "object" ? globalThis : global;
//#endregion
//#region node_modules/@opentelemetry/api/build/esm/version.js
var VERSION$1 = "1.9.0";
//#endregion
//#region node_modules/@opentelemetry/api/build/esm/internal/semver.js
var re = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
/**
* Create a function to test an API version to see if it is compatible with the provided ownVersion.
*
* The returned function has the following semantics:
* - Exact match is always compatible
* - Major versions must match exactly
*    - 1.x package cannot use global 2.x package
*    - 2.x package cannot use global 1.x package
* - The minor version of the API module requesting access to the global API must be less than or equal to the minor version of this API
*    - 1.3 package may use 1.4 global because the later global contains all functions 1.3 expects
*    - 1.4 package may NOT use 1.3 global because it may try to call functions which don't exist on 1.3
* - If the major version is 0, the minor version is treated as the major and the patch is treated as the minor
* - Patch and build tag differences are not considered at this time
*
* @param ownVersion version which should be checked against
*/
function _makeCompatibilityCheck(ownVersion) {
	var acceptedVersions = new Set([ownVersion]);
	var rejectedVersions = /* @__PURE__ */ new Set();
	var myVersionMatch = ownVersion.match(re);
	if (!myVersionMatch) return function() {
		return false;
	};
	var ownVersionParsed = {
		major: +myVersionMatch[1],
		minor: +myVersionMatch[2],
		patch: +myVersionMatch[3],
		prerelease: myVersionMatch[4]
	};
	if (ownVersionParsed.prerelease != null) return function isExactmatch(globalVersion) {
		return globalVersion === ownVersion;
	};
	function _reject(v) {
		rejectedVersions.add(v);
		return false;
	}
	function _accept(v) {
		acceptedVersions.add(v);
		return true;
	}
	return function isCompatible(globalVersion) {
		if (acceptedVersions.has(globalVersion)) return true;
		if (rejectedVersions.has(globalVersion)) return false;
		var globalVersionMatch = globalVersion.match(re);
		if (!globalVersionMatch) return _reject(globalVersion);
		var globalVersionParsed = {
			major: +globalVersionMatch[1],
			minor: +globalVersionMatch[2],
			patch: +globalVersionMatch[3],
			prerelease: globalVersionMatch[4]
		};
		if (globalVersionParsed.prerelease != null) return _reject(globalVersion);
		if (ownVersionParsed.major !== globalVersionParsed.major) return _reject(globalVersion);
		if (ownVersionParsed.major === 0) {
			if (ownVersionParsed.minor === globalVersionParsed.minor && ownVersionParsed.patch <= globalVersionParsed.patch) return _accept(globalVersion);
			return _reject(globalVersion);
		}
		if (ownVersionParsed.minor <= globalVersionParsed.minor) return _accept(globalVersion);
		return _reject(globalVersion);
	};
}
/**
* Test an API version to see if it is compatible with this API.
*
* - Exact match is always compatible
* - Major versions must match exactly
*    - 1.x package cannot use global 2.x package
*    - 2.x package cannot use global 1.x package
* - The minor version of the API module requesting access to the global API must be less than or equal to the minor version of this API
*    - 1.3 package may use 1.4 global because the later global contains all functions 1.3 expects
*    - 1.4 package may NOT use 1.3 global because it may try to call functions which don't exist on 1.3
* - If the major version is 0, the minor version is treated as the major and the patch is treated as the minor
* - Patch and build tag differences are not considered at this time
*
* @param version version of the API requesting an instance of the global API
*/
var isCompatible = _makeCompatibilityCheck(VERSION$1);
//#endregion
//#region node_modules/@opentelemetry/api/build/esm/internal/global-utils.js
var major = VERSION$1.split(".")[0];
var GLOBAL_OPENTELEMETRY_API_KEY = Symbol.for("opentelemetry.js.api." + major);
var _global = _globalThis;
function registerGlobal(type, instance, diag, allowOverride) {
	var _a;
	if (allowOverride === void 0) allowOverride = false;
	var api = _global[GLOBAL_OPENTELEMETRY_API_KEY] = (_a = _global[GLOBAL_OPENTELEMETRY_API_KEY]) !== null && _a !== void 0 ? _a : { version: VERSION$1 };
	if (!allowOverride && api[type]) {
		var err = /* @__PURE__ */ new Error("@opentelemetry/api: Attempted duplicate registration of API: " + type);
		diag.error(err.stack || err.message);
		return false;
	}
	if (api.version !== "1.9.0") {
		var err = /* @__PURE__ */ new Error("@opentelemetry/api: Registration of version v" + api.version + " for " + type + " does not match previously registered API v" + VERSION$1);
		diag.error(err.stack || err.message);
		return false;
	}
	api[type] = instance;
	diag.debug("@opentelemetry/api: Registered a global for " + type + " v" + VERSION$1 + ".");
	return true;
}
function getGlobal(type) {
	var _a, _b;
	var globalVersion = (_a = _global[GLOBAL_OPENTELEMETRY_API_KEY]) === null || _a === void 0 ? void 0 : _a.version;
	if (!globalVersion || !isCompatible(globalVersion)) return;
	return (_b = _global[GLOBAL_OPENTELEMETRY_API_KEY]) === null || _b === void 0 ? void 0 : _b[type];
}
function unregisterGlobal(type, diag) {
	diag.debug("@opentelemetry/api: Unregistering a global for " + type + " v" + VERSION$1 + ".");
	var api = _global[GLOBAL_OPENTELEMETRY_API_KEY];
	if (api) delete api[type];
}
//#endregion
//#region node_modules/@opentelemetry/api/build/esm/diag/ComponentLogger.js
var __read$3 = function(o, n) {
	var m = typeof Symbol === "function" && o[Symbol.iterator];
	if (!m) return o;
	var i = m.call(o), r, ar = [], e;
	try {
		while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
	} catch (error) {
		e = { error };
	} finally {
		try {
			if (r && !r.done && (m = i["return"])) m.call(i);
		} finally {
			if (e) throw e.error;
		}
	}
	return ar;
};
var __spreadArray$3 = function(to, from, pack) {
	if (pack || arguments.length === 2) {
		for (var i = 0, l = from.length, ar; i < l; i++) if (ar || !(i in from)) {
			if (!ar) ar = Array.prototype.slice.call(from, 0, i);
			ar[i] = from[i];
		}
	}
	return to.concat(ar || Array.prototype.slice.call(from));
};
/**
* Component Logger which is meant to be used as part of any component which
* will add automatically additional namespace in front of the log message.
* It will then forward all message to global diag logger
* @example
* const cLogger = diag.createComponentLogger({ namespace: '@opentelemetry/instrumentation-http' });
* cLogger.debug('test');
* // @opentelemetry/instrumentation-http test
*/
var DiagComponentLogger = function() {
	function DiagComponentLogger(props) {
		this._namespace = props.namespace || "DiagComponentLogger";
	}
	DiagComponentLogger.prototype.debug = function() {
		var args = [];
		for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
		return logProxy("debug", this._namespace, args);
	};
	DiagComponentLogger.prototype.error = function() {
		var args = [];
		for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
		return logProxy("error", this._namespace, args);
	};
	DiagComponentLogger.prototype.info = function() {
		var args = [];
		for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
		return logProxy("info", this._namespace, args);
	};
	DiagComponentLogger.prototype.warn = function() {
		var args = [];
		for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
		return logProxy("warn", this._namespace, args);
	};
	DiagComponentLogger.prototype.verbose = function() {
		var args = [];
		for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
		return logProxy("verbose", this._namespace, args);
	};
	return DiagComponentLogger;
}();
function logProxy(funcName, namespace, args) {
	var logger = getGlobal("diag");
	if (!logger) return;
	args.unshift(namespace);
	return logger[funcName].apply(logger, __spreadArray$3([], __read$3(args), false));
}
//#endregion
//#region node_modules/@opentelemetry/api/build/esm/diag/types.js
/**
* Defines the available internal logging levels for the diagnostic logger, the numeric values
* of the levels are defined to match the original values from the initial LogLevel to avoid
* compatibility/migration issues for any implementation that assume the numeric ordering.
*/
var DiagLogLevel;
(function(DiagLogLevel) {
	/** Diagnostic Logging level setting to disable all logging (except and forced logs) */
	DiagLogLevel[DiagLogLevel["NONE"] = 0] = "NONE";
	/** Identifies an error scenario */
	DiagLogLevel[DiagLogLevel["ERROR"] = 30] = "ERROR";
	/** Identifies a warning scenario */
	DiagLogLevel[DiagLogLevel["WARN"] = 50] = "WARN";
	/** General informational log message */
	DiagLogLevel[DiagLogLevel["INFO"] = 60] = "INFO";
	/** General debug log message */
	DiagLogLevel[DiagLogLevel["DEBUG"] = 70] = "DEBUG";
	/**
	* Detailed trace level logging should only be used for development, should only be set
	* in a development environment.
	*/
	DiagLogLevel[DiagLogLevel["VERBOSE"] = 80] = "VERBOSE";
	/** Used to set the logging level to include all logging */
	DiagLogLevel[DiagLogLevel["ALL"] = 9999] = "ALL";
})(DiagLogLevel || (DiagLogLevel = {}));
//#endregion
//#region node_modules/@opentelemetry/api/build/esm/diag/internal/logLevelLogger.js
function createLogLevelDiagLogger(maxLevel, logger) {
	if (maxLevel < DiagLogLevel.NONE) maxLevel = DiagLogLevel.NONE;
	else if (maxLevel > DiagLogLevel.ALL) maxLevel = DiagLogLevel.ALL;
	logger = logger || {};
	function _filterFunc(funcName, theLevel) {
		var theFunc = logger[funcName];
		if (typeof theFunc === "function" && maxLevel >= theLevel) return theFunc.bind(logger);
		return function() {};
	}
	return {
		error: _filterFunc("error", DiagLogLevel.ERROR),
		warn: _filterFunc("warn", DiagLogLevel.WARN),
		info: _filterFunc("info", DiagLogLevel.INFO),
		debug: _filterFunc("debug", DiagLogLevel.DEBUG),
		verbose: _filterFunc("verbose", DiagLogLevel.VERBOSE)
	};
}
//#endregion
//#region node_modules/@opentelemetry/api/build/esm/api/diag.js
var __read$2 = function(o, n) {
	var m = typeof Symbol === "function" && o[Symbol.iterator];
	if (!m) return o;
	var i = m.call(o), r, ar = [], e;
	try {
		while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
	} catch (error) {
		e = { error };
	} finally {
		try {
			if (r && !r.done && (m = i["return"])) m.call(i);
		} finally {
			if (e) throw e.error;
		}
	}
	return ar;
};
var __spreadArray$2 = function(to, from, pack) {
	if (pack || arguments.length === 2) {
		for (var i = 0, l = from.length, ar; i < l; i++) if (ar || !(i in from)) {
			if (!ar) ar = Array.prototype.slice.call(from, 0, i);
			ar[i] = from[i];
		}
	}
	return to.concat(ar || Array.prototype.slice.call(from));
};
var API_NAME$2 = "diag";
/**
* Singleton object which represents the entry point to the OpenTelemetry internal
* diagnostic API
*/
var DiagAPI = function() {
	/**
	* Private internal constructor
	* @private
	*/
	function DiagAPI() {
		function _logProxy(funcName) {
			return function() {
				var args = [];
				for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
				var logger = getGlobal("diag");
				if (!logger) return;
				return logger[funcName].apply(logger, __spreadArray$2([], __read$2(args), false));
			};
		}
		var self = this;
		var setLogger = function(logger, optionsOrLogLevel) {
			var _a, _b, _c;
			if (optionsOrLogLevel === void 0) optionsOrLogLevel = { logLevel: DiagLogLevel.INFO };
			if (logger === self) {
				var err = /* @__PURE__ */ new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
				self.error((_a = err.stack) !== null && _a !== void 0 ? _a : err.message);
				return false;
			}
			if (typeof optionsOrLogLevel === "number") optionsOrLogLevel = { logLevel: optionsOrLogLevel };
			var oldLogger = getGlobal("diag");
			var newLogger = createLogLevelDiagLogger((_b = optionsOrLogLevel.logLevel) !== null && _b !== void 0 ? _b : DiagLogLevel.INFO, logger);
			if (oldLogger && !optionsOrLogLevel.suppressOverrideMessage) {
				var stack = (_c = (/* @__PURE__ */ new Error()).stack) !== null && _c !== void 0 ? _c : "<failed to generate stacktrace>";
				oldLogger.warn("Current logger will be overwritten from " + stack);
				newLogger.warn("Current logger will overwrite one already registered from " + stack);
			}
			return registerGlobal("diag", newLogger, self, true);
		};
		self.setLogger = setLogger;
		self.disable = function() {
			unregisterGlobal(API_NAME$2, self);
		};
		self.createComponentLogger = function(options) {
			return new DiagComponentLogger(options);
		};
		self.verbose = _logProxy("verbose");
		self.debug = _logProxy("debug");
		self.info = _logProxy("info");
		self.warn = _logProxy("warn");
		self.error = _logProxy("error");
	}
	/** Get the singleton instance of the DiagAPI API */
	DiagAPI.instance = function() {
		if (!this._instance) this._instance = new DiagAPI();
		return this._instance;
	};
	return DiagAPI;
}();
//#endregion
//#region node_modules/@opentelemetry/api/build/esm/context/context.js
/** Get a key to uniquely identify a context value */
function createContextKey(description) {
	return Symbol.for(description);
}
/** The root context is used as the default parent context when there is no active context */
var ROOT_CONTEXT = new (function() {
	/**
	* Construct a new context which inherits values from an optional parent context.
	*
	* @param parentContext a context from which to inherit values
	*/
	function BaseContext(parentContext) {
		var self = this;
		self._currentContext = parentContext ? new Map(parentContext) : /* @__PURE__ */ new Map();
		self.getValue = function(key) {
			return self._currentContext.get(key);
		};
		self.setValue = function(key, value) {
			var context = new BaseContext(self._currentContext);
			context._currentContext.set(key, value);
			return context;
		};
		self.deleteValue = function(key) {
			var context = new BaseContext(self._currentContext);
			context._currentContext.delete(key);
			return context;
		};
	}
	return BaseContext;
}())();
//#endregion
//#region node_modules/@opentelemetry/api/build/esm/context/NoopContextManager.js
var __read$1 = function(o, n) {
	var m = typeof Symbol === "function" && o[Symbol.iterator];
	if (!m) return o;
	var i = m.call(o), r, ar = [], e;
	try {
		while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
	} catch (error) {
		e = { error };
	} finally {
		try {
			if (r && !r.done && (m = i["return"])) m.call(i);
		} finally {
			if (e) throw e.error;
		}
	}
	return ar;
};
var __spreadArray$1 = function(to, from, pack) {
	if (pack || arguments.length === 2) {
		for (var i = 0, l = from.length, ar; i < l; i++) if (ar || !(i in from)) {
			if (!ar) ar = Array.prototype.slice.call(from, 0, i);
			ar[i] = from[i];
		}
	}
	return to.concat(ar || Array.prototype.slice.call(from));
};
var NoopContextManager = function() {
	function NoopContextManager() {}
	NoopContextManager.prototype.active = function() {
		return ROOT_CONTEXT;
	};
	NoopContextManager.prototype.with = function(_context, fn, thisArg) {
		var args = [];
		for (var _i = 3; _i < arguments.length; _i++) args[_i - 3] = arguments[_i];
		return fn.call.apply(fn, __spreadArray$1([thisArg], __read$1(args), false));
	};
	NoopContextManager.prototype.bind = function(_context, target) {
		return target;
	};
	NoopContextManager.prototype.enable = function() {
		return this;
	};
	NoopContextManager.prototype.disable = function() {
		return this;
	};
	return NoopContextManager;
}();
//#endregion
//#region node_modules/@opentelemetry/api/build/esm/api/context.js
var __read = function(o, n) {
	var m = typeof Symbol === "function" && o[Symbol.iterator];
	if (!m) return o;
	var i = m.call(o), r, ar = [], e;
	try {
		while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
	} catch (error) {
		e = { error };
	} finally {
		try {
			if (r && !r.done && (m = i["return"])) m.call(i);
		} finally {
			if (e) throw e.error;
		}
	}
	return ar;
};
var __spreadArray = function(to, from, pack) {
	if (pack || arguments.length === 2) {
		for (var i = 0, l = from.length, ar; i < l; i++) if (ar || !(i in from)) {
			if (!ar) ar = Array.prototype.slice.call(from, 0, i);
			ar[i] = from[i];
		}
	}
	return to.concat(ar || Array.prototype.slice.call(from));
};
var API_NAME$1 = "context";
var NOOP_CONTEXT_MANAGER = new NoopContextManager();
/**
* Singleton object which represents the entry point to the OpenTelemetry Context API
*/
var ContextAPI = function() {
	/** Empty private constructor prevents end users from constructing a new instance of the API */
	function ContextAPI() {}
	/** Get the singleton instance of the Context API */
	ContextAPI.getInstance = function() {
		if (!this._instance) this._instance = new ContextAPI();
		return this._instance;
	};
	/**
	* Set the current context manager.
	*
	* @returns true if the context manager was successfully registered, else false
	*/
	ContextAPI.prototype.setGlobalContextManager = function(contextManager) {
		return registerGlobal(API_NAME$1, contextManager, DiagAPI.instance());
	};
	/**
	* Get the currently active context
	*/
	ContextAPI.prototype.active = function() {
		return this._getContextManager().active();
	};
	/**
	* Execute a function with an active context
	*
	* @param context context to be active during function execution
	* @param fn function to execute in a context
	* @param thisArg optional receiver to be used for calling fn
	* @param args optional arguments forwarded to fn
	*/
	ContextAPI.prototype.with = function(context, fn, thisArg) {
		var _a;
		var args = [];
		for (var _i = 3; _i < arguments.length; _i++) args[_i - 3] = arguments[_i];
		return (_a = this._getContextManager()).with.apply(_a, __spreadArray([
			context,
			fn,
			thisArg
		], __read(args), false));
	};
	/**
	* Bind a context to a target function or event emitter
	*
	* @param context context to bind to the event emitter or function. Defaults to the currently active context
	* @param target function or event emitter to bind
	*/
	ContextAPI.prototype.bind = function(context, target) {
		return this._getContextManager().bind(context, target);
	};
	ContextAPI.prototype._getContextManager = function() {
		return getGlobal(API_NAME$1) || NOOP_CONTEXT_MANAGER;
	};
	/** Disable and remove the global context manager */
	ContextAPI.prototype.disable = function() {
		this._getContextManager().disable();
		unregisterGlobal(API_NAME$1, DiagAPI.instance());
	};
	return ContextAPI;
}();
//#endregion
//#region node_modules/@opentelemetry/api/build/esm/trace/trace_flags.js
var TraceFlags;
(function(TraceFlags) {
	/** Represents no flag set. */
	TraceFlags[TraceFlags["NONE"] = 0] = "NONE";
	/** Bit to represent whether trace is sampled in trace flags. */
	TraceFlags[TraceFlags["SAMPLED"] = 1] = "SAMPLED";
})(TraceFlags || (TraceFlags = {}));
var INVALID_SPAN_CONTEXT = {
	traceId: "00000000000000000000000000000000",
	spanId: "0000000000000000",
	traceFlags: TraceFlags.NONE
};
//#endregion
//#region node_modules/@opentelemetry/api/build/esm/trace/NonRecordingSpan.js
/**
* The NonRecordingSpan is the default {@link Span} that is used when no Span
* implementation is available. All operations are no-op including context
* propagation.
*/
var NonRecordingSpan = function() {
	function NonRecordingSpan(_spanContext) {
		if (_spanContext === void 0) _spanContext = INVALID_SPAN_CONTEXT;
		this._spanContext = _spanContext;
	}
	NonRecordingSpan.prototype.spanContext = function() {
		return this._spanContext;
	};
	NonRecordingSpan.prototype.setAttribute = function(_key, _value) {
		return this;
	};
	NonRecordingSpan.prototype.setAttributes = function(_attributes) {
		return this;
	};
	NonRecordingSpan.prototype.addEvent = function(_name, _attributes) {
		return this;
	};
	NonRecordingSpan.prototype.addLink = function(_link) {
		return this;
	};
	NonRecordingSpan.prototype.addLinks = function(_links) {
		return this;
	};
	NonRecordingSpan.prototype.setStatus = function(_status) {
		return this;
	};
	NonRecordingSpan.prototype.updateName = function(_name) {
		return this;
	};
	NonRecordingSpan.prototype.end = function(_endTime) {};
	NonRecordingSpan.prototype.isRecording = function() {
		return false;
	};
	NonRecordingSpan.prototype.recordException = function(_exception, _time) {};
	return NonRecordingSpan;
}();
//#endregion
//#region node_modules/@opentelemetry/api/build/esm/trace/context-utils.js
/**
* span key
*/
var SPAN_KEY = createContextKey("OpenTelemetry Context Key SPAN");
/**
* Return the span if one exists
*
* @param context context to get span from
*/
function getSpan(context) {
	return context.getValue(SPAN_KEY) || void 0;
}
/**
* Gets the span from the current context, if one exists.
*/
function getActiveSpan() {
	return getSpan(ContextAPI.getInstance().active());
}
/**
* Set the span on a context
*
* @param context context to use as parent
* @param span span to set active
*/
function setSpan(context, span) {
	return context.setValue(SPAN_KEY, span);
}
/**
* Remove current span stored in the context
*
* @param context context to delete span from
*/
function deleteSpan(context) {
	return context.deleteValue(SPAN_KEY);
}
/**
* Wrap span context in a NoopSpan and set as span in a new
* context
*
* @param context context to set active span on
* @param spanContext span context to be wrapped
*/
function setSpanContext(context, spanContext) {
	return setSpan(context, new NonRecordingSpan(spanContext));
}
/**
* Get the span context of the span if it exists.
*
* @param context context to get values from
*/
function getSpanContext(context) {
	var _a;
	return (_a = getSpan(context)) === null || _a === void 0 ? void 0 : _a.spanContext();
}
//#endregion
//#region node_modules/@opentelemetry/api/build/esm/trace/spancontext-utils.js
var VALID_TRACEID_REGEX = /^([0-9a-f]{32})$/i;
var VALID_SPANID_REGEX = /^[0-9a-f]{16}$/i;
function isValidTraceId(traceId) {
	return VALID_TRACEID_REGEX.test(traceId) && traceId !== "00000000000000000000000000000000";
}
function isValidSpanId(spanId) {
	return VALID_SPANID_REGEX.test(spanId) && spanId !== "0000000000000000";
}
/**
* Returns true if this {@link SpanContext} is valid.
* @return true if this {@link SpanContext} is valid.
*/
function isSpanContextValid(spanContext) {
	return isValidTraceId(spanContext.traceId) && isValidSpanId(spanContext.spanId);
}
/**
* Wrap the given {@link SpanContext} in a new non-recording {@link Span}
*
* @param spanContext span context to be wrapped
* @returns a new non-recording {@link Span} with the provided context
*/
function wrapSpanContext(spanContext) {
	return new NonRecordingSpan(spanContext);
}
//#endregion
//#region node_modules/@opentelemetry/api/build/esm/trace/NoopTracer.js
var contextApi = ContextAPI.getInstance();
/**
* No-op implementations of {@link Tracer}.
*/
var NoopTracer = function() {
	function NoopTracer() {}
	NoopTracer.prototype.startSpan = function(name, options, context) {
		if (context === void 0) context = contextApi.active();
		if (Boolean(options === null || options === void 0 ? void 0 : options.root)) return new NonRecordingSpan();
		var parentFromContext = context && getSpanContext(context);
		if (isSpanContext(parentFromContext) && isSpanContextValid(parentFromContext)) return new NonRecordingSpan(parentFromContext);
		else return new NonRecordingSpan();
	};
	NoopTracer.prototype.startActiveSpan = function(name, arg2, arg3, arg4) {
		var opts;
		var ctx;
		var fn;
		if (arguments.length < 2) return;
		else if (arguments.length === 2) fn = arg2;
		else if (arguments.length === 3) {
			opts = arg2;
			fn = arg3;
		} else {
			opts = arg2;
			ctx = arg3;
			fn = arg4;
		}
		var parentContext = ctx !== null && ctx !== void 0 ? ctx : contextApi.active();
		var span = this.startSpan(name, opts, parentContext);
		var contextWithSpanSet = setSpan(parentContext, span);
		return contextApi.with(contextWithSpanSet, fn, void 0, span);
	};
	return NoopTracer;
}();
function isSpanContext(spanContext) {
	return typeof spanContext === "object" && typeof spanContext["spanId"] === "string" && typeof spanContext["traceId"] === "string" && typeof spanContext["traceFlags"] === "number";
}
//#endregion
//#region node_modules/@opentelemetry/api/build/esm/trace/ProxyTracer.js
var NOOP_TRACER = new NoopTracer();
/**
* Proxy tracer provided by the proxy tracer provider
*/
var ProxyTracer = function() {
	function ProxyTracer(_provider, name, version, options) {
		this._provider = _provider;
		this.name = name;
		this.version = version;
		this.options = options;
	}
	ProxyTracer.prototype.startSpan = function(name, options, context) {
		return this._getTracer().startSpan(name, options, context);
	};
	ProxyTracer.prototype.startActiveSpan = function(_name, _options, _context, _fn) {
		var tracer = this._getTracer();
		return Reflect.apply(tracer.startActiveSpan, tracer, arguments);
	};
	/**
	* Try to get a tracer from the proxy tracer provider.
	* If the proxy tracer provider has no delegate, return a noop tracer.
	*/
	ProxyTracer.prototype._getTracer = function() {
		if (this._delegate) return this._delegate;
		var tracer = this._provider.getDelegateTracer(this.name, this.version, this.options);
		if (!tracer) return NOOP_TRACER;
		this._delegate = tracer;
		return this._delegate;
	};
	return ProxyTracer;
}();
//#endregion
//#region node_modules/@opentelemetry/api/build/esm/trace/ProxyTracerProvider.js
var NOOP_TRACER_PROVIDER = new (function() {
	function NoopTracerProvider() {}
	NoopTracerProvider.prototype.getTracer = function(_name, _version, _options) {
		return new NoopTracer();
	};
	return NoopTracerProvider;
}())();
/**
* Tracer provider which provides {@link ProxyTracer}s.
*
* Before a delegate is set, tracers provided are NoOp.
*   When a delegate is set, traces are provided from the delegate.
*   When a delegate is set after tracers have already been provided,
*   all tracers already provided will use the provided delegate implementation.
*/
var ProxyTracerProvider = function() {
	function ProxyTracerProvider() {}
	/**
	* Get a {@link ProxyTracer}
	*/
	ProxyTracerProvider.prototype.getTracer = function(name, version, options) {
		var _a;
		return (_a = this.getDelegateTracer(name, version, options)) !== null && _a !== void 0 ? _a : new ProxyTracer(this, name, version, options);
	};
	ProxyTracerProvider.prototype.getDelegate = function() {
		var _a;
		return (_a = this._delegate) !== null && _a !== void 0 ? _a : NOOP_TRACER_PROVIDER;
	};
	/**
	* Set the delegate tracer provider
	*/
	ProxyTracerProvider.prototype.setDelegate = function(delegate) {
		this._delegate = delegate;
	};
	ProxyTracerProvider.prototype.getDelegateTracer = function(name, version, options) {
		var _a;
		return (_a = this._delegate) === null || _a === void 0 ? void 0 : _a.getTracer(name, version, options);
	};
	return ProxyTracerProvider;
}();
//#endregion
//#region node_modules/@opentelemetry/api/build/esm/trace/status.js
/**
* An enumeration of status codes.
*/
var SpanStatusCode;
(function(SpanStatusCode) {
	/**
	* The default status.
	*/
	SpanStatusCode[SpanStatusCode["UNSET"] = 0] = "UNSET";
	/**
	* The operation has been validated by an Application developer or
	* Operator to have completed successfully.
	*/
	SpanStatusCode[SpanStatusCode["OK"] = 1] = "OK";
	/**
	* The operation contains an error.
	*/
	SpanStatusCode[SpanStatusCode["ERROR"] = 2] = "ERROR";
})(SpanStatusCode || (SpanStatusCode = {}));
//#endregion
//#region node_modules/@opentelemetry/api/build/esm/context-api.js
/** Entrypoint for context API */
var context = ContextAPI.getInstance();
//#endregion
//#region node_modules/@opentelemetry/api/build/esm/api/trace.js
var API_NAME = "trace";
//#endregion
//#region node_modules/@opentelemetry/api/build/esm/trace-api.js
/** Entrypoint for trace API */
var trace = function() {
	/** Empty private constructor prevents end users from constructing a new instance of the API */
	function TraceAPI() {
		this._proxyTracerProvider = new ProxyTracerProvider();
		this.wrapSpanContext = wrapSpanContext;
		this.isSpanContextValid = isSpanContextValid;
		this.deleteSpan = deleteSpan;
		this.getSpan = getSpan;
		this.getActiveSpan = getActiveSpan;
		this.getSpanContext = getSpanContext;
		this.setSpan = setSpan;
		this.setSpanContext = setSpanContext;
	}
	/** Get the singleton instance of the Trace API */
	TraceAPI.getInstance = function() {
		if (!this._instance) this._instance = new TraceAPI();
		return this._instance;
	};
	/**
	* Set the current global tracer.
	*
	* @returns true if the tracer provider was successfully registered, else false
	*/
	TraceAPI.prototype.setGlobalTracerProvider = function(provider) {
		var success = registerGlobal(API_NAME, this._proxyTracerProvider, DiagAPI.instance());
		if (success) this._proxyTracerProvider.setDelegate(provider);
		return success;
	};
	/**
	* Returns the global tracer provider.
	*/
	TraceAPI.prototype.getTracerProvider = function() {
		return getGlobal(API_NAME) || this._proxyTracerProvider;
	};
	/**
	* Returns a tracer from the global tracer provider.
	*/
	TraceAPI.prototype.getTracer = function(name, version) {
		return this.getTracerProvider().getTracer(name, version);
	};
	/** Remove the global tracer provider */
	TraceAPI.prototype.disable = function() {
		unregisterGlobal(API_NAME, DiagAPI.instance());
		this._proxyTracerProvider = new ProxyTracerProvider();
	};
	return TraceAPI;
}().getInstance();
//#endregion
//#region node_modules/ai/dist/index.mjs
var __defProp$1 = Object.defineProperty;
var __export = (target, all) => {
	for (var name21 in all) __defProp$1(target, name21, {
		get: all[name21],
		enumerable: true
	});
};
var name = "AI_InvalidArgumentError";
var marker = `vercel.ai.error.${name}`;
var symbol = Symbol.for(marker);
var _a;
var InvalidArgumentError = class extends AISDKError {
	constructor({ parameter, value, message }) {
		super({
			name,
			message: `Invalid argument for parameter ${parameter}: ${message}`
		});
		this[_a] = true;
		this.parameter = parameter;
		this.value = value;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker);
	}
};
_a = symbol;
var name3 = "AI_InvalidToolApprovalError";
var marker3 = `vercel.ai.error.${name3}`;
var symbol3 = Symbol.for(marker3);
var _a3;
var InvalidToolApprovalError = class extends AISDKError {
	constructor({ approvalId }) {
		super({
			name: name3,
			message: `Tool approval response references unknown approvalId: "${approvalId}". No matching tool-approval-request found in message history.`
		});
		this[_a3] = true;
		this.approvalId = approvalId;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker3);
	}
};
_a3 = symbol3;
var name4 = "AI_InvalidToolInputError";
var marker4 = `vercel.ai.error.${name4}`;
var symbol4 = Symbol.for(marker4);
var _a4;
var InvalidToolInputError = class extends AISDKError {
	constructor({ toolInput, toolName, cause, message = `Invalid input for tool ${toolName}: ${getErrorMessage$1(cause)}` }) {
		super({
			name: name4,
			message,
			cause
		});
		this[_a4] = true;
		this.toolInput = toolInput;
		this.toolName = toolName;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker4);
	}
};
_a4 = symbol4;
var name5 = "AI_ToolCallNotFoundForApprovalError";
var marker5 = `vercel.ai.error.${name5}`;
var symbol5 = Symbol.for(marker5);
var _a5;
var ToolCallNotFoundForApprovalError = class extends AISDKError {
	constructor({ toolCallId, approvalId }) {
		super({
			name: name5,
			message: `Tool call "${toolCallId}" not found for approval request "${approvalId}".`
		});
		this[_a5] = true;
		this.toolCallId = toolCallId;
		this.approvalId = approvalId;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker5);
	}
};
_a5 = symbol5;
var name6 = "AI_MissingToolResultsError";
var marker6 = `vercel.ai.error.${name6}`;
var symbol6 = Symbol.for(marker6);
var _a6;
var MissingToolResultsError = class extends AISDKError {
	constructor({ toolCallIds }) {
		super({
			name: name6,
			message: `Tool result${toolCallIds.length > 1 ? "s are" : " is"} missing for tool call${toolCallIds.length > 1 ? "s" : ""} ${toolCallIds.join(", ")}.`
		});
		this[_a6] = true;
		this.toolCallIds = toolCallIds;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker6);
	}
};
_a6 = symbol6;
var name8 = "AI_NoObjectGeneratedError";
var marker8 = `vercel.ai.error.${name8}`;
var symbol8 = Symbol.for(marker8);
var _a8;
var NoObjectGeneratedError = class extends AISDKError {
	constructor({ message = "No object generated.", cause, text: text2, response, usage, finishReason }) {
		super({
			name: name8,
			message,
			cause
		});
		this[_a8] = true;
		this.text = text2;
		this.response = response;
		this.usage = usage;
		this.finishReason = finishReason;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker8);
	}
};
_a8 = symbol8;
var name9 = "AI_NoOutputGeneratedError";
var marker9 = `vercel.ai.error.${name9}`;
var symbol9 = Symbol.for(marker9);
var _a9;
var NoOutputGeneratedError = class extends AISDKError {
	constructor({ message = "No output generated.", cause } = {}) {
		super({
			name: name9,
			message,
			cause
		});
		this[_a9] = true;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker9);
	}
};
_a9 = symbol9;
var name13 = "AI_NoSuchToolError";
var marker13 = `vercel.ai.error.${name13}`;
var symbol13 = Symbol.for(marker13);
var _a13;
var NoSuchToolError = class extends AISDKError {
	constructor({ toolName, availableTools = void 0, message = `Model tried to call unavailable tool '${toolName}'. ${availableTools === void 0 ? "No tools are available." : `Available tools: ${availableTools.join(", ")}.`}` }) {
		super({
			name: name13,
			message
		});
		this[_a13] = true;
		this.toolName = toolName;
		this.availableTools = availableTools;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker13);
	}
};
_a13 = symbol13;
var name14 = "AI_ToolCallRepairError";
var marker14 = `vercel.ai.error.${name14}`;
var symbol14 = Symbol.for(marker14);
var _a14;
var ToolCallRepairError = class extends AISDKError {
	constructor({ cause, originalError, message = `Error repairing tool call: ${getErrorMessage$1(cause)}` }) {
		super({
			name: name14,
			message,
			cause
		});
		this[_a14] = true;
		this.originalError = originalError;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker14);
	}
};
_a14 = symbol14;
var UnsupportedModelVersionError = class extends AISDKError {
	constructor(options) {
		super({
			name: "AI_UnsupportedModelVersionError",
			message: `Unsupported model version ${options.version} for provider "${options.provider}" and model "${options.modelId}". AI SDK 5 only supports models that implement specification version "v2".`
		});
		this.version = options.version;
		this.provider = options.provider;
		this.modelId = options.modelId;
	}
};
var name15 = "AI_UIMessageStreamError";
var marker15 = `vercel.ai.error.${name15}`;
var symbol15 = Symbol.for(marker15);
var _a15;
var UIMessageStreamError = class extends AISDKError {
	constructor({ chunkType, chunkId, message }) {
		super({
			name: name15,
			message
		});
		this[_a15] = true;
		this.chunkType = chunkType;
		this.chunkId = chunkId;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker15);
	}
};
_a15 = symbol15;
var name17 = "AI_InvalidMessageRoleError";
var marker17 = `vercel.ai.error.${name17}`;
var symbol17 = Symbol.for(marker17);
var _a17;
var InvalidMessageRoleError = class extends AISDKError {
	constructor({ role, message = `Invalid message role: '${role}'. Must be one of: "system", "user", "assistant", "tool".` }) {
		super({
			name: name17,
			message
		});
		this[_a17] = true;
		this.role = role;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker17);
	}
};
_a17 = symbol17;
var name18 = "AI_MessageConversionError";
var marker18 = `vercel.ai.error.${name18}`;
var symbol18 = Symbol.for(marker18);
var _a18;
var MessageConversionError = class extends AISDKError {
	constructor({ originalMessage, message }) {
		super({
			name: name18,
			message
		});
		this[_a18] = true;
		this.originalMessage = originalMessage;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker18);
	}
};
_a18 = symbol18;
var name19 = "AI_RetryError";
var marker19 = `vercel.ai.error.${name19}`;
var symbol19 = Symbol.for(marker19);
var _a19;
var RetryError = class extends AISDKError {
	constructor({ message, reason, errors }) {
		super({
			name: name19,
			message
		});
		this[_a19] = true;
		this.reason = reason;
		this.errors = errors;
		this.lastError = errors[errors.length - 1];
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker19);
	}
};
_a19 = symbol19;
function asArray(value) {
	return value === void 0 ? [] : Array.isArray(value) ? value : [value];
}
async function notify(options) {
	for (const callback of asArray(options.callbacks)) {
		if (callback == null) continue;
		try {
			await callback(options.event);
		} catch (_ignored) {}
	}
}
function formatWarning({ warning, provider, model }) {
	const prefix = `AI SDK Warning (${provider} / ${model}):`;
	switch (warning.type) {
		case "unsupported": {
			let message = `${prefix} The feature "${warning.feature}" is not supported.`;
			if (warning.details) message += ` ${warning.details}`;
			return message;
		}
		case "compatibility": {
			let message = `${prefix} The feature "${warning.feature}" is used in a compatibility mode.`;
			if (warning.details) message += ` ${warning.details}`;
			return message;
		}
		case "other": return `${prefix} ${warning.message}`;
		default: return `${prefix} ${JSON.stringify(warning, null, 2)}`;
	}
}
var FIRST_WARNING_INFO_MESSAGE = "AI SDK Warning System: To turn off warning logging, set the AI_SDK_LOG_WARNINGS global to false.";
var hasLoggedBefore = false;
var logWarnings = (options) => {
	if (options.warnings.length === 0) return;
	const logger = globalThis.AI_SDK_LOG_WARNINGS;
	if (logger === false) return;
	if (typeof logger === "function") {
		logger(options);
		return;
	}
	if (!hasLoggedBefore) {
		hasLoggedBefore = true;
		console.info(FIRST_WARNING_INFO_MESSAGE);
	}
	for (const warning of options.warnings) console.warn(formatWarning({
		warning,
		provider: options.provider,
		model: options.model
	}));
};
function logV2CompatibilityWarning({ provider, modelId }) {
	logWarnings({
		warnings: [{
			type: "compatibility",
			feature: "specificationVersion",
			details: `Using v2 specification compatibility mode. Some features may not be available.`
		}],
		provider,
		model: modelId
	});
}
function asLanguageModelV3(model) {
	if (model.specificationVersion === "v3") return model;
	logV2CompatibilityWarning({
		provider: model.provider,
		modelId: model.modelId
	});
	return new Proxy(model, { get(target, prop) {
		switch (prop) {
			case "specificationVersion": return "v3";
			case "doGenerate": return async (...args) => {
				const result = await target.doGenerate(...args);
				return {
					...result,
					finishReason: convertV2FinishReasonToV3(result.finishReason),
					usage: convertV2UsageToV3(result.usage)
				};
			};
			case "doStream": return async (...args) => {
				const result = await target.doStream(...args);
				return {
					...result,
					stream: convertV2StreamToV3(result.stream)
				};
			};
			default: return target[prop];
		}
	} });
}
function convertV2StreamToV3(stream) {
	return stream.pipeThrough(new TransformStream({ transform(chunk, controller) {
		switch (chunk.type) {
			case "finish":
				controller.enqueue({
					...chunk,
					finishReason: convertV2FinishReasonToV3(chunk.finishReason),
					usage: convertV2UsageToV3(chunk.usage)
				});
				break;
			default:
				controller.enqueue(chunk);
				break;
		}
	} }));
}
function convertV2FinishReasonToV3(finishReason) {
	return {
		unified: finishReason === "unknown" ? "other" : finishReason,
		raw: void 0
	};
}
function convertV2UsageToV3(usage) {
	return {
		inputTokens: {
			total: usage.inputTokens,
			noCache: void 0,
			cacheRead: usage.cachedInputTokens,
			cacheWrite: void 0
		},
		outputTokens: {
			total: usage.outputTokens,
			text: void 0,
			reasoning: usage.reasoningTokens
		}
	};
}
function resolveLanguageModel(model) {
	if (typeof model !== "string") {
		if (model.specificationVersion !== "v3" && model.specificationVersion !== "v2") {
			const unsupportedModel = model;
			throw new UnsupportedModelVersionError({
				version: unsupportedModel.specificationVersion,
				provider: unsupportedModel.provider,
				modelId: unsupportedModel.modelId
			});
		}
		return asLanguageModelV3(model);
	}
	return getGlobalProvider().languageModel(model);
}
function getGlobalProvider() {
	var _a21;
	return (_a21 = globalThis.AI_SDK_DEFAULT_PROVIDER) != null ? _a21 : gateway;
}
function getTotalTimeoutMs(timeout) {
	if (timeout == null) return;
	if (typeof timeout === "number") return timeout;
	return timeout.totalMs;
}
function getStepTimeoutMs(timeout) {
	if (timeout == null || typeof timeout === "number") return;
	return timeout.stepMs;
}
function getChunkTimeoutMs(timeout) {
	if (timeout == null || typeof timeout === "number") return;
	return timeout.chunkMs;
}
var imageMediaTypeSignatures = [
	{
		mediaType: "image/gif",
		bytesPrefix: [
			71,
			73,
			70
		]
	},
	{
		mediaType: "image/png",
		bytesPrefix: [
			137,
			80,
			78,
			71
		]
	},
	{
		mediaType: "image/jpeg",
		bytesPrefix: [255, 216]
	},
	{
		mediaType: "image/webp",
		bytesPrefix: [
			82,
			73,
			70,
			70,
			null,
			null,
			null,
			null,
			87,
			69,
			66,
			80
		]
	},
	{
		mediaType: "image/bmp",
		bytesPrefix: [66, 77]
	},
	{
		mediaType: "image/tiff",
		bytesPrefix: [
			73,
			73,
			42,
			0
		]
	},
	{
		mediaType: "image/tiff",
		bytesPrefix: [
			77,
			77,
			0,
			42
		]
	},
	{
		mediaType: "image/avif",
		bytesPrefix: [
			0,
			0,
			0,
			32,
			102,
			116,
			121,
			112,
			97,
			118,
			105,
			102
		]
	},
	{
		mediaType: "image/heic",
		bytesPrefix: [
			0,
			0,
			0,
			32,
			102,
			116,
			121,
			112,
			104,
			101,
			105,
			99
		]
	}
];
var stripID3 = (data) => {
	const bytes = typeof data === "string" ? convertBase64ToUint8Array(data) : data;
	const id3Size = (bytes[6] & 127) << 21 | (bytes[7] & 127) << 14 | (bytes[8] & 127) << 7 | bytes[9] & 127;
	return bytes.slice(id3Size + 10);
};
function stripID3TagsIfPresent(data) {
	return typeof data === "string" && data.startsWith("SUQz") || typeof data !== "string" && data.length > 10 && data[0] === 73 && data[1] === 68 && data[2] === 51 ? stripID3(data) : data;
}
function detectMediaType({ data, signatures }) {
	const processedData = stripID3TagsIfPresent(data);
	const bytes = typeof processedData === "string" ? convertBase64ToUint8Array(processedData.substring(0, Math.min(processedData.length, 24))) : processedData;
	for (const signature of signatures) if (bytes.length >= signature.bytesPrefix.length && signature.bytesPrefix.every((byte, index) => byte === null || bytes[index] === byte)) return signature.mediaType;
}
var VERSION = "6.0.161";
var download = async ({ url, maxBytes, abortSignal }) => {
	var _a21;
	const urlText = url.toString();
	validateDownloadUrl(urlText);
	try {
		const response = await fetch(urlText, {
			headers: withUserAgentSuffix({}, `ai-sdk/${VERSION}`, getRuntimeEnvironmentUserAgent()),
			signal: abortSignal
		});
		if (response.redirected) validateDownloadUrl(response.url);
		if (!response.ok) throw new DownloadError({
			url: urlText,
			statusCode: response.status,
			statusText: response.statusText
		});
		return {
			data: await readResponseWithSizeLimit({
				response,
				url: urlText,
				maxBytes: maxBytes != null ? maxBytes : DEFAULT_MAX_DOWNLOAD_SIZE
			}),
			mediaType: (_a21 = response.headers.get("content-type")) != null ? _a21 : void 0
		};
	} catch (error) {
		if (DownloadError.isInstance(error)) throw error;
		throw new DownloadError({
			url: urlText,
			cause: error
		});
	}
};
var createDefaultDownloadFunction = (download2 = download) => (requestedDownloads) => Promise.all(requestedDownloads.map(async (requestedDownload) => requestedDownload.isUrlSupportedByModel ? null : download2(requestedDownload)));
function splitDataUrl(dataUrl) {
	try {
		const [header, base64Content] = dataUrl.split(",");
		return {
			mediaType: header.split(";")[0].split(":")[1],
			base64Content
		};
	} catch (error) {
		return {
			mediaType: void 0,
			base64Content: void 0
		};
	}
}
var dataContentSchema = union([
	string(),
	_instanceof(Uint8Array),
	_instanceof(ArrayBuffer),
	custom((value) => {
		var _a21, _b;
		return (_b = (_a21 = globalThis.Buffer) == null ? void 0 : _a21.isBuffer(value)) != null ? _b : false;
	}, { message: "Must be a Buffer" })
]);
function convertToLanguageModelV3DataContent(content) {
	if (content instanceof Uint8Array) return {
		data: content,
		mediaType: void 0
	};
	if (content instanceof ArrayBuffer) return {
		data: new Uint8Array(content),
		mediaType: void 0
	};
	if (typeof content === "string") try {
		content = new URL(content);
	} catch (error) {}
	if (content instanceof URL && content.protocol === "data:") {
		const { mediaType: dataUrlMediaType, base64Content } = splitDataUrl(content.toString());
		if (dataUrlMediaType == null || base64Content == null) throw new AISDKError({
			name: "InvalidDataContentError",
			message: `Invalid data URL format in content ${content.toString()}`
		});
		return {
			data: base64Content,
			mediaType: dataUrlMediaType
		};
	}
	return {
		data: content,
		mediaType: void 0
	};
}
function convertDataContentToBase64String(content) {
	if (typeof content === "string") return content;
	if (content instanceof ArrayBuffer) return convertUint8ArrayToBase64(new Uint8Array(content));
	return convertUint8ArrayToBase64(content);
}
async function convertToLanguageModelPrompt({ prompt, supportedUrls, download: download2 = createDefaultDownloadFunction() }) {
	const downloadedAssets = await downloadAssets(prompt.messages, download2, supportedUrls);
	const approvalIdToToolCallId = /* @__PURE__ */ new Map();
	for (const message of prompt.messages) if (message.role === "assistant" && Array.isArray(message.content)) {
		for (const part of message.content) if (part.type === "tool-approval-request" && "approvalId" in part && "toolCallId" in part) approvalIdToToolCallId.set(part.approvalId, part.toolCallId);
	}
	const approvedToolCallIds = /* @__PURE__ */ new Set();
	for (const message of prompt.messages) if (message.role === "tool") {
		for (const part of message.content) if (part.type === "tool-approval-response") {
			const toolCallId = approvalIdToToolCallId.get(part.approvalId);
			if (toolCallId) approvedToolCallIds.add(toolCallId);
		}
	}
	const messages = [...prompt.system != null ? typeof prompt.system === "string" ? [{
		role: "system",
		content: prompt.system
	}] : asArray(prompt.system).map((message) => ({
		role: "system",
		content: message.content,
		providerOptions: message.providerOptions
	})) : [], ...prompt.messages.map((message) => convertToLanguageModelMessage({
		message,
		downloadedAssets
	}))];
	const combinedMessages = [];
	for (const message of messages) {
		if (message.role !== "tool") {
			combinedMessages.push(message);
			continue;
		}
		const lastCombinedMessage = combinedMessages.at(-1);
		if ((lastCombinedMessage == null ? void 0 : lastCombinedMessage.role) === "tool") lastCombinedMessage.content.push(...message.content);
		else combinedMessages.push(message);
	}
	const toolCallIds = /* @__PURE__ */ new Set();
	for (const message of combinedMessages) switch (message.role) {
		case "assistant":
			for (const content of message.content) if (content.type === "tool-call" && !content.providerExecuted) toolCallIds.add(content.toolCallId);
			break;
		case "tool":
			for (const content of message.content) if (content.type === "tool-result") toolCallIds.delete(content.toolCallId);
			break;
		case "user":
		case "system":
			for (const id of approvedToolCallIds) toolCallIds.delete(id);
			if (toolCallIds.size > 0) throw new MissingToolResultsError({ toolCallIds: Array.from(toolCallIds) });
			break;
	}
	for (const id of approvedToolCallIds) toolCallIds.delete(id);
	if (toolCallIds.size > 0) throw new MissingToolResultsError({ toolCallIds: Array.from(toolCallIds) });
	return combinedMessages.filter((message) => message.role !== "tool" || message.content.length > 0);
}
function convertToLanguageModelMessage({ message, downloadedAssets }) {
	const role = message.role;
	switch (role) {
		case "system": return {
			role: "system",
			content: message.content,
			providerOptions: message.providerOptions
		};
		case "user":
			if (typeof message.content === "string") return {
				role: "user",
				content: [{
					type: "text",
					text: message.content
				}],
				providerOptions: message.providerOptions
			};
			return {
				role: "user",
				content: message.content.map((part) => convertPartToLanguageModelPart(part, downloadedAssets)).filter((part) => part.type !== "text" || part.text !== ""),
				providerOptions: message.providerOptions
			};
		case "assistant":
			if (typeof message.content === "string") return {
				role: "assistant",
				content: [{
					type: "text",
					text: message.content
				}],
				providerOptions: message.providerOptions
			};
			return {
				role: "assistant",
				content: message.content.filter((part) => part.type !== "text" || part.text !== "" || part.providerOptions != null).filter((part) => part.type !== "tool-approval-request").map((part) => {
					const providerOptions = part.providerOptions;
					switch (part.type) {
						case "file": {
							const { data, mediaType } = convertToLanguageModelV3DataContent(part.data);
							return {
								type: "file",
								data,
								filename: part.filename,
								mediaType: mediaType != null ? mediaType : part.mediaType,
								providerOptions
							};
						}
						case "reasoning": return {
							type: "reasoning",
							text: part.text,
							providerOptions
						};
						case "text": return {
							type: "text",
							text: part.text,
							providerOptions
						};
						case "tool-call": return {
							type: "tool-call",
							toolCallId: part.toolCallId,
							toolName: part.toolName,
							input: part.input,
							providerExecuted: part.providerExecuted,
							providerOptions
						};
						case "tool-result": return {
							type: "tool-result",
							toolCallId: part.toolCallId,
							toolName: part.toolName,
							output: mapToolResultOutput(part.output),
							providerOptions
						};
					}
				}),
				providerOptions: message.providerOptions
			};
		case "tool": return {
			role: "tool",
			content: message.content.filter((part) => part.type !== "tool-approval-response" || part.providerExecuted).map((part) => {
				switch (part.type) {
					case "tool-result": return {
						type: "tool-result",
						toolCallId: part.toolCallId,
						toolName: part.toolName,
						output: mapToolResultOutput(part.output),
						providerOptions: part.providerOptions
					};
					case "tool-approval-response": return {
						type: "tool-approval-response",
						approvalId: part.approvalId,
						approved: part.approved,
						reason: part.reason
					};
				}
			}),
			providerOptions: message.providerOptions
		};
		default: throw new InvalidMessageRoleError({ role });
	}
}
async function downloadAssets(messages, download2, supportedUrls) {
	const plannedDownloads = messages.filter((message) => message.role === "user").map((message) => message.content).filter((content) => Array.isArray(content)).flat().filter((part) => part.type === "image" || part.type === "file").map((part) => {
		var _a21;
		const mediaType = (_a21 = part.mediaType) != null ? _a21 : part.type === "image" ? "image/*" : void 0;
		let data = part.type === "image" ? part.image : part.data;
		if (typeof data === "string") try {
			data = new URL(data);
		} catch (ignored) {}
		return {
			mediaType,
			data
		};
	}).filter((part) => part.data instanceof URL).map((part) => ({
		url: part.data,
		isUrlSupportedByModel: part.mediaType != null && isUrlSupported({
			url: part.data.toString(),
			mediaType: part.mediaType,
			supportedUrls
		})
	}));
	const downloadedFiles = await download2(plannedDownloads);
	return Object.fromEntries(downloadedFiles.map((file, index) => file == null ? null : [plannedDownloads[index].url.toString(), {
		data: file.data,
		mediaType: file.mediaType
	}]).filter((file) => file != null));
}
function convertPartToLanguageModelPart(part, downloadedAssets) {
	var _a21;
	if (part.type === "text") return {
		type: "text",
		text: part.text,
		providerOptions: part.providerOptions
	};
	let originalData;
	const type = part.type;
	switch (type) {
		case "image":
			originalData = part.image;
			break;
		case "file":
			originalData = part.data;
			break;
		default: throw new Error(`Unsupported part type: ${type}`);
	}
	const { data: convertedData, mediaType: convertedMediaType } = convertToLanguageModelV3DataContent(originalData);
	let mediaType = convertedMediaType != null ? convertedMediaType : part.mediaType;
	let data = convertedData;
	if (data instanceof URL) {
		const downloadedFile = downloadedAssets[data.toString()];
		if (downloadedFile) {
			data = downloadedFile.data;
			mediaType ??= downloadedFile.mediaType;
		}
	}
	switch (type) {
		case "image":
			if (data instanceof Uint8Array || typeof data === "string") mediaType = (_a21 = detectMediaType({
				data,
				signatures: imageMediaTypeSignatures
			})) != null ? _a21 : mediaType;
			return {
				type: "file",
				mediaType: mediaType != null ? mediaType : "image/*",
				filename: void 0,
				data,
				providerOptions: part.providerOptions
			};
		case "file":
			if (mediaType == null) throw new Error(`Media type is missing for file part`);
			return {
				type: "file",
				mediaType,
				filename: part.filename,
				data,
				providerOptions: part.providerOptions
			};
	}
}
function mapToolResultOutput(output) {
	if (output.type !== "content") return output;
	return {
		type: "content",
		value: output.value.map((item) => {
			if (item.type !== "media") return item;
			if (item.mediaType.startsWith("image/")) return {
				type: "image-data",
				data: item.data,
				mediaType: item.mediaType
			};
			return {
				type: "file-data",
				data: item.data,
				mediaType: item.mediaType
			};
		})
	};
}
async function createToolModelOutput({ toolCallId, input, output, tool: tool2, errorMode }) {
	if (errorMode === "text") return {
		type: "error-text",
		value: getErrorMessage$1(output)
	};
	else if (errorMode === "json") return {
		type: "error-json",
		value: toJSONValue(output)
	};
	if (tool2 == null ? void 0 : tool2.toModelOutput) return await tool2.toModelOutput({
		toolCallId,
		input,
		output
	});
	return typeof output === "string" ? {
		type: "text",
		value: output
	} : {
		type: "json",
		value: toJSONValue(output)
	};
}
function toJSONValue(value) {
	return value === void 0 ? null : value;
}
function prepareCallSettings({ maxOutputTokens, temperature, topP, topK, presencePenalty, frequencyPenalty, seed, stopSequences }) {
	if (maxOutputTokens != null) {
		if (!Number.isInteger(maxOutputTokens)) throw new InvalidArgumentError({
			parameter: "maxOutputTokens",
			value: maxOutputTokens,
			message: "maxOutputTokens must be an integer"
		});
		if (maxOutputTokens < 1) throw new InvalidArgumentError({
			parameter: "maxOutputTokens",
			value: maxOutputTokens,
			message: "maxOutputTokens must be >= 1"
		});
	}
	if (temperature != null) {
		if (typeof temperature !== "number") throw new InvalidArgumentError({
			parameter: "temperature",
			value: temperature,
			message: "temperature must be a number"
		});
	}
	if (topP != null) {
		if (typeof topP !== "number") throw new InvalidArgumentError({
			parameter: "topP",
			value: topP,
			message: "topP must be a number"
		});
	}
	if (topK != null) {
		if (typeof topK !== "number") throw new InvalidArgumentError({
			parameter: "topK",
			value: topK,
			message: "topK must be a number"
		});
	}
	if (presencePenalty != null) {
		if (typeof presencePenalty !== "number") throw new InvalidArgumentError({
			parameter: "presencePenalty",
			value: presencePenalty,
			message: "presencePenalty must be a number"
		});
	}
	if (frequencyPenalty != null) {
		if (typeof frequencyPenalty !== "number") throw new InvalidArgumentError({
			parameter: "frequencyPenalty",
			value: frequencyPenalty,
			message: "frequencyPenalty must be a number"
		});
	}
	if (seed != null) {
		if (!Number.isInteger(seed)) throw new InvalidArgumentError({
			parameter: "seed",
			value: seed,
			message: "seed must be an integer"
		});
	}
	return {
		maxOutputTokens,
		temperature,
		topP,
		topK,
		presencePenalty,
		frequencyPenalty,
		stopSequences,
		seed
	};
}
function isNonEmptyObject(object2) {
	return object2 != null && Object.keys(object2).length > 0;
}
async function prepareToolsAndToolChoice({ tools, toolChoice, activeTools }) {
	if (!isNonEmptyObject(tools)) return {
		tools: void 0,
		toolChoice: void 0
	};
	const filteredTools = activeTools != null ? Object.entries(tools).filter(([name21]) => activeTools.includes(name21)) : Object.entries(tools);
	const languageModelTools = [];
	for (const [name21, tool2] of filteredTools) {
		const toolType = tool2.type;
		switch (toolType) {
			case void 0:
			case "dynamic":
			case "function":
				languageModelTools.push({
					type: "function",
					name: name21,
					description: tool2.description,
					inputSchema: await asSchema(tool2.inputSchema).jsonSchema,
					...tool2.inputExamples != null ? { inputExamples: tool2.inputExamples } : {},
					providerOptions: tool2.providerOptions,
					...tool2.strict != null ? { strict: tool2.strict } : {}
				});
				break;
			case "provider":
				languageModelTools.push({
					type: "provider",
					name: name21,
					id: tool2.id,
					args: tool2.args
				});
				break;
			default: throw new Error(`Unsupported tool type: ${toolType}`);
		}
	}
	return {
		tools: languageModelTools,
		toolChoice: toolChoice == null ? { type: "auto" } : typeof toolChoice === "string" ? { type: toolChoice } : {
			type: "tool",
			toolName: toolChoice.toolName
		}
	};
}
var jsonValueSchema = lazy(() => union([
	_null(),
	string(),
	number(),
	boolean(),
	record(string(), jsonValueSchema.optional()),
	array$1(jsonValueSchema)
]));
var providerMetadataSchema = record(string(), record(string(), jsonValueSchema.optional()));
var textPartSchema = object$1({
	type: literal("text"),
	text: string(),
	providerOptions: providerMetadataSchema.optional()
});
var imagePartSchema = object$1({
	type: literal("image"),
	image: union([dataContentSchema, _instanceof(URL)]),
	mediaType: string().optional(),
	providerOptions: providerMetadataSchema.optional()
});
var filePartSchema = object$1({
	type: literal("file"),
	data: union([dataContentSchema, _instanceof(URL)]),
	filename: string().optional(),
	mediaType: string(),
	providerOptions: providerMetadataSchema.optional()
});
var reasoningPartSchema = object$1({
	type: literal("reasoning"),
	text: string(),
	providerOptions: providerMetadataSchema.optional()
});
var toolCallPartSchema = object$1({
	type: literal("tool-call"),
	toolCallId: string(),
	toolName: string(),
	input: unknown(),
	providerOptions: providerMetadataSchema.optional(),
	providerExecuted: boolean().optional()
});
var outputSchema = discriminatedUnion("type", [
	object$1({
		type: literal("text"),
		value: string(),
		providerOptions: providerMetadataSchema.optional()
	}),
	object$1({
		type: literal("json"),
		value: jsonValueSchema,
		providerOptions: providerMetadataSchema.optional()
	}),
	object$1({
		type: literal("execution-denied"),
		reason: string().optional(),
		providerOptions: providerMetadataSchema.optional()
	}),
	object$1({
		type: literal("error-text"),
		value: string(),
		providerOptions: providerMetadataSchema.optional()
	}),
	object$1({
		type: literal("error-json"),
		value: jsonValueSchema,
		providerOptions: providerMetadataSchema.optional()
	}),
	object$1({
		type: literal("content"),
		value: array$1(union([
			object$1({
				type: literal("text"),
				text: string(),
				providerOptions: providerMetadataSchema.optional()
			}),
			object$1({
				type: literal("media"),
				data: string(),
				mediaType: string()
			}),
			object$1({
				type: literal("file-data"),
				data: string(),
				mediaType: string(),
				filename: string().optional(),
				providerOptions: providerMetadataSchema.optional()
			}),
			object$1({
				type: literal("file-url"),
				url: string(),
				providerOptions: providerMetadataSchema.optional()
			}),
			object$1({
				type: literal("file-id"),
				fileId: union([string(), record(string(), string())]),
				providerOptions: providerMetadataSchema.optional()
			}),
			object$1({
				type: literal("image-data"),
				data: string(),
				mediaType: string(),
				providerOptions: providerMetadataSchema.optional()
			}),
			object$1({
				type: literal("image-url"),
				url: string(),
				providerOptions: providerMetadataSchema.optional()
			}),
			object$1({
				type: literal("image-file-id"),
				fileId: union([string(), record(string(), string())]),
				providerOptions: providerMetadataSchema.optional()
			}),
			object$1({
				type: literal("custom"),
				providerOptions: providerMetadataSchema.optional()
			})
		]))
	})
]);
var toolResultPartSchema = object$1({
	type: literal("tool-result"),
	toolCallId: string(),
	toolName: string(),
	output: outputSchema,
	providerOptions: providerMetadataSchema.optional()
});
var toolApprovalRequestSchema = object$1({
	type: literal("tool-approval-request"),
	approvalId: string(),
	toolCallId: string()
});
var toolApprovalResponseSchema = object$1({
	type: literal("tool-approval-response"),
	approvalId: string(),
	approved: boolean(),
	reason: string().optional()
});
var modelMessageSchema = union([
	object$1({
		role: literal("system"),
		content: string(),
		providerOptions: providerMetadataSchema.optional()
	}),
	object$1({
		role: literal("user"),
		content: union([string(), array$1(union([
			textPartSchema,
			imagePartSchema,
			filePartSchema
		]))]),
		providerOptions: providerMetadataSchema.optional()
	}),
	object$1({
		role: literal("assistant"),
		content: union([string(), array$1(union([
			textPartSchema,
			filePartSchema,
			reasoningPartSchema,
			toolCallPartSchema,
			toolResultPartSchema,
			toolApprovalRequestSchema
		]))]),
		providerOptions: providerMetadataSchema.optional()
	}),
	object$1({
		role: literal("tool"),
		content: array$1(union([toolResultPartSchema, toolApprovalResponseSchema])),
		providerOptions: providerMetadataSchema.optional()
	})
]);
async function standardizePrompt(prompt) {
	if (prompt.prompt == null && prompt.messages == null) throw new InvalidPromptError({
		prompt,
		message: "prompt or messages must be defined"
	});
	if (prompt.prompt != null && prompt.messages != null) throw new InvalidPromptError({
		prompt,
		message: "prompt and messages cannot be defined at the same time"
	});
	if (prompt.system != null && typeof prompt.system !== "string" && !asArray(prompt.system).every((message) => typeof message === "object" && message !== null && "role" in message && message.role === "system")) throw new InvalidPromptError({
		prompt,
		message: "system must be a string, SystemModelMessage, or array of SystemModelMessage"
	});
	let messages;
	if (prompt.prompt != null && typeof prompt.prompt === "string") messages = [{
		role: "user",
		content: prompt.prompt
	}];
	else if (prompt.prompt != null && Array.isArray(prompt.prompt)) messages = prompt.prompt;
	else if (prompt.messages != null) messages = prompt.messages;
	else throw new InvalidPromptError({
		prompt,
		message: "prompt or messages must be defined"
	});
	if (messages.length === 0) throw new InvalidPromptError({
		prompt,
		message: "messages must not be empty"
	});
	const validationResult = await safeValidateTypes({
		value: messages,
		schema: array$1(modelMessageSchema)
	});
	if (!validationResult.success) throw new InvalidPromptError({
		prompt,
		message: "The messages do not match the ModelMessage[] schema.",
		cause: validationResult.error
	});
	return {
		messages,
		system: prompt.system
	};
}
function wrapGatewayError(error) {
	if (!GatewayAuthenticationError.isInstance(error)) return error;
	const isProductionEnv = (process == null ? void 0 : "production") === "production";
	const moreInfoURL = "https://ai-sdk.dev/unauthenticated-ai-gateway";
	if (isProductionEnv) return new AISDKError({
		name: "GatewayError",
		message: `Unauthenticated. Configure AI_GATEWAY_API_KEY or use a provider module. Learn more: ${moreInfoURL}`
	});
	return Object.assign(/* @__PURE__ */ new Error(`\x1B[1m\x1B[31mUnauthenticated request to AI Gateway.\x1B[0m

To authenticate, set the \x1B[33mAI_GATEWAY_API_KEY\x1B[0m environment variable with your API key.

Alternatively, you can use a provider module instead of the AI Gateway.

Learn more: \x1B[34m${moreInfoURL}\x1B[0m

`), { name: "GatewayAuthenticationError" });
}
function assembleOperationName({ operationId, telemetry }) {
	return {
		"operation.name": `${operationId}${(telemetry == null ? void 0 : telemetry.functionId) != null ? ` ${telemetry.functionId}` : ""}`,
		"resource.name": telemetry == null ? void 0 : telemetry.functionId,
		"ai.operationId": operationId,
		"ai.telemetry.functionId": telemetry == null ? void 0 : telemetry.functionId
	};
}
function getBaseTelemetryAttributes({ model, settings, telemetry, headers }) {
	var _a21;
	return {
		"ai.model.provider": model.provider,
		"ai.model.id": model.modelId,
		...Object.entries(settings).reduce((attributes, [key, value]) => {
			if (key === "timeout") {
				const totalTimeoutMs = getTotalTimeoutMs(value);
				if (totalTimeoutMs != null) attributes[`ai.settings.${key}`] = totalTimeoutMs;
			} else attributes[`ai.settings.${key}`] = value;
			return attributes;
		}, {}),
		...Object.entries((_a21 = telemetry == null ? void 0 : telemetry.metadata) != null ? _a21 : {}).reduce((attributes, [key, value]) => {
			attributes[`ai.telemetry.metadata.${key}`] = value;
			return attributes;
		}, {}),
		...Object.entries(headers != null ? headers : {}).reduce((attributes, [key, value]) => {
			if (value !== void 0) attributes[`ai.request.headers.${key}`] = value;
			return attributes;
		}, {})
	};
}
var noopTracer = {
	startSpan() {
		return noopSpan;
	},
	startActiveSpan(name21, arg1, arg2, arg3) {
		if (typeof arg1 === "function") return arg1(noopSpan);
		if (typeof arg2 === "function") return arg2(noopSpan);
		if (typeof arg3 === "function") return arg3(noopSpan);
	}
};
var noopSpan = {
	spanContext() {
		return noopSpanContext;
	},
	setAttribute() {
		return this;
	},
	setAttributes() {
		return this;
	},
	addEvent() {
		return this;
	},
	addLink() {
		return this;
	},
	addLinks() {
		return this;
	},
	setStatus() {
		return this;
	},
	updateName() {
		return this;
	},
	end() {
		return this;
	},
	isRecording() {
		return false;
	},
	recordException() {
		return this;
	}
};
var noopSpanContext = {
	traceId: "",
	spanId: "",
	traceFlags: 0
};
function getTracer({ isEnabled = false, tracer } = {}) {
	if (!isEnabled) return noopTracer;
	if (tracer) return tracer;
	return trace.getTracer("ai");
}
async function recordSpan({ name: name21, tracer, attributes, fn, endWhenDone = true }) {
	return tracer.startActiveSpan(name21, { attributes: await attributes }, async (span) => {
		const ctx = context.active();
		try {
			const result = await context.with(ctx, () => fn(span));
			if (endWhenDone) span.end();
			return result;
		} catch (error) {
			try {
				recordErrorOnSpan(span, error);
			} finally {
				span.end();
			}
			throw error;
		}
	});
}
function recordErrorOnSpan(span, error) {
	if (error instanceof Error) {
		span.recordException({
			name: error.name,
			message: error.message,
			stack: error.stack
		});
		span.setStatus({
			code: SpanStatusCode.ERROR,
			message: error.message
		});
	} else span.setStatus({ code: SpanStatusCode.ERROR });
}
async function selectTelemetryAttributes({ telemetry, attributes }) {
	if ((telemetry == null ? void 0 : telemetry.isEnabled) !== true) return {};
	const resultAttributes = {};
	for (const [key, value] of Object.entries(attributes)) {
		if (value == null) continue;
		if (typeof value === "object" && "input" in value && typeof value.input === "function") {
			if ((telemetry == null ? void 0 : telemetry.recordInputs) === false) continue;
			const result = await value.input();
			if (result != null) resultAttributes[key] = result;
			continue;
		}
		if (typeof value === "object" && "output" in value && typeof value.output === "function") {
			if ((telemetry == null ? void 0 : telemetry.recordOutputs) === false) continue;
			const result = await value.output();
			if (result != null) resultAttributes[key] = result;
			continue;
		}
		resultAttributes[key] = value;
	}
	return resultAttributes;
}
function stringifyForTelemetry(prompt) {
	return JSON.stringify(prompt.map((message) => ({
		...message,
		content: typeof message.content === "string" ? message.content : message.content.map((part) => part.type === "file" ? {
			...part,
			data: part.data instanceof Uint8Array ? convertDataContentToBase64String(part.data) : part.data
		} : part)
	})));
}
function getGlobalTelemetryIntegrations() {
	var _a21;
	return (_a21 = globalThis.AI_SDK_TELEMETRY_INTEGRATIONS) != null ? _a21 : [];
}
function getGlobalTelemetryIntegration() {
	const globalIntegrations = getGlobalTelemetryIntegrations();
	return (integrations) => {
		const localIntegrations = asArray(integrations);
		const allIntegrations = [...globalIntegrations, ...localIntegrations];
		function createTelemetryComposite(getListenerFromIntegration) {
			const listeners = allIntegrations.map(getListenerFromIntegration).filter(Boolean);
			return async (event) => {
				for (const listener of listeners) try {
					await listener(event);
				} catch (_ignored) {}
			};
		}
		return {
			onStart: createTelemetryComposite((integration) => integration.onStart),
			onStepStart: createTelemetryComposite((integration) => integration.onStepStart),
			onToolCallStart: createTelemetryComposite((integration) => integration.onToolCallStart),
			onToolCallFinish: createTelemetryComposite((integration) => integration.onToolCallFinish),
			onStepFinish: createTelemetryComposite((integration) => integration.onStepFinish),
			onFinish: createTelemetryComposite((integration) => integration.onFinish)
		};
	};
}
function asLanguageModelUsage(usage) {
	return {
		inputTokens: usage.inputTokens.total,
		inputTokenDetails: {
			noCacheTokens: usage.inputTokens.noCache,
			cacheReadTokens: usage.inputTokens.cacheRead,
			cacheWriteTokens: usage.inputTokens.cacheWrite
		},
		outputTokens: usage.outputTokens.total,
		outputTokenDetails: {
			textTokens: usage.outputTokens.text,
			reasoningTokens: usage.outputTokens.reasoning
		},
		totalTokens: addTokenCounts(usage.inputTokens.total, usage.outputTokens.total),
		raw: usage.raw,
		reasoningTokens: usage.outputTokens.reasoning,
		cachedInputTokens: usage.inputTokens.cacheRead
	};
}
function createNullLanguageModelUsage() {
	return {
		inputTokens: void 0,
		inputTokenDetails: {
			noCacheTokens: void 0,
			cacheReadTokens: void 0,
			cacheWriteTokens: void 0
		},
		outputTokens: void 0,
		outputTokenDetails: {
			textTokens: void 0,
			reasoningTokens: void 0
		},
		totalTokens: void 0,
		raw: void 0
	};
}
function addLanguageModelUsage(usage1, usage2) {
	var _a21, _b, _c, _d, _e, _f, _g, _h, _i, _j;
	return {
		inputTokens: addTokenCounts(usage1.inputTokens, usage2.inputTokens),
		inputTokenDetails: {
			noCacheTokens: addTokenCounts((_a21 = usage1.inputTokenDetails) == null ? void 0 : _a21.noCacheTokens, (_b = usage2.inputTokenDetails) == null ? void 0 : _b.noCacheTokens),
			cacheReadTokens: addTokenCounts((_c = usage1.inputTokenDetails) == null ? void 0 : _c.cacheReadTokens, (_d = usage2.inputTokenDetails) == null ? void 0 : _d.cacheReadTokens),
			cacheWriteTokens: addTokenCounts((_e = usage1.inputTokenDetails) == null ? void 0 : _e.cacheWriteTokens, (_f = usage2.inputTokenDetails) == null ? void 0 : _f.cacheWriteTokens)
		},
		outputTokens: addTokenCounts(usage1.outputTokens, usage2.outputTokens),
		outputTokenDetails: {
			textTokens: addTokenCounts((_g = usage1.outputTokenDetails) == null ? void 0 : _g.textTokens, (_h = usage2.outputTokenDetails) == null ? void 0 : _h.textTokens),
			reasoningTokens: addTokenCounts((_i = usage1.outputTokenDetails) == null ? void 0 : _i.reasoningTokens, (_j = usage2.outputTokenDetails) == null ? void 0 : _j.reasoningTokens)
		},
		totalTokens: addTokenCounts(usage1.totalTokens, usage2.totalTokens),
		reasoningTokens: addTokenCounts(usage1.reasoningTokens, usage2.reasoningTokens),
		cachedInputTokens: addTokenCounts(usage1.cachedInputTokens, usage2.cachedInputTokens)
	};
}
function addTokenCounts(tokenCount1, tokenCount2) {
	return tokenCount1 == null && tokenCount2 == null ? void 0 : (tokenCount1 != null ? tokenCount1 : 0) + (tokenCount2 != null ? tokenCount2 : 0);
}
function mergeObjects(base, overrides) {
	if (base === void 0 && overrides === void 0) return;
	if (base === void 0) return overrides;
	if (overrides === void 0) return base;
	const result = { ...base };
	for (const key in overrides) if (Object.prototype.hasOwnProperty.call(overrides, key)) {
		const overridesValue = overrides[key];
		if (overridesValue === void 0) continue;
		const baseValue = key in base ? base[key] : void 0;
		const isSourceObject = overridesValue !== null && typeof overridesValue === "object" && !Array.isArray(overridesValue) && !(overridesValue instanceof Date) && !(overridesValue instanceof RegExp);
		const isTargetObject = baseValue !== null && baseValue !== void 0 && typeof baseValue === "object" && !Array.isArray(baseValue) && !(baseValue instanceof Date) && !(baseValue instanceof RegExp);
		if (isSourceObject && isTargetObject) result[key] = mergeObjects(baseValue, overridesValue);
		else result[key] = overridesValue;
	}
	return result;
}
function getRetryDelayInMs({ error, exponentialBackoffDelay }) {
	const headers = error.responseHeaders;
	if (!headers) return exponentialBackoffDelay;
	let ms;
	const retryAfterMs = headers["retry-after-ms"];
	if (retryAfterMs) {
		const timeoutMs = parseFloat(retryAfterMs);
		if (!Number.isNaN(timeoutMs)) ms = timeoutMs;
	}
	const retryAfter = headers["retry-after"];
	if (retryAfter && ms === void 0) {
		const timeoutSeconds = parseFloat(retryAfter);
		if (!Number.isNaN(timeoutSeconds)) ms = timeoutSeconds * 1e3;
		else ms = Date.parse(retryAfter) - Date.now();
	}
	if (ms != null && !Number.isNaN(ms) && 0 <= ms && (ms < 60 * 1e3 || ms < exponentialBackoffDelay)) return ms;
	return exponentialBackoffDelay;
}
var retryWithExponentialBackoffRespectingRetryHeaders = ({ maxRetries = 2, initialDelayInMs = 2e3, backoffFactor = 2, abortSignal } = {}) => async (f) => _retryWithExponentialBackoff(f, {
	maxRetries,
	delayInMs: initialDelayInMs,
	backoffFactor,
	abortSignal
});
async function _retryWithExponentialBackoff(f, { maxRetries, delayInMs, backoffFactor, abortSignal }, errors = []) {
	try {
		return await f();
	} catch (error) {
		if (isAbortError(error)) throw error;
		if (maxRetries === 0) throw error;
		const errorMessage = getErrorMessage(error);
		const newErrors = [...errors, error];
		const tryNumber = newErrors.length;
		if (tryNumber > maxRetries) throw new RetryError({
			message: `Failed after ${tryNumber} attempts. Last error: ${errorMessage}`,
			reason: "maxRetriesExceeded",
			errors: newErrors
		});
		if (error instanceof Error && APICallError.isInstance(error) && error.isRetryable === true && tryNumber <= maxRetries) {
			await delay(getRetryDelayInMs({
				error,
				exponentialBackoffDelay: delayInMs
			}), { abortSignal });
			return _retryWithExponentialBackoff(f, {
				maxRetries,
				delayInMs: backoffFactor * delayInMs,
				backoffFactor,
				abortSignal
			}, newErrors);
		}
		if (tryNumber === 1) throw error;
		throw new RetryError({
			message: `Failed after ${tryNumber} attempts with non-retryable error: '${errorMessage}'`,
			reason: "errorNotRetryable",
			errors: newErrors
		});
	}
}
function prepareRetries({ maxRetries, abortSignal }) {
	if (maxRetries != null) {
		if (!Number.isInteger(maxRetries)) throw new InvalidArgumentError({
			parameter: "maxRetries",
			value: maxRetries,
			message: "maxRetries must be an integer"
		});
		if (maxRetries < 0) throw new InvalidArgumentError({
			parameter: "maxRetries",
			value: maxRetries,
			message: "maxRetries must be >= 0"
		});
	}
	const maxRetriesResult = maxRetries != null ? maxRetries : 2;
	return {
		maxRetries: maxRetriesResult,
		retry: retryWithExponentialBackoffRespectingRetryHeaders({
			maxRetries: maxRetriesResult,
			abortSignal
		})
	};
}
function collectToolApprovals({ messages }) {
	const lastMessage = messages.at(-1);
	if ((lastMessage == null ? void 0 : lastMessage.role) != "tool") return {
		approvedToolApprovals: [],
		deniedToolApprovals: []
	};
	const toolCallsByToolCallId = {};
	for (const message of messages) if (message.role === "assistant" && typeof message.content !== "string") {
		const content = message.content;
		for (const part of content) if (part.type === "tool-call") toolCallsByToolCallId[part.toolCallId] = part;
	}
	const toolApprovalRequestsByApprovalId = {};
	for (const message of messages) if (message.role === "assistant" && typeof message.content !== "string") {
		const content = message.content;
		for (const part of content) if (part.type === "tool-approval-request") toolApprovalRequestsByApprovalId[part.approvalId] = part;
	}
	const toolResults = {};
	for (const part of lastMessage.content) if (part.type === "tool-result") toolResults[part.toolCallId] = part;
	const approvedToolApprovals = [];
	const deniedToolApprovals = [];
	const approvalResponses = lastMessage.content.filter((part) => part.type === "tool-approval-response");
	for (const approvalResponse of approvalResponses) {
		const approvalRequest = toolApprovalRequestsByApprovalId[approvalResponse.approvalId];
		if (approvalRequest == null) throw new InvalidToolApprovalError({ approvalId: approvalResponse.approvalId });
		if (toolResults[approvalRequest.toolCallId] != null) continue;
		const toolCall = toolCallsByToolCallId[approvalRequest.toolCallId];
		if (toolCall == null) throw new ToolCallNotFoundForApprovalError({
			toolCallId: approvalRequest.toolCallId,
			approvalId: approvalRequest.approvalId
		});
		const approval = {
			approvalRequest,
			approvalResponse,
			toolCall
		};
		if (approvalResponse.approved) approvedToolApprovals.push(approval);
		else deniedToolApprovals.push(approval);
	}
	return {
		approvedToolApprovals,
		deniedToolApprovals
	};
}
function now() {
	var _a21, _b;
	return (_b = (_a21 = globalThis == null ? void 0 : globalThis.performance) == null ? void 0 : _a21.now()) != null ? _b : Date.now();
}
async function executeToolCall({ toolCall, tools, tracer, telemetry, messages, abortSignal, experimental_context, stepNumber, model, onPreliminaryToolResult, onToolCallStart, onToolCallFinish }) {
	const { toolName, toolCallId, input } = toolCall;
	const tool2 = tools == null ? void 0 : tools[toolName];
	if ((tool2 == null ? void 0 : tool2.execute) == null) return;
	const baseCallbackEvent = {
		stepNumber,
		model,
		toolCall,
		messages,
		abortSignal,
		functionId: telemetry == null ? void 0 : telemetry.functionId,
		metadata: telemetry == null ? void 0 : telemetry.metadata,
		experimental_context
	};
	return recordSpan({
		name: "ai.toolCall",
		attributes: selectTelemetryAttributes({
			telemetry,
			attributes: {
				...assembleOperationName({
					operationId: "ai.toolCall",
					telemetry
				}),
				"ai.toolCall.name": toolName,
				"ai.toolCall.id": toolCallId,
				"ai.toolCall.args": { output: () => JSON.stringify(input) }
			}
		}),
		tracer,
		fn: async (span) => {
			let output;
			await notify({
				event: baseCallbackEvent,
				callbacks: onToolCallStart
			});
			const startTime = now();
			try {
				const stream = executeTool({
					execute: tool2.execute.bind(tool2),
					input,
					options: {
						toolCallId,
						messages,
						abortSignal,
						experimental_context
					}
				});
				for await (const part of stream) if (part.type === "preliminary") onPreliminaryToolResult?.({
					...toolCall,
					type: "tool-result",
					output: part.output,
					preliminary: true
				});
				else output = part.output;
			} catch (error) {
				const durationMs2 = now() - startTime;
				await notify({
					event: {
						...baseCallbackEvent,
						success: false,
						error,
						durationMs: durationMs2
					},
					callbacks: onToolCallFinish
				});
				recordErrorOnSpan(span, error);
				return {
					type: "tool-error",
					toolCallId,
					toolName,
					input,
					error,
					dynamic: tool2.type === "dynamic",
					...toolCall.providerMetadata != null ? { providerMetadata: toolCall.providerMetadata } : {}
				};
			}
			const durationMs = now() - startTime;
			await notify({
				event: {
					...baseCallbackEvent,
					success: true,
					output,
					durationMs
				},
				callbacks: onToolCallFinish
			});
			try {
				span.setAttributes(await selectTelemetryAttributes({
					telemetry,
					attributes: { "ai.toolCall.result": { output: () => JSON.stringify(output) } }
				}));
			} catch (ignored) {}
			return {
				type: "tool-result",
				toolCallId,
				toolName,
				input,
				output,
				dynamic: tool2.type === "dynamic",
				...toolCall.providerMetadata != null ? { providerMetadata: toolCall.providerMetadata } : {}
			};
		}
	});
}
var DefaultGeneratedFile = class {
	constructor({ data, mediaType }) {
		const isUint8Array = data instanceof Uint8Array;
		this.base64Data = isUint8Array ? void 0 : data;
		this.uint8ArrayData = isUint8Array ? data : void 0;
		this.mediaType = mediaType;
	}
	get base64() {
		if (this.base64Data == null) this.base64Data = convertUint8ArrayToBase64(this.uint8ArrayData);
		return this.base64Data;
	}
	get uint8Array() {
		if (this.uint8ArrayData == null) this.uint8ArrayData = convertBase64ToUint8Array(this.base64Data);
		return this.uint8ArrayData;
	}
};
var DefaultGeneratedFileWithType = class extends DefaultGeneratedFile {
	constructor(options) {
		super(options);
		this.type = "file";
	}
};
async function isApprovalNeeded({ tool: tool2, toolCall, messages, experimental_context }) {
	if (tool2.needsApproval == null) return false;
	if (typeof tool2.needsApproval === "boolean") return tool2.needsApproval;
	return await tool2.needsApproval(toolCall.input, {
		toolCallId: toolCall.toolCallId,
		messages,
		experimental_context
	});
}
__export({}, {
	array: () => array,
	choice: () => choice,
	json: () => json,
	object: () => object,
	text: () => text
});
function fixJson(input) {
	const stack = ["ROOT"];
	let lastValidIndex = -1;
	let literalStart = null;
	function processValueStart(char, i, swapState) {
		switch (char) {
			case "\"":
				lastValidIndex = i;
				stack.pop();
				stack.push(swapState);
				stack.push("INSIDE_STRING");
				break;
			case "f":
			case "t":
			case "n":
				lastValidIndex = i;
				literalStart = i;
				stack.pop();
				stack.push(swapState);
				stack.push("INSIDE_LITERAL");
				break;
			case "-":
				stack.pop();
				stack.push(swapState);
				stack.push("INSIDE_NUMBER");
				break;
			case "0":
			case "1":
			case "2":
			case "3":
			case "4":
			case "5":
			case "6":
			case "7":
			case "8":
			case "9":
				lastValidIndex = i;
				stack.pop();
				stack.push(swapState);
				stack.push("INSIDE_NUMBER");
				break;
			case "{":
				lastValidIndex = i;
				stack.pop();
				stack.push(swapState);
				stack.push("INSIDE_OBJECT_START");
				break;
			case "[":
				lastValidIndex = i;
				stack.pop();
				stack.push(swapState);
				stack.push("INSIDE_ARRAY_START");
				break;
		}
	}
	function processAfterObjectValue(char, i) {
		switch (char) {
			case ",":
				stack.pop();
				stack.push("INSIDE_OBJECT_AFTER_COMMA");
				break;
			case "}":
				lastValidIndex = i;
				stack.pop();
				break;
		}
	}
	function processAfterArrayValue(char, i) {
		switch (char) {
			case ",":
				stack.pop();
				stack.push("INSIDE_ARRAY_AFTER_COMMA");
				break;
			case "]":
				lastValidIndex = i;
				stack.pop();
				break;
		}
	}
	for (let i = 0; i < input.length; i++) {
		const char = input[i];
		switch (stack[stack.length - 1]) {
			case "ROOT":
				processValueStart(char, i, "FINISH");
				break;
			case "INSIDE_OBJECT_START":
				switch (char) {
					case "\"":
						stack.pop();
						stack.push("INSIDE_OBJECT_KEY");
						break;
					case "}":
						lastValidIndex = i;
						stack.pop();
						break;
				}
				break;
			case "INSIDE_OBJECT_AFTER_COMMA":
				switch (char) {
					case "\"":
						stack.pop();
						stack.push("INSIDE_OBJECT_KEY");
						break;
				}
				break;
			case "INSIDE_OBJECT_KEY":
				switch (char) {
					case "\"":
						stack.pop();
						stack.push("INSIDE_OBJECT_AFTER_KEY");
						break;
				}
				break;
			case "INSIDE_OBJECT_AFTER_KEY":
				switch (char) {
					case ":":
						stack.pop();
						stack.push("INSIDE_OBJECT_BEFORE_VALUE");
						break;
				}
				break;
			case "INSIDE_OBJECT_BEFORE_VALUE":
				processValueStart(char, i, "INSIDE_OBJECT_AFTER_VALUE");
				break;
			case "INSIDE_OBJECT_AFTER_VALUE":
				processAfterObjectValue(char, i);
				break;
			case "INSIDE_STRING":
				switch (char) {
					case "\"":
						stack.pop();
						lastValidIndex = i;
						break;
					case "\\":
						stack.push("INSIDE_STRING_ESCAPE");
						break;
					default: lastValidIndex = i;
				}
				break;
			case "INSIDE_ARRAY_START":
				switch (char) {
					case "]":
						lastValidIndex = i;
						stack.pop();
						break;
					default:
						lastValidIndex = i;
						processValueStart(char, i, "INSIDE_ARRAY_AFTER_VALUE");
						break;
				}
				break;
			case "INSIDE_ARRAY_AFTER_VALUE":
				switch (char) {
					case ",":
						stack.pop();
						stack.push("INSIDE_ARRAY_AFTER_COMMA");
						break;
					case "]":
						lastValidIndex = i;
						stack.pop();
						break;
					default:
						lastValidIndex = i;
						break;
				}
				break;
			case "INSIDE_ARRAY_AFTER_COMMA":
				processValueStart(char, i, "INSIDE_ARRAY_AFTER_VALUE");
				break;
			case "INSIDE_STRING_ESCAPE":
				stack.pop();
				lastValidIndex = i;
				break;
			case "INSIDE_NUMBER":
				switch (char) {
					case "0":
					case "1":
					case "2":
					case "3":
					case "4":
					case "5":
					case "6":
					case "7":
					case "8":
					case "9":
						lastValidIndex = i;
						break;
					case "e":
					case "E":
					case "-":
					case ".": break;
					case ",":
						stack.pop();
						if (stack[stack.length - 1] === "INSIDE_ARRAY_AFTER_VALUE") processAfterArrayValue(char, i);
						if (stack[stack.length - 1] === "INSIDE_OBJECT_AFTER_VALUE") processAfterObjectValue(char, i);
						break;
					case "}":
						stack.pop();
						if (stack[stack.length - 1] === "INSIDE_OBJECT_AFTER_VALUE") processAfterObjectValue(char, i);
						break;
					case "]":
						stack.pop();
						if (stack[stack.length - 1] === "INSIDE_ARRAY_AFTER_VALUE") processAfterArrayValue(char, i);
						break;
					default:
						stack.pop();
						break;
				}
				break;
			case "INSIDE_LITERAL": {
				const partialLiteral = input.substring(literalStart, i + 1);
				if (!"false".startsWith(partialLiteral) && !"true".startsWith(partialLiteral) && !"null".startsWith(partialLiteral)) {
					stack.pop();
					if (stack[stack.length - 1] === "INSIDE_OBJECT_AFTER_VALUE") processAfterObjectValue(char, i);
					else if (stack[stack.length - 1] === "INSIDE_ARRAY_AFTER_VALUE") processAfterArrayValue(char, i);
				} else lastValidIndex = i;
				break;
			}
		}
	}
	let result = input.slice(0, lastValidIndex + 1);
	for (let i = stack.length - 1; i >= 0; i--) switch (stack[i]) {
		case "INSIDE_STRING":
			result += "\"";
			break;
		case "INSIDE_OBJECT_KEY":
		case "INSIDE_OBJECT_AFTER_KEY":
		case "INSIDE_OBJECT_AFTER_COMMA":
		case "INSIDE_OBJECT_START":
		case "INSIDE_OBJECT_BEFORE_VALUE":
		case "INSIDE_OBJECT_AFTER_VALUE":
			result += "}";
			break;
		case "INSIDE_ARRAY_START":
		case "INSIDE_ARRAY_AFTER_COMMA":
		case "INSIDE_ARRAY_AFTER_VALUE":
			result += "]";
			break;
		case "INSIDE_LITERAL": {
			const partialLiteral = input.substring(literalStart, input.length);
			if ("true".startsWith(partialLiteral)) result += "true".slice(partialLiteral.length);
			else if ("false".startsWith(partialLiteral)) result += "false".slice(partialLiteral.length);
			else if ("null".startsWith(partialLiteral)) result += "null".slice(partialLiteral.length);
		}
	}
	return result;
}
async function parsePartialJson(jsonText) {
	if (jsonText === void 0) return {
		value: void 0,
		state: "undefined-input"
	};
	let result = await safeParseJSON({ text: jsonText });
	if (result.success) return {
		value: result.value,
		state: "successful-parse"
	};
	result = await safeParseJSON({ text: fixJson(jsonText) });
	if (result.success) return {
		value: result.value,
		state: "repaired-parse"
	};
	return {
		value: void 0,
		state: "failed-parse"
	};
}
var text = () => ({
	name: "text",
	responseFormat: Promise.resolve({ type: "text" }),
	async parseCompleteOutput({ text: text2 }) {
		return text2;
	},
	async parsePartialOutput({ text: text2 }) {
		return { partial: text2 };
	},
	createElementStreamTransform() {}
});
var object = ({ schema: inputSchema, name: name21, description }) => {
	const schema = asSchema(inputSchema);
	return {
		name: "object",
		responseFormat: resolve(schema.jsonSchema).then((jsonSchema2) => ({
			type: "json",
			schema: jsonSchema2,
			...name21 != null && { name: name21 },
			...description != null && { description }
		})),
		async parseCompleteOutput({ text: text2 }, context2) {
			const parseResult = await safeParseJSON({ text: text2 });
			if (!parseResult.success) throw new NoObjectGeneratedError({
				message: "No object generated: could not parse the response.",
				cause: parseResult.error,
				text: text2,
				response: context2.response,
				usage: context2.usage,
				finishReason: context2.finishReason
			});
			const validationResult = await safeValidateTypes({
				value: parseResult.value,
				schema
			});
			if (!validationResult.success) throw new NoObjectGeneratedError({
				message: "No object generated: response did not match schema.",
				cause: validationResult.error,
				text: text2,
				response: context2.response,
				usage: context2.usage,
				finishReason: context2.finishReason
			});
			return validationResult.value;
		},
		async parsePartialOutput({ text: text2 }) {
			const result = await parsePartialJson(text2);
			switch (result.state) {
				case "failed-parse":
				case "undefined-input": return;
				case "repaired-parse":
				case "successful-parse": return { partial: result.value };
			}
		},
		createElementStreamTransform() {}
	};
};
var array = ({ element: inputElementSchema, name: name21, description }) => {
	const elementSchema = asSchema(inputElementSchema);
	return {
		name: "array",
		responseFormat: resolve(elementSchema.jsonSchema).then((jsonSchema2) => {
			const { $schema, ...itemSchema } = jsonSchema2;
			return {
				type: "json",
				schema: {
					$schema: "http://json-schema.org/draft-07/schema#",
					type: "object",
					properties: { elements: {
						type: "array",
						items: itemSchema
					} },
					required: ["elements"],
					additionalProperties: false
				},
				...name21 != null && { name: name21 },
				...description != null && { description }
			};
		}),
		async parseCompleteOutput({ text: text2 }, context2) {
			const parseResult = await safeParseJSON({ text: text2 });
			if (!parseResult.success) throw new NoObjectGeneratedError({
				message: "No object generated: could not parse the response.",
				cause: parseResult.error,
				text: text2,
				response: context2.response,
				usage: context2.usage,
				finishReason: context2.finishReason
			});
			const outerValue = parseResult.value;
			if (outerValue == null || typeof outerValue !== "object" || !("elements" in outerValue) || !Array.isArray(outerValue.elements)) throw new NoObjectGeneratedError({
				message: "No object generated: response did not match schema.",
				cause: new TypeValidationError({
					value: outerValue,
					cause: "response must be an object with an elements array"
				}),
				text: text2,
				response: context2.response,
				usage: context2.usage,
				finishReason: context2.finishReason
			});
			for (const element of outerValue.elements) {
				const validationResult = await safeValidateTypes({
					value: element,
					schema: elementSchema
				});
				if (!validationResult.success) throw new NoObjectGeneratedError({
					message: "No object generated: response did not match schema.",
					cause: validationResult.error,
					text: text2,
					response: context2.response,
					usage: context2.usage,
					finishReason: context2.finishReason
				});
			}
			return outerValue.elements;
		},
		async parsePartialOutput({ text: text2 }) {
			const result = await parsePartialJson(text2);
			switch (result.state) {
				case "failed-parse":
				case "undefined-input": return;
				case "repaired-parse":
				case "successful-parse": {
					const outerValue = result.value;
					if (outerValue == null || typeof outerValue !== "object" || !("elements" in outerValue) || !Array.isArray(outerValue.elements)) return;
					const rawElements = result.state === "repaired-parse" && outerValue.elements.length > 0 ? outerValue.elements.slice(0, -1) : outerValue.elements;
					const parsedElements = [];
					for (const rawElement of rawElements) {
						const validationResult = await safeValidateTypes({
							value: rawElement,
							schema: elementSchema
						});
						if (validationResult.success) parsedElements.push(validationResult.value);
					}
					return { partial: parsedElements };
				}
			}
		},
		createElementStreamTransform() {
			let publishedElements = 0;
			return new TransformStream({ transform({ partialOutput }, controller) {
				if (partialOutput != null) for (; publishedElements < partialOutput.length; publishedElements++) controller.enqueue(partialOutput[publishedElements]);
			} });
		}
	};
};
var choice = ({ options: choiceOptions, name: name21, description }) => {
	return {
		name: "choice",
		responseFormat: Promise.resolve({
			type: "json",
			schema: {
				$schema: "http://json-schema.org/draft-07/schema#",
				type: "object",
				properties: { result: {
					type: "string",
					enum: choiceOptions
				} },
				required: ["result"],
				additionalProperties: false
			},
			...name21 != null && { name: name21 },
			...description != null && { description }
		}),
		async parseCompleteOutput({ text: text2 }, context2) {
			const parseResult = await safeParseJSON({ text: text2 });
			if (!parseResult.success) throw new NoObjectGeneratedError({
				message: "No object generated: could not parse the response.",
				cause: parseResult.error,
				text: text2,
				response: context2.response,
				usage: context2.usage,
				finishReason: context2.finishReason
			});
			const outerValue = parseResult.value;
			if (outerValue == null || typeof outerValue !== "object" || !("result" in outerValue) || typeof outerValue.result !== "string" || !choiceOptions.includes(outerValue.result)) throw new NoObjectGeneratedError({
				message: "No object generated: response did not match schema.",
				cause: new TypeValidationError({
					value: outerValue,
					cause: "response must be an object that contains a choice value."
				}),
				text: text2,
				response: context2.response,
				usage: context2.usage,
				finishReason: context2.finishReason
			});
			return outerValue.result;
		},
		async parsePartialOutput({ text: text2 }) {
			const result = await parsePartialJson(text2);
			switch (result.state) {
				case "failed-parse":
				case "undefined-input": return;
				case "repaired-parse":
				case "successful-parse": {
					const outerValue = result.value;
					if (outerValue == null || typeof outerValue !== "object" || !("result" in outerValue) || typeof outerValue.result !== "string") return;
					const potentialMatches = choiceOptions.filter((choiceOption) => choiceOption.startsWith(outerValue.result));
					if (result.state === "successful-parse") return potentialMatches.includes(outerValue.result) ? { partial: outerValue.result } : void 0;
					else return potentialMatches.length === 1 ? { partial: potentialMatches[0] } : void 0;
				}
			}
		},
		createElementStreamTransform() {}
	};
};
var json = ({ name: name21, description } = {}) => {
	return {
		name: "json",
		responseFormat: Promise.resolve({
			type: "json",
			...name21 != null && { name: name21 },
			...description != null && { description }
		}),
		async parseCompleteOutput({ text: text2 }, context2) {
			const parseResult = await safeParseJSON({ text: text2 });
			if (!parseResult.success) throw new NoObjectGeneratedError({
				message: "No object generated: could not parse the response.",
				cause: parseResult.error,
				text: text2,
				response: context2.response,
				usage: context2.usage,
				finishReason: context2.finishReason
			});
			return parseResult.value;
		},
		async parsePartialOutput({ text: text2 }) {
			const result = await parsePartialJson(text2);
			switch (result.state) {
				case "failed-parse":
				case "undefined-input": return;
				case "repaired-parse":
				case "successful-parse": return result.value === void 0 ? void 0 : { partial: result.value };
			}
		},
		createElementStreamTransform() {}
	};
};
async function parseToolCall({ toolCall, tools, repairToolCall, system, messages }) {
	var _a21;
	try {
		if (tools == null) {
			if (toolCall.providerExecuted && toolCall.dynamic) return await parseProviderExecutedDynamicToolCall(toolCall);
			throw new NoSuchToolError({ toolName: toolCall.toolName });
		}
		try {
			return await doParseToolCall({
				toolCall,
				tools
			});
		} catch (error) {
			if (repairToolCall == null || !(NoSuchToolError.isInstance(error) || InvalidToolInputError.isInstance(error))) throw error;
			let repairedToolCall = null;
			try {
				repairedToolCall = await repairToolCall({
					toolCall,
					tools,
					inputSchema: async ({ toolName }) => {
						const { inputSchema } = tools[toolName];
						return await asSchema(inputSchema).jsonSchema;
					},
					system,
					messages,
					error
				});
			} catch (repairError) {
				throw new ToolCallRepairError({
					cause: repairError,
					originalError: error
				});
			}
			if (repairedToolCall == null) throw error;
			return await doParseToolCall({
				toolCall: repairedToolCall,
				tools
			});
		}
	} catch (error) {
		const parsedInput = await safeParseJSON({ text: toolCall.input });
		const input = parsedInput.success ? parsedInput.value : toolCall.input;
		return {
			type: "tool-call",
			toolCallId: toolCall.toolCallId,
			toolName: toolCall.toolName,
			input,
			dynamic: true,
			invalid: true,
			error,
			title: (_a21 = tools == null ? void 0 : tools[toolCall.toolName]) == null ? void 0 : _a21.title,
			providerExecuted: toolCall.providerExecuted,
			providerMetadata: toolCall.providerMetadata
		};
	}
}
async function parseProviderExecutedDynamicToolCall(toolCall) {
	const parseResult = toolCall.input.trim() === "" ? {
		success: true,
		value: {}
	} : await safeParseJSON({ text: toolCall.input });
	if (parseResult.success === false) throw new InvalidToolInputError({
		toolName: toolCall.toolName,
		toolInput: toolCall.input,
		cause: parseResult.error
	});
	return {
		type: "tool-call",
		toolCallId: toolCall.toolCallId,
		toolName: toolCall.toolName,
		input: parseResult.value,
		providerExecuted: true,
		dynamic: true,
		providerMetadata: toolCall.providerMetadata
	};
}
async function doParseToolCall({ toolCall, tools }) {
	const toolName = toolCall.toolName;
	const tool2 = tools[toolName];
	if (tool2 == null) {
		if (toolCall.providerExecuted && toolCall.dynamic) return await parseProviderExecutedDynamicToolCall(toolCall);
		throw new NoSuchToolError({
			toolName: toolCall.toolName,
			availableTools: Object.keys(tools)
		});
	}
	const schema = asSchema(tool2.inputSchema);
	const parseResult = toolCall.input.trim() === "" ? await safeValidateTypes({
		value: {},
		schema
	}) : await safeParseJSON({
		text: toolCall.input,
		schema
	});
	if (parseResult.success === false) throw new InvalidToolInputError({
		toolName,
		toolInput: toolCall.input,
		cause: parseResult.error
	});
	return tool2.type === "dynamic" ? {
		type: "tool-call",
		toolCallId: toolCall.toolCallId,
		toolName: toolCall.toolName,
		input: parseResult.value,
		providerExecuted: toolCall.providerExecuted,
		providerMetadata: toolCall.providerMetadata,
		dynamic: true,
		title: tool2.title
	} : {
		type: "tool-call",
		toolCallId: toolCall.toolCallId,
		toolName,
		input: parseResult.value,
		providerExecuted: toolCall.providerExecuted,
		providerMetadata: toolCall.providerMetadata,
		title: tool2.title
	};
}
var DefaultStepResult = class {
	constructor({ stepNumber, model, functionId, metadata, experimental_context, content, finishReason, rawFinishReason, usage, warnings, request, response, providerMetadata }) {
		this.stepNumber = stepNumber;
		this.model = model;
		this.functionId = functionId;
		this.metadata = metadata;
		this.experimental_context = experimental_context;
		this.content = content;
		this.finishReason = finishReason;
		this.rawFinishReason = rawFinishReason;
		this.usage = usage;
		this.warnings = warnings;
		this.request = request;
		this.response = response;
		this.providerMetadata = providerMetadata;
	}
	get text() {
		return this.content.filter((part) => part.type === "text").map((part) => part.text).join("");
	}
	get reasoning() {
		return this.content.filter((part) => part.type === "reasoning");
	}
	get reasoningText() {
		return this.reasoning.length === 0 ? void 0 : this.reasoning.map((part) => part.text).join("");
	}
	get files() {
		return this.content.filter((part) => part.type === "file").map((part) => part.file);
	}
	get sources() {
		return this.content.filter((part) => part.type === "source");
	}
	get toolCalls() {
		return this.content.filter((part) => part.type === "tool-call");
	}
	get staticToolCalls() {
		return this.toolCalls.filter((toolCall) => toolCall.dynamic !== true);
	}
	get dynamicToolCalls() {
		return this.toolCalls.filter((toolCall) => toolCall.dynamic === true);
	}
	get toolResults() {
		return this.content.filter((part) => part.type === "tool-result");
	}
	get staticToolResults() {
		return this.toolResults.filter((toolResult) => toolResult.dynamic !== true);
	}
	get dynamicToolResults() {
		return this.toolResults.filter((toolResult) => toolResult.dynamic === true);
	}
};
function stepCountIs(stepCount) {
	return ({ steps }) => steps.length === stepCount;
}
async function isStopConditionMet({ stopConditions, steps }) {
	return (await Promise.all(stopConditions.map((condition) => condition({ steps })))).some((result) => result);
}
async function toResponseMessages({ content: inputContent, tools }) {
	const responseMessages = [];
	const content = [];
	for (const part of inputContent) {
		if (part.type === "source") continue;
		if ((part.type === "tool-result" || part.type === "tool-error") && !part.providerExecuted) continue;
		if (part.type === "text" && part.text.length === 0) continue;
		switch (part.type) {
			case "text":
				content.push({
					type: "text",
					text: part.text,
					providerOptions: part.providerMetadata
				});
				break;
			case "reasoning":
				content.push({
					type: "reasoning",
					text: part.text,
					providerOptions: part.providerMetadata
				});
				break;
			case "file":
				content.push({
					type: "file",
					data: part.file.base64,
					mediaType: part.file.mediaType,
					providerOptions: part.providerMetadata
				});
				break;
			case "tool-call":
				content.push({
					type: "tool-call",
					toolCallId: part.toolCallId,
					toolName: part.toolName,
					input: part.invalid && typeof part.input !== "object" ? {} : part.input,
					providerExecuted: part.providerExecuted,
					providerOptions: part.providerMetadata
				});
				break;
			case "tool-result": {
				const output = await createToolModelOutput({
					toolCallId: part.toolCallId,
					input: part.input,
					tool: tools == null ? void 0 : tools[part.toolName],
					output: part.output,
					errorMode: "none"
				});
				content.push({
					type: "tool-result",
					toolCallId: part.toolCallId,
					toolName: part.toolName,
					output,
					providerOptions: part.providerMetadata
				});
				break;
			}
			case "tool-error": {
				const output = await createToolModelOutput({
					toolCallId: part.toolCallId,
					input: part.input,
					tool: tools == null ? void 0 : tools[part.toolName],
					output: part.error,
					errorMode: "json"
				});
				content.push({
					type: "tool-result",
					toolCallId: part.toolCallId,
					toolName: part.toolName,
					output,
					providerOptions: part.providerMetadata
				});
				break;
			}
			case "tool-approval-request":
				content.push({
					type: "tool-approval-request",
					approvalId: part.approvalId,
					toolCallId: part.toolCall.toolCallId
				});
				break;
		}
	}
	if (content.length > 0) responseMessages.push({
		role: "assistant",
		content
	});
	const toolResultContent = [];
	for (const part of inputContent) {
		if (!(part.type === "tool-result" || part.type === "tool-error") || part.providerExecuted) continue;
		const output = await createToolModelOutput({
			toolCallId: part.toolCallId,
			input: part.input,
			tool: tools == null ? void 0 : tools[part.toolName],
			output: part.type === "tool-result" ? part.output : part.error,
			errorMode: part.type === "tool-error" ? "text" : "none"
		});
		toolResultContent.push({
			type: "tool-result",
			toolCallId: part.toolCallId,
			toolName: part.toolName,
			output,
			...part.providerMetadata != null ? { providerOptions: part.providerMetadata } : {}
		});
	}
	if (toolResultContent.length > 0) responseMessages.push({
		role: "tool",
		content: toolResultContent
	});
	return responseMessages;
}
function mergeAbortSignals(...signals) {
	const validSignals = signals.filter((signal) => signal != null);
	if (validSignals.length === 0) return;
	if (validSignals.length === 1) return validSignals[0];
	const controller = new AbortController();
	for (const signal of validSignals) {
		if (signal.aborted) {
			controller.abort(signal.reason);
			return controller.signal;
		}
		signal.addEventListener("abort", () => {
			controller.abort(signal.reason);
		}, { once: true });
	}
	return controller.signal;
}
createIdGenerator({
	prefix: "aitxt",
	size: 24
});
function prepareHeaders(headers, defaultHeaders) {
	const responseHeaders = new Headers(headers != null ? headers : {});
	for (const [key, value] of Object.entries(defaultHeaders)) if (!responseHeaders.has(key)) responseHeaders.set(key, value);
	return responseHeaders;
}
function createTextStreamResponse({ status, statusText, headers, textStream }) {
	return new Response(textStream.pipeThrough(new TextEncoderStream()), {
		status: status != null ? status : 200,
		statusText,
		headers: prepareHeaders(headers, { "content-type": "text/plain; charset=utf-8" })
	});
}
function writeToServerResponse({ response, status, statusText, headers, stream }) {
	const statusCode = status != null ? status : 200;
	if (statusText !== void 0) response.writeHead(statusCode, statusText, headers);
	else response.writeHead(statusCode, headers);
	const reader = stream.getReader();
	const read = async () => {
		try {
			while (true) {
				const { done, value } = await reader.read();
				if (done) break;
				if (!response.write(value)) await new Promise((resolve3) => {
					response.once("drain", resolve3);
				});
			}
		} catch (error) {
			throw error;
		} finally {
			response.end();
		}
	};
	read();
}
function pipeTextStreamToResponse({ response, status, statusText, headers, textStream }) {
	writeToServerResponse({
		response,
		status,
		statusText,
		headers: Object.fromEntries(prepareHeaders(headers, { "content-type": "text/plain; charset=utf-8" }).entries()),
		stream: textStream.pipeThrough(new TextEncoderStream())
	});
}
var JsonToSseTransformStream = class extends TransformStream {
	constructor() {
		super({
			transform(part, controller) {
				controller.enqueue(`data: ${JSON.stringify(part)}

`);
			},
			flush(controller) {
				controller.enqueue("data: [DONE]\n\n");
			}
		});
	}
};
var UI_MESSAGE_STREAM_HEADERS = {
	"content-type": "text/event-stream",
	"cache-control": "no-cache",
	connection: "keep-alive",
	"x-vercel-ai-ui-message-stream": "v1",
	"x-accel-buffering": "no"
};
function createUIMessageStreamResponse({ status, statusText, headers, stream, consumeSseStream }) {
	let sseStream = stream.pipeThrough(new JsonToSseTransformStream());
	if (consumeSseStream) {
		const [stream1, stream2] = sseStream.tee();
		sseStream = stream1;
		consumeSseStream({ stream: stream2 });
	}
	return new Response(sseStream.pipeThrough(new TextEncoderStream()), {
		status,
		statusText,
		headers: prepareHeaders(headers, UI_MESSAGE_STREAM_HEADERS)
	});
}
function getResponseUIMessageId({ originalMessages, responseMessageId }) {
	if (originalMessages == null) return;
	const lastMessage = originalMessages[originalMessages.length - 1];
	return (lastMessage == null ? void 0 : lastMessage.role) === "assistant" ? lastMessage.id : typeof responseMessageId === "function" ? responseMessageId() : responseMessageId;
}
lazySchema(() => zodSchema(union([
	strictObject({
		type: literal("text-start"),
		id: string(),
		providerMetadata: providerMetadataSchema.optional()
	}),
	strictObject({
		type: literal("text-delta"),
		id: string(),
		delta: string(),
		providerMetadata: providerMetadataSchema.optional()
	}),
	strictObject({
		type: literal("text-end"),
		id: string(),
		providerMetadata: providerMetadataSchema.optional()
	}),
	strictObject({
		type: literal("error"),
		errorText: string()
	}),
	strictObject({
		type: literal("tool-input-start"),
		toolCallId: string(),
		toolName: string(),
		providerExecuted: boolean().optional(),
		providerMetadata: providerMetadataSchema.optional(),
		dynamic: boolean().optional(),
		title: string().optional()
	}),
	strictObject({
		type: literal("tool-input-delta"),
		toolCallId: string(),
		inputTextDelta: string()
	}),
	strictObject({
		type: literal("tool-input-available"),
		toolCallId: string(),
		toolName: string(),
		input: unknown(),
		providerExecuted: boolean().optional(),
		providerMetadata: providerMetadataSchema.optional(),
		dynamic: boolean().optional(),
		title: string().optional()
	}),
	strictObject({
		type: literal("tool-input-error"),
		toolCallId: string(),
		toolName: string(),
		input: unknown(),
		providerExecuted: boolean().optional(),
		providerMetadata: providerMetadataSchema.optional(),
		dynamic: boolean().optional(),
		errorText: string(),
		title: string().optional()
	}),
	strictObject({
		type: literal("tool-approval-request"),
		approvalId: string(),
		toolCallId: string()
	}),
	strictObject({
		type: literal("tool-output-available"),
		toolCallId: string(),
		output: unknown(),
		providerExecuted: boolean().optional(),
		providerMetadata: providerMetadataSchema.optional(),
		dynamic: boolean().optional(),
		preliminary: boolean().optional()
	}),
	strictObject({
		type: literal("tool-output-error"),
		toolCallId: string(),
		errorText: string(),
		providerExecuted: boolean().optional(),
		providerMetadata: providerMetadataSchema.optional(),
		dynamic: boolean().optional()
	}),
	strictObject({
		type: literal("tool-output-denied"),
		toolCallId: string()
	}),
	strictObject({
		type: literal("reasoning-start"),
		id: string(),
		providerMetadata: providerMetadataSchema.optional()
	}),
	strictObject({
		type: literal("reasoning-delta"),
		id: string(),
		delta: string(),
		providerMetadata: providerMetadataSchema.optional()
	}),
	strictObject({
		type: literal("reasoning-end"),
		id: string(),
		providerMetadata: providerMetadataSchema.optional()
	}),
	strictObject({
		type: literal("source-url"),
		sourceId: string(),
		url: string(),
		title: string().optional(),
		providerMetadata: providerMetadataSchema.optional()
	}),
	strictObject({
		type: literal("source-document"),
		sourceId: string(),
		mediaType: string(),
		title: string(),
		filename: string().optional(),
		providerMetadata: providerMetadataSchema.optional()
	}),
	strictObject({
		type: literal("file"),
		url: string(),
		mediaType: string(),
		providerMetadata: providerMetadataSchema.optional()
	}),
	strictObject({
		type: custom((value) => typeof value === "string" && value.startsWith("data-"), { message: "Type must start with \"data-\"" }),
		id: string().optional(),
		data: unknown(),
		transient: boolean().optional()
	}),
	strictObject({ type: literal("start-step") }),
	strictObject({ type: literal("finish-step") }),
	strictObject({
		type: literal("start"),
		messageId: string().optional(),
		messageMetadata: unknown().optional()
	}),
	strictObject({
		type: literal("finish"),
		finishReason: _enum([
			"stop",
			"length",
			"content-filter",
			"tool-calls",
			"error",
			"other"
		]).optional(),
		messageMetadata: unknown().optional()
	}),
	strictObject({
		type: literal("abort"),
		reason: string().optional()
	}),
	strictObject({
		type: literal("message-metadata"),
		messageMetadata: unknown()
	})
])));
function isDataUIMessageChunk(chunk) {
	return chunk.type.startsWith("data-");
}
function isDataUIPart(part) {
	return part.type.startsWith("data-");
}
function isTextUIPart(part) {
	return part.type === "text";
}
function isFileUIPart(part) {
	return part.type === "file";
}
function isReasoningUIPart(part) {
	return part.type === "reasoning";
}
function isStaticToolUIPart(part) {
	return part.type.startsWith("tool-");
}
function isDynamicToolUIPart(part) {
	return part.type === "dynamic-tool";
}
function isToolUIPart(part) {
	return isStaticToolUIPart(part) || isDynamicToolUIPart(part);
}
function getStaticToolName(part) {
	return part.type.split("-").slice(1).join("-");
}
function getToolName(part) {
	return isDynamicToolUIPart(part) ? part.toolName : getStaticToolName(part);
}
function createStreamingUIMessageState({ lastMessage, messageId }) {
	return {
		message: (lastMessage == null ? void 0 : lastMessage.role) === "assistant" ? lastMessage : {
			id: messageId,
			metadata: void 0,
			role: "assistant",
			parts: []
		},
		activeTextParts: {},
		activeReasoningParts: {},
		partialToolCalls: {}
	};
}
function processUIMessageStream({ stream, messageMetadataSchema, dataPartSchemas, runUpdateMessageJob, onError, onToolCall, onData }) {
	return stream.pipeThrough(new TransformStream({ async transform(chunk, controller) {
		await runUpdateMessageJob(async ({ state, write }) => {
			var _a21, _b, _c, _d;
			function getToolInvocation(toolCallId) {
				const toolInvocation = state.message.parts.filter(isToolUIPart).find((invocation) => invocation.toolCallId === toolCallId);
				if (toolInvocation == null) throw new UIMessageStreamError({
					chunkType: "tool-invocation",
					chunkId: toolCallId,
					message: `No tool invocation found for tool call ID "${toolCallId}".`
				});
				return toolInvocation;
			}
			function updateToolPart(options) {
				var _a22;
				const part = state.message.parts.find((part2) => isStaticToolUIPart(part2) && part2.toolCallId === options.toolCallId);
				const anyOptions = options;
				const anyPart = part;
				if (part != null) {
					part.state = options.state;
					anyPart.input = anyOptions.input;
					anyPart.output = anyOptions.output;
					anyPart.errorText = anyOptions.errorText;
					anyPart.rawInput = anyOptions.rawInput;
					anyPart.preliminary = anyOptions.preliminary;
					if (options.title !== void 0) anyPart.title = options.title;
					anyPart.providerExecuted = (_a22 = anyOptions.providerExecuted) != null ? _a22 : part.providerExecuted;
					const providerMetadata = anyOptions.providerMetadata;
					if (providerMetadata != null) if (options.state === "output-available" || options.state === "output-error") {
						const resultPart = part;
						resultPart.resultProviderMetadata = providerMetadata;
					} else part.callProviderMetadata = providerMetadata;
				} else state.message.parts.push({
					type: `tool-${options.toolName}`,
					toolCallId: options.toolCallId,
					state: options.state,
					title: options.title,
					input: anyOptions.input,
					output: anyOptions.output,
					rawInput: anyOptions.rawInput,
					errorText: anyOptions.errorText,
					providerExecuted: anyOptions.providerExecuted,
					preliminary: anyOptions.preliminary,
					...anyOptions.providerMetadata != null && (options.state === "output-available" || options.state === "output-error") ? { resultProviderMetadata: anyOptions.providerMetadata } : {},
					...anyOptions.providerMetadata != null && !(options.state === "output-available" || options.state === "output-error") ? { callProviderMetadata: anyOptions.providerMetadata } : {}
				});
			}
			function updateDynamicToolPart(options) {
				var _a22, _b2;
				const part = state.message.parts.find((part2) => part2.type === "dynamic-tool" && part2.toolCallId === options.toolCallId);
				const anyOptions = options;
				const anyPart = part;
				if (part != null) {
					part.state = options.state;
					anyPart.toolName = options.toolName;
					anyPart.input = anyOptions.input;
					anyPart.output = anyOptions.output;
					anyPart.errorText = anyOptions.errorText;
					anyPart.rawInput = (_a22 = anyOptions.rawInput) != null ? _a22 : anyPart.rawInput;
					anyPart.preliminary = anyOptions.preliminary;
					if (options.title !== void 0) anyPart.title = options.title;
					anyPart.providerExecuted = (_b2 = anyOptions.providerExecuted) != null ? _b2 : part.providerExecuted;
					const providerMetadata = anyOptions.providerMetadata;
					if (providerMetadata != null) if (options.state === "output-available" || options.state === "output-error") {
						const resultPart = part;
						resultPart.resultProviderMetadata = providerMetadata;
					} else part.callProviderMetadata = providerMetadata;
				} else state.message.parts.push({
					type: "dynamic-tool",
					toolName: options.toolName,
					toolCallId: options.toolCallId,
					state: options.state,
					input: anyOptions.input,
					output: anyOptions.output,
					errorText: anyOptions.errorText,
					preliminary: anyOptions.preliminary,
					providerExecuted: anyOptions.providerExecuted,
					title: options.title,
					...anyOptions.providerMetadata != null && (options.state === "output-available" || options.state === "output-error") ? { resultProviderMetadata: anyOptions.providerMetadata } : {},
					...anyOptions.providerMetadata != null && !(options.state === "output-available" || options.state === "output-error") ? { callProviderMetadata: anyOptions.providerMetadata } : {}
				});
			}
			async function updateMessageMetadata(metadata) {
				if (metadata != null) {
					const mergedMetadata = state.message.metadata != null ? mergeObjects(state.message.metadata, metadata) : metadata;
					if (messageMetadataSchema != null) await validateTypes({
						value: mergedMetadata,
						schema: messageMetadataSchema,
						context: {
							field: "message.metadata",
							entityId: state.message.id
						}
					});
					state.message.metadata = mergedMetadata;
				}
			}
			switch (chunk.type) {
				case "text-start": {
					const textPart = {
						type: "text",
						text: "",
						providerMetadata: chunk.providerMetadata,
						state: "streaming"
					};
					state.activeTextParts[chunk.id] = textPart;
					state.message.parts.push(textPart);
					write();
					break;
				}
				case "text-delta": {
					const textPart = state.activeTextParts[chunk.id];
					if (textPart == null) throw new UIMessageStreamError({
						chunkType: "text-delta",
						chunkId: chunk.id,
						message: `Received text-delta for missing text part with ID "${chunk.id}". Ensure a "text-start" chunk is sent before any "text-delta" chunks.`
					});
					textPart.text += chunk.delta;
					textPart.providerMetadata = (_a21 = chunk.providerMetadata) != null ? _a21 : textPart.providerMetadata;
					write();
					break;
				}
				case "text-end": {
					const textPart = state.activeTextParts[chunk.id];
					if (textPart == null) throw new UIMessageStreamError({
						chunkType: "text-end",
						chunkId: chunk.id,
						message: `Received text-end for missing text part with ID "${chunk.id}". Ensure a "text-start" chunk is sent before any "text-end" chunks.`
					});
					textPart.state = "done";
					textPart.providerMetadata = (_b = chunk.providerMetadata) != null ? _b : textPart.providerMetadata;
					delete state.activeTextParts[chunk.id];
					write();
					break;
				}
				case "reasoning-start": {
					const reasoningPart = {
						type: "reasoning",
						text: "",
						providerMetadata: chunk.providerMetadata,
						state: "streaming"
					};
					state.activeReasoningParts[chunk.id] = reasoningPart;
					state.message.parts.push(reasoningPart);
					write();
					break;
				}
				case "reasoning-delta": {
					const reasoningPart = state.activeReasoningParts[chunk.id];
					if (reasoningPart == null) throw new UIMessageStreamError({
						chunkType: "reasoning-delta",
						chunkId: chunk.id,
						message: `Received reasoning-delta for missing reasoning part with ID "${chunk.id}". Ensure a "reasoning-start" chunk is sent before any "reasoning-delta" chunks.`
					});
					reasoningPart.text += chunk.delta;
					reasoningPart.providerMetadata = (_c = chunk.providerMetadata) != null ? _c : reasoningPart.providerMetadata;
					write();
					break;
				}
				case "reasoning-end": {
					const reasoningPart = state.activeReasoningParts[chunk.id];
					if (reasoningPart == null) throw new UIMessageStreamError({
						chunkType: "reasoning-end",
						chunkId: chunk.id,
						message: `Received reasoning-end for missing reasoning part with ID "${chunk.id}". Ensure a "reasoning-start" chunk is sent before any "reasoning-end" chunks.`
					});
					reasoningPart.providerMetadata = (_d = chunk.providerMetadata) != null ? _d : reasoningPart.providerMetadata;
					reasoningPart.state = "done";
					delete state.activeReasoningParts[chunk.id];
					write();
					break;
				}
				case "file":
					state.message.parts.push({
						type: "file",
						mediaType: chunk.mediaType,
						url: chunk.url,
						...chunk.providerMetadata != null ? { providerMetadata: chunk.providerMetadata } : {}
					});
					write();
					break;
				case "source-url":
					state.message.parts.push({
						type: "source-url",
						sourceId: chunk.sourceId,
						url: chunk.url,
						title: chunk.title,
						providerMetadata: chunk.providerMetadata
					});
					write();
					break;
				case "source-document":
					state.message.parts.push({
						type: "source-document",
						sourceId: chunk.sourceId,
						mediaType: chunk.mediaType,
						title: chunk.title,
						filename: chunk.filename,
						providerMetadata: chunk.providerMetadata
					});
					write();
					break;
				case "tool-input-start": {
					const toolInvocations = state.message.parts.filter(isStaticToolUIPart);
					state.partialToolCalls[chunk.toolCallId] = {
						text: "",
						toolName: chunk.toolName,
						index: toolInvocations.length,
						dynamic: chunk.dynamic,
						title: chunk.title
					};
					if (chunk.dynamic) updateDynamicToolPart({
						toolCallId: chunk.toolCallId,
						toolName: chunk.toolName,
						state: "input-streaming",
						input: void 0,
						providerExecuted: chunk.providerExecuted,
						title: chunk.title,
						providerMetadata: chunk.providerMetadata
					});
					else updateToolPart({
						toolCallId: chunk.toolCallId,
						toolName: chunk.toolName,
						state: "input-streaming",
						input: void 0,
						providerExecuted: chunk.providerExecuted,
						title: chunk.title,
						providerMetadata: chunk.providerMetadata
					});
					write();
					break;
				}
				case "tool-input-delta": {
					const partialToolCall = state.partialToolCalls[chunk.toolCallId];
					if (partialToolCall == null) throw new UIMessageStreamError({
						chunkType: "tool-input-delta",
						chunkId: chunk.toolCallId,
						message: `Received tool-input-delta for missing tool call with ID "${chunk.toolCallId}". Ensure a "tool-input-start" chunk is sent before any "tool-input-delta" chunks.`
					});
					partialToolCall.text += chunk.inputTextDelta;
					const { value: partialArgs } = await parsePartialJson(partialToolCall.text);
					if (partialToolCall.dynamic) updateDynamicToolPart({
						toolCallId: chunk.toolCallId,
						toolName: partialToolCall.toolName,
						state: "input-streaming",
						input: partialArgs,
						title: partialToolCall.title
					});
					else updateToolPart({
						toolCallId: chunk.toolCallId,
						toolName: partialToolCall.toolName,
						state: "input-streaming",
						input: partialArgs,
						title: partialToolCall.title
					});
					write();
					break;
				}
				case "tool-input-available":
					if (chunk.dynamic) updateDynamicToolPart({
						toolCallId: chunk.toolCallId,
						toolName: chunk.toolName,
						state: "input-available",
						input: chunk.input,
						providerExecuted: chunk.providerExecuted,
						providerMetadata: chunk.providerMetadata,
						title: chunk.title
					});
					else updateToolPart({
						toolCallId: chunk.toolCallId,
						toolName: chunk.toolName,
						state: "input-available",
						input: chunk.input,
						providerExecuted: chunk.providerExecuted,
						providerMetadata: chunk.providerMetadata,
						title: chunk.title
					});
					write();
					if (onToolCall && !chunk.providerExecuted) await onToolCall({ toolCall: chunk });
					break;
				case "tool-input-error": {
					const existingPart = state.message.parts.filter(isToolUIPart).find((p) => p.toolCallId === chunk.toolCallId);
					if (existingPart != null ? existingPart.type === "dynamic-tool" : !!chunk.dynamic) updateDynamicToolPart({
						toolCallId: chunk.toolCallId,
						toolName: chunk.toolName,
						state: "output-error",
						input: chunk.input,
						errorText: chunk.errorText,
						providerExecuted: chunk.providerExecuted,
						providerMetadata: chunk.providerMetadata
					});
					else updateToolPart({
						toolCallId: chunk.toolCallId,
						toolName: chunk.toolName,
						state: "output-error",
						input: void 0,
						rawInput: chunk.input,
						errorText: chunk.errorText,
						providerExecuted: chunk.providerExecuted,
						providerMetadata: chunk.providerMetadata
					});
					write();
					break;
				}
				case "tool-approval-request": {
					const toolInvocation = getToolInvocation(chunk.toolCallId);
					toolInvocation.state = "approval-requested";
					toolInvocation.approval = { id: chunk.approvalId };
					write();
					break;
				}
				case "tool-output-denied": {
					const toolInvocation = getToolInvocation(chunk.toolCallId);
					toolInvocation.state = "output-denied";
					write();
					break;
				}
				case "tool-output-available": {
					const toolInvocation = getToolInvocation(chunk.toolCallId);
					if (toolInvocation.type === "dynamic-tool") updateDynamicToolPart({
						toolCallId: chunk.toolCallId,
						toolName: toolInvocation.toolName,
						state: "output-available",
						input: toolInvocation.input,
						output: chunk.output,
						preliminary: chunk.preliminary,
						providerExecuted: chunk.providerExecuted,
						providerMetadata: chunk.providerMetadata,
						title: toolInvocation.title
					});
					else updateToolPart({
						toolCallId: chunk.toolCallId,
						toolName: getStaticToolName(toolInvocation),
						state: "output-available",
						input: toolInvocation.input,
						output: chunk.output,
						providerExecuted: chunk.providerExecuted,
						preliminary: chunk.preliminary,
						providerMetadata: chunk.providerMetadata,
						title: toolInvocation.title
					});
					write();
					break;
				}
				case "tool-output-error": {
					const toolInvocation = getToolInvocation(chunk.toolCallId);
					if (toolInvocation.type === "dynamic-tool") updateDynamicToolPart({
						toolCallId: chunk.toolCallId,
						toolName: toolInvocation.toolName,
						state: "output-error",
						input: toolInvocation.input,
						errorText: chunk.errorText,
						providerExecuted: chunk.providerExecuted,
						providerMetadata: chunk.providerMetadata,
						title: toolInvocation.title
					});
					else updateToolPart({
						toolCallId: chunk.toolCallId,
						toolName: getStaticToolName(toolInvocation),
						state: "output-error",
						input: toolInvocation.input,
						rawInput: toolInvocation.rawInput,
						errorText: chunk.errorText,
						providerExecuted: chunk.providerExecuted,
						providerMetadata: chunk.providerMetadata,
						title: toolInvocation.title
					});
					write();
					break;
				}
				case "start-step":
					state.message.parts.push({ type: "step-start" });
					break;
				case "finish-step":
					state.activeTextParts = {};
					state.activeReasoningParts = {};
					break;
				case "start":
					if (chunk.messageId != null) state.message.id = chunk.messageId;
					await updateMessageMetadata(chunk.messageMetadata);
					if (chunk.messageId != null || chunk.messageMetadata != null) write();
					break;
				case "finish":
					if (chunk.finishReason != null) state.finishReason = chunk.finishReason;
					await updateMessageMetadata(chunk.messageMetadata);
					if (chunk.messageMetadata != null) write();
					break;
				case "message-metadata":
					await updateMessageMetadata(chunk.messageMetadata);
					if (chunk.messageMetadata != null) write();
					break;
				case "error":
					onError?.(new Error(chunk.errorText));
					break;
				default: if (isDataUIMessageChunk(chunk)) {
					if ((dataPartSchemas == null ? void 0 : dataPartSchemas[chunk.type]) != null) {
						const partIdx = state.message.parts.findIndex((p) => "id" in p && "data" in p && p.id === chunk.id && p.type === chunk.type);
						const actualPartIdx = partIdx >= 0 ? partIdx : state.message.parts.length;
						await validateTypes({
							value: chunk.data,
							schema: dataPartSchemas[chunk.type],
							context: {
								field: `message.parts[${actualPartIdx}].data`,
								entityName: chunk.type,
								entityId: chunk.id
							}
						});
					}
					const dataChunk = chunk;
					if (dataChunk.transient) {
						onData?.(dataChunk);
						break;
					}
					const existingUIPart = dataChunk.id != null ? state.message.parts.find((chunkArg) => dataChunk.type === chunkArg.type && dataChunk.id === chunkArg.id) : void 0;
					if (existingUIPart != null) existingUIPart.data = dataChunk.data;
					else state.message.parts.push(dataChunk);
					onData?.(dataChunk);
					write();
				}
			}
			controller.enqueue(chunk);
		});
	} }));
}
function handleUIMessageStreamFinish({ messageId, originalMessages = [], onStepFinish, onFinish, onError, stream }) {
	let lastMessage = originalMessages == null ? void 0 : originalMessages[originalMessages.length - 1];
	if ((lastMessage == null ? void 0 : lastMessage.role) !== "assistant") lastMessage = void 0;
	else messageId = lastMessage.id;
	let isAborted = false;
	const idInjectedStream = stream.pipeThrough(new TransformStream({ transform(chunk, controller) {
		if (chunk.type === "start") {
			const startChunk = chunk;
			if (startChunk.messageId == null && messageId != null) startChunk.messageId = messageId;
		}
		if (chunk.type === "abort") isAborted = true;
		controller.enqueue(chunk);
	} }));
	if (onFinish == null && onStepFinish == null) return idInjectedStream;
	const state = createStreamingUIMessageState({
		lastMessage: lastMessage ? structuredClone(lastMessage) : void 0,
		messageId: messageId != null ? messageId : ""
	});
	const runUpdateMessageJob = async (job) => {
		await job({
			state,
			write: () => {}
		});
	};
	let finishCalled = false;
	const callOnFinish = async () => {
		if (finishCalled || !onFinish) return;
		finishCalled = true;
		const isContinuation = state.message.id === (lastMessage == null ? void 0 : lastMessage.id);
		await onFinish({
			isAborted,
			isContinuation,
			responseMessage: state.message,
			messages: [...isContinuation ? originalMessages.slice(0, -1) : originalMessages, state.message],
			finishReason: state.finishReason
		});
	};
	const callOnStepFinish = async () => {
		if (!onStepFinish) return;
		const isContinuation = state.message.id === (lastMessage == null ? void 0 : lastMessage.id);
		try {
			await onStepFinish({
				isContinuation,
				responseMessage: structuredClone(state.message),
				messages: [...isContinuation ? originalMessages.slice(0, -1) : originalMessages, structuredClone(state.message)]
			});
		} catch (error) {
			onError(error);
		}
	};
	return processUIMessageStream({
		stream: idInjectedStream,
		runUpdateMessageJob,
		onError
	}).pipeThrough(new TransformStream({
		async transform(chunk, controller) {
			if (chunk.type === "finish-step") await callOnStepFinish();
			controller.enqueue(chunk);
		},
		async cancel() {
			await callOnFinish();
		},
		async flush() {
			await callOnFinish();
		}
	}));
}
function pipeUIMessageStreamToResponse({ response, status, statusText, headers, stream, consumeSseStream }) {
	let sseStream = stream.pipeThrough(new JsonToSseTransformStream());
	if (consumeSseStream) {
		const [stream1, stream2] = sseStream.tee();
		sseStream = stream1;
		consumeSseStream({ stream: stream2 });
	}
	writeToServerResponse({
		response,
		status,
		statusText,
		headers: Object.fromEntries(prepareHeaders(headers, UI_MESSAGE_STREAM_HEADERS).entries()),
		stream: sseStream.pipeThrough(new TextEncoderStream())
	});
}
function createAsyncIterableStream(source) {
	const stream = source.pipeThrough(new TransformStream());
	stream[Symbol.asyncIterator] = function() {
		const reader = this.getReader();
		let finished = false;
		async function cleanup(cancelStream) {
			var _a21;
			if (finished) return;
			finished = true;
			try {
				if (cancelStream) await ((_a21 = reader.cancel) == null ? void 0 : _a21.call(reader));
			} finally {
				try {
					reader.releaseLock();
				} catch (e) {}
			}
		}
		return {
			async next() {
				if (finished) return {
					done: true,
					value: void 0
				};
				const { done, value } = await reader.read();
				if (done) {
					await cleanup(true);
					return {
						done: true,
						value: void 0
					};
				}
				return {
					done: false,
					value
				};
			},
			async return() {
				await cleanup(true);
				return {
					done: true,
					value: void 0
				};
			},
			async throw(err) {
				await cleanup(true);
				throw err;
			}
		};
	};
	return stream;
}
async function consumeStream({ stream, onError }) {
	const reader = stream.getReader();
	try {
		while (true) {
			const { done } = await reader.read();
			if (done) break;
		}
	} catch (error) {
		onError?.(error);
	} finally {
		reader.releaseLock();
	}
}
function createResolvablePromise() {
	let resolve3;
	let reject;
	return {
		promise: new Promise((res, rej) => {
			resolve3 = res;
			reject = rej;
		}),
		resolve: resolve3,
		reject
	};
}
function createStitchableStream() {
	let innerStreamReaders = [];
	let controller = null;
	let isClosed = false;
	let waitForNewStream = createResolvablePromise();
	const terminate = () => {
		isClosed = true;
		waitForNewStream.resolve();
		innerStreamReaders.forEach((reader) => reader.cancel());
		innerStreamReaders = [];
		controller?.close();
	};
	const processPull = async () => {
		if (isClosed && innerStreamReaders.length === 0) {
			controller?.close();
			return;
		}
		if (innerStreamReaders.length === 0) {
			waitForNewStream = createResolvablePromise();
			await waitForNewStream.promise;
			return processPull();
		}
		try {
			const { value, done } = await innerStreamReaders[0].read();
			if (done) {
				innerStreamReaders.shift();
				if (innerStreamReaders.length === 0 && isClosed) controller?.close();
				else await processPull();
			} else controller?.enqueue(value);
		} catch (error) {
			controller?.error(error);
			innerStreamReaders.shift();
			terminate();
		}
	};
	return {
		stream: new ReadableStream({
			start(controllerParam) {
				controller = controllerParam;
			},
			pull: processPull,
			async cancel() {
				for (const reader of innerStreamReaders) await reader.cancel();
				innerStreamReaders = [];
				isClosed = true;
			}
		}),
		addStream: (innerStream) => {
			if (isClosed) throw new Error("Cannot add inner stream: outer stream is closed");
			innerStreamReaders.push(innerStream.getReader());
			waitForNewStream.resolve();
		},
		close: () => {
			isClosed = true;
			waitForNewStream.resolve();
			if (innerStreamReaders.length === 0) controller?.close();
		},
		terminate
	};
}
function runToolsTransformation({ tools, generatorStream, tracer, telemetry, system, messages, abortSignal, repairToolCall, experimental_context, generateId: generateId2, stepNumber, model, onToolCallStart, onToolCallFinish }) {
	let toolResultsStreamController = null;
	const toolResultsStream = new ReadableStream({ start(controller) {
		toolResultsStreamController = controller;
	} });
	const outstandingToolResults = /* @__PURE__ */ new Set();
	const toolInputs = /* @__PURE__ */ new Map();
	const toolCallsByToolCallId = /* @__PURE__ */ new Map();
	let canClose = false;
	let finishChunk = void 0;
	function attemptClose() {
		if (canClose && outstandingToolResults.size === 0) {
			if (finishChunk != null) toolResultsStreamController.enqueue(finishChunk);
			toolResultsStreamController.close();
		}
	}
	const forwardStream = new TransformStream({
		async transform(chunk, controller) {
			const chunkType = chunk.type;
			switch (chunkType) {
				case "stream-start":
				case "text-start":
				case "text-delta":
				case "text-end":
				case "reasoning-start":
				case "reasoning-delta":
				case "reasoning-end":
				case "tool-input-start":
				case "tool-input-delta":
				case "tool-input-end":
				case "source":
				case "response-metadata":
				case "error":
				case "raw":
					controller.enqueue(chunk);
					break;
				case "file":
					controller.enqueue({
						type: "file",
						file: new DefaultGeneratedFileWithType({
							data: chunk.data,
							mediaType: chunk.mediaType
						}),
						...chunk.providerMetadata != null ? { providerMetadata: chunk.providerMetadata } : {}
					});
					break;
				case "finish":
					finishChunk = {
						type: "finish",
						finishReason: chunk.finishReason.unified,
						rawFinishReason: chunk.finishReason.raw,
						usage: asLanguageModelUsage(chunk.usage),
						providerMetadata: chunk.providerMetadata
					};
					break;
				case "tool-approval-request": {
					const toolCall = toolCallsByToolCallId.get(chunk.toolCallId);
					if (toolCall == null) {
						toolResultsStreamController.enqueue({
							type: "error",
							error: new ToolCallNotFoundForApprovalError({
								toolCallId: chunk.toolCallId,
								approvalId: chunk.approvalId
							})
						});
						break;
					}
					controller.enqueue({
						type: "tool-approval-request",
						approvalId: chunk.approvalId,
						toolCall
					});
					break;
				}
				case "tool-call":
					try {
						const toolCall = await parseToolCall({
							toolCall: chunk,
							tools,
							repairToolCall,
							system,
							messages
						});
						toolCallsByToolCallId.set(toolCall.toolCallId, toolCall);
						controller.enqueue(toolCall);
						if (toolCall.invalid) {
							toolResultsStreamController.enqueue({
								type: "tool-error",
								toolCallId: toolCall.toolCallId,
								toolName: toolCall.toolName,
								input: toolCall.input,
								error: getErrorMessage(toolCall.error),
								dynamic: true,
								title: toolCall.title
							});
							break;
						}
						const tool2 = tools == null ? void 0 : tools[toolCall.toolName];
						if (tool2 == null) break;
						if (tool2.onInputAvailable != null) await tool2.onInputAvailable({
							input: toolCall.input,
							toolCallId: toolCall.toolCallId,
							messages,
							abortSignal,
							experimental_context
						});
						if (await isApprovalNeeded({
							tool: tool2,
							toolCall,
							messages,
							experimental_context
						})) {
							toolResultsStreamController.enqueue({
								type: "tool-approval-request",
								approvalId: generateId2(),
								toolCall
							});
							break;
						}
						toolInputs.set(toolCall.toolCallId, toolCall.input);
						if (tool2.execute != null && toolCall.providerExecuted !== true) {
							const toolExecutionId = generateId2();
							outstandingToolResults.add(toolExecutionId);
							executeToolCall({
								toolCall,
								tools,
								tracer,
								telemetry,
								messages,
								abortSignal,
								experimental_context,
								stepNumber,
								model,
								onToolCallStart,
								onToolCallFinish,
								onPreliminaryToolResult: (result) => {
									toolResultsStreamController.enqueue(result);
								}
							}).then((result) => {
								toolResultsStreamController.enqueue(result);
							}).catch((error) => {
								toolResultsStreamController.enqueue({
									type: "error",
									error
								});
							}).finally(() => {
								outstandingToolResults.delete(toolExecutionId);
								attemptClose();
							});
						}
					} catch (error) {
						toolResultsStreamController.enqueue({
							type: "error",
							error
						});
					}
					break;
				case "tool-result": {
					const toolName = chunk.toolName;
					if (chunk.isError) toolResultsStreamController.enqueue({
						type: "tool-error",
						toolCallId: chunk.toolCallId,
						toolName,
						input: toolInputs.get(chunk.toolCallId),
						providerExecuted: true,
						error: chunk.result,
						dynamic: chunk.dynamic,
						...chunk.providerMetadata != null ? { providerMetadata: chunk.providerMetadata } : {}
					});
					else controller.enqueue({
						type: "tool-result",
						toolCallId: chunk.toolCallId,
						toolName,
						input: toolInputs.get(chunk.toolCallId),
						output: chunk.result,
						providerExecuted: true,
						dynamic: chunk.dynamic,
						...chunk.providerMetadata != null ? { providerMetadata: chunk.providerMetadata } : {}
					});
					break;
				}
				default: throw new Error(`Unhandled chunk type: ${chunkType}`);
			}
		},
		flush() {
			canClose = true;
			attemptClose();
		}
	});
	return new ReadableStream({ async start(controller) {
		return Promise.all([generatorStream.pipeThrough(forwardStream).pipeTo(new WritableStream({
			write(chunk) {
				controller.enqueue(chunk);
			},
			close() {}
		})), toolResultsStream.pipeTo(new WritableStream({
			write(chunk) {
				controller.enqueue(chunk);
			},
			close() {
				controller.close();
			}
		}))]);
	} });
}
var originalGenerateId2 = createIdGenerator({
	prefix: "aitxt",
	size: 24
});
function streamText({ model, tools, toolChoice, system, prompt, messages, maxRetries, abortSignal, timeout, headers, stopWhen = stepCountIs(1), experimental_output, output = experimental_output, experimental_telemetry: telemetry, prepareStep, providerOptions, experimental_activeTools, activeTools = experimental_activeTools, experimental_repairToolCall: repairToolCall, experimental_transform: transform, experimental_download: download2, includeRawChunks = false, onChunk, onError = ({ error }) => {
	console.error(error);
}, onFinish, onAbort, onStepFinish, experimental_onStart: onStart, experimental_onStepStart: onStepStart, experimental_onToolCallStart: onToolCallStart, experimental_onToolCallFinish: onToolCallFinish, experimental_context, experimental_include: include, _internal: { now: now2 = now, generateId: generateId2 = originalGenerateId2 } = {}, ...settings }) {
	const totalTimeoutMs = getTotalTimeoutMs(timeout);
	const stepTimeoutMs = getStepTimeoutMs(timeout);
	const chunkTimeoutMs = getChunkTimeoutMs(timeout);
	const stepAbortController = stepTimeoutMs != null ? new AbortController() : void 0;
	const chunkAbortController = chunkTimeoutMs != null ? new AbortController() : void 0;
	return new DefaultStreamTextResult({
		model: resolveLanguageModel(model),
		telemetry,
		headers,
		settings,
		maxRetries,
		abortSignal: mergeAbortSignals(abortSignal, totalTimeoutMs != null ? AbortSignal.timeout(totalTimeoutMs) : void 0, stepAbortController == null ? void 0 : stepAbortController.signal, chunkAbortController == null ? void 0 : chunkAbortController.signal),
		stepTimeoutMs,
		stepAbortController,
		chunkTimeoutMs,
		chunkAbortController,
		system,
		prompt,
		messages,
		tools,
		toolChoice,
		transforms: asArray(transform),
		activeTools,
		repairToolCall,
		stopConditions: asArray(stopWhen),
		output,
		providerOptions,
		prepareStep,
		includeRawChunks,
		timeout,
		stopWhen,
		originalAbortSignal: abortSignal,
		onChunk,
		onError,
		onFinish,
		onAbort,
		onStepFinish,
		onStart,
		onStepStart,
		onToolCallStart,
		onToolCallFinish,
		now: now2,
		generateId: generateId2,
		experimental_context,
		download: download2,
		include
	});
}
function createOutputTransformStream(output) {
	let firstTextChunkId = void 0;
	let text2 = "";
	let textChunk = "";
	let textProviderMetadata = void 0;
	let lastPublishedValue = "";
	function publishTextChunk({ controller, partialOutput = void 0 }) {
		controller.enqueue({
			part: {
				type: "text-delta",
				id: firstTextChunkId,
				text: textChunk,
				providerMetadata: textProviderMetadata
			},
			partialOutput
		});
		textChunk = "";
	}
	return new TransformStream({ async transform(chunk, controller) {
		var _a21;
		if (chunk.type === "finish-step" && textChunk.length > 0) publishTextChunk({ controller });
		if (chunk.type !== "text-delta" && chunk.type !== "text-start" && chunk.type !== "text-end") {
			controller.enqueue({
				part: chunk,
				partialOutput: void 0
			});
			return;
		}
		if (firstTextChunkId == null) firstTextChunkId = chunk.id;
		else if (chunk.id !== firstTextChunkId) {
			controller.enqueue({
				part: chunk,
				partialOutput: void 0
			});
			return;
		}
		if (chunk.type === "text-start") {
			controller.enqueue({
				part: chunk,
				partialOutput: void 0
			});
			return;
		}
		if (chunk.type === "text-end") {
			if (textChunk.length > 0) publishTextChunk({ controller });
			controller.enqueue({
				part: chunk,
				partialOutput: void 0
			});
			return;
		}
		text2 += chunk.text;
		textChunk += chunk.text;
		textProviderMetadata = (_a21 = chunk.providerMetadata) != null ? _a21 : textProviderMetadata;
		const result = await output.parsePartialOutput({ text: text2 });
		if (result !== void 0) {
			const currentValue = typeof result.partial === "string" ? result.partial : JSON.stringify(result.partial);
			if (currentValue !== lastPublishedValue) {
				publishTextChunk({
					controller,
					partialOutput: result.partial
				});
				lastPublishedValue = currentValue;
			}
		}
	} });
}
var DefaultStreamTextResult = class {
	constructor({ model, telemetry, headers, settings, maxRetries: maxRetriesArg, abortSignal, stepTimeoutMs, stepAbortController, chunkTimeoutMs, chunkAbortController, system, prompt, messages, tools, toolChoice, transforms, activeTools, repairToolCall, stopConditions, output, providerOptions, prepareStep, includeRawChunks, now: now2, generateId: generateId2, timeout, stopWhen, originalAbortSignal, onChunk, onError, onFinish, onAbort, onStepFinish, onStart, onStepStart, onToolCallStart, onToolCallFinish, experimental_context, download: download2, include }) {
		this._totalUsage = new DelayedPromise();
		this._finishReason = new DelayedPromise();
		this._rawFinishReason = new DelayedPromise();
		this._steps = new DelayedPromise();
		this.outputSpecification = output;
		this.includeRawChunks = includeRawChunks;
		this.tools = tools;
		const globalTelemetry = getGlobalTelemetryIntegration()(telemetry == null ? void 0 : telemetry.integrations);
		let stepFinish;
		let recordedContent = [];
		const recordedResponseMessages = [];
		let recordedFinishReason = void 0;
		let recordedRawFinishReason = void 0;
		let recordedTotalUsage = void 0;
		let recordedRequest = {};
		let recordedWarnings = [];
		const recordedSteps = [];
		const pendingDeferredToolCalls = /* @__PURE__ */ new Map();
		let rootSpan;
		let activeTextContent = {};
		let activeReasoningContent = {};
		const eventProcessor = new TransformStream({
			async transform(chunk, controller) {
				var _a21, _b, _c, _d;
				controller.enqueue(chunk);
				const { part } = chunk;
				if (part.type === "text-delta" || part.type === "reasoning-delta" || part.type === "source" || part.type === "tool-call" || part.type === "tool-result" || part.type === "tool-input-start" || part.type === "tool-input-delta" || part.type === "raw") await (onChunk == null ? void 0 : onChunk({ chunk: part }));
				if (part.type === "error") await onError({ error: wrapGatewayError(part.error) });
				if (part.type === "text-start") {
					activeTextContent[part.id] = {
						type: "text",
						text: "",
						providerMetadata: part.providerMetadata
					};
					recordedContent.push(activeTextContent[part.id]);
				}
				if (part.type === "text-delta") {
					const activeText = activeTextContent[part.id];
					if (activeText == null) {
						controller.enqueue({
							part: {
								type: "error",
								error: `text part ${part.id} not found`
							},
							partialOutput: void 0
						});
						return;
					}
					activeText.text += part.text;
					activeText.providerMetadata = (_a21 = part.providerMetadata) != null ? _a21 : activeText.providerMetadata;
				}
				if (part.type === "text-end") {
					const activeText = activeTextContent[part.id];
					if (activeText == null) {
						controller.enqueue({
							part: {
								type: "error",
								error: `text part ${part.id} not found`
							},
							partialOutput: void 0
						});
						return;
					}
					activeText.providerMetadata = (_b = part.providerMetadata) != null ? _b : activeText.providerMetadata;
					delete activeTextContent[part.id];
				}
				if (part.type === "reasoning-start") {
					activeReasoningContent[part.id] = {
						type: "reasoning",
						text: "",
						providerMetadata: part.providerMetadata
					};
					recordedContent.push(activeReasoningContent[part.id]);
				}
				if (part.type === "reasoning-delta") {
					const activeReasoning = activeReasoningContent[part.id];
					if (activeReasoning == null) {
						controller.enqueue({
							part: {
								type: "error",
								error: `reasoning part ${part.id} not found`
							},
							partialOutput: void 0
						});
						return;
					}
					activeReasoning.text += part.text;
					activeReasoning.providerMetadata = (_c = part.providerMetadata) != null ? _c : activeReasoning.providerMetadata;
				}
				if (part.type === "reasoning-end") {
					const activeReasoning = activeReasoningContent[part.id];
					if (activeReasoning == null) {
						controller.enqueue({
							part: {
								type: "error",
								error: `reasoning part ${part.id} not found`
							},
							partialOutput: void 0
						});
						return;
					}
					activeReasoning.providerMetadata = (_d = part.providerMetadata) != null ? _d : activeReasoning.providerMetadata;
					delete activeReasoningContent[part.id];
				}
				if (part.type === "file") recordedContent.push({
					type: "file",
					file: part.file,
					...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {}
				});
				if (part.type === "source") recordedContent.push(part);
				if (part.type === "tool-call") recordedContent.push(part);
				if (part.type === "tool-result" && !part.preliminary) recordedContent.push(part);
				if (part.type === "tool-approval-request") recordedContent.push(part);
				if (part.type === "tool-error") recordedContent.push(part);
				if (part.type === "start-step") {
					recordedContent = [];
					activeReasoningContent = {};
					activeTextContent = {};
					recordedRequest = part.request;
					recordedWarnings = part.warnings;
				}
				if (part.type === "finish-step") {
					const stepMessages = await toResponseMessages({
						content: recordedContent,
						tools
					});
					const currentStepResult = new DefaultStepResult({
						stepNumber: recordedSteps.length,
						model: modelInfo,
						...callbackTelemetryProps,
						experimental_context,
						content: recordedContent,
						finishReason: part.finishReason,
						rawFinishReason: part.rawFinishReason,
						usage: part.usage,
						warnings: recordedWarnings,
						request: recordedRequest,
						response: {
							...part.response,
							messages: [...recordedResponseMessages, ...stepMessages]
						},
						providerMetadata: part.providerMetadata
					});
					await notify({
						event: currentStepResult,
						callbacks: [onStepFinish, globalTelemetry.onStepFinish]
					});
					logWarnings({
						warnings: recordedWarnings,
						provider: modelInfo.provider,
						model: modelInfo.modelId
					});
					recordedSteps.push(currentStepResult);
					recordedResponseMessages.push(...stepMessages);
					stepFinish.resolve();
				}
				if (part.type === "finish") {
					recordedTotalUsage = part.totalUsage;
					recordedFinishReason = part.finishReason;
					recordedRawFinishReason = part.rawFinishReason;
				}
			},
			async flush(controller) {
				var _a21, _b, _c, _d, _e, _f, _g;
				try {
					if (recordedSteps.length === 0) {
						const error = (abortSignal == null ? void 0 : abortSignal.aborted) ? abortSignal.reason : new NoOutputGeneratedError({ message: "No output generated. Check the stream for errors." });
						self._finishReason.reject(error);
						self._rawFinishReason.reject(error);
						self._totalUsage.reject(error);
						self._steps.reject(error);
						return;
					}
					const finishReason = recordedFinishReason != null ? recordedFinishReason : "other";
					const totalUsage = recordedTotalUsage != null ? recordedTotalUsage : createNullLanguageModelUsage();
					self._finishReason.resolve(finishReason);
					self._rawFinishReason.resolve(recordedRawFinishReason);
					self._totalUsage.resolve(totalUsage);
					self._steps.resolve(recordedSteps);
					const finalStep = recordedSteps[recordedSteps.length - 1];
					await notify({
						event: {
							stepNumber: finalStep.stepNumber,
							model: finalStep.model,
							functionId: finalStep.functionId,
							metadata: finalStep.metadata,
							experimental_context: finalStep.experimental_context,
							finishReason: finalStep.finishReason,
							rawFinishReason: finalStep.rawFinishReason,
							totalUsage,
							usage: finalStep.usage,
							content: finalStep.content,
							text: finalStep.text,
							reasoningText: finalStep.reasoningText,
							reasoning: finalStep.reasoning,
							files: finalStep.files,
							sources: finalStep.sources,
							toolCalls: finalStep.toolCalls,
							staticToolCalls: finalStep.staticToolCalls,
							dynamicToolCalls: finalStep.dynamicToolCalls,
							toolResults: finalStep.toolResults,
							staticToolResults: finalStep.staticToolResults,
							dynamicToolResults: finalStep.dynamicToolResults,
							request: finalStep.request,
							response: finalStep.response,
							warnings: finalStep.warnings,
							providerMetadata: finalStep.providerMetadata,
							steps: recordedSteps
						},
						callbacks: [onFinish, globalTelemetry.onFinish]
					});
					rootSpan.setAttributes(await selectTelemetryAttributes({
						telemetry,
						attributes: {
							"ai.response.finishReason": finishReason,
							"ai.response.text": { output: () => finalStep.text },
							"ai.response.reasoning": { output: () => finalStep.reasoningText },
							"ai.response.toolCalls": { output: () => {
								var _a22;
								return ((_a22 = finalStep.toolCalls) == null ? void 0 : _a22.length) ? JSON.stringify(finalStep.toolCalls) : void 0;
							} },
							"ai.response.providerMetadata": JSON.stringify(finalStep.providerMetadata),
							"ai.usage.inputTokens": totalUsage.inputTokens,
							"ai.usage.inputTokenDetails.noCacheTokens": (_a21 = totalUsage.inputTokenDetails) == null ? void 0 : _a21.noCacheTokens,
							"ai.usage.inputTokenDetails.cacheReadTokens": (_b = totalUsage.inputTokenDetails) == null ? void 0 : _b.cacheReadTokens,
							"ai.usage.inputTokenDetails.cacheWriteTokens": (_c = totalUsage.inputTokenDetails) == null ? void 0 : _c.cacheWriteTokens,
							"ai.usage.outputTokens": totalUsage.outputTokens,
							"ai.usage.outputTokenDetails.textTokens": (_d = totalUsage.outputTokenDetails) == null ? void 0 : _d.textTokens,
							"ai.usage.outputTokenDetails.reasoningTokens": (_e = totalUsage.outputTokenDetails) == null ? void 0 : _e.reasoningTokens,
							"ai.usage.totalTokens": totalUsage.totalTokens,
							"ai.usage.reasoningTokens": (_f = totalUsage.outputTokenDetails) == null ? void 0 : _f.reasoningTokens,
							"ai.usage.cachedInputTokens": (_g = totalUsage.inputTokenDetails) == null ? void 0 : _g.cacheReadTokens
						}
					}));
				} catch (error) {
					controller.error(error);
				} finally {
					rootSpan.end();
				}
			}
		});
		const stitchableStream = createStitchableStream();
		this.addStream = stitchableStream.addStream;
		this.closeStream = stitchableStream.close;
		const reader = stitchableStream.stream.getReader();
		let stream = new ReadableStream({
			async start(controller) {
				controller.enqueue({ type: "start" });
			},
			async pull(controller) {
				function abort() {
					onAbort?.({ steps: recordedSteps });
					controller.enqueue({
						type: "abort",
						...(abortSignal == null ? void 0 : abortSignal.reason) !== void 0 ? { reason: getErrorMessage$1(abortSignal.reason) } : {}
					});
					controller.close();
				}
				try {
					const { done, value } = await reader.read();
					if (done) {
						controller.close();
						return;
					}
					if (abortSignal == null ? void 0 : abortSignal.aborted) {
						abort();
						return;
					}
					controller.enqueue(value);
				} catch (error) {
					if (isAbortError(error) && (abortSignal == null ? void 0 : abortSignal.aborted)) abort();
					else controller.error(error);
				}
			},
			cancel(reason) {
				return stitchableStream.stream.cancel(reason);
			}
		});
		for (const transform of transforms) stream = stream.pipeThrough(transform({
			tools,
			stopStream() {
				stitchableStream.terminate();
			}
		}));
		this.baseStream = stream.pipeThrough(createOutputTransformStream(output != null ? output : text())).pipeThrough(eventProcessor);
		const { maxRetries, retry } = prepareRetries({
			maxRetries: maxRetriesArg,
			abortSignal
		});
		const tracer = getTracer(telemetry);
		const callSettings = prepareCallSettings(settings);
		const baseTelemetryAttributes = getBaseTelemetryAttributes({
			model,
			telemetry,
			headers,
			settings: {
				...callSettings,
				maxRetries
			}
		});
		const self = this;
		const modelInfo = {
			provider: model.provider,
			modelId: model.modelId
		};
		const callbackTelemetryProps = {
			functionId: telemetry == null ? void 0 : telemetry.functionId,
			metadata: telemetry == null ? void 0 : telemetry.metadata
		};
		recordSpan({
			name: "ai.streamText",
			attributes: selectTelemetryAttributes({
				telemetry,
				attributes: {
					...assembleOperationName({
						operationId: "ai.streamText",
						telemetry
					}),
					...baseTelemetryAttributes,
					"ai.prompt": { input: () => JSON.stringify({
						system,
						prompt,
						messages
					}) }
				}
			}),
			tracer,
			endWhenDone: false,
			fn: async (rootSpanArg) => {
				rootSpan = rootSpanArg;
				const initialPrompt = await standardizePrompt({
					system,
					prompt,
					messages
				});
				await notify({
					event: {
						model: modelInfo,
						system,
						prompt,
						messages,
						tools,
						toolChoice,
						activeTools,
						maxOutputTokens: callSettings.maxOutputTokens,
						temperature: callSettings.temperature,
						topP: callSettings.topP,
						topK: callSettings.topK,
						presencePenalty: callSettings.presencePenalty,
						frequencyPenalty: callSettings.frequencyPenalty,
						stopSequences: callSettings.stopSequences,
						seed: callSettings.seed,
						maxRetries,
						timeout,
						headers,
						providerOptions,
						stopWhen,
						output,
						abortSignal: originalAbortSignal,
						include,
						...callbackTelemetryProps,
						experimental_context
					},
					callbacks: [onStart, globalTelemetry.onStart]
				});
				const initialMessages = initialPrompt.messages;
				const initialResponseMessages = [];
				const { approvedToolApprovals, deniedToolApprovals } = collectToolApprovals({ messages: initialMessages });
				if (deniedToolApprovals.length > 0 || approvedToolApprovals.length > 0) {
					const localApprovedToolApprovals = approvedToolApprovals.filter((toolApproval) => !toolApproval.toolCall.providerExecuted);
					const localDeniedToolApprovals = deniedToolApprovals.filter((toolApproval) => !toolApproval.toolCall.providerExecuted);
					const deniedProviderExecutedToolApprovals = deniedToolApprovals.filter((toolApproval) => toolApproval.toolCall.providerExecuted);
					let toolExecutionStepStreamController;
					const toolExecutionStepStream = new ReadableStream({ start(controller) {
						toolExecutionStepStreamController = controller;
					} });
					self.addStream(toolExecutionStepStream);
					try {
						for (const toolApproval of [...localDeniedToolApprovals, ...deniedProviderExecutedToolApprovals]) toolExecutionStepStreamController?.enqueue({
							type: "tool-output-denied",
							toolCallId: toolApproval.toolCall.toolCallId,
							toolName: toolApproval.toolCall.toolName
						});
						const toolOutputs = [];
						await Promise.all(localApprovedToolApprovals.map(async (toolApproval) => {
							const result = await executeToolCall({
								toolCall: toolApproval.toolCall,
								tools,
								tracer,
								telemetry,
								messages: initialMessages,
								abortSignal,
								experimental_context,
								stepNumber: recordedSteps.length,
								model: modelInfo,
								onToolCallStart: [onToolCallStart, globalTelemetry.onToolCallStart],
								onToolCallFinish: [onToolCallFinish, globalTelemetry.onToolCallFinish],
								onPreliminaryToolResult: (result2) => {
									toolExecutionStepStreamController?.enqueue(result2);
								}
							});
							if (result != null) {
								toolExecutionStepStreamController?.enqueue(result);
								toolOutputs.push(result);
							}
						}));
						if (toolOutputs.length > 0 || localDeniedToolApprovals.length > 0) {
							const localToolContent = [];
							for (const output2 of toolOutputs) localToolContent.push({
								type: "tool-result",
								toolCallId: output2.toolCallId,
								toolName: output2.toolName,
								output: await createToolModelOutput({
									toolCallId: output2.toolCallId,
									input: output2.input,
									tool: tools == null ? void 0 : tools[output2.toolName],
									output: output2.type === "tool-result" ? output2.output : output2.error,
									errorMode: output2.type === "tool-error" ? "text" : "none"
								})
							});
							for (const toolApproval of localDeniedToolApprovals) localToolContent.push({
								type: "tool-result",
								toolCallId: toolApproval.toolCall.toolCallId,
								toolName: toolApproval.toolCall.toolName,
								output: {
									type: "execution-denied",
									reason: toolApproval.approvalResponse.reason
								}
							});
							initialResponseMessages.push({
								role: "tool",
								content: localToolContent
							});
						}
					} finally {
						toolExecutionStepStreamController?.close();
					}
				}
				recordedResponseMessages.push(...initialResponseMessages);
				async function streamStep({ currentStep, responseMessages, usage }) {
					var _a21, _b, _c, _d, _e, _f, _g, _h, _i;
					const includeRawChunks2 = self.includeRawChunks;
					const stepTimeoutId = stepTimeoutMs != null ? setTimeout(() => stepAbortController.abort(), stepTimeoutMs) : void 0;
					let chunkTimeoutId = void 0;
					function resetChunkTimeout() {
						if (chunkTimeoutMs != null) {
							if (chunkTimeoutId != null) clearTimeout(chunkTimeoutId);
							chunkTimeoutId = setTimeout(() => chunkAbortController.abort(), chunkTimeoutMs);
						}
					}
					function clearChunkTimeout() {
						if (chunkTimeoutId != null) {
							clearTimeout(chunkTimeoutId);
							chunkTimeoutId = void 0;
						}
					}
					function clearStepTimeout() {
						if (stepTimeoutId != null) clearTimeout(stepTimeoutId);
					}
					try {
						stepFinish = new DelayedPromise();
						const stepInputMessages = [...initialMessages, ...responseMessages];
						const prepareStepResult = await (prepareStep == null ? void 0 : prepareStep({
							model,
							steps: recordedSteps,
							stepNumber: recordedSteps.length,
							messages: stepInputMessages,
							experimental_context
						}));
						const stepModel = resolveLanguageModel((_a21 = prepareStepResult == null ? void 0 : prepareStepResult.model) != null ? _a21 : model);
						const stepModelInfo = {
							provider: stepModel.provider,
							modelId: stepModel.modelId
						};
						const promptMessages = await convertToLanguageModelPrompt({
							prompt: {
								system: (_b = prepareStepResult == null ? void 0 : prepareStepResult.system) != null ? _b : initialPrompt.system,
								messages: (_c = prepareStepResult == null ? void 0 : prepareStepResult.messages) != null ? _c : stepInputMessages
							},
							supportedUrls: await stepModel.supportedUrls,
							download: download2
						});
						const stepActiveTools = (_d = prepareStepResult == null ? void 0 : prepareStepResult.activeTools) != null ? _d : activeTools;
						const { toolChoice: stepToolChoice, tools: stepTools } = await prepareToolsAndToolChoice({
							tools,
							toolChoice: (_e = prepareStepResult == null ? void 0 : prepareStepResult.toolChoice) != null ? _e : toolChoice,
							activeTools: stepActiveTools
						});
						experimental_context = (_f = prepareStepResult == null ? void 0 : prepareStepResult.experimental_context) != null ? _f : experimental_context;
						const stepMessages = (_g = prepareStepResult == null ? void 0 : prepareStepResult.messages) != null ? _g : stepInputMessages;
						const stepSystem = (_h = prepareStepResult == null ? void 0 : prepareStepResult.system) != null ? _h : initialPrompt.system;
						const stepProviderOptions = mergeObjects(providerOptions, prepareStepResult == null ? void 0 : prepareStepResult.providerOptions);
						await notify({
							event: {
								stepNumber: recordedSteps.length,
								model: stepModelInfo,
								system: stepSystem,
								messages: stepMessages,
								tools,
								toolChoice: stepToolChoice,
								activeTools: stepActiveTools,
								steps: [...recordedSteps],
								providerOptions: stepProviderOptions,
								timeout,
								headers,
								stopWhen,
								output,
								abortSignal: originalAbortSignal,
								include,
								...callbackTelemetryProps,
								experimental_context
							},
							callbacks: [onStepStart, globalTelemetry.onStepStart]
						});
						const { result: { stream: stream2, response, request }, doStreamSpan, startTimestampMs } = await retry(() => recordSpan({
							name: "ai.streamText.doStream",
							attributes: selectTelemetryAttributes({
								telemetry,
								attributes: {
									...assembleOperationName({
										operationId: "ai.streamText.doStream",
										telemetry
									}),
									...baseTelemetryAttributes,
									"ai.model.provider": stepModel.provider,
									"ai.model.id": stepModel.modelId,
									"ai.prompt.messages": { input: () => stringifyForTelemetry(promptMessages) },
									"ai.prompt.tools": { input: () => stepTools == null ? void 0 : stepTools.map((tool2) => JSON.stringify(tool2)) },
									"ai.prompt.toolChoice": { input: () => stepToolChoice != null ? JSON.stringify(stepToolChoice) : void 0 },
									"gen_ai.system": stepModel.provider,
									"gen_ai.request.model": stepModel.modelId,
									"gen_ai.request.frequency_penalty": callSettings.frequencyPenalty,
									"gen_ai.request.max_tokens": callSettings.maxOutputTokens,
									"gen_ai.request.presence_penalty": callSettings.presencePenalty,
									"gen_ai.request.stop_sequences": callSettings.stopSequences,
									"gen_ai.request.temperature": callSettings.temperature,
									"gen_ai.request.top_k": callSettings.topK,
									"gen_ai.request.top_p": callSettings.topP
								}
							}),
							tracer,
							endWhenDone: false,
							fn: async (doStreamSpan2) => ({
								startTimestampMs: now2(),
								doStreamSpan: doStreamSpan2,
								result: await stepModel.doStream({
									...callSettings,
									tools: stepTools,
									toolChoice: stepToolChoice,
									responseFormat: await (output == null ? void 0 : output.responseFormat),
									prompt: promptMessages,
									providerOptions: stepProviderOptions,
									abortSignal,
									headers,
									includeRawChunks: includeRawChunks2
								})
							})
						}));
						const streamWithToolResults = runToolsTransformation({
							tools,
							generatorStream: stream2,
							tracer,
							telemetry,
							system,
							messages: stepInputMessages,
							repairToolCall,
							abortSignal,
							experimental_context,
							generateId: generateId2,
							stepNumber: recordedSteps.length,
							model: stepModelInfo,
							onToolCallStart: [onToolCallStart, globalTelemetry.onToolCallStart],
							onToolCallFinish: [onToolCallFinish, globalTelemetry.onToolCallFinish]
						});
						const stepRequest = ((_i = include == null ? void 0 : include.requestBody) != null ? _i : true) ? request != null ? request : {} : {
							...request,
							body: void 0
						};
						const stepToolCalls = [];
						const stepToolOutputs = [];
						let warnings;
						const activeToolCallToolNames = {};
						let stepFinishReason = "other";
						let stepRawFinishReason = void 0;
						let stepUsage = createNullLanguageModelUsage();
						let stepProviderMetadata;
						let stepFirstChunk = true;
						let stepResponse = {
							id: generateId2(),
							timestamp: /* @__PURE__ */ new Date(),
							modelId: modelInfo.modelId
						};
						let activeText = "";
						self.addStream(streamWithToolResults.pipeThrough(new TransformStream({
							async transform(chunk, controller) {
								var _a22, _b2, _c2, _d2, _e2;
								resetChunkTimeout();
								if (chunk.type === "stream-start") {
									warnings = chunk.warnings;
									return;
								}
								if (stepFirstChunk) {
									const msToFirstChunk = now2() - startTimestampMs;
									stepFirstChunk = false;
									doStreamSpan.addEvent("ai.stream.firstChunk", { "ai.response.msToFirstChunk": msToFirstChunk });
									doStreamSpan.setAttributes({ "ai.response.msToFirstChunk": msToFirstChunk });
									controller.enqueue({
										type: "start-step",
										request: stepRequest,
										warnings: warnings != null ? warnings : []
									});
								}
								const chunkType = chunk.type;
								switch (chunkType) {
									case "tool-approval-request":
									case "text-start":
									case "text-end":
										controller.enqueue(chunk);
										break;
									case "text-delta":
										if (chunk.delta.length > 0) {
											controller.enqueue({
												type: "text-delta",
												id: chunk.id,
												text: chunk.delta,
												providerMetadata: chunk.providerMetadata
											});
											activeText += chunk.delta;
										}
										break;
									case "reasoning-start":
									case "reasoning-end":
										controller.enqueue(chunk);
										break;
									case "reasoning-delta":
										controller.enqueue({
											type: "reasoning-delta",
											id: chunk.id,
											text: chunk.delta,
											providerMetadata: chunk.providerMetadata
										});
										break;
									case "tool-call":
										controller.enqueue(chunk);
										stepToolCalls.push(chunk);
										break;
									case "tool-result":
										controller.enqueue(chunk);
										if (!chunk.preliminary) stepToolOutputs.push(chunk);
										break;
									case "tool-error":
										controller.enqueue(chunk);
										stepToolOutputs.push(chunk);
										break;
									case "response-metadata":
										stepResponse = {
											id: (_a22 = chunk.id) != null ? _a22 : stepResponse.id,
											timestamp: (_b2 = chunk.timestamp) != null ? _b2 : stepResponse.timestamp,
											modelId: (_c2 = chunk.modelId) != null ? _c2 : stepResponse.modelId
										};
										break;
									case "finish": {
										stepUsage = chunk.usage;
										stepFinishReason = chunk.finishReason;
										stepRawFinishReason = chunk.rawFinishReason;
										stepProviderMetadata = chunk.providerMetadata;
										const msToFinish = now2() - startTimestampMs;
										doStreamSpan.addEvent("ai.stream.finish");
										doStreamSpan.setAttributes({
											"ai.response.msToFinish": msToFinish,
											"ai.response.avgOutputTokensPerSecond": 1e3 * ((_d2 = stepUsage.outputTokens) != null ? _d2 : 0) / msToFinish
										});
										break;
									}
									case "file":
										controller.enqueue(chunk);
										break;
									case "source":
										controller.enqueue(chunk);
										break;
									case "tool-input-start": {
										activeToolCallToolNames[chunk.id] = chunk.toolName;
										const tool2 = tools == null ? void 0 : tools[chunk.toolName];
										if ((tool2 == null ? void 0 : tool2.onInputStart) != null) await tool2.onInputStart({
											toolCallId: chunk.id,
											messages: stepInputMessages,
											abortSignal,
											experimental_context
										});
										controller.enqueue({
											...chunk,
											dynamic: (_e2 = chunk.dynamic) != null ? _e2 : (tool2 == null ? void 0 : tool2.type) === "dynamic",
											title: tool2 == null ? void 0 : tool2.title
										});
										break;
									}
									case "tool-input-end":
										delete activeToolCallToolNames[chunk.id];
										controller.enqueue(chunk);
										break;
									case "tool-input-delta": {
										const toolName = activeToolCallToolNames[chunk.id];
										const tool2 = tools == null ? void 0 : tools[toolName];
										if ((tool2 == null ? void 0 : tool2.onInputDelta) != null) await tool2.onInputDelta({
											inputTextDelta: chunk.delta,
											toolCallId: chunk.id,
											messages: stepInputMessages,
											abortSignal,
											experimental_context
										});
										controller.enqueue(chunk);
										break;
									}
									case "error":
										controller.enqueue(chunk);
										stepFinishReason = "error";
										break;
									case "raw":
										if (includeRawChunks2) controller.enqueue(chunk);
										break;
									default: throw new Error(`Unknown chunk type: ${chunkType}`);
								}
							},
							async flush(controller) {
								var _a22, _b2, _c2, _d2, _e2, _f2, _g2;
								const stepToolCallsJson = stepToolCalls.length > 0 ? JSON.stringify(stepToolCalls) : void 0;
								try {
									doStreamSpan.setAttributes(await selectTelemetryAttributes({
										telemetry,
										attributes: {
											"ai.response.finishReason": stepFinishReason,
											"ai.response.toolCalls": { output: () => stepToolCallsJson },
											"ai.response.id": stepResponse.id,
											"ai.response.model": stepResponse.modelId,
											"ai.response.timestamp": stepResponse.timestamp.toISOString(),
											"ai.usage.inputTokens": stepUsage.inputTokens,
											"ai.usage.inputTokenDetails.noCacheTokens": (_a22 = stepUsage.inputTokenDetails) == null ? void 0 : _a22.noCacheTokens,
											"ai.usage.inputTokenDetails.cacheReadTokens": (_b2 = stepUsage.inputTokenDetails) == null ? void 0 : _b2.cacheReadTokens,
											"ai.usage.inputTokenDetails.cacheWriteTokens": (_c2 = stepUsage.inputTokenDetails) == null ? void 0 : _c2.cacheWriteTokens,
											"ai.usage.outputTokens": stepUsage.outputTokens,
											"ai.usage.outputTokenDetails.textTokens": (_d2 = stepUsage.outputTokenDetails) == null ? void 0 : _d2.textTokens,
											"ai.usage.outputTokenDetails.reasoningTokens": (_e2 = stepUsage.outputTokenDetails) == null ? void 0 : _e2.reasoningTokens,
											"ai.usage.totalTokens": stepUsage.totalTokens,
											"ai.usage.reasoningTokens": (_f2 = stepUsage.outputTokenDetails) == null ? void 0 : _f2.reasoningTokens,
											"ai.usage.cachedInputTokens": (_g2 = stepUsage.inputTokenDetails) == null ? void 0 : _g2.cacheReadTokens,
											"gen_ai.response.finish_reasons": [stepFinishReason],
											"gen_ai.response.id": stepResponse.id,
											"gen_ai.response.model": stepResponse.modelId,
											"gen_ai.usage.input_tokens": stepUsage.inputTokens,
											"gen_ai.usage.output_tokens": stepUsage.outputTokens
										}
									}));
								} catch (error) {}
								controller.enqueue({
									type: "finish-step",
									finishReason: stepFinishReason,
									rawFinishReason: stepRawFinishReason,
									usage: stepUsage,
									providerMetadata: stepProviderMetadata,
									response: {
										...stepResponse,
										headers: response == null ? void 0 : response.headers
									}
								});
								const combinedUsage = addLanguageModelUsage(usage, stepUsage);
								await stepFinish.promise;
								const processedStep = recordedSteps[recordedSteps.length - 1];
								try {
									doStreamSpan.setAttributes(await selectTelemetryAttributes({
										telemetry,
										attributes: {
											"ai.response.text": { output: () => processedStep.text },
											"ai.response.reasoning": { output: () => processedStep.reasoningText },
											"ai.response.providerMetadata": JSON.stringify(processedStep.providerMetadata)
										}
									}));
								} catch (error) {} finally {
									doStreamSpan.end();
								}
								const clientToolCalls = stepToolCalls.filter((toolCall) => toolCall.providerExecuted !== true);
								const clientToolOutputs = stepToolOutputs.filter((toolOutput) => toolOutput.providerExecuted !== true);
								for (const toolCall of stepToolCalls) {
									if (toolCall.providerExecuted !== true) continue;
									const tool2 = tools == null ? void 0 : tools[toolCall.toolName];
									if ((tool2 == null ? void 0 : tool2.type) === "provider" && tool2.supportsDeferredResults) {
										if (!stepToolOutputs.some((output2) => (output2.type === "tool-result" || output2.type === "tool-error") && output2.toolCallId === toolCall.toolCallId)) pendingDeferredToolCalls.set(toolCall.toolCallId, { toolName: toolCall.toolName });
									}
								}
								for (const output2 of stepToolOutputs) if (output2.type === "tool-result" || output2.type === "tool-error") pendingDeferredToolCalls.delete(output2.toolCallId);
								clearStepTimeout();
								clearChunkTimeout();
								if ((clientToolCalls.length > 0 && clientToolOutputs.length === clientToolCalls.length || pendingDeferredToolCalls.size > 0) && !await isStopConditionMet({
									stopConditions,
									steps: recordedSteps
								})) {
									responseMessages.push(...await toResponseMessages({
										content: recordedSteps[recordedSteps.length - 1].content,
										tools
									}));
									try {
										await streamStep({
											currentStep: currentStep + 1,
											responseMessages,
											usage: combinedUsage
										});
									} catch (error) {
										controller.enqueue({
											type: "error",
											error
										});
										self.closeStream();
									}
								} else {
									controller.enqueue({
										type: "finish",
										finishReason: stepFinishReason,
										rawFinishReason: stepRawFinishReason,
										totalUsage: combinedUsage
									});
									self.closeStream();
								}
							}
						})));
					} finally {
						clearStepTimeout();
						clearChunkTimeout();
					}
				}
				await streamStep({
					currentStep: 0,
					responseMessages: initialResponseMessages,
					usage: createNullLanguageModelUsage()
				});
			}
		}).catch((error) => {
			self.addStream(new ReadableStream({ start(controller) {
				controller.enqueue({
					type: "error",
					error
				});
				controller.close();
			} }));
			self.closeStream();
		});
	}
	get steps() {
		this.consumeStream();
		return this._steps.promise;
	}
	get finalStep() {
		return this.steps.then((steps) => steps[steps.length - 1]);
	}
	get content() {
		return this.finalStep.then((step) => step.content);
	}
	get warnings() {
		return this.finalStep.then((step) => step.warnings);
	}
	get providerMetadata() {
		return this.finalStep.then((step) => step.providerMetadata);
	}
	get text() {
		return this.finalStep.then((step) => step.text);
	}
	get reasoningText() {
		return this.finalStep.then((step) => step.reasoningText);
	}
	get reasoning() {
		return this.finalStep.then((step) => step.reasoning);
	}
	get sources() {
		return this.finalStep.then((step) => step.sources);
	}
	get files() {
		return this.finalStep.then((step) => step.files);
	}
	get toolCalls() {
		return this.finalStep.then((step) => step.toolCalls);
	}
	get staticToolCalls() {
		return this.finalStep.then((step) => step.staticToolCalls);
	}
	get dynamicToolCalls() {
		return this.finalStep.then((step) => step.dynamicToolCalls);
	}
	get toolResults() {
		return this.finalStep.then((step) => step.toolResults);
	}
	get staticToolResults() {
		return this.finalStep.then((step) => step.staticToolResults);
	}
	get dynamicToolResults() {
		return this.finalStep.then((step) => step.dynamicToolResults);
	}
	get usage() {
		return this.finalStep.then((step) => step.usage);
	}
	get request() {
		return this.finalStep.then((step) => step.request);
	}
	get response() {
		return this.finalStep.then((step) => step.response);
	}
	get totalUsage() {
		this.consumeStream();
		return this._totalUsage.promise;
	}
	get finishReason() {
		this.consumeStream();
		return this._finishReason.promise;
	}
	get rawFinishReason() {
		this.consumeStream();
		return this._rawFinishReason.promise;
	}
	/**
	* Split out a new stream from the original stream.
	* The original stream is replaced to allow for further splitting,
	* since we do not know how many times the stream will be split.
	*
	* Note: this leads to buffering the stream content on the server.
	* However, the LLM results are expected to be small enough to not cause issues.
	*/
	teeStream() {
		const [stream1, stream2] = this.baseStream.tee();
		this.baseStream = stream2;
		return stream1;
	}
	get textStream() {
		return createAsyncIterableStream(this.teeStream().pipeThrough(new TransformStream({ transform({ part }, controller) {
			if (part.type === "text-delta") controller.enqueue(part.text);
		} })));
	}
	get fullStream() {
		return createAsyncIterableStream(this.teeStream().pipeThrough(new TransformStream({ transform({ part }, controller) {
			controller.enqueue(part);
		} })));
	}
	async consumeStream(options) {
		var _a21;
		try {
			await consumeStream({
				stream: this.fullStream,
				onError: options == null ? void 0 : options.onError
			});
		} catch (error) {
			(_a21 = options == null ? void 0 : options.onError) == null || _a21.call(options, error);
		}
	}
	get experimental_partialOutputStream() {
		return this.partialOutputStream;
	}
	get partialOutputStream() {
		return createAsyncIterableStream(this.teeStream().pipeThrough(new TransformStream({ transform({ partialOutput }, controller) {
			if (partialOutput != null) controller.enqueue(partialOutput);
		} })));
	}
	get elementStream() {
		var _a21, _b, _c;
		const transform = (_a21 = this.outputSpecification) == null ? void 0 : _a21.createElementStreamTransform();
		if (transform == null) throw new UnsupportedFunctionalityError({ functionality: `element streams in ${(_c = (_b = this.outputSpecification) == null ? void 0 : _b.name) != null ? _c : "text"} mode` });
		return createAsyncIterableStream(this.teeStream().pipeThrough(transform));
	}
	get output() {
		return this.finalStep.then((step) => {
			var _a21;
			return ((_a21 = this.outputSpecification) != null ? _a21 : text()).parseCompleteOutput({ text: step.text }, {
				response: step.response,
				usage: step.usage,
				finishReason: step.finishReason
			});
		});
	}
	toUIMessageStream({ originalMessages, generateMessageId, onFinish, messageMetadata, sendReasoning = true, sendSources = false, sendStart = true, sendFinish = true, onError = getErrorMessage$1 } = {}) {
		const responseMessageId = generateMessageId != null ? getResponseUIMessageId({
			originalMessages,
			responseMessageId: generateMessageId
		}) : void 0;
		const isDynamic = (part) => {
			var _a21;
			const tool2 = (_a21 = this.tools) == null ? void 0 : _a21[part.toolName];
			if (tool2 == null) return part.dynamic;
			return (tool2 == null ? void 0 : tool2.type) === "dynamic" ? true : void 0;
		};
		return createAsyncIterableStream(handleUIMessageStreamFinish({
			stream: this.fullStream.pipeThrough(new TransformStream({ transform: async (part, controller) => {
				const messageMetadataValue = messageMetadata == null ? void 0 : messageMetadata({ part });
				const partType = part.type;
				switch (partType) {
					case "text-start":
						controller.enqueue({
							type: "text-start",
							id: part.id,
							...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {}
						});
						break;
					case "text-delta":
						controller.enqueue({
							type: "text-delta",
							id: part.id,
							delta: part.text,
							...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {}
						});
						break;
					case "text-end":
						controller.enqueue({
							type: "text-end",
							id: part.id,
							...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {}
						});
						break;
					case "reasoning-start":
						controller.enqueue({
							type: "reasoning-start",
							id: part.id,
							...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {}
						});
						break;
					case "reasoning-delta":
						if (sendReasoning) controller.enqueue({
							type: "reasoning-delta",
							id: part.id,
							delta: part.text,
							...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {}
						});
						break;
					case "reasoning-end":
						controller.enqueue({
							type: "reasoning-end",
							id: part.id,
							...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {}
						});
						break;
					case "file":
						controller.enqueue({
							type: "file",
							mediaType: part.file.mediaType,
							url: `data:${part.file.mediaType};base64,${part.file.base64}`,
							...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {}
						});
						break;
					case "source":
						if (sendSources && part.sourceType === "url") controller.enqueue({
							type: "source-url",
							sourceId: part.id,
							url: part.url,
							title: part.title,
							...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {}
						});
						if (sendSources && part.sourceType === "document") controller.enqueue({
							type: "source-document",
							sourceId: part.id,
							mediaType: part.mediaType,
							title: part.title,
							filename: part.filename,
							...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {}
						});
						break;
					case "tool-input-start": {
						const dynamic = isDynamic(part);
						controller.enqueue({
							type: "tool-input-start",
							toolCallId: part.id,
							toolName: part.toolName,
							...part.providerExecuted != null ? { providerExecuted: part.providerExecuted } : {},
							...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {},
							...dynamic != null ? { dynamic } : {},
							...part.title != null ? { title: part.title } : {}
						});
						break;
					}
					case "tool-input-delta":
						controller.enqueue({
							type: "tool-input-delta",
							toolCallId: part.id,
							inputTextDelta: part.delta
						});
						break;
					case "tool-call": {
						const dynamic = isDynamic(part);
						if (part.invalid) controller.enqueue({
							type: "tool-input-error",
							toolCallId: part.toolCallId,
							toolName: part.toolName,
							input: part.input,
							...part.providerExecuted != null ? { providerExecuted: part.providerExecuted } : {},
							...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {},
							...dynamic != null ? { dynamic } : {},
							errorText: onError(part.error),
							...part.title != null ? { title: part.title } : {}
						});
						else controller.enqueue({
							type: "tool-input-available",
							toolCallId: part.toolCallId,
							toolName: part.toolName,
							input: part.input,
							...part.providerExecuted != null ? { providerExecuted: part.providerExecuted } : {},
							...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {},
							...dynamic != null ? { dynamic } : {},
							...part.title != null ? { title: part.title } : {}
						});
						break;
					}
					case "tool-approval-request":
						controller.enqueue({
							type: "tool-approval-request",
							approvalId: part.approvalId,
							toolCallId: part.toolCall.toolCallId
						});
						break;
					case "tool-result": {
						const dynamic = isDynamic(part);
						controller.enqueue({
							type: "tool-output-available",
							toolCallId: part.toolCallId,
							output: part.output,
							...part.providerExecuted != null ? { providerExecuted: part.providerExecuted } : {},
							...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {},
							...part.preliminary != null ? { preliminary: part.preliminary } : {},
							...dynamic != null ? { dynamic } : {}
						});
						break;
					}
					case "tool-error": {
						const dynamic = isDynamic(part);
						controller.enqueue({
							type: "tool-output-error",
							toolCallId: part.toolCallId,
							errorText: part.providerExecuted ? typeof part.error === "string" ? part.error : JSON.stringify(part.error) : onError(part.error),
							...part.providerExecuted != null ? { providerExecuted: part.providerExecuted } : {},
							...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {},
							...dynamic != null ? { dynamic } : {}
						});
						break;
					}
					case "tool-output-denied":
						controller.enqueue({
							type: "tool-output-denied",
							toolCallId: part.toolCallId
						});
						break;
					case "error":
						controller.enqueue({
							type: "error",
							errorText: onError(part.error)
						});
						break;
					case "start-step":
						controller.enqueue({ type: "start-step" });
						break;
					case "finish-step":
						controller.enqueue({ type: "finish-step" });
						break;
					case "start":
						if (sendStart) controller.enqueue({
							type: "start",
							...messageMetadataValue != null ? { messageMetadata: messageMetadataValue } : {},
							...responseMessageId != null ? { messageId: responseMessageId } : {}
						});
						break;
					case "finish":
						if (sendFinish) controller.enqueue({
							type: "finish",
							finishReason: part.finishReason,
							...messageMetadataValue != null ? { messageMetadata: messageMetadataValue } : {}
						});
						break;
					case "abort":
						controller.enqueue(part);
						break;
					case "tool-input-end": break;
					case "raw": break;
					default: throw new Error(`Unknown chunk type: ${partType}`);
				}
				if (messageMetadataValue != null && partType !== "start" && partType !== "finish") controller.enqueue({
					type: "message-metadata",
					messageMetadata: messageMetadataValue
				});
			} })),
			messageId: responseMessageId != null ? responseMessageId : generateMessageId == null ? void 0 : generateMessageId(),
			originalMessages,
			onFinish,
			onError
		}));
	}
	pipeUIMessageStreamToResponse(response, { originalMessages, generateMessageId, onFinish, messageMetadata, sendReasoning, sendSources, sendFinish, sendStart, onError, ...init } = {}) {
		pipeUIMessageStreamToResponse({
			response,
			stream: this.toUIMessageStream({
				originalMessages,
				generateMessageId,
				onFinish,
				messageMetadata,
				sendReasoning,
				sendSources,
				sendFinish,
				sendStart,
				onError
			}),
			...init
		});
	}
	pipeTextStreamToResponse(response, init) {
		pipeTextStreamToResponse({
			response,
			textStream: this.textStream,
			...init
		});
	}
	toUIMessageStreamResponse({ originalMessages, generateMessageId, onFinish, messageMetadata, sendReasoning, sendSources, sendFinish, sendStart, onError, ...init } = {}) {
		return createUIMessageStreamResponse({
			stream: this.toUIMessageStream({
				originalMessages,
				generateMessageId,
				onFinish,
				messageMetadata,
				sendReasoning,
				sendSources,
				sendFinish,
				sendStart,
				onError
			}),
			...init
		});
	}
	toTextStreamResponse(init) {
		return createTextStreamResponse({
			textStream: this.textStream,
			...init
		});
	}
};
async function convertToModelMessages(messages, options) {
	const modelMessages = [];
	if (options == null ? void 0 : options.ignoreIncompleteToolCalls) messages = messages.map((message) => ({
		...message,
		parts: message.parts.filter((part) => !isToolUIPart(part) || part.state !== "input-streaming" && part.state !== "input-available")
	}));
	for (const message of messages) switch (message.role) {
		case "system": {
			const textParts = message.parts.filter((part) => part.type === "text");
			const providerMetadata = textParts.reduce((acc, part) => {
				if (part.providerMetadata != null) return {
					...acc,
					...part.providerMetadata
				};
				return acc;
			}, {});
			modelMessages.push({
				role: "system",
				content: textParts.map((part) => part.text).join(""),
				...Object.keys(providerMetadata).length > 0 ? { providerOptions: providerMetadata } : {}
			});
			break;
		}
		case "user":
			modelMessages.push({
				role: "user",
				content: message.parts.map((part) => {
					var _a21;
					if (isTextUIPart(part)) return {
						type: "text",
						text: part.text,
						...part.providerMetadata != null ? { providerOptions: part.providerMetadata } : {}
					};
					if (isFileUIPart(part)) return {
						type: "file",
						mediaType: part.mediaType,
						filename: part.filename,
						data: part.url,
						...part.providerMetadata != null ? { providerOptions: part.providerMetadata } : {}
					};
					if (isDataUIPart(part)) return (_a21 = options == null ? void 0 : options.convertDataPart) == null ? void 0 : _a21.call(options, part);
				}).filter(isNonNullable)
			});
			break;
		case "assistant":
			if (message.parts != null) {
				let block = [];
				async function processBlock() {
					var _a21, _b, _c, _d, _e, _f, _g;
					if (block.length === 0) return;
					const content = [];
					for (const part of block) if (isTextUIPart(part)) content.push({
						type: "text",
						text: part.text,
						...part.providerMetadata != null ? { providerOptions: part.providerMetadata } : {}
					});
					else if (isFileUIPart(part)) content.push({
						type: "file",
						mediaType: part.mediaType,
						filename: part.filename,
						data: part.url,
						...part.providerMetadata != null ? { providerOptions: part.providerMetadata } : {}
					});
					else if (isReasoningUIPart(part)) content.push({
						type: "reasoning",
						text: part.text,
						providerOptions: part.providerMetadata
					});
					else if (isToolUIPart(part)) {
						const toolName = getToolName(part);
						if (part.state !== "input-streaming") {
							content.push({
								type: "tool-call",
								toolCallId: part.toolCallId,
								toolName,
								input: part.state === "output-error" ? (_a21 = part.input) != null ? _a21 : "rawInput" in part ? part.rawInput : void 0 : part.input,
								providerExecuted: part.providerExecuted,
								...part.callProviderMetadata != null ? { providerOptions: part.callProviderMetadata } : {}
							});
							if (part.approval != null) content.push({
								type: "tool-approval-request",
								approvalId: part.approval.id,
								toolCallId: part.toolCallId
							});
							if (part.providerExecuted === true && part.state !== "approval-responded" && (part.state === "output-available" || part.state === "output-error")) {
								const resultProviderMetadata = (_b = part.resultProviderMetadata) != null ? _b : part.callProviderMetadata;
								content.push({
									type: "tool-result",
									toolCallId: part.toolCallId,
									toolName,
									output: await createToolModelOutput({
										toolCallId: part.toolCallId,
										input: part.input,
										output: part.state === "output-error" ? part.errorText : part.output,
										tool: (_c = options == null ? void 0 : options.tools) == null ? void 0 : _c[toolName],
										errorMode: part.state === "output-error" ? "json" : "none"
									}),
									...resultProviderMetadata != null ? { providerOptions: resultProviderMetadata } : {}
								});
							}
						}
					} else if (isDataUIPart(part)) {
						const dataPart = (_d = options == null ? void 0 : options.convertDataPart) == null ? void 0 : _d.call(options, part);
						if (dataPart != null) content.push(dataPart);
					} else throw new Error(`Unsupported part: ${part}`);
					modelMessages.push({
						role: "assistant",
						content
					});
					const toolParts = block.filter((part) => {
						var _a22;
						return isToolUIPart(part) && (part.providerExecuted !== true || ((_a22 = part.approval) == null ? void 0 : _a22.approved) != null);
					});
					if (toolParts.length > 0) {
						const content2 = [];
						for (const toolPart of toolParts) {
							if (((_e = toolPart.approval) == null ? void 0 : _e.approved) != null) content2.push({
								type: "tool-approval-response",
								approvalId: toolPart.approval.id,
								approved: toolPart.approval.approved,
								reason: toolPart.approval.reason,
								providerExecuted: toolPart.providerExecuted
							});
							if (toolPart.providerExecuted === true) continue;
							switch (toolPart.state) {
								case "output-denied":
									content2.push({
										type: "tool-result",
										toolCallId: toolPart.toolCallId,
										toolName: getToolName(toolPart),
										output: {
											type: "error-text",
											value: (_f = toolPart.approval.reason) != null ? _f : "Tool execution denied."
										},
										...toolPart.callProviderMetadata != null ? { providerOptions: toolPart.callProviderMetadata } : {}
									});
									break;
								case "output-error":
								case "output-available": {
									const toolName = getToolName(toolPart);
									content2.push({
										type: "tool-result",
										toolCallId: toolPart.toolCallId,
										toolName,
										output: await createToolModelOutput({
											toolCallId: toolPart.toolCallId,
											input: toolPart.input,
											output: toolPart.state === "output-error" ? toolPart.errorText : toolPart.output,
											tool: (_g = options == null ? void 0 : options.tools) == null ? void 0 : _g[toolName],
											errorMode: toolPart.state === "output-error" ? "text" : "none"
										}),
										...toolPart.callProviderMetadata != null ? { providerOptions: toolPart.callProviderMetadata } : {}
									});
									break;
								}
							}
						}
						if (content2.length > 0) modelMessages.push({
							role: "tool",
							content: content2
						});
					}
					block = [];
				}
				for (const part of message.parts) if (isTextUIPart(part) || isReasoningUIPart(part) || isFileUIPart(part) || isToolUIPart(part) || isDataUIPart(part)) block.push(part);
				else if (part.type === "step-start") await processBlock();
				await processBlock();
				break;
			}
			break;
		default: {
			const _exhaustiveCheck = message.role;
			throw new MessageConversionError({
				originalMessage: message,
				message: `Unsupported role: ${_exhaustiveCheck}`
			});
		}
	}
	return modelMessages;
}
lazySchema(() => zodSchema(array$1(object$1({
	id: string(),
	role: _enum([
		"system",
		"user",
		"assistant"
	]),
	metadata: unknown().optional(),
	parts: array$1(union([
		object$1({
			type: literal("text"),
			text: string(),
			state: _enum(["streaming", "done"]).optional(),
			providerMetadata: providerMetadataSchema.optional()
		}),
		object$1({
			type: literal("reasoning"),
			text: string(),
			state: _enum(["streaming", "done"]).optional(),
			providerMetadata: providerMetadataSchema.optional()
		}),
		object$1({
			type: literal("source-url"),
			sourceId: string(),
			url: string(),
			title: string().optional(),
			providerMetadata: providerMetadataSchema.optional()
		}),
		object$1({
			type: literal("source-document"),
			sourceId: string(),
			mediaType: string(),
			title: string(),
			filename: string().optional(),
			providerMetadata: providerMetadataSchema.optional()
		}),
		object$1({
			type: literal("file"),
			mediaType: string(),
			filename: string().optional(),
			url: string(),
			providerMetadata: providerMetadataSchema.optional()
		}),
		object$1({ type: literal("step-start") }),
		object$1({
			type: string().startsWith("data-"),
			id: string().optional(),
			data: unknown()
		}),
		object$1({
			type: literal("dynamic-tool"),
			toolName: string(),
			toolCallId: string(),
			state: literal("input-streaming"),
			input: unknown().optional(),
			providerExecuted: boolean().optional(),
			callProviderMetadata: providerMetadataSchema.optional(),
			output: never().optional(),
			errorText: never().optional(),
			approval: never().optional()
		}),
		object$1({
			type: literal("dynamic-tool"),
			toolName: string(),
			toolCallId: string(),
			state: literal("input-available"),
			input: unknown(),
			providerExecuted: boolean().optional(),
			output: never().optional(),
			errorText: never().optional(),
			callProviderMetadata: providerMetadataSchema.optional(),
			approval: never().optional()
		}),
		object$1({
			type: literal("dynamic-tool"),
			toolName: string(),
			toolCallId: string(),
			state: literal("approval-requested"),
			input: unknown(),
			providerExecuted: boolean().optional(),
			output: never().optional(),
			errorText: never().optional(),
			callProviderMetadata: providerMetadataSchema.optional(),
			approval: object$1({
				id: string(),
				approved: never().optional(),
				reason: never().optional()
			})
		}),
		object$1({
			type: literal("dynamic-tool"),
			toolName: string(),
			toolCallId: string(),
			state: literal("approval-responded"),
			input: unknown(),
			providerExecuted: boolean().optional(),
			output: never().optional(),
			errorText: never().optional(),
			callProviderMetadata: providerMetadataSchema.optional(),
			approval: object$1({
				id: string(),
				approved: boolean(),
				reason: string().optional()
			})
		}),
		object$1({
			type: literal("dynamic-tool"),
			toolName: string(),
			toolCallId: string(),
			state: literal("output-available"),
			input: unknown(),
			providerExecuted: boolean().optional(),
			output: unknown(),
			errorText: never().optional(),
			callProviderMetadata: providerMetadataSchema.optional(),
			resultProviderMetadata: providerMetadataSchema.optional(),
			preliminary: boolean().optional(),
			approval: object$1({
				id: string(),
				approved: literal(true),
				reason: string().optional()
			}).optional()
		}),
		object$1({
			type: literal("dynamic-tool"),
			toolName: string(),
			toolCallId: string(),
			state: literal("output-error"),
			input: unknown(),
			rawInput: unknown().optional(),
			providerExecuted: boolean().optional(),
			output: never().optional(),
			errorText: string(),
			callProviderMetadata: providerMetadataSchema.optional(),
			resultProviderMetadata: providerMetadataSchema.optional(),
			approval: object$1({
				id: string(),
				approved: literal(true),
				reason: string().optional()
			}).optional()
		}),
		object$1({
			type: literal("dynamic-tool"),
			toolName: string(),
			toolCallId: string(),
			state: literal("output-denied"),
			input: unknown(),
			providerExecuted: boolean().optional(),
			output: never().optional(),
			errorText: never().optional(),
			callProviderMetadata: providerMetadataSchema.optional(),
			approval: object$1({
				id: string(),
				approved: literal(false),
				reason: string().optional()
			})
		}),
		object$1({
			type: string().startsWith("tool-"),
			toolCallId: string(),
			state: literal("input-streaming"),
			providerExecuted: boolean().optional(),
			callProviderMetadata: providerMetadataSchema.optional(),
			input: unknown().optional(),
			output: never().optional(),
			errorText: never().optional(),
			approval: never().optional()
		}),
		object$1({
			type: string().startsWith("tool-"),
			toolCallId: string(),
			state: literal("input-available"),
			providerExecuted: boolean().optional(),
			input: unknown(),
			output: never().optional(),
			errorText: never().optional(),
			callProviderMetadata: providerMetadataSchema.optional(),
			approval: never().optional()
		}),
		object$1({
			type: string().startsWith("tool-"),
			toolCallId: string(),
			state: literal("approval-requested"),
			input: unknown(),
			providerExecuted: boolean().optional(),
			output: never().optional(),
			errorText: never().optional(),
			callProviderMetadata: providerMetadataSchema.optional(),
			approval: object$1({
				id: string(),
				approved: never().optional(),
				reason: never().optional()
			})
		}),
		object$1({
			type: string().startsWith("tool-"),
			toolCallId: string(),
			state: literal("approval-responded"),
			input: unknown(),
			providerExecuted: boolean().optional(),
			output: never().optional(),
			errorText: never().optional(),
			callProviderMetadata: providerMetadataSchema.optional(),
			approval: object$1({
				id: string(),
				approved: boolean(),
				reason: string().optional()
			})
		}),
		object$1({
			type: string().startsWith("tool-"),
			toolCallId: string(),
			state: literal("output-available"),
			providerExecuted: boolean().optional(),
			input: unknown(),
			output: unknown(),
			errorText: never().optional(),
			callProviderMetadata: providerMetadataSchema.optional(),
			resultProviderMetadata: providerMetadataSchema.optional(),
			preliminary: boolean().optional(),
			approval: object$1({
				id: string(),
				approved: literal(true),
				reason: string().optional()
			}).optional()
		}),
		object$1({
			type: string().startsWith("tool-"),
			toolCallId: string(),
			state: literal("output-error"),
			providerExecuted: boolean().optional(),
			input: unknown(),
			rawInput: unknown().optional(),
			output: never().optional(),
			errorText: string(),
			callProviderMetadata: providerMetadataSchema.optional(),
			resultProviderMetadata: providerMetadataSchema.optional(),
			approval: object$1({
				id: string(),
				approved: literal(true),
				reason: string().optional()
			}).optional()
		}),
		object$1({
			type: string().startsWith("tool-"),
			toolCallId: string(),
			state: literal("output-denied"),
			providerExecuted: boolean().optional(),
			input: unknown(),
			output: never().optional(),
			errorText: never().optional(),
			callProviderMetadata: providerMetadataSchema.optional(),
			approval: object$1({
				id: string(),
				approved: literal(false),
				reason: string().optional()
			})
		})
	])).nonempty("Message must contain at least one part")
})).nonempty("Messages array must not be empty")));
createIdGenerator({
	prefix: "aiobj",
	size: 24
});
function createDownload(options) {
	return ({ url, abortSignal }) => download({
		url,
		maxBytes: options == null ? void 0 : options.maxBytes,
		abortSignal
	});
}
createIdGenerator({
	prefix: "aiobj",
	size: 24
});
function pruneMessages({ messages, reasoning = "none", toolCalls = [], emptyMessages = "remove" }) {
	if (reasoning === "all" || reasoning === "before-last-message") messages = messages.map((message, messageIndex) => {
		if (message.role !== "assistant" || typeof message.content === "string" || reasoning === "before-last-message" && messageIndex === messages.length - 1) return message;
		return {
			...message,
			content: message.content.filter((part) => part.type !== "reasoning")
		};
	});
	if (toolCalls === "none") toolCalls = [];
	else if (toolCalls === "all") toolCalls = [{ type: "all" }];
	else if (toolCalls === "before-last-message") toolCalls = [{ type: "before-last-message" }];
	else if (typeof toolCalls === "string") toolCalls = [{ type: toolCalls }];
	for (const toolCall of toolCalls) {
		const keepLastMessagesCount = toolCall.type === "all" ? void 0 : toolCall.type === "before-last-message" ? 1 : Number(toolCall.type.slice(12).slice(0, -9));
		const keptToolCallIds = /* @__PURE__ */ new Set();
		const keptApprovalIds = /* @__PURE__ */ new Set();
		if (keepLastMessagesCount != null) {
			for (const message of messages.slice(-keepLastMessagesCount)) if ((message.role === "assistant" || message.role === "tool") && typeof message.content !== "string") {
				for (const part of message.content) if (part.type === "tool-call" || part.type === "tool-result") keptToolCallIds.add(part.toolCallId);
				else if (part.type === "tool-approval-request" || part.type === "tool-approval-response") keptApprovalIds.add(part.approvalId);
			}
		}
		messages = messages.map((message, messageIndex) => {
			if (message.role !== "assistant" && message.role !== "tool" || typeof message.content === "string" || keepLastMessagesCount && messageIndex >= messages.length - keepLastMessagesCount) return message;
			const toolCallIdToToolName = {};
			const approvalIdToToolName = {};
			return {
				...message,
				content: message.content.filter((part) => {
					if (part.type !== "tool-call" && part.type !== "tool-result" && part.type !== "tool-approval-request" && part.type !== "tool-approval-response") return true;
					if (part.type === "tool-call") toolCallIdToToolName[part.toolCallId] = part.toolName;
					else if (part.type === "tool-approval-request") approvalIdToToolName[part.approvalId] = toolCallIdToToolName[part.toolCallId];
					if ((part.type === "tool-call" || part.type === "tool-result") && keptToolCallIds.has(part.toolCallId) || (part.type === "tool-approval-request" || part.type === "tool-approval-response") && keptApprovalIds.has(part.approvalId)) return true;
					return toolCall.tools != null && !toolCall.tools.includes(part.type === "tool-call" || part.type === "tool-result" ? part.toolName : approvalIdToToolName[part.approvalId]);
				})
			};
		});
	}
	if (emptyMessages === "remove") messages = messages.filter((message) => message.content.length > 0);
	return messages;
}
createDownload();
createDownload();
//#endregion
//#region node_modules/@cloudflare/think/dist/classPrivateFieldGet2-fyJ3k1Ht.js
function _checkPrivateRedeclaration(e, t) {
	if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function _classPrivateFieldInitSpec(e, t, a) {
	_checkPrivateRedeclaration(e, t), t.set(e, a);
}
function _assertClassBrand(e, t, n) {
	if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
	throw new TypeError("Private element is not present on this object");
}
function _classPrivateFieldSet2(s, a, r) {
	return s.set(_assertClassBrand(s, a), r), r;
}
function _classPrivateFieldGet2(s, a) {
	return s.get(_assertClassBrand(s, a));
}
//#endregion
//#region node_modules/@cloudflare/think/dist/manager-BTBhPS6g.js
var manager_BTBhPS6g_exports = /* @__PURE__ */ __exportAll$1({
	i: () => _classPrivateMethodInitSpec,
	n: () => manager_exports,
	r: () => sanitizeName,
	t: () => ExtensionManager
});
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
function _classPrivateMethodInitSpec(e, a) {
	_checkPrivateRedeclaration(e, a), a.add(e);
}
/**
* ExtensionManager — loads, manages, and exposes tools from extension Workers.
*
* Extensions are sandboxed Workers created via WorkerLoader. Each extension
* declares tools (with JSON Schema inputs) and permissions. The manager:
*
* 1. Wraps extension source in a Worker module with describe/execute RPC
* 2. Loads it via WorkerLoader with permission-gated bindings
* 3. Discovers tools via describe() RPC call
* 4. Exposes them as AI SDK tools via getTools()
*
* Extension source format — a JS object expression defining tools:
*
* ```js
* ({
*   greet: {
*     description: "Greet someone",
*     parameters: { name: { type: "string" } },
*     required: ["name"],
*     execute: async (args, host) => `Hello, ${args.name}!`
*   }
* })
* ```
*
* The `host` parameter in execute is provided via `env.host` — a loopback
* binding that resolves the parent agent and delegates workspace operations
* (gated by permissions). See HostBridgeLoopback.
*/
var manager_exports = /* @__PURE__ */ __exportAll({
	ExtensionManager: () => ExtensionManager,
	sanitizeName: () => sanitizeName
});
/**
* Sanitize a name for use as a tool name prefix.
* Replaces any non-alphanumeric characters with underscores and
* collapses consecutive underscores.
*/
function sanitizeName(name) {
	if (!name || name.trim().length === 0) throw new Error("Extension name must not be empty");
	return name.replace(/[^a-zA-Z0-9]/g, "_").replace(/_+/g, "_").replace(/^_|_$/g, "");
}
var STORAGE_PREFIX = "ext:";
var _loader = /* @__PURE__ */ new WeakMap();
var _storage = /* @__PURE__ */ new WeakMap();
var _createHostBinding = /* @__PURE__ */ new WeakMap();
var _extensions = /* @__PURE__ */ new WeakMap();
var _restored = /* @__PURE__ */ new WeakMap();
var _onUnload = /* @__PURE__ */ new WeakMap();
var _ExtensionManager_brand = /* @__PURE__ */ new WeakSet();
var ExtensionManager = class {
	constructor(options) {
		_classPrivateMethodInitSpec(this, _ExtensionManager_brand);
		_classPrivateFieldInitSpec(this, _loader, void 0);
		_classPrivateFieldInitSpec(this, _storage, void 0);
		_classPrivateFieldInitSpec(this, _createHostBinding, void 0);
		_classPrivateFieldInitSpec(this, _extensions, /* @__PURE__ */ new Map());
		_classPrivateFieldInitSpec(this, _restored, false);
		_classPrivateFieldInitSpec(this, _onUnload, null);
		_classPrivateFieldSet2(_loader, this, options.loader);
		_classPrivateFieldSet2(_storage, this, options.storage ?? null);
		_classPrivateFieldSet2(_createHostBinding, this, options.createHostBinding ?? null);
	}
	/**
	* Load an extension from source code.
	*
	* The source is a JS object expression defining tools. Each tool has
	* `description`, `parameters` (JSON Schema properties), optional
	* `required` array, and an `execute` async function.
	*
	* @returns Summary of the loaded extension including discovered tools.
	*/
	/**
	* Restore extensions from DO storage after hibernation.
	*
	* Idempotent — skips extensions already in memory. Call this at the
	* start of each chat turn (e.g. in onChatMessage before getTools).
	*/
	async restore() {
		if (_classPrivateFieldGet2(_restored, this) || !_classPrivateFieldGet2(_storage, this)) return;
		_classPrivateFieldSet2(_restored, this, true);
		const entries = await _classPrivateFieldGet2(_storage, this).list({ prefix: STORAGE_PREFIX });
		for (const persisted of entries.values()) {
			if (_classPrivateFieldGet2(_extensions, this).has(persisted.manifest.name)) continue;
			await _assertClassBrand(_ExtensionManager_brand, this, _loadInternal).call(this, persisted.manifest, persisted.source);
		}
	}
	async load(manifest, source) {
		if (_classPrivateFieldGet2(_extensions, this).has(manifest.name)) throw new Error(`Extension "${manifest.name}" is already loaded. Unload it first.`);
		const info = await _assertClassBrand(_ExtensionManager_brand, this, _loadInternal).call(this, manifest, source);
		if (_classPrivateFieldGet2(_storage, this)) await _classPrivateFieldGet2(_storage, this).put(`${STORAGE_PREFIX}${manifest.name}`, {
			manifest,
			source
		});
		return info;
	}
	/**
	* Unload an extension, removing its tools from the agent.
	* If an onUnload callback is registered, it fires with the
	* extension's namespaced context labels so the caller can
	* remove context blocks from the Session.
	*/
	async unload(name) {
		const ext = _classPrivateFieldGet2(_extensions, this).get(name);
		if (!ext) return false;
		const removed = _classPrivateFieldGet2(_extensions, this).delete(name);
		if (removed && _classPrivateFieldGet2(_storage, this)) await _classPrivateFieldGet2(_storage, this).delete(`${STORAGE_PREFIX}${name}`);
		if (removed && _classPrivateFieldGet2(_onUnload, this)) {
			const prefix = sanitizeName(name);
			const contextLabels = (ext.manifest.context ?? []).map((c) => `${prefix}_${c.label}`);
			await _classPrivateFieldGet2(_onUnload, this).call(this, name, contextLabels);
		}
		return removed;
	}
	/**
	* Register a callback invoked when an extension is unloaded.
	* Think uses this to remove the extension's context blocks from Session.
	*/
	onUnload(cb) {
		_classPrivateFieldSet2(_onUnload, this, cb);
	}
	/**
	* Get the namespaced context labels for all loaded extensions
	* that declare context blocks in their manifests.
	*/
	getContextLabels() {
		const result = [];
		for (const ext of _classPrivateFieldGet2(_extensions, this).values()) {
			if (!ext.manifest.context) continue;
			const prefix = sanitizeName(ext.manifest.name);
			for (const ctx of ext.manifest.context) result.push({
				extName: ext.manifest.name,
				label: `${prefix}_${ctx.label}`
			});
		}
		return result;
	}
	/**
	* Get extension manifest by name.
	*/
	getManifest(name) {
		return _classPrivateFieldGet2(_extensions, this).get(name)?.manifest ?? null;
	}
	/**
	* Get extensions that subscribe to a specific hook, in load order.
	*/
	getHookSubscribers(hookName) {
		const result = [];
		for (const ext of _classPrivateFieldGet2(_extensions, this).values()) if (ext.hooks.includes(hookName)) result.push({
			name: ext.manifest.name,
			entrypoint: ext.entrypoint
		});
		return result;
	}
	/**
	* List all loaded extensions.
	*/
	list() {
		return [..._classPrivateFieldGet2(_extensions, this).values()].map((ext) => toExtensionInfo(ext.manifest, ext.tools));
	}
	/**
	* Get AI SDK tools from all loaded extensions.
	*
	* Tool names are prefixed with the sanitized extension name to avoid
	* collisions: e.g. extension "github" with tool "create_pr" → "github_create_pr".
	*/
	getTools() {
		const tools = {};
		for (const ext of _classPrivateFieldGet2(_extensions, this).values()) {
			const prefix = sanitizeName(ext.manifest.name);
			for (const descriptor of ext.tools) {
				const toolName = `${prefix}_${descriptor.name}`;
				tools[toolName] = tool({
					description: `[${ext.manifest.name}] ${descriptor.description}`,
					inputSchema: jsonSchema(descriptor.inputSchema),
					execute: async (args) => {
						if (!_classPrivateFieldGet2(_extensions, this).has(ext.manifest.name)) throw new Error(`Extension "${ext.manifest.name}" has been unloaded. Tool "${toolName}" is no longer available.`);
						const resultJson = await ext.entrypoint.execute(descriptor.name, JSON.stringify(args));
						const parsed = JSON.parse(resultJson);
						if (parsed.error) throw new Error(parsed.error);
						return parsed.result;
					}
				});
			}
		}
		return tools;
	}
};
async function _loadInternal(manifest, source) {
	const workerModule = wrapExtensionSource(source);
	const permissions = manifest.permissions ?? {};
	const workerEnv = {};
	const needsHost = (permissions.workspace ?? "none") !== "none" || permissions.context?.read !== void 0 || permissions.context?.write !== void 0 || (permissions.messages ?? "none") !== "none" || permissions.session?.sendMessage || permissions.session?.metadata;
	if (_classPrivateFieldGet2(_createHostBinding, this) && needsHost) {
		const prefix = sanitizeName(manifest.name);
		const ownLabels = (manifest.context ?? []).map((c) => `${prefix}_${c.label}`);
		workerEnv.host = _classPrivateFieldGet2(_createHostBinding, this).call(this, permissions, ownLabels);
	}
	const entrypoint = _classPrivateFieldGet2(_loader, this).get(`ext-${manifest.name}-${manifest.version}-${Date.now()}`, () => ({
		compatibilityDate: "2025-06-01",
		compatibilityFlags: ["nodejs_compat"],
		mainModule: "extension.js",
		modules: { "extension.js": workerModule },
		globalOutbound: permissions.network?.length ? void 0 : null,
		...Object.keys(workerEnv).length > 0 ? { env: workerEnv } : {}
	})).getEntrypoint();
	const descriptorsJson = await entrypoint.describe();
	const tools = JSON.parse(descriptorsJson);
	let hooks = [];
	try {
		const manifestJson = await entrypoint.manifest();
		hooks = JSON.parse(manifestJson).hooks ?? [];
	} catch {}
	_classPrivateFieldGet2(_extensions, this).set(manifest.name, {
		manifest,
		tools,
		hooks,
		entrypoint
	});
	return toExtensionInfo(manifest, tools);
}
function toExtensionInfo(manifest, tools) {
	const prefix = sanitizeName(manifest.name);
	return {
		name: manifest.name,
		version: manifest.version,
		description: manifest.description,
		tools: tools.map((t) => `${prefix}_${t.name}`),
		contextLabels: (manifest.context ?? []).map((c) => `${prefix}_${c.label}`),
		permissions: manifest.permissions ?? {}
	};
}
/**
* Wrap an extension source in a Worker module that exposes
* describe(), execute(), manifest(), and hook RPC methods.
*
* Source format: `({ tools: {...}, hooks: {...} })`
* Both `tools` and `hooks` are optional.
*/
function wrapExtensionSource(source) {
	return `import { WorkerEntrypoint } from "cloudflare:workers";

const __ext = (${source});
if (__ext && typeof __ext === "object" && !("tools" in __ext) && !("hooks" in __ext)) {
  throw new Error(
    "Invalid extension source format. Expected { tools: {...}, hooks: {...} } " +
    "but got a flat object. Wrap your tools in a 'tools' key."
  );
}
const __tools = __ext.tools || {};
const __hooks = __ext.hooks || {};

export default class Extension extends WorkerEntrypoint {
  describe() {
    const descriptors = [];
    for (const [name, def] of Object.entries(__tools)) {
      descriptors.push({
        name,
        description: def.description || name,
        inputSchema: {
          type: "object",
          properties: def.parameters || {},
          required: def.required || []
        }
      });
    }
    return JSON.stringify(descriptors);
  }

  manifest() {
    return JSON.stringify({
      hooks: Object.keys(__hooks)
    });
  }

  async execute(toolName, argsJson) {
    const def = __tools[toolName];
    if (!def || !def.execute) {
      return JSON.stringify({ error: "Unknown tool: " + toolName });
    }
    try {
      const args = JSON.parse(argsJson);
      const result = await def.execute(args, this.env.host ?? null);
      return JSON.stringify({ result });
    } catch (err) {
      return JSON.stringify({ error: err.message || String(err) });
    }
  }

  async hook(name, ctxSnapshot) {
    const fn = __hooks[name];
    if (!fn) return JSON.stringify({ skipped: true });
    try {
      const result = await fn(ctxSnapshot);
      return JSON.stringify({ result: result ?? {} });
    } catch (err) {
      return JSON.stringify({ error: err.message || String(err) });
    }
  }
}
`;
}
//#endregion
export { looseObject as $, mediaTypeToExtension as A, EventSourceParserStream as B, generateId as C, lazySchema as D, jsonSchema as E, tool as F, any as G, ZodNumber$1 as H, validateTypes as I, custom as J, array$1 as K, withUserAgentSuffix as L, parseProviderOptions as M, postFormDataToApi as N, loadApiKey as O, postJsonToApi as P, literal as Q, withoutTrailingSlash as R, downloadBlob as S, isParsableJson as T, _enum as U, createParser as V, _null as W, intersection as X, discriminatedUnion as Y, lazy as Z, createJsonErrorResponseHandler as _, APICallError as _t, _classPrivateFieldSet2 as a, schemas_exports as at, createProviderToolFactoryWithOutputSchema as b, TooManyEmbeddingValuesForCallError as bt, stepCountIs as c, unknown as ct, combineHeaders as d, iso_exports as dt, number as et, convertBase64ToUint8Array as f, checks_exports as ft, createEventSourceResponseHandler as g, NEVER as gt, createBinaryResponseHandler as h, safeParse$1 as ht, _classPrivateFieldInitSpec as i, record as it, parseJSON as j, loadOptionalSetting as k, streamText as l, url as lt, convertToFormData as m, globalRegistry as mt, sanitizeName as n, optional as nt, convertToModelMessages as o, string as ot, convertToBase64 as p, _coercedNumber as pt, boolean as q, _classPrivateFieldGet2 as r, preprocess as rt, pruneMessages as s, union as st, manager_BTBhPS6g_exports as t, object$1 as tt, asSchema as u, datetime as ut, createJsonResponseHandler as v, InvalidPromptError as vt, isNonNullable as w, createToolNameMapping as x, UnsupportedFunctionalityError as xt, createProviderToolFactory as y, InvalidResponseDataError as yt, zodSchema as z };
