"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";

type FormState = { name: string; email: string; message: string };
type Errors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = { name: "", email: "", message: "" };

function validate(values: FormState): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.message.trim()) errors.message = "Please enter a message.";
  return errors;
}

const inputClasses =
  "w-full rounded-xl border border-cream-50/15 bg-midnight-800 px-4 py-3.5 text-sm font-normal text-cream-50 outline-none transition-colors placeholder:text-cream-200/35 focus:border-espresso-400";

const labelClasses = "text-xs font-semibold uppercase tracking-wider text-cream-200/60";

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((err) => ({ ...err, [name]: undefined }));
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validation = validate(values);
    setErrors(validation);
    if (Object.keys(validation).length === 0) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-espresso-500/30 bg-midnight-800 px-8 py-14 text-center">
        <CheckCircle2 className="text-espresso-400" size={40} />
        <h3 className="text-xl font-bold text-cream-50">Message sent</h3>
        <p className="max-w-sm text-sm font-normal leading-relaxed text-cream-200/70">
          Thanks for reaching out — we typically reply within one business day.
        </p>
        <button
          type="button"
          onClick={() => {
            setValues(initialState);
            setSubmitted(false);
          }}
          className="mt-2 text-sm font-semibold uppercase tracking-wide text-espresso-400 underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="contact-name" className={labelClasses}>
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          value={values.name}
          onChange={handleChange}
          className={inputClasses}
          placeholder="Jordan Smith"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
        />
        {errors.name && (
          <p id="contact-name-error" className="text-xs font-medium text-espresso-400">
            {errors.name}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-email" className={labelClasses}>
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          className={inputClasses}
          placeholder="you@email.com"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
        />
        {errors.email && (
          <p id="contact-email-error" className="text-xs font-medium text-espresso-400">
            {errors.email}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-message" className={labelClasses}>
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          className={inputClasses}
          placeholder="How can we help?"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
        />
        {errors.message && (
          <p id="contact-message-error" className="text-xs font-medium text-espresso-400">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-espresso-500 px-7 py-4 text-sm font-semibold uppercase tracking-wide text-cream-50 transition-colors hover:bg-espresso-600 sm:w-auto"
      >
        Send Message
      </button>
    </form>
  );
}
