import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { i as string, r as object } from "../_libs/zod.mjs";
import { a as highlights, c as personJsonLd, f as skillGroups, l as profile, m as visibleTimeline, n as contactNote, o as mailLink, p as socialLinks, r as exploring, u as projects } from "./profile-B5b42FQw.mjs";
import { a as Mail, d as Check, p as ArrowUpRight, u as Copy } from "../_libs/lucide-react.mjs";
import { r as AnimatePresence } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { a as cn, i as buttonVariants, n as Shell, r as SocialList, t as Button } from "./shell-BSASZSkp.mjs";
import { t as DownloadResume } from "./download-resume-Bd3sQs7N.mjs";
import { t as ProjectMedia } from "./project-media-t7jsgFhF.mjs";
import { a as siHtml5, c as siPython, d as siTypescript, f as siVite, i as siGithub, l as siReact, n as siFigma, o as siNodedotjs, r as siGit, s as siPostgresql, t as siCss, u as siTailwindcss } from "../_libs/simple-icons.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Dh0eOsyB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Reveal({ children, className }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const node = ref.current;
		if (!node) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const io = new IntersectionObserver((entries) => {
			const entry = entries[0];
			if (!entry) return;
			if (entry.isIntersecting) {
				node.style.transition = "opacity 600ms cubic-bezier(0.22, 1, 0.36, 1), transform 600ms cubic-bezier(0.22, 1, 0.36, 1)";
				node.style.opacity = "1";
				node.style.transform = "none";
				io.disconnect();
				return;
			}
			if (node.dataset.armed !== "true") {
				node.dataset.armed = "true";
				node.style.opacity = "0";
				node.style.transform = "translateY(12px)";
			}
		}, { threshold: .18 });
		io.observe(node);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className,
		children
	});
}
function Section({ id, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: cn("scroll-mt-24 border-t border-border py-20 md:py-28", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto w-full max-w-7xl px-5 md:px-8",
			children
		})
	});
}
function SectionHeading({ index, title, lede }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-2xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium uppercase tracking-label text-subtle",
				children: index
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 text-headline text-foreground",
				children: title
			}),
			lede ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-xl text-base text-muted md:text-lg",
				children: lede
			}) : null
		]
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "about",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 lg:grid-cols-12 lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-7 lg:col-start-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						index: "01 — About",
						title: "About me",
						lede: profile.introduction
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 max-w-xl font-serif text-2xl leading-snug text-foreground md:text-3xl",
						children: profile.philosophy
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 grid gap-6 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-sans text-xs font-medium uppercase tracking-label text-subtle",
							children: "Interests"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted",
							children: profile.interests
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-sans text-xs font-medium uppercase tracking-label text-subtle",
							children: "Goals"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted",
							children: profile.goals
						})] })]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-10 grid gap-3 sm:grid-cols-2",
					children: highlights.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-card border border-border bg-elevated p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-sans text-base font-medium text-foreground",
							children: item.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: item.text
						})]
					}, item.title))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-5 lg:col-start-1 lg:row-start-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:sticky lg:top-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-72 overflow-hidden rounded-card border border-border bg-elevated lg:h-auto lg:frame-portrait",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: profile.aboutImage,
							alt: profile.aboutImageAlt,
							width: 1100,
							height: 1467,
							loading: "lazy",
							decoding: "async",
							className: "h-full w-full object-cover"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex flex-col gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/resume",
							className: buttonVariants(),
							children: "View résumé"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DownloadResume, {})]
					})]
				})
			})]
		})
	});
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var contactSchema = object({
	name: string().trim().min(2, "Name should be at least 2 characters.").max(80, "Name is too long."),
	email: string().trim().max(120, "Email is too long.").regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Enter a valid email address."),
	subject: string().trim().min(3, "Add a short subject.").max(140, "Subject is too long."),
	message: string().trim().min(10, "Message should be at least 10 characters.").max(4e3, "Message is too long.")
});
var deliverContact = createServerFn({ method: "POST" }).validator((input) => contactSchema.parse(input)).handler(createSsrRpc("610f15d6a9c6e5d677d0daac6344f857fdd6b96c37d6ae13d4ceab95fd713a0f"));
var empty = {
	name: "",
	email: "",
	subject: "",
	message: ""
};
function fieldErrors(error) {
	const next = {};
	for (const issue of error.issues) {
		const key = issue.path[0];
		if ((key === "name" || key === "email" || key === "subject" || key === "message") && !next[key]) next[key] = issue.message;
	}
	return next;
}
function Contact() {
	const [values, setValues] = (0, import_react.useState)(empty);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [summary, setSummary] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)({ type: "idle" });
	const [emailCopy, setEmailCopy] = (0, import_react.useState)("");
	const [noteCopy, setNoteCopy] = (0, import_react.useState)("");
	const email = profile.email.trim();
	const directMail = mailLink();
	async function copyText(text, setMessage) {
		try {
			await navigator.clipboard.writeText(text);
			setMessage("Copied.");
		} catch {
			setMessage("Couldn't copy. Select the text and copy it manually.");
		}
		window.setTimeout(() => setMessage(""), 2200);
	}
	function update(key, value) {
		setValues((prev) => ({
			...prev,
			[key]: value
		}));
		setErrors((prev) => ({
			...prev,
			[key]: void 0
		}));
	}
	async function onSubmit(event) {
		event.preventDefault();
		setSummary("");
		setNoteCopy("");
		const parsed = contactSchema.safeParse(values);
		if (!parsed.success) {
			const next = fieldErrors(parsed.error);
			setErrors(next);
			setSummary("Please fix the highlighted fields.");
			setStatus({ type: "idle" });
			const form = document.getElementById("contact-form");
			if (form && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
				form.classList.remove("shake");
				form.offsetWidth;
				form.classList.add("shake");
			}
			const first = [
				"name",
				"email",
				"subject",
				"message"
			].find((key) => next[key]);
			if (first) document.getElementById(first)?.focus();
			return;
		}
		setStatus({ type: "sending" });
		try {
			const result = await deliverContact({ data: parsed.data });
			if (result.status === "sent") {
				setValues(empty);
				setErrors({});
				setStatus({ type: "sent" });
				return;
			}
			if (result.status === "unconfigured") {
				setStatus({ type: "unconfigured" });
				return;
			}
			setStatus({
				type: "error",
				message: result.message
			});
		} catch {
			setStatus({
				type: "error",
				message: "The message could not be sent. Nothing was delivered."
			});
		}
	}
	const note = contactNote(values);
	const composedMail = mailLink(values.subject, note);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "contact",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 lg:grid-cols-12 lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-label text-subtle",
						children: "06 — Contact"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-headline text-foreground",
						children: "Have an interesting idea? Let's build something great."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-md text-base text-muted",
						children: "Write directly, or leave a note. A message is only marked sent when a mail service actually accepts it."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 text-sm text-subtle",
						children: [
							"Based in ",
							profile.location,
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8",
						children: [email && directMail ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: directMail,
								className: "inline-flex min-h-11 items-center gap-2 text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
									className: "size-4",
									"aria-hidden": "true"
								}), email]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "sm",
								onClick: () => copyText(email, setEmailCopy),
								children: [emailCopy === "Copied." ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
									className: "size-4",
									"aria-hidden": "true"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
									className: "size-4",
									"aria-hidden": "true"
								}), "Copy email"]
							})]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: "Email address not added yet."
						}), emailCopy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-subtle",
							role: "status",
							children: emailCopy
						}) : null]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6",
						children: socialLinks().length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialList, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: "Social profiles not added yet."
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
					id: "contact-form",
					noValidate: true,
					onSubmit,
					className: "rounded-card border border-border bg-elevated p-6 md:p-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-5",
						children: [
							summary ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								role: "alert",
								className: "text-sm text-danger",
								children: summary
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-5 md:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									id: "name",
									label: "Name",
									error: errors.name,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "name",
										name: "name",
										autoComplete: "name",
										value: values.name,
										onChange: (event) => update("name", event.target.value),
										"aria-invalid": Boolean(errors.name),
										"aria-describedby": errors.name ? "name-error" : void 0,
										className: inputClass
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									id: "email",
									label: "Email",
									error: errors.email,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "email",
										name: "email",
										type: "email",
										autoComplete: "email",
										inputMode: "email",
										value: values.email,
										onChange: (event) => update("email", event.target.value),
										"aria-invalid": Boolean(errors.email),
										"aria-describedby": errors.email ? "email-error" : void 0,
										className: inputClass
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								id: "subject",
								label: "Subject",
								error: errors.subject,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "subject",
									name: "subject",
									autoComplete: "off",
									value: values.subject,
									onChange: (event) => update("subject", event.target.value),
									"aria-invalid": Boolean(errors.subject),
									"aria-describedby": errors.subject ? "subject-error" : void 0,
									className: inputClass
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								id: "message",
								label: "Message",
								error: errors.message,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									id: "message",
									name: "message",
									rows: 6,
									value: values.message,
									onChange: (event) => update("message", event.target.value),
									"aria-invalid": Boolean(errors.message),
									"aria-describedby": errors.message ? "message-error" : void 0,
									className: cn(inputClass, "min-h-36 resize-y py-3")
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatePresence, {
								mode: "wait",
								children: [
									status.type === "unconfigured" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
										role: "status",
										initial: {
											opacity: 0,
											y: 6
										},
										animate: {
											opacity: 1,
											y: 0
										},
										exit: {
											opacity: 0,
											y: -6
										},
										transition: { duration: .2 },
										className: "rounded-field border border-border bg-background p-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm text-foreground",
												children: "This note was not sent."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-sm text-muted",
												children: "Automatic delivery isn't connected. Copy the message, or open it in your mail app if an address is listed."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-4 flex flex-wrap gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
													variant: "outline",
													onClick: () => copyText(note, setNoteCopy),
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
														className: "size-4",
														"aria-hidden": "true"
													}), "Copy message"]
												}), composedMail ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: composedMail,
													className: buttonVariants(),
													children: "Open mail app"
												}) : null]
											}),
											noteCopy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-3 text-sm text-subtle",
												children: noteCopy
											}) : null
										]
									}, "unconfigured") : null,
									status.type === "sent" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
										role: "status",
										initial: {
											opacity: 0,
											y: 6
										},
										animate: {
											opacity: 1,
											y: 0
										},
										exit: {
											opacity: 0,
											y: -6
										},
										transition: { duration: .2 },
										className: "rounded-field border border-border bg-background p-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm text-foreground",
												children: "Message sent."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-sm text-muted",
												children: "It was accepted by the connected mail service."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												className: "mt-4",
												variant: "outline",
												onClick: () => setStatus({ type: "idle" }),
												children: "Write another"
											})
										]
									}, "sent") : null,
									status.type === "error" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										role: "alert",
										className: "text-sm text-danger",
										children: status.message
									}, "error") : null
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex justify-end",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									variant: "accent",
									disabled: status.type === "sending",
									className: "w-full sm:w-auto",
									children: status.type === "sending" ? "Sending…" : "Send message"
								})
							})
						]
					})
				})
			})]
		})
	});
}
var inputClass = "h-11 w-full rounded-field border border-border bg-background px-3 text-base text-foreground placeholder:text-subtle disabled:opacity-50";
function Field({ id, label, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			htmlFor: id,
			className: "mb-2 block text-sm text-muted",
			children: label
		}),
		children,
		error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			id: `${id}-error`,
			className: "mt-2 text-sm text-danger",
			children: error
		}) : null
	] });
}
var kindLabel = {
	work: "Work",
	education: "Education",
	project: "Project",
	milestone: "Milestone"
};
function Experience() {
	const entries = visibleTimeline();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "experience",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			index: "04 — Journey",
			title: "Experience",
			lede: "Education, roles, and milestones."
		}) }), entries.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-12 max-w-2xl rounded-card border border-border bg-elevated p-6 md:p-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-serif text-3xl text-foreground",
				children: "The timeline is open."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-muted md:text-base",
				children: "Nothing is listed yet. Roles, studies, and milestones you add will appear here, in the order you write them. Empty entries stay hidden — this space will not invent a history."
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mt-12 border-l border-border",
			children: entries.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "relative pb-12 pl-8 last:pb-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute top-1.5 -left-1 size-2 rounded-full bg-accent",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs font-medium uppercase tracking-label text-subtle",
						children: [kindLabel[entry.kind], /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "tabular-nums",
							children: [
								" ",
								"· ",
								entry.start,
								entry.end.trim() ? ` — ${entry.end}` : ""
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-2 font-serif text-2xl text-foreground md:text-3xl",
						children: entry.title
					}),
					entry.organization.trim() ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: entry.organization
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-sm text-foreground md:text-base",
						children: entry.description
					}),
					entry.skills.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 flex flex-wrap gap-2",
						children: entry.skills.map((skill) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "rounded-full border border-border px-3 py-1 text-xs text-muted",
							children: skill
						}, skill))
					}) : null
				]
			}, entry.id))
		})]
	});
}
function Exploring() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "exploring",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			index: "05 — Now",
			title: "Currently Exploring",
			lede: "A snapshot of what has my attention. It changes when the work changes."
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-12 grid gap-4 md:grid-cols-2",
			children: exploring.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "rounded-card border border-border bg-elevated p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-sans text-xs font-medium uppercase tracking-label text-subtle",
							children: item.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 text-xs text-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("size-1.5 rounded-full bg-accent", item.pulse && "pulse-dot"),
								"aria-hidden": "true"
							}), item.status]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 font-serif text-2xl text-foreground",
						children: item.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted",
						children: item.text
					})
				]
			}, item.id))
		})]
	});
}
var words = [
	{
		text: "Building",
		em: false
	},
	{
		text: "ideas",
		em: false
	},
	{
		text: "into",
		em: false
	},
	{
		text: "extraordinary",
		em: true
	},
	{
		text: "digital",
		em: false
	},
	{
		text: "experiences.",
		em: false
	}
];
function Hero() {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const node = ref.current;
		if (!node) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		if (window.matchMedia("(pointer: coarse)").matches) return;
		const onMove = (event) => {
			const rect = node.getBoundingClientRect();
			node.style.setProperty("--px", `${event.clientX - rect.left}px`);
			node.style.setProperty("--py", `${event.clientY - rect.top}px`);
		};
		node.addEventListener("pointermove", onMove, { passive: true });
		return () => node.removeEventListener("pointermove", onMove);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref,
		className: "relative overflow-hidden pt-20 lg:min-h-screen lg:pt-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-glow pointer-events-none absolute inset-0",
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto flex w-full max-w-7xl flex-col px-5 pb-16 md:px-8 lg:min-h-[calc(100vh-7rem)] lg:pb-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-end gap-12 lg:grid-cols-12 lg:gap-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "inline-flex items-center gap-2 rounded-full border border-border bg-elevated px-3 py-1.5 text-sm text-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "pulse-dot size-1.5 rounded-full bg-accent",
								"aria-hidden": "true"
							}), profile.availability]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-6 max-w-4xl text-display text-foreground",
							children: words.map((word, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("hero-word inline-block", word.em && "italic"),
								style: { animationDelay: `${index * 40}ms` },
								children: word.text
							}), index < words.length - 1 ? " " : null] }, word.text))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-md text-base text-muted md:text-lg",
							children: "Creative developer, technology enthusiast, and problem solver. I like ambitious ideas, and I like turning them into products people can use."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#projects",
								className: cn(buttonVariants(), "w-full sm:w-auto"),
								children: "Explore My Work"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact",
								className: cn(buttonVariants({ variant: "outline" }), "w-full sm:w-auto"),
								children: "Let's Connect"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-10 flex flex-wrap gap-x-10 gap-y-4 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-subtle",
								children: "Location"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 text-foreground",
								children: profile.location
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-subtle",
								children: "Focus"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 text-foreground",
								children: profile.focus
							})] })]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-64 overflow-hidden rounded-card border border-border bg-elevated sm:h-80 lg:h-auto lg:frame-portrait",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: profile.portrait,
							alt: profile.portraitAlt,
							width: 1100,
							height: 1467,
							fetchPriority: "high",
							decoding: "async",
							className: "h-full w-full object-cover"
						})
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#about",
				className: "mt-12 inline-flex items-center gap-3 self-start text-xs font-medium uppercase tracking-label text-subtle",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "scroll-line",
					"aria-hidden": "true"
				}), "Scroll"]
			})]
		})]
	});
}
function ProjectRow({ project, index }) {
	const flip = index % 2 === 1;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		className: "py-10 md:py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/work/$slug",
			params: { slug: project.slug },
			className: "group grid items-center gap-6 lg:grid-cols-12 lg:gap-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: flip ? "lg:order-2 lg:col-span-7" : "lg:col-span-7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectMedia, {
					project,
					parallax: true,
					priority: index === 0
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: flip ? "lg:order-1 lg:col-span-5" : "lg:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-4 text-xs font-medium uppercase tracking-label text-subtle",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: project.category }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums",
							children: String(index + 1).padStart(2, "0")
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-3 font-serif text-4xl text-foreground md:text-5xl",
						children: project.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-md text-base text-muted",
						children: project.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 flex flex-wrap gap-2",
						children: project.stack.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "rounded-full border border-border px-3 py-1 text-xs text-muted",
							children: item
						}, item))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 inline-flex items-center gap-2 text-sm text-foreground",
						children: [project.sample ? "Sample study" : "View study", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
							className: "size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
							"aria-hidden": "true"
						})]
					})
				]
			})]
		})
	});
}
function Projects() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "projects",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			index: "02 — Work",
			title: "Featured projects",
			lede: "Sample studies, shown so the layout is ready. Replace them with your own work — nothing here is a client, a launch, or a metric."
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 divide-y divide-border border-y border-border",
			children: projects.map((project, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectRow, {
				project,
				index
			}, project.slug))
		})]
	});
}
var marks = {
	typescript: siTypescript,
	react: siReact,
	html: siHtml5,
	css: siCss,
	tailwind: siTailwindcss,
	vite: siVite,
	node: siNodedotjs,
	postgres: siPostgresql,
	python: siPython,
	git: siGit,
	github: siGithub,
	figma: siFigma
};
function TechMark({ name, label }) {
	const icon = name ? marks[name] : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "flex size-7 shrink-0 items-center justify-center text-muted",
		"aria-hidden": "true",
		children: icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 24 24",
			className: "size-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: icon.path,
				fill: "currentColor"
			})
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "flex size-7 items-center justify-center rounded-field border border-border text-xs text-foreground",
			children: label.slice(0, 1)
		})
	});
}
function Skills() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "skills",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			index: "03 — Skills",
			title: "Skills & technologies",
			lede: "A working inventory, not a scorecard. Names only — no made-up percentages."
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-6",
			children: skillGroups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: cn("rounded-card border border-border bg-elevated p-6", group.span === "half" ? "xl:col-span-3" : "xl:col-span-2"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-sans text-xs font-medium uppercase tracking-label text-subtle",
						children: group.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted",
						children: group.note
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 flex flex-col gap-3",
						children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3 text-sm text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechMark, {
								name: item.mark,
								label: item.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.name })]
						}, item.name))
					})
				]
			}, group.id))
		})]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skills, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Exploring, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
			type: "application/ld+json",
			dangerouslySetInnerHTML: { __html: JSON.stringify(personJsonLd()) }
		})
	] });
}
//#endregion
export { Home as component };
