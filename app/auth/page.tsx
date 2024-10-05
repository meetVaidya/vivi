'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function AuthPage() {
    const [email, setEmail] = useState("");

    return (
        <div className="flex min-h-screen bg-[#111111] font-mono">
            {/* Left side */}
            <div className="w-1/2 flex flex-col justify-between p-10 bg-[#111111] text-white">
                <div>
                    <h1 className="text-xl font-bold flex items-center">
                        <span className="mr-2"></span> AuthenticateMe
                    </h1>
                </div>
                <div className="text-white">
                    <blockquote className="text-lg">
                        “This library has saved me countless hours of work and
                        helped me deliver stunning designs to my clients faster
                        than ever before.”
                    </blockquote>
                    <p className="mt-4">Sofia Davis</p>
                </div>
            </div>

            {/* Right side */}
            <div className="w-1/2 bg-black flex items-center justify-center">
                <div className="bg-black p-10 rounded-lg shadow-lg w-96">
                    <h2 className="text-2xl font-semibold mb-6 text-white">
                        Create an account
                    </h2>
                    <Label className="block mb-2 text-sm text-white">
                        Enter your email below to create your account
                    </Label>
                    <Input
                        type="email"
                        className="w-full p-2 mb-4 text-black rounded-lg"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button className="w-full bg-white text-black mb-4">
                        Sign In with Email
                    </Button>
                    <div className="text-center text-sm mb-4 text-gray-400">
                        OR CONTINUE WITH
                    </div>
                    <Button className="w-full bg-gray-700 text-white">
                        GitHub
                    </Button>
                    <div className="text-xs mt-4 text-gray-400">
                        By clicking continue, you agree to our{" "}
                        <a href="#" className="underline">
                            Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="#" className="underline">
                            Privacy Policy
                        </a>
                        .
                    </div>
                </div>
            </div>
        </div>
    );
}
