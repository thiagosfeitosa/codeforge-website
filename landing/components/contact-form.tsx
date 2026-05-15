"use client";

import { useState } from "react";
import { SparkButton } from "@/components/spark-button";

type Status = "idle" | "success";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("success");
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={submit} className="surface grid gap-5 p-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-white">
          Name
          <input className="form-field" name="name" required placeholder="Your name" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-white">
          Email
          <input className="form-field" name="email" type="email" required placeholder="you@company.com" />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-bold text-white">
        Company
        <input className="form-field" name="company" placeholder="Company name" />
      </label>
      <label className="grid gap-2 text-sm font-bold text-white">
        Project type
        <select className="form-field" name="projectType" defaultValue="Full-stack development">
          <option>Full-stack development</option>
          <option>AI automation workflow</option>
          <option>MVP strategy and build</option>
          <option>UI/UX and front-end architecture</option>
          <option>System modernization</option>
        </select>
      </label>
      <label className="grid gap-2 text-sm font-bold text-white">
        Message
        <textarea
          className="form-field min-h-36 resize-y"
          name="message"
          required
          placeholder="Tell me what you are trying to build, automate, or modernize."
        />
      </label>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <SparkButton type="submit">Send Message</SparkButton>
        {status === "success" && (
          <p className="text-sm font-bold text-[var(--orange)]" role="status">
            Message staged successfully. Backend integration comes next.
          </p>
        )}
      </div>
    </form>
  );
}
