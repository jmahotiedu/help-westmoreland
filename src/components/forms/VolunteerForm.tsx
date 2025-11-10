"use client";

import { useState, FormEvent } from "react";
import Button from "@/components/ui/Button";

interface FormData {
  name: string;
  email: string;
  phone: string;
  location: string;
  availability: string[];
  skills: string[];
  experience: string;
  motivation: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  location?: string;
  availability?: string;
  motivation?: string;
}

export default function VolunteerForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    location: "",
    availability: [],
    skills: [],
    experience: "",
    motivation: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [honeypot, setHoneypot] = useState("");

  const formEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_VOLUNTEER_ID;

  const availabilityOptions = [
    "Weekdays",
    "Weekends",
    "Mornings",
    "Afternoons",
    "Evenings",
    "Full-time",
  ];

  const skillOptions = [
    "Food Distribution",
    "Transportation/Driving",
    "Administration",
    "Social Media/Marketing",
    "Counseling",
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
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

    if (!formData.location.trim()) {
      newErrors.location = "Location is required";
    }

    if (formData.availability.length === 0) {
      newErrors.availability = "Please select at least one availability option";
    }

    if (!formData.motivation.trim()) {
      newErrors.motivation = "Please tell us why you want to volunteer";
    } else if (formData.motivation.trim().length < 20) {
      newErrors.motivation = "Please provide at least 20 characters";
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
              availability: formData.availability.join(", "),
              skills: formData.skills.join(", "),
            }),
          }
        );

        if (response.ok) {
          setSubmitStatus("success");
          setFormData({
            name: "",
            email: "",
            phone: "",
            location: "",
            availability: [],
            skills: [],
            experience: "",
            motivation: "",
          });
          setErrors({});
        } else {
          setSubmitStatus("error");
        }
      } else {
        const mailtoLink = `mailto:helpwestmoreland@gmail.com?subject=Volunteer Application - ${encodeURIComponent(
          formData.name
        )}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nLocation: ${formData.location}\n\nAvailability: ${formData.availability.join(", ")}\nSkills: ${formData.skills.join(", ")}\n\nExperience:\n${formData.experience}\n\nMotivation:\n${formData.motivation}`
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

  const handleCheckboxChange = (
    field: "availability" | "skills",
    value: string
  ) => {
    setFormData((prev) => {
      const current = prev[field];
      const updated = current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value];
      return { ...prev, [field]: updated };
    });
    // Only clear error for fields that have error states
    if (field === "availability" && errors.availability) {
      setErrors((prev) => ({ ...prev, availability: undefined }));
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
          <p className="font-semibold">Application submitted successfully!</p>
          <p className="text-sm">
            Thank you for your interest in volunteering. Our team will review your application and contact you soon.
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
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            disabled={isSubmitting}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
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
            placeholder="+1 XXX-XXX-XXXX"
            disabled={isSubmitting}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
          )}
        </div>

        {/* Location */}
        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Your Location <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition ${
              errors.location ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="City"
            disabled={isSubmitting}
          />
          {errors.location && (
            <p className="mt-1 text-sm text-red-600">{errors.location}</p>
          )}
        </div>
      </div>

      {/* Availability */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Availability <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {availabilityOptions.map((option) => (
            <label
              key={option}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={formData.availability.includes(option)}
                onChange={() => handleCheckboxChange("availability", option)}
                className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                disabled={isSubmitting}
              />
              <span className="text-sm text-gray-700">{option}</span>
            </label>
          ))}
        </div>
        {errors.availability && (
          <p className="mt-1 text-sm text-red-600">{errors.availability}</p>
        )}
      </div>

      {/* Skills */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Skills & Interests (select all that apply)
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {skillOptions.map((skill) => (
            <label
              key={skill}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={formData.skills.includes(skill)}
                onChange={() => handleCheckboxChange("skills", skill)}
                className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                disabled={isSubmitting}
              />
              <span className="text-sm text-gray-700">{skill}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div>
        <label
          htmlFor="experience"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Relevant Experience (optional)
        </label>
        <textarea
          id="experience"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition resize-y"
          placeholder="Tell us about any relevant volunteer or work experience..."
          disabled={isSubmitting}
        />
      </div>

      {/* Motivation */}
      <div>
        <label
          htmlFor="motivation"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Why do you want to volunteer with us?{" "}
          <span className="text-red-500">*</span>
        </label>
        <textarea
          id="motivation"
          name="motivation"
          value={formData.motivation}
          onChange={handleChange}
          rows={4}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition resize-y ${
            errors.motivation ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Share what motivates you to help families in Westmoreland..."
          disabled={isSubmitting}
        />
        {errors.motivation && (
          <p className="mt-1 text-sm text-red-600">{errors.motivation}</p>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        By submitting this form, you agree to be contacted regarding volunteer
        opportunities. We respect your privacy and will never share your
        information.
      </p>
    </form>
  );
}
