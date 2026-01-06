import { Cpu, Cog, GraduationCap, Leaf } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const content = {
  en: {
    eyebrow: "ABOUT KITES",
    label: "Who We Are",
    description: "KITES is a simulation-based engineering, training, and consulting institute dedicated to advancing engineering capabilities across the GCC. We bridge academic knowledge with real-world industrial applications through cutting-edge simulation technologies and expert-led training.",
    pillarsLabel: "Key Pillars",
    pillars: [
      { title: "Simulation Expertise", icon: Cpu },
      { title: "Engineering Consulting", icon: Cog },
      { title: "Training Excellence", icon: GraduationCap },
      { title: "Sustainable Solutions", icon: Leaf },
    ],
  },
  ar: {
    eyebrow: "عن كايتس",
    label: "من نحن",
    description: "يُعد معهد الكويت للتدريب والمحاكاة الهندسية جهة متخصصة في الحلول الهندسية القائمة على المحاكاة، والتدريب، والاستشارات، ويهدف إلى تطوير القدرات الهندسية في منطقة الخليج من خلال ربط المعرفة الأكاديمية بالتطبيقات الصناعية الواقعية باستخدام أحدث تقنيات المحاكاة.",
    pillarsLabel: "الركائز الأساسية",
    pillars: [
      { title: "الخبرة في المحاكاة", icon: Cpu },
      { title: "الاستشارات الهندسية", icon: Cog },
      { title: "التميز في التدريب", icon: GraduationCap },
      { title: "الحلول المستدامة", icon: Leaf },
    ],
  },
};

export function WhoWeAreSection() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="who-we-are" className="py-24 lg:py-32 bg-[#F8FAFC] border-t border-gray-200 relative overflow-hidden">
      {/* Background Accent - Right Side */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-3xl -z-10 pointer-events-none opacity-40 mix-blend-multiply" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Vertical Divider (Desktop) */}
        <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent opacity-60" />

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column - Text Content */}
          <ScrollReveal>
            <div className="accent-line mb-8" />
            <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-[0.2em] mb-6">
              {t.eyebrow}
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-foreground mb-6 leading-tight">
              {t.label}
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-prose font-normal">
              {t.description}
            </p>
          </ScrollReveal>

          {/* Right Column - Key Pillars */}
          <ScrollReveal delay={150}>
            <p className="font-body text-caption font-medium text-muted-foreground uppercase tracking-widest mb-8">
              {t.pillarsLabel}
            </p>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4" staggerDelay={80}>
              {t.pillars.map((pillar, index) => (
                <StaggerItem key={pillar.title} index={index}>
                  <div className="group h-full p-6 bg-white border border-gray-200 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md hover:border-gray-300 hover:-translate-y-1">
                    <div className="w-12 h-12 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gray-100/80 group-hover:border-primary/20 transition-all duration-300">
                      <pillar.icon className="text-gray-500 group-hover:text-primary transition-colors duration-300" size={24} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-heading text-body font-semibold text-foreground">
                      {pillar.title}
                    </h3>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
