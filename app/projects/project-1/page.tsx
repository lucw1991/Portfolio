"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import PortfolioNavbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";

type Screenshot = {
    src: string;
    label: string;
};

const mainPages: Screenshot[] = [
    { src: "/projects/calendar/yearView.png", label: "Calendar Year View" },
    { src: "/projects/calendar/monthView.png", label: "Calendar Month View" },
    { src: "/projects/calendar/dayView.png", label: "Calendar Day View" },
    { src: "/projects/calendar/eventList.png", label: "Event List" },
];

const dialogs: Screenshot[] = [
    { src: "/projects/calendar/addEvent.png", label: "Add Event Dialog" },
    { src: "/projects/calendar/deleteConfirm.png", label: "Delete Confirmation" },
];

function ScreenshotCard({ src, label }: Screenshot) {
    return (
        <div className="flex flex-col items-center gap-2">
            <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/50 backdrop-blur-md" style={{ aspectRatio: "9/19" }}>
                <Image
                    src={src}
                    alt={label}
                    fill
                    className="object-cover object-top"
                />
            </div>
            <span className="text-xs text-zinc-400">{label}</span>
        </div>
    );
}

function ScreenshotSection({ title, screenshots }: { title: string; screenshots: Screenshot[] }) {
    return (
        <section className="mt-12">
            <h2 className="text-xl font-semibold text-zinc-100">{title}</h2>
            <div className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-3">
                {screenshots.map((s) => (
                    <ScreenshotCard key={s.label} {...s} />
                ))}
            </div>
        </section>
    );
}

export default function CalendarProjectPage() {
    return (
        <AuroraBackground className="relative min-h-screen bg-black">
            <div className="relative z-50">
                <PortfolioNavbar />
            </div>

            <div className="absolute inset-0 z-0 bg-black/35" />

            <div className="relative z-10 mx-auto max-w-5xl px-6 pt-28 pb-16">
                <Link
                    href="/"
                    className="inline-flex items-center gap-1 text-sm text-zinc-400 transition-colors hover:text-zinc-100"
                >
                    ← Back to portfolio
                </Link>

                <div className="mt-6">
                    <h1 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
                        Multiplatform Calendar &amp; Planner App
                    </h1>
                    <p className="mt-2 text-sm text-zinc-400">
                        Kotlin Multiplatform &nbsp;·&nbsp; iOS &amp; Android
                    </p>
                </div>

                <ScreenshotSection title="Main Pages" screenshots={mainPages} />
                <ScreenshotSection title="Dialogs" screenshots={dialogs} />
            </div>
        </AuroraBackground>
    );
}