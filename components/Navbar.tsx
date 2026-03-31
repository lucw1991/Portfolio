"use client";

import {
    Navbar,
    NavBody,
    NavItems,
    NavbarButton,
    MobileNav,
    MobileNavHeader,
    MobileNavMenu,
    MobileNavToggle,
} from "@/components/ui/resizable-navbar";

import { useState } from "react";

export default function PortfolioNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    const items = [
        { name: "Calendar and Planner KMP Mobile App", link: "/projects/project-1" },
        { name: "ASU Online Scheduler (Collaboration)", link: "/projects/project-2" },
        { name: "Android Mobile Recipe Planning Application", link: "/projects/project-3" },
        { name: "Swift App to be made", link: "/projects/project-4" },
        { name: "Senior Capstone Project (ePoste)", link: "/projects/project-5" },
    ];

    return (
        <div className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-zinc-950/75 backdrop-blur-md">
            <Navbar className="relative">
                <NavBody className="hidden md:flex">
                    <div className="font-semibold text-zinc-100">Lucas W.</div>

                    {/* Make nav items readable on dark background */}
                    <NavItems
                        items={items}
                        className="text-zinc-200 text-xs font-bold"
                        onItemClick={() => {}}
                    />

                    <div className="flex items-center gap-2">
                        <NavbarButton href="/resume.pdf" variant="secondary" className="text-zinc-100">
                            Resume
                        </NavbarButton>
                        <NavbarButton
                            href="https://github.com/lucw1991"
                            variant="gradient"
                            className="text-white"
                        >
                            GitHub
                        </NavbarButton>
                    </div>
                </NavBody>

                {/* Mobile */}
                <MobileNav className="flex md:hidden">
                    <MobileNavHeader className="flex w-full items-center justify-between">
                        <div className="font-semibold text-zinc-100">Lucas W.</div>
                        <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen((v) => !v)} />
                    </MobileNavHeader>

                    <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
                        <NavItems items={items} onItemClick={() => setIsOpen(false)} />
                        <div className="mt-4 flex flex-col gap-2">
                            <NavbarButton href="/resume.pdf" variant="secondary">
                                Resume
                            </NavbarButton>
                            <NavbarButton href="https://github.com/lucw1991" variant="primary">
                                GitHub
                            </NavbarButton>
                        </div>
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>
        </div>
    );
}