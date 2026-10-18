import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as cn } from "./shell-BSASZSkp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/project-media-t7jsgFhF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useSoftParallax(enabled) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const node = ref.current;
		if (!enabled || !node) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		if (window.matchMedia("(pointer: coarse)").matches) return;
		let frame = 0;
		const update = () => {
			const rect = node.getBoundingClientRect();
			const delta = rect.top + rect.height / 2 - window.innerHeight / 2;
			const shift = Math.max(-16, Math.min(16, -delta * .03));
			node.style.transform = `translate3d(0, ${shift}px, 0)`;
		};
		const onScroll = () => {
			cancelAnimationFrame(frame);
			frame = requestAnimationFrame(update);
		};
		update();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => {
			cancelAnimationFrame(frame);
			window.removeEventListener("scroll", onScroll);
		};
	}, [enabled]);
	return ref;
}
function Poster({ project }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col justify-between p-6 md:p-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-medium uppercase tracking-label text-subtle",
			children: project.category
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-serif text-5xl text-foreground md:text-6xl",
				children: project.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-4 h-px w-16 bg-accent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-xs text-sm text-muted",
				children: project.summary
			})
		] })]
	});
}
function ProjectMedia({ project, priority = false, parallax = false, className }) {
	const ref = useSoftParallax(parallax && Boolean(project.image));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("frame-landscape overflow-hidden rounded-card border border-border bg-elevated", className),
		children: project.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref,
			className: parallax ? "parallax-bleed" : "h-full",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: project.image,
				alt: project.imageAlt,
				width: 1600,
				height: 1067,
				loading: priority ? "eager" : "lazy",
				decoding: "async",
				fetchPriority: priority ? "high" : "auto",
				className: "h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
			})
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Poster, { project })
	});
}
//#endregion
export { ProjectMedia as t };
