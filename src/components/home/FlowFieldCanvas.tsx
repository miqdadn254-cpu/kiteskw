import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface FlowFieldCanvasProps {
    className?: string;
    isRTL?: boolean;
}

export function FlowFieldCanvas({ className, isRTL = false }: FlowFieldCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d", { alpha: true });
        if (!ctx) return;

        // Reduced motion check
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion) return;

        let width = 0;
        let height = 0;
        let animationId: number;
        let time = 0;

        // Curve configuration
        const curves: {
            x: number;
            y: number;
            length: number;
            speed: number;
            offset: number;
            color: string;
            thick: number;
            amplitude: number;
            depth: number;
        }[] = [];
        // Base colors (rgb only) to allow for alpha manipulation
        const colors = [
            "56, 189, 248", // Cyan
            "45, 212, 191", // Teal
            "167, 139, 250", // Violet
        ];

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;

            const dpr = window.devicePixelRatio || 1;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.scale(dpr, dpr);
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;

            initCurves();
        };

        const initCurves = () => {
            curves.length = 0;
            const count = Math.min(80, Math.floor(width / 15)); // Increased density

            for (let i = 0; i < count; i++) {
                // Depth factor: 0.2 (far) to 1.0 (near)
                const depth = Math.random() * 0.8 + 0.2;

                // Direction: Flows INTO the text (Right->Left for LTR)
                const direction = isRTL ? 1 : -1;

                // Bias: Concentrate "upstream" (Right side for LTR)
                let startX = Math.random() * width;
                // 60% chance to spawn in the source half to utilize negative space
                if (Math.random() > 0.4) {
                    startX = isRTL
                        ? (Math.random() * width * 0.4) // Source is Left for RTL
                        : (width * 0.5 + Math.random() * width * 0.5); // Source is Right for LTR
                }

                curves.push({
                    x: startX,
                    y: Math.random() * height,
                    length: (Math.random() * 200 + 300) * depth,
                    speed: (Math.random() * 0.2 + 0.1) * depth * direction, // Parallax speed
                    offset: Math.random() * Math.PI * 2,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    thick: (Math.random() * 0.6 + 0.5) * depth, // Thicker for nearer lines
                    amplitude: (Math.random() * 20 + 10) * depth,
                    depth,
                });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);
            time += 0.005;

            curves.forEach((curve) => {
                ctx.beginPath();
                const startX = curve.x + Math.sin(time + curve.offset) * curve.amplitude;
                const startY = curve.y;

                ctx.moveTo(startX, startY);

                const cp1x = startX + curve.length * 0.3 + Math.cos(time * 0.5) * curve.amplitude;
                const cp1y = startY - curve.amplitude;
                const cp2x = startX + curve.length * 0.6 + Math.sin(time * 0.5) * curve.amplitude;
                const cp2y = startY + curve.amplitude;
                const endX = startX + curve.length;
                const endY = startY;

                ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, endX, endY);

                // INTELLIGENT OPACITY
                const normalizedX = curve.x / width;
                const normalizedY = curve.y / height;

                // Focus area (Headline)
                const targetX = isRTL ? 0.7 : 0.25;
                const dist = Math.sqrt(Math.pow(normalizedX - targetX, 2) + Math.pow(normalizedY - 0.45, 2));

                // Depth + Spatial Spotlight
                let alpha = 0.08 + (curve.depth * 0.12); // Base: 0.08 - 0.20
                const spotlight = Math.max(0, 0.15 * (1 - dist * 1.5));
                alpha = Math.min(0.3, alpha + spotlight); // Cap at 0.3

                ctx.strokeStyle = `rgba(${curve.color}, ${alpha})`;
                ctx.lineWidth = curve.thick;
                ctx.stroke();

                curve.x += curve.speed;

                // Infinite Wrap
                const buffer = curve.length + 200;
                if (curve.speed < 0 && curve.x < -buffer) {
                    // Moving Left (LTR), wrap to Right
                    curve.x = width + buffer;
                    curve.y = Math.random() * height;
                } else if (curve.speed > 0 && curve.x > width + buffer) {
                    // Moving Right (RTL), wrap to Left
                    curve.x = -buffer;
                    curve.y = Math.random() * height;
                }
            });

            animationId = requestAnimationFrame(draw);
        };

        resize();
        draw();

        window.addEventListener("resize", resize);
        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationId);
        };
    }, [isRTL]);

    return (
        <canvas
            ref={canvasRef}
            className={cn("absolute inset-0 w-full h-full pointer-events-none mix-blend-screen", className)}
        />
    );
}
