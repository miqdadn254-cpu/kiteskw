import { useLanguage } from "@/contexts/LanguageContext";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const content = {
  en: {
    heading: "Our Clients",
    subtitle: "Trusted by leading academic institutions, government entities, and industrial organizations across the GCC.",
    academic: "Academic Clients",
    commercial: "Commercial Clients",
  },
  ar: {
    heading: "عملاؤنا",
    subtitle: "موثوق بهم من قبل المؤسسات الأكاديمية الرائدة، والجهات الحكومية، والمنظمات الصناعية في جميع أنحاء دول مجلس التعاون الخليجي.",
    academic: "العملاء الأكاديميون",
    commercial: "العملاء التجاريون",
  },
};

type Client = {
  id: string;
  name: string;
  logo?: string;
  description?: string; // Optional secondary descriptor
  category: "Academic" | "Government" | "Industrial";
};

const academicClients: Client[] = [
  { id: "ku", name: "Kuwait University", category: "Academic" },
  { id: "uaeu", name: "United Arab Emirates University", category: "Academic" },
  { id: "aus", name: "American University of Sharjah (AUS)", category: "Academic" },
  { id: "uowd", name: "University of Wollongong in Dubai", category: "Academic" },
  { id: "pnu", name: "Princess Nourah Bint Abdulrahman University", category: "Academic" },
  { id: "aiu", name: "American International University (AIU)", category: "Academic" },
  { id: "tamu", name: "Texas A&M University", category: "Academic" },
  { id: "ku-khalifa", name: "Khalifa University", category: "Academic" },
  { id: "bits", name: "BITS Pilani – Dubai Campus", category: "Academic" },
  { id: "kfupm", name: "King Fahd University of Petroleum & Minerals", category: "Academic" },
  { id: "kaust", name: "King Abdullah University of Science and Technology (KAUST)", category: "Academic" },
  { id: "hbku", name: "Hamad Bin Khalifa University", category: "Academic" },
  { id: "kisr", name: "Kuwait Institute for Scientific Research (KISR)", category: "Government" },
  { id: "paaet", name: "The Public Authority for Applied Education & Training (PAAET)", category: "Academic" },
  { id: "kacst", name: "King Abdulaziz City for Science and Technology (KACST)", category: "Government" },
];

const commercialClients: Client[] = [
  { id: "kpc", name: "Kuwait Petroleum Corporation (KPC)", category: "Government" },
  { id: "knpc", name: "Kuwait National Petroleum Company (KNPC)", category: "Government" },
  { id: "koc", name: "Kuwait Oil Company (KOC)", category: "Government" },
  { id: "kipic", name: "Kuwait Integrated Petroleum Industries Company (KIPIC)", category: "Government" },
  { id: "equate", name: "EQUATE Petrochemical Company", category: "Industrial" },
  { id: "pic", name: "Petrochemical Industries Company (PIC)", category: "Industrial" },
  { id: "mpw", name: "Ministry of Public Works – Kuwait", category: "Government" },
  { id: "moe", name: "Ministry of Education – Kuwait", category: "Government" },
  { id: "mew", name: "Ministry of Electricity & Water – Kuwait", category: "Government" },
  { id: "cmgs", name: "Council of Ministers – General Secretariat", category: "Government" },
  { id: "kfas", name: "Kuwait Foundation for the Advancement of Sciences (KFAS)", category: "Government" },
  { id: "epa", name: "Environment Public Authority – Kuwait", category: "Government" },
  { id: "kuwait-steel", name: "Kuwait Steel", category: "Industrial" },
  { id: "alghanim", name: "Alghanim Industries", category: "Industrial" },
  { id: "sts", name: "STS Kuwait (Specialized Technical Services)", category: "Industrial" },
  { id: "cosmic", name: "Cosmic International", category: "Industrial" },
  { id: "electric-house", name: "Electric House", category: "Industrial" },
  { id: "al-muhanna", name: "Saudi Al-Muhanna Dar Engineering Consultants", category: "Industrial" },
  { id: "alam-steel", name: "Alam Steel Industries", category: "Industrial" },
  { id: "al-fajr", name: "Al Fajr Al Jadid Co. W.L.L", category: "Industrial" },
  { id: "eye-center", name: "Kuwait Specialized Eye Center", category: "Industrial" },
  { id: "tasneef", name: "Tasneef", category: "Industrial" },
  { id: "ggmc", name: "Gulf Glass Manufacturing Co. (GGMC)", category: "Industrial" },
  { id: "rak", name: "RAK", category: "Industrial" },
  { id: "toco", name: "TOCO", category: "Industrial" },
  { id: "sos", name: "SOS", category: "Industrial" },
  { id: "kpak", name: "K-PAK", category: "Industrial" },
  { id: "alfattan", name: "Alfattan Holding Investment", category: "Industrial" },
  { id: "sabah-center", name: "Sabah Al Ahmad Center for Giftedness & Creativity", category: "Government" },
];

// Extract Key Clients for the highlight row
const keyClients: Client[] = [
  { id: "ku", name: "Kuwait University", category: "Academic" },
  { id: "kpc", name: "Kuwait Petroleum Corporation (KPC)", category: "Government" },
  { id: "moe", name: "Ministry of Education – Kuwait", category: "Government" },
  { id: "kisr", name: "Kuwait Institute for Scientific Research (KISR)", category: "Government" },
];

interface ClientGridProps {
  clients: Client[];
  isRTL?: boolean;
}

