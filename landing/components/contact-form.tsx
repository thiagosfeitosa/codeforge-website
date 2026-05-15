"use client";

import { useState } from "react";
import { SparkButton } from "@/components/spark-button";
import { useI18n } from "@/lib/i18n";

type Status = "idle" | "success";

export function ContactForm() {
  const { t } = useI18n();
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
          {t("form.name")}
          <input className="form-field" name="name" required placeholder={t("form.name.placeholder")} />
        </label>
        <label className="grid gap-2 text-sm font-bold text-white">
          {t("form.email")}
          <input className="form-field" name="email" type="email" required placeholder={t("form.email.placeholder")} />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-bold text-white">
        {t("form.company")}
        <input className="form-field" name="company" placeholder={t("form.company.placeholder")} />
      </label>
      <label className="grid gap-2 text-sm font-bold text-white">
        {t("form.projectType")}
        <select className="form-field" name="projectType" defaultValue="Full-stack development">
          <option>{t("service.full.title")}</option>
          <option>{t("service.ai.title")}</option>
          <option>{t("service.mvp.title")}</option>
          <option>{t("service.ux.title")}</option>
          <option>{t("project.legacy.category")}</option>
        </select>
      </label>
      <label className="grid gap-2 text-sm font-bold text-white">
        {t("form.message")}
        <textarea
          className="form-field min-h-36 resize-y"
          name="message"
          required
          placeholder={t("form.message.placeholder")}
        />
      </label>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <SparkButton type="submit">{t("form.submit")}</SparkButton>
        {status === "success" && (
          <p className="text-sm font-bold text-[var(--orange)]" role="status">
            {t("form.success")}
          </p>
        )}
      </div>
    </form>
  );
}
