import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const content = {
  en: {
    heading: "Trusted by world-leading technology partners.",
    subtitle: "Collaborating with the most respected engineering software leaders worldwide.",
    button: "Explore All Technology Partners",
    trustStat: "Partnerships spanning simulation, PLM, sustainability, and analytics.",
  },
  ar: {
    heading: "شراكات مع مزودي التكنولوجيا الرائدين عالميًا.",
    subtitle: "نتعاون مع رواد برمجيات الهندسة الأكثر احترامًا على مستوى العالم.",
    button: "استكشاف جميع شركاء التكنولوجيا",
    trustStat: "شراكات تشمل المحاكاة، إدارة دورة حياة المنتج، الاستدامة، والتحليلات.",
  },
};

import { PartnerLogos } from "@/components/home/PartnerLogos";

const partners = [
  { name: "Siemens", abbr: "Si", id: "siemens" },
  { name: "Autodesk", abbr: "Ad", id: "autodesk" },
  { name: "ANSYS", abbr: "An", id: "ansys" },
  { name: "Dassault Systèmes", abbr: "DS", id: "dassault" },
  { name: "PTC", abbr: "PTC", id: "ptc" },
  { name: "Hexagon", abbr: "Hx", id: "hexagon" },
];

export function PartnersSection() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="partners" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="accent-line mx-auto mb-8" />
          <h2 className="font-heading text-h2 sm:text-3xl lg:text-4xl font-semibold text-foreground max-w-2xl mx-auto mb-6">
            {t.heading}
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </ScrollReveal>

        {/* Partners Logo Grid */}
        <div className="mb-4">
          <PartnerLogos />
        </div>

        {/* Trust Stat */}
        <ScrollReveal delay={200} className="text-center mb-10">
          <p className="text-sm font-medium text-muted-foreground/80">
            {t.trustStat}
          </p>
        </ScrollReveal>

        {/* CTA Button */}
        <ScrollReveal delay={300} className="text-center">
          <Link to="/partners">
            <Button variant="ghost" size="lg" className="group text-muted-foreground hover:text-foreground hover:bg-transparent p-0 h-auto">
              <span className="border-b border-transparent group-hover:border-foreground/30 pb-0.5 transition-all duration-300">
                {t.button}
              </span>
              <ArrowRight size={16} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
            </Button>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
