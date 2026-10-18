import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as cn, i as buttonVariants, n as Shell } from "./shell-BSASZSkp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work._slug-B0_VyMxR.js
var import_jsx_runtime = require_jsx_runtime();
function ProjectMissing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex min-h-[70vh] w-full max-w-3xl flex-col justify-center px-5 pt-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium uppercase tracking-label text-subtle",
				children: "Missing"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 text-headline text-foreground",
				children: "That study isn't on file."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-md text-muted",
				children: "The link may be old, or the project was removed from the profile."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: cn(buttonVariants(), "mt-8 w-fit"),
				children: "Back home"
			})
		]
	}) });
}
//#endregion
export { ProjectMissing as notFoundComponent };
