import AnimatedText from "@/components/AnimatedText";
import { BentoDemo } from "@/components/BentoGrid";
import { Footer } from "@/components/Footer";
import HoverText from "@/components/HoverText";
import Navbar from "@/components/Navbar";
import FlickeringGrid from "@/components/ui/flickering-grid";

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="z-0 absolute size-full bg-gradient-to-b to-transparent">
                <FlickeringGrid
                    squareSize={4}
                    gridGap={6}
                    color="#6B7280"
                    maxOpacity={0.1}
                    flickerChance={0.1}
                />
            </div>
            <section className="py-20 lg:py-32 mx-auto max-w-7xl px-5 sm:px-7 xl:px-10 first:pt-10 last:pb-40 last:lg:pb-52">
                <div className="z-1">
                    <AnimatedText />
                    <h1 className="text-4xl sm:text-7xl lg:text-8xl font-bold font-[family-name:var(--font-geist-mono)] text-center pb-8">
                        The Open-Source Authentication Platform
                    </h1>
                    <p className="font-[family-name:var(--font-geist-sans)] text-center text-lg py-12">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Deserunt amet ullam itaque ut non nihil eligendi
                        molestiae modi? Quasi, doloremque? Officiis id suscipit
                        voluptatibus dolore harum eum excepturi ipsam molestiae?
                    </p>
                    <BentoDemo />
                    <HoverText />
                </div>
            </section>
            <Footer />
        </>
    );
}
