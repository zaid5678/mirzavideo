"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  service: string;
  date: string;
  location: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  service: "",
  date: "",
  location: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const next: Partial<FormState> = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "A valid email is required";
    if (!form.service) next.service = "Please select a service";
    if (!form.message.trim()) next.message = "A message is required";
    return next;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }
    // TODO: wire up to a real form submission endpoint (e.g. Netlify Forms, Formspree, or API route)
    console.log("Form submission:", form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-16">
        <p className="font-serif text-4xl text-ink">
          Thanks — we&apos;ll be in touch.
        </p>
        <p className="font-sans text-sm text-grey mt-4">
          We typically respond within one working day.
        </p>
      </div>
    );
  }

  const inputBase =
    "w-full bg-transparent border-b border-ink py-3 font-sans text-sm text-ink placeholder:text-grey focus:outline-none focus:border-grey transition-colors duration-200";
  const labelBase = "block font-sans text-xs tracking-widest uppercase text-grey mb-2";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-10">
      {/* Name */}
      <div>
        <label htmlFor="name" className={labelBase}>
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          placeholder="Your full name"
          className={inputBase}
        />
        {errors.name && (
          <p className="font-sans text-xs text-grey mt-1">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={labelBase}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className={inputBase}
        />
        {errors.email && (
          <p className="font-sans text-xs text-grey mt-1">{errors.email}</p>
        )}
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className={labelBase}>
          Service
        </label>
        <select
          id="service"
          name="service"
          value={form.service}
          onChange={handleChange}
          className={`${inputBase} cursor-pointer appearance-none`}
        >
          <option value="" disabled>
            Select a service
          </option>
          <option value="Videography">Videography</option>
          <option value="Photography">Photography</option>
          <option value="Cinematography">Cinematography</option>
          <option value="Other">Other</option>
        </select>
        {errors.service && (
          <p className="font-sans text-xs text-grey mt-1">{errors.service}</p>
        )}
      </div>

      {/* Event Date */}
      <div>
        <label htmlFor="date" className={labelBase}>
          Event Date
        </label>
        <input
          id="date"
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
          className={inputBase}
        />
      </div>

      {/* Location */}
      <div>
        <label htmlFor="location" className={labelBase}>
          Location
        </label>
        <input
          id="location"
          name="location"
          type="text"
          value={form.location}
          onChange={handleChange}
          placeholder="City, venue or region"
          className={inputBase}
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelBase}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tell us about your project"
          className={`${inputBase} resize-none`}
        />
        {errors.message && (
          <p className="font-sans text-xs text-grey mt-1">{errors.message}</p>
        )}
      </div>

      {/* Submit */}
      <div className="pt-4">
        <button
          type="submit"
          className="font-sans text-xs tracking-widest uppercase bg-ink text-paper px-10 py-4 transition-all duration-200 hover:bg-paper hover:text-ink border border-ink"
        >
          Send Enquiry
        </button>
      </div>
    </form>
  );
}
