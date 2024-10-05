import Link from "next/link";
import React from "react";

export default function DocumentationPage() {
    return (
        <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">
                Authentication for Next.js
            </h1>
            <p className="text-lg mb-4">
                NextAuth.js is a complete open-source authentication solution
                for Next.js applications.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Overview</h2>
            <p className="mb-4">
                NextAuth.js is designed from the ground up to support Next.js
                and Serverless.
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Built-in support for OAuth 1.0, 1.0A and 2.0</li>
                <li>Built-in support for Sign in with Apple</li>
                <li>Supports email/passwordless authentication</li>
                <li>
                    Supports stateless authentication with any backend (Active
                    Directory, LDAP, etc)
                </li>
                <li>Supports both JSON Web Tokens and database sessions</li>
                <li>
                    Designed for Serverless but runs anywhere (AWS Lambda,
                    Docker, Heroku, etc…)
                </li>
            </ul>
            <h2 className="text-2xl font-semibold mt-8 mb-4">
                Getting Started
            </h2>
            <p>
                To get started with NextAuth.js in your project, check out the{" "}
                <Link
                    href="/documentation/getting-started"
                    className="text-blue-600 hover:underline"
                >
                    Getting Started
                </Link>{" "}
                guide.
            </p>
        </div>
    );
}
