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

const screenshots: Screenshot[] = [
    { src: "/projects/recipes/IngredientInput.png", label: "Ingredient Input" },
    { src: "/projects/recipes/ExactMatch.png", label: "Exact Match" },
    { src: "/projects/recipes/SimilarMatch.png", label: "Similar Match" },
];

const videos: Video[] = [
    { src: "/projects/recipes/IngredientCardScroll1.mp4", label: "Ingredient Card Scroll 1" },
    { src: "/projects/recipes/IngredientCardScroll2.mp4", label: "Ingredient Card Scroll 2" },
    { src: "/projects/recipes/ShareFunctionality.mp4", label: "Share Functionality" },
];

function ScreenshotCard({ src, label }: Screenshot) {
    return (
        <div className="flex flex-col items-center gap-2">
            <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/50
  backdrop-blur-md" style={{ aspectRatio: "9/19" }}>
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
            <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/50
  backdrop-blur-md" style={{ aspectRatio: "9/19" }}>
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

export default function RecipeBuilderProjectPage() {
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
                        Recipe Builder App
                    </h1>
                    <p className="mt-2 text-sm text-zinc-400">
                        Kotlin &nbsp;·&nbsp; Android
                    </p>
                    <a
                        href="https://github.com/lucw1991/RecipeBuilder"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-1 text-sm text-zinc-400 transition-colors hover:text-zinc-100"
                    >
                        View on GitHub →
                    </a>
                </div>

                <ScreenshotSection title="Screenshots" screenshots={screenshots} />
                <VideoSection title="Demo" videos={videos} />
            </div>
        </AuroraBackground>
    );
}