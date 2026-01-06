import { Boxes, MessageSquare, GraduationCap, Package, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const content = {
  en: {
    eyebrow: "WHAT WE DO",
    label: "Our Services",
    subtitle: "Integrated engineering services designed for complex, real-world challenges.",
    learnMore: "Learn more",
    coreLabel: "Core Service",
    trustText: "Trusted by engineering teams across energy, manufacturing, infrastructure, and academia.",
    services: [
      {
        id: "prototype-development",
        title: "Prototype Development",
        description: "From concept to functional, validated prototypes.",
        outcome: "Validate designs before production.",
        icon: Boxes,
      },
      {
        id: "consultation",
        title: "Consultation",
        description: "Simulation-driven engineering and environmental consulting.",
        outcome: "Reduce risk. Improve performance.",
        icon: MessageSquare,
      },
      {
        id: "training",
        title: "Training",
        description: "Professional training programs for engineers and organizations.",
        outcome: "Build internal capability.",
        icon: GraduationCap,
      },
      {
        id: "software-distribution",
        title: "Software Distribution",
        description: "Access to world-leading engineering and simulation software.",
        outcome: "Deploy best-in-class tools with confidence.",
        icon: Package,
      },
    ],
  },
  ar: {
    eyebrow: "ماذا نقدم",
    label: "خدماتنا",
    subtitle: "خدمات هندسية متكاملة مصممة لتحديات العالم الحقيقي المعقدة.",
    learnMore: "اقرأ المزيد",
    coreLabel: "الخدمة الأساسية",
    trustText: "موثوق به من قبل الفرق الهندسية في قطاعات الطاقة والتصنيع والبنية التحتية والأوساط الأكاديمية.",
    services: [
      {
        id: "prototype-development",
        title: "تطوير النماذج الأولية",
        description: "من الفكرة إلى نماذج أولية عملية ومختبرة.",
        outcome: "تحقق من التصاميم قبل الإنتاج.",
        icon: Boxes,
      },
      {
        id: "consultation",
        title: "الاستشارات",
        description: "استشارات هندسية وبيئية قائمة على المحاكاة.",
        outcome: "قلل المخاطر. حسن الأداء.",
        icon: MessageSquare,
      },
      {
        id: "training",
        title: "التدريب",
        description: "برامج تدريب احترافية للمهندسين والمؤسسات.",
        outcome: "بناء القدرات الداخلية.",
        icon: GraduationCap,
      },
      {
        id: "software-distribution",
        title: "توزيع البرمجيات",
        description: "توفير أفضل برمجيات الهندسة والمحاكاة عالميًا.",
        outcome: "انشر أفضل الأدوات بثقة.",
        icon: Package,
      },
    ],
  },
};

export function ServicesSection() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="services" className="py-24 lg:py-40 bg-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-gray-50/50 to-transparent -z-10 pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="accent-line mx-auto mb-8" />
          <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-[0.2em] mb-4">
            {t.eyebrow}
          </span>
          <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-foreground tracking-tight mb-6">
            {t.label}
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </ScrollReveal>

        {/* Services Grid - 4 Cards */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8" staggerDelay={100}>
          {t.services.map((service, index) => (
            <StaggerItem key={service.id} index={index}>
              <Link
                to={`/services/${service.id}`}
                className="group block h-full bg-white p-6 lg:p-8 rounded-xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1.5 hover:border-gray-300 relative overflow-hidden"
              >
                <div className="flex flex-col h-full items-start text-left">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gray-50 border border-gray-100 rounded-lg flex items-center justify-center mb-8 group-hover:bg-gray-100 transition-colors duration-300">
                    <service.icon
                      className="text-gray-500 group-hover:text-primary transition-colors duration-300"
                      size={24}
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-lg font-semibold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-sm text-gray-500 leading-relaxed mb-8 line-clamp-2 max-w-[280px]">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <div className="mt-auto flex items-center text-sm font-medium text-gray-900 group-hover:text-primary transition-colors duration-300">
                    <span>{t.learnMore}</span>
                    <ArrowRight
                      className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:mr-2 rtl:ml-0 rtl:group-hover:-translate-x-1"
                      strokeWidth={2}
                    />
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
