import React, { ReactNode } from "react";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Navbar from "@/components/Navbar";

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div
            className={`${GeistSans.className} ${GeistMono.className} antialiased flex-1 h-screen`}
        >
            <Navbar />
            <main>{children}</main>
        </div>
    );
};

export default Layout;
