import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowRight, Linkedin, Twitter, Youtube } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useContent } from "@/hooks/useContent";
import kitesLogo from "@/assets/kites-logo.png";
import { cn } from "@/lib/utils";

interface CommonContent {
  footer: {
    sections: {
      company: string;
      services: string;
      resources: string;
      contact: string;
    };
    contactLabels: {
      email: string;
      phone: string;
      location: string;
      locationValue: string;
    };
    copyright: string;
    links: {
      expertise: string;
      partners: string;
      contact: string;
      prototypeDevelopment: string;
      consultation: string;
      training: string;
      softwareDistribution: string;
      insights: string;
      events: string;
    };
  };
}

export function Footer() {
  const { language } = useLanguage();
  const common = useContent<CommonContent>('common');

  return (
    <footer className="relative bg-[#080D17] text-slate-400 overflow-hidden border-t border-white/5">

      {/* Background Noise & Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#080D17] to-[#05080F] pointer-events-none" />
      <div
        className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">

          {/* Column 1 - Company */}
          <div className="flex flex-col gap-6">
            <h4 className="font-heading text-white font-bold text-xs uppercase tracking-[0.08em] opacity-90">
              {common.footer.sections.company}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/expertise" className="group flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300">
                  <span className="relative overflow-hidden py-0.5">
                    {common.footer.links.expertise}
                    <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-white/40 to-white/80 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/partners" className="group flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300">
                  <span className="relative overflow-hidden py-0.5">
                    {common.footer.links.partners}
                    <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-white/40 to-white/80 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="group flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300">
                  <span className="relative overflow-hidden py-0.5">
                    {common.footer.links.contact}
                    <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-white/40 to-white/80 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 - Services */}
          <div className="flex flex-col gap-6">
            <h4 className="font-heading text-white font-bold text-xs uppercase tracking-[0.08em] opacity-90">
              {common.footer.sections.services}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services/prototype-development" className="group flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300">
                  <span className="relative overflow-hidden py-0.5">
                    {common.footer.links.prototypeDevelopment}
                    <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-white/40 to-white/80 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/services/consultation" className="group flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300">
                  <span className="relative overflow-hidden py-0.5">
                    {common.footer.links.consultation}
                    <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-white/40 to-white/80 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/services/training" className="group flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300">
                  <span className="relative overflow-hidden py-0.5">
                    {common.footer.links.training}
                    <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-white/40 to-white/80 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/services/software-distribution" className="group flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300">
                  <span className="relative overflow-hidden py-0.5">
                    {common.footer.links.softwareDistribution}
                    <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-white/40 to-white/80 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Resources */}
          <div className="flex flex-col gap-6">
            <h4 className="font-heading text-white font-bold text-xs uppercase tracking-[0.08em] opacity-90">
              {common.footer.sections.resources}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/insights" className="group flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300">
                  <span className="relative overflow-hidden py-0.5">
                    {common.footer.links.insights}
                    <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-white/40 to-white/80 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/events" className="group flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300">
                  <span className="relative overflow-hidden py-0.5">
                    {common.footer.links.events}
                    <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-white/40 to-white/80 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div className="flex flex-col gap-6">
            <h4 className="font-heading text-white font-bold text-xs uppercase tracking-[0.08em] opacity-90">
              {common.footer.sections.contact}
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 group">
                <Mail size={16} className="text-slate-500 shrink-0 mt-0.5 group-hover:text-blue-400 transition-colors duration-300" strokeWidth={1.5} />
                <div>
                  <span className="block text-[10px] uppercase font-semibold text-slate-500 mb-1 tracking-wider">
                    {common.footer.contactLabels.email}
                  </span>
                  <a
                    href="mailto:info@kites-kw.com"
                    className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-300 flex items-center gap-2"
                  >
                    info@kites-kw.com
                    <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <Phone size={16} className="text-slate-500 shrink-0 mt-0.5 group-hover:text-blue-400 transition-colors duration-300" strokeWidth={1.5} />
                <div>
                  <span className="block text-[10px] uppercase font-semibold text-slate-500 mb-1 tracking-wider">
                    {common.footer.contactLabels.phone}
                  </span>
                  <a
                    href="tel:+96522092260"
                    className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-300 flex items-center gap-2"
                    dir="ltr"
                  >
                    +965 22092260
                    <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <MapPin size={16} className="text-slate-500 shrink-0 mt-0.5 group-hover:text-blue-400 transition-colors duration-300" strokeWidth={1.5} />
                <div>
                  <span className="block text-[10px] uppercase font-semibold text-slate-500 mb-1 tracking-wider">
                    {common.footer.contactLabels.location}
                  </span>
                  <span className="text-sm font-medium text-slate-300 leading-relaxed block max-w-[240px]">
                    {common.footer.contactLabels.locationValue}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Bottom Bar */}
        <div className="mt-16 lg:mt-20 pt-8 border-t border-transparent bg-gradient-to-r from-transparent via-white/10 to-transparent h-px p-0" />

        <div className="pt-8 flex flex-col items-center text-center md:flex-row md:justify-between md:items-end md:text-start gap-6">

          {/* Logo & Trust Line */}
          <div className="flex flex-col gap-3">
            <Link to="/" className="flex items-center group gap-3">
              <img
                src={kitesLogo}
                alt="KITES"
                className="h-[30px] w-auto opacity-70 group-hover:opacity-100 transition-all duration-300"
              />
              <span className="font-heading font-bold text-lg text-white tracking-[0.08em] uppercase drop-shadow-sm opacity-60 group-hover:opacity-90 transition-opacity">
                KITES
              </span>
            </Link>
            <span className="text-[10px] font-medium text-slate-500 uppercase tracking-widest opacity-70">
              {language === 'ar' ? "خدمة قادة الهندسة في دول مجلس التعاون الخليجي" : "Serving engineering leaders across the GCC"}
            </span>
            {language === 'en' && (
              <p className="text-[10px] text-slate-600 leading-relaxed max-w-[280px]">
                A regional center of excellence for engineering simulation, training, and applied research.
              </p>
            )}
            <p className="text-[10px] text-slate-600 font-medium tracking-wide mt-1">
              {common.footer.copyright}
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {[
              { Icon: Linkedin, label: "LinkedIn" },
              { Icon: Twitter, label: "Twitter / X" },
              { Icon: Youtube, label: "YouTube" }
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                className="text-slate-500 hover:text-white opacity-60 hover:opacity-100 hover:-translate-y-0.5"
                style={{ transition: 'all 220ms cubic-bezier(0.4, 0, 0.2, 1)' }}
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
