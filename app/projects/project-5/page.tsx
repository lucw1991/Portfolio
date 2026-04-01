"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import PortfolioNavbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";

type Screenshot = {
    src: string;
    label: string;
};

type Video = {
    src: string;
    label: string;
};

const homePageScreenshot: Screenshot[] = [
    { src: "/projects/capstone/poste_homePage.png", label: "Home Page" },
];

const transitions: Video[] = [
    { src: "/projects/capstone/FolderTransition_1.mp4", label: "Folder Transition 1" },
    { src: "/projects/capstone/FolderTransition_2.mp4", label: "Folder Transition 2" },
    { src: "/projects/capstone/PostTransition_1.mp4", label: "Post Transition 1" },
    { src: "/projects/capstone/PostTransition_2.mp4", label: "Post Transition 2" },
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

function VideoCard({ src, label }: Video) {
    return (
        <div className="flex flex-col items-center gap-2">
            <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/50 backdrop-blur-md" style={{ aspectRatio: "9/19" }}>
                <video
                    src={src}
                    loop
                    playsInline
                    controls
                    className="absolute inset-0 h-full w-full object-cover object-top"
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

function VideoSection({ title, videos }: { title: string; videos: Video[] }) {
    return (
        <section className="mt-12">
            <h2 className="text-xl font-semibold text-zinc-100">{title}</h2>
            <div className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-3">
                {videos.map((v) => (
                    <VideoCard key={v.label} {...v} />
                ))}
            </div>
        </section>
    );
}

export default function CapstoneProjectPage() {
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
                        Poste, ASU Senior Capstone Project
                    </h1>
                    <p className="mt-2 text-sm text-zinc-400">
                        Written in KMP for both iOS and Android. (My contributions) &nbsp;·&nbsp; Senior Capstone
                    </p>
                    <p className="mt-3 text-xs text-zinc-500 italic">
                        Source code is under NDA and cannot be shared publicly.
                    </p>
                </div>

                <div className="mt-8 text-sm leading-relaxed text-zinc-200">
                    My senior capstone project was a group project, working with 4 of my peers and a sponsor from a company.
                    Our task was to make an application that can share any social media post and give read and/or write access
                    to groups the user account is associated with. The main idea is to provide an easy way to coordinate
                    group activities and share information among your chosen peers in an efficient, but still interactive
                    and visually pleasing way. My contributions to this were mainly UI/UX components and animations
                    (I custom made transition logos/transitions) along with some backend wiring and logic connecting our
                    mobile application to a Clerk development environment for testing. Here are some examples of my most
                    featured work in this beta build of the application.
                </div>

                <ScreenshotSection title="Home Page" screenshots={homePageScreenshot} />
                <VideoSection title="UI Transitions" videos={transitions} />
            </div>
        </AuroraBackground>
    );
}