// This file generated by "generate.ts ffi" in the root of the repo.
import { QuickJSEmscriptenModule } from "./emscripten-types"

// ts/ffi-types.ts

/**
 * C pointer to export type `CType`. Pointer types are used internally for FFI, but
 * are not intended for external use.
 *
 * @unstable This export type is considered private and may change.
 */
export type Pointer<CType extends string> = number & { ctype: CType }

/**
 * `JSRuntime*`.
 */
export type JSRuntimePointer = Pointer<'JSRuntime'>

/**
 * `JSContext*`.
 */
export type JSContextPointer = Pointer<'JSContext'>

/**
 * `JSValue*`.
 * See [[JSValue]].
 */
export type JSValuePointer = Pointer<'JSValue'>

/**
 * `JSValueConst*
 * See [[JSValueConst]] and [[StaticJSValue]].
 */
export type JSValueConstPointer = Pointer<'JSValueConst'>

/**
 * Used internally for Javascript-to-C function calls.
 */
export type JSValueConstPointerPointer = Pointer<'JSValueConst[]'>

/**
 * Used internally for C-to-Javascript function calls.
 */
export type JSCFunctionPointer = Pointer<'JSCFunction'>

/**
 * Used internally for C-to-Javascript function calls.
 */
export type QTS_C_To_HostCallbackFuncPointer = Pointer<'C_To_HostCallbackFunc'>

/**
 * Used internally for C-to-Javascript interrupt handlers.
 */
export type QTS_C_To_HostInterruptFuncPointer = Pointer<'C_To_HostInterruptFunc'>


/**
 * Low-level FFI bindings to QuickJS's Emscripten module.
 * See instead [[QuickJSVm]], the public Javascript interface exposed by this
 * library.
 *
 * @unstable The FFI interface is considered private and may change.
 */
export class QuickJSFFI {
  constructor(private module: QuickJSEmscriptenModule) {}

  QTS_SetHostCallback: (fp: QTS_C_To_HostCallbackFuncPointer) => void =
    this.module.cwrap("QTS_SetHostCallback", null, ["number"])

  QTS_ArgvGetJSValueConstPointer: (argv: JSValuePointer | JSValueConstPointer, index: number) => JSValueConstPointer =
    this.module.cwrap("QTS_ArgvGetJSValueConstPointer", "number", ["number","number"])

  QTS_NewFunction: (ctx: JSContextPointer, func_data: JSValuePointer | JSValueConstPointer, name: string) => JSValuePointer =
    this.module.cwrap("QTS_NewFunction", "number", ["number","number","string"])

  QTS_Throw: (ctx: JSContextPointer, error: JSValuePointer | JSValueConstPointer) => JSValuePointer =
    this.module.cwrap("QTS_Throw", "number", ["number","number"])

  QTS_NewError: (ctx: JSContextPointer) => JSValuePointer =
    this.module.cwrap("QTS_NewError", "number", ["number"])

  QTS_SetInterruptCallback: (cb: QTS_C_To_HostInterruptFuncPointer) => void =
    this.module.cwrap("QTS_SetInterruptCallback", null, ["number"])

  QTS_RuntimeEnableInterruptHandler: (rt: JSRuntimePointer) => void =
    this.module.cwrap("QTS_RuntimeEnableInterruptHandler", null, ["number"])

  QTS_RuntimeDisableInterruptHandler: (rt: JSRuntimePointer) => void =
    this.module.cwrap("QTS_RuntimeDisableInterruptHandler", null, ["number"])

  QTS_GetUndefined: () => JSValueConstPointer =
    this.module.cwrap("QTS_GetUndefined", "number", [])

  QTS_GetNull: () => JSValueConstPointer =
    this.module.cwrap("QTS_GetNull", "number", [])

  QTS_GetFalse: () => JSValueConstPointer =
    this.module.cwrap("QTS_GetFalse", "number", [])

  QTS_GetTrue: () => JSValueConstPointer =
    this.module.cwrap("QTS_GetTrue", "number", [])

  QTS_NewRuntime: () => JSRuntimePointer =
    this.module.cwrap("QTS_NewRuntime", "number", [])

  QTS_FreeRuntime: (rt: JSRuntimePointer) => void =
    this.module.cwrap("QTS_FreeRuntime", null, ["number"])

  QTS_NewContext: (rt: JSRuntimePointer) => JSContextPointer =
    this.module.cwrap("QTS_NewContext", "number", ["number"])

