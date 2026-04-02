"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import PortfolioNavbar from "@/components/Navbar";
import Link from "next/link";

type ProjectPrev = {
    title: string;
    blurb: string;
    githubHref?: string;
    previewHref?: string;
};

const projects: ProjectPrev[] = [
    {
        title: "Multiplatform Mobile Calendar Application for iOS and Android (KMP)",
        blurb: "This is a multiplatform application I built early on. It uses basic CRUD operations to manage a personal calendar persistently.",
        githubHref: "https://github.com/lucw1991/CalendarProject",
        previewHref: "/projects/project-1"
    },
    {
        title: "Admin and User Menu for Student Administration System for Desktop (Java)",
        blurb: "This was a school project that I worked on with a collaborator. We both worked on every bit of this " +
               "program. My main responsibility in this was the table generation and sorting logic. The UI was a" +
               " collaborative effort but my partner had their hands on that side more so than myself for once in this" +
               " project. This was one of my first programs made as a small team and it really made me see the value in " +
               "the phrase 'two heads are better than one'."
    },
    {
      title: "Recipe Builder Application for Android (Kotlin)",
      blurb: "This is a simple application that takes in a list from the user, and then either gives a more concise " +
             "match to your ingredients list, trying to match all or most, or it will give a list of recipes with fairly" +
             " similar ingredients based on the user choice and then give instructions on how to cook the meal. I made " +
             "this application a few years back but recently updated the logic and put it onto git hub. It is one of my " +
             "favorite early side projects that I have done during my time in school!",
      githubHref: "https://github.com/lucw1991/RecipeBuilder",
      previewHref: "/projects/project-3"
    },
    {
        title: "Poste, ASU Senior Capstone Project",
        blurb: "My capstone project was a really interesting application build! My work focused on implementing a user-friendly"
        + " UI experience from the home page and transitioning into different areas of the application. I also did a fair"
        + " amount of backend set up for the iOS side of the app to implement a sign up and sign in functionality that "
        + "complies with the Clerk backend authentication protocols for development environments. This work was NDA protected"
        + " so I am unable to provide any source code or a link to the github repository.",
        previewHref: "/projects/project-5"
    }
];

// Scrollable desription of projects
function ScrollCard({ title, children, githubHref, previewHref }: { title: string; children: string; githubHref?: string; previewHref?: string }) {
    return (
        <div className="rounded-2xl border border-white/10 bg-zinc-950/50 backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
                <h3 className="text-sm font-semibold text-zinc-100">{title}</h3>
                <div className="flex items-center gap-3">
                    {githubHref && (
                        <a
                            href={githubHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-zinc-400 transition-colors hover:text-zinc-100"
                        >
                            GitHub →
                        </a>
                    )}
                    {previewHref ? (
                        <Link
                            href={previewHref}
                            className="text-xs text-zinc-400 transition-colors hover:text-zinc-100"
                        >
                            preview →
                        </Link>
                    ) : (
                        <span className="text-xs text-zinc-400">preview</span>
                    )}
                </div>
            </div>

            {/* Scrollable body */}
            <div className="h-28 overflow-y-auto px-5 py-4 text-sm leading-relaxed text-zinc-200">
                {children}
            </div>
        </div>
    );
}

export default function LandingHero() {
    return (
        <AuroraBackground className="relative min-h-screen bg-black">
            {/* Keep navbar above everything */}
            <div className="relative z-50">
                <PortfolioNavbar />
            </div>

            {/* Dark overlay for contrast */}
            <div className="absolute inset-0 z-0 bg-black/35" />

            {/* Page content */}
            <div className="relative z-10 mx-auto max-w-5xl px-6 pt-28 pb-16">
                {/* Top-left heading + intro */}
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-center text-4xl font-semibold tracking-tight text-zinc-100 sm:text-5xl">
                        Welcome to my portfolio!
                    </h1>

                    <p className="mt-5 text-base leading-relaxed text-zinc-200">
                        Hello! <br />
                    </p>

                    <p className="mt-4 text-base leading-relaxed text-zinc-200 indent-4">
                           My name is Lucas Winesburg, welcome to my portfolio! I am a recent honor&apos;s graduate from the
                        ASU Online Software Engineering Bachelor&apos;s program and soon to begin on my Master&apos;s
                        at ASU. At 34, and starting my scholastic journey at 31, I bring a lot of life experience and
                        understanding to the table. Working, both alone and with teams, over the years has taught me
                        problem solving through looking at all angles and through all lenses. My journey getting to
                        this point has been a great challenge that I have found myself passionately embracing. Each
                        issue is like a giant puzzle with no clear pieces, only the ability to use my unique perspective
                        to create a piece that can be malleable, or modular, enough to work seamlessly with the entire picture!
                        In other words, our solutions are not just found, they&apos;re engineered.
                        </p>
                    <p className="mt-4 text-base leading-relaxed text-zinc-200 indent-4">
                           Here are some projects that I have contributed to over my career so far. A couple
                        are made solely by me, but the others were done in collaboration with one or more of my
                        peers. I have a deep interest in full stack but I have had a lot of fun in creating and
                        organizing the user interface in pursuit of a seamless user experience. Be it in a
                        desktop setting, or a multiplatform mobile app, creating an engaging and easy to use
                        interface for a user to interact with has been where a lot of my schooling work has led
                        me!
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-zinc-300 indent-4">
                        Below are quick previews of five projects. Each one links to a dedicated page with
                        details and the GitHub repo.
                    </p>
                </div>

                {/* Project preview list */}
                <div className="mt-10 grid gap-4">
                    {projects.map((p) => (
                        <ScrollCard key={p.title} title={p.title} githubHref={p.githubHref} previewHref={p.previewHref}>
                            {p.blurb}
                        </ScrollCard>
                    ))}
                </div>
            </div>
        </AuroraBackground>
    );
}