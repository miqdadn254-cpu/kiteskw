import { useEffect, useState, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

interface KPI {
    id: string;
    value: number;
    suffix: string;
    label: {
        en: string;
        ar: string;
    };
}

const kpiData: KPI[] = [
    {
        id: "engineers",
        value: 80,
        suffix: "+",
        label: { en: "Engineers Trained", ar: "مهندسًا تم تدريبهم" },
    },
    {
        id: "clients",
        value: 30,
        suffix: "+",
        label: { en: "Enterprise Clients", ar: "عميلًا مؤسسيًا" },
    },
    {
        id: "partners",
        value: 10,
        suffix: "+",
        label: { en: "Global Partners", ar: "شركاء تقنيين" },
    },
    {
        id: "countries",
        value: 7,
        suffix: "",
        label: { en: "Countries Served", ar: "دول نخدمها" },
    },
];

interface HeroKPIProps {
    startDelay?: number;
}

export function HeroKPI({ startDelay = 0 }: HeroKPIProps) {
    const { language } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const timerRef = useRef<NodeJS.Timeout>();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Add custom delay before showing
                    timerRef.current = setTimeout(() => {
                        setIsVisible(true);
                        observer.disconnect();
                    }, startDelay);
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            observer.disconnect();
            clearTimeout(timerRef.current);
        };
    }, [startDelay]);

    return (
        <div
            ref={containerRef}
            className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 lg:mt-24 pointer-events-auto"
        >
            <div
                ref={containerRef}
                className={cn(
                    "w-full rounded-lg bg-white/3 backdrop-blur-md border border-white/5 p-6 md:p-8 overflow-hidden relative",
                    "before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent before:z-10",
                    isVisible ? "opacity-100 translate-y-0 before:animate-[shimmer_2s_ease-in-out_forwards]" : "opacity-0 translate-y-4"
                )}
                style={{ transition: 'opacity 1s ease-out, transform 1s ease-out', transitionDelay: '0ms' }}
            >
                <div className="grid grid-cols-2 lg:flex lg:justify-between gap-6 lg:gap-12 relative z-20">
                    {kpiData.map((stat, index) => (
                        <KPICard
                            key={index}
                            item={stat}
                            isVisible={isVisible}
                            language={language}
                            delay={index * 150} // Internal stagger between items
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

function KPICard({
    item,
    isVisible,
    language,
    delay,
}: {
    item: KPI;
    isVisible: boolean;
    language: string;
    delay: number;
}) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) return;

        // Check for reduced motion
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion) {
            setCount(item.value);
            return;
        }

        let startTime: number;
        const duration = 1500; // 1.5s duration
        const startValue = 0;
        const endValue = item.value;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            // Ease out quart
            const easeProgress = 1 - Math.pow(1 - progress, 4);

            setCount(Math.floor(startValue + easeProgress * (endValue - startValue)));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        const timer = setTimeout(() => {
            requestAnimationFrame(animate);
        }, delay);

        return () => clearTimeout(timer);
    }, [isVisible, item.value, delay]);

    return (
        <div
            className={cn(
                "flex flex-col items-center text-center space-y-2 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight">
                {count}
                <span className="text-white/80">{item.suffix}</span>
            </div>
            <div className="text-xs sm:text-sm font-body text-white/60 font-medium uppercase tracking-wider">
                {language === "ar" ? item.label.ar : item.label.en}
            </div>
        </div>
    );
}
