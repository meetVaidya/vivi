import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
    const links = [
        { href: "/docs", label: "Introduction" },
        { href: "/docs/getting-started", label: "Getting Started" },
        { href: "/docs/configuration", label: "Configuration" },
        { href: "/docs/providers", label: "Providers" },
        { href: "/docs/callbacks", label: "Callbacks" },
    ];

    return (
        <nav className="w-64 p-6 flex flex-col justify-between h-full overflow-y-auto">
            <div>
                <Link href="/">
                    <h1 className="text-2xl font-bold mb-6">
                        AuthenticateMe Docs
                    </h1>
                </Link>
                <ul className="space-y-2">
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className="text-white hover:text-gray-300"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-auto">
                <Link href="/chatbot">
                    <Button>Ask AI</Button>
                </Link>
            </div>
        </nav>
    );
};

export default Sidebar;
