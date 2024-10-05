"use client"; // For client-side interactivity

import { useState, useRef, useEffect } from "react";
import { ArrowBottomLeftIcon } from "@radix-ui/react-icons";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { GoogleGenerativeAI } from "@google/generative-ai";

// temporary api key
const genAI = new GoogleGenerativeAI("AIzaSyBbzQDBefjNbhTiY4WtkHZQcvswb-HfwKE");

const getAiResponse = async (userInput: string): Promise<string> => {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(userInput);
        return result.response.text();
    } catch (error) {
        console.error("Error fetching AI response:", error);
        return "An error occurred. Please try again later.";
    }
};

const AiAssistant = () => {
    const [userInput, setUserInput] = useState("");
    const [conversationHistory, setConversationHistory] = useState<string[]>(
        []
    );
    const bottomOfChatRef = useRef<HTMLDivElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setUserInput(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (userInput.trim() === "") return;

        setConversationHistory([...conversationHistory, `You: ${userInput}`]);
        const aiResponse = await getAiResponse(userInput);

        setConversationHistory([
            ...conversationHistory,
            `You: ${userInput}`,
            `AI: ${aiResponse}`,
        ]);
        setUserInput("");
    };

    useEffect(() => {
        if (bottomOfChatRef.current) {
            bottomOfChatRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [conversationHistory]);

    return (
        <div className="flex flex-col h-full w-full max-w-2xl mx-auto  rounded-lg shadow-md">
            <div className="flex-grow px-6 min-h-[70vh] overflow-y-auto ">
                {conversationHistory.map((message, index) => (
                    <div
                        key={index}
                        className={`mb-4 flex ${
                            message.startsWith("You:")
                                ? "justify-end"
                                : "justify-start"
                        }`}
                    >
                        <p
                            className={`${
                                message.startsWith("You:")
                                    ? "text-white rounded-lg p-4 bg-zinc-800"
                                    : "text-[#111111] rounded-lg p-4 bg-gray-100 max-w-sm"
                            }`}
                        >
                            {message}
                        </p>
                    </div>
                ))}
                <div ref={bottomOfChatRef} /> {/* For scrolling to bottom */}
            </div>

            {/* Input Area */}
            <form
                onSubmit={handleSubmit}
                className="flex items-center p-4 border-t border-gray-200"
            >
                <Textarea
                    value={userInput}
                    onChange={handleChange}
                    placeholder="Ask your question..."
                    className="flex-grow p-2 mr-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                />
                <Button
                    type="submit"
                    className="bg-blue-500 text-white px-10 py-10 rounded-md hover:bg-blue-600"
                >
                    <ArrowBottomLeftIcon />
                </Button>
            </form>
        </div>
    );
};

export default AiAssistant;
