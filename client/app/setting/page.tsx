"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/custom/navbar";

const sections = [
  { id: "profile", label: "Profile" },
  { id: "appearance", label: "Appearance" },
  { id: "canvas", label: "Canvas" },
  { id: "meetings", label: "Meetings" },
  { id: "notifications", label: "Notifications" },
  { id: "privacy", label: "Privacy & Security" },
  { id: "about", label: "About" },
];

export default function Setting() {
  const [activeSection, setActiveSection] = useState("profile");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <Navbar />

      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-semibold">Settings</h1>
          <p className="mt-1 text-sm text-white/60">
            Manage your account and workspace preferences.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Sidebar */}
          <aside className="col-span-3">
            <div className="sticky top-24 rounded-xl bg-white/5 p-4 backdrop-blur">
              <ul className="space-y-1 text-sm">
                {sections.map((item) => (
                  <li
                    key={item.id}
                    onClick={() =>
                      document
                        .getElementById(item.id)
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className={`cursor-pointer rounded-lg px-3 py-2 transition ${
                      activeSection === item.id
                        ? "bg-white/10 text-white"
                        : "text-white/60 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Content */}
          <section className="col-span-9 space-y-12">
            <SettingsSection
              id="profile"
              title="Profile"
              desc="Your personal information visible to others."
            >
              <div className="flex items-center gap-5">
                <div className="h-16 w-16 rounded-full bg-white/10" />
                <div>
                  <p className="font-medium">Vivek Patel</p>
                  <p className="text-sm text-white/60">
                    vivek123@gmail.com
                  </p>
                </div>
              </div>
            </SettingsSection>

            <SettingsSection
              id="appearance"
              title="Appearance"
              desc="Control how Collab Canvas looks for you."
            >
              <GridItems
                items={[
                  "Theme preference",
                  "Default canvas theme",
                  "Video mode background",
                ]}
              />
            </SettingsSection>

            <SettingsSection
              id="canvas"
              title="Canvas"
              desc="Drawing and workspace behavior."
            >
              <GridItems
                items={[
                  "Grid visibility",
                  "Toolbox position",
                  "Icon size",
                ]}
              />
            </SettingsSection>

            <SettingsSection
              id="meetings"
              title="Meetings"
              desc="Meeting and collaboration preferences."
            >
              <GridItems
                items={[
                  "Auto-mute on join",
                  "Auto-pin speaker",
                  "Default meeting mode",
                ]}
              />
            </SettingsSection>

            <SettingsSection
              id="notifications"
              title="Notifications"
              desc="Control alerts and sounds."
            >
              <GridItems
                items={[
                  "Chat notifications",
                  "Meeting reminders",
                  "Sound effects",
                ]}
              />
            </SettingsSection>

            <SettingsSection
              id="privacy"
              title="Privacy & Security"
              desc="Protect your account and devices."
            >
              <GridItems
                items={[
                  "Change password",
                  "Camera default off",
                  "Microphone default muted",
                ]}
              />
            </SettingsSection>

            <SettingsSection
              id="about"
              title="About"
              desc="Application information."
            >
              <p className="text-sm text-white/60">
                Collab Canvas · v1.0.0  
                <br />
                Design, discuss, and build together.
              </p>
            </SettingsSection>
          </section>
        </div>
      </div>
    </div>
  );
}

/* ---------- Helper Components ---------- */

function SettingsSection({
  id,
  title,
  desc,
  children,
}: {
  id: string;
  title: string;
  desc: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-28 rounded-2xl bg-white/5 p-6 backdrop-blur"
    >
      <h2 className="text-lg font-medium">{title}</h2>
      <p className="mt-1 text-sm text-white/60">{desc}</p>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function GridItems({ items }: { items: string[] }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {items.map((item, i) => (
        <div
          key={i}
          className="rounded-lg bg-white/5 p-4 text-sm text-white/80"
        >
          {item}
        </div>
      ))}
    </div>
  );
}
