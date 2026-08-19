"use client";

import { useRef, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { CircleCheck, LoaderCircle, Send, TriangleAlert } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { BTN_PRIMARY, Section, SectionHeading } from "@/components/section";
import { contact } from "@/content/site";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

type Status = "idle" | "sending" | "success" | "error";

const FIELD =
  "w-full rounded-xl border border-line bg-elevated px-4 py-3 text-sm text-fg placeholder:text-muted/70 transition-colors focus:border-cyan focus:outline-none";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const sendEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = formRef.current;
    if (!form || status === "sending") return;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus("error");
      setError("The contact form is not configured. Please email me directly.");
      return;
    }

    setStatus("sending");
    setError(null);

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
      form.reset();
      setStatus("success");
    } catch (cause) {
      setStatus("error");
      setError(
        cause instanceof Error
          ? cause.message
          : "Something went wrong sending your message. Please try again.",
      );
    }
  };

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s build"
        accent="something"
        description={contact.blurb}
        centered
      />

      <Reveal className="mx-auto w-full max-w-3xl">
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="rounded-2xl border border-line bg-elevated p-6 sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="user_name" className="mb-2 block text-sm font-medium">
                Name
              </label>
              <input
                id="user_name"
                name="user_name"
                type="text"
                required
                autoComplete="name"
                placeholder="Your name"
                className={FIELD}
              />
            </div>

            <div>
              <label htmlFor="user_email" className="mb-2 block text-sm font-medium">
                Email
              </label>
              <input
                id="user_email"
                name="user_email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                className={FIELD}
              />
            </div>

            <div>
              <label htmlFor="user_number" className="mb-2 block text-sm font-medium">
                WhatsApp number <span className="text-muted">(optional)</span>
              </label>
              <input
                id="user_number"
                name="user_number"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="+234…"
                className={FIELD}
              />
            </div>

            <div>
              <label htmlFor="subject" className="mb-2 block text-sm font-medium">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                placeholder="What is this about?"
                className={FIELD}
              />
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="message" className="mb-2 block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={7}
              required
              placeholder="Tell me about your project…"
              className={`${FIELD} resize-y`}
            />
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button type="submit" disabled={status === "sending"} className={`${BTN_PRIMARY} disabled:cursor-not-allowed disabled:opacity-70`}>
              {status === "sending" ? (
                <>
                  <LoaderCircle className="size-4 animate-spin" aria-hidden />
                  Sending…
                </>
              ) : (
                <>
                  <Send className="size-4" aria-hidden />
                  Send message
                </>
              )}
            </button>

            <p aria-live="polite" role="status" className="text-sm">
              {status === "success" ? (
                <span className="inline-flex items-center gap-2 font-medium text-cyan">
                  <CircleCheck className="size-4" aria-hidden />
                  Thanks — your message is on its way.
                </span>
              ) : null}
              {status === "error" ? (
                <span className="inline-flex items-center gap-2 font-medium text-red-500">
                  <TriangleAlert className="size-4" aria-hidden />
                  {error}
                </span>
              ) : null}
            </p>
          </div>
        </form>
      </Reveal>
    </Section>
  );
}
