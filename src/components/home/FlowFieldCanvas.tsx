import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export function FlowFieldCanvas({ className }: { className?: string }) {
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
        }[] = [];

        const colors = [
            "rgba(56, 189, 248, 0.15)", // Cyan
            "rgba(45, 212, 191, 0.12)", // Teal
            "rgba(167, 139, 250, 0.10)", // Violet
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
            const count = Math.min(60, Math.floor(width / 20)); // Responsive count

            for (let i = 0; i < count; i++) {
                curves.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    length: Math.random() * 200 + 100,
                    speed: Math.random() * 0.2 + 0.05,
                    offset: Math.random() * Math.PI * 2,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    thick: Math.random() * 1.5 + 0.5,
                });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);
            time += 0.005;

            curves.forEach((curve) => {
                ctx.beginPath();
                const startX = curve.x + Math.sin(time + curve.offset) * 50;
                const startY = curve.y;

                ctx.moveTo(startX, startY);

                // Draw bezier curve simulating flow
                const cp1x = startX + curve.length * 0.3 + Math.cos(time * 0.5) * 20;
                const cp1y = startY - 20;
                const cp2x = startX + curve.length * 0.6 + Math.sin(time * 0.5) * 20;
                const cp2y = startY + 20;
                const endX = startX + curve.length;
                const endY = startY;

                ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, endX, endY);

                ctx.strokeStyle = curve.color;
                ctx.lineWidth = curve.thick;
                ctx.lineCap = "round";
                ctx.stroke();

                // Move curve slowly horizontally
                curve.x += curve.speed;

                // Wrap around
                if (curve.x > width) {
                    curve.x = -curve.length - 100;
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
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className={cn("absolute inset-0 w-full h-full pointer-events-none mix-blend-screen", className)}
        />
    );
}
