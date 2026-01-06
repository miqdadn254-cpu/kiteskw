import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

// Import SVG assets
import dassaultLogo from '@/assets/partners/dassault.svg';
import solidworksLogo from '@/assets/partners/solidworks.svg';
import simuliaLogo from '@/assets/partners/simulia.svg';
import mscLogo from '@/assets/partners/msc.svg';
import driveworksLogo from '@/assets/partners/driveworks.svg';
import simlabLogo from '@/assets/partners/simlab.svg';
import crealityLogo from '@/assets/partners/creality.svg';
import maxqdaLogo from '@/assets/partners/maxqda.svg';
import simaproLogo from '@/assets/partners/simapro.svg';
import herowearLogo from '@/assets/partners/herowear.svg';
import chaosLogo from '@/assets/partners/chaos.svg';
import cypeLogo from '@/assets/partners/cype.svg';

const partners = [
    { name: 'Dassault Systèmes', logo: dassaultLogo, id: 'dassault' },
    { name: 'SOLIDWORKS', logo: solidworksLogo, id: 'solidworks' },
    { name: 'SIMULIA', logo: simuliaLogo, id: 'simulia' },
    { name: 'MSC Software', logo: mscLogo, id: 'msc' },
    { name: 'DriveWorks', logo: driveworksLogo, id: 'driveworks' },
    { name: 'SimLab Soft', logo: simlabLogo, id: 'simlab' },
    { name: 'CreaLity', logo: crealityLogo, id: 'creality' },
    { name: 'MAXQDA', logo: maxqdaLogo, id: 'maxqda' },
    { name: 'SimaPro', logo: simaproLogo, id: 'simapro' },
    { name: 'HEROWEAR', logo: herowearLogo, id: 'herowear' },
    { name: 'Chaos', logo: chaosLogo, id: 'chaos' },
    { name: 'CYPE', logo: cypeLogo, id: 'cype' },
];

export function PartnerLogos() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1, rootMargin: "-50px" }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={containerRef}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-8 gap-y-12 lg:gap-x-12 lg:gap-y-16 items-center justify-items-center mb-16 max-w-6xl mx-auto"
        >
            {partners.map((partner, index) => (
                <div
                    key={partner.id}
                    className={cn(
                        "w-full flex items-center justify-center p-4 transition-all duration-700 ease-out transform",
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8"
                    )}
                    style={{ transitionDelay: `${index * 60}ms` }}
                >
                    <div className="group relative w-full h-12 flex items-center justify-center">
                        {/* Logo Image */}
                        <img
                            src={partner.logo}
                            alt={`${partner.name} logo`}
                            className="max-w-[140px] max-h-full w-auto h-auto object-contain filter grayscale opacity-60 transition-all duration-300 ease-out group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                        />

                        {/* Optional Tooltip/Label on Hover */}
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                            <span className="text-[10px] font-medium text-muted-foreground whitespace-nowrap uppercase tracking-wider">
                                {partner.name}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
