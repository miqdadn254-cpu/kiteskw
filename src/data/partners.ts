import dassaultLogo from '@/assets/partners/dassault.svg';
import solidworksLogo from '@/assets/partners/solidworks.svg';
import simuliaLogo from '@/assets/partners/simulia.svg';
import mscLogo from '@/assets/partners/msc.svg';
import cypeLogo from '@/assets/partners/cype.svg';
import simlabLogo from '@/assets/partners/simlab.svg';
import driveworksLogo from '@/assets/partners/driveworks.svg';
import chaosLogo from '@/assets/partners/chaos.svg';
import simaproLogo from '@/assets/partners/simapro.svg';
import maxqdaLogo from '@/assets/partners/maxqda.svg';
import crealityLogo from '@/assets/partners/creality.svg';
import herowearLogo from '@/assets/partners/herowear.svg';

export interface Partner {
    id: string;
    name: string;
    abbr: string;
    category: 'engineering' | 'sustainability' | 'research' | 'manufacturing';
    desc?: string;
    logo?: string;
}

export const partners: Partner[] = [
    // Engineering & Simulation Software
    { id: "dassault", name: "Dassault Systèmes", abbr: "DS", category: "engineering", desc: "World leader in 3D design & engineering software.", logo: dassaultLogo },
    { id: "solidworks", name: "SOLIDWORKS", abbr: "SW", category: "engineering", desc: "Premier 3D CAD design and engineering capabilities.", logo: solidworksLogo },
    { id: "simulia", name: "SIMULIA", abbr: "SM", category: "engineering", desc: "Realistic simulation applications (Abaqus, fe-safe).", logo: simuliaLogo },
    { id: "msc", name: "MSC Software", abbr: "MSC", category: "engineering", desc: "Leading multi-physics and CAE simulation solutions.", logo: mscLogo },
    { id: "cype", name: "CYPE", abbr: "CY", category: "engineering", desc: "Software for architecture, engineering and construction.", logo: cypeLogo },
    { id: "simlab", name: "SimLab Soft", abbr: "SL", category: "engineering", desc: "3D visualization and VR collaboration tools.", logo: simlabLogo },
    { id: "driveworks", name: "DriveWorks", abbr: "DW", category: "engineering", desc: "Design automation and CPQ for SOLIDWORKS.", logo: driveworksLogo },
    { id: "chaos", name: "CHAOS", abbr: "CH", category: "engineering", desc: "High-quality rendering and visualization technology.", logo: chaosLogo },

    // Sustainability & Environmental Solutions
    { id: "simapro", name: "SimaPro", abbr: "SP", category: "sustainability", desc: "Leading LCA software for sustainability analysis.", logo: simaproLogo },

    // Research & Analytics Software
    { id: "maxqda", name: "MAXQDA", abbr: "MQ", category: "research", desc: "Advanced qualitative and mixed methods data analysis.", logo: maxqdaLogo },

    // Advanced Manufacturing & Innovation
    { id: "creality", name: "CREALITY", abbr: "CR", category: "manufacturing", desc: "Professional 3D printing and additive manufacturing.", logo: crealityLogo },
    { id: "herowear", name: "HEROWEAR", abbr: "HW", category: "manufacturing", desc: "Exosuits for workforce safety and fatigue reduction.", logo: herowearLogo },
];

/**
 * Get partners by category
 */
export function getPartnersByCategory(category: Partner['category']): Partner[] {
    return partners.filter(p => p.category === category);
}

/**
 * Get partner by ID
 */
export function getPartnerById(id: string): Partner | undefined {
    return partners.find(p => p.id === id);
}
