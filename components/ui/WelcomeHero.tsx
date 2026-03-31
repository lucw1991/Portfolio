"use client";

import { Spotlight } from "@/components/ui/spotlight"

export default function WelcomeHero() {
    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white">
            <Spotlight
                className="-top-40 left-0 md:left-60 md: top-20"
                fill="#000000"
            />

            <h1 className="relative z-10 text-4xl font-semibold text-black">
                Welcome to Lucas&apos; Portfolio landing page!
            </h1>
        </div>
    );
}