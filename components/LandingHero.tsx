"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import PortfolioNavbar from "@/components/Navbar";

type ProjectPrev = {
    title: string;
    blurb: string;
    githubHref?: string;
};

const projects: ProjectPrev[] = [
    {
        title: "Multiplatform Mobile Calendar Application for iOS and Android (KMP)",
        blurb: "This is a multiplatform application I built early on. It uses basic CRUD operations to manage a personal calendar persistently.",
        githubHref: "https://github.com/lucw1991/CalendarProject"
    },
    {
        title: "Project 2",
        blurb: "Description of Project 2"
    },
    {
      title: "Project 3",
      blurb: "Description of Project 3"
    },
    {
        title: "Project 4",
        blurb: "Description of Project 4"
    },
    {
        title: "Poste, ASU Senior Capstone Project",
        blurb: "My capstone project was a really interesting application build! My work focused on implementing a user-friendly"
        + " UI experience from the home page and transitioning into different areas of the application. I also did a fair"
        + " amount of backend set up for the iOS side of the app to implement a sign up and sign in functionality that "
        + "complies with the Clerk backend authentication protocols for development environments. This work was NDA protected"
        + " so I am unable to provide any source code or a link to the github repository."
    }
];

// Scrollable desription of projects
function ScrollCard({ title, children, githubHref }: { title: string; children: string; githubHref?: string }) {
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
                    <span className="text-xs text-zinc-400">preview</span>
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
                <div className="max-w-2xl">
                    <h1 className="text-left text-4xl font-semibold tracking-tight text-zinc-100 sm:text-5xl">
                        Welcome to my portfolio!
                    </h1>

                    <p className="mt-5 text-base leading-relaxed text-zinc-200">
                        Hello! <br /> <br />
                    </p>

                    <p className="mt-4 text-base leading-relaxed text-zinc-200 indent-4">
                           My name is Lucas Winesburg, welcome to my portfolio! I am a recent graduate from the
                        ASU Online Software Engineering Bachelor&apos;s program and soon to begin on my Master&apos;s
                        at ASU. At 34, and starting my scholastic journey at 31, I am a little late to the party! My
                        journey getting to this point has been a great challenge that I
                        have found myself passionately embracing. Each issue is like a giant puzzle with no clear
                        pieces, only the ability to use my unique perspective to create a puzzle piece that can be
                        malleable enough to work seamlessly with the entire picture!
                           Here are some projects that I have played a direct part in the creation of. A couple
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
                        <ScrollCard key={p.title} title={p.title} githubHref={p.githubHref}>
                            {p.blurb}
                        </ScrollCard>
                    ))}
                </div>
            </div>
        </AuroraBackground>
    );
}