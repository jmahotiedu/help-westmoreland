"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters"),
  email: z.string().min(1, "Email is required").email("Please enter a valid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z
    .string()
    .min(1, "Message is required")
    .min(10, "Message must be at least 10 characters"),
  website: z.string().max(0).optional(), // honeypot
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const formEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ID;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      website: "",
    },
  });

  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = async (data: ContactFormData) => {
    if (data.website) {
      setSubmitStatus("success");
      return;
    }

    setSubmitStatus("idle");

    try {
      if (formEndpoint) {
        const response = await fetch(
          formEndpoint.startsWith("http")
            ? formEndpoint
            : `https://formspree.io/f/${formEndpoint}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: data.name,
              email: data.email,
              subject: data.subject,
              message: data.message,
            }),
          }
        );

        if (response.ok) {
          setSubmitStatus("success");
          reset();
        } else {
          setSubmitStatus("error");
        }
      } else {
        const mailtoLink = `mailto:helpwestmoreland@gmail.com?subject=${encodeURIComponent(
          data.subject
        )}&body=${encodeURIComponent(
          `From: ${data.name}\nEmail: ${data.email}\n\n${data.message}`
        )}`;
        window.location.href = mailtoLink;
        setSubmitStatus("success");
      }
    } catch {
      setSubmitStatus("error");
    }
  };

  const inputClass = (fieldError: boolean) =>
    cn(
      "w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition",
      fieldError ? "border-red-500" : "border-gray-300"
    );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {submitStatus === "success" && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
          <p className="font-semibold">Message sent successfully!</p>
          <p className="text-sm">
            Thank you for contacting us. We&apos;ll get back to you within 24-48 hours.
          </p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
          <p className="font-semibold">Something went wrong</p>
          <p className="text-sm">
            Please try again or email us directly at{" "}
            <a
              href="mailto:helpwestmoreland@gmail.com"
              className="underline font-medium"
            >
              helpwestmoreland@gmail.com
            </a>
          </p>
        </div>
      )}

      <input
        type="text"
        {...register("website")}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Your Name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          type="text"
          placeholder="John Doe"
          disabled={isSubmitting}
          className={inputClass(!!errors.name)}
          {...register("name")}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          placeholder="your@email.com"
          disabled={isSubmitting}
          className={inputClass(!!errors.email)}
          {...register("email")}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
          Subject <span className="text-red-500">*</span>
        </label>
        <input
          id="subject"
          type="text"
          placeholder="How can we help?"
          disabled={isSubmitting}
          className={inputClass(!!errors.subject)}
          {...register("subject")}
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={6}
          placeholder="Tell us more about your inquiry..."
          disabled={isSubmitting}
          className={cn(inputClass(!!errors.message), "resize-y")}
          {...register("message")}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        We typically respond within 24-48 hours. For urgent matters, please call
        or email us directly.
      </p>
    </form>
  );
}
