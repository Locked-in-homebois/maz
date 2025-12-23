"use client";

import { useState } from "react";
import { FORMCONTENT } from "./constants";
import { sendContactEmail } from "@/src/app/actions"; // Keeping your fixed import path
import { motion, AnimatePresence } from "motion/react";
import { Loader2, CheckCircle2 } from "lucide-react";

const ContactForm = () => {
	const [status, setStatus] = useState<
		"idle" | "submitting" | "success" | "error"
	>("idle");

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// 1. Capture the form element BEFORE the await so we don't lose it
		const form = e.currentTarget;
		const formData = new FormData(form);

		setStatus("submitting");

		// 2. Send the email
		const result = await sendContactEmail(formData);

		if (result?.success) {
			setStatus("success");
			form.reset(); // Now this works because we used the captured variable 'form'

			// Reset back to form after 3 seconds
			setTimeout(() => setStatus("idle"), 3000);
		} else {
			console.error(result?.error);
			setStatus("error");
			setTimeout(() => setStatus("idle"), 3000);
		}
	};

	return (
		<div className="bg-white/10 p-8 rounded-3xl border border-white/10 backdrop-blur-md h-fit w-full overflow-hidden relative min-h-100">
			<AnimatePresence mode="wait">
				{status === "success" ? (
					// SUCCESS VIEW
					<motion.div
						key="success"
						initial={{ opacity: 0, y: 10, scale: 0.95 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: -10, scale: 0.95 }}
						transition={{ duration: 0.4, ease: "easeOut" }}
						className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 h-full"
					>
						<motion.div
							initial={{ scale: 0, rotate: -45 }}
							animate={{ scale: 1, rotate: 0 }}
							transition={{
								type: "spring",
								stiffness: 200,
								damping: 15,
								delay: 0.1,
							}}
						>
							<CheckCircle2 className="w-20 h-20 text-logo mb-4" />
						</motion.div>
						<h3 className="text-2xl font-bold text-white mb-2">
							Message Sent!
						</h3>
						<p className="text-neutral-300">
							We'll get back to you shortly.
						</p>
					</motion.div>
				) : (
					// FORM VIEW
					<motion.div
						key="form"
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: 20 }}
						transition={{ duration: 0.3 }}
					>
						<div className="mb-6">
							<h2 className="text-2xl font-bold text-white mb-1">
								{FORMCONTENT.title}
							</h2>
						</div>

						<form
							onSubmit={handleSubmit}
							className="flex flex-col gap-5"
						>
							{FORMCONTENT.fields.map((field, index) => (
								<div
									key={index}
									className="flex flex-col gap-2"
								>
									<label className="text-sm font-medium text-neutral-300 ml-1">
										{field.label}
									</label>

									{field.type === "textarea" ? (
										<textarea
											name={field.name}
											placeholder={field.placeholder}
											required
											rows={4}
											className="bg-black/20 border border-white/10 rounded-xl p-3 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-logocolor resize-none transition-all"
										/>
									) : (
										<input
											type={field.type}
											name={field.name}
											placeholder={field.placeholder}
											required
											className="bg-black/20 border border-white/10 rounded-xl p-3 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-logocolor transition-all"
										/>
									)}
								</div>
							))}

							<button
								type="submit"
								disabled={status === "submitting"}
								className={`mt-2 py-3 px-6 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
									status === "error"
										? "bg-red-500 text-white"
										: "bg-white text-black hover:bg-neutral-200"
								}`}
							>
								{status === "submitting" ? (
									<>
										<Loader2 className="w-5 h-5 animate-spin" />
										Sending...
									</>
								) : status === "error" ? (
									"Failed. Try Again"
								) : (
									FORMCONTENT.buttonText
								)}
							</button>
						</form>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default ContactForm;
