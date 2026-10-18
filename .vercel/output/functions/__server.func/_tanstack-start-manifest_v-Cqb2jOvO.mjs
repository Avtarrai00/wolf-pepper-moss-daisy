//#region node_modules/.nitro/vite/services/ssr/assets/_tanstack-start-manifest_v-Cqb2jOvO.js
var tsrStartManifest = () => ({ routes: {
	__root__: {
		filePath: "/workspace/src/routes/__root.tsx",
		children: [
			"/",
			"/resume",
			"/work/$slug"
		],
		preloads: ["/assets/index-D6ZZ4egj.js"],
		scripts: [{ attrs: {
			type: "module",
			async: !0,
			src: "/assets/index-D6ZZ4egj.js"
		} }]
	},
	"/": {
		filePath: "/workspace/src/routes/index.tsx",
		children: void 0,
		preloads: [
			"/assets/routes-C6YoXr9m.js",
			"/assets/shell-mAPsf7ht.js",
			"/assets/project-media-DyDYHEUm.js",
			"/assets/download-resume-D0mFnPyc.js"
		]
	},
	"/resume": {
		filePath: "/workspace/src/routes/resume.tsx",
		children: void 0,
		preloads: [
			"/assets/resume-DhlqSPa0.js",
			"/assets/shell-mAPsf7ht.js",
			"/assets/download-resume-D0mFnPyc.js"
		]
	},
	"/work/$slug": {
		filePath: "/workspace/src/routes/work.$slug.tsx",
		children: void 0,
		preloads: [
			"/assets/work._slug-BT3cM9y-.js",
			"/assets/shell-mAPsf7ht.js",
			"/assets/work._slug-DZmWUpOR.js",
			"/assets/project-media-DyDYHEUm.js"
		]
	}
} });
//#endregion
export { tsrStartManifest };
