import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { HeroKPI } from "@/components/home/HeroKPI";
import { FlowFieldCanvas } from "@/components/home/FlowFieldCanvas";

export function Hero() {
    const { language, isRTL } = useLanguage();
    const [scrollY, setScrollY] = useState(0);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleScroll = () => {
            requestAnimationFrame(() => {
                setScrollY(window.scrollY);
            });
        };

        const handleMouseMove = (e: MouseEvent) => {
            requestAnimationFrame(() => {
                const x = (e.clientX / window.innerWidth - 0.5) * 10; // +/- 5px movement
                const y = (e.clientY / window.innerHeight - 0.5) * 10;
                setMousePos({ x, y });
            });
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const content = {
        en: {
            titleLine1: "SIMULATE",
            titleLine2: "EVERYTHING",
            subtitle: "Advanced simulation, training, and sustainability solutions trusted by engineering leaders across the GCC.",
            ctaPrimary: "Talk to Our Experts",
            ctaSecondary: "Explore Capabilities",
        },
        ar: {
            titleLine1: "حاكي",
            titleLine2: "كل شيء",
            subtitle: "حلول محاكاة متقدمة للتدريب والاستدامة، موثوقة من قبل قادة الهندسة في جميع أنحاء الخليج.",
            ctaPrimary: "تحدث مع خبرائنا",
            ctaSecondary: "استكشف القدرات",
        },
    }[language];

    return (
        <section
            className="relative min-h-screen bg-gradient-to-b from-[#0B0F14] via-[#0E141B] to-[#0B0F14] overflow-hidden flex flex-col justify-center pb-12 z-10"
            style={{ paddingTop: 'calc(var(--header-height) + 2rem)' }}
        >

            {/* 1. LAYER: Background Noise - Z-0 */}
            <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.03]"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />

            {/* 2. LAYER: Flow Field Visual - Z-10 */}
            <div
                className="absolute inset-0 z-10 opacity-30 transition-transform duration-75 ease-out will-change-transform"
                style={{ transform: `translateY(${scrollY * 0.15}px)` }}
            >
                <FlowFieldCanvas />
            </div>

            {/* 2.5 LAYER: Contrast Gradient - Z-15 */}
            {/* Ensures text readability against flow lines */}
            <div className="absolute inset-0 z-15 bg-gradient-to-r from-[#0B0F14]/90 via-[#0B0F14]/40 to-transparent pointer-events-none" />

            {/* 3. LAYER: Content - Z-20 */}
            <div
                className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex flex-col justify-center will-change-transform"
                style={{ transform: `translateY(${scrollY * 0.05}px)` }}
            >

                <div className={cn(
                    "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center",
                    isRTL ? "text-right" : "text-left"
                )}>

                    {/* Main Content Column */}
                    <div className={cn(
                        "lg:col-span-7 flex flex-col justify-center",
                        "max-lg:text-center max-lg:items-center"
                    )}>

                        {/* Headline - Explicitly sharp rendering with Depth */}
                        <h1 className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] leading-[0.95] tracking-tight mb-8 uppercase antialiased"
                            style={{
                                textRendering: 'geometricPrecision',
                                WebkitFontSmoothing: 'antialiased',
                                transform: 'translateZ(0)',
                            }}>
                            {/* Line 1 */}
                            <span className="block animate-hero-up opacity-0 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-200 drop-shadow-2xl"
                                style={{ animationDelay: '100ms', filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.35))' }}>
                                {content.titleLine1}
                            </span>

                            {/* Line 2 */}
                            <span className="block animate-hero-up opacity-0 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-200 drop-shadow-2xl"
                                style={{ animationDelay: '220ms', filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.35))' }}>
                                {content.titleLine2}
                            </span>
                        </h1>

                        {/* Subheadline */}
                        <p className="font-body text-lg sm:text-xl lg:text-2xl text-white/70 max-w-3xl mb-12 leading-relaxed animate-hero-fade"
                            style={{ animationDelay: '300ms' }}>
                            {content.subtitle}
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 animate-hero-scale"
                            style={{ animationDelay: '500ms' }}>
                            <Link to="/contact">
                                <button className="group min-w-[200px] h-14 px-8 border border-white/20 bg-white/5 backdrop-blur-sm text-white font-medium hover:bg-white hover:text-[#0B0F14] hover:border-white hover:-translate-y-[1px] transition-all duration-300 flex items-center justify-center rounded-sm">
                                    <span>{content.ctaPrimary}</span>
                                    <ArrowRight className={cn("w-5 h-5 transition-transform duration-300",
                                        isRTL ? "mr-2 group-hover:-translate-x-1 rotate-180" : "ml-2 group-hover:translate-x-1"
                                    )} />
                                </button>
                            </Link>

                            <Link to="/services">
                                <button className="min-w-[200px] h-14 px-8 text-white/60 hover:text-white hover:bg-white/5 hover:-translate-y-[1px] transition-all duration-300 font-medium rounded-sm">
                                    {content.ctaSecondary}
                                </button>
                            </Link>
                        </div>

                    </div>

                    {/* Visual Spacer (Right Side) */}
                    <div className="hidden lg:block lg:col-span-5 h-[400px]">
                        {/* The flow field background fills this visually */}
                    </div>

                </div>

                {/* KPI Strip - Anchored at Bottom of Hero Content */}
                <div className="relative z-20 mt-12 lg:mt-0">
                    <HeroKPI startDelay={800} />
                </div>

            </div>

            {/* Bottom Fade Gradient */}
            <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0B0F14] to-transparent pointer-events-none z-10" />

        </section>
    );
}
