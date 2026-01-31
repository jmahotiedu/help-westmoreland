"use client";

import { useState, FormEvent } from "react";
import Button from "@/components/ui/Button";

interface FormData {
  contactName: string;
  email: string;
  phone: string;
  companyName: string;
  companySize: string;
  industry: string;
  partnershipType: string[];
  budget: string;
  timeline: string;
  message: string;
}

interface FormErrors {
  contactName?: string;
  email?: string;
  phone?: string;
  companyName?: string;
  partnershipType?: string;
  message?: string;
}

export default function PartnerForm() {
  const [formData, setFormData] = useState<FormData>({
    contactName: "",
    email: "",
    phone: "",
    companyName: "",
    companySize: "",
    industry: "",
    partnershipType: [],
    budget: "",
    timeline: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [honeypot, setHoneypot] = useState("");

  const formEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_PARTNER_ID;

  const partnershipTypes = [
    "Financial Sponsorship",
    "Employee Matching Gifts",
    "In-Kind Donations",
    "Volunteer Programs",
    "Marketing Partnership",
    "Pro Bono Services",
  ];

  const companySizes = [
    "1-10 employees",
    "11-50 employees",
    "51-200 employees",
    "201-500 employees",
    "501+ employees",
  ];

  const budgetRanges = [
    "Under $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000+",
    "Prefer to discuss",
  ];

  const timelineOptions = [
    "Immediate",
    "Within 1 month",
    "Within 3 months",
    "Within 6 months",
    "Long-term commitment",
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.contactName.trim()) {
      newErrors.contactName = "Contact name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }

    if (formData.partnershipType.length === 0) {
      newErrors.partnershipType = "Please select at least one partnership type";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please provide details about your partnership interest";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (honeypot) {
      setSubmitStatus("success");
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      if (formEndpoint) {
        const response = await fetch(
          formEndpoint.startsWith("http")
            ? formEndpoint
            : `https://formspree.io/f/${formEndpoint}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ...formData,
              partnershipType: formData.partnershipType.join(", "),
            }),
          }
        );

        if (response.ok) {
          setSubmitStatus("success");
          setFormData({
            contactName: "",
            email: "",
            phone: "",
            companyName: "",
            companySize: "",
            industry: "",
            partnershipType: [],
            budget: "",
            timeline: "",
            message: "",
          });
          setErrors({});
        } else {
          setSubmitStatus("error");
        }
      } else {
        const mailtoLink = `mailto:helpwestmoreland@gmail.com?subject=Partnership Inquiry - ${encodeURIComponent(
          formData.companyName
        )}&body=${encodeURIComponent(
          `Contact: ${formData.contactName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.companyName}\nSize: ${formData.companySize}\nIndustry: ${formData.industry}\n\nPartnership Interest: ${formData.partnershipType.join(", ")}\nBudget: ${formData.budget}\nTimeline: ${formData.timeline}\n\nMessage:\n${formData.message}`
        )}`;
        window.location.href = mailtoLink;
        setSubmitStatus("success");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCheckboxChange = (value: string) => {
    setFormData((prev) => {
      const updated = prev.partnershipType.includes(value)
        ? prev.partnershipType.filter((item) => item !== value)
        : [...prev.partnershipType, value];
      return { ...prev, partnershipType: updated };
    });
    if (errors.partnershipType) {
      setErrors((prev) => ({ ...prev, partnershipType: undefined }));
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitStatus === "success" && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
          <p className="font-semibold">Partnership inquiry submitted!</p>
          <p className="text-sm">
            Thank you for your interest in partnering with Help Westmoreland.
            Our partnerships team will contact you to discuss how we can work together.
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
        name="website"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid md:grid-cols-2 gap-6">
        {/* Contact Name */}
        <div>
          <label
            htmlFor="contactName"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Contact Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="contactName"
            name="contactName"
            value={formData.contactName}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition ${
              errors.contactName ? "border-red-500" : "border-gray-300"
            }`}
            disabled={isSubmitting}
          />
          {errors.contactName && (
            <p className="mt-1 text-sm text-red-600">{errors.contactName}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
            disabled={isSubmitting}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
          )}
        </div>

        {/* Company Name */}
        <div>
          <label
            htmlFor="companyName"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Company Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition ${
              errors.companyName ? "border-red-500" : "border-gray-300"
            }`}
            disabled={isSubmitting}
          />
          {errors.companyName && (
            <p className="mt-1 text-sm text-red-600">{errors.companyName}</p>
          )}
        </div>

        {/* Company Size */}
        <div>
          <label
            htmlFor="companySize"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Company Size
          </label>
          <select
            id="companySize"
            name="companySize"
            value={formData.companySize}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
            disabled={isSubmitting}
          >
            <option value="">Select size</option>
            {companySizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        {/* Industry */}
        <div>
          <label
            htmlFor="industry"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Industry
          </label>
          <input
            type="text"
            id="industry"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
            placeholder="e.g., Technology, Healthcare, Finance"
            disabled={isSubmitting}
          />
        </div>
      </div>

      {/* Partnership Type */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Partnership Interest <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {partnershipTypes.map((type) => (
            <label
              key={type}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={formData.partnershipType.includes(type)}
                onChange={() => handleCheckboxChange(type)}
                className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                disabled={isSubmitting}
              />
              <span className="text-sm text-gray-700">{type}</span>
            </label>
          ))}
        </div>
        {errors.partnershipType && (
          <p className="mt-1 text-sm text-red-600">{errors.partnershipType}</p>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Budget */}
        <div>
          <label
            htmlFor="budget"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Estimated Budget
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
            disabled={isSubmitting}
          >
            <option value="">Select range</option>
            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>

        {/* Timeline */}
        <div>
          <label
            htmlFor="timeline"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
            disabled={isSubmitting}
          >
            <option value="">Select timeline</option>
            {timelineOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Tell us about your partnership goals{" "}
          <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition resize-y ${
            errors.message ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Share your vision for partnering with us to help families in Westmoreland..."
          disabled={isSubmitting}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message}</p>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? "Submitting..." : "Submit Partnership Inquiry"}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        All partnership inquiries are confidential. We'll work with you to
        create a customized partnership that aligns with your company's values
        and goals.
      </p>
    </form>
  );
}