function ClientGrid({ clients, isRTL }: ClientGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-forwards">
      {clients.map((client) => (
        <div
          key={client.id}
          className={cn(
            "group relative flex flex-col items-center justify-center p-6 text-center h-full min-h-[140px]", // Increased min-height to accommodate fixed slots
            "bg-white border border-gray-100 rounded-lg",
            "transition-all duration-300 ease-out",
            "hover:bg-slate-50 hover:border-gray-300 hover:-translate-y-[2px] hover:shadow-sm",
            // Left border accent on hover (adjust for RTL)
            isRTL
              ? "hover:border-r-2 hover:border-r-gray-400"
              : "hover:border-l-2 hover:border-l-gray-400"
          )}
        >
          {/* Category Label */}
          <div className={cn(
            "absolute top-2 text-[10px] uppercase tracking-wider font-semibold text-gray-400 transition-colors group-hover:text-gray-600",
            isRTL ? "right-3" : "left-3"
          )}>
            {client.category}
          </div>

          {/* Fixed Logo/Content Container - 120px x 56px reserved to prevent CLS */}
          <div className="flex items-center justify-center w-[120px] h-[56px] mb-2 mt-4">
            {client.logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={client.logo}
                alt={client.name}
                width={120}
                height={56}
                loading="eager" // No lazy loading for CLS stability above fold (or generally in this grid)
                decoding="async"
                className="max-h-[48px] w-auto max-w-full object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
            ) : (
              // Text Fallback in the same slot
              <div className="flex items-center justify-center w-full h-full">
                <span className="font-heading font-medium text-sm md:text-base text-gray-700 group-hover:text-gray-900 transition-colors line-clamp-2">
                  {client.name}
                </span>
              </div>
            )}
          </div>

          {/* Secondary Descriptor (if exists, or if we want to show full name below logo eventually) */}
          {client.description && (
            <span className="text-xs text-muted-foreground mt-1 line-clamp-1">{client.description}</span>
          )}

          {/* If logo exists, we might still want the name text below layout dependent. 
                Current requirement: "If logo is missing: Show client name centered... When logo exists: Replace text with <img>".
                The code above does exactly that within the slot. 
            */}

        </div>
      ))}
    </div>
  );
}

export function ClientsSection() {
  const { language, isRTL } = useLanguage();
  const t = content[language];

  return (
    <section id="clients" className="relative pb-24 lg:pb-32 bg-[#fafafa] overflow-hidden">

      {/* Trust Transition Band */}
      <div className="w-full border-b border-border/40 bg-white/50 backdrop-blur-sm py-6 mb-16 lg:mb-20">
        <div className="container mx-auto px-4 flex items-center justify-center gap-4">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent w-16 lg:w-32" />
          <span className="text-[10px] md:text-xs font-medium uppercase tracking-widest text-gray-500 text-center">
            {language === 'ar'
              ? "ندعم المؤسسات الأكاديمية والجهات الحكومية وقادة الصناعة عبر دول مجلس التعاون الخليجي"
              : "SUPPORTING ACADEMIC INSTITUTIONS, GOVERNMENT ENTITIES, AND INDUSTRIAL LEADERS ACROSS THE GCC"
            }
          </span>
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent w-16 lg:w-32" />
        </div>
      </div>

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

        {/* Key Institutions Highlight */}
        <div className="mb-20 max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {language === 'ar' ? "مؤسسات رئيسية نعمل معها" : "Key Institutions We Work With"}
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {keyClients.map((client) => (
              <div
                key={`key-${client.id}`}
                className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow duration-300 min-h-[120px]"
              >
                <span className="text-xs font-bold uppercase text-primary mb-2 tracking-wide">{client.category}</span>
                <span className="font-heading font-semibold text-gray-900 leading-tight">{client.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Clients Tabs */}
        <Tabs defaultValue="academic" className="w-full max-w-6xl mx-auto mb-24" dir={isRTL ? "rtl" : "ltr"}>
          <div className="flex justify-center mb-12">
            <TabsList className="bg-white border border-gray-200 p-1 shadow-sm">
              <TabsTrigger value="academic" className="px-8 data-[state=active]:bg-gray-100 data-[state=active]:text-gray-900">{t.academic}</TabsTrigger>
              <TabsTrigger value="commercial" className="px-8 data-[state=active]:bg-gray-100 data-[state=active]:text-gray-900">{t.commercial}</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="academic" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
            <ClientGrid clients={academicClients} isRTL={isRTL} />
          </TabsContent>

          <TabsContent value="commercial" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
            <ClientGrid clients={commercialClients} isRTL={isRTL} />
          </TabsContent>
        </Tabs>

        {/* Post-Clients CTA */}
        <ScrollReveal className="text-center max-w-3xl mx-auto pt-10 border-t border-gray-200">
          <h3 className="font-heading text-xl md:text-2xl font-medium text-gray-800 mb-8">
            {language === 'ar'
              ? "هل ترغب في معرفة كيف نعمل مع مؤسسات مثل مؤسستك؟"
              : "Want to see how we work with organizations like yours?"
            }
          </h3>
          <a
            href="/contact"
            className={cn(
              "inline-flex items-center justify-center px-8 py-3 text-sm font-medium transition-all duration-300 rounded-md",
              "bg-primary text-primary-foreground hover:bg-primary/90",
              "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            )}
          >
            {language === 'ar' ? "تحدث إلى خبرائنا" : "Talk to Our Experts"}
          </a>
        </ScrollReveal>

      </div>
    </section>
  );
}
