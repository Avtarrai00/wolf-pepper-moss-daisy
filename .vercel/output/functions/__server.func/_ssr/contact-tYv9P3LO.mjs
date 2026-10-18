import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
import { i as string, r as object } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-tYv9P3LO.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
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
function parseWebhook(raw) {
	let url;
	try {
		url = new URL(raw);
	} catch {
		return null;
	}
	if (url.protocol !== "https:") return null;
	const host = url.hostname.toLowerCase().replace(/^\[|\]$/g, "");
	if (host === "localhost" || host.endsWith(".local") || host.endsWith(".internal") || host === "0.0.0.0" || host === "::1") return null;
	const ipv4 = host.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);
	if (ipv4) {
		const parts = ipv4.slice(1).map(Number);
		if (parts.some((part) => part > 255)) return null;
		const a = parts[0] ?? 0;
		const b = parts[1] ?? 0;
		if (a === 10 || a === 127 || a === 0 || a === 169 && b === 254 || a === 172 && b >= 16 && b <= 31 || a === 192 && b === 168) return null;
	}
	return url;
}
var deliverContact_createServerFn_handler = createServerRpc({
	id: "610f15d6a9c6e5d677d0daac6344f857fdd6b96c37d6ae13d4ceab95fd713a0f",
	name: "deliverContact",
	filename: "src/lib/site/contact.ts"
}, (opts) => deliverContact.__executeServer(opts));
var deliverContact = createServerFn({ method: "POST" }).validator((input) => contactSchema.parse(input)).handler(deliverContact_createServerFn_handler, async ({ data }) => {
	const parsed = contactSchema.safeParse(data);
	if (!parsed.success) return {
		status: "invalid",
		message: "Please check the form and try again."
	};
	const raw = process.env.CONTACT_WEBHOOK_URL?.trim();
	if (!raw) return { status: "unconfigured" };
	const url = parseWebhook(raw);
	if (!url) return {
		status: "error",
		message: "The mail service address isn't usable."
	};
	try {
		if (!(await fetch(url, {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({
				name: parsed.data.name,
				email: parsed.data.email,
				subject: parsed.data.subject,
				message: parsed.data.message
			}),
			signal: AbortSignal.timeout(8e3)
		})).ok) return {
			status: "error",
			message: "The mail service rejected the message. Nothing was delivered."
		};
		return { status: "sent" };
	} catch {
		return {
			status: "error",
			message: "The mail service could not be reached. Nothing was delivered."
		};
	}
});
//#endregion
export { deliverContact_createServerFn_handler };
