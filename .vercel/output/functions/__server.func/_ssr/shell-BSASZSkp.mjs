import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as Link, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as DialogPortal, i as DialogDescription, n as DialogClose, o as DialogTitle, r as DialogContent, s as DialogTrigger, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { l as profile, p as socialLinks, s as navItems } from "./profile-B5b42FQw.mjs";
import { c as Github, f as ArrowUp, i as Menu, o as Linkedin, s as Instagram, t as X } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as MotionConfig } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shell-BSASZSkp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-[transform,background-color,opacity,border-color,color] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:pointer-events-none disabled:opacity-40", {
	variants: {
		variant: {
			primary: "bg-foreground text-background hover:opacity-90",
			accent: "bg-accent text-accent-foreground hover:opacity-90",
			outline: "border border-border bg-transparent text-foreground hover:bg-elevated",
			ghost: "bg-transparent text-foreground hover:bg-elevated"
		},
		size: {
			md: "h-11 px-5 text-sm",
			sm: "h-10 px-4 text-sm",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, type = "button", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type,
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var icons = {
	linkedin: Linkedin,
	github: Github,
	instagram: Instagram
};
function SocialList({ className }) {
	const links = socialLinks();
	if (links.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: cn("flex flex-wrap gap-2", className),
		children: links.map((item) => {
			const Icon = icons[item.id] ?? Github;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: item.href,
				target: "_blank",
				rel: "noreferrer noopener",
				"aria-label": item.label,
				className: "inline-flex size-11 items-center justify-center rounded-full border border-border text-foreground transition-colors duration-150 hover:bg-elevated",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: "size-4",
					"aria-hidden": "true"
				})
			}) }, item.id);
		})
	});
}
function Footer() {
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "no-print border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-7xl px-5 py-14 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 md:grid-cols-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-serif text-3xl italic text-foreground",
								children: profile.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted",
								children: "Designed with curiosity"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialList, { className: "mt-6" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "grid grid-cols-2 gap-y-2 md:col-span-4",
						"aria-label": "Footer",
						children: [navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: item.id === "top" ? "/#top" : `/#${item.id}`,
							className: "min-h-11 py-2 text-sm text-muted hover:text-foreground",
							children: item.label
						}, item.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/resume",
							className: "min-h-11 py-2 text-sm text-muted hover:text-foreground",
							children: "Résumé"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "md:col-span-3 md:text-right",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#top",
							className: "inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, {
								className: "size-4",
								"aria-hidden": "true"
							}), "Back to top"]
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-12 text-sm text-subtle",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "tabular-nums",
						children: ["© ", year]
					}),
					" ",
					profile.name
				]
			})]
		})
	});
}
function sectionHref(id, onHome) {
	if (id === "top") return onHome ? "#top" : "/";
	return onHome ? `#${id}` : `/#${id}`;
}
function ThemeToggle({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		"aria-label": "Toggle color theme",
		className: cn(buttonVariants({
			variant: "outline",
			size: "icon"
		}), className),
		onClick: () => {
			const root = document.documentElement;
			const nextLight = !root.classList.contains("light");
			root.classList.toggle("light", nextLight);
			root.style.backgroundColor = "";
			localStorage.setItem("as-theme", nextLight ? "light" : "dark");
			const meta = document.querySelector("meta[name=\"theme-color\"]");
			if (meta) meta.setAttribute("content", nextLight ? "#f3f0e8" : "#0c0c0e");
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "light:hidden",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SunIcon, {})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "hidden light:inline",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoonIcon, {})
		})]
	});
}
function SunIcon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className: "size-4",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.75",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "12",
			cy: "12",
			r: "3.25"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M12 3.5v1.5M12 19v1.5M4.9 4.9l1.1 1.1M18 18l1.1 1.1M3.5 12H5M19 12h1.5M4.9 19.1 6 18M18 6l1.1-1.1",
			strokeLinecap: "round"
		})]
	});
}
function MoonIcon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		className: "size-4",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.75",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M16.5 13.2A6.2 6.2 0 0 1 10.8 5 6.4 6.4 0 1 0 16.5 13.2Z",
			strokeLinejoin: "round"
		})
	});
}
function Nav() {
	const onHome = useRouterState({ select: (state) => state.location.pathname }) === "/";
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)("top");
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!onHome) return;
		const ids = [
			"about",
			"projects",
			"skills",
			"experience",
			"exploring",
			"contact"
		];
		let frame = 0;
		const update = () => {
			const marker = window.scrollY + 120;
			let current = "top";
			for (const id of ids) {
				const el = document.getElementById(id);
				if (el && el.offsetTop <= marker) current = id;
			}
			if (current === "exploring") current = "experience";
			setActive((prev) => prev === current ? prev : current);
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
	}, [onHome]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		id: "top",
		className: "nav-bar no-print fixed inset-x-0 top-0 z-40",
		"data-scrolled": scrolled ? "true" : "false",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 w-full max-w-7xl items-center gap-3 px-5 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "font-serif text-xl italic tracking-tight text-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sm:hidden",
						children: "AS"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden sm:inline",
						children: profile.name
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "ml-6 hidden items-center lg:flex",
					"aria-label": "Primary",
					children: navItems.map((item) => {
						const isActive = onHome && (item.id === "top" ? active === "top" : active === item.id);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: sectionHref(item.id, onHome),
							"aria-current": isActive ? "true" : void 0,
							className: cn("relative inline-flex min-h-11 items-center px-3 text-sm transition-colors duration-150", isActive ? "text-foreground" : "text-muted hover:text-foreground"),
							children: [item.label, isActive ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-x-3 bottom-1.5 h-px bg-accent" }) : null]
						}, item.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ml-auto flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: sectionHref("contact", onHome),
							className: cn(buttonVariants({ variant: "accent" }), "hidden lg:inline-flex"),
							children: "Let's Talk"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
							open,
							onOpenChange: setOpen,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
								className: cn(buttonVariants({
									variant: "outline",
									size: "icon"
								}), "lg:hidden"),
								"aria-label": "Open menu",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
								className: "menu-sheet fixed inset-0 z-50 overflow-y-auto bg-background outline-none",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									initial: {
										opacity: 0,
										y: 8
									},
									animate: {
										opacity: 1,
										y: 0
									},
									transition: {
										duration: .25,
										ease: [
											.22,
											1,
											.36,
											1
										]
									},
									className: "mx-auto flex min-h-full w-full max-w-3xl flex-col",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
												className: "font-serif text-3xl text-foreground",
												children: "Menu"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
												className: buttonVariants({
													variant: "outline",
													size: "icon"
												}),
												"aria-label": "Close menu",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
											className: "sr-only",
											children: "Sections of the site."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
											className: "mt-10 flex flex-col",
											"aria-label": "Mobile",
											children: navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
												asChild: true,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: sectionHref(item.id, onHome),
													className: "border-b border-border py-4 font-serif text-4xl text-foreground",
													children: item.label
												})
											}, item.id))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-8 flex items-center gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
												asChild: true,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: sectionHref("contact", onHome),
													className: cn(buttonVariants({ variant: "accent" }), "flex-1"),
													children: "Let's Talk"
												})
											})]
										})
									]
								})
							}) })]
						})
					]
				})
			]
		})
	});
}
function ScrollProgress() {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const node = ref.current;
		if (!node) return;
		const update = () => {
			const height = document.documentElement.scrollHeight - window.innerHeight;
			const progress = height > 0 ? window.scrollY / height : 0;
			node.style.transform = `scaleX(${progress})`;
		};
		update();
		window.addEventListener("scroll", update, { passive: true });
		return () => window.removeEventListener("scroll", update);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		"aria-hidden": "true",
		className: "no-print pointer-events-none fixed inset-x-0 top-0 z-30 h-px origin-left scale-x-0 bg-accent"
	});
}
function Shell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MotionConfig, {
		reducedMotion: "user",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#content",
				className: "skip-link no-print",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgress, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "content",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { cn as a, buttonVariants as i, Shell as n, SocialList as r, Button as t };
