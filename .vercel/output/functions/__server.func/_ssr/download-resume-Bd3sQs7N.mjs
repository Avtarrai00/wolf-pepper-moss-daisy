import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { d as resumePlainText } from "./profile-B5b42FQw.mjs";
import { l as Download } from "../_libs/lucide-react.mjs";
import { a as cn, t as Button } from "./shell-BSASZSkp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/download-resume-Bd3sQs7N.js
var import_jsx_runtime = require_jsx_runtime();
function DownloadResume({ className, label = "Download résumé" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		className: cn(className),
		variant: "outline",
		onClick: () => {
			const blob = new Blob([resumePlainText()], { type: "text/plain;charset=utf-8" });
			const url = URL.createObjectURL(blob);
			const anchor = document.createElement("a");
			anchor.href = url;
			anchor.download = "Avtar-Singh-resume.txt";
			anchor.click();
			URL.revokeObjectURL(url);
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
			className: "size-4",
			"aria-hidden": "true"
		}), label]
	});
}
//#endregion
export { DownloadResume as t };
