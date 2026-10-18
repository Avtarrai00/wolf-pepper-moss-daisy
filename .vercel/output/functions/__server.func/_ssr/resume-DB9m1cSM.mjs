import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { f as skillGroups, l as profile, m as visibleTimeline, p as socialLinks } from "./profile-B5b42FQw.mjs";
import { r as Printer } from "../_libs/lucide-react.mjs";
import { i as buttonVariants, n as Shell, t as Button } from "./shell-BSASZSkp.mjs";
import { t as DownloadResume } from "./download-resume-Bd3sQs7N.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resume-DB9m1cSM.js
var import_jsx_runtime = require_jsx_runtime();
var kindLabel = {
	work: "Work",
	education: "Education",
	project: "Project",
	milestone: "Milestone"
};
function ResumePage() {
	const entries = visibleTimeline();
	const links = socialLinks();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "print-paper mx-auto w-full max-w-3xl px-5 pt-28 pb-20 md:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "no-print mb-8 flex flex-wrap gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: buttonVariants({ variant: "outline" }),
						children: "Back home"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DownloadResume, { label: "Download text" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "primary",
						onClick: () => {
							window.print();
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {
							className: "size-4",
							"aria-hidden": "true"
						}), "Print or save PDF"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "no-print mb-8 text-sm text-muted",
				children: "Generated from your profile. Sample skills are a starting inventory — edit them before sharing. Experience appears only after you add it."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-serif text-5xl text-foreground",
					children: profile.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-base text-muted",
					children: [
						profile.role,
						" · ",
						profile.location
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-subtle",
					children: profile.focus
				}),
				profile.email.trim() ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-foreground",
					children: profile.email.trim()
				}) : null,
				links.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm",
					children: links.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						className: "text-foreground underline-offset-4 hover:underline",
						children: item.label
					}) }, item.id))
				}) : null
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-sans text-xs font-medium uppercase tracking-label text-subtle",
						children: "Profile"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-base text-foreground",
						children: profile.introduction
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base text-foreground",
						children: profile.philosophy
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-sans text-xs font-medium uppercase tracking-label text-subtle",
					children: "Tools and interests"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid gap-6 sm:grid-cols-2",
					children: skillGroups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-sans text-sm font-medium text-foreground",
						children: group.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-2 text-sm text-muted",
						children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item.name }, item.name))
					})] }, group.id))
				})]
			}),
			entries.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-sans text-xs font-medium uppercase tracking-label text-subtle",
					children: "Experience"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-4 flex flex-col gap-6",
					children: entries.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs uppercase tracking-label text-subtle",
							children: [
								kindLabel[entry.kind],
								" · ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "tabular-nums",
									children: [entry.start, entry.end.trim() ? ` – ${entry.end}` : ""]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-1 font-serif text-2xl text-foreground",
							children: entry.title
						}),
						entry.organization.trim() ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: entry.organization
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-foreground",
							children: entry.description
						})
					] }, entry.id))
				})]
			}) : null
		]
	}) });
}
//#endregion
export { ResumePage as component };
