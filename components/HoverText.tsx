"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const frameworks = [
    {
        name: "Google",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#f5f5f5"
                viewBox="0 0 256 256"
            >
                <path d="M224,128a96,96,0,1,1-21.95-61.09,8,8,0,1,1-12.33,10.18A80,80,0,1,0,207.6,136H128a8,8,0,0,1,0-16h88A8,8,0,0,1,224,128Z"></path>
            </svg>
        ),
    },
    {
        name: "GitHub",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#f5f5f5"
                viewBox="0 0 256 256"
            >
                <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
            </svg>
        ),
    },
];

export default function FrameworkSelector() {
    const [hoveredFramework, setHoveredFramework] = useState("");

    return (
        <div className="text-white p-8 my-8 rounded-lg w-full max-w-6xl">
            <div className="flex flex-col space-y-8">
                <div className="relative h-24">
                    <motion.h2
                        className="text-4xl font-bold absolute"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Authenticate using
                    </motion.h2>
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={hoveredFramework}
                            className="text-4xl font-bold absolute top-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {hoveredFramework || "any provider"}
                        </motion.span>
                    </AnimatePresence>
                </div>
                <div className="flex flex-wrap justify-start gap-4">
                    {frameworks.map((framework, index) => (
                        <motion.div
                            key={index}
                            className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer text-lg"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.3,
                                delay: index * 0.1,
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                            }}
                            whileHover={{
                                scale: 1.1,
                                backgroundColor: "#4A4A4A",
                            }}
                            onMouseEnter={() =>
                                setHoveredFramework(framework.name)
                            }
                            onMouseLeave={() => setHoveredFramework("")}
                        >
                            {framework.icon}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
