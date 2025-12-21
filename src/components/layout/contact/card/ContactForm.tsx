"use client";

import { useState } from "react";
import { FORMCONTENT } from "./constants";

const ContactForm = () => {
	const [status, setStatus] = useState<"idle" | "success">("idle");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		console.log("Submitted:", Object.fromEntries(formData));

		setStatus("success");
		e.currentTarget.reset();
		setTimeout(() => setStatus("idle"), 3000);
	};

	return (
		<div className="bg-white/10 p-8 rounded-3xl border border-white/10 backdrop-blur-md h-fit w-full">
			<div className="mb-6">
				<h2 className="text-2xl font-bold text-white mb-1">
					{FORMCONTENT.title}
				</h2>
			</div>

			<form onSubmit={handleSubmit} className="flex flex-col gap-5">
				{FORMCONTENT.fields.map((field, index) => (
					<div key={index} className="flex flex-col gap-2">
						<label className="text-sm font-medium text-neutral-300 ml-1">
							{field.label}
						</label>

						{field.type === "textarea" ? (
							<textarea
								name={field.name}
								placeholder={field.placeholder}
								required
								rows={4}
								className="bg-black/20 border border-white/10 rounded-xl p-3 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-lime-500 resize-none"
							/>
						) : (
							<input
								type={field.type}
								name={field.name}
								placeholder={field.placeholder}
								required
								className="bg-black/20 border border-white/10 rounded-xl p-3 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-lime-500"
							/>
						)}
					</div>
				))}

				<button
					type="submit"
					disabled={status === "success"}
					className={`mt-2 py-3 px-6 rounded-xl font-bold transition-all duration-300 ${
						status === "success"
							? "bg-green-600 text-white cursor-default"
							: "bg-white text-black hover:bg-neutral-200"
					}`}
				>
					{status === "success"
						? "Message Sent!"
						: FORMCONTENT.buttonText}
				</button>
			</form>
		</div>
	);
};

export default ContactForm;
