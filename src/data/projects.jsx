import React from 'react';
import { Building2, Factory } from 'lucide-react';

export const featuredProjects = [
    {
        id: 1,
        title: "Flipkart Warehouse Dakachiya",
        category: "Industrial",
        description: "Spread across 32 acres, we successfully executed the complete electrical installation work.",
        location: "Dakachiya, Indore, Madhya Pradesh",
        icon: <Building2 size={40} />,
        image: "https://i.ytimg.com/vi/sWpb-bR0Uw8/maxresdefault.jpg"
    },
    {
        id: 2,
        title: "Delhivery Warehouse Dakachiya",
        category: "Industrial",
        description: "Spread across 14.24 acres, we successfully executed the complete electrical installation work.",
        location: "Dakachiya, Indore, Madhya Pradesh",
        icon: <Factory size={40} />,
        image: "https://inc42.com/wp-content/uploads/2023/08/Delhivery-social.png"
    },
    {
        id: 3,
        title: "Cipla Ltd Plant",
        category: "Industrial",
        description: "No. 5 – 1500 KVA Diesel Generator: Complete installation including power cabling and chimney stack.",
        location: " Indore, Madhya Pradesh",
        icon: <Building2 size={40} />,
        image: "https://tse4.mm.bing.net/th/id/OIP.fbNDDNpXZEPolJEqAr78NgHaEH?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        id: 4,
        title: "Brilliant Solitaire ",
        category: "Commercial Building",
        description: "High-redundancy power systems and precision cooling electrical infrastructure and Complete electrical installation",
        location: "Indore, Madhya Pradesh",
        icon: <Building2 size={40} />,
        image: "https://pix10.agoda.net/hotelImages/245/2452729/2452729_17070318350054225928.jpg?s=1024x768"
    },
    {
        id: 5,
        title: " Brilliant Sapphire ",
        category: "Building (teleperformance)",
        description: "Complete electrical installation",
        location: "Indore, Madhya Pradesh",
        icon: <Building2 size={40} />,
        image: "https://cf-cdn.cityinfoservices.com/public/uploads/project/images/large/115446368e22daf58c7.jpg"
    },
    {
        id: 6,
        title: " VIBGYOR SCHOOL ",
        category: "Building ",
        description: "Complete electrical installation, including wiring, cabling, andsetup for CCTV surveillance andfire alarm systems.",
        location: "Indore, Madhya Pradesh",
        icon: <Building2 size={40} />,
        image: "https://indoreeducation.com/wp-content/uploads/2024/09/vibgyor-rise11.jpg"
    }
];

export const industrialProjects = [
    {
        id: 101, // Starting new IDs for industrial specific to avoid collision if mixed later
        title: "M/s Dorf Ketal Specialty Catalyst Pvt. Ltd., Mundra, Gujarat",
        category: "Industrial",
        description: "Installation and commissioning of 500 KVA DG set including earthing,  cabling, main panel installation & termination, fuel tank installation, and liasioning with MPSEB & Electrical Inspectorate.",
        location: "Mundra, Gujarat",
        icon: <Factory size={40} />,
        image: "https://th.bing.com/th/id/OIP.CLM2T4XJxjH94YWL8hexMAAAAA?w=307&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    },
    {
        id: 102,
        title: "M/s Equinox Realty, Waidhan, Singrauli (M.P.)",
        category: "Industrial",
        description: "Installation and commissioning of 1 × 725 KVA and 1 × 250 KVA DG sets including earthing, cabling, main panel installation & termination, fuel tank installation, and liasioning with MPSEB & Electrical Inspectorate..",
        location: "Singrauli, Madhya Pradesh",
        icon: <Factory size={40} />,
        image: "https://th.bing.com/th/id/OIP.P2_n8DAyIi5N7dvdKR1CjQAAAA?w=138&h=150&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    },
    {
        id: 103,
        title: "M/s Marasa Hospitality, Rajkot",
        category: "Industrial",
        description: " Installation and commissioning of 600 KVA DG set including earthing, cabling, main panel installation & termination, fuel tank installation, and liasioning with MPSEB & Electrical Inspectorate.",
        location: "Rajkot, Gujarat",
        icon: <Factory size={40} />,
        image: "https://th.bing.com/th/id/OIP.rX-JEb6INGNamIhCjZZtgQHaFj?w=202&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    },
    {
        id: 104,
        title: "M/s Hindustan Motors Ltd., RTV Plant, Pithampur ",
        category: "Industrial",
        description: "IInstallation and commissioning of 1250 KVA DG set including earthing, cabling, main panel installation & termination, fuel tank installation, and liasioning with MPSEB & Electrical Inspectorate.",
        location: "Pithampur, Madhya Pradesh",
        icon: <Factory size={40} />,
        image: "https://th.bing.com/th/id/OIP.77lCOFEXc6pQjg_XCNeFrAHaEK?w=311&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    },
    {
        id: 105,
        title: "M/s Essar Ltd., Bhopal ",
        category: "Industrial",
        description: " Installation and commissioning of 3 × 1010 KVA DG sets including earthing, cabling, main panel installation & termination, fuel tank installation, and liasioning with MPSEB & Electrical Inspectorate.",
        location: "Bhopal, Madhya Pradesh",
        icon: <Factory size={40} />,
        image: "https://th.bing.com/th/id/OIP.KldEl3FtdCUPobRLz0UgYwHaHa?w=177&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    },
];

export const dealershipsData = [
    {
        id: 201,
        name: "POLYCAB INDIA LIMITEDWIRES & CABLES",
        type: "Authorized Dealer",
        image: "https://th.bing.com/th/id/OIP.oGC9GPMaR-DlDBzQiLsuOgHaEo?w=281&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    },
    {
        id: 202,
        name: "EATON UPS",
        type: "Authorized Dealer",
        image: "data:image/webp;base64,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"
    },
    {
        id: 203,
        name: "GMMCO LTD AUTHORIZED CONTRACTOR",
        type: "Authorized Partnership",
        image: "https://mma.prnewswire.com/media/2642668/Gmmco_CAT_Logo.jpg?p=facebook"
    },
    {
        id: 204,
        name: "PRECISION PLASTIC INDUSTRIES PVT. LTD.",
        type: "Authorized Dealer",
        image: "https://www.aakit.com/wp-content/uploads/2020/09/Precision-Pipes-Fittings-company-logo-2048x606.png"
    },
    {
        id: 205,
        name: "ADI GLOBAL DISTRIBUTION",
        type: "Authorized Dealer",
        image: "https://securityupdate.in/wp-content/uploads/2022/04/adisu20april2022.jpg"
    }
];
