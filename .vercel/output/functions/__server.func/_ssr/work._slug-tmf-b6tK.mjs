import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as adjacentProjects } from "./profile-B5b42FQw.mjs";
import { m as ArrowLeft, p as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { a as cn, i as buttonVariants, n as Shell } from "./shell-BSASZSkp.mjs";
import { n as Route } from "./router-BTSTL-6B.mjs";
import { t as ProjectMedia } from "./project-media-t7jsgFhF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work._slug-tmf-b6tK.js
var import_jsx_runtime = require_jsx_runtime();
function CaseStudy() {
	const { project } = Route.useLoaderData();
	const { previous, next } = adjacentProjects(project.slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto w-full max-w-7xl px-5 pt-28 pb-20 md:px-8 md:pt-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "/#projects",
				className: "inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
					className: "size-4",
					"aria-hidden": "true"
				}), "All work"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-8 text-xs font-medium uppercase tracking-label text-subtle",
				children: [project.category, project.sample ? " · Sample study" : ""]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 max-w-4xl text-headline text-foreground",
				children: project.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-2xl font-serif text-2xl leading-snug text-foreground md:text-3xl",
				children: project.summary
			}),
			project.sample ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-2xl text-sm text-muted",
				children: "This is a sample study used to show the case-study layout. Links, outcomes, and claims stay empty until a real project replaces it."
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-8 flex flex-wrap gap-x-10 gap-y-4 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-subtle",
					children: "Role"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "mt-1 text-foreground",
					children: project.role
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-subtle",
					children: "Year"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "mt-1 text-foreground",
					children: project.yearLabel
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectMedia, {
					project,
					priority: true
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-12 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-sans text-xs font-medium uppercase tracking-label text-subtle",
							children: "Overview"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-base text-foreground",
							children: project.overview
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-10 font-sans text-xs font-medium uppercase tracking-label text-subtle",
							children: "Stack"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 flex flex-wrap gap-2",
							children: project.stack.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-full border border-border px-3 py-1 text-sm text-muted",
								children: item
							}, item))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [project.liveUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: project.liveUrl,
								target: "_blank",
								rel: "noreferrer noopener",
								className: buttonVariants(),
								children: ["Live demo", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
									className: "size-4",
									"aria-hidden": "true"
								})]
							}) : null, project.sourceUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: project.sourceUrl,
								target: "_blank",
								rel: "noreferrer noopener",
								className: buttonVariants({ variant: "outline" }),
								children: ["Source", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
									className: "size-4",
									"aria-hidden": "true"
								})]
							}) : null]
						}),
						!project.liveUrl && !project.sourceUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-sm text-subtle",
							children: "Live demo and source links aren't added for this study."
						}) : null
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5 lg:col-start-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-sans text-xs font-medium uppercase tracking-label text-subtle",
						children: "Approach"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-4 flex flex-col gap-5",
						children: project.approach.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "grid grid-cols-[2.5rem_1fr] gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular-nums text-sm text-accent",
								children: String(index + 1).padStart(2, "0")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-foreground md:text-base",
								children: step
							})]
						}, step))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mt-16 grid gap-4 border-t border-border pt-8 sm:grid-cols-2",
				"aria-label": "More studies",
				children: [previous ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/work/$slug",
					params: { slug: previous.slug },
					className: "rounded-card border border-border p-5 hover:bg-elevated",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-label text-subtle",
						children: "Previous"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-serif text-2xl text-foreground",
						children: previous.name
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), next ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/work/$slug",
					params: { slug: next.slug },
					className: cn("rounded-card border border-border p-5 hover:bg-elevated sm:text-right", !previous && "sm:col-start-2"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-label text-subtle",
						children: "Next"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-serif text-2xl text-foreground",
						children: next.name
					})]
				}) : null]
			})
		]
	}) });
}
//#endregion
export { CaseStudy as component };
