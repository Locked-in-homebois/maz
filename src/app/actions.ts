"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
	const name = formData.get("fullName") as string;
	const email = formData.get("email") as string;
	const message = formData.get("message") as string;

	if (!name || !email || !message) {
		return { error: "Missing required fields" };
	}

	try {
		const { data, error } = await resend.emails.send({
			from: "Contact Form <onboarding@resend.dev>",

			to: ["parsaxavier@gmail.com"],

			replyTo: email,
			subject: `New message from ${name}`,
			text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
		});
		// ...

		if (error) {
			return { error: error.message };
		}

		return { success: true, data };
	} catch (error) {
		return { error: "Failed to send email" };
	}
}
