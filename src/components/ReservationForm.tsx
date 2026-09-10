"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  notes: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  guests: "2",
  notes: "",
};

type Errors = Partial<Record<keyof FormState, string>>;

function validate(values: FormState): Errors {
  const errors: Errors = {};

  if (!values.name.trim()) errors.name = "Please enter your full name.";

  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Please enter a phone number.";
  } else if (!/^[0-9+()\-.\s]{7,}$/.test(values.phone)) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!values.date) errors.date = "Please choose a date.";
  if (!values.time) errors.time = "Please choose a time.";

  const guestsNum = Number(values.guests);
  if (!values.guests || Number.isNaN(guestsNum) || guestsNum < 1) {
    errors.guests = "Party size must be at least 1.";
  } else if (guestsNum > 20) {
    errors.guests = "For parties over 20, please call us directly.";
  }

  return errors;
}

const inputClasses =
  "w-full rounded-xl border border-midnight-950/15 bg-cream-50 px-4 py-3.5 text-sm font-normal text-midnight-950 outline-none transition-colors placeholder:text-midnight-950/35 focus:border-espresso-500";

const labelClasses = "text-xs font-semibold uppercase tracking-wider text-midnight-800/70";

export function ReservationForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
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
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-4 rounded-2xl border border-espresso-500/30 bg-cream-50 px-8 py-16 text-center"
      >
        <CheckCircle2 className="text-espresso-500" size={44} />
        <h3 className="text-2xl font-bold text-midnight-950">Request received</h3>
        <p className="max-w-sm text-sm font-normal leading-relaxed text-midnight-800/70">
          Thank you, {values.name.split(" ")[0] || "friend"}. We&apos;ll confirm your
          table for {values.guests} on {values.date} at {values.time} by email
          shortly.
        </p>
        <button
          type="button"
          onClick={() => {
            setValues(initialState);
            setSubmitted(false);
          }}
          className="mt-2 text-sm font-semibold uppercase tracking-wide text-espresso-600 underline underline-offset-4"
        >
          Make another request
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="grid grid-cols-1 gap-6 rounded-2xl bg-cream-50 p-8 sm:grid-cols-2 sm:p-10"
    >
      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="name" className={labelClasses}>
          Full Name
        </label>
        <input
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
          className={inputClasses}
          placeholder="Jordan Smith"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="text-xs font-medium text-espresso-700">
            {errors.name}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className={labelClasses}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          className={inputClasses}
          placeholder="you@email.com"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="text-xs font-medium text-espresso-700">
            {errors.email}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className={labelClasses}>
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={values.phone}
          onChange={handleChange}
          className={inputClasses}
          placeholder="+250 788 123 456"
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "phone-error" : undefined}
        />
        {errors.phone && (
          <p id="phone-error" className="text-xs font-medium text-espresso-700">
            {errors.phone}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="date" className={labelClasses}>
          Date
        </label>
        <input
          id="date"
          name="date"
          type="date"
          value={values.date}
          onChange={handleChange}
          className={inputClasses}
          aria-invalid={!!errors.date}
          aria-describedby={errors.date ? "date-error" : undefined}
        />
        {errors.date && (
          <p id="date-error" className="text-xs font-medium text-espresso-700">
            {errors.date}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="time" className={labelClasses}>
          Time
        </label>
        <input
          id="time"
          name="time"
          type="time"
          value={values.time}
          onChange={handleChange}
          className={inputClasses}
          aria-invalid={!!errors.time}
          aria-describedby={errors.time ? "time-error" : undefined}
        />
        {errors.time && (
          <p id="time-error" className="text-xs font-medium text-espresso-700">
            {errors.time}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="guests" className={labelClasses}>
          Party Size
        </label>
        <select
          id="guests"
          name="guests"
          value={values.guests}
          onChange={handleChange}
          className={inputClasses}
          aria-invalid={!!errors.guests}
          aria-describedby={errors.guests ? "guests-error" : undefined}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
            <option key={n} value={n}>
              {n} {n === 1 ? "guest" : "guests"}
            </option>
          ))}
        </select>
        {errors.guests && (
          <p id="guests-error" className="text-xs font-medium text-espresso-700">
            {errors.guests}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="notes" className={labelClasses}>
          Special Requests (optional)
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          value={values.notes}
          onChange={handleChange}
          className={inputClasses}
          placeholder="Anniversary, allergies, seating preference..."
        />
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="w-full rounded-full bg-espresso-500 px-7 py-4 text-sm font-semibold uppercase tracking-wide text-cream-50 transition-colors hover:bg-espresso-600 sm:w-auto"
        >
          Request Reservation
        </button>
      </div>
    </form>
  );
}