  QTS_FreeContext: (ctx: JSContextPointer) => void =
    this.module.cwrap("QTS_FreeContext", null, ["number"])

  QTS_FreeValuePointer: (ctx: JSContextPointer, value: JSValuePointer) => void =
    this.module.cwrap("QTS_FreeValuePointer", null, ["number","number"])

  QTS_DupValuePointer: (ctx: JSContextPointer, val: JSValuePointer | JSValueConstPointer) => JSValuePointer =
    this.module.cwrap("QTS_DupValuePointer", "number", ["number","number"])

  QTS_NewObject: (ctx: JSContextPointer) => JSValuePointer =
    this.module.cwrap("QTS_NewObject", "number", ["number"])

  QTS_NewObjectProto: (ctx: JSContextPointer, proto: JSValuePointer | JSValueConstPointer) => JSValuePointer =
    this.module.cwrap("QTS_NewObjectProto", "number", ["number","number"])

  QTS_NewArray: (ctx: JSContextPointer) => JSValuePointer =
    this.module.cwrap("QTS_NewArray", "number", ["number"])

  QTS_NewFloat64: (ctx: JSContextPointer, num: number) => JSValuePointer =
    this.module.cwrap("QTS_NewFloat64", "number", ["number","number"])

  QTS_GetFloat64: (ctx: JSContextPointer, value: JSValuePointer | JSValueConstPointer) => number =
    this.module.cwrap("QTS_GetFloat64", "number", ["number","number"])

  QTS_NewString: (ctx: JSContextPointer, string: string) => JSValuePointer =
    this.module.cwrap("QTS_NewString", "number", ["number","string"])

  QTS_GetString: (ctx: JSContextPointer, value: JSValuePointer | JSValueConstPointer) => string =
    this.module.cwrap("QTS_GetString", "string", ["number","number"])

  QTS_GetProp: (ctx: JSContextPointer, this_val: JSValuePointer | JSValueConstPointer, prop_name: JSValuePointer | JSValueConstPointer) => JSValuePointer =
    this.module.cwrap("QTS_GetProp", "number", ["number","number","number"])

  QTS_SetProp: (ctx: JSContextPointer, this_val: JSValuePointer | JSValueConstPointer, prop_name: JSValuePointer | JSValueConstPointer, prop_value: JSValuePointer | JSValueConstPointer) => void =
    this.module.cwrap("QTS_SetProp", null, ["number","number","number","number"])

  QTS_DefineProp: (ctx: JSContextPointer, this_val: JSValuePointer | JSValueConstPointer, prop_name: JSValuePointer | JSValueConstPointer, prop_value: JSValuePointer | JSValueConstPointer, get: JSValuePointer | JSValueConstPointer, set: JSValuePointer | JSValueConstPointer, configurable: boolean, enumerable: boolean, has_value: boolean) => void =
    this.module.cwrap("QTS_DefineProp", null, ["number","number","number","number","number","number","boolean","boolean","boolean"])

  QTS_Call: (ctx: JSContextPointer, func_obj: JSValuePointer | JSValueConstPointer, this_obj: JSValuePointer | JSValueConstPointer, argc: number, argv_ptrs: JSValueConstPointerPointer) => JSValuePointer =
    this.module.cwrap("QTS_Call", "number", ["number","number","number","number","number"])

  QTS_ResolveException: (ctx: JSContextPointer, maybe_exception: JSValuePointer) => JSValuePointer =
    this.module.cwrap("QTS_ResolveException", "number", ["number","number"])

  QTS_Dump: (ctx: JSContextPointer, obj: JSValuePointer | JSValueConstPointer) => string =
    this.module.cwrap("QTS_Dump", "string", ["number","number"])

  QTS_Eval: (ctx: JSContextPointer, js_code: string) => JSValuePointer =
    this.module.cwrap("QTS_Eval", "number", ["number","string"])

  QTS_Typeof: (ctx: JSContextPointer, value: JSValuePointer | JSValueConstPointer) => string =
    this.module.cwrap("QTS_Typeof", "string", ["number","number"])

  QTS_DupValue: (ctx: JSContextPointer, value_ptr: JSValuePointer | JSValueConstPointer) => JSValuePointer =
    this.module.cwrap("QTS_DupValue", "number", ["number","number"])

  QTS_GetGlobalObject: (ctx: JSContextPointer) => JSValuePointer =
    this.module.cwrap("QTS_GetGlobalObject", "number", ["number"])
}
