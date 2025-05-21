import { sub } from "framer-motion/client";

// content.js
export const Leaseagreement = {
  residential: {
    id: "residential",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Are you a property owner leasing out your residential space or a tenant looking to secure a home with confidence? At MyLegalinstant.com, we specialize in crafting legally sound and customizable Residential Lease Agreements that safeguard the interests of both landlords and tenants. Enjoy a seamless process, expert guidance, and peace of mind with our comprehensive solutions. ",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is a Residential Lease Agreement?",
      description:
        "A Residential Lease Agreement is a legally binding document between a landlord (property owner) and a tenant (occupant) that outlines the terms and conditions of renting a residential property. This agreement ensures clarity and protects the interests of both parties by defining their rights and responsibilities regarding the leased property.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Financial Terms",
        description:
          "Specifies the lease term, rent amount, and payment schedule. ",
      },
      {
        icon: "Calendar",
        title: "Duration & Terms",
        description: "Outlines security deposit terms and refund policies. ",
      },
      {
        icon: "HomeRepairService", // For maintenance responsibilities
        title: "Maintenance & Repairs",
        description:
          "Includes maintenance responsibilities and repair obligations.",
      },
      {
        icon: "Gavel", // For legal provisions and dispute resolution
        title: "Legal Provisions",
        description:
          "Provides provisions for renewal, termination, and dispute resolution.",
      },
      {
        icon: "Security", // For protection of rights
        title: "Rights & Protections",
        description:
          "Protects the legal rights of both the landlord and tenant.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Legal Protection",
        desc: "Safeguards the rights of both landlords and tenants against potential disputes related to property usage or damages.",
      },
      {
        title: "Dispute Resolution",
        desc: "Establishes a framework for addressing any issues or breaches of contract regarding the property.",
      },
      {
        title: "Compliance",
        desc: "Ensures adherence to applicable rental laws in India, particularly those governing long-term leases.",
      },
      {
        title: "Defined Responsibilities",
        desc: "Specifies obligations for property maintenance, utility payments, and more.",
      },
      {
        title: "Flexibility",
        desc: "Allows for customization based on specific needs, such as pet policies or shared spaces.",
      },
      {
        title: "Simplicity",
        desc: "Streamlined process makes it easy for both parties to understand and agree on terms.",
      },
    ],
    legalFramework: [
      {
        title: "The Indian Contract Act, 1872",
        desc: "Establishes the legality of contracts and obligations between parties.",
      },
      {
        title: "Rent Control Act",
        desc: "Governs the relationship between landlords and tenants.",
      },
    ],
    steps: [
      {
        title: "Fill Details",
        desc: "Enter all required information about the property and parties involved.",
      },
      {
        title: "Review Terms",
        desc: "Carefully review all terms and conditions of the agreement.",
      },
      {
        title: "Generate & Download",
        desc: "Get your legally-verified agreement instantly.",
      },
    ],
    whyChooseUs: [
      {
        title: "Expert Legal Team",
        desc: "Agreements crafted by experienced legal professionals.",
      },
      {
        title: "Quick & Easy",
        desc: "Generate your agreement in minutes, not days.",
      },
    ],
    faqs: [
      {
        question: "Is a residential lease agreement mandatory?",
        answer:
          "While not legally mandatory, it's highly recommended to protect both parties' interests and prevent future disputes.",
      },
      {
        question: "What should be included in the agreement?",
        answer:
          "Key elements include rent amount, security deposit, duration, maintenance responsibilities, and terms of use.",
      },
    ],
  },
  commercial: {
    id: "commercial",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Need a commercial property lease? MyLegalInstant.com provides expertly crafted Commercial Lease Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is a Commercial lease agreement?",
      description:
        "A Commercial Lease Agreement is a legally binding contract between a property owner and a business tenant that outlines the terms for renting commercial space. It includes specific provisions for business use while protecting both parties' interests.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Commercial Terms",
        description: "Detailed commercial rent and security deposit structure.",
      },
      {
        icon: "Calendar",
        title: "Business Usage",
        description:
          "Specific terms for commercial property usage and modifications.",
      },
      {
        icon: "FileText",
        title: "Business Provisions",
        description: "Special clauses for business operations and signage.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Business Protection",
        desc: "Safeguards your business interests and investment.",
      },
      {
        title: "Commercial Compliance",
        desc: "Ensures compliance with commercial property regulations.",
      },
      {
        title: "Business Operations",
        desc: "Clear terms for business operations and modifications.",
      },
    ],
    legalFramework: [
      {
        title: "Commercial Tenancy Laws",
        desc: "Covers specific regulations for commercial property leasing.",
      },
      {
        title: "Business Property Rights",
        desc: "Protects rights related to commercial property usage.",
      },
    ],
    steps: [
      {
        title: "Business Details",
        desc: "Enter business and property information.",
      },
      {
        title: "Commercial Terms",
        desc: "Specify commercial terms and conditions.",
      },
      {
        title: "Generate Agreement",
        desc: "Get your commercial lease agreement instantly.",
      },
    ],
    whyChooseUs: [
      {
        title: "Commercial Expertise",
        desc: "Specialized in commercial property agreements.",
      },
      {
        title: "Business-Focused",
        desc: "Terms tailored for business operations.",
      },
    ],
    faqs: [
      {
        question: "What makes commercial leases different?",
        answer:
          "Commercial leases include specific provisions for business operations, modifications, and commercial use of the property.",
      },
      {
        question: "Are commercial terms negotiable?",
        answer:
          "Yes, commercial lease terms are typically negotiable to accommodate specific business needs.",
      },
    ],
  },
  equipment: {
    id: "equipment",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Renting equipment? MyLegalInstant.com provides expertly crafted Equipment Rental Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is an Equipment rental agreement?",
      description:
        "An Equipment Rental Agreement is a contract that outlines the terms for renting machinery, tools, or other equipment. It specifies usage conditions, maintenance responsibilities, and return requirements.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Rental Rates",
        description: "Clear pricing structure for equipment rental.",
      },
      {
        icon: "Calendar",
        title: "Usage Period",
        description: "Defined rental duration and extension terms.",
      },
      {
        icon: "Shield",
        title: "Equipment Protection",
        description: "Maintenance and damage liability terms.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Equipment Safety",
        desc: "Ensures proper handling and usage of equipment.",
      },
      {
        title: "Damage Protection",
        desc: "Clear terms for damage liability and insurance.",
      },
      {
        title: "Usage Guidelines",
        desc: "Specific instructions for equipment operation.",
      },
    ],
    legalFramework: [
      {
        title: "Equipment Safety Laws",
        desc: "Compliance with equipment safety regulations.",
      },
      {
        title: "Rental Regulations",
        desc: "Legal requirements for equipment rental.",
      },
    ],
    steps: [
      {
        title: "Equipment Details",
        desc: "Specify equipment information and condition.",
      },
      {
        title: "Rental Terms",
        desc: "Set rental duration and conditions.",
      },
      {
        title: "Complete Agreement",
        desc: "Generate your equipment rental agreement.",
      },
    ],
    whyChooseUs: [
      {
        title: "Equipment Expertise",
        desc: "Specialized in equipment rental agreements.",
      },
      {
        title: "Complete Protection",
        desc: "Comprehensive terms for equipment safety.",
      },
    ],
    faqs: [
      {
        question: "Is equipment insurance required?",
        answer:
          "Most equipment rentals require insurance coverage for damage protection.",
      },
      {
        question: "What about maintenance?",
        answer:
          "The agreement specifies maintenance responsibilities and procedures.",
      },
    ],
  },
  vehicle: {
    id: "vehicle",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Need a vehicle lease? MyLegalInstant.com provides expertly crafted Vehicle Lease Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is a Vehicle lease agreement?",
      description:
        "A Vehicle Lease Agreement is a contract that details the terms for leasing a vehicle, including usage rights, maintenance responsibilities, and return conditions.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Lease Payments",
        description: "Monthly payment terms and security deposit.",
      },
      {
        icon: "Clock",
        title: "Lease Duration",
        description: "Specified lease term and mileage limits.",
      },
      {
        icon: "Shield",
        title: "Vehicle Protection",
        description: "Insurance and maintenance requirements.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Vehicle Protection",
        desc: "Safeguards against improper use and damage.",
      },
      {
        title: "Clear Terms",
        desc: "Defined usage limits and maintenance requirements.",
      },
      {
        title: "Legal Compliance",
        desc: "Ensures adherence to vehicle leasing laws.",
      },
    ],
    legalFramework: [
      {
        title: "Motor Vehicle Act",
        desc: "Compliance with vehicle leasing regulations.",
      },
      {
        title: "Insurance Requirements",
        desc: "Mandatory insurance coverage terms.",
      },
    ],
    steps: [
      {
        title: "Vehicle Information",
        desc: "Enter vehicle details and condition.",
      },
      {
        title: "Lease Terms",
        desc: "Specify lease duration and conditions.",
      },
      {
        title: "Complete Lease",
        desc: "Generate your vehicle lease agreement.",
      },
    ],
    whyChooseUs: [
      {
        title: "Vehicle Expertise",
        desc: "Specialized in vehicle lease agreements.",
      },
      {
        title: "Comprehensive Coverage",
        desc: "Complete protection for your vehicle lease.",
      },
    ],
    faqs: [
      {
        question: "What about mileage limits?",
        answer:
          "The agreement specifies annual mileage limits and excess charges.",
      },
      {
        question: "Who handles maintenance?",
        answer:
          "Maintenance responsibilities are clearly defined in the agreement.",
      },
    ],
  },
};

export const Affidavits = {
  AddressAffidavit: {
    id: "AddressAffidavit",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        " We offer a seamless and efficient service for creating Address Proof Affidavits – a critical document for verifying your residential address with legal credibility.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is an Address Proof Affidavit?",
      subtitel: "Address Proof Affidavit",
      description:
        "An Address Proof Affidavit is a legal declaration sworn before an authorized authority, affirming your current residential address. This document is often required in situations where traditional address proofs, such as utility bills or government IDs, are unavailable or insufficient.",
      image: "https://plus.unsplash.com/premium_photo-1661540409860-fe00bb21a51c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxhd3llcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Government Applications:",
        description:
          " For passports, voter ID cards, or other official registrations.",
      },
      {
        icon: "Calendar",
        title: "Banking and Financial Transactions",
        description:
          "Required by banks for opening accounts or loan applications.",
      },
      {
        icon: "FileText",
        title: "Rental Agreements",
        description: "As a supplementary document for leasing properties.",
      },
      {
        icon: "FileText",
        title: "Educational or Employment Needs",
        description: "For college admissions or job verifications.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Address Verification",
        desc: "For legal, financial, and administrative purposes.",
      },
      {
        title: "Ease of Transactions",
        desc: "Essential for banking, leasing, or official documentation.",
      },
      {
        title: "Credibility",
        desc: "Ensures that your declared address is legally validated.",
      },
    ],
    // legalFramework: [
    //   {
    //     title: "The Indian Contract Act, 1872",
    //     desc: "Establishes the legality of contracts and obligations between parties.",
    //   },
    //   {
    //     title: "Rent Control Act",
    //     desc: "Governs the relationship between landlords and tenants.",
    //   },
    // ],
    steps: [
      {
        title: "Click on 'Create Now'",
        desc: "Start by clicking the 'Create Now' button on our website.",
      },
      {
        title: "Select Affidavit Type",
        desc: "Choose the 'Address Proof Affidavit' option.",
      },
      {
        title: "Fill in Details",
        desc: "Provide your relevant details with utmost ease.",
      },
      {
        title: "Customization Options",
        desc: "Enjoy the widest range of customization options tailored to your specific needs.",
      },
      {
        title: "Review & Finalize",
        desc: "Review your affidavit thoroughly and finalize it.",
      },
      {
        title: "Select Stamp Paper",
        desc: "Choose the appropriate stamp paper; we’ll attach an e-stamp for you.",
      },
      {
        title: "E-Sign",
        desc: "Opt for an e-signature for quick processing.",
      },
      {
        title: "Legal Expertise & Consultation",
        desc: "Benefit from our expert legal consultation throughout the process.",
      },
      {
        title: "Delivery",
        desc: "Receive your Address Proof Affidavit digitally within minutes. For physical copies, doorstep delivery is available within a few working days.",
      },
    ],
    whyChooseUs: [
      {
        title: "Comprehensive Customization",
        desc: "The most extensive options for tailoring your affidavit.",
      },
      {
        title: "E-Stamping",
        desc: "We attach government-authorized e-stamp papers.",
      },
      {
        title: "E-Signature",
        desc: "Opt for digital signatures for added convenience.",
      },
      {
        title: "Secure Record-Keeping",
        desc: "All your documents are securely stored for future access.",
      },
      {
        title: "Fast Digital Delivery",
        desc: "Get your affidavit digitally delivered within minutes.",
      },
      {
        title: "Doorstep Delivery",
        desc: "Receive physical copies without leaving your home.",
      },
      {
        title: "Expert Legal Assistance",
        desc: "Ensure accuracy and compliance with legal standards.",
      },
    ],
    faqs: [
      {
        question:
          "What is the cost of creating an Address Proof Affidavit with MyLegalinstant.com?",
        answer:
          "Our pricing is transparent and affordable. Visit our pricing section for details.",
      },
      {
        question: "Is e-signature legally valid?",
        answer:
          "Yes, e-signatures are legally recognized under the IT Act, 2000.",
      },
      {
        question: "Can I customize my affidavit?",
        answer:
          "Absolutely! We offer the most extensive customization options to suit your needs.",
      },
      {
        question: "How long does the process take?",
        answer:
          "You can get a digital copy within minutes, and physical delivery within a few working days.",
      },
      {
        question: "Is legal consultation included?",
        answer:
          "Yes, our service includes expert legal consultation to ensure accuracy and compliance.",
      },
      {
        question:
          "What documents are required to create an Address Proof Affidavit?",
        answer:
          "You typically need a valid ID proof and any supplementary address documents for reference.",
      },
      {
        question:
          "Can I use this affidavit for government-related applications?",
        answer:
          "Yes, our affidavits are legally valid and can be used for government applications, including passport and voter ID registrations.",
      },
      {
        question: "Do I need to visit a notary?",
        answer:
          "Yes, MyLegalInstant.com provides a fully online service, including e-stamping and e-signature options, but you have to notarize the affidavit.",
      },
      {
        question: "Can I track the delivery of my physical affidavit?",
        answer:
          "Yes, we provide tracking options for physical deliveries so you can stay updated on its status.",
      },
      {
        question: "Is my data secure?",
        answer:
          "Yes, we follow strict data security measures to protect your personal information.",
      },
    ],
  },
  AffidavitNameChange: {
    id: "AffidavitNameChange",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Welcome to MyLegalinstant.com, your one-stop solution for all legal documentation needs. We simplify the process of creating an Affidavit for Change of Name, a crucial document required to legally declare a change in your name.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is an Affidavit for Change of Name",
      subtitle: "Affidavit for Change of Name",
      description:
        "An Affidavit for Change of Name is a legal declaration that officially documents your decision to change your name. It serves as a sworn statement to be used for updating records across various platforms, ensuring your new name is recognized legally.",
      image:
        "https://plus.unsplash.com/premium_photo-1661333820879-517c5e808bfe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGF3eWVyfGVufDB8fDB8fHww",
    },
    features: [
      {
        icon: "GovernmentBuilding",
        title: "Government Applications",
        desc:
          "For updating your name in passports, Aadhaar, PAN, and voter IDs.",
      },
      {
        icon: "Bank",
        title: "Banking and Financial Transactions",
        desc:
          "Required for updating bank records, loans, and other financial documents.",
      },
      {
        icon: "GraduationCap",
        title: "Educational Records",
        desc: "To reflect your new name on certificates and degrees.",
      },
      {
        icon: "UserCheck",
        title: "Personal and Professional Use",
        desc: "Ensures consistency in personal and employment records.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Legal Recognition",
        desc: " It provides legal backing for your new name.",
      },
      {
        title: "Document Updates",
        desc: "Ensures your name is updated in official records, such as ID proofs, bank accounts, and educational certificates.",
      },
      {
        title: "Avoiding Discrepancies",
        desc: "Helps maintain uniformity across all documents.",
      },
    ],
    legalFramework: [
      {
        title: "Commercial Tenancy Laws",
        desc: "Covers specific regulations for commercial property leasing.",
      },
      {
        title: "Business Property Rights",
        desc: "Protects rights related to commercial property usage.",
      },
    ],
    steps: [
      {
        title: "Click on 'Create Now'",
        desc: "Begin by clicking the 'Create Now' button.",
      },
      {
        title: "Select Affidavit Type",
        desc: "Choose the 'Affidavit for Change of Name' option.",
      },
      {
        title: "Provide Details",
        desc: "Fill in your current name, new name, and other relevant information.",
      },
      {
        title: "Customization Options",
        desc: "Enjoy our extensive customization features to tailor the affidavit to your needs.",
      },
      {
        title: "Review & Finalize",
        desc: "Carefully review your affidavit and finalize it.",
      },
      {
        title: "Choose Stamp Paper",
        desc: "Select the appropriate stamp paper; we’ll attach an e-stamp for you.",
      },
      {
        title: "E-Sign",
        desc: "Opt for an e-signature for convenience.",
      },
      {
        title: "Legal Consultation",
        desc: "Get expert legal guidance throughout the process.",
      },
      {
        title: "Delivery",
        desc: "Receive your affidavit digitally within minutes and get physical copies delivered to your doorstep within a few working days.",
      },
    ],
    whyChooseUs: [
      {
        title: "Extensive Customization Options",
        desc: "Personalize your affidavit to meet specific requirements.",
      },
      {
        title: "E-Stamping",
        desc: "We provide government-authorized e-stamp papers.",
      },
      {
        title: "E-Signature",
        desc: "Quick and convenient digital signature options.",
      },
      {
        title: "Secure Record-Keeping",
        desc: "Safeguard your documents for future use.",
      },
      {
        title: "Fast Delivery",
        desc: "Digital delivery within minutes and physical copies to your doorstep.",
      },
      {
        title: "Expert Legal Support",
        desc: "Our team ensures accuracy and legal compliance.",
      },
    ],
    faqs: [
      {
        question: "What documents are needed for a Change of Name Affidavit?",
        answer:
          "Typically, you need a valid ID proof, proof of address, and any supporting documents for the name change.",
      },
      {
        question: "Can I use this affidavit for updating my passport?",
        answer:
          "Yes, this affidavit is valid for updating your name in your passport and other government records.",
      },
      {
        question: "Is e-signature legally valid?",
        answer:
          "Yes, e-signatures are recognized under the IT Act, 2000, and are legally binding.",
      },
      {
        question: "How long does it take to create and deliver the affidavit?",
        answer:
          "You can receive a digital copy within minutes, and physical delivery is completed within a few working days.",
      },
      {
        question: "Is legal consultation included in the service?",
        answer:
          "Yes, we provide expert legal consultation to ensure your affidavit meets all legal requirements.",
      },
      {
        question: "Can I track my physical delivery?",
        answer:
          "Yes, we offer tracking options for your physical document delivery.",
      },
      {
        question: "What if I need revisions?",
        answer:
          "You can request revisions before finalizing your affidavit. Our team is here to assist.",
      },
      {
        question: "Is my personal information secure?",
        answer:
          "Absolutely. We use advanced encryption to protect your data and ensure privacy.",
      },
    ],
  },
  AfterMarriage: {
    id: "AfterMarriage",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "your trusted partner for all legal documentation needs. We make it simple and hassle-free to create an Affidavit for Change of Name after Marriage, a crucial document for legally adopting your new name post-marriage.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: " What is an Affidavit for Change of Name after Marriage?",
      subtitle: "Affidavit for Change of Name after Marriage",
      description:
        "An Affidavit for Change of Name after Marriage is a legal declaration that formalizes your decision to change your name after marriage. This document is often required for updating records and ensuring that your new name is legally recognized across various platforms.",
      image: "https://images.unsplash.com/photo-1459499362902-55a20553e082?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxhd3llcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Legal Recognition",
        desc: "Establishes your new name legally.",
      },
      {
        icon: "Calendar",
        title: "Document Updates",
        desc:
          "Ensures your name is updated on IDs, bank accounts, and other official records.",
      },
      {
        icon: "Shield",
        title: "Avoiding Discrepancies",
        desc:
          "Prevents inconsistencies across personal and professional documentation.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Government Records",
        desc: "For updating your name on passports, Aadhaar, PAN, and voter IDs.",
      },
      {
        title: "Banking and Financial Transactions",
        desc: "Required for changing your name in bank accounts, loans, and other financial records.",
      },
      {
        title: "Insurance and Benefits",
        desc: "To update your name on insurance policies and benefit schemes.",
      },
      {
        title: "Educational and Employment Records",
        desc: "To ensure consistency in academic and professional documentation.",
      },
    ],
    legalFramework: [
      {
        title: "Equipment Safety Laws",
        desc: "Compliance with equipment safety regulations.",
      },
      {
        title: "Rental Regulations",
        desc: "Legal requirements for equipment rental.",
      },
    ],
    steps: [
      {
        title: "Click on 'Create Now'",
        description: "Start by clicking the 'Create Now' button on our website.",
      },
      {
        title: "Select Affidavit Type",
        description: "Choose the 'Affidavit for Change of Name after Marriage' option.",
      },
      {
        title: "Provide Details",
        description: "Fill in your current name, new name, and marriage details.",
      },
      {
        title: "Customization Options",
        description: "Tailor your affidavit with our extensive customization features.",
      },
      {
        title: "Review & Finalize",
        description: "Carefully review your affidavit and finalize it.",
      },
      {
        title: "Choose Stamp Paper",
        description: "Select the appropriate stamp paper; we’ll attach an e-stamp for you.",
      },
      {
        title: "E-Sign",
        description: "Opt for an Aadhaar-based e-signature for convenience and validity.",
      },
      {
        title: "Legal Consultation",
        description: "Benefit from expert legal guidance throughout the process.",
      },
      {
        title: "Delivery",
        description: "Receive your affidavit digitally within minutes and get physical copies delivered to your doorstep within a few working days.",
      },
    ],
    whyChooseUs: [
      {
        title: "Extensive Customization Options",
        desc: "Personalize your affidavit to meet specific requirements.",
      },
      {
        title: "E-Stamping",
        desc: "Government-authorized e-stamp papers included.",
      },
      {
        title: "E-Signature",
        desc: "Quick and convenient digital signature options.",
      },
      {
        title: "Secure Record-Keeping",
        desc: "Safeguard your documents for future use.",
      },
      {
        title: "Fast Delivery",
        desc: "Digital delivery within minutes and physical copies to your doorstep.",
      },
      {
        title: "Expert Legal Support",
        desc: "Our team ensures accuracy and legal compliance.",
      },
    ],
    faqs: [
      {
        question: "What documents are required for this affidavit?",
        answer:
          "You typically need a valid ID proof, marriage certificate, and any supporting documents for the name change.",
      },
      {
        question: "Can I use this affidavit for updating my passport and other government IDs?",
        answer:
          "Yes, this affidavit is legally valid for updating your name on passports, Aadhaar, PAN, and voter IDs.",
      },
      {
        question: "Is e-signature legally valid?",
        answer:
          "Yes, e-signatures are recognized under the IT Act, 2000, and are legally binding.",
      },
      {
        question: "How long does it take to create and deliver the affidavit?",
        answer:
          "You can receive a digital copy within minutes, and physical delivery is completed within a few working days.",
      },
      {
        question: "Is legal consultation included in the service?",
        answer:
          "Yes, our service includes expert legal consultation to ensure your affidavit meets all legal requirements.",
      },
      {
        question: "Can I track my physical delivery?",
        answer:
          "Yes, we offer tracking options for your physical document delivery.",
      },
      {
        question: "What if I need revisions?",
        answer:
          "You can request revisions before finalizing your affidavit. Our team is here to assist.",
      },
      {
        question: "Is my personal information secure?",
        answer:
          "Absolutely. We use advanced encryption to protect your data and ensure privacy.",
      },
      {
        question: "Can I customize the affidavit for special requirements?",
        answer:
          "Yes, our platform provides extensive customization options to meet your specific needs.",
      },
    ],

  },

  AffidavitChangeSignature: {
    id: "AffidavitChangeSignature",
    hero: {
      title: "Welcome to",
      subtitle:
        "MyLegalInstant.com",
      description: "Need a Affidavit ForChange? MyLegalInstant.com provides expertly crafted Commercial Lease Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: " What is an Affidavit For Change Of Signature?",
      subtitle: "Affidavit For Change Of Signature",
      description:
        "An Affidavit for Change of   Signature is a legal declaration that formalizes your decision to change your name after marriage. This document is often required for updating records and ensuring that your new name is legally recognized across various platforms.",
      image: "https://images.unsplash.com/photo-1649653084130-06638e40ca25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGxhd3llcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Legal Recognition",
        desc: "Establishes your new name legally.",
      },
      {
        icon: "Calendar",
        title: "Document Updates",
        desc:
          "Ensures your name is updated on IDs, bank accounts, and other official records.",
      },
      {
        icon: "Shield",
        title: "Avoiding Discrepancies",
        desc:
          "Prevents inconsistencies across personal and professional documentation.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Government Records",
        desc: "For updating your name on passports, Aadhaar, PAN, and voter IDs.",
      },
      {
        title: "Banking and Financial Transactions",
        desc: "Required for changing your name in bank accounts, loans, and other financial records.",
      },
      {
        title: "Insurance and Benefits",
        desc: "To update your name on insurance policies and benefit schemes.",
      },
      {
        title: "Educational and Employment Records",
        desc: "To ensure consistency in academic and professional documentation.",
      },
    ],
    legalFramework: [
      {
        title: "Equipment Safety Laws",
        desc: "Compliance with equipment safety regulations.",
      },
      {
        title: "Rental Regulations",
        desc: "Legal requirements for equipment rental.",
      },
    ],
    steps: [
      {
        title: "Click on 'Create Now'",
        desc: "Begin by clicking the 'Create Now' button.",
      },
      {
        title: "Select Affidavit Type",
        desc: "Choose the 'Affidavit for Change of Name' option.",
      },
      {
        title: "Provide Details",
        desc: "Fill in your current name, new name, and other relevant information.",
      },
      {
        title: "Customization Options",
        desc: "Enjoy our extensive customization features to tailor the affidavit to your needs.",
      },
      {
        title: "Review & Finalize",
        desc: "Carefully review your affidavit and finalize it.",
      },
      {
        title: "Choose Stamp Paper",
        desc: "Select the appropriate stamp paper; we’ll attach an e-stamp for you.",
      },
      {
        title: "E-Sign",
        desc: "Opt for an e-signature for convenience.",
      },
      {
        title: "Legal Consultation",
        desc: "Get expert legal guidance throughout the process.",
      },
      {
        title: "Delivery",
        desc: "Receive your affidavit digitally within minutes and get physical copies delivered to your doorstep within a few working days.",
      },
      {
        title: "Extensive Customization Options",
        desc: "Personalize your affidavit to meet specific requirements.",
      },
      {
        title: "E-Stamping",
        desc: "We provide government-authorized e-stamp papers.",
      },
      {
        title: "E-Signature",
        desc: "Quick and convenient digital signature options.",
      },
      {
        title: "Secure Record-Keeping",
        desc: "Safeguard your documents for future use.",
      },
      {
        title: "Fast Delivery",
        desc: "Digital delivery within minutes and physical copies to your doorstep.",
      },
      {
        title: "Expert Legal Support",
        desc: "Our team ensures accuracy and legal compliance.",
      },
    ],
    whyChooseUs: [
      {
        title: "Extensive Customization Options",
        desc: "Personalize your affidavit to meet specific requirements.",
      },
      {
        title: "E-Stamping",
        desc: "We provide government-authorized e-stamp papers.",
      },
      {
        title: "E-Signature",
        desc: "Quick and convenient digital signature options.",
      },
      {
        title: "Secure Record-Keeping",
        desc: "Safeguard your documents for future use.",
      },
      {
        title: "Fast Delivery",
        desc: "Digital delivery within minutes and physical copies to your doorstep.",
      },
      {
        title: "Expert Legal Support",
        desc: "Our team ensures accuracy and legal compliance.",
      },
    ],
    faqs: [
      {
        question: "Is equipment insurance required?",
        answer:
          "Most equipment rentals require insurance coverage for damage protection.",
      },
      {
        question: "What about maintenance?",
        answer:
          "The agreement specifies maintenance responsibilities and procedures.",
      },
    ],
  },
  DuplicateLicense: {
    id: "DuplicateLicense",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "We make it easy to create an Affidavit for Duplicate License, a crucial document required for obtaining a duplicate of your lost, stolen, or damaged license.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is an Affidavit for Duplicate License?",
      subtitle: "An Affidavit for Duplicate License",
      description:
        "An Affidavit for Duplicate License is a legal declaration that confirms the loss, theft, or damage of your original license. This affidavit is often required by government authorities or licensing agencies to issue a duplicate license.",
      image: "https://images.unsplash.com/photo-1674919768570-076927525118?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGxhd3llcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Legal Declaration",
        desc:
          "Officially states the circumstances of the loss or damage.",
      },
      {
        icon: "Clock",
        title: "Application Process",
        desc:
          "Required to apply for a duplicate license with the relevant authority.",
      },
      {
        icon: "Shield",
        title: "Avoiding Misuse",
        desc: "Prevents unauthorized use of the lost or stolen license.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Driving License",
        desc: "To obtain a duplicate driving license from the Regional Transport Office (RTO).",
      },
      {
        title: "Professional License",
        desc: "For reissuing lost or damaged professional licenses (e.g., medical, legal, or engineering licenses).",
      },
      {
        title: "Identity Verification",
        desc: "To provide a legally valid declaration in case of lost or stolen ID-based licenses.",
      },
    ],
    // legalFramework: [
    //   {
    //     title: "Motor Vehicle Act",
    //     desc: "Compliance with vehicle leasing regulations.",
    //   },
    //   {
    //     title: "Insurance Requirements",
    //     desc: "Mandatory insurance coverage terms.",
    //   },
    // ],
    steps: [
      {
        title: "Click on 'Create Now':",
        desc: "Start by clicking the 'Create Now' button on our website.",
      },
      {
        title: "Select Affidavit ",
        desc: "Choose the 'Affidavit for Duplicate License' option.",
      },
      {
        title: "Provide Details Type",
        desc: "Enter your license details, the circumstances of loss/damage, and your personal information.",
      },
      {
        title: "Customization Options",
        desc: "Tailor your affidavit with our extensive customization features.",
      },
      {
        title: "Review & Finalize",
        desc: "Carefully review your affidavit and finalize it.",
      },
      {
        title: "Choose Stamp Paper ",
        desc: "Select the appropriate stamp paper; we’ll attach an e-stamp for you.",
      },
      {
        title: "E-Sign",
        desc: "Opt for an e-signature for convenience.",
      },
      {
        title: "Legal Consultation':",
        desc: "Benefit from expert legal guidance throughout the process.",
      },
      {
        title: "Delivery ",
        desc: "Receive your affidavit digitally within minutes and get physical copies delivered to your doorstep within a few working days.",
      },
    ],
    whyChooseUs: [
      {
        title: "Extensive Customization Options",
        desc: "Personalize your affidavit to meet specific requirements.",
      },
      {
        title: "E-Stamping",
        desc: "We provide government-authorized e-stamp papers.",
      },
      {
        title: "E-Signature",
        desc: "Quick and convenient digital signature options.",
      },
      {
        title: "Secure Record-Keeping",
        desc: "Safeguard your documents for future use.",
      },
      {
        title: "Fast Delivery",
        desc: "Digital delivery within minutes and physical copies to your doorstep.",
      },
      {
        title: "Expert Legal Support",
        desc: "Our team ensures accuracy and legal compliance.",
      },
    ],
    faqs: [
      {
        question: "What documents are required for this affidavit?",
        answer:
          "You typically need a valid ID proof, details of the lost or damaged license, and any supporting documents required by the licensing authority.",
      },
      {
        question: "Can this affidavit be used for all types of licenses?",
        answer:
          "Yes, it can be used for various types of licenses, including driving, professional, and other ID-based licenses.",
      },
      {
        question: "Is e-signature legally valid?",
        answer:
          "Yes, e-signatures are recognized under the IT Act, 2000, and are legally binding.",
      },
      {
        question: "How long does it take to create and deliver the affidavit?",
        answer:
          "You can receive a digital copy within minutes, and physical delivery is completed within a few working days.",
      },
      {
        question: "Is legal consultation included in the service?",
        answer:
          "Yes, our service includes expert legal consultation to ensure your affidavit meets all legal requirements.",
      },
      {
        question: "Can I track my physical delivery?",
        answer:
          "Yes, we offer tracking options for your physical document delivery.",
      },
      {
        question: "What if I need revisions?",
        answer:
          "You can request revisions before finalizing your affidavit. Our team is here to assist.",
      },
      {
        question: "Is my personal information secure?",
        answer:
          "Absolutely. We use advanced encryption to protect your data and ensure privacy.",
      },
      {
        question: "Can I customize the affidavit for specific requirements?",
        answer:
          "Yes, our platform provides extensive customization options to meet your specific needs.",
      },
    ],
  },
  ClaimSettlement: {
    id: "ClaimSettlement",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "We simplify the process of creating an Affidavit for Claim Settlement in Bank, ensuring a smooth and legally valid process for claiming funds or assets from a bank.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is an Affidavit for Claim Settlement in Bank?",
      subtitle: "An Affidavit for Claim Settlement in Bank",
      description:
        "An Affidavit for Claim Settlement in Bank is a legal document used to declare and affirm your right to claim funds, assets, or benefits from a bank account, often in the event of the account holder’s demise or other specific situations. This affidavit serves as a formal declaration of your entitlement and facilitates the settlement process.",
      image: "https://plus.unsplash.com/premium_photo-1694088516834-6fa55faab454?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGxhd3llcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Legal Entitlement",
        desc: "Establishes your rightful claim to the funds or assets.",
      },
      {
        icon: "Clock",
        title: "Bank Compliance",
        desc: "Ensures the bank follows proper legal protocols.",
      },
      {
        icon: "Shield",
        title: "Preventing Disputes",
        desc: "Avoids conflicts and ensures a smooth settlement process.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Deceased Account Holder Claims",
        desc: "To claim funds from a deceased person’s bank account.",
      },
      {
        title: "Joint Account Settlements",
        desc: "For resolving claims in joint account situations.",
      },
      {
        title: "Unclaimed Funds",
        desc: "To claim dormant or unclaimed bank funds.",
      },
      {
        title: "Nominee Claims",
        desc: "To validate a nominee’s right to the funds.",
      },
    ],
    legalFramework: [
      {
        title: "Motor Vehicle Act",
        desc: "Compliance with vehicle leasing regulations.",
      },
      {
        title: "Insurance Requirements",
        desc: "Mandatory insurance coverage terms.",
      },
    ],
    steps: [
      {
        title: "Click on 'Create Now'",
        desc: "Start by clicking the 'Create Now' button on our website.",
      },
      {
        title: "Select Affidavit Type",
        desc: "Choose the 'Affidavit for Claim Settlement in Bank' option.",
      },
      {
        title: "Provide Details",
        desc: "Fill in your old and new signature details along with relevant personal information.",
      },
      {
        title: "Customization Options",
        desc: "Tailor your affidavit with our extensive customization features.",
      },
      {
        title: "Review & Finalize",
        desc: "Carefully review your affidavit and finalize it.",
      },
      {
        title: "Choose Stamp Paper",
        desc: "Select the appropriate stamp paper; we’ll attach an e-stamp for you.",
      },
      {
        title: "E-Sign",
        desc: "Opt for an e-signature for convenience.",
      },
      {
        title: "Legal Consultation",
        desc: "Benefit from expert legal guidance throughout the process.",
      },
      {
        title: "Delivery",
        desc: "Receive your affidavit digitally within minutes and get physical copies delivered to your doorstep within a few working days.",
      },
    ],
    whyChooseUs: [
      {
        title: "Extensive Customization Options",
        desc: "Personalize your affidavit to meet specific requirements.",
      },
      {
        title: "E-Stamping",
        desc: "Government-authorized e-stamp papers included.",
      },
      {
        title: "E-Signature",
        desc: "Quick and legally valid digital signature options.",
      },
      {
        title: "Secure Record-Keeping",
        desc: "Safeguard your documents for future use.",
      },
      {
        title: "Fast Delivery",
        desc: "Digital delivery within minutes and doorstep delivery of physical copies.",
      },
      {
        title: "Expert Legal Support",
        desc: "Ensure accuracy and compliance with legal standards.",
      },
    ],
    faqs: [
      {
        question: "What documents are required for this affidavit?",
        answer:
          "You typically need a valid ID proof, bank account details, death certificate (if applicable), and any supporting documents for the claim.",
      },
      {
        question: "Can this affidavit be used for joint account settlements?",
        answer:
          "Yes, it is valid for resolving claims in joint account scenarios.",
      },
      {
        question: "Is e-signature legally valid?",
        answer:
          "Yes, e-signatures are recognized under the IT Act, 2000, and are legally binding.",
      },
      {
        question: "How long does it take to create and deliver the affidavit?",
        answer:
          "You can receive a digital copy within minutes, and physical delivery is completed within a few working days.",
      },
      {
        question: "Is legal consultation included in the service?",
        answer:
          "Yes, our service includes expert legal consultation to ensure your affidavit meets all legal requirements.",
      },
      {
        question: "Can I track my physical delivery?",
        answer:
          "Yes, we offer tracking options for your physical document delivery.",
      },
      {
        question: "What if I need revisions?",
        answer:
          "You can request revisions before finalizing your affidavit. Our team is here to assist.",
      },
      {
        question: "Is my personal information secure?",
        answer:
          "Absolutely. We use advanced encryption to protect your data and ensure privacy.",
      },
      {
        question: "Can I customize the affidavit for specific claim scenarios?",
        answer:
          "Yes, our platform provides extensive customization options to meet your specific needs.",
      },
    ],
  },
  DuplicatemarkSheet: {
    id: "DuplicatemarkSheet",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "We make it easy to create an Affidavit for Duplicate Mark Sheet/Certificate, a crucial document required for obtaining a duplicate of your lost, stolen, or damaged educational certificates or mark sheets.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is an Affidavit for Duplicate Mark Sheet/Certificate?",
      subtitle: " Duplicate Mark Sheet/Certificate",
      description:
        "An Affidavit for Duplicate Mark Sheet/Certificate is a legal declaration that confirms the loss, theft, or damage of your original educational documents. This affidavit is often required by educational institutions or examination boards to issue duplicate certificates or mark sheets.",
      image: "https://plus.unsplash.com/premium_photo-1661559051049-f9e147c7a90b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGxhd3llcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Educational Institutions",
        desc: "To obtain duplicate mark sheets or certificates from schools, colleges, or universities.",
      },
      {
        icon: "Clock",
        title: "Examination Boards",
        desc: "For reissuing documents like board exam certificates or transcripts.",
      },
      {
        icon: "Shield",
        title: "Professional Applications",
        desc: "To provide proof of education when applying for jobs or higher studies.",
      },
      {
        icon: "Users",
        title: "Immigration Processes",
        desc: "To meet documentation requirements for visa or immigration purposes.",
      }
    ],
    whyNeedAgreement: [
      {
        title: "Educational Institutions",
        desc: "To obtain duplicate mark sheets or certificates from schools, colleges, or universities.",
      },
      {
        title: "Examination Boards",
        desc: "For reissuing documents like board exam certificates or transcripts.",
      },
      {
        title: "Professional Applications",
        desc: "To provide proof of education when applying for jobs or higher studies.",
      },
      {
        title: "Immigration Processes",
        desc: "To meet documentation requirements for visa or immigration purposes.",
      },
    ],
    legalFramework: [
      {
        title: "Motor Vehicle Act",
        desc: "Compliance with vehicle leasing regulations.",
      },
      {
        title: "Insurance Requirements",
        desc: "Mandatory insurance coverage terms.",
      },
    ],
    whyChooseUs: [
      {
        title: "Extensive Customization Options",
        desc: "Personalize your affidavit to meet specific requirements.",
      },
      {
        title: "E-Stamping",
        desc: "Government-authorized e-stamp papers included.",
      },
      {
        title: "E-Signature",
        desc: "Quick and legally valid digital signature options.",
      },
      {
        title: "Secure Record-Keeping",
        desc: "Safeguard your documents for future use.",
      },
      {
        title: "Fast Delivery",
        desc: "Digital delivery within minutes and doorstep delivery of physical copies.",
      },
      {
        title: "Expert Legal Support",
        desc: "Ensure accuracy and compliance with legal standards.",
      },
    ],


    steps: [
      {
        title: "Click on 'Create Now'",
        desc: "Start by clicking the 'Create Now' button.",
      },
      {
        title: "Select Affidavit Type",
        desc: "Choose the 'Duplicate Mark Sheet/Certificate' option.",
      },
      {
        title: "Provide Details",
        desc: "Enter your license details, the circumstances of loss/damage, and your personal information.",
      },
      {
        title: "Customization Options",
        desc: "Tailor your affidavit with our extensive customization features.",
      },
      {
        title: "Review & Finalize",
        desc: "Carefully review your affidavit and finalize it.",
      },
      {
        title: "Choose Stamp Paper",
        desc: "Select the appropriate stamp paper; we’ll attach an e-stamp for you.",
      },
      {
        title: "E-Sign",
        desc: "Opt for an e-signature for convenience.",
      },
      {
        title: "Legal Consultation",
        desc: "Benefit from expert legal guidance throughout the process.",
      },
      {
        title: "Delivery",
        desc: "Receive your affidavit digitally within minutes and get physical copies delivered to your doorstep within a few working days.",
      },
    ],
    faqs: [
      {
        question: "What documents are required for this affidavit?",
        answer:
          "You typically need a valid ID proof, details of the lost or damaged document, and any supporting documents required by the institution.",
      },
      {
        question:
          "Can this affidavit be used for all types of educational certificates?",
        answer:
          "Yes, it can be used for various educational documents, including mark sheets, degree certificates, and transcripts.",
      },
      {
        question: "Is e-signature legally valid?",
        answer:
          "Yes, e-signatures are recognized under the IT Act, 2000, and are legally binding.",
      },
      {
        question: "How long does it take to create and deliver the affidavit?",
        answer:
          "You can receive a digital copy within minutes, and physical delivery is completed within a few working days.",
      },
      {
        question: "Is legal consultation included in the service?",
        answer:
          "Yes, our service includes expert legal consultation to ensure your affidavit meets all legal requirements.",
      },
      {
        question: "Can I track my physical delivery?",
        answer:
          "Yes, we offer tracking options for your physical document delivery.",
      },
      {
        question: "What if I need revisions?",
        answer:
          "You can request revisions before finalizing your affidavit. Our team is here to assist.",
      },
      {
        question: "Is my personal information secure?",
        answer:
          "Absolutely. We use advanced encryption to protect your data and ensure privacy.",
      },
      {
        question: "Can I customize the affidavit for specific requirements?",
        answer:
          "Yes, our platform provides extensive customization options to meet your specific needs.",
      },
    ],
  },

  EducationLoan: {
    id: "EducationLoan",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "We make it easy to create an Affidavit for Education Loan, a vital document required for availing financial assistance for your academic journey.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is an Affidavit for Education Loan?",
      subtitle: " Education Loan",
      description:
        "An Affidavit for Education Loan is a legal declaration that certifies specific details about the applicant, such as financial status, family income, and intent to utilize the loan exclusively for educational purposes. This affidavit is often required by banks or financial institutions during the loan application process.",
      image: "https://plus.unsplash.com/premium_photo-1661315458660-6aa08c1ddf38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGxhd3llcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    features: [
      {
        icon: "CheckCircle",
        title: "Loan Approval",
        desc: "Establishes the applicant’s eligibility and compliance with loan requirements.",
      },
      {
        icon: "FileText",
        title: "Transparency",
        desc: "Ensures the funds will be used for the intended educational purposes.",
      },
      {
        icon: "Gavel",
        title: "Legal Compliance",
        desc: "Satisfies the documentation requirements of financial institutions.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Bank Loan Applications",
        desc: "To meet the affidavit requirements of banks offering education loans.",
      },
      {
        title: "Government Schemes",
        desc: "For loans provided under government-sponsored education loan schemes.",
      },
      {
        title: "Verification Purposes",
        desc: "To validate the financial background and intent of the applicant.",
      },
      {
        title: "Study Abroad Loans",
        desc: "For securing loans intended for international education.",
      },
    ],
    // legalFramework: [
    //   {
    //     title: "Motor Vehicle Act",
    //     desc: "Compliance with vehicle leasing regulations.",
    //   },
    //   {
    //     title: "Insurance Requirements",
    //     desc: "Mandatory insurance coverage terms.",
    //   },
    // ],
    steps: [
      {
        title: "Click on 'Create Now'",
        desc: "Start by clicking the 'Create Now' button.",
      },
      {
        title: "Select Affidavit Type",
        desc: "Choose the 'Affidavit for Education Loan' option.",
      },
      {
        title: "Provide Details",
        desc: "Enter your license details, the circumstances of loss/damage, and your personal information.",
      },
      {
        title: "Customization Options",
        desc: "Tailor your affidavit with our extensive customization features.",
      },
      {
        title: "Review & Finalize",
        desc: "Carefully review your affidavit and finalize it.",
      },
      {
        title: "Choose Stamp Paper",
        desc: "Select the appropriate stamp paper; we’ll attach an e-stamp for you.",
      },
      {
        title: "E-Sign",
        desc: "Opt for an e-signature for convenience.",
      },
      {
        title: "Legal Consultation",
        desc: "Benefit from expert legal guidance throughout the process.",
      },
      {
        title: "Delivery",
        desc: "Receive your affidavit digitally within minutes and get physical copies delivered to your doorstep within a few working days.",
      },
    ],
    whyChooseUs: [
      {
        title: "Extensive Customization Options",
        desc: "Personalize your affidavit to meet specific requirements.",
      },
      {
        title: "E-Stamping",
        desc: "Government-authorized e-stamp papers included.",
      },
      {
        title: "E-Signature",
        desc: "Quick and legally valid digital signature options.",
      },
      {
        title: "Secure Record-Keeping",
        desc: "Safeguard your documents for future use.",
      },
      {
        title: "Fast Delivery",
        desc: "Digital delivery within minutes and doorstep delivery of physical copies.",
      },
      {
        title: "Expert Legal Support",
        desc: "Ensure accuracy and compliance with legal standards.",
      },
    ],
    faqs: [
      {
        question: "What documents are required for this affidavit?",
        answer:
          "You typically need a valid ID proof, family income certificate, details of the loan amount, and information about the educational institution.",
      },
      {
        question:
          "Can this affidavit be used for all types of education loans?",
        answer:
          "Yes, it is applicable for domestic as well as international education loans.",
      },
      {
        question: "Is e-signature legally valid?",
        answer:
          "Yes, e-signatures are recognized under the IT Act, 2000, and are legally binding.",
      },
      {
        question: "How long does it take to create and deliver the affidavit?",
        answer:
          "You can receive a digital copy within minutes, and physical delivery is completed within a few working days.",
      },
      {
        question: "Is legal consultation included in the service?",
        answer:
          "Yes, our service includes expert legal consultation to ensure your affidavit meets all legal requirements.",
      },
      {
        question: "Can I track my physical delivery?",
        answer:
          "Yes, we offer tracking options for your physical document delivery.",
      },
      {
        question: "What if I need revisions?",
        answer:
          "You can request revisions before finalizing your affidavit. Our team is here to assist.",
      },
      {
        question: "Is my personal information secure?",
        answer:
          "Absolutely. We use advanced encryption to protect your data and ensure privacy.",
      },
      {
        question: "Can I customize the affidavit for specific requirements?",
        answer:
          "Yes, our platform provides extensive customization options to meet your specific needs.",
      },
    ],
  },

  MarriageRegistrationAffidavit: {
    id: "MarriageRegistrationAffidavit",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "We make it easy to create an Affidavit for Marriage Registration by Joint Applicants, a vital document required for registering your marriage under the law.",
      buttonText: "Create Affidavit Now",
      buttonLink: "/create-affidavit",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title:
        "What is an Affidavit for Marriage Registration by Joint Applicants?",
      subtitle: "Marriage Registration by Joint Applicants",
      description:
        "An Affidavit for Marriage Registration by Joint Applicants is a legal declaration jointly made by both parties of the marriage. It certifies the authenticity of their marriage and includes essential details such as names, dates, and consent. This affidavit is required by marriage registration authorities to validate the application.",
      image: "https://plus.unsplash.com/premium_photo-1694476607274-003dd175d073?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGxhd3llcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    features: [
      {
        icon: "LegalCheck",
        title: "Legal Validation",
        desc: "Confirms the mutual consent and authenticity of the marriage.",
      },
      {
        icon: "Record",
        title: "Official Records",
        desc: "Ensures the marriage is officially registered under the law.",
      },
      {
        icon: "Document",
        title: "Proof of Marriage",
        desc: "Acts as a legal document for various purposes, such as updating marital status in official records.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Marriage Registration",
        desc: "Required for registering marriages under the Hindu Marriage Act, Special Marriage Act, or other applicable laws.",
      },
      {
        title: "Government Documentation",
        desc: "Necessary for availing spousal benefits, such as health insurance or joint property registration.",
      },
      {
        title: "Immigration Purposes",
        desc: "Used for visa applications or other legal processes involving marital status.",
      },
      {
        title: "Social Security Benefits",
        desc: "To access government schemes or benefits available to married couples.",
      },
    ],
    // legalFramework: [
    //   {
    //     title: "The Indian Contract Act, 1872",
    //     desc: "Establishes the legality of contracts and obligations between parties.",
    //   },
    //   {
    //     title: "Rent Control Act",
    //     desc: "Governs the relationship between landlords and tenants.",
    //   },
    // ],
    steps: [
      {
        title: "Click on 'Create Now'",
        description: "Start by clicking the 'Create Now' button.",
      },
      {
        title: "Select Affidavit Type",
        description: "Choose the 'Marriage Registration Affidavit' option.",
      },
      {
        title: "Provide Details",
        description: "Enter your marriage details, spouse’s information, and personal information.",
      },
      {
        title: "Customization Options",
        description: "Tailor your affidavit with our extensive customization features.",
      },
      {
        title: "Review & Finalize",
        description: "Carefully review your affidavit and finalize it.",
      },
      {
        title: "Choose Stamp Paper",
        description: "Select the appropriate stamp paper; we’ll attach an e-stamp for you.",
      },
      {
        title: "E-Sign",
        description: "Opt for an Aadhaar-based e-signature for added convenience.",
      },
      {
        title: "Legal Consultation",
        description: "Benefit from expert legal guidance throughout the process.",
      },
      {
        title: "Delivery",
        description: "Receive your affidavit digitally within minutes and get physical copies delivered to your doorstep within a few working days.",
      },
    ],
    whyChooseUs: [
      {
        title: "Extensive Customization Options",
        desc: "Personalize your affidavit to meet specific requirements.",
      },
      {
        title: "E-Stamping",
        desc: "Government-authorized e-stamp papers included.",
      },
      {
        title: "E-Signature",
        desc: "Quick and legally valid digital signature options.",
      },
      {
        title: "Secure Record-Keeping",
        desc: "Safeguard your documents for future use.",
      },
      {
        title: "Fast Delivery",
        desc: "Digital delivery within minutes and doorstep delivery of physical copies.",
      },
      {
        title: "Expert Legal Support",
        desc: "Ensure accuracy and compliance with legal standards.",
      },
    ],
    faqs: [
      {
        question: "What documents are required for this affidavit?",
        answer:
          "You typically need valid ID proofs of both parties, marriage invitation card (if available), and other documents as per the registrar’s requirements.",
      },
      {
        question:
          "Can this affidavit be used for all types of marriage registrations?",
        answer:
          "Yes, it is applicable for marriages under various acts, including the Hindu Marriage Act and the Special Marriage Act.",
      },
      {
        question: "Is e-signature legally valid?",
        answer:
          "Yes, e-signatures are recognized under the IT Act, 2000, and are legally binding.",
      },
      {
        question: "How long does it take to create and deliver the affidavit?",
        answer:
          "You can receive a digital copy within minutes, and physical delivery is completed within a few working days.",
      },
      {
        question: "Is legal consultation included in the service?",
        answer:
          "Yes, our service includes expert legal consultation to ensure your affidavit meets all legal requirements.",
      },
      {
        question: "Can I track my physical delivery?",
        answer:
          "Yes, we offer tracking options for your physical document delivery.",
      },
      {
        question: "What if I need revisions?",
        answer:
          "You can request revisions before finalizing your affidavit. Our team is here to assist.",
      },
      {
        question: "Is my personal information secure?",
        answer:
          "Absolutely. We use advanced encryption to protect your data and ensure privacy.",
      },
      {
        question: "Can I customize the affidavit for specific requirements?",
        answer:
          "Yes, our platform provides extensive customization options to meet your specific needs.",
      },
    ],
  },

  AffidavitForMarriageRegistrationBySingleApplicant: {
    id: "AffidavitForMarriageRegistrationBySingleApplicant",
    hero: {
      title: "Welcome to MyLegalInstant.com",
      subtitle: "MyLegalInstant.com",
      description:
        "We make it easy to create an Affidavit for Marriage Registration by Single Applicant, a crucial document required when only one party is available to apply for marriage registration.",
      buttonText: "Create Now",
      buttonLink: "/create-affidavit-marriage-registration",
      trustIndicators: ["Legally Verified", "Instant Delivery", "24/7 Support"],
    },
    whatIs: {
      title:
        "What is an Affidavit for Marriage Registration by Single Applicant?",
      subtitle: "Marriage Registration by Single Applicant",
      description:
        "An Affidavit for Marriage Registration by Single Applicant is a legal declaration made by one party to a marriage, certifying the authenticity of the marriage and providing all necessary details like the spouse's name, date of marriage, and location. It's often required when only one spouse can apply for registration.",
      image: "https://plus.unsplash.com/premium_photo-1661371722601-649566b65add?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fGxhd3llcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    features: [
      {
        icon: "Certificate",
        title: "Legal Validation",
        desc: "Confirms the authenticity and mutual consent of the marriage.",
      },
      {
        icon: "Document",
        title: "Official Records",
        desc: "Ensures the marriage is registered under the law.",
      },
      {
        icon: "Handshake",
        title: "Proof of Marriage",
        desc: "Acts as a legal document for marital status updates in official records.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Marriage Registration",
        desc: "Required for registering marriages under the Hindu Marriage Act, Special Marriage Act, or other applicable laws.",
      },
      {
        title: "Government Documentation",
        desc: "Necessary for availing spousal benefits, such as health insurance or joint property registration.",
      },
      {
        title: "Immigration Purposes",
        desc: "Used for visa applications or other legal processes involving marital status.",
      },
      {
        title: "Social Security Benefits",
        desc: "To access government schemes or benefits available to married couples.",
      },
    ],
    // legalFramework: [
    //   {
    //     title: "Motor Vehicle Act",
    //     desc: "Compliance with vehicle leasing regulations.",
    //   },
    //   {
    //     title: "Insurance Requirements",
    //     desc: "Mandatory insurance coverage terms.",
    //   },
    // ],
    steps: [
      {
        title: "Click on 'Create Now'",
        desc: "Start by clicking the 'Create Now' button on our website.",
      },
      {
        title: "Select Affidavit Type",
        desc: "Choose the 'Marriage Registration Affidavit' option.",
      },
      {
        title: "Provide Details",
        desc: "Enter marriage details, your personal information, and the spouse's name.",
      },
      {
        title: "Customization Options",
        desc: "Tailor your affidavit with our extensive customization features.",
      },
      {
        title: "Review & Finalize",
        desc: "Carefully review your affidavit and finalize it.",
      },
      {
        title: "Choose Stamp Paper",
        desc: "Select the appropriate stamp paper; we’ll attach an e-stamp for you.",
      },
      {
        title: "E-Sign",
        desc: "Opt for an e-signature for convenience.",
      },
      {
        title: "Legal Consultation",
        desc: "Benefit from expert legal guidance throughout the process.",
      },
      {
        title: "Delivery",
        desc: "Receive your affidavit digitally within minutes and get physical copies delivered to your doorstep within a few working days.",
      },
    ],
    whyChooseUs: [
      {
        title: "Extensive Customization Options",
        desc: "Personalize your affidavit to meet specific requirements.",
      },
      {
        title: "E-Stamping",
        desc: "Government-authorized e-stamp papers included.",
      },
      {
        title: "E-Signature",
        desc: "Quick and legally valid digital signature options.",
      },
      {
        title: "Secure Record-Keeping",
        desc: "Safeguard your documents for future use.",
      },
      {
        title: "Fast Delivery",
        desc: "Digital delivery within minutes and doorstep delivery of physical copies.",
      },
      {
        title: "Expert Legal Support",
        desc: "Ensure accuracy and compliance with legal standards.",
      },
    ],
    faqs: [
      {
        question: "What documents are required for this affidavit?",
        answer:
          "You typically need valid ID proofs of both parties, marriage invitation card (if available), and other documents as per the registrar’s requirements.",
      },
      {
        question: "Can this affidavit be used for all types of marriage registrations?",
        answer:
          "Yes, it is applicable for marriages under various acts, including the Hindu Marriage Act and the Special Marriage Act.",
      },
      {
        question: "Is e-signature legally valid?",
        answer:
          "Yes, e-signatures are recognized under the IT Act, 2000, and are legally binding.",
      },
      {
        question: "How long does it take to create and deliver the affidavit?",
        answer:
          "You can receive a digital copy within minutes, and physical delivery is completed within a few working days.",
      },
      {
        question: "Is legal consultation included in the service?",
        answer:
          "Yes, our service includes expert legal consultation to ensure your affidavit meets all legal requirements.",
      },
      {
        question: "Can I track my physical delivery?",
        answer:
          "Yes, we offer tracking options for your physical document delivery.",
      },
      {
        question: "What if I need revisions?",
        answer:
          "You can request revisions before finalizing your affidavit. Our team is here to assist.",
      },
      {
        question: "Is my personal information secure?",
        answer:
          "Absolutely. We use advanced encryption to protect your data and ensure privacy.",
      },
      {
        question: "Can I customize the affidavit for specific requirements?",
        answer:
          "Yes, our platform provides extensive customization options to meet your specific needs.",
      },
    ],
  },

  AffidavitForProofOfDateOfBirth: {
    id: "AffidavitForProofOfDateOfBirth",
    hero: {
      title: "Welcome to",
      subtitle: " MyLegalInstant.com",
      description:
        "We make it easy to create an Affidavit for Proof of Date of Birth, a crucial document for validating your birth date when standard proofs are unavailable or inadequate.",
      buttonText: "Create Now",
      buttonLink: "/create-affidavit-proof-of-dob",
      trustIndicators: ["Legally Verified", "Instant Delivery", "24/7 Support"],
    },
    whatIs: {
      title: "What is an Affidavit for Proof of Date of Birth?",
      subtitle: "An Affidavit for Proof of Date of Birth",
      description:
        "An Affidavit for Proof of Date of Birth is a sworn legal statement affirming an individual's date of birth. This document is often required when conventional birth certificates or other official records are missing, lost, or contain errors.",
      image: "https://plus.unsplash.com/premium_photo-1664301588974-e45a48b06a7a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fGxhd3llcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    features: [
      {
        icon: "Certificate",
        title: "Identity Verification",
        desc: "Establishes your date of birth for personal and official purposes.",
      },
      {
        icon: "Document",
        title: "Legal Compliance",
        desc: "Acts as a valid substitute when formal documents are unavailable.",
      },
      {
        icon: "Handshake",
        title: "Official Documentation",
        desc: "Facilitates applications for IDs, passports, and other government services.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Government Records",
        desc: "Required for passport issuance, Aadhaar card updates, or voter ID registration.",
      },
      {
        title: "School or College Admissions",
        desc: "To confirm date of birth for educational records.",
      },
      {
        title: "Employment",
        desc: "For age verification during recruitment processes.",
      },
      {
        title: "Financial Transactions",
        desc: "Needed for opening accounts or processing claims where age verification is required.",
      },
      {
        title: "Immigration and Visa Applications",
        desc: "To meet the documentation requirements of embassies or consulates.",
      },
    ],
    legalFramework: [
      {
        title: "Motor Vehicle Act",
        desc: "Compliance with vehicle leasing regulations.",
      },
      {
        title: "Insurance Requirements",
        desc: "Mandatory insurance coverage terms.",
      },
    ],
    steps: [
      {
        title: "Click on 'Create Now'",
        desc: "Start by clicking the 'Create Now' button on our website.",
      },
      {
        title: "Select Affidavit Type",
        desc: "Choose the 'Affidavit for Proof of Date of Birth' option.",
      },
      {
        title: "Provide Details",
        desc: "Enter your name, date of birth, and any other required details.",
      },
      {
        title: "Customization Options",
        desc: "Tailor your affidavit with our extensive customization features.",
      },
      {
        title: "Review & Finalize",
        desc: "Carefully review your affidavit and finalize it.",
      },
      {
        title: "Choose Stamp Paper",
        desc: "Select the appropriate stamp paper; we’ll attach an e-stamp for you.",
      },
      {
        title: "E-Sign",
        desc: "Opt for an e-signature for convenience.",
      },
      {
        title: "Legal Consultation",
        desc: "Benefit from expert legal guidance throughout the process.",
      },
      {
        title: "Delivery",
        desc: "Receive your affidavit digitally within minutes and get physical copies delivered to your doorstep within a few working days.",
      },
    ],
    whyChooseUs: [
      {
        title: "Extensive Customization Options",
        desc: "Personalize your affidavit to meet specific requirements.",
      },
      {
        title: "E-Stamping",
        desc: "Government-authorized e-stamp papers included.",
      },
      {
        title: "E-Signature",
        desc: "Quick and legally valid digital signature options.",
      },
      {
        title: "Secure Record-Keeping",
        desc: "Safeguard your documents for future use.",
      },
      {
        title: "Fast Delivery",
        desc: "Digital delivery within minutes and doorstep delivery of physical copies.",
      },
      {
        title: "Expert Legal Support",
        desc: "Ensure accuracy and compliance with legal standards.",
      },
    ],
    faqs: [
      {
        question: "What documents are required for this affidavit?",
        answer:
          "You typically need a valid ID proof and any supporting documents for your date of birth declaration.",
      },
      {
        question: "Is this affidavit valid for all official purposes?",
        answer:
          "Yes, it is recognized by government authorities, educational institutions, and other organizations.",
      },
      {
        question: "Is e-signature legally valid?",
        answer:
          "Yes, e-signatures are recognized under the IT Act, 2000, and are legally binding.",
      },
      {
        question: "How long does it take to create and deliver the affidavit?",
        answer:
          "You can receive a digital copy within minutes, and physical delivery is completed within a few working days.",
      },
      {
        question: "Can I use this affidavit for multiple purposes?",
        answer:
          "Yes, this affidavit can be used for various purposes, including ID applications, admissions, and employment.",
      },
      {
        question: "Is legal consultation included in the service?",
        answer:
          "Yes, our service includes expert legal consultation to ensure your affidavit meets all legal requirements.",
      },
      {
        question: "Can I track my physical delivery?",
        answer:
          "Yes, we offer tracking options for your physical document delivery.",
      },
      {
        question: "What if I need revisions?",
        answer:
          "You can request revisions before finalizing your affidavit. Our team is here to assist.",
      },
      {
        question: "Is my personal information secure?",
        answer:
          "Absolutely. We use advanced encryption to protect your data and ensure privacy.",
      },
      {
        question: "Can I customize the affidavit for specific requirements?",
        answer:
          "Yes, our platform provides extensive customization options to meet your specific needs.",
      },
    ],
  },
  AffidavitForProofOfIncome: {
    id: "AffidavitForProofOfIncome",
    hero: {
      title: "Welcome to",
      subtitle: " MyLegalInstant.com",
      description:
        "We make it easy to create an Affidavit for Proof of Income, a crucial document for validating your income details when traditional proofs are unavailable or insufficient.",
      buttonText: "Create Now",
      buttonLink: "/create-affidavit-proof-of-income",
      trustIndicators: ["Legally Verified", "Instant Delivery", "24/7 Support"],
    },
    whatIs: {
      title: "What is an Affidavit for Proof of Income?",
      subtitle: "An Affidavit for Proof of Income",
      description:
        "An Affidavit for Proof of Income is a legal declaration made by an individual affirming their income details. This document is often required when traditional income proofs like salary slips or income certificates are unavailable or insufficient.",
      image: "https://plus.unsplash.com/premium_photo-1661508962936-29c949feb569?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxsYXd5ZXJ8ZW58MHx8MHx8fDA%3D",
    },
    features: [
      {
        icon: "Certificate",
        title: "Income Verification",
        desc: "Certifies income details for personal or official use.",
      },
      {
        icon: "Document",
        title: "Legal Compliance",
        desc: "Serves as a valid document in the absence of formal income records.",
      },
      {
        icon: "Handshake",
        title: "Financial Transactions",
        desc: "Facilitates processes like loan applications or subsidy claims.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Loan Applications",
        desc: "Required by banks and financial institutions to process loans.",
      },
      {
        title: "Educational Institutions",
        desc: "To avail scholarships or fee concessions based on income.",
      },
      {
        title: "Government Benefits",
        desc: "Necessary for accessing subsidies or welfare schemes.",
      },
      {
        title: "Rental Agreements",
        desc: "To verify income for tenancy purposes.",
      },
      {
        title: "Immigration Purposes",
        desc: "Used in visa applications to demonstrate financial stability.",
      },
    ],
    steps: [
      {
        title: "Click on 'Create Now'",
        desc: "Start by clicking the 'Create Now' button.",
      },
      {
        title: "Select Affidavit Type",
        desc: "Choose the 'Affidavit for Proof of Income' option.",
      },
      {
        title: "Provide Details",
        desc: "Enter your income details, source of income, and other relevant information.",
      },
      {
        title: "Customization Options",
        desc: "Tailor your affidavit with our extensive customization features.",
      },
      {
        title: "Review & Finalize",
        desc: "Carefully review your affidavit and finalize it.",
      },
      {
        title: "Choose Stamp Paper",
        desc: "Select the appropriate stamp paper; we’ll attach an e-stamp for you.",
      },
      {
        title: "E-Sign",
        desc: "Opt for an e-signature for convenience.",
      },
      {
        title: "Legal Consultation",
        desc: "Benefit from expert legal guidance throughout the process.",
      },
      {
        title: "Delivery",
        desc: "Receive your affidavit digitally within minutes and get physical copies delivered to your doorstep within a few working days.",
      },
    ],
    whyChooseUs: [
      {
        title: "Extensive Customization Options",
        desc: "Personalize your affidavit to meet specific requirements.",
      },
      {
        title: "E-Stamping",
        desc: "Government-authorized e-stamp papers included.",
      },
      {
        title: "E-Signature",
        desc: "Quick and legally valid digital signature options.",
      },
      {
        title: "Secure Record-Keeping",
        desc: "Safeguard your documents for future use.",
      },
      {
        title: "Fast Delivery",
        desc: "Digital delivery within minutes and doorstep delivery of physical copies.",
      },
      {
        title: "Expert Legal Support",
        desc: "Ensure accuracy and compliance with legal standards.",
      },
    ],
    faqs: [
      {
        question: "What documents are required for this affidavit?",
        answer:
          "You typically need valid ID proof and any supporting documents for your income declaration.",
      },
      {
        question: "Is this affidavit valid for all official purposes?",
        answer:
          "Yes, it is recognized by banks, educational institutions, and government authorities.",
      },
      {
        question: "Is e-signature legally valid?",
        answer:
          "Yes, e-signatures are recognized under the IT Act, 2000, and are legally binding.",
      },
      {
        question: "How long does it take to create and deliver the affidavit?",
        answer:
          "You can receive a digital copy within minutes, and physical delivery is completed within a few working days.",
      },
      {
        question: "Can I use this affidavit for multiple purposes?",
        answer:
          "Yes, this affidavit can be used for various purposes, including loans, scholarships, and rental agreements.",
      },
      {
        question: "Is legal consultation included in the service?",
        answer:
          "Yes, our service includes expert legal consultation to ensure your affidavit meets all legal requirements.",
      },
      {
        question: "Can I track my physical delivery?",
        answer:
          "Yes, we offer tracking options for your physical document delivery.",
      },
      {
        question: "What if I need revisions?",
        answer:
          "You can request revisions before finalizing your affidavit. Our team is here to assist.",
      },
      {
        question: "Is my personal information secure?",
        answer:
          "Absolutely. We use advanced encryption to protect your data and ensure privacy.",
      },
      {
        question: "Can I customize the affidavit for specific requirements?",
        answer:
          "Yes, our platform provides extensive customization options to meet your specific needs.",
      },
    ],
  },
  AffidavitForPFCumIndemnityBond: {
    id: "AffidavitForPFCumIndemnityBond",
    hero: {
      title: "Welcome to",
      subtitle: " MyLegalInstant.com",
      description:
        "Our platform simplifies the creation of a PF cum Indemnity Bond, an essential document for withdrawing Provident Fund (PF) amounts in specific circumstances.",
      buttonText: "Create Now",
      buttonLink: "/create-affidavit-pf-cum-indemnity-bond",
      trustIndicators: ["Legally Verified", "Instant Delivery", "24/7 Support"],
    },
    whatIs: {
      title: "What is an Affidavit for PF cum Indemnity Bond?",
      description:
        "A PF cum Indemnity Bond is a legal document affirming your claim to a Provident Fund amount. It serves as a guarantee to indemnify the PF authority or employer against any future disputes or claims related to the withdrawal of the PF amount.",
      image: "https://plus.unsplash.com/premium_photo-1661342406509-064b58299ca5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI4fHxsYXd5ZXJ8ZW58MHx8MHx8fDA%3D",
    },
    features: [
      {
        icon: "Certificate",
        title: "Claim Settlement",
        desc: "Facilitates the seamless withdrawal of PF amounts in cases like missing nominee details or discrepancies.",
      },
      {
        icon: "Document",
        title: "Legal Assurance",
        desc: "Protects the employer or PF authority from liabilities arising out of multiple claims.",
      },
      {
        icon: "Handshake",
        title: "Compliance",
        desc: "Ensures adherence to PF rules and regulations during the claim process.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Provident Fund Withdrawal",
        desc: "Required when nominee details are missing or unavailable.",
      },
      {
        title: "Claim Settlements",
        desc: "For legal heirs or beneficiaries to claim the PF amount.",
      },
      {
        title: "Disputed Cases",
        desc: "Resolves disputes in PF claims by providing indemnity.",
      },
      {
        title: "Death Cases",
        desc: "Necessary for legal heirs to claim the PF amount of a deceased account holder.",
      },
    ],
    legalFramework: [
      {
        title: "Motor Vehicle Act",
        desc: "Compliance with vehicle leasing regulations.",
      },
      {
        title: "Insurance Requirements",
        desc: "Mandatory insurance coverage terms.",
      },
    ],
    steps: [
      {
        title: "Click on 'Create Now'",
        desc: "Start by clicking the 'Create Now' button.",
      },
      {
        title: "Select Affidavit Type",
        desc: "Choose the 'PF cum Indemnity Bond' option.",
      },
      {
        title: "Provide Details",
        desc: "Enter your personal details, PF account information, and other required specifics.",
      },
      {
        title: "Customization Options",
        desc: "Tailor your affidavit with our extensive customization features.",
      },
      {
        title: "Review & Finalize",
        desc: "Carefully review your affidavit and finalize it.",
      },
      {
        title: "Choose Stamp Paper",
        desc: "Select the appropriate stamp paper; we’ll attach an e-stamp for you.",
      },
      {
        title: "E-Sign",
        desc: "Opt for an e-signature for convenience.",
      },
      {
        title: "Legal Consultation",
        desc: "Benefit from expert legal guidance throughout the process.",
      },
      {
        title: "Delivery",
        desc: "Receive your affidavit digitally within minutes and get physical copies delivered to your doorstep within a few working days.",
      },
    ],
    whyChooseUs: [
      {
        title: "Extensive Customization Options",
        desc: "Personalize your affidavit to meet specific requirements.",
      },
      {
        title: "E-Stamping",
        desc: "Government-authorized e-stamp papers included.",
      },
      {
        title: "E-Signature",
        desc: "Quick and legally valid digital signature options.",
      },
      {
        title: "Secure Record-Keeping",
        desc: "Safeguard your documents for future use.",
      },
      {
        title: "Fast Delivery",
        desc: "Digital delivery within minutes and doorstep delivery of physical copies.",
      },
      {
        title: "Expert Legal Support",
        desc: "Ensure accuracy and compliance with legal standards.",
      },
    ],
    faqs: [
      {
        question: "What documents are required for this affidavit?",
        answer:
          "You typically need ID proof, PF account details, and supporting documents for the claim.",
      },
      {
        question: "Is this affidavit valid for all official purposes?",
        answer: "Yes, it is recognized by PF authorities and employers.",
      },
      {
        question: "Is e-signature legally valid?",
        answer:
          "Yes, e-signatures are recognized under the IT Act, 2000, and are legally binding.",
      },
      {
        question: "How long does it take to create and deliver the affidavit?",
        answer:
          "You can receive a digital copy within minutes, and physical delivery is completed within a few working days.",
      },
      {
        question: "Can I use this affidavit for multiple claims?",
        answer:
          "Yes, but you may need to customize it for each specific claim.",
      },
      {
        question: "Is legal consultation included in the service?",
        answer:
          "Yes, our service includes expert legal consultation to ensure your affidavit meets all legal requirements.",
      },
      {
        question: "Can I track my physical delivery?",
        answer:
          "Yes, we offer tracking options for your physical document delivery.",
      },
      {
        question: "What if I need revisions?",
        answer:
          "You can request revisions before finalizing your affidavit. Our team is here to assist.",
      },
      {
        question: "Is my personal information secure?",
        answer:
          "Absolutely. We use advanced encryption to protect your data and ensure privacy.",
      },
      {
        question: "Can I customize the affidavit for specific requirements?",
        answer:
          "Yes, our platform provides extensive customization options to meet your specific needs.",
      },
    ],
  },
  AffidavitForOneAndTheSamePerson: {
    id: "AffidavitForOneAndTheSamePerson",
    hero: {
      title: "Welcome to ",
      subtitle: "MyLegalInstant.com",
      description:
        "We make it easy to create an Affidavit for One and the Same Person, a vital document used to clarify identity discrepancies across various documents.",
      buttonText: "Create Now",
      buttonLink: "/create-affidavit-one-and-same-person",
      trustIndicators: ["Legally Verified", "Instant Delivery", "24/7 Support"],
    },
    whatIs: {
      title: "What is an Affidavit for One and the Same Person?",
      subtitle: "Affidavit for One and the Same Person",
      description:
        "An Affidavit for One and the Same Person is a legal declaration affirming that different names or variations of a name appearing on different documents belong to the same individual. This affidavit is essential for rectifying identity issues in official records.",
      image: "https://images.unsplash.com/photo-1604783125462-37d81c7385e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU0fHxsYXd5ZXJ8ZW58MHx8MHx8fDA%3D",
    },
    features: [
      {
        icon: "Certificate",
        title: "Identity Verification",
        desc: "Confirms that various names or spellings refer to the same person.",
      },
      {
        icon: "Document",
        title: "Legal Compliance",
        desc: "Resolves discrepancies in identity-related documents.",
      },
      {
        icon: "Handshake",
        title: "Avoiding Rejection",
        desc: "Prevents delays or denials in processes like job applications, loans, or legal proceedings.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Banking Purposes",
        desc: "To update records or resolve name-related discrepancies in accounts.",
      },
      {
        title: "Government Documentation",
        desc: "Required for passport applications, Aadhaar card updates, or voter ID corrections.",
      },
      {
        title: "Educational Institutions",
        desc: "For certificate verification or academic record corrections.",
      },
      {
        title: "Employment",
        desc: "To confirm identity during background checks.",
      },
      {
        title: "Property Transactions",
        desc: "To validate ownership or identity in property dealings.",
      },
    ],
    // legalFramework: [
    //   {
    //     title: "Motor Vehicle Act",
    //     desc: "Compliance with vehicle leasing regulations.",
    //   },
    //   {
    //     title: "Insurance Requirements",
    //     desc: "Mandatory insurance coverage terms.",
    //   },
    // ],
    steps: [
      {
        title: "Click on 'Create Now'",
        desc: "Start by clicking the 'Create Now' button.",
      },
      {
        title: "Select Affidavit Type",
        desc: "Choose the 'Affidavit for One and the Same Person' option.",
      },
      {
        title: "Provide Details",
        desc: "Enter the different names or variations and confirm they refer to the same individual.",
      },
      {
        title: "Customization Options",
        desc: "Tailor your affidavit with our extensive customization features.",
      },
      {
        title: "Review & Finalize",
        desc: "Carefully review your affidavit and finalize it.",
      },
      {
        title: "Choose Stamp Paper",
        desc: "Select the appropriate stamp paper; we’ll attach an e-stamp for you.",
      },
      {
        title: "E-Sign",
        desc: "Opt for an e-signature for convenience.",
      },
      {
        title: "Legal Consultation",
        desc: "Benefit from expert legal guidance throughout the process.",
      },
      {
        title: "Delivery",
        desc: "Receive your affidavit digitally within minutes and get physical copies delivered to your doorstep within a few working days.",
      },
    ],
    whyChooseUs: [
      {
        title: "Extensive Customization Options",
        desc: "Personalize your affidavit to meet specific requirements.",
      },
      {
        title: "E-Stamping",
        desc: "Government-authorized e-stamp papers included.",
      },
      {
        title: "E-Signature",
        desc: "Quick and legally valid digital signature options.",
      },
      {
        title: "Secure Record-Keeping",
        desc: "Safeguard your documents for future use.",
      },
      {
        title: "Fast Delivery",
        desc: "Digital delivery within minutes and doorstep delivery of physical copies.",
      },
      {
        title: "Expert Legal Support",
        desc: "Ensure accuracy and compliance with legal standards.",
      },
    ],
    faqs: [
      {
        question: "What documents are required for this affidavit?",
        answer:
          "You typically need valid ID proofs showing the different names and supporting documents for clarification.",
      },
      {
        question: "Is this affidavit valid for all official purposes?",
        answer:
          "Yes, it is recognized by government authorities, banks, and other institutions for resolving name discrepancies.",
      },
      {
        question: "Is e-signature legally valid?",
        answer:
          "Yes, e-signatures are recognized under the IT Act, 2000, and are legally binding.",
      },
      {
        question: "How long does it take to create and deliver the affidavit?",
        answer:
          "You can receive a digital copy within minutes, and physical delivery is completed within a few working days.",
      },
      {
        question: "Can I use this affidavit for multiple discrepancies?",
        answer:
          "Yes, you can list multiple name variations in a single affidavit if required.",
      },
      {
        question: "Is legal consultation included in the service?",
        answer:
          "Yes, our service includes expert legal consultation to ensure your affidavit meets all legal requirements.",
      },
      {
        question: "Can I track my physical delivery?",
        answer:
          "Yes, we offer tracking options for your physical document delivery.",
      },
      {
        question: "What if I need revisions?",
        answer:
          "You can request revisions before finalizing your affidavit. Our team is here to assist.",
      },
      {
        question: "Is my personal information secure?",
        answer:
          "Absolutely. We use advanced encryption to protect your data and ensure privacy.",
      },
      {
        question: "Can I customize the affidavit for specific requirements?",
        answer:
          "Yes, our platform provides extensive customization options to meet your specific needs.",
      },
    ],
  },
};

export const businessAgre = {
  Partnership: {
    id: "Partnership",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Looking to rent out your flat or move into a new one? MyLegalInstant.com provides expertly crafted Flat Rent Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is a Partnership Affidavit lease agreement?",
      description:
        "A Address Affidavit  is a legally binding document between a landlord (flat owner) and a tenant that outlines the terms and conditions for renting a residential flat. It protects the interests of both parties by defining their roles, rights, and responsibilities while ensuring compliance with applicable laws.",
      image: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Financial Terms",
        description: "Specifies rent, security deposit, and payment terms.",
      },
      {
        icon: "Calendar",
        title: "Duration & Terms",
        description: "Details the lease duration and renewal conditions.",
      },
      {
        icon: "FileText",
        title: "Property Details",
        description: "Comprehensive details of the property and its condition.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Legal Protection",
        desc: "Safeguards both parties' rights and obligations under the law.",
      },
      {
        title: "Clear Expectations",
        desc: "Sets clear guidelines for property usage and maintenance.",
      },
      {
        title: "Dispute Prevention",
        desc: "Minimizes potential conflicts by documenting all terms clearly.",
      },
    ],
    legalFramework: [
      {
        title: "The Indian Contract Act, 1872",
        desc: "Establishes the legality of contracts and obligations between parties.",
      },
      {
        title: "Rent Control Act",
        desc: "Governs the relationship between landlords and tenants.",
      },
    ],
    steps: [
      {
        title: "Fill Details",
        desc: "Enter all required information about the property and parties involved.",
      },
      {
        title: "Review Terms",
        desc: "Carefully review all terms and conditions of the agreement.",
      },
      {
        title: "Generate & Download",
        desc: "Get your legally-verified agreement instantly.",
      },
    ],
    whyChooseUs: [
      {
        title: "Expert Legal Team",
        desc: "Agreements crafted by experienced legal professionals.",
      },
      {
        title: "Quick & Easy",
        desc: "Generate your agreement in minutes, not days.",
      },
    ],
    faqs: [
      {
        question: "Is a residential lease agreement mandatory?",
        answer:
          "While not legally mandatory, it's highly recommended to protect both parties' interests and prevent future disputes.",
      },
      {
        question: "What should be included in the agreement?",
        answer:
          "Key elements include rent amount, security deposit, duration, maintenance responsibilities, and terms of use.",
      },
    ],
  },
  OfficeSharing: {
    id: "OfficeSharing",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Need a Affidavit ForChange? MyLegalInstant.com provides expertly crafted Commercial Lease Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "Affidavit For Change Of Name?",
      description:
        "A Affidavit For Change Of Name is a legally binding contract between a property owner and a business tenant that outlines the terms for renting commercial space. It includes specific provisions for business use while protecting both parties' interests.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0sX2wBCIDQnBb_pQJvdTnDyJqhAKu2UulFrc0OLD97MNTsC9EZcYtqCKI3E74N_sgyNY&usqp=CAU",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Commercial Terms",
        description: "Detailed Affidavit For Change Of Name  and security deposit structure.",
      },
      {
        icon: "Calendar",
        title: "Business Usage",
        description:
          "Specific terms for Affidavit For Change Of Name usage and modifications.",
      },
      {
        icon: "FileText",
        title: "Business Provisions",
        description: "Special clauses for business operations and signage.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Business Protection",
        desc: "Safeguards your business interests and investment.",
      },
      {
        title: "Commercial Compliance",
        desc: "Ensures compliance with commercial property regulations.",
      },
      {
        title: "Business Operations",
        desc: "Clear terms for business operations and modifications.",
      },
    ],
    legalFramework: [
      {
        title: "Commercial Tenancy Laws",
        desc: "Covers specific regulations for commercial property leasing.",
      },
      {
        title: "Business Property Rights",
        desc: "Protects rights related to commercial property usage.",
      },
    ],
    steps: [
      {
        title: "Business Details",
        desc: "Enter business and property information.",
      },
      {
        title: "Commercial Terms",
        desc: "Specify commercial terms and conditions.",
      },
      {
        title: "Generate Agreement",
        desc: "Get your commercial lease agreement instantly.",
      },
    ],
    whyChooseUs: [
      {
        title: "Commercial Expertise",
        desc: "Specialized in commercial property agreements.",
      },
      {
        title: "Business-Focused",
        desc: "Terms tailored for business operations.",
      },
    ],
    faqs: [
      {
        question: "What makes Affidavit For Change Of Name?",
        answer:
          "Affidavit For Change Of Name include specific provisions for business operations, modifications, and commercial use of the property.",
      },
      {
        question: "Are commercial terms negotiable?",
        answer:
          "Yes, commercial lease terms are typically negotiable to accommodate specific business needs.",
      },
    ],
  },
  NOCLandlord: {
    id: "NOCLandlord",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Renting equipment? MyLegalInstant.com provides expertly crafted Equipment Rental Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is an Equipment rental agreement?",
      description:
        "An Equipment Rental Agreement is a contract that outlines the terms for renting machinery, tools, or other equipment. It specifies usage conditions, maintenance responsibilities, and return requirements.",
      image: "https://plus.unsplash.com/premium_photo-1698084059393-103cb8b86253?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYwfHxsYXd5ZXJ8ZW58MHx8MHx8fDA%3D",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Rental Rates",
        description: "Clear pricing structure for equipment rental.",
      },
      {
        icon: "Calendar",
        title: "Usage Period",
        description: "Defined rental duration and extension terms.",
      },
      {
        icon: "Shield",
        title: "Equipment Protection",
        description: "Maintenance and damage liability terms.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Equipment Safety",
        desc: "Ensures proper handling and usage of equipment.",
      },
      {
        title: "Damage Protection",
        desc: "Clear terms for damage liability and insurance.",
      },
      {
        title: "Usage Guidelines",
        desc: "Specific instructions for equipment operation.",
      },
    ],
    legalFramework: [
      {
        title: "Equipment Safety Laws",
        desc: "Compliance with equipment safety regulations.",
      },
      {
        title: "Rental Regulations",
        desc: "Legal requirements for equipment rental.",
      },
    ],
    steps: [
      {
        title: "Equipment Details",
        desc: "Specify equipment information and condition.",
      },
      {
        title: "Rental Terms",
        desc: "Set rental duration and conditions.",
      },
      {
        title: "Complete Agreement",
        desc: "Generate your equipment rental agreement.",
      },
    ],
    whyChooseUs: [
      {
        title: "Equipment Expertise",
        desc: "Specialized in equipment rental agreements.",
      },
      {
        title: "Complete Protection",
        desc: "Comprehensive terms for equipment safety.",
      },
    ],
    faqs: [
      {
        question: "Is equipment insurance required?",
        answer:
          "Most equipment rentals require insurance coverage for damage protection.",
      },
      {
        question: "What about maintenance?",
        answer:
          "The agreement specifies maintenance responsibilities and procedures.",
      },
    ],
  },
  Memorandum: {
    id: "Memorandum",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Need a vehicle lease? MyLegalInstant.com provides expertly crafted Vehicle Lease Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is a Vehicle lease agreement?",
      description:
        "A Vehicle Lease Agreement is a contract that details the terms for leasing a vehicle, including usage rights, maintenance responsibilities, and return conditions.",
      image: "https://plus.unsplash.com/premium_photo-1661398676566-cdbcc67cba04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcyfHxsYXd5ZXJ8ZW58MHx8MHx8fDA%3D",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Lease Payments",
        description: "Monthly payment terms and security deposit.",
      },
      {
        icon: "Clock",
        title: "Lease Duration",
        description: "Specified lease term and mileage limits.",
      },
      {
        icon: "Shield",
        title: "Vehicle Protection",
        description: "Insurance and maintenance requirements.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Vehicle Protection",
        desc: "Safeguards against improper use and damage.",
      },
      {
        title: "Clear Terms",
        desc: "Defined usage limits and maintenance requirements.",
      },
      {
        title: "Legal Compliance",
        desc: "Ensures adherence to vehicle leasing laws.",
      },
    ],
    legalFramework: [
      {
        title: "Motor Vehicle Act",
        desc: "Compliance with vehicle leasing regulations.",
      },
      {
        title: "Insurance Requirements",
        desc: "Mandatory insurance coverage terms.",
      },
    ],
    steps: [
      {
        title: "Vehicle Information",
        desc: "Enter vehicle details and condition.",
      },
      {
        title: "Lease Terms",
        desc: "Specify lease duration and conditions.",
      },
      {
        title: "Complete Lease",
        desc: "Generate your vehicle lease agreement.",
      },
    ],
    whyChooseUs: [
      {
        title: "Vehicle Expertise",
        desc: "Specialized in vehicle lease agreements.",
      },
      {
        title: "Comprehensive Coverage",
        desc: "Complete protection for your vehicle lease.",
      },
    ],
    faqs: [
      {
        question: "What about mileage limits?",
        answer:
          "The agreement specifies annual mileage limits and excess charges.",
      },
      {
        question: "Who handles maintenance?",
        answer:
          "Maintenance responsibilities are clearly defined in the agreement.",
      },
    ],
  },

  Recognitionletter: {
    id: "Recognitionletter",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Looking to rent out your flat or move into a new one? MyLegalInstant.com provides expertly crafted Flat Rent Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is a Partnership Affidavit lease agreement?",
      description:
        "A Address Affidavit  is a legally binding document between a landlord (flat owner) and a tenant that outlines the terms and conditions for renting a residential flat. It protects the interests of both parties by defining their roles, rights, and responsibilities while ensuring compliance with applicable laws.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRySDMQnhfFomvno0J8TGQkUmCUlpGgsfkxFA&s",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Financial Terms",
        description: "Specifies rent, security deposit, and payment terms.",
      },
      {
        icon: "Calendar",
        title: "Duration & Terms",
        description: "Details the lease duration and renewal conditions.",
      },
      {
        icon: "FileText",
        title: "Property Details",
        description: "Comprehensive details of the property and its condition.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Legal Protection",
        desc: "Safeguards both parties' rights and obligations under the law.",
      },
      {
        title: "Clear Expectations",
        desc: "Sets clear guidelines for property usage and maintenance.",
      },
      {
        title: "Dispute Prevention",
        desc: "Minimizes potential conflicts by documenting all terms clearly.",
      },
    ],
    legalFramework: [
      {
        title: "The Indian Contract Act, 1872",
        desc: "Establishes the legality of contracts and obligations between parties.",
      },
      {
        title: "Rent Control Act",
        desc: "Governs the relationship between landlords and tenants.",
      },
    ],
    steps: [
      {
        title: "Fill Details",
        desc: "Enter all required information about the property and parties involved.",
      },
      {
        title: "Review Terms",
        desc: "Carefully review all terms and conditions of the agreement.",
      },
      {
        title: "Generate & Download",
        desc: "Get your legally-verified agreement instantly.",
      },
    ],
    whyChooseUs: [
      {
        title: "Expert Legal Team",
        desc: "Agreements crafted by experienced legal professionals.",
      },
      {
        title: "Quick & Easy",
        desc: "Generate your agreement in minutes, not days.",
      },
    ],
    faqs: [
      {
        question: "Is a residential lease agreement mandatory?",
        answer:
          "While not legally mandatory, it's highly recommended to protect both parties' interests and prevent future disputes.",
      },
      {
        question: "What should be included in the agreement?",
        answer:
          "Key elements include rent amount, security deposit, duration, maintenance responsibilities, and terms of use.",
      },
    ],
  },
  Codeofconduct: {
    id: "Codeofconduct",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Need a Affidavit ForChange? MyLegalInstant.com provides expertly crafted Commercial Lease Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "Affidavit For Change Of Name?",
      description:
        "A Commercial Lease Agreement is a legally binding contract between a property owner and a business tenant that outlines the terms for renting commercial space. It includes specific provisions for business use while protecting both parties' interests.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Commercial Terms",
        description: "Detailed commercial rent and security deposit structure.",
      },
      {
        icon: "Calendar",
        title: "Business Usage",
        description:
          "Specific terms for commercial property usage and modifications.",
      },
      {
        icon: "FileText",
        title: "Business Provisions",
        description: "Special clauses for business operations and signage.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Business Protection",
        desc: "Safeguards your business interests and investment.",
      },
      {
        title: "Commercial Compliance",
        desc: "Ensures compliance with commercial property regulations.",
      },
      {
        title: "Business Operations",
        desc: "Clear terms for business operations and modifications.",
      },
    ],
    legalFramework: [
      {
        title: "Commercial Tenancy Laws",
        desc: "Covers specific regulations for commercial property leasing.",
      },
      {
        title: "Business Property Rights",
        desc: "Protects rights related to commercial property usage.",
      },
    ],
    steps: [
      {
        title: "Business Details",
        desc: "Enter business and property information.",
      },
      {
        title: "Commercial Terms",
        desc: "Specify commercial terms and conditions.",
      },
      {
        title: "Generate Agreement",
        desc: "Get your commercial lease agreement instantly.",
      },
    ],
    whyChooseUs: [
      {
        title: "Commercial Expertise",
        desc: "Specialized in commercial property agreements.",
      },
      {
        title: "Business-Focused",
        desc: "Terms tailored for business operations.",
      },
    ],
    faqs: [
      {
        question: "What makes commercial leases different?",
        answer:
          "Commercial leases include specific provisions for business operations, modifications, and commercial use of the property.",
      },
      {
        question: "Are commercial terms negotiable?",
        answer:
          "Yes, commercial lease terms are typically negotiable to accommodate specific business needs.",
      },
    ],
  },
  Exitpolicy: {
    id: "Exitpolicy",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Need a Affidavit ForChange? MyLegalInstant.com provides expertly crafted Commercial Lease Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "Affidavit For Change Of Name?",
      description:
        "A Commercial Lease Agreement is a legally binding contract between a property owner and a business tenant that outlines the terms for renting commercial space. It includes specific provisions for business use while protecting both parties' interests.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp5sKlKmGX1yx22IVY5IUEqeD1cp4ni1WYdA&s",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Commercial Terms",
        description: "Detailed commercial rent and security deposit structure.",
      },
      {
        icon: "Calendar",
        title: "Business Usage",
        description:
          "Specific terms for commercial property usage and modifications.",
      },
      {
        icon: "FileText",
        title: "Business Provisions",
        description: "Special clauses for business operations and signage.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Business Protection",
        desc: "Safeguards your business interests and investment.",
      },
      {
        title: "Commercial Compliance",
        desc: "Ensures compliance with commercial property regulations.",
      },
      {
        title: "Business Operations",
        desc: "Clear terms for business operations and modifications.",
      },
    ],
    legalFramework: [
      {
        title: "Commercial Tenancy Laws",
        desc: "Covers specific regulations for commercial property leasing.",
      },
      {
        title: "Business Property Rights",
        desc: "Protects rights related to commercial property usage.",
      },
    ],
    steps: [
      {
        title: "Business Details",
        desc: "Enter business and property information.",
      },
      {
        title: "Commercial Terms",
        desc: "Specify commercial terms and conditions.",
      },
      {
        title: "Generate Agreement",
        desc: "Get your commercial lease agreement instantly.",
      },
    ],
    whyChooseUs: [
      {
        title: "Commercial Expertise",
        desc: "Specialized in commercial property agreements.",
      },
      {
        title: "Business-Focused",
        desc: "Terms tailored for business operations.",
      },
    ],
    faqs: [
      {
        question: "What makes commercial leases different?",
        answer:
          "Commercial leases include specific provisions for business operations, modifications, and commercial use of the property.",
      },
      {
        question: "Are commercial terms negotiable?",
        answer:
          "Yes, commercial lease terms are typically negotiable to accommodate specific business needs.",
      },
    ],
  },
  ProcurementAgreement: {
    id: "ProcurementAgreement",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Renting equipment? MyLegalInstant.com provides expertly crafted Equipment Rental Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is an Equipment rental agreement?",
      description:
        "An Equipment Rental Agreement is a contract that outlines the terms for renting machinery, tools, or other equipment. It specifies usage conditions, maintenance responsibilities, and return requirements.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Rental Rates",
        description: "Clear pricing structure for equipment rental.",
      },
      {
        icon: "Calendar",
        title: "Usage Period",
        description: "Defined rental duration and extension terms.",
      },
      {
        icon: "Shield",
        title: "Equipment Protection",
        description: "Maintenance and damage liability terms.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Equipment Safety",
        desc: "Ensures proper handling and usage of equipment.",
      },
      {
        title: "Damage Protection",
        desc: "Clear terms for damage liability and insurance.",
      },
      {
        title: "Usage Guidelines",
        desc: "Specific instructions for equipment operation.",
      },
    ],
    legalFramework: [
      {
        title: "Equipment Safety Laws",
        desc: "Compliance with equipment safety regulations.",
      },
      {
        title: "Rental Regulations",
        desc: "Legal requirements for equipment rental.",
      },
    ],
    steps: [
      {
        title: "Equipment Details",
        desc: "Specify equipment information and condition.",
      },
      {
        title: "Rental Terms",
        desc: "Set rental duration and conditions.",
      },
      {
        title: "Complete Agreement",
        desc: "Generate your equipment rental agreement.",
      },
    ],
    whyChooseUs: [
      {
        title: "Equipment Expertise",
        desc: "Specialized in equipment rental agreements.",
      },
      {
        title: "Complete Protection",
        desc: "Comprehensive terms for equipment safety.",
      },
    ],
    faqs: [
      {
        question: "Is equipment insurance required?",
        answer:
          "Most equipment rentals require insurance coverage for damage protection.",
      },
      {
        question: "What about maintenance?",
        answer:
          "The agreement specifies maintenance responsibilities and procedures.",
      },
    ],
  },
  Exclusiveagreement: {
    id: "Exclusiveagreement",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Need a vehicle lease? MyLegalInstant.com provides expertly crafted Vehicle Lease Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is a Vehicle lease agreement?",
      description:
        "A Vehicle Lease Agreement is a contract that details the terms for leasing a vehicle, including usage rights, maintenance responsibilities, and return conditions.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Lease Payments",
        description: "Monthly payment terms and security deposit.",
      },
      {
        icon: "Clock",
        title: "Lease Duration",
        description: "Specified lease term and mileage limits.",
      },
      {
        icon: "Shield",
        title: "Vehicle Protection",
        description: "Insurance and maintenance requirements.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Vehicle Protection",
        desc: "Safeguards against improper use and damage.",
      },
      {
        title: "Clear Terms",
        desc: "Defined usage limits and maintenance requirements.",
      },
      {
        title: "Legal Compliance",
        desc: "Ensures adherence to vehicle leasing laws.",
      },
    ],
    legalFramework: [
      {
        title: "Motor Vehicle Act",
        desc: "Compliance with vehicle leasing regulations.",
      },
      {
        title: "Insurance Requirements",
        desc: "Mandatory insurance coverage terms.",
      },
    ],
    steps: [
      {
        title: "Vehicle Information",
        desc: "Enter vehicle details and condition.",
      },
      {
        title: "Lease Terms",
        desc: "Specify lease duration and conditions.",
      },
      {
        title: "Complete Lease",
        desc: "Generate your vehicle lease agreement.",
      },
    ],
    whyChooseUs: [
      {
        title: "Vehicle Expertise",
        desc: "Specialized in vehicle lease agreements.",
      },
      {
        title: "Comprehensive Coverage",
        desc: "Complete protection for your vehicle lease.",
      },
    ],
    faqs: [
      {
        question: "What about mileage limits?",
        answer:
          "The agreement specifies annual mileage limits and excess charges.",
      },
      {
        question: "Who handles maintenance?",
        answer:
          "Maintenance responsibilities are clearly defined in the agreement.",
      },
    ],
  },
  Trustdeed: {
    id: "Trustdeed",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Need a vehicle lease? MyLegalInstant.com provides expertly crafted Vehicle Lease Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is a Vehicle lease agreement?",
      description:
        "A Vehicle Lease Agreement is a contract that details the terms for leasing a vehicle, including usage rights, maintenance responsibilities, and return conditions.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Lease Payments",
        description: "Monthly payment terms and security deposit.",
      },
      {
        icon: "Clock",
        title: "Lease Duration",
        description: "Specified lease term and mileage limits.",
      },
      {
        icon: "Shield",
        title: "Vehicle Protection",
        description: "Insurance and maintenance requirements.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Vehicle Protection",
        desc: "Safeguards against improper use and damage.",
      },
      {
        title: "Clear Terms",
        desc: "Defined usage limits and maintenance requirements.",
      },
      {
        title: "Legal Compliance",
        desc: "Ensures adherence to vehicle leasing laws.",
      },
    ],
    legalFramework: [
      {
        title: "Motor Vehicle Act",
        desc: "Compliance with vehicle leasing regulations.",
      },
      {
        title: "Insurance Requirements",
        desc: "Mandatory insurance coverage terms.",
      },
    ],
    steps: [
      {
        title: "Vehicle Information",
        desc: "Enter vehicle details and condition.",
      },
      {
        title: "Lease Terms",
        desc: "Specify lease duration and conditions.",
      },
      {
        title: "Complete Lease",
        desc: "Generate your vehicle lease agreement.",
      },
    ],
    whyChooseUs: [
      {
        title: "Vehicle Expertise",
        desc: "Specialized in vehicle lease agreements.",
      },
      {
        title: "Comprehensive Coverage",
        desc: "Complete protection for your vehicle lease.",
      },
    ],
    faqs: [
      {
        question: "What about mileage limits?",
        answer:
          "The agreement specifies annual mileage limits and excess charges.",
      },
      {
        question: "Who handles maintenance?",
        answer:
          "Maintenance responsibilities are clearly defined in the agreement.",
      },
    ],
  },
};

export const saleDocuments = {
  saleofhouse: {
    id: "saleofhouse",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Looking to rent out your flat or move into a new one? MyLegalInstant.com provides expertly crafted Flat Rent Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is a saleofhouse Affidavit lease agreement?",
      description:
        "A Address Affidavit  is a legally binding document between a landlord (flat owner) and a tenant that outlines the terms and conditions for renting a residential flat. It protects the interests of both parties by defining their roles, rights, and responsibilities while ensuring compliance with applicable laws.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Financial Terms",
        description: "Specifies rent, security deposit, and payment terms.",
      },
      {
        icon: "Calendar",
        title: "Duration & Terms",
        description: "Details the lease duration and renewal conditions.",
      },
      {
        icon: "FileText",
        title: "Property Details",
        description: "Comprehensive details of the property and its condition.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Legal Protection",
        desc: "Safeguards both parties' rights and obligations under the law.",
      },
      {
        title: "Clear Expectations",
        desc: "Sets clear guidelines for property usage and maintenance.",
      },
      {
        title: "Dispute Prevention",
        desc: "Minimizes potential conflicts by documenting all terms clearly.",
      },
    ],
    legalFramework: [
      {
        title: "The Indian Contract Act, 1872",
        desc: "Establishes the legality of contracts and obligations between parties.",
      },
      {
        title: "Rent Control Act",
        desc: "Governs the relationship between landlords and tenants.",
      },
    ],
    steps: [
      {
        title: "Fill Details",
        desc: "Enter all required information about the property and parties involved.",
      },
      {
        title: "Review Terms",
        desc: "Carefully review all terms and conditions of the agreement.",
      },
      {
        title: "Generate & Download",
        desc: "Get your legally-verified agreement instantly.",
      },
    ],
    whyChooseUs: [
      {
        title: "Expert Legal Team",
        desc: "Agreements crafted by experienced legal professionals.",
      },
      {
        title: "Quick & Easy",
        desc: "Generate your agreement in minutes, not days.",
      },
    ],
    faqs: [
      {
        question: "Is a residential lease agreement mandatory?",
        answer:
          "While not legally mandatory, it's highly recommended to protect both parties' interests and prevent future disputes.",
      },
      {
        question: "What should be included in the agreement?",
        answer:
          "Key elements include rent amount, security deposit, duration, maintenance responsibilities, and terms of use.",
      },
    ],
  },
  saleofapartment: {
    id: "saleofapartment",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Need a Affidavit ForChange? MyLegalInstant.com provides expertly crafted Commercial Lease Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "saleofapartment For Change Of Name?",
      description:
        "A Commercial Lease Agreement is a legally binding contract between a property owner and a business tenant that outlines the terms for renting commercial space. It includes specific provisions for business use while protecting both parties' interests.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Commercial Terms",
        description: "Detailed commercial rent and security deposit structure.",
      },
      {
        icon: "Calendar",
        title: "Business Usage",
        description:
          "Specific terms for commercial property usage and modifications.",
      },
      {
        icon: "FileText",
        title: "Business Provisions",
        description: "Special clauses for business operations and signage.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Business Protection",
        desc: "Safeguards your business interests and investment.",
      },
      {
        title: "Commercial Compliance",
        desc: "Ensures compliance with commercial property regulations.",
      },
      {
        title: "Business Operations",
        desc: "Clear terms for business operations and modifications.",
      },
    ],
    legalFramework: [
      {
        title: "Commercial Tenancy Laws",
        desc: "Covers specific regulations for commercial property leasing.",
      },
      {
        title: "Business Property Rights",
        desc: "Protects rights related to commercial property usage.",
      },
    ],
    steps: [
      {
        title: "Business Details",
        desc: "Enter business and property information.",
      },
      {
        title: "Commercial Terms",
        desc: "Specify commercial terms and conditions.",
      },
      {
        title: "Generate Agreement",
        desc: "Get your commercial lease agreement instantly.",
      },
    ],
    whyChooseUs: [
      {
        title: "Commercial Expertise",
        desc: "Specialized in commercial property agreements.",
      },
      {
        title: "Business-Focused",
        desc: "Terms tailored for business operations.",
      },
    ],
    faqs: [
      {
        question: "What makes commercial leases different?",
        answer:
          "Commercial leases include specific provisions for business operations, modifications, and commercial use of the property.",
      },
      {
        question: "Are commercial terms negotiable?",
        answer:
          "Yes, commercial lease terms are typically negotiable to accommodate specific business needs.",
      },
    ],
  },
  saledeed: {
    id: "saledeed",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Renting equipment? MyLegalInstant.com provides expertly crafted Equipment Rental Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is an saledeed rental agreement?",
      description:
        "An Equipment Rental Agreement is a contract that outlines the terms for renting machinery, tools, or other equipment. It specifies usage conditions, maintenance responsibilities, and return requirements.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Rental Rates",
        description: "Clear pricing structure for equipment rental.",
      },
      {
        icon: "Calendar",
        title: "Usage Period",
        description: "Defined rental duration and extension terms.",
      },
      {
        icon: "Shield",
        title: "Equipment Protection",
        description: "Maintenance and damage liability terms.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Equipment Safety",
        desc: "Ensures proper handling and usage of equipment.",
      },
      {
        title: "Damage Protection",
        desc: "Clear terms for damage liability and insurance.",
      },
      {
        title: "Usage Guidelines",
        desc: "Specific instructions for equipment operation.",
      },
    ],
    legalFramework: [
      {
        title: "Equipment Safety Laws",
        desc: "Compliance with equipment safety regulations.",
      },
      {
        title: "Rental Regulations",
        desc: "Legal requirements for equipment rental.",
      },
    ],
    steps: [
      {
        title: "Equipment Details",
        desc: "Specify equipment information and condition.",
      },
      {
        title: "Rental Terms",
        desc: "Set rental duration and conditions.",
      },
      {
        title: "Complete Agreement",
        desc: "Generate your equipment rental agreement.",
      },
    ],
    whyChooseUs: [
      {
        title: "Equipment Expertise",
        desc: "Specialized in equipment rental agreements.",
      },
      {
        title: "Complete Protection",
        desc: "Comprehensive terms for equipment safety.",
      },
    ],
    faqs: [
      {
        question: "Is equipment insurance required?",
        answer:
          "Most equipment rentals require insurance coverage for damage protection.",
      },
      {
        question: "What about maintenance?",
        answer:
          "The agreement specifies maintenance responsibilities and procedures.",
      },
    ],
  },
  sale: {
    id: "sale",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Need a vehicle lease? MyLegalInstant.com provides expertly crafted Vehicle Lease Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is a sale lease agreement?",
      description:
        "A Vehicle Lease Agreement is a contract that details the terms for leasing a vehicle, including usage rights, maintenance responsibilities, and return conditions.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Lease Payments",
        description: "Monthly payment terms and security deposit.",
      },
      {
        icon: "Clock",
        title: "Lease Duration",
        description: "Specified lease term and mileage limits.",
      },
      {
        icon: "Shield",
        title: "Vehicle Protection",
        description: "Insurance and maintenance requirements.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Vehicle Protection",
        desc: "Safeguards against improper use and damage.",
      },
      {
        title: "Clear Terms",
        desc: "Defined usage limits and maintenance requirements.",
      },
      {
        title: "Legal Compliance",
        desc: "Ensures adherence to vehicle leasing laws.",
      },
    ],
    legalFramework: [
      {
        title: "Motor Vehicle Act",
        desc: "Compliance with vehicle leasing regulations.",
      },
      {
        title: "Insurance Requirements",
        desc: "Mandatory insurance coverage terms.",
      },
    ],
    steps: [
      {
        title: "Vehicle Information",
        desc: "Enter vehicle details and condition.",
      },
      {
        title: "Lease Terms",
        desc: "Specify lease duration and conditions.",
      },
      {
        title: "Complete Lease",
        desc: "Generate your vehicle lease agreement.",
      },
    ],
    whyChooseUs: [
      {
        title: "Vehicle Expertise",
        desc: "Specialized in vehicle lease agreements.",
      },
      {
        title: "Comprehensive Coverage",
        desc: "Complete protection for your vehicle lease.",
      },
    ],
    faqs: [
      {
        question: "What about mileage limits?",
        answer:
          "The agreement specifies annual mileage limits and excess charges.",
      },
      {
        question: "Who handles maintenance?",
        answer:
          "Maintenance responsibilities are clearly defined in the agreement.",
      },
    ],
  },
};

export const realEstate = {
  Propertypurchase: {
    id: "Propertypurchase",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Looking to rent out your flat or move into a new one? MyLegalInstant.com provides expertly crafted Flat Rent Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is a Property Purchase Affidavit lease agreement?",
      description:
        "A Address Affidavit  is a legally binding document between a landlord (flat owner) and a tenant that outlines the terms and conditions for renting a residential flat. It protects the interests of both parties by defining their roles, rights, and responsibilities while ensuring compliance with applicable laws.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Financial Terms",
        description: "Specifies rent, security deposit, and payment terms.",
      },
      {
        icon: "Calendar",
        title: "Duration & Terms",
        description: "Details the lease duration and renewal conditions.",
      },
      {
        icon: "FileText",
        title: "Property Details",
        description: "Comprehensive details of the property and its condition.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Legal Protection",
        desc: "Safeguards both parties' rights and obligations under the law.",
      },
      {
        title: "Clear Expectations",
        desc: "Sets clear guidelines for property usage and maintenance.",
      },
      {
        title: "Dispute Prevention",
        desc: "Minimizes potential conflicts by documenting all terms clearly.",
      },
    ],
    legalFramework: [
      {
        title: "The Indian Contract Act, 1872",
        desc: "Establishes the legality of contracts and obligations between parties.",
      },
      {
        title: "Rent Control Act",
        desc: "Governs the relationship between landlords and tenants.",
      },
    ],
    steps: [
      {
        title: "Fill Details",
        desc: "Enter all required information about the property and parties involved.",
      },
      {
        title: "Review Terms",
        desc: "Carefully review all terms and conditions of the agreement.",
      },
      {
        title: "Generate & Download",
        desc: "Get your legally-verified agreement instantly.",
      },
    ],
    whyChooseUs: [
      {
        title: "Expert Legal Team",
        desc: "Agreements crafted by experienced legal professionals.",
      },
      {
        title: "Quick & Easy",
        desc: "Generate your agreement in minutes, not days.",
      },
    ],
    faqs: [
      {
        question: "Is a residential lease agreement mandatory?",
        answer:
          "While not legally mandatory, it's highly recommended to protect both parties' interests and prevent future disputes.",
      },
      {
        question: "What should be included in the agreement?",
        answer:
          "Key elements include rent amount, security deposit, duration, maintenance responsibilities, and terms of use.",
      },
    ],
  },
  Propertysale: {
    id: "Propertysale",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Need a Affidavit ForChange? MyLegalInstant.com provides expertly crafted Commercial Lease Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "saleofapartment For Change Of Name?",
      description:
        "A Commercial Lease Agreement is a legally binding contract between a property owner and a business tenant that outlines the terms for renting commercial space. It includes specific provisions for business use while protecting both parties' interests.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Commercial Terms",
        description: "Detailed commercial rent and security deposit structure.",
      },
      {
        icon: "Calendar",
        title: "Business Usage",
        description:
          "Specific terms for commercial property usage and modifications.",
      },
      {
        icon: "FileText",
        title: "Business Provisions",
        description: "Special clauses for business operations and signage.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Business Protection",
        desc: "Safeguards your business interests and investment.",
      },
      {
        title: "Commercial Compliance",
        desc: "Ensures compliance with commercial property regulations.",
      },
      {
        title: "Business Operations",
        desc: "Clear terms for business operations and modifications.",
      },
    ],
    legalFramework: [
      {
        title: "Commercial Tenancy Laws",
        desc: "Covers specific regulations for commercial property leasing.",
      },
      {
        title: "Business Property Rights",
        desc: "Protects rights related to commercial property usage.",
      },
    ],
    steps: [
      {
        title: "Business Details",
        desc: "Enter business and property information.",
      },
      {
        title: "Commercial Terms",
        desc: "Specify commercial terms and conditions.",
      },
      {
        title: "Generate Agreement",
        desc: "Get your commercial lease agreement instantly.",
      },
    ],
    whyChooseUs: [
      {
        title: "Commercial Expertise",
        desc: "Specialized in commercial property agreements.",
      },
      {
        title: "Business-Focused",
        desc: "Terms tailored for business operations.",
      },
    ],
    faqs: [
      {
        question: "What makes commercial leases different?",
        answer:
          "Commercial leases include specific provisions for business operations, modifications, and commercial use of the property.",
      },
      {
        question: "Are commercial terms negotiable?",
        answer:
          "Yes, commercial lease terms are typically negotiable to accommodate specific business needs.",
      },
    ],
  },
  Developmentagreement: {
    id: "Developmentagreement",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Renting equipment? MyLegalInstant.com provides expertly crafted Equipment Rental Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is an Development agreement rental agreement?",
      description:
        "An Equipment Rental Agreement is a contract that outlines the terms for renting machinery, tools, or other equipment. It specifies usage conditions, maintenance responsibilities, and return requirements.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Rental Rates",
        description: "Clear pricing structure for equipment rental.",
      },
      {
        icon: "Calendar",
        title: "Usage Period",
        description: "Defined rental duration and extension terms.",
      },
      {
        icon: "Shield",
        title: "Equipment Protection",
        description: "Maintenance and damage liability terms.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Equipment Safety",
        desc: "Ensures proper handling and usage of equipment.",
      },
      {
        title: "Damage Protection",
        desc: "Clear terms for damage liability and insurance.",
      },
      {
        title: "Usage Guidelines",
        desc: "Specific instructions for equipment operation.",
      },
    ],
    legalFramework: [
      {
        title: "Equipment Safety Laws",
        desc: "Compliance with equipment safety regulations.",
      },
      {
        title: "Rental Regulations",
        desc: "Legal requirements for equipment rental.",
      },
    ],
    steps: [
      {
        title: "Equipment Details",
        desc: "Specify equipment information and condition.",
      },
      {
        title: "Rental Terms",
        desc: "Set rental duration and conditions.",
      },
      {
        title: "Complete Agreement",
        desc: "Generate your equipment rental agreement.",
      },
    ],
    whyChooseUs: [
      {
        title: "Equipment Expertise",
        desc: "Specialized in equipment rental agreements.",
      },
      {
        title: "Complete Protection",
        desc: "Comprehensive terms for equipment safety.",
      },
    ],
    faqs: [
      {
        question: "Is equipment insurance required?",
        answer:
          "Most equipment rentals require insurance coverage for damage protection.",
      },
      {
        question: "What about maintenance?",
        answer:
          "The agreement specifies maintenance responsibilities and procedures.",
      },
    ],
  },
  Jointventure: {
    id: "Jointventure",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Need a vehicle lease? MyLegalInstant.com provides expertly crafted Vehicle Lease Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is a Joint venture agreement?",
      description:
        "A Vehicle Lease Agreement is a contract that details the terms for leasing a vehicle, including usage rights, maintenance responsibilities, and return conditions.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Lease Payments",
        description: "Monthly payment terms and security deposit.",
      },
      {
        icon: "Clock",
        title: "Lease Duration",
        description: "Specified lease term and mileage limits.",
      },
      {
        icon: "Shield",
        title: "Vehicle Protection",
        description: "Insurance and maintenance requirements.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Vehicle Protection",
        desc: "Safeguards against improper use and damage.",
      },
      {
        title: "Clear Terms",
        desc: "Defined usage limits and maintenance requirements.",
      },
      {
        title: "Legal Compliance",
        desc: "Ensures adherence to vehicle leasing laws.",
      },
    ],
    legalFramework: [
      {
        title: "Motor Vehicle Act",
        desc: "Compliance with vehicle leasing regulations.",
      },
      {
        title: "Insurance Requirements",
        desc: "Mandatory insurance coverage terms.",
      },
    ],
    steps: [
      {
        title: "Vehicle Information",
        desc: "Enter vehicle details and condition.",
      },
      {
        title: "Lease Terms",
        desc: "Specify lease duration and conditions.",
      },
      {
        title: "Complete Lease",
        desc: "Generate your vehicle lease agreement.",
      },
    ],
    whyChooseUs: [
      {
        title: "Vehicle Expertise",
        desc: "Specialized in vehicle lease agreements.",
      },
      {
        title: "Comprehensive Coverage",
        desc: "Complete protection for your vehicle lease.",
      },
    ],
    faqs: [
      {
        question: "What about mileage limits?",
        answer:
          "The agreement specifies annual mileage limits and excess charges.",
      },
      {
        question: "Who handles maintenance?",
        answer:
          "Maintenance responsibilities are clearly defined in the agreement.",
      },
    ],
  },
};

export const Employment = {
  Offerletter: {
    id: "Offerletter",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Are you hiring? Let us simplify your onboarding process with a legally compliant and professionally drafted Offer Letter tailored specifically for your organization.",
      buttonText: "Create Now",
      buttonLink: "/create-offer-letter",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is an Offer Letter?",
      description:
        "An Offer Letter is a formal document provided by an employer to a prospective employee, outlining the basic terms of employment, including job title, salary, joining date, and other conditions.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "Briefcase",
        title: "Job Title & Description",
        description: "Clearly defines the role and responsibilities.",
      },
      {
        icon: "DollarSign",
        title: "Compensation Details",
        description: "Specifies salary, bonuses, and benefits.",
      },
      {
        icon: "Calendar",
        title: "Reporting Structure & Joining Date",
        description:
          "Indicates when employment starts and its reporting hierarchy.",
      },
      {
        icon: "FileText",
        title: "Employment Terms & Conditions",
        description: "Outlines additional terms and conditions of employment.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Clarity",
        desc: "Provides clear expectations, reducing misunderstandings and potential disputes.",
      },
      {
        title: "Professionalism",
        desc: "Reflects the company’s commitment to transparency and professionalism.",
      },
      {
        title: "Legal Protection",
        desc: "Serves as evidence of the terms offered if disputes arise later.",
      },
    ],
    legalFramework: [
      {
        title: "Labour Laws Compliance",
        desc: "Must adhere to provisions under the Industrial Employment (Standing Orders) Act, 1946, and other applicable laws.",
      },
      {
        title: "Contract Act, 1872",
        desc: "The Offer Letter serves as the first step in forming a valid employment contract.",
      },
      {
        title: "Shops and Establishments Act",
        desc: "Different states have specific provisions regulating employer-employee relationships.",
      },
      {
        title: "Data Protection & Confidentiality",
        desc: "Clauses regarding employee confidentiality are essential for compliance under the Information Technology Act, 2000.",
      },
    ],
    steps: [
      {
        title: "Click ‘Create Now’",
        desc: "Start by clicking on the 'Create Now' button on this page.",
      },
      {
        title: "Submit Your Query",
        desc: "Share your specific requirements with us.",
      },
      {
        title: "Legal Consultation & Expertise",
        desc: "Our experts ensure compliance with legal and professional standards.",
      },
      {
        title: "Customized Drafting",
        desc: "We gather details and draft an Offer Letter tailored to your needs.",
      },
      {
        title: "Review & Approve",
        desc: "We send the draft for your review and make changes if necessary.",
      },
      {
        title: "Quick Delivery",
        desc: "Once approved, your Offer Letter is ready within minutes.",
      },
    ],
    whyChooseUs: [
      {
        title: "Expert Guidance",
        desc: "Access experienced legal professionals for advice.",
      },
      {
        title: "Customization",
        desc: "Each Offer Letter is tailored to your business needs.",
      },
      {
        title: "Time-Efficient",
        desc: "Quick turnaround for a hassle-free experience.",
      },
      {
        title: "Affordable Pricing",
        desc: "Cost-effective solutions without compromising quality.",
      },
    ],
    faqs: [
      {
        question: "What is the primary purpose of an Offer Letter?",
        answer:
          "To formally extend a job offer and outline key employment terms.",
      },
      {
        question: "What details are included in an Offer Letter?",
        answer:
          "It includes the job title, role description, salary, joining date, and employment terms.",
      },
      {
        question: "What happens after I accept an Offer Letter?",
        answer:
          "An Appointment Letter is usually issued, formalizing the employment relationship.",
      },
      {
        question: "Is an Offer Letter legally binding?",
        answer:
          "Yes, it is enforceable under the Indian Contract Act, 1872, if signed and accepted.",
      },
      {
        question: "Can terms be negotiated after receiving an Offer Letter?",
        answer:
          "Yes, offer letters are flexible, allowing room for negotiation before acceptance.",
      },
      {
        question: "How long does it take to create an Offer Letter?",
        answer:
          "With MyLegalInstant.com, your Offer Letter is ready within minutes.",
      },
      {
        question: "How can I receive my Offer Letter?",
        answer: "You can opt for a digital copy or have a hard copy delivered.",
      },
      {
        question: "Can I customize my Offer Letter?",
        answer:
          "Absolutely! We ensure it reflects your organization’s specific requirements.",
      },
    ],
  },

  Appointmentletter: {
    id: "Appointmentletter",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Need a Affidavit ForChange? MyLegalInstant.com provides expertly crafted Commercial Lease Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "saleofapartment For Change Of Name?",
      description:
        "A Commercial Lease Agreement is a legally binding contract between a property owner and a business tenant that outlines the terms for renting commercial space. It includes specific provisions for business use while protecting both parties' interests.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Commercial Terms",
        description: "Detailed commercial rent and security deposit structure.",
      },
      {
        icon: "Calendar",
        title: "Business Usage",
        description:
          "Specific terms for commercial property usage and modifications.",
      },
      {
        icon: "FileText",
        title: "Business Provisions",
        description: "Special clauses for business operations and signage.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Business Protection",
        desc: "Safeguards your business interests and investment.",
      },
      {
        title: "Commercial Compliance",
        desc: "Ensures compliance with commercial property regulations.",
      },
      {
        title: "Business Operations",
        desc: "Clear terms for business operations and modifications.",
      },
    ],
    legalFramework: [
      {
        title: "Commercial Tenancy Laws",
        desc: "Covers specific regulations for commercial property leasing.",
      },
      {
        title: "Business Property Rights",
        desc: "Protects rights related to commercial property usage.",
      },
    ],
    steps: [
      {
        title: "Business Details",
        desc: "Enter business and property information.",
      },
      {
        title: "Commercial Terms",
        desc: "Specify commercial terms and conditions.",
      },
      {
        title: "Generate Agreement",
        desc: "Get your commercial lease agreement instantly.",
      },
    ],
    whyChooseUs: [
      {
        title: "Commercial Expertise",
        desc: "Specialized in commercial property agreements.",
      },
      {
        title: "Business-Focused",
        desc: "Terms tailored for business operations.",
      },
    ],
    faqs: [
      {
        question: "What makes commercial leases different?",
        answer:
          "Commercial leases include specific provisions for business operations, modifications, and commercial use of the property.",
      },
      {
        question: "Are commercial terms negotiable?",
        answer:
          "Yes, commercial lease terms are typically negotiable to accommodate specific business needs.",
      },
    ],
  },
  Developmentagreement: {
    id: "Developmentagreement",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Renting equipment? MyLegalInstant.com provides expertly crafted Equipment Rental Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is an Development agreement rental agreement?",
      description:
        "An Equipment Rental Agreement is a contract that outlines the terms for renting machinery, tools, or other equipment. It specifies usage conditions, maintenance responsibilities, and return requirements.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Rental Rates",
        description: "Clear pricing structure for equipment rental.",
      },
      {
        icon: "Calendar",
        title: "Usage Period",
        description: "Defined rental duration and extension terms.",
      },
      {
        icon: "Shield",
        title: "Equipment Protection",
        description: "Maintenance and damage liability terms.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Equipment Safety",
        desc: "Ensures proper handling and usage of equipment.",
      },
      {
        title: "Damage Protection",
        desc: "Clear terms for damage liability and insurance.",
      },
      {
        title: "Usage Guidelines",
        desc: "Specific instructions for equipment operation.",
      },
    ],
    legalFramework: [
      {
        title: "Equipment Safety Laws",
        desc: "Compliance with equipment safety regulations.",
      },
      {
        title: "Rental Regulations",
        desc: "Legal requirements for equipment rental.",
      },
    ],
    steps: [
      {
        title: "Equipment Details",
        desc: "Specify equipment information and condition.",
      },
      {
        title: "Rental Terms",
        desc: "Set rental duration and conditions.",
      },
      {
        title: "Complete Agreement",
        desc: "Generate your equipment rental agreement.",
      },
    ],
    whyChooseUs: [
      {
        title: "Equipment Expertise",
        desc: "Specialized in equipment rental agreements.",
      },
      {
        title: "Complete Protection",
        desc: "Comprehensive terms for equipment safety.",
      },
    ],
    faqs: [
      {
        question: "Is equipment insurance required?",
        answer:
          "Most equipment rentals require insurance coverage for damage protection.",
      },
      {
        question: "What about maintenance?",
        answer:
          "The agreement specifies maintenance responsibilities and procedures.",
      },
    ],
  },

  Confirmationletter: {
    id: "Confirmationletter",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Recognize and formalize the permanent status of your employees with a professionally drafted Confirmation Letter tailored to your organization’s needs.",
      buttonText: "Create Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is a Confirmation Letter?",
      description:
        "A Confirmation Letter is a formal document issued by an employer to confirm an employee's status, typically after the completion of a probation period. It officially confirms their employment and outlines the terms of their continued association with the organization.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "UserCheck",
        title: "Employee Details",
        description:
          "Includes name, designation, and department of the employee.",
      },
      {
        icon: "CheckCircle",
        title: "Confirmation of Employment",
        description: "Confirms permanent status or other employment changes.",
      },
      {
        icon: "Clipboard",
        title: "Terms of Employment",
        description:
          "Outlines job responsibilities, compensation, and benefits.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Formal Acknowledgment",
        desc: "Provides official recognition of employment status for career progression.",
      },
      {
        title: "Clarity on Terms",
        desc: "Reduces misunderstandings by clearly outlining employment terms.",
      },
      {
        title: "Legal Protection",
        desc: "Acts as a documented agreement to resolve employment disputes.",
      },
    ],
    legalFramework: [
      {
        title: "Industrial Employment (Standing Orders) Act, 1946",
        desc: "Governs probation and confirmation processes in many industries.",
      },
      {
        title: "State-Specific Shops and Establishments Acts",
        desc: "Requires employers to formalize employment terms, including confirmations.",
      },
      {
        title: "Indian Contract Act, 1872",
        desc: "Solidifies the employer-employee relationship as a legal agreement.",
      },
      {
        title: "Minimum Wages Act, 1948 & Payment of Wages Act, 1936",
        desc: "Ensures compliance with employee rights regarding pay and benefits.",
      },
    ],
    steps: [
      {
        title: "Submit Your Requirements",
        desc: "Provide employee details and specific clauses.",
      },
      {
        title: "Consult with Legal Experts",
        desc: "Ensure compliance with legal standards and company policies.",
      },
      {
        title: "Tailored Drafting",
        desc: "Customize the document with special terms or changes.",
      },
      {
        title: "Review and Finalize",
        desc: "Review the draft and approve the final version.",
      },
      {
        title: "Fast Delivery",
        desc: "Receive your Confirmation Letter digitally or via doorstep delivery.",
      },
    ],
    whyChooseUs: [
      {
        title: "Expert Assistance",
        desc: "Guidance from seasoned legal professionals.",
      },
      {
        title: "Custom Drafting",
        desc: "Each document is tailored to your organization’s needs.",
      },
      {
        title: "Time-Saving",
        desc: "Hassle-free process with rapid turnaround.",
      },
    ],
    faqs: [
      {
        question: "What is the purpose of a Confirmation Letter?",
        answer:
          "To formally acknowledge an employee's status, typically after probation or changes in employment terms.",
      },
      {
        question: "What details are included in a Confirmation Letter?",
        answer:
          "It includes the employee's designation, department, confirmation of permanent status, revised salary (if any), and terms of continued employment.",
      },
      {
        question: "Is a Confirmation Letter legally binding?",
        answer:
          "Yes, it serves as an official record of employment status but does not typically alter existing terms unless specified.",
      },
      {
        question: "Can MyLegalInstant.com customize my Confirmation Letter?",
        answer:
          "Yes, we tailor each document to meet your specific requirements and organizational policies.",
      },
      {
        question: "How long does it take to create a Confirmation Letter?",
        answer:
          "With MyLegalInstant.com, your Confirmation Letter can be drafted, reviewed, and finalized within minutes.",
      },
      {
        question: "How will I receive the Confirmation Letter?",
        answer:
          "You can opt for a digital copy or have it delivered to your doorstep.",
      },
    ],
  },

  Fixedterm: {
    id: "Fixedterm",
    hero: {
      title: "Fixed Term Employment Agreement",
      subtitle: "MyLegalInstant.com",
      description:
        "Hire with confidence using a professionally crafted Fixed-Term Employment Agreement tailored for your organization.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is a Fixed Term Employment Agreement?",
      description:
        "A Fixed Term Employment Agreement is a contractual arrangement specifying a predefined employment duration, including responsibilities, compensation, and termination details.",
      image: "/api/placeholder/400/300",
    },
    useCases: [
      {
        title: "Project-Based Work",
        desc: "Ideal for hiring employees for specific projects with a fixed timeline.",
      },
      {
        title: "Seasonal Work",
        desc: "Perfect for covering peak business periods or seasonal demand.",
      },
      {
        title: "Temporary Replacements",
        desc: "Used for filling in positions due to maternity, medical, or other leaves.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Legal Clarity",
        desc: "Clearly defines the scope, duration, and conditions of employment.",
      },
      {
        title: "Flexibility",
        desc: "Suitable for project-based roles, seasonal work, or temporary requirements.",
      },
      {
        title: "Conflict Mitigation",
        desc: "Reduces disputes by documenting all terms upfront.",
      },
      {
        title: "Compliance",
        desc: "Ensures adherence to labor laws, protecting employer and employee rights.",
      },
    ],
    legalFramework: [
      {
        title: "Industrial Employment (Standing Orders) Act, 1946",
        desc: "Regulates employment terms for fixed-term workers, ensuring fairness.",
      },
      {
        title: "Code on Wages, 2019",
        desc: "Ensures fair wage payment and benefits for fixed-term employees.",
      },
      {
        title: "Labour Codes 2020",
        desc: "Provides specific guidelines for fixed-term contracts.",
      },
    ],
    steps: [
      {
        title: "Click 'Create Now'",
        desc: "Begin by clicking the 'Create Now' button to start your agreement.",
      },
      {
        title: "Submit Requirements",
        desc: "Provide details like employment duration, roles, and special clauses.",
      },
      {
        title: "Expert Consultation",
        desc: "Get legal consultation to ensure compliance and clarity.",
      },
      {
        title: "Tailored Drafting",
        desc: "We draft a customized contract incorporating necessary legal provisions.",
      },
      {
        title: "Review and Approve",
        desc: "Receive a draft for review and suggest any necessary edits.",
      },
      {
        title: "Quick Delivery",
        desc: "Your finalized agreement will be delivered digitally within minutes.",
      },
    ],
    whyChooseUs: [
      {
        title: "Expert Assistance",
        desc: "Leverage legal expertise for flawless contracts.",
      },
      {
        title: "Fully Customized Agreements",
        desc: "Tailored to your specific project or organizational needs.",
      },
      {
        title: "Time-Saving",
        desc: "Quick turnaround so you can focus on your core business.",
      },
      {
        title: "Cost-Effective",
        desc: "Affordable pricing for premium legal documentation.",
      },
      {
        title: "Convenient Delivery",
        desc: "Choose between digital delivery or doorstep service.",
      },
    ],
    faqs: [
      {
        question: "What is the purpose of a Fixed Term Employment Agreement?",
        answer:
          "It formalizes the terms of temporary employment for specific projects or durations.",
      },
      {
        question: "What does a Fixed Term Employment Agreement include?",
        answer:
          "Employment duration, roles, responsibilities, compensation, benefits, and termination clauses.",
      },
      {
        question: "Is a Fixed Term Employment Agreement legally binding?",
        answer:
          "Yes, once signed by both parties, it becomes a legally binding contract.",
      },
      {
        question: "Can the agreement be extended or renewed?",
        answer:
          "Yes, provisions for extension or renewal can be included as per requirements.",
      },
      {
        question: "Can I terminate a Fixed Term Employment Agreement early?",
        answer:
          "Yes, but the agreement must include provisions for early termination and notice periods.",
      },
      {
        question: "How quickly can MyLegalInstant.com create my agreement?",
        answer:
          "Your Fixed-Term Employment Agreement can be ready within minutes.",
      },
      {
        question: "Are fixed-term employees entitled to benefits?",
        answer:
          "Yes, they are entitled to benefits comparable to permanent employees on a pro-rata basis.",
      },
    ],
  },

  Adhocemployment: {
    id: "Adhocemployment",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Need an agreement for short-term or project-based employment? Simplify the process with a professionally crafted Ad-hoc Employment Agreement designed to meet your specific needs.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What Is an Ad-hoc Employment Agreement?",
      description:
        "An Ad-hoc Employment Agreement is a flexible, short-term employment contract used for hiring individuals on a temporary or project-specific basis. It outlines the terms of employment, responsibilities, and the duration of the engagement.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Specific Job/Project Details",
        description:
          "Details regarding the nature and scope of the work or project.",
      },
      {
        icon: "Calendar",
        title: "Duration of Employment",
        description: "Clearly defines the period of temporary employment.",
      },
      {
        icon: "FileText",
        title: "Payment Terms and Benefits",
        description: "Specifies salary, compensation, and any other benefits.",
      },
      {
        icon: "Clipboard",
        title: "Roles and Responsibilities",
        description:
          "Describes the duties and expectations of the temporary hire.",
      },
      {
        icon: "Shield",
        title: "Termination and Confidentiality",
        description:
          "Outlines clauses on ending the agreement and confidentiality.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Clarity",
        desc: "Clearly defines the scope and terms of short-term engagements.",
      },
      {
        title: "Flexibility",
        desc: "Ideal for temporary staffing, freelancers, or project-based hires.",
      },
      {
        title: "Conflict Avoidance",
        desc: "Protects both parties by formalizing expectations.",
      },
      {
        title: "Legal Compliance",
        desc: "Ensures adherence to labour laws for temporary employment.",
      },
    ],
    legalFramework: [
      {
        title: "Indian Contract Act, 1872",
        desc: "Governs the validity and enforceability of all employment agreements.",
      },
      {
        title: "Code on Wages, 2019",
        desc: "Ensures fair compensation for temporary employees.",
      },
      {
        title: "Industrial Employment (Standing Orders) Act, 1946",
        desc: "Provides guidelines for temporary or casual employment in certain industries.",
      },
      {
        title: "Shops and Establishments Act",
        desc: "State-specific provisions regulate ad-hoc employment.",
      },
    ],
    steps: [
      {
        title: "Business Details",
        desc: "Enter job/project details, scope, and requirements.",
      },
      {
        title: "Commercial Terms",
        desc: "Specify payment terms, duration, and benefits.",
      },
      {
        title: "Generate Agreement",
        desc: "Get your Ad-hoc Employment Agreement instantly.",
      },
    ],
    whyChooseUs: [
      {
        title: "Expert Guidance",
        desc: "Benefit from advice by experienced legal professionals.",
      },
      {
        title: "Custom Solutions",
        desc: "Tailored to meet your specific business or project needs.",
      },
      {
        title: "Time Efficiency",
        desc: "Quick turnaround for urgent requirements.",
      },
      {
        title: "Cost-Effective",
        desc: "Affordable pricing without compromising quality.",
      },
      {
        title: "Flexible Delivery",
        desc: "Digital or doorstep delivery options available.",
      },
    ],
    faqs: [
      {
        question: "What is included in an Ad-hoc Employment Agreement?",
        answer:
          "It includes the scope of work, duration, compensation, roles and responsibilities, and termination terms.",
      },
      {
        question: "Are ad-hoc agreements legally binding?",
        answer:
          "Yes, they are enforceable under the Indian Contract Act, 1872, and must adhere to labour laws.",
      },
      {
        question:
          "How is an ad-hoc agreement different from a regular employment agreement?",
        answer:
          "Ad-hoc agreements are temporary and project-specific, whereas regular agreements are for long-term employment.",
      },
      {
        question:
          "Can MyLegalInstant.com customize the agreement to my requirements?",
        answer:
          "Absolutely! Each agreement is tailored to align with your specific needs and objectives.",
      },
      {
        question: "How quickly can I get my Ad-hoc Employment Agreement?",
        answer:
          "Your agreement can be ready within minutes, thanks to our efficient process.",
      },
    ],
  },

  Resignationletter: {
    id: "Resignationletter",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Renting equipment? MyLegalInstant.com provides expertly crafted Equipment Rental Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is an Development agreement rental agreement?",
      description:
        "An Equipment Rental Agreement is a contract that outlines the terms for renting machinery, tools, or other equipment. It specifies usage conditions, maintenance responsibilities, and return requirements.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Rental Rates",
        description: "Clear pricing structure for equipment rental.",
      },
      {
        icon: "Calendar",
        title: "Usage Period",
        description: "Defined rental duration and extension terms.",
      },
      {
        icon: "Shield",
        title: "Equipment Protection",
        description: "Maintenance and damage liability terms.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Equipment Safety",
        desc: "Ensures proper handling and usage of equipment.",
      },
      {
        title: "Damage Protection",
        desc: "Clear terms for damage liability and insurance.",
      },
      {
        title: "Usage Guidelines",
        desc: "Specific instructions for equipment operation.",
      },
    ],
    legalFramework: [
      {
        title: "Equipment Safety Laws",
        desc: "Compliance with equipment safety regulations.",
      },
      {
        title: "Rental Regulations",
        desc: "Legal requirements for equipment rental.",
      },
    ],
    steps: [
      {
        title: "Equipment Details",
        desc: "Specify equipment information and condition.",
      },
      {
        title: "Rental Terms",
        desc: "Set rental duration and conditions.",
      },
      {
        title: "Complete Agreement",
        desc: "Generate your equipment rental agreement.",
      },
    ],
    whyChooseUs: [
      {
        title: "Equipment Expertise",
        desc: "Specialized in equipment rental agreements.",
      },
      {
        title: "Complete Protection",
        desc: "Comprehensive terms for equipment safety.",
      },
    ],
    faqs: [
      {
        question: "Is equipment insurance required?",
        answer:
          "Most equipment rentals require insurance coverage for damage protection.",
      },
      {
        question: "What about maintenance?",
        answer:
          "The agreement specifies maintenance responsibilities and procedures.",
      },
    ],
  },
  Letteroftermination: {
    id: "Letteroftermination",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Need a vehicle lease? MyLegalInstant.com provides expertly crafted Vehicle Lease Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is a Joint venture agreement?",
      description:
        "A Vehicle Lease Agreement is a contract that details the terms for leasing a vehicle, including usage rights, maintenance responsibilities, and return conditions.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Lease Payments",
        description: "Monthly payment terms and security deposit.",
      },
      {
        icon: "Clock",
        title: "Lease Duration",
        description: "Specified lease term and mileage limits.",
      },
      {
        icon: "Shield",
        title: "Vehicle Protection",
        description: "Insurance and maintenance requirements.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Vehicle Protection",
        desc: "Safeguards against improper use and damage.",
      },
      {
        title: "Clear Terms",
        desc: "Defined usage limits and maintenance requirements.",
      },
      {
        title: "Legal Compliance",
        desc: "Ensures adherence to vehicle leasing laws.",
      },
    ],
    legalFramework: [
      {
        title: "Motor Vehicle Act",
        desc: "Compliance with vehicle leasing regulations.",
      },
      {
        title: "Insurance Requirements",
        desc: "Mandatory insurance coverage terms.",
      },
    ],
    steps: [
      {
        title: "Vehicle Information",
        desc: "Enter vehicle details and condition.",
      },
      {
        title: "Lease Terms",
        desc: "Specify lease duration and conditions.",
      },
      {
        title: "Complete Lease",
        desc: "Generate your vehicle lease agreement.",
      },
    ],
    whyChooseUs: [
      {
        title: "Vehicle Expertise",
        desc: "Specialized in vehicle lease agreements.",
      },
      {
        title: "Comprehensive Coverage",
        desc: "Complete protection for your vehicle lease.",
      },
    ],
    faqs: [
      {
        question: "What about mileage limits?",
        answer:
          "The agreement specifies annual mileage limits and excess charges.",
      },
      {
        question: "Who handles maintenance?",
        answer:
          "Maintenance responsibilities are clearly defined in the agreement.",
      },
    ],
  },
  Consultancyagreement: {
    id: "Consultancyagreement",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Looking to streamline your consultancy relationships? MyLegalInstant.com provides expertly crafted Consultancy Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is a Consultancy Agreement?",
      description:
        "A Consultancy Agreement is a formal contract between an organization and a consultant, defining the terms and conditions of their professional relationship. It ensures clarity in roles, deliverables, and compensation, protecting the interests of both parties.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "FileText",
        title: "Scope of Work",
        description:
          "Detailed description of the services to be provided by the consultant.",
      },
      {
        icon: "Calendar",
        title: "Duration of Engagement",
        description:
          "Specifies the start and end dates of the consultancy, including renewal provisions.",
      },
      {
        icon: "DollarSign",
        title: "Compensation",
        description:
          "Payment terms, including fees, payment schedule, and additional expenses.",
      },
      {
        icon: "Lock",
        title: "Confidentiality",
        description:
          "Clauses to protect sensitive information shared during the consultancy.",
      },
      {
        icon: "XCircle",
        title: "Termination Conditions",
        description:
          "Conditions under which either party can terminate the agreement.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Clarity in Roles",
        desc: "Outlines the roles, responsibilities, and expectations to prevent disputes.",
      },
      {
        title: "Legal Protection",
        desc: "Offers legal safeguards for both business and consultant in case of disagreements.",
      },
      {
        title: "Professionalism",
        desc: "Establishes a formal relationship that fosters trust and accountability.",
      },
      {
        title: "Conflict Prevention",
        desc: "Minimizes misunderstandings by formalizing the terms of the relationship.",
      },
    ],
    legalFramework: [
      {
        title: "The Indian Contract Act, 1872",
        desc: "Guides consultancy agreements under general contract law principles in India.",
      },
      {
        title: "Legality of Purpose",
        desc: "The consultancy must be for a lawful purpose, as per Indian law.",
      },
    ],
    steps: [
      {
        title: "Fill Details",
        desc: "Submit the details about the scope of consultancy, payment terms, duration, etc.",
      },
      {
        title: "Expert Consultation",
        desc: "Our legal experts ensure your agreement aligns with business goals and Indian laws.",
      },
      {
        title: "Tailored Drafting",
        desc: "Get a customized Consultancy Agreement that meets your specific needs.",
      },
      {
        title: "Review & Finalize",
        desc: "Review the draft, suggest changes, and finalize your agreement.",
      },
      {
        title: "Quick Delivery",
        desc: "Receive your Consultancy Agreement digitally or opt for doorstep delivery.",
      },
    ],
    whyChooseUs: [
      {
        title: "Expert Legal Team",
        desc: "Get your agreement crafted by experienced legal professionals.",
      },
      {
        title: "Fully Customizable",
        desc: "Tailored to your unique business and consulting needs.",
      },
      {
        title: "Fast & Reliable",
        desc: "Receive your agreement instantly after submission.",
      },
      {
        title: "Affordable Solutions",
        desc: "High-quality legal documents at competitive prices.",
      },
      {
        title: "Flexible Delivery Options",
        desc: "Choose between digital or doorstep delivery options.",
      },
    ],
    faqs: [
      {
        question: "What is the purpose of a Consultancy Agreement?",
        answer:
          "To formalize the terms under which a consultant will provide services to a business, ensuring clarity and protection for both parties.",
      },
      {
        question: "Can I include a non-compete or confidentiality clause?",
        answer:
          "Yes, specific clauses can be added based on your business objectives and needs.",
      },
      {
        question: "How fast can MyLegalInstant.com deliver the agreement?",
        answer:
          "Your Consultancy Agreement can be ready in minutes, depending on your requirements.",
      },
      {
        question: "How will I receive my agreement?",
        answer:
          "You can choose to receive your document digitally or opt for doorstep delivery.",
      },
      {
        question: "Is a Consultancy Agreement legally binding?",
        answer:
          "Yes, if properly drafted and signed, it is enforceable under the Indian Contract Act, 1872.",
      },
      {
        question: "Can I terminate a Consultancy Agreement early?",
        answer:
          "Yes, but it must include provisions for early termination and notice periods as specified in the agreement.",
      },
      {
        question: "Are consultants entitled to benefits?",
        answer:
          "Typically, consultants are not entitled to employee benefits, but this can be specified in the agreement.",
      },
    ],
  },

  Advisorsagreement: {
    id: "Advisorsagreement",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Need a Affidavit ForChange? MyLegalInstant.com provides expertly crafted Commercial Lease Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is Advisorsagreement For Change Of Name?",
      description:
        "A Commercial Lease Agreement is a legally binding contract between a property owner and a business tenant that outlines the terms for renting commercial space. It includes specific provisions for business use while protecting both parties' interests.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Commercial Terms",
        description: "Detailed commercial rent and security deposit structure.",
      },
      {
        icon: "Calendar",
        title: "Business Usage",
        description:
          "Specific terms for commercial property usage and modifications.",
      },
      {
        icon: "FileText",
        title: "Business Provisions",
        description: "Special clauses for business operations and signage.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Business Protection",
        desc: "Safeguards your business interests and investment.",
      },
      {
        title: "Commercial Compliance",
        desc: "Ensures compliance with commercial property regulations.",
      },
      {
        title: "Business Operations",
        desc: "Clear terms for business operations and modifications.",
      },
    ],
    legalFramework: [
      {
        title: "Commercial Tenancy Laws",
        desc: "Covers specific regulations for commercial property leasing.",
      },
      {
        title: "Business Property Rights",
        desc: "Protects rights related to commercial property usage.",
      },
    ],
    steps: [
      {
        title: "Business Details",
        desc: "Enter business and property information.",
      },
      {
        title: "Commercial Terms",
        desc: "Specify commercial terms and conditions.",
      },
      {
        title: "Generate Agreement",
        desc: "Get your commercial lease agreement instantly.",
      },
    ],
    whyChooseUs: [
      {
        title: "Commercial Expertise",
        desc: "Specialized in commercial property agreements.",
      },
      {
        title: "Business-Focused",
        desc: "Terms tailored for business operations.",
      },
    ],
    faqs: [
      {
        question: "What makes commercial leases different?",
        answer:
          "Commercial leases include specific provisions for business operations, modifications, and commercial use of the property.",
      },
      {
        question: "Are commercial terms negotiable?",
        answer:
          "Yes, commercial lease terms are typically negotiable to accommodate specific business needs.",
      },
    ],
  },
  Retainershipagreement: {
    id: "Retainershipagreement",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Renting equipment? MyLegalInstant.com provides expertly crafted Equipment Rental Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is Retainer ship agreement?",
      description:
        "An Equipment Retainer Agreement is a contract that outlines the terms for renting machinery, tools, or other equipment. It specifies usage conditions, maintenance responsibilities, and return requirements.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Rental Rates",
        description: "Clear pricing structure for equipment rental.",
      },
      {
        icon: "Calendar",
        title: "Usage Period",
        description: "Defined rental duration and extension terms.",
      },
      {
        icon: "Shield",
        title: "Equipment Protection",
        description: "Maintenance and damage liability terms.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Equipment Safety",
        desc: "Ensures proper handling and usage of equipment.",
      },
      {
        title: "Damage Protection",
        desc: "Clear terms for damage liability and insurance.",
      },
      {
        title: "Usage Guidelines",
        desc: "Specific instructions for equipment operation.",
      },
    ],
    legalFramework: [
      {
        title: "Equipment Safety Laws",
        desc: "Compliance with equipment safety regulations.",
      },
      {
        title: "Rental Regulations",
        desc: "Legal requirements for equipment rental.",
      },
    ],
    steps: [
      {
        title: "Equipment Details",
        desc: "Specify equipment information and condition.",
      },
      {
        title: "Rental Terms",
        desc: "Set rental duration and conditions.",
      },
      {
        title: "Complete Agreement",
        desc: "Generate your equipment rental agreement.",
      },
    ],
    whyChooseUs: [
      {
        title: "Equipment Expertise",
        desc: "Specialized in equipment rental agreements.",
      },
      {
        title: "Complete Protection",
        desc: "Comprehensive terms for equipment safety.",
      },
    ],
    faqs: [
      {
        question: "Is equipment insurance required?",
        answer:
          "Most equipment rentals require insurance coverage for damage protection.",
      },
      {
        question: "What about maintenance?",
        answer:
          "The agreement specifies maintenance responsibilities and procedures.",
      },
    ],
  },
  Employmentagreement: {
    id: "Employmentagreement",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Need a vehicle lease? MyLegalInstant.com provides expertly crafted Vehicle Lease Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is a Employment agreement?",
      description:
        "A Vehicle Lease Agreement is a contract that details the terms for leasing a vehicle, including usage rights, maintenance responsibilities, and return conditions.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Lease Payments",
        description: "Monthly payment terms and security deposit.",
      },
      {
        icon: "Clock",
        title: "Lease Duration",
        description: "Specified lease term and mileage limits.",
      },
      {
        icon: "Shield",
        title: "Vehicle Protection",
        description: "Insurance and maintenance requirements.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Vehicle Protection",
        desc: "Safeguards against improper use and damage.",
      },
      {
        title: "Clear Terms",
        desc: "Defined usage limits and maintenance requirements.",
      },
      {
        title: "Legal Compliance",
        desc: "Ensures adherence to vehicle leasing laws.",
      },
    ],
    legalFramework: [
      {
        title: "Motor Vehicle Act",
        desc: "Compliance with vehicle leasing regulations.",
      },
      {
        title: "Insurance Requirements",
        desc: "Mandatory insurance coverage terms.",
      },
    ],
    steps: [
      {
        title: "Vehicle Information",
        desc: "Enter vehicle details and condition.",
      },
      {
        title: "Lease Terms",
        desc: "Specify lease duration and conditions.",
      },
      {
        title: "Complete Lease",
        desc: "Generate your vehicle lease agreement.",
      },
    ],
    whyChooseUs: [
      {
        title: "Vehicle Expertise",
        desc: "Specialized in vehicle lease agreements.",
      },
      {
        title: "Comprehensive Coverage",
        desc: "Complete protection for your vehicle lease.",
      },
    ],
    faqs: [
      {
        question: "What about mileage limits?",
        answer:
          "The agreement specifies annual mileage limits and excess charges.",
      },
      {
        question: "Who handles maintenance?",
        answer:
          "Maintenance responsibilities are clearly defined in the agreement.",
      },
    ],
  },
  CompensationAgreement: {
    id: "CompensationAgreement",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Looking to clarify and finalize compensation terms? MyLegalInstant.com provides expertly crafted Compensation Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is a Compensation Agreement?",
      description:
        "A Compensation Agreement is a formal legal document between an employer and employee or contractor that specifies the terms of remuneration for services rendered. It outlines the payment structure, benefits, bonuses, and other compensatory arrangements to avoid any ambiguity or disputes.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Employee / Contractor Details",
        description: "Includes name, job title, and department.",
      },
      {
        icon: "MoneyCheck",
        title: "Base Salary / Hourly Rate",
        description:
          "The fixed amount paid either as an annual salary or hourly wage.",
      },
      {
        icon: "Calendar",
        title: "Payment Frequency",
        description: "Defines how often the employee/contractor will be paid.",
      },
      {
        icon: "Award",
        title: "Bonuses & Incentives",
        description:
          "Details about performance bonuses, commissions, or stock options.",
      },
      {
        icon: "Heart",
        title: "Benefits",
        description:
          "Includes health insurance, retirement plans, life insurance, and other perks.",
      },
      {
        icon: "Clock",
        title: "Paid Time Off",
        description:
          "Entitlements for vacation days, sick leave, and holidays.",
      },
      {
        icon: "Shield",
        title: "Severance Package",
        description:
          "Terms regarding severance pay and continuation of benefits upon termination.",
      },
      {
        icon: "Lock",
        title: "Confidentiality & Non-Compete",
        description:
          "Provisions to protect sensitive information and prevent competition.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Clarity",
        desc: "Clearly defines compensation terms, reducing misunderstandings between employer and employee.",
      },
      {
        title: "Legal Protection",
        desc: "Provides legal safeguards for both parties in case of disputes regarding compensation.",
      },
      {
        title: "Professionalism",
        desc: "Establishes a formal understanding that enhances trust and accountability.",
      },
    ],
    legalFramework: [
      {
        title: "The Indian Contract Act, 1872",
        desc: "Governs the enforceability of compensation agreements.",
      },
      {
        title: "Code on Wages, 2019",
        desc: "Provides guidelines for minimum wages, bonuses, and deductions.",
      },
      {
        title: "Income Tax Act, 1961",
        desc: "Regulates tax obligations related to compensation, including withholding tax (TDS).",
      },
      {
        title: "Employee Provident Fund & Miscellaneous Provisions Act, 1952",
        desc: "Governs employee benefits such as provident fund contributions (if applicable).",
      },
    ],
    steps: [
      {
        title: "Click 'Create Now'",
        desc: "Start by clicking the 'Create Now' button below.",
      },
      {
        title: "Provide Your Details",
        desc: "Share details about the role, payment structure, benefits, and any specific terms you need included.",
      },
      {
        title: "Consult Our Experts",
        desc: "Our legal professionals ensure your agreement is compliant with applicable laws and tailored to your needs.",
      },
      {
        title: "Custom Drafting",
        desc: "Receive a draft Compensation Agreement that aligns with your business objectives.",
      },
      {
        title: "Review and Approve",
        desc: "Review the agreement, suggest changes if necessary, and finalize it.",
      },
      {
        title: "Quick Delivery",
        desc: "Get your agreement delivered digitally within minutes, or opt for doorstep delivery.",
      },
    ],
    whyChooseUs: [
      {
        title: "Expert Legal Drafting",
        desc: "Agreements prepared by experienced legal professionals.",
      },
      {
        title: "Tailored Solutions",
        desc: "Customized to your organization’s unique requirements.",
      },
      {
        title: "Fast Turnaround",
        desc: "Save time with our efficient drafting process.",
      },
      {
        title: "Affordable Services",
        desc: "High-quality agreements at budget-friendly rates.",
      },
      {
        title: "Flexible Delivery Options",
        desc: "Choose between digital delivery or doorstep delivery.",
      },
    ],
    faqs: [
      {
        question: "What should be included in a Compensation Agreement?",
        answer:
          "A Compensation Agreement should include salary, bonuses, payment frequency, benefits, deductions, and confidentiality terms.",
      },
      {
        question: "Is a Compensation Agreement legally binding?",
        answer:
          "Yes, when properly drafted and signed by both parties, it is enforceable under the Indian Contract Act, 1872.",
      },
      {
        question:
          "Can MyLegalinstant.com tailor the agreement for contractors?",
        answer:
          "Yes, we can create agreements for employees, contractors, or freelancers as per your requirements.",
      },
      {
        question: "What happens if there is a dispute regarding compensation?",
        answer:
          "The agreement should outline procedures for dispute resolution, including mediation or arbitration.",
      },
      {
        question: "How soon can I receive my Compensation Agreement?",
        answer:
          "Your agreement can be ready within minutes, depending on your specifications.",
      },
      {
        question: "How will I get my agreement?",
        answer:
          "You can opt for digital delivery or have it sent to your doorstep.",
      },
    ],
  },

  AdhocempCollectivebargaining: {
    id: "AdhocempCollectivebargaining",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Need a Collective Bargaining Agreement? MyLegalInstant.com provides expertly crafted CBAs that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is a Collective Bargaining Agreement?",
      description:
        "A Collective Bargaining Agreement is a legally binding contract between an employer and a group of employees, represented by a trade union or employee association. It establishes the terms of employment, including wages, work hours, benefits, grievance mechanisms, and workplace policies.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Wages",
        description: "Salary scales, pay rates, and bonuses or incentives.",
      },
      {
        icon: "Clock",
        title: "Working Hours",
        description:
          "Specifications on regular hours, overtime, and shift patterns.",
      },
      {
        icon: "Shield",
        title: "Working Conditions",
        description:
          "Health and safety standards, workplace environment, and employee rights.",
      },
      {
        icon: "Briefcase",
        title: "Benefits",
        description:
          "Health insurance, retirement plans, paid leave, and other benefits.",
      },
      {
        icon: "FileText",
        title: "Grievance Procedures",
        description:
          "Processes for addressing employee complaints and disputes.",
      },
      {
        icon: "Users",
        title: "Union Rights",
        description:
          "The rights and responsibilities of the union representing employees.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Clarity",
        desc: "Clearly defines the roles and responsibilities of both employers and employees.",
      },
      {
        title: "Conflict Resolution",
        desc: "Structured mechanism to address grievances and disputes.",
      },
      {
        title: "Promotes Harmony",
        desc: "Encourages cooperation and understanding between employers and employees.",
      },
      {
        title: "Workforce Motivation",
        desc: "Builds trust and boosts employee morale by addressing their concerns fairly.",
      },
    ],
    legalFramework: [
      {
        title: "Industrial Disputes Act, 1947",
        desc: "Governs the collective bargaining process and ensures fair labour practices.",
      },
      {
        title: "Trade Unions Act, 1926",
        desc: "Recognizes trade unions as legal representatives of workers for collective bargaining.",
      },
      {
        title: "Factories Act, 1948",
        desc: "Sets standards for working conditions that can be negotiated in CBAs.",
      },
      {
        title: "Code on Wages, 2019",
        desc: "Guides wage negotiations and payment terms.",
      },
      {
        title: "Code on Industrial Relations, 2020",
        desc: "Regulates collective bargaining and employer-employee relations.",
      },
    ],
    steps: [
      {
        title: "Click 'Create Now'",
        desc: "Begin by clicking the 'Create Now' button to start your process.",
      },
      {
        title: "Share Your Requirements",
        desc: "Provide details about the workforce, union, and specific terms for the agreement.",
      },
      {
        title: "Legal Consultation",
        desc: "Our legal team ensures your CBA complies with applicable laws and protects your interests.",
      },
      {
        title: "Custom Drafting",
        desc: "Receive a draft tailored to your organization's needs and industry standards.",
      },
      {
        title: "Review and Approve",
        desc: "Review the draft, suggest modifications if necessary, and finalize the agreement.",
      },
      {
        title: "Quick Delivery",
        desc: "Get your CBA delivered digitally within minutes, or opt for doorstep delivery.",
      },
    ],
    whyChooseUs: [
      {
        title: "Expert Legal Drafting",
        desc: "Benefit from the expertise of seasoned labour law professionals.",
      },
      {
        title: "Tailored Solutions",
        desc: "CBAs customized to meet the needs of your organization and workforce.",
      },
      {
        title: "Efficient Process",
        desc: "Save time with our streamlined drafting and delivery process.",
      },
      {
        title: "Affordable Pricing",
        desc: "High-quality agreements at cost-effective rates.",
      },
      {
        title: "Flexible Delivery Options",
        desc: "Choose between digital or doorstep delivery.",
      },
    ],
    faqs: [
      {
        question: "What is the purpose of a Collective Bargaining Agreement?",
        answer:
          "To formalize the terms of employment negotiated between an employer and a labour union representing employees.",
      },
      {
        question: "What should a Collective Bargaining Agreement include?",
        answer:
          "A CBA should include wages, benefits, working hours, grievance mechanisms, and any other terms mutually agreed upon by employers and employees.",
      },
      {
        question:
          "Is a Collective Bargaining Agreement legally binding in India?",
        answer:
          "Yes, a signed CBA is enforceable under the Industrial Disputes Act, 1947.",
      },
      {
        question: "How soon can I receive my CBA?",
        answer:
          "We can prepare and deliver your agreement within minutes, depending on the complexity.",
      },
      {
        question: "How will I receive my agreement?",
        answer:
          "You can choose between digital delivery or opt for doorstep delivery.",
      },
    ],
  },

  Wageagreement: {
    id: "Wageagreement",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Renting equipment? MyLegalInstant.com provides expertly crafted Equipment Rental Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is an Development agreement rental agreement?",
      description:
        "An Equipment Rental Agreement is a contract that outlines the terms for renting machinery, tools, or other equipment. It specifies usage conditions, maintenance responsibilities, and return requirements.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Rental Rates",
        description: "Clear pricing structure for equipment rental.",
      },
      {
        icon: "Calendar",
        title: "Usage Period",
        description: "Defined rental duration and extension terms.",
      },
      {
        icon: "Shield",
        title: "Equipment Protection",
        description: "Maintenance and damage liability terms.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Equipment Safety",
        desc: "Ensures proper handling and usage of equipment.",
      },
      {
        title: "Damage Protection",
        desc: "Clear terms for damage liability and insurance.",
      },
      {
        title: "Usage Guidelines",
        desc: "Specific instructions for equipment operation.",
      },
    ],
    legalFramework: [
      {
        title: "Equipment Safety Laws",
        desc: "Compliance with equipment safety regulations.",
      },
      {
        title: "Rental Regulations",
        desc: "Legal requirements for equipment rental.",
      },
    ],
    steps: [
      {
        title: "Equipment Details",
        desc: "Specify equipment information and condition.",
      },
      {
        title: "Rental Terms",
        desc: "Set rental duration and conditions.",
      },
      {
        title: "Complete Agreement",
        desc: "Generate your equipment rental agreement.",
      },
    ],
    whyChooseUs: [
      {
        title: "Equipment Expertise",
        desc: "Specialized in equipment rental agreements.",
      },
      {
        title: "Complete Protection",
        desc: "Comprehensive terms for equipment safety.",
      },
    ],
    faqs: [
      {
        question: "Is equipment insurance required?",
        answer:
          "Most equipment rentals require insurance coverage for damage protection.",
      },
      {
        question: "What about maintenance?",
        answer:
          "The agreement specifies maintenance responsibilities and procedures.",
      },
    ],
  },
  Agreementreferdisputes: {
    id: "Agreementreferdisputes",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Need a vehicle lease? MyLegalInstant.com provides expertly crafted Vehicle Lease Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is a Agreement refer disputes  agreement?",
      description:
        "A Vehicle Lease Agreement is a contract that details the terms for leasing a vehicle, including usage rights, maintenance responsibilities, and return conditions.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Lease Payments",
        description: "Monthly payment terms and security deposit.",
      },
      {
        icon: "Clock",
        title: "Lease Duration",
        description: "Specified lease term and mileage limits.",
      },
      {
        icon: "Shield",
        title: "Vehicle Protection",
        description: "Insurance and maintenance requirements.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Vehicle Protection",
        desc: "Safeguards against improper use and damage.",
      },
      {
        title: "Clear Terms",
        desc: "Defined usage limits and maintenance requirements.",
      },
      {
        title: "Legal Compliance",
        desc: "Ensures adherence to vehicle leasing laws.",
      },
    ],
    legalFramework: [
      {
        title: "Motor Vehicle Act",
        desc: "Compliance with vehicle leasing regulations.",
      },
      {
        title: "Insurance Requirements",
        desc: "Mandatory insurance coverage terms.",
      },
    ],
    steps: [
      {
        title: "Vehicle Information",
        desc: "Enter vehicle details and condition.",
      },
      {
        title: "Lease Terms",
        desc: "Specify lease duration and conditions.",
      },
      {
        title: "Complete Lease",
        desc: "Generate your vehicle lease agreement.",
      },
    ],
    whyChooseUs: [
      {
        title: "Vehicle Expertise",
        desc: "Specialized in vehicle lease agreements.",
      },
      {
        title: "Comprehensive Coverage",
        desc: "Complete protection for your vehicle lease.",
      },
    ],
    faqs: [
      {
        question: "What about mileage limits?",
        answer:
          "The agreement specifies annual mileage limits and excess charges.",
      },
      {
        question: "Who handles maintenance?",
        answer:
          "Maintenance responsibilities are clearly defined in the agreement.",
      },
    ],
  },

  Contractoragreement: {
    id: "Contractoragreement",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Need a Collective Bargaining Agreement? MyLegalInstant.com provides expertly crafted CBAs that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is a Collective Bargaining Agreement?",
      description:
        "A Collective Bargaining Agreement is a legally binding contract between an employer and a group of employees, represented by a trade union or employee association. It establishes the terms of employment, including wages, work hours, benefits, grievance mechanisms, and workplace policies.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Wages",
        description: "Salary scales, pay rates, and bonuses or incentives.",
      },
      {
        icon: "Clock",
        title: "Working Hours",
        description:
          "Specifications on regular hours, overtime, and shift patterns.",
      },
      {
        icon: "Shield",
        title: "Working Conditions",
        description:
          "Health and safety standards, workplace environment, and employee rights.",
      },
      {
        icon: "Briefcase",
        title: "Benefits",
        description:
          "Health insurance, retirement plans, paid leave, and other benefits.",
      },
      {
        icon: "FileText",
        title: "Grievance Procedures",
        description:
          "Processes for addressing employee complaints and disputes.",
      },
      {
        icon: "Users",
        title: "Union Rights",
        description:
          "The rights and responsibilities of the union representing employees.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Clarity",
        desc: "Clearly defines the roles and responsibilities of both employers and employees.",
      },
      {
        title: "Conflict Resolution",
        desc: "Structured mechanism to address grievances and disputes.",
      },
      {
        title: "Promotes Harmony",
        desc: "Encourages cooperation and understanding between employers and employees.",
      },
      {
        title: "Workforce Motivation",
        desc: "Builds trust and boosts employee morale by addressing their concerns fairly.",
      },
    ],
    legalFramework: [
      {
        title: "Industrial Disputes Act, 1947",
        desc: "Governs the collective bargaining process and ensures fair labour practices.",
      },
      {
        title: "Trade Unions Act, 1926",
        desc: "Recognizes trade unions as legal representatives of workers for collective bargaining.",
      },
      {
        title: "Factories Act, 1948",
        desc: "Sets standards for working conditions that can be negotiated in CBAs.",
      },
      {
        title: "Code on Wages, 2019",
        desc: "Guides wage negotiations and payment terms.",
      },
      {
        title: "Code on Industrial Relations, 2020",
        desc: "Regulates collective bargaining and employer-employee relations.",
      },
    ],
    steps: [
      {
        title: "Click 'Create Now'",
        desc: "Begin by clicking the 'Create Now' button to start your process.",
      },
      {
        title: "Share Your Requirements",
        desc: "Provide details about the workforce, union, and specific terms for the agreement.",
      },
      {
        title: "Legal Consultation",
        desc: "Our legal team ensures your CBA complies with applicable laws and protects your interests.",
      },
      {
        title: "Custom Drafting",
        desc: "Receive a draft tailored to your organization's needs and industry standards.",
      },
      {
        title: "Review and Approve",
        desc: "Review the draft, suggest modifications if necessary, and finalize the agreement.",
      },
      {
        title: "Quick Delivery",
        desc: "Get your CBA delivered digitally within minutes, or opt for doorstep delivery.",
      },
    ],
    whyChooseUs: [
      {
        title: "Expert Legal Drafting",
        desc: "Benefit from the expertise of seasoned labour law professionals.",
      },
      {
        title: "Tailored Solutions",
        desc: "CBAs customized to meet the needs of your organization and workforce.",
      },
      {
        title: "Efficient Process",
        desc: "Save time with our streamlined drafting and delivery process.",
      },
      {
        title: "Affordable Pricing",
        desc: "High-quality agreements at cost-effective rates.",
      },
      {
        title: "Flexible Delivery Options",
        desc: "Choose between digital or doorstep delivery.",
      },
    ],
    faqs: [
      {
        question: "What is the purpose of a Collective Bargaining Agreement?",
        answer:
          "To formalize the terms of employment negotiated between an employer and a labour union representing employees.",
      },
      {
        question: "What should a Collective Bargaining Agreement include?",
        answer:
          "A CBA should include wages, benefits, working hours, grievance mechanisms, and any other terms mutually agreed upon by employers and employees.",
      },
      {
        question:
          "Is a Collective Bargaining Agreement legally binding in India?",
        answer:
          "Yes, a signed CBA is enforceable under the Industrial Disputes Act, 1947.",
      },
      {
        question: "How soon can I receive my CBA?",
        answer:
          "We can prepare and deliver your agreement within minutes, depending on the complexity.",
      },
      {
        question: "How will I receive my agreement?",
        answer:
          "You can choose between digital delivery or opt for doorstep delivery.",
      },
    ],
  },

  jobtrainingagreement: {
    id: "jobtrainingagreement",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Renting equipment? MyLegalInstant.com provides expertly crafted Equipment Rental Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is an Development agreement rental agreement?",
      description:
        "An Equipment Rental Agreement is a contract that outlines the terms for renting machinery, tools, or other equipment. It specifies usage conditions, maintenance responsibilities, and return requirements.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Rental Rates",
        description: "Clear pricing structure for equipment rental.",
      },
      {
        icon: "Calendar",
        title: "Usage Period",
        description: "Defined rental duration and extension terms.",
      },
      {
        icon: "Shield",
        title: "Equipment Protection",
        description: "Maintenance and damage liability terms.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Equipment Safety",
        desc: "Ensures proper handling and usage of equipment.",
      },
      {
        title: "Damage Protection",
        desc: "Clear terms for damage liability and insurance.",
      },
      {
        title: "Usage Guidelines",
        desc: "Specific instructions for equipment operation.",
      },
    ],
    legalFramework: [
      {
        title: "Equipment Safety Laws",
        desc: "Compliance with equipment safety regulations.",
      },
      {
        title: "Rental Regulations",
        desc: "Legal requirements for equipment rental.",
      },
    ],
    steps: [
      {
        title: "Equipment Details",
        desc: "Specify equipment information and condition.",
      },
      {
        title: "Rental Terms",
        desc: "Set rental duration and conditions.",
      },
      {
        title: "Complete Agreement",
        desc: "Generate your equipment rental agreement.",
      },
    ],
    whyChooseUs: [
      {
        title: "Equipment Expertise",
        desc: "Specialized in equipment rental agreements.",
      },
      {
        title: "Complete Protection",
        desc: "Comprehensive terms for equipment safety.",
      },
    ],
    faqs: [
      {
        question: "Is equipment insurance required?",
        answer:
          "Most equipment rentals require insurance coverage for damage protection.",
      },
      {
        question: "What about maintenance?",
        answer:
          "The agreement specifies maintenance responsibilities and procedures.",
      },
    ],
  },
  logisticsservicesAgreement: {
    id: "logisticsservicesAgreement",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Need a vehicle lease? MyLegalInstant.com provides expertly crafted Vehicle Lease Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is a Agreement refer disputes  agreement?",
      description:
        "A Vehicle Lease Agreement is a contract that details the terms for leasing a vehicle, including usage rights, maintenance responsibilities, and return conditions.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Lease Payments",
        description: "Monthly payment terms and security deposit.",
      },
      {
        icon: "Clock",
        title: "Lease Duration",
        description: "Specified lease term and mileage limits.",
      },
      {
        icon: "Shield",
        title: "Vehicle Protection",
        description: "Insurance and maintenance requirements.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Vehicle Protection",
        desc: "Safeguards against improper use and damage.",
      },
      {
        title: "Clear Terms",
        desc: "Defined usage limits and maintenance requirements.",
      },
      {
        title: "Legal Compliance",
        desc: "Ensures adherence to vehicle leasing laws.",
      },
    ],
    legalFramework: [
      {
        title: "Motor Vehicle Act",
        desc: "Compliance with vehicle leasing regulations.",
      },
      {
        title: "Insurance Requirements",
        desc: "Mandatory insurance coverage terms.",
      },
    ],
    steps: [
      {
        title: "Vehicle Information",
        desc: "Enter vehicle details and condition.",
      },
      {
        title: "Lease Terms",
        desc: "Specify lease duration and conditions.",
      },
      {
        title: "Complete Lease",
        desc: "Generate your vehicle lease agreement.",
      },
    ],
    whyChooseUs: [
      {
        title: "Vehicle Expertise",
        desc: "Specialized in vehicle lease agreements.",
      },
      {
        title: "Comprehensive Coverage",
        desc: "Complete protection for your vehicle lease.",
      },
    ],
    faqs: [
      {
        question: "What about mileage limits?",
        answer:
          "The agreement specifies annual mileage limits and excess charges.",
      },
      {
        question: "Who handles maintenance?",
        answer:
          "Maintenance responsibilities are clearly defined in the agreement.",
      },
    ],
  },
};

export const corporate = {
  Shareholdersagreement: {
    id: "Shareholdersagreement",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Looking to rent out your flat or move into a new one? MyLegalInstant.com provides expertly crafted Flat Rent Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is a Shareholdersagreement Affidavit lease agreement?",
      description:
        "A Address Affidavit  is a legally binding document between a landlord (flat owner) and a tenant that outlines the terms and conditions for renting a residential flat. It protects the interests of both parties by defining their roles, rights, and responsibilities while ensuring compliance with applicable laws.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Financial Terms",
        description: "Specifies rent, security deposit, and payment terms.",
      },
      {
        icon: "Calendar",
        title: "Duration & Terms",
        description: "Details the lease duration and renewal conditions.",
      },
      {
        icon: "FileText",
        title: "Property Details",
        description: "Comprehensive details of the property and its condition.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Legal Protection",
        desc: "Safeguards both parties' rights and obligations under the law.",
      },
      {
        title: "Clear Expectations",
        desc: "Sets clear guidelines for property usage and maintenance.",
      },
      {
        title: "Dispute Prevention",
        desc: "Minimizes potential conflicts by documenting all terms clearly.",
      },
    ],
    legalFramework: [
      {
        title: "The Indian Contract Act, 1872",
        desc: "Establishes the legality of contracts and obligations between parties.",
      },
      {
        title: "Rent Control Act",
        desc: "Governs the relationship between landlords and tenants.",
      },
    ],
    steps: [
      {
        title: "Fill Details",
        desc: "Enter all required information about the property and parties involved.",
      },
      {
        title: "Review Terms",
        desc: "Carefully review all terms and conditions of the agreement.",
      },
      {
        title: "Generate & Download",
        desc: "Get your legally-verified agreement instantly.",
      },
    ],
    whyChooseUs: [
      {
        title: "Expert Legal Team",
        desc: "Agreements crafted by experienced legal professionals.",
      },
      {
        title: "Quick & Easy",
        desc: "Generate your agreement in minutes, not days.",
      },
    ],
    faqs: [
      {
        question: "Is a residential lease agreement mandatory?",
        answer:
          "While not legally mandatory, it's highly recommended to protect both parties' interests and prevent future disputes.",
      },
      {
        question: "What should be included in the agreement?",
        answer:
          "Key elements include rent amount, security deposit, duration, maintenance responsibilities, and terms of use.",
      },
    ],
  },
  Sharepurchaseagreement: {
    id: "Sharepurchaseagreement",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Need a Affidavit ForChange? MyLegalInstant.com provides expertly crafted Commercial Lease Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "what is  Share purchase agreement ?",
      description:
        "A Commercial Lease Agreement is a legally binding contract between a property owner and a business tenant that outlines the terms for renting commercial space. It includes specific provisions for business use while protecting both parties' interests.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Commercial Terms",
        description: "Detailed commercial rent and security deposit structure.",
      },
      {
        icon: "Calendar",
        title: "Business Usage",
        description:
          "Specific terms for commercial property usage and modifications.",
      },
      {
        icon: "FileText",
        title: "Business Provisions",
        description: "Special clauses for business operations and signage.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Business Protection",
        desc: "Safeguards your business interests and investment.",
      },
      {
        title: "Commercial Compliance",
        desc: "Ensures compliance with commercial property regulations.",
      },
      {
        title: "Business Operations",
        desc: "Clear terms for business operations and modifications.",
      },
    ],
    legalFramework: [
      {
        title: "Commercial Tenancy Laws",
        desc: "Covers specific regulations for commercial property leasing.",
      },
      {
        title: "Business Property Rights",
        desc: "Protects rights related to commercial property usage.",
      },
    ],
    steps: [
      {
        title: "Business Details",
        desc: "Enter business and property information.",
      },
      {
        title: "Commercial Terms",
        desc: "Specify commercial terms and conditions.",
      },
      {
        title: "Generate Agreement",
        desc: "Get your commercial lease agreement instantly.",
      },
    ],
    whyChooseUs: [
      {
        title: "Commercial Expertise",
        desc: "Specialized in commercial property agreements.",
      },
      {
        title: "Business-Focused",
        desc: "Terms tailored for business operations.",
      },
    ],
    faqs: [
      {
        question: "What makes commercial leases different?",
        answer:
          "Commercial leases include specific provisions for business operations, modifications, and commercial use of the property.",
      },
      {
        question: "Are commercial terms negotiable?",
        answer:
          "Yes, commercial lease terms are typically negotiable to accommodate specific business needs.",
      },
    ],
  },
  Jointventureagreement: {
    id: "Jointventureagreement",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Renting equipment? MyLegalInstant.com provides expertly crafted Equipment Rental Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is an Joint venture agreement  ?",
      description:
        "An Equipment Rental Agreement is a contract that outlines the terms for renting machinery, tools, or other equipment. It specifies usage conditions, maintenance responsibilities, and return requirements.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Rental Rates",
        description: "Clear pricing structure for equipment rental.",
      },
      {
        icon: "Calendar",
        title: "Usage Period",
        description: "Defined rental duration and extension terms.",
      },
      {
        icon: "Shield",
        title: "Equipment Protection",
        description: "Maintenance and damage liability terms.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Equipment Safety",
        desc: "Ensures proper handling and usage of equipment.",
      },
      {
        title: "Damage Protection",
        desc: "Clear terms for damage liability and insurance.",
      },
      {
        title: "Usage Guidelines",
        desc: "Specific instructions for equipment operation.",
      },
    ],
    legalFramework: [
      {
        title: "Equipment Safety Laws",
        desc: "Compliance with equipment safety regulations.",
      },
      {
        title: "Rental Regulations",
        desc: "Legal requirements for equipment rental.",
      },
    ],
    steps: [
      {
        title: "Equipment Details",
        desc: "Specify equipment information and condition.",
      },
      {
        title: "Rental Terms",
        desc: "Set rental duration and conditions.",
      },
      {
        title: "Complete Agreement",
        desc: "Generate your equipment rental agreement.",
      },
    ],
    whyChooseUs: [
      {
        title: "Equipment Expertise",
        desc: "Specialized in equipment rental agreements.",
      },
      {
        title: "Complete Protection",
        desc: "Comprehensive terms for equipment safety.",
      },
    ],
    faqs: [
      {
        question: "Is equipment insurance required?",
        answer:
          "Most equipment rentals require insurance coverage for damage protection.",
      },
      {
        question: "What about maintenance?",
        answer:
          "The agreement specifies maintenance responsibilities and procedures.",
      },
    ],
  },
  Mergeragreement: {
    id: "Mergeragreement",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Need a vehicle lease? MyLegalInstant.com provides expertly crafted Vehicle Lease Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is a Merger agreement?",
      description:
        "A Vehicle Lease Agreement is a contract that details the terms for leasing a vehicle, including usage rights, maintenance responsibilities, and return conditions.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Lease Payments",
        description: "Monthly payment terms and security deposit.",
      },
      {
        icon: "Clock",
        title: "Lease Duration",
        description: "Specified lease term and mileage limits.",
      },
      {
        icon: "Shield",
        title: "Vehicle Protection",
        description: "Insurance and maintenance requirements.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Vehicle Protection",
        desc: "Safeguards against improper use and damage.",
      },
      {
        title: "Clear Terms",
        desc: "Defined usage limits and maintenance requirements.",
      },
      {
        title: "Legal Compliance",
        desc: "Ensures adherence to vehicle leasing laws.",
      },
    ],
    legalFramework: [
      {
        title: "Motor Vehicle Act",
        desc: "Compliance with vehicle leasing regulations.",
      },
      {
        title: "Insurance Requirements",
        desc: "Mandatory insurance coverage terms.",
      },
    ],
    steps: [
      {
        title: "Vehicle Information",
        desc: "Enter vehicle details and condition.",
      },
      {
        title: "Lease Terms",
        desc: "Specify lease duration and conditions.",
      },
      {
        title: "Complete Lease",
        desc: "Generate your vehicle lease agreement.",
      },
    ],
    whyChooseUs: [
      {
        title: "Vehicle Expertise",
        desc: "Specialized in vehicle lease agreements.",
      },
      {
        title: "Comprehensive Coverage",
        desc: "Complete protection for your vehicle lease.",
      },
    ],
    faqs: [
      {
        question: "What about mileage limits?",
        answer:
          "The agreement specifies annual mileage limits and excess charges.",
      },
      {
        question: "Who handles maintenance?",
        answer:
          "Maintenance responsibilities are clearly defined in the agreement.",
      },
    ],
  },
};

export const commercial = {
  Supplyagreement: {
    id: "Supplyagreement",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Looking to rent out your flat or move into a new one? MyLegalInstant.com provides expertly crafted Flat Rent Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is a Supply agreement agreement?",
      description:
        "A Address Affidavit  is a legally binding document between a landlord (flat owner) and a tenant that outlines the terms and conditions for renting a residential flat. It protects the interests of both parties by defining their roles, rights, and responsibilities while ensuring compliance with applicable laws.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Financial Terms",
        description: "Specifies rent, security deposit, and payment terms.",
      },
      {
        icon: "Calendar",
        title: "Duration & Terms",
        description: "Details the lease duration and renewal conditions.",
      },
      {
        icon: "FileText",
        title: "Property Details",
        description: "Comprehensive details of the property and its condition.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Legal Protection",
        desc: "Safeguards both parties' rights and obligations under the law.",
      },
      {
        title: "Clear Expectations",
        desc: "Sets clear guidelines for property usage and maintenance.",
      },
      {
        title: "Dispute Prevention",
        desc: "Minimizes potential conflicts by documenting all terms clearly.",
      },
    ],
    legalFramework: [
      {
        title: "The Indian Contract Act, 1872",
        desc: "Establishes the legality of contracts and obligations between parties.",
      },
      {
        title: "Rent Control Act",
        desc: "Governs the relationship between landlords and tenants.",
      },
    ],
    steps: [
      {
        title: "Fill Details",
        desc: "Enter all required information about the property and parties involved.",
      },
      {
        title: "Review Terms",
        desc: "Carefully review all terms and conditions of the agreement.",
      },
      {
        title: "Generate & Download",
        desc: "Get your legally-verified agreement instantly.",
      },
    ],
    whyChooseUs: [
      {
        title: "Expert Legal Team",
        desc: "Agreements crafted by experienced legal professionals.",
      },
      {
        title: "Quick & Easy",
        desc: "Generate your agreement in minutes, not days.",
      },
    ],
    faqs: [
      {
        question: "Is a residential lease agreement mandatory?",
        answer:
          "While not legally mandatory, it's highly recommended to protect both parties' interests and prevent future disputes.",
      },
      {
        question: "What should be included in the agreement?",
        answer:
          "Key elements include rent amount, security deposit, duration, maintenance responsibilities, and terms of use.",
      },
    ],
  },
  Distributionagreemen: {
    id: "Distributionagreemen",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Need a Affidavit ForChange? MyLegalInstant.com provides expertly crafted Commercial Lease Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "what is  Distribution agreemen ?",
      description:
        "A Commercial Lease Agreement is a legally binding contract between a property owner and a business tenant that outlines the terms for renting commercial space. It includes specific provisions for business use while protecting both parties' interests.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Commercial Terms",
        description: "Detailed commercial rent and security deposit structure.",
      },
      {
        icon: "Calendar",
        title: "Business Usage",
        description:
          "Specific terms for commercial property usage and modifications.",
      },
      {
        icon: "FileText",
        title: "Business Provisions",
        description: "Special clauses for business operations and signage.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Business Protection",
        desc: "Safeguards your business interests and investment.",
      },
      {
        title: "Commercial Compliance",
        desc: "Ensures compliance with commercial property regulations.",
      },
      {
        title: "Business Operations",
        desc: "Clear terms for business operations and modifications.",
      },
    ],
    legalFramework: [
      {
        title: "Commercial Tenancy Laws",
        desc: "Covers specific regulations for commercial property leasing.",
      },
      {
        title: "Business Property Rights",
        desc: "Protects rights related to commercial property usage.",
      },
    ],
    steps: [
      {
        title: "Business Details",
        desc: "Enter business and property information.",
      },
      {
        title: "Commercial Terms",
        desc: "Specify commercial terms and conditions.",
      },
      {
        title: "Generate Agreement",
        desc: "Get your commercial lease agreement instantly.",
      },
    ],
    whyChooseUs: [
      {
        title: "Commercial Expertise",
        desc: "Specialized in commercial property agreements.",
      },
      {
        title: "Business-Focused",
        desc: "Terms tailored for business operations.",
      },
    ],
    faqs: [
      {
        question: "What makes commercial leases different?",
        answer:
          "Commercial leases include specific provisions for business operations, modifications, and commercial use of the property.",
      },
      {
        question: "Are commercial terms negotiable?",
        answer:
          "Yes, commercial lease terms are typically negotiable to accommodate specific business needs.",
      },
    ],
  },
  Franchiseagreement: {
    id: "Franchiseagreement",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Renting equipment? MyLegalInstant.com provides expertly crafted Equipment Rental Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is an Franchise agreement   ?",
      description:
        "An Equipment Rental Agreement is a contract that outlines the terms for renting machinery, tools, or other equipment. It specifies usage conditions, maintenance responsibilities, and return requirements.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Rental Rates",
        description: "Clear pricing structure for equipment rental.",
      },
      {
        icon: "Calendar",
        title: "Usage Period",
        description: "Defined rental duration and extension terms.",
      },
      {
        icon: "Shield",
        title: "Equipment Protection",
        description: "Maintenance and damage liability terms.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Equipment Safety",
        desc: "Ensures proper handling and usage of equipment.",
      },
      {
        title: "Damage Protection",
        desc: "Clear terms for damage liability and insurance.",
      },
      {
        title: "Usage Guidelines",
        desc: "Specific instructions for equipment operation.",
      },
    ],
    legalFramework: [
      {
        title: "Equipment Safety Laws",
        desc: "Compliance with equipment safety regulations.",
      },
      {
        title: "Rental Regulations",
        desc: "Legal requirements for equipment rental.",
      },
    ],
    steps: [
      {
        title: "Equipment Details",
        desc: "Specify equipment information and condition.",
      },
      {
        title: "Rental Terms",
        desc: "Set rental duration and conditions.",
      },
      {
        title: "Complete Agreement",
        desc: "Generate your equipment rental agreement.",
      },
    ],
    whyChooseUs: [
      {
        title: "Equipment Expertise",
        desc: "Specialized in equipment rental agreements.",
      },
      {
        title: "Complete Protection",
        desc: "Comprehensive terms for equipment safety.",
      },
    ],
    faqs: [
      {
        question: "Is equipment insurance required?",
        answer:
          "Most equipment rentals require insurance coverage for damage protection.",
      },
      {
        question: "What about maintenance?",
        answer:
          "The agreement specifies maintenance responsibilities and procedures.",
      },
    ],
  },
  Serviceagreement: {
    id: "Serviceagreement",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Need a vehicle lease? MyLegalInstant.com provides expertly crafted Vehicle Lease Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is a Service agreement?",
      description:
        "A Vehicle Lease Agreement is a contract that details the terms for leasing a vehicle, including usage rights, maintenance responsibilities, and return conditions.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Lease Payments",
        description: "Monthly payment terms and security deposit.",
      },
      {
        icon: "Clock",
        title: "Lease Duration",
        description: "Specified lease term and mileage limits.",
      },
      {
        icon: "Shield",
        title: "Vehicle Protection",
        description: "Insurance and maintenance requirements.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Vehicle Protection",
        desc: "Safeguards against improper use and damage.",
      },
      {
        title: "Clear Terms",
        desc: "Defined usage limits and maintenance requirements.",
      },
      {
        title: "Legal Compliance",
        desc: "Ensures adherence to vehicle leasing laws.",
      },
    ],
    legalFramework: [
      {
        title: "Motor Vehicle Act",
        desc: "Compliance with vehicle leasing regulations.",
      },
      {
        title: "Insurance Requirements",
        desc: "Mandatory insurance coverage terms.",
      },
    ],
    steps: [
      {
        title: "Vehicle Information",
        desc: "Enter vehicle details and condition.",
      },
      {
        title: "Lease Terms",
        desc: "Specify lease duration and conditions.",
      },
      {
        title: "Complete Lease",
        desc: "Generate your vehicle lease agreement.",
      },
    ],
    whyChooseUs: [
      {
        title: "Vehicle Expertise",
        desc: "Specialized in vehicle lease agreements.",
      },
      {
        title: "Comprehensive Coverage",
        desc: "Complete protection for your vehicle lease.",
      },
    ],
    faqs: [
      {
        question: "What about mileage limits?",
        answer:
          "The agreement specifies annual mileage limits and excess charges.",
      },
      {
        question: "Who handles maintenance?",
        answer:
          "Maintenance responsibilities are clearly defined in the agreement.",
      },
    ],
  },
};

export const commercialEst = {

  Shopoutlet: {
    id: "Shopoutlet",
    hero: {
      title: "Welcome to",
      subtitle: " MyLegalInstant.com",
      description:
        "At MyLegalinstant.com, we understand the importance of having a solid legal foundation for your business operations. Our Shop/Outlet Lease Agreement service provides you with customizable, legally sound agreements tailored to meet your specific needs, ensuring a smooth leasing process.",
      buttonText: "Create Now",
      buttonLink: "/create-shop-outlet-lease-agreement",
      trustIndicators: ["Legally Verified", "Instant Delivery", "24/7 Support"],
    },
    whatIs: {
      title: "What is a Shop/Outlet Lease Agreement?",
      subtitle: "Shop/Outlet Lease Agreement",
      description:
        "A Shop/Outlet Lease Agreement is a legally binding contract between a landlord (lessor) and a tenant (lessee) that outlines the terms and conditions under which commercial property is rented for retail purposes. This agreement serves as a vital document that protects the interests of both parties, detailing aspects such as rental terms, property specifics, duration of the lease, and obligations related to maintenance and repairs.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "Certificate",
        title: "Legal Protection",
        desc: "Safeguards the rights and interests of both landlords and tenants.",
      },
      {
        icon: "Document",
        title: "Financial Transparency",
        desc: "Establishes clear rent payment schedules and conditions, helping you manage your finances effectively.",
      },
      {
        icon: "Handshake",
        title: "Customizable Terms",
        desc: "Tailor the lease agreement to fit your specific business needs, including duration, rental amount, and permitted uses.",
      },
      {
        icon: "Shield",
        title: "Business Security",
        desc: "Provides stability by securing a location for your retail operations, allowing you to focus on growing your business.",
      },
      {
        icon: "Gavel",
        title: "Dispute Resolution",
        desc: "Provides a clear framework for addressing conflicts or breaches.",
      },
      {
        icon: "Checkmark",
        title: "Compliance with Regulations",
        desc: "Ensures adherence to local laws governing commercial leases, protecting both parties from legal complications.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Tailored Agreements",
        desc: "Comprehensive customization options to address your specific business needs.",
      },
      {
        title: "Legally Compliant",
        desc: "Agreements are fully compliant with Indian laws, including state-specific regulations.",
      },
      {
        title: "Hassle-Free E-Stamping",
        desc: "Save time with integrated e-stamp paper solutions.",
      },
      {
        title: "Secure E-Signatures",
        desc: "Aadhaar-based e-signatures ensure validity and convenience.",
      },
      {
        title: "Expert Guidance",
        desc: "Access legal professionals for clarity and assurance.",
      },
      {
        title: "Time-Saving Platform",
        desc: "Simplify the agreement process and get it done within minutes.",
      },
      {
        title: "Physical and Digital Delivery",
        desc: "Receive both digital and hard copies for your records.",
      },
      {
        title: "Safe and Secure",
        desc: "Your data and documents are handled with utmost confidentiality.",
      },
      {
        title: "Affordable Pricing",
        desc: "Cost-effective solutions for businesses of all sizes.",
      },
      {
        title: "User-Friendly Interface",
        desc: "Intuitive platform for a seamless experience.",
      },
      {
        title: "Long-Term Support",
        desc: "Secure record-keeping and easy access to your agreements whenever needed.",
      },
    ],
    legalFramework: [
      {
        title: "The Indian Contract Act, 1872",
        desc: "Regulates the formation and enforceability of contracts, ensuring all lease agreements are legally sound.",
      },
      {
        title: "The Transfer of Property Act, 1882",
        desc: "Covers the lease of immovable property, outlining the rights and obligations of both the landlord and tenant.",
      },
      {
        title: "State-Specific Rent Control Acts",
        desc: "Ensure fair rental practices and regulate lease agreements according to individual state policies.",
      },
      {
        title: "The Registration Act, 1908",
        desc: "Mandates registration of lease agreements that exceed a specified duration (typically 11 months).",
      },
      {
        title: "Parties Involved",
        desc: "Identification of both landlord and tenant, including full names and addresses.",
      },
      {
        title: "Property Description",
        desc: "Detailed information about the leased property, including location, size, and layout.",
      },
      {
        title: "Lease Duration",
        desc: "Specifies the length of the lease, usually ranging from three to nine years.",
      },
      {
        title: "Rent Terms",
        desc: "Clearly outlines the rental amount, payment schedule, mode of payment, and increment conditions.",
      },
      {
        title: "Use of Property",
        desc: "Defines permitted uses of the property and highlights any usage restrictions.",
      },
      {
        title: "Maintenance Responsibilities",
        desc: "Details responsibilities for property maintenance, repairs, and upkeep.",
      },
      {
        title: "Termination Clauses",
        desc: "States the conditions under which the lease can be terminated, including notice periods and penalties.",
      },
      {
        title: "Renewal Options",
        desc: "Outlines terms for renewing the lease, including changes to rent or conditions.",
      },
    ],
    steps: [
      {
        title: "Start the Process",
        desc: "Click the “Create Now” button to begin.",
      },
      {
        title: "Choose Your Agreement Type",
        desc: "Select Shop/Outlet Lease Agreement from our range of options.",
      },
      {
        title: "Provide Property Details",
        desc: "Enter the location, size, and specific details of the shop or outlet.",
      },
      {
        title: "Specify Lease Terms",
        desc: "Define rent, duration, renewal terms, and other key conditions.",
      },
      {
        title: "Customize Your Agreement",
        desc: "Add clauses like maintenance responsibilities, subleasing permissions, or parking rights.",
      },
      {
        title: "Review the Agreement",
        desc: "Check for accuracy and completeness.",
      },
      {
        title: "E-Stamp Integration",
        desc: "Use our platform to seamlessly integrate e-stamp paper for legal compliance.",
      },
      {
        title: "E-Signature Options",
        desc: "Utilize Aadhaar-based e-signatures for a secure and legally valid signing process.",
      },
      {
        title: "Expert Legal Advice",
        desc: "Consult our legal experts for guidance.",
      },
      {
        title: "Delivery Options",
        desc: "Digital Copy: Available instantly for download. Hard Copy: Delivered to your address within a few working days.",
      },
    ],
    whyChooseUs: [
      {
        title: "Comprehensive Customization",
        desc: "Tailor agreements to meet specific business requirements.",
      },
      {
        title: "Legal Compliance",
        desc: "Fully compliant with Indian legal standards, including state-specific laws.",
      },
      {
        title: "Integrated E-Stamping",
        desc: "Save time with hassle-free e-stamp solutions.",
      },
      {
        title: "Secure E-Signatures",
        desc: "Aadhaar-based digital signatures ensure legal validity.",
      },
      {
        title: "Expert Support",
        desc: "Access legal consultation for added confidence.",
      },
      {
        title: "Time Efficiency",
        desc: "Complete your agreement in minutes with our intuitive platform.",
      },
      {
        title: "Convenient Delivery",
        desc: "Receive digital and physical copies as per your preference.",
      },
      {
        title: "Secure Storage",
        desc: "Keep your documents safe and accessible with our secure storage solutions.",
      },
      {
        title: "Cost-Effective",
        desc: "Affordable pricing without compromising on quality.",
      },
      {
        title: "User-Friendly Platform",
        desc: "Easy navigation and step-by-step guidance.",
      },
      {
        title: "Ongoing Support",
        desc: "Assistance available for renewals, amendments, or other needs.",
      },
    ],
    faqs: [
      {
        question: "How is a lease agreement different from a leave and licence agreement?",
        answer: "A lease agreement creates a legal interest in the property for the lessee, while a leave and licence agreement only grants permission to use the property without creating tenancy rights.",
      },
      {
        question: "What distinguishes a shop lease from other commercial leases?",
        answer: "A shop lease is specifically tailored for retail spaces and includes terms that cater to retail operations, whereas other commercial leases may cover offices, warehouses, or other types of properties.",
      },
      {
        question: "Is registration of a shop lease agreement mandatory?",
        answer: "Yes, lease agreements exceeding 11 months must be registered under the Registration Act, 1908.",
      },
      {
        question: "Can I customize the agreement to include exclusive usage rights?",
        answer: "Absolutely! Our platform offers extensive customization to suit your unique business needs.",
      },
      {
        question: "Are e-stamped and e-signed agreements valid in India?",
        answer: "Yes, both e-stamped and Aadhaar-based e-signed agreements are legally valid under Indian law.",
      },
      {
        question: "What if I need to terminate the lease early?",
        answer: "Termination clauses can be included in the agreement to define the conditions and process for early termination.",
      },
      {
        question: "Is an e-stamped shop lease legally valid?",
        answer: "Yes, e-stamped agreements are recognized as legally valid under Indian law.",
      },
      {
        question: "Can I negotiate terms within my shop lease?",
        answer: "Yes! You can tailor your agreement according to your specific requirements with our customizable platform.",
      },
      {
        question: "How quickly can I expect my agreement?",
        answer: "You’ll receive a digital copy instantly, and a physical hard copy will be delivered within a few working days.",
      },
      {
        question: "Can I seek legal advice during the process?",
        answer: "Yes, our legal experts are available to guide you every step of the way.",
      },
    ],
  },

  leaveandLicence: {
    id: "leaveandLicence",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Looking for a legal agreement to occupy a commercial property without ownership transfer? MyLegalInstant.com provides legally sound Leave and License Agreements tailored to your business needs.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is a Shop/Outlet Leave and License Agreement?",
      subtitle: "Shop/Outlet Leave and License Agreement",
      description:
        "A Shop/Outlet Leave and License Agreement is a legal document that allows a licensee to occupy and use a commercial property (like a shop or outlet) owned by a licensor for a specified period, without transferring any ownership rights.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "Shield",
        title: "Legal Protection",
        desc:
          "Clearly outlines the terms, preventing disputes between licensor and licensee.",
      },
      {
        icon: "Repeat",
        title: "Flexibility",
        desc:
          "Offers an arrangement without conferring tenancy rights, allowing businesses to operate in prime locations without long-term commitments and easy termination as per agreed terms.",
      },
      {
        icon: "FileText",
        title: "Compliance",
        desc:
          "Ensures adherence to Indian laws governing commercial agreements, avoiding penalties and legal complications.",
      },
      {
        icon: "UserCheck",
        title: "Clarity of Roles",
        desc:
          "Clearly defines the rights, duties, and liabilities of both the licensor and licensee, reducing ambiguities.",
      },
      {
        icon: "DollarSign",
        title: "Cost Efficiency",
        desc:
          "Avoids long-term financial commitments associated with leasing, making it an economical option for temporary arrangements.",
      },
      {
        icon: "CheckCircle",
        title: "Ease of Enforcement",
        desc:
          "Provides a straightforward legal framework for resolving disputes or addressing breaches of agreement.",
      },
      {
        icon: "Lock",
        title: "Enhanced Security",
        desc:
          "Protects the licensor’s ownership rights while granting controlled access to the licensee for specific purposes.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Territorial Exclusivity",
        desc: "Clearly define geographic areas or product categories for distribution.",
      },
      {
        title: "Confidentiality and IP Protection",
        desc: "Secure sensitive business information and intellectual property rights.",
      },
      {
        title: "Compliance",
        desc: "Ensure adherence to Indian laws governing commercial transactions.",
      },
    ],
    legalFramework: [
      {
        title: "Indian Contract Act, 1872",
        desc: "Establishes the legality of contracts and obligations.",
      },
      {
        title: "Transfer of Property Act, 1882",
        desc: "Governs property transfer and ownership rights.",
      },
      {
        title: "Shops and Establishments Act",
        desc: "Regulates commercial establishments in various states.",
      },
      {
        title: "Registration Act, 1908",
        desc: "Ensures legal enforceability through registration.",
      },
    ],
    steps: [
      {
        title: 'Click the "Create Now" Button',
        desc: "Start by clicking on the 'Create Now' button.",
      },
      {
        title: "Select Your Agreement",
        desc: "Choose from our customizable Leave and License Agreement templates.",
      },
      {
        title: "Fill in the Details",
        desc: "Provide property details, licensor/licensee information, and fees.",
      },
      {
        title: "Customize Your Agreement",
        desc: "Add specific clauses to tailor the agreement to your needs.",
      },
      {
        title: "Review and Finalize",
        desc: "Ensure accuracy before proceeding.",
      },
      {
        title: "E-Stamp Paper Integration",
        desc: "We integrate legally valid e-stamping into your agreement.",
      },
      {
        title: "E-Signature Options",
        desc: "Use Aadhaar-based e-signatures for legal validity.",
      },
      {
        title: "Legal Consultation",
        desc: "Get expert legal advice for additional assurance.",
      },
      {
        title: "Delivery",
        desc: "Receive a digital copy instantly and a hard copy within a few working days.",
      },
    ],
    whyChooseUs: [
      {
        title: "Comprehensive Customization",
        desc: "Tailor your agreement with a wide range of clauses.",
      },
      {
        title: "Legally Valid E-Stamping",
        desc: "Ensures compliance with stamp paper requirements.",
      },
      {
        title: "Aadhaar-Based E-Signatures",
        desc: "Offers legally valid and secure digital signing options.",
      },
      {
        title: "Professional Guidance",
        desc: "Access expert legal consultation for added assurance.",
      },
      {
        title: "Fast Digital Delivery",
        desc: "Receive agreements instantly in digital format.",
      },
      {
        title: "Doorstep Delivery",
        desc: "Get physical copies delivered to your address within a few days.",
      },
      {
        title: "User-Friendly Interface",
        desc: "Complete your agreements seamlessly with our intuitive platform.",
      },
      {
        title: "Secure Record Keeping",
        desc: "Benefit from safe and accessible document storage.",
      },
      {
        title: "Cost-Effective",
        desc: "Affordable pricing structure ensures value for money.",
      },
    ],
    faqs: [
      {
        question:
          "What is the difference between a lease and a leave and licence agreement?",
        answer:
          "A lease transfers legal interest in the property, while a leave and licence agreement grants permission to use the property without tenancy rights.",
      },
      {
        question: "What is the duration of a Leave and License Agreement?",
        answer: "Typically ranges from 11 months to 5 years, but may vary.",
      },
      {
        question: "Can I check the validity of the e-stamp paper?",
        answer:
          "Yes, on the official portal of Stock Holding Corporation of India and respective state government portals.",
      },
      {
        question: "What is the validity of an e-signature?",
        answer:
          "E-signatures are legally valid in India when conducted using Aadhaar-based authentication.",
      },
      {
        question: "Can I customize my agreement on MyLegalInstant.com?",
        answer:
          "Absolutely! Our platform offers extensive customization options.",
      },
      {
        question: "Is registration mandatory?",
        answer: "Yes, registration is essential for legal enforceability.",
      },
      {
        question: "What documents are required for registration?",
        answer:
          "Identification proof, proof of address, and other relevant documents as required by local authorities.",
      },
      {
        question: "Can I modify the agreement after it is created?",
        answer: "Yes, modifications can be made before final submission.",
      },
      {
        question: "What happens if I want to terminate the agreement early?",
        answer:
          "Early termination is possible based on mutual consent or as specified in the agreement.",
      },
      {
        question: "How soon will I receive my agreement?",
        answer:
          "Digital copies are available instantly; hard copies arrive within a few working days.",
      },
      {
        question: "How secure is the platform?",
        answer:
          "MyLegalInstant.com follows strict security protocols to protect data and legal documents.",
      },
      {
        question: "Is MyLegalInstant.com cost-effective?",
        answer:
          "Yes, our services are affordably priced to offer the best value for businesses and individuals.",
      },
    ],
  },

  Officecompany: {
    id: "Officecompany",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "At MyLegalInstant.com, we specialize in creating tailored legal documents, including Office/Company/Entity Leave and Licence Agreements, under our Commercial Establishment Agreements segment. Our service ensures that your agreements are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is an Office/Company/Entity Leave and Licence Agreement?",
      subtitle: "an Office/Company/Entity Leave and Licence Agreement",
      description:
        "An Office/Company/Entity Leave and Licence Agreement is a legal document that allows a licensor (property owner) to grant permission to a licensee (company or business entity) to use commercial office space for a specific purpose and duration, without transferring ownership or tenancy rights.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "Shield",
        title: "Legal Protection",
        desc:
          "Safeguards the interests of both the licensor and licensee, reducing the potential for disputes.",
      },
      {
        icon: "Repeat",
        title: "Flexibility",
        desc:
          "Provides a temporary arrangement that can be easily terminated, without conferring tenancy rights.",
      },
      {
        icon: "FileText",
        title: "Compliance",
        desc:
          "Ensures compliance with Indian laws governing commercial agreements, protecting you from legal issues.",
      },
      {
        icon: "UserCheck",
        title: "Clarity of Roles",
        desc:
          "Clearly outlines the roles, duties, and obligations of both parties, minimizing misunderstandings.",
      },
      {
        icon: "DollarSign",
        title: "Cost Efficiency",
        desc:
          "More affordable than long-term leasing options, making it an ideal choice for businesses seeking temporary office space.",
      },
      {
        icon: "CheckCircle",
        title: "Enforceability",
        desc:
          "Establishes a clear legal framework to address any disputes or breaches of the agreement.",
      },
      {
        icon: "Lock",
        title: "Enhanced Security",
        desc:
          "Maintains control over the property while allowing the licensee to use it for specified purposes.",
      },

    ],
    whyNeedAgreement: [
      {
        title: "Lease vs Licence",
        desc: "A leave and licence agreement is distinct from a lease agreement in that it does not confer the same rights of possession to the licensee as a lease would.",
      },
      {
        title: "Security Deposit",
        desc: "The agreement may specify a security deposit amount that is refundable at the end of the term, subject to conditions.",
      },
      {
        title: "Termination Clause",
        desc: "Clear guidelines on the notice period and conditions under which either party can terminate the agreement.",
      },
    ],
    legalFramework: [
      {
        title: "Indian Contract Act, 1872",
        desc: "Governs the fundamental legal principles of agreements.",
      },
      {
        title: "Transfer of Property Act, 1882",
        desc: "Defines property rights and ownership distinctions.",
      },
      {
        title: "Shops and Establishments Act",
        desc: "Ensures compliance with commercial regulations in various states.",
      },
      {
        title: "Registration Act, 1908",
        desc: "Mandates proper registration of agreements.",
      },
    ],
    steps: [
      {
        title: "Click on the \"Create Now\" Button",
        desc: "Begin your journey with just one click.",
      },
      {
        title: "Select Your Agreement",
        desc: "Choose from our wide range of customizable Leave and Licence Agreements tailored to office spaces.",
      },
      {
        title: "Fill in the Details",
        desc: "Provide essential details such as office address, licensee (company/entity) information, fees, and duration.",
      },
      {
        title: "Customize Your Agreement",
        desc: "Add clauses specific to your requirements, such as service charges, maintenance, or operating hours.",
      },
      {
        title: "Review and Finalize",
        desc: "Ensure all details are accurate and complete.",
      },
      {
        title: "E-Stamp Paper Integration",
        desc: "Our platform integrates e-stamp paper, ensuring your agreement complies with Indian legal requirements and is valid for all purposes.",
      },
      {
        title: "E-Signature Options",
        desc: "We offer secure e-signature options using Aadhaar-based authentication, ensuring your agreement is legally valid and compliant with Indian laws.",
      },
      {
        title: "Legal Consultation",
        desc: "Get expert legal advice for added peace of mind.",
      },
      {
        title: "Delivery",
        desc: "Receive a digital copy within minutes and physical copies delivered to your doorstep within a few working days.",
      },
    ],
    whyChooseUs: [
      {
        title: "Extensive Customization",
        desc: "Customize your agreement with a variety of clauses, from service charges to specific operational requirements.",
      },
      {
        title: "Legally Valid E-Stamping",
        desc: "Complies with Indian legal requirements, ensuring your agreement is enforceable.",
      },
      {
        title: "Aadhaar-Based E-Signatures",
        desc: "Provides legally valid and secure digital signing options.",
      },
      {
        title: "Expert Legal Guidance",
        desc: "Access professional legal advice to ensure your agreement is accurate and fully compliant.",
      },
      {
        title: "Fast Digital Delivery",
        desc: "Get your agreement in digital format within minutes.",
      },
      {
        title: "Physical Delivery",
        desc: "Receive hard copies at your address within a few working days.",
      },
      {
        title: "Secure Record Keeping",
        desc: "Benefit from safe and accessible storage for all your legal documents.",
      },
      {
        title: "User-Friendly Platform",
        desc: "Complete agreements quickly with our intuitive, easy-to-navigate interface.",
      },
      {
        title: "Time Efficiency",
        desc: "Save time on paperwork, with agreements ready in minutes.",
      },
      {
        title: "Cost-Effective",
        desc: "Affordable pricing ensures you get maximum value.",
      },
      {
        title: "Comprehensive Documentation Portal",
        desc: "The most extensive and customizable legal documentation portal to meet your specific business needs.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between a lease and a leave and licence agreement?",
        answer:
          "A lease grants a legal interest in the property to the lessee, while a leave and licence agreement allows the licensee to use the property without creating tenancy rights.",
      },
      {
        question: "Is an e-stamped agreement legally valid in India?",
        answer:
          "Yes, e-stamped agreements are legally valid and enforceable under Indian law. You can verify the validity of the e-stamp paper on the official portal of Stock Holding Corporation of India and respective state government portals.",
      },
      {
        question: "Can I customize my agreement on MyLegalinstant.com?",
        answer:
          "Yes, our platform offers extensive customization options to tailor your agreement to your exact requirements.",
      },
      {
        question: "How soon will I receive my agreement?",
        answer:
          "You’ll receive a digital copy within minutes, and physical copy will be delivered to your address within a few working days.",
      },
      {
        question: "Is registration mandatory?",
        answer:
          "Yes, registering the agreement is essential for it to be legally enforceable.",
      },
      {
        question: "What documents are required for registration?",
        answer:
          "Identification proof, proof of address, and other relevant documents as specified by local authorities.",
      },
      {
        question: "Can I modify the agreement after it is created?",
        answer:
          "Yes, you can do modifications to the agreement before you finally submit it.",
      },
      {
        question: "What is the validity of an e-signature?",
        answer:
          "E-signatures are legally valid in India when using Aadhaar-based authentication, ensuring compliance with the Indian Information Technology Act, 2000.",
      },
      {
        question: "How secure is the platform?",
        answer:
          "MyLegalinstant.com ensures top-tier security protocols to protect your data and documents, fully complying with privacy laws.",
      },
      {
        question: "Is MyLegalinstant.com cost-effective?",
        answer:
          "Yes, we offer affordable pricing, making it a cost-effective choice for businesses needing legal documentation.",
      },
    ],
  },

  Commercial: {
    id: "Commercial",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "we specialize in creating comprehensive Commercial Lease Agreements that cater to your specific needs, ensuring a smooth and legally sound leasing process. Our user-friendly platform makes it easy to draft, customize, and finalize your lease agreement efficiently.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is a Commercial Lease Agreement?",
      subtitle: "a Commercial Lease Agreement",
      description:
        "A Commercial Lease Agreement is a legally binding contract between a landlord (lessor) and a tenant (lessee) that outlines the terms and conditions for renting commercial property. This type of agreement is essential for businesses seeking office spaces, retail locations, warehouses, or any other commercial facilities. It covers key aspects like rent, duration, usage, rights, responsibilities, and obligations of both parties, providing clarity and protection throughout the lease term.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "Edit",
        title: "Tailored Agreements",
        desc: "Comprehensive customization options to address your specific business needs.",
      },
      {
        icon: "Scale",
        title: "Legally Compliant",
        desc: "Agreements are fully compliant with Indian laws, including state-specific regulations.",
      },
      {
        icon: "FilePlus",
        title: "Hassle-Free E-Stamping",
        desc: "Save time with integrated e-stamp paper solutions.",
      },
      {
        icon: "PenTool",
        title: "Secure E-Signatures",
        desc: "Aadhaar-based e-signatures ensure validity and convenience.",
      },
      {
        icon: "UserCheck",
        title: "Expert Guidance",
        desc: "Access legal professionals for clarity and assurance.",
      },
      {
        icon: "Clock",
        title: "Time-Saving Platform",
        desc: "Simplify the agreement process and get it done within minutes.",
      },
      {
        icon: "Printer",
        title: "Physical and Digital Delivery",
        desc: "Receive both digital and hard copies for your records.",
      },
      {
        icon: "ShieldCheck",
        title: "Safe and Secure",
        desc: "Your data and documents are handled with utmost confidentiality.",
      },
      {
        icon: "BadgeIndianRupee",
        title: "Affordable Pricing",
        desc: "Cost-effective solutions for businesses of all sizes.",
      },
      {
        icon: "LayoutDashboard",
        title: "User-Friendly Interface",
        desc: "Intuitive platform for a seamless experience.",
      },
      {
        icon: "Archive",
        title: "Long-Term Support",
        desc: "Secure record-keeping and easy access to your agreements whenever needed.",
      },
    ],

    whyNeedAgreement: [
      {
        title: "Legal Protection",
        desc: "Safeguards both parties' rights and obligations under the law.",
      },
      {
        title: "Clear Expectations",
        desc: "Sets clear guidelines for property usage and maintenance.",
      },
      {
        title: "Dispute Prevention",
        desc: "Minimizes potential conflicts by documenting all terms clearly.",
      },
    ],
    legalFramework: [
      {
        title: "The Indian Contract Act, 1872",
        desc: "Regulates the formation and enforceability of contracts, ensuring all lease agreements are legally sound.",
      },
      {
        title: "The Transfer of Property Act, 1882",
        desc: "Covers the lease of immovable property, outlining the rights and obligations of both the landlord and tenant.",
      },
      {
        title: "State-Specific Rent Control Acts",
        desc: "Ensure fair rental practices and regulate lease agreements according to individual state policies.",
      },
      {
        title: "The Registration Act, 1908",
        desc: "Mandates registration of lease agreements that exceed a specified duration (typically 11 months).",
      },
      {
        title: "Parties Involved",
        desc: "Identification of both landlord and tenant, including full names and addresses.",
      },
      {
        title: "Property Description",
        desc: "Detailed information about the leased property, including location, size, and layout.",
      },
      {
        title: "Lease Duration",
        desc: "Specifies the length of the lease, usually ranging from three to nine years.",
      },
      {
        title: "Rent Terms",
        desc: "Clearly outlines the rental amount, payment schedule, mode of payment, and increment conditions.",
      },
      {
        title: "Use of Property",
        desc: "Defines permitted uses of the property and highlights any usage restrictions.",
      },
      {
        title: "Maintenance Responsibilities",
        desc: "Details responsibilities for property maintenance, repairs, and upkeep.",
      },
      {
        title: "Termination Clauses",
        desc: "States the conditions under which the lease can be terminated, including notice periods and penalties.",
      },
      {
        title: "Renewal Options",
        desc: "Outlines terms for renewing the lease, including changes to rent or conditions.",
      },
    ],
    steps: [
      {
        title: "Get Started",
        desc: "Click the “Create Now” button to initiate the process.",
      },
      {
        title: "Choose Your Agreement Type",
        desc: "Select 'Commercial Lease Agreement' from our extensive range of options.",
      },
      {
        title: "Provide Property Details",
        desc: "Enter the property address, type, and usage details accurately.",
      },
      {
        title: "Specify Lease Terms",
        desc: "Include rental amount, lease duration, renewal options, and other essential terms.",
      },
      {
        title: "Customize Clauses",
        desc: "Add specific clauses such as exclusivity rights, maintenance responsibilities, or parking privileges.",
      },
      {
        title: "Review Your Agreement",
        desc: "Ensure all details are correct and complete before finalizing the document.",
      },
      {
        title: "E-Stamp Paper Integration",
        desc: "Seamlessly attach legally compliant e-stamp papers across Indian states.",
      },
      {
        title: "E-Signature Options",
        desc: "Use Aadhaar-based e-signatures for secure and legally recognized signing.",
      },
      {
        title: "Expert Consultation",
        desc: "Consult our legal experts to ensure your agreement is fully compliant and tailored to your needs.",
      },
      {
        title: "Delivery",
        desc: "Receive your agreement instantly as a digital copy and within a few days as a hard copy at your doorstep.",
      },
    ],
    whyChooseUs: [
      {
        title: "Tailored Agreements",
        desc: "Comprehensive customization options to address your specific business needs.",
      },
      {
        title: "Legally Compliant",
        desc: "Agreements are fully compliant with Indian laws, including state-specific regulations.",
      },
      {
        title: "Hassle-Free E-Stamping",
        desc: "Save time with integrated e-stamp paper solutions.",
      },
      {
        title: "Secure E-Signatures",
        desc: "Aadhaar-based e-signatures ensure validity and convenience.",
      },
      {
        title: "Expert Guidance",
        desc: "Access legal professionals for clarity and assurance.",
      },
      {
        title: "Time-Saving Platform",
        desc: "Simplify the agreement process and get it done within minutes.",
      },
      {
        title: "Physical and Digital Delivery",
        desc: "Receive both digital and hard copies for your records.",
      },
      {
        title: "Safe and Secure",
        desc: "Your data and documents are handled with utmost confidentiality.",
      },
      {
        title: "Affordable Pricing",
        desc: "Cost-effective solutions for businesses of all sizes.",
      },
      {
        title: "User-Friendly Interface",
        desc: "Intuitive platform for a seamless experience.",
      },
      {
        title: "Long-Term Support",
        desc: "Secure record-keeping and easy access to your agreements whenever needed.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between a residential and a commercial lease agreement?",
        answer: "A residential lease agreement pertains to renting property for residential purposes, while a commercial lease agreement is specifically for business or commercial use."
      },
      {
        question: "Is registration of a commercial lease agreement mandatory?",
        answer: "Yes, for agreements exceeding 11 months, registration is mandatory under the Registration Act, 1908."
      },
      {
        question: "How secure is MyLegalinstant.com for sensitive business information?",
        answer: "We use advanced encryption and security protocols to ensure your data remains confidential and secure."
      },
      {
        question: "Can I negotiate terms within my commercial lease?",
        answer: "Absolutely! Our platform allows for extensive customization to tailor your agreement according to your business needs."
      },
      {
        question: "What customization options are available?",
        answer: "You can add clauses for exclusivity, subleasing, waiver, maintenance, termination, dispute resolution, and many more."
      },
      {
        question: "Is an e-stamped commercial lease legally valid?",
        answer: "Yes, e-stamped agreements are recognized as legally valid under Indian law."
      },
      {
        question: "Can I include renewal terms in my agreement?",
        answer: "Absolutely! Our platform allows you to include renewal and escalation clauses for long-term flexibility."
      },
      {
        question: "Are e-stamped and e-signed agreements legally valid in India?",
        answer: "Yes, both e-stamped and Aadhaar-based e-signed agreements are legally valid under Indian law."
      },
      {
        question: "How quickly will I receive my agreement?",
        answer: "You’ll get a digital copy instantly, and a hard copy will be delivered within a few working days."
      },
      {
        question: "Can I seek legal advice during the process?",
        answer: "Yes, expert legal consultation is available to guide you through every step."
      }
    ],
  },

  CommercialInstitutional: {
    id: "Commercial/Institutional",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Awe specialize in creating comprehensive Commercial/Institutional Lease Deeds that cater to your specific requirements, ensuring a seamless leasing experience. Our platform simplifies the process of drafting, customizing, and finalizing your lease deed, providing you with peace of mind as you secure your business location.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is a Commercial/Institutional Lease Deed?",
      subtitle: "A Commercial/Institutional Lease Deed",
      description:
        "A Commercial/Institutional Lease Deed is a formal legal document that outlines the terms and conditions under which a lessor (property owner) and a lessee (tenant) for commercial or institutional use. This type of lease deed is essential for businesses, educational institutions, healthcare facilities, and other organizations to formalize their occupancy arrangements.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "Shield",
        title: "Legal Clarity",
        desc:
          "Establishes clear rights and obligations for both parties, reducing ambiguities and potential conflicts.",
      },
      {
        icon: "Building",
        title: "Operational Security",
        desc:
          "Secures a designated space for your business or institution, allowing for uninterrupted operations.",
      },
      {
        icon: "FileText",
        title: "Customizable Terms",
        desc:
          "Tailor the lease deed to fit your specific needs, including duration, rent, maintenance responsibilities, and permitted uses.",
      },
      {
        icon: "Rupee",
        title: "Financial Security",
        desc:
          "Clearly outlines rental amounts and payment schedules, helping you manage your budget effectively.",
      },
      {
        icon: "Gavel",
        title: "Dispute Resolution",
        desc:
          "Offers a clear legal pathway for resolving disagreements and avoiding unnecessary litigation.",
      },
      {
        icon: "CheckCircle",
        title: "Compliance Assurance",
        desc:
          "Ensures adherence to local laws and regulations governing commercial leases in India.",
      }
    ],
    whyNeedAgreement: [
      {
        title: "Financial Security",
        desc: "Clearly outlines rental amounts and payment schedules, helping you manage your budget effectively.",
      },
      {
        title: "Dispute Resolution",
        desc: "Offers a clear legal pathway for resolving disagreements.",
      },
      {
        title: "Compliance Assurance",
        desc: "Ensures adherence to local laws and regulations governing commercial leases in India.",
      },
    ],
    legalFramework: [
      {
        title: "The Indian Contract Act, 1872",
        desc: "Establishes the legality of contracts and obligations, forming the foundation for lease agreements.",
      },
      {
        title: "The Transfer of Property Act, 1882",
        desc: "Governs the lease of immovable property and defines the rights and duties of lessors and lessees.",
      },
      {
        title: "The Registration Act, 1908",
        desc: "Mandates the registration of lease agreements exceeding a specific duration (typically 11 months) to ensure legal enforceability.",
      },
      {
        title: "State-Specific Rent Control Acts",
        desc: "Regulate leasing terms, especially in commercial hubs, offering protections and guidelines for both parties.",
      },
      {
        title: "Parties Involved",
        desc: "Detailed identification of the landlord and tenant, including legal names and contact information.",
      },
      {
        title: "Property Description",
        desc: "Comprehensive details about the leased property, including location, boundaries, and relevant features.",
      },
      {
        title: "Lease Term",
        desc: "Specifies the lease duration, including start and end dates, and provisions for renewal.",
      },
      {
        title: "Rent Structure",
        desc: "Outlines rental amount, payment frequency, and any additional charges like maintenance or utilities.",
      },
      {
        title: "Security Deposit",
        desc: "States the required deposit and conditions for its return after lease termination.",
      },
      {
        title: "Permitted Use",
        desc: "Defines allowed usage of the property, ensuring it aligns with zoning laws and activity restrictions.",
      },
      {
        title: "Maintenance Responsibilities",
        desc: "Clarifies maintenance and repair duties assigned to either party during the lease period.",
      },
      {
        title: "Termination Clauses",
        desc: "Lists conditions for early termination, including notice periods and applicable penalties.",
      },
      {
        title: "Dispute Resolution Mechanism",
        desc: "Outlines procedures for resolving any conflicts that may arise during the lease term.",
      },
    ],
    steps: [
      {
        title: "Begin the Process",
        desc: "Click the “Create Now” button to start.",
      },
      {
        title: "Select Agreement Type",
        desc: "Choose Commercial/Institutional Lease Deed from our list of agreements.",
      },
      {
        title: "Provide Property Details",
        desc: "Enter property location, type, and intended usage.",
      },
      {
        title: "Define Lease Terms",
        desc: "Specify rent, lease duration, renewal options, and security deposit.",
      },
      {
        title: "Customize Provisions",
        desc: "Add clauses for maintenance, utilities, subleasing, or exclusive rights.",
      },
      {
        title: "Review the Draft",
        desc: "Ensure all details are accurate and meet your expectations.",
      },
      {
        title: "E-Stamp Paper Integration",
        desc: "Easily include legally valid e-stamp paper for your agreement.",
      },
      {
        title: "E-Signature Options",
        desc: "Use Aadhaar-based e-signatures for a secure and convenient signing process.",
      },
      {
        title: "Expert Consultation",
        desc: "Access legal advice to ensure your deed is comprehensive and compliant.",
      },
      {
        title: "Delivery Options",
        desc: "Instantly download a digital copy or receive a hard copy at your address within a few working days.",
      },
    ],
    whyChooseUs: [
      {
        title: "Comprehensive Customization",
        desc: "Craft agreements that address your unique business or institutional needs.",
      },
      {
        title: "Legally Compliant",
        desc: "Fully aligned with Indian laws and state-specific regulations.",
      },
      {
        title: "Integrated E-Stamping",
        desc: "Simplifies the process of legal stamping for your agreement.",
      },
      {
        title: "Secure E-Signatures",
        desc: "Aadhaar-based signatures ensure legal validity and ease of execution.",
      },
      {
        title: "Expert Support",
        desc: "Benefit from professional legal consultation for added assurance.",
      },
      {
        title: "Quick and Efficient",
        desc: "Complete your lease deed in minutes with our intuitive platform.",
      },
      {
        title: "Convenient Delivery",
        desc: "Receive digital copies instantly and hard copies at your doorstep.",
      },
      {
        title: "Secure Storage",
        desc: "Safeguard your agreements with secure and accessible document storage.",
      },
      {
        title: "Affordable Solutions",
        desc: "High-quality services at cost-effective prices.",
      },
      {
        title: "User-Friendly Platform",
        desc: "Simplified processes for a seamless experience.",
      },
      {
        title: "Long-Term Assistance",
        desc: "Support for renewals, amendments, and future needs.",
      },
    ],
    faqs: [
      {
    question: "What distinguishes a commercial/institutional lease from other types of leases?",
    answer:
      "A commercial/institutional lease is specifically designed for business operations or institutional use, featuring terms tailored to those needs compared to residential leases.",
  },
  {
    question: "Is registration of a lease deed mandatory?",
    answer:
      "Yes, lease deeds exceeding 11 months must be registered under the Registration Act, 1908.",
  },
  {
    question: "Are e-stamped and e-signed deeds legally valid in India?",
    answer:
      "Yes, e-stamped and Aadhaar-based e-signed deeds are legally recognized under Indian law.",
  },
  {
    question: "Can I negotiate terms within my lease deed?",
    answer:
      "Absolutely! Our platform allows extensive customization so you can tailor your agreement according to your specific requirements.",
  },
  {
    question: "Can I include clauses for specific institutional needs?",
    answer:
      "Yes, our platform allows you to customize clauses for specific requirements, such as exclusive usage rights or compliance with institutional standards.",
  },
  {
    question: "Can I terminate the lease before the agreed duration?",
    answer:
      "Termination clauses can be included to outline conditions and procedures for early termination.",
  },
  {
    question: "How soon will I receive my lease deed?",
    answer:
      "A digital copy will be delivered instantly, and hard copies are sent within a few working days.",
  },
  {
    question: "Is legal advice included in the process?",
    answer:
      "Yes, our legal experts are available to guide you through the process.",
  },
    ],
  },

  LeaveandLicence: {
    id: "LeaveandLicence",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Do you need a legally sound and hassle-free agreement to license your movable property? Look no further! At MyLegalinstant.com, we specialize in crafting customized Leave and License Agreements for Movable Property, ensuring that your agreements are tailored to meet your specific needs while remaining legally compliant.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is a Leave and Licence Agreement for Movable Property?",
      description:
        "A Leave and Licence Agreement for Movable Property is a legal document that allows a licensor (owner) to grant permission to a licensee to use movable assets or properties, such as machinery, equipment, vehicles, or furniture, for a specific purpose and duration without transferring ownership rights.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "Shield",
        title: "Legal Protection",
        description:
          "Safeguards the interests of both the licensor and licensee, preventing misuse of movable property.",
      },
      {
        icon: "Repeat",
        title: "Flexibility",
        description:
          "Offers temporary usage arrangements without transferring ownership rights.",
      },
      {
        icon: "CheckCircle",
        title: "Compliance",
        description:
          "Ensures adherence to Indian legal provisions for movable property agreements.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Clarity of Terms",
        desc: "Clearly defines the roles, responsibilities, and liabilities of both parties, reducing ambiguities.",
      },
      {
        title: "Cost Efficiency",
        desc: "Avoids the financial burden of outright purchase for the licensee, making it a practical solution.",
      },
      {
        title: "Enforceability",
        desc: "Provides a clear legal framework to address any disputes or breaches.",
      },
    ],
    legalFramework: [
      {
        title: "The Indian Contract Act, 1872",
        desc: "Governs the contractual obligations between the licensor and licensee.",
      },
      {
        title: "The Sale of Goods Act, 1930",
        desc: "Provides legal guidelines for the usage and handling of movable property.",
      },
      {
        title: "Customary Laws & Industry-Specific Regulations",
        desc: "Depending on the nature of the movable property, specific laws may apply (e.g., transport laws for vehicles).",
      },
    ],
    steps: [
      {
        title: "Click on 'Create Now'",
        desc: "Start your agreement creation journey with just one click.",
      },
      {
        title: "Select Your Agreement",
        desc: "Choose the Leave and Licence Agreement for Movable Property option.",
      },
      {
        title: "Fill in the Details",
        desc: "Provide essential information, such as details of the movable property, licensor and licensee information, usage terms, and fees.",
      },
      {
        title: "Customize Your Agreement",
        desc: "Add specific clauses, such as maintenance obligations, insurance requirements, or penalties for misuse.",
      },
      {
        title: "Review and Finalize",
        desc: "Ensure all details are accurate and complete.",
      },
      {
        title: "E-Stamp Paper Integration",
        desc: "Seamlessly integrate e-stamp paper into your agreement, ensuring compliance with Indian legal requirements.",
      },
      {
        title: "E-Signature",
        desc: "Use Aadhaar-based e-signatures for secure, legally valid signing.",
      },
      {
        title: "Delivery",
        desc: "Receive a digital copy within minutes. Physical copies delivered to your doorstep within a few working days.",
      },
    ],
    whyChooseUs: [
      {
        title: "Extensive Customization",
        desc: "Tailor agreements to your specific needs with a wide range of clauses.",
      },
      {
        title: "Legally Valid E-Stamping",
        desc: "Ensures compliance with Indian legal requirements.",
      },
      {
        title: "Aadhaar-Based E-Signatures",
        desc: "Offers secure, legally valid digital signing options.",
      },
      {
        title: "Expert Legal Guidance",
        desc: "Access professional legal consultation for added assurance.",
      },
    ],
    faqs: [
      {
        question:
          "What is the difference between leasing and licensing movable property?",
        answer:
          "Leasing involves transferring the right to use the property for a fixed period, often with ownership implications, while licensing allows usage without transferring ownership rights.",
      },
      {
        question:
          "Is an e-stamped agreement for movable property valid in India?",
        answer:
          "Yes, e-stamped agreements are legally valid and enforceable under Indian law.",
      },
      {
        question: "Can I customize my agreement on MyLegalinstant.com?",
        answer:
          "Absolutely! Our platform allows you to tailor the agreement to suit your specific requirements.",
      },
      {
        question: "How soon will I receive my agreement?",
        answer:
          "You’ll receive a digital copy within minutes, and physical copies are delivered within a few working days.",
      },
      {
        question: "How secure is MyLegalinstant.com?",
        answer:
          "We implement robust security measures to ensure your data and documents are safe and comply with Indian privacy laws.",
      },
      {
        question: "What is the validity of Aadhaar-based e-signatures?",
        answer:
          "Aadhaar-based e-signatures are legally valid under the Information Technology Act, 2000, and widely accepted in India.",
      },
      {
        question: "Can I verify the validity of the e-stamp paper?",
        answer:
          "Yes, the validity of e-stamp papers can be checked on the official government portal of your state.",
      },
    ],
  },

  Dealership: {
    id: "Dealership",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "we specialize in creating tailored Distribution Agreements that protect your business interests while ensuring compliance with Indian laws. Whether you’re a manufacturer, supplier, or distributor, our platform provides you with a legally sound and fully customizable agreement to establish clear terms and a strong foundation for your partnership. ",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is a Distribution agreement  ?",
      subtitle:"A Distribution agreement",
      description:
        "A Distribution Agreement is a legally binding contract between a supplier or manufacturer and a distributor. It sets out the terms and conditions under which the distributor will market, sell, and distribute the supplier’s products. These agreements help both parties clearly define their roles, responsibilities, and expectations to avoid misunderstandings and disputes. ",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
    icon: "UserCheck",
    title: "Clear Roles and Responsibilities",
    description: "Avoid confusion by defining the duties of both parties.",
  },
  {
    icon: "ShieldCheck",
    title: "Legal Protection",
    description: "Safeguard your business interests and minimize risks.",
  },
  {
    icon: "Gavel",
    title: "Dispute Resolution",
    description: "Provide a clear framework for handling disagreements.",
  },
  {
    icon: "MapPin",
    title: "Territorial Exclusivity",
    description: "Clearly define geographic areas or product categories for distribution.",
  },
  {
    icon: "Lock",
    title: "Confidentiality and IP Protection",
    description: "Secure sensitive business information and intellectual property rights.",
  },
  {
    icon: "Scale",
    title: "Compliance",
    description: "Ensure adherence to Indian laws governing commercial transactions.",
  },
  {
    icon: "Settings",
    title: "Customizable Terms",
    description: "Tailor the agreement to suit your unique business model and goals.",
  },
    ],
    whyNeedAgreement: [
      {
    title: "The Indian Contract Act, 1872",
    desc: "Establishes the legality of contracts and obligations.",
  },
  {
    title: "The Sale of Goods Act, 1930",
    desc: "Regulates the sale and distribution of goods.",
  },
  {
    title: "The Competition Act, 2000",
    desc: "Ensures fair trade practices and prevents anti-competitive agreements.",
  },
  {
    title: "Intellectual Property Laws",
    desc: "Protects trademarks, patents, and copyrights involved in the agreement.",
  },
    ],
    legalFramework: [
     {
    title: "The Indian Contract Act, 1872",
    desc: "Establishes the legality of contracts and obligations.",
  },
  {
    title: "The Sale of Goods Act, 1930",
    desc: "Regulates the sale and distribution of goods.",
  },
  {
    title: "The Competition Act, 2000",
    desc: "Ensures fair trade practices and prevents anti-competitive agreements.",
  },
  {
    title: "Intellectual Property Laws",
    desc: "Protects trademarks, patents, and copyrights involved in the agreement.",
  },
    ],
    steps: [
     {
    title: "Click the “Create Now”",
    desc: "Start by clicking on the \"Create Now\" button on this page.",
  },
  {
    title: "Submit Your Query",
    desc: "Share your specific requirements with us.",
  },
  {
    title: "Legal Consultation and Expertise",
    desc: "Our experts will provide consultation and guidance to ensure your Distribution Agreement meets all legal and professional standards.",
  },
  {
    title: "Customized Drafting",
    desc: "We gather the necessary details, incorporate your unique clauses, and draft a Distribution Agreement tailored for your needs.",
  },
  {
    title: "Review and Approve",
    desc: "We send the draft for your review and make changes if necessary.",
  },
  {
    title: "Quick Delivery",
    desc: "Once approved, your Distribution Agreement is ready to get delivered digitally or via doorstep delivery.",
  },
    ],
    whyChooseUs: [
      {
    title: "Legally Compliant",
    desc: "Ensure full compliance with Indian legal standards.",
  },
  {
    title: "Integrated E-Stamping",
    desc: "Simplifies the process of legal stamping for your agreement.",
  },
  {
    title: "Secure E-Signatures",
    desc: "Aadhaar-based signatures for hassle-free and valid execution.",
  },
  {
    title: "Expert Support",
    desc: "Access professional legal consultation for added confidence.",
  },
  {
    title: "Time-Saving",
    desc: "Complete your agreement quickly and efficiently.",
  },
  {
    title: "Convenient Delivery",
    desc: "Get digital copies instantly and hard copies delivered to your doorstep.",
  },
  {
    title: "Secure Document Storage",
    desc: "Keep your agreements safe and easily accessible.",
  },
  {
    title: "Affordable Pricing",
    desc: "High-quality services at cost-effective rates.",
  },
  {
    title: "User-Friendly Platform",
    desc: "Navigate through the process effortlessly with our intuitive interface.",
  },
  {
    title: "Ongoing Support",
    desc: "Assistance available for amendments, renewals, or additional agreements.",
  },
    ],
    faqs: [
      {
    question: "What is the difference between an exclusive and a non-exclusive distribution agreement?",
    answer:
      "An exclusive agreement grants the distributor sole rights to distribute the product in a specific territory, while a non-exclusive agreement allows multiple distributors in the same area.",
  },
  {
    question: "Is a distribution agreement legally enforceable in India?",
    answer:
      "Yes, when properly drafted, stamped, and signed, a distribution agreement is legally enforceable under Indian law.",
  },
  {
    question: "Can I include performance targets in the agreement?",
    answer:
      "Absolutely! You can customize your agreement to include sales targets, marketing responsibilities, and other performance metrics.",
  },
  {
    question: "Are e-stamped and e-signed agreements valid?",
    answer:
      "Yes, both e-stamped and Aadhaar-based e-signed agreements are legally recognized in India.",
  },
  {
    question: "How soon will I receive my agreement?",
    answer:
      "Digital copies are available instantly as soon as you approve the draft, and hard copies are delivered within a few working days.",
  },
  {
    question: "Can I terminate the agreement before the specified duration?",
    answer:
      "Termination clauses can be included to outline conditions for early termination.",
  },
  {
    question: "Is legal advice included in the process?",
    answer:
      "Yes, our legal experts are available to guide you through the process and ensure compliance.",
  },
    ],
  },

};

export const ecommerce = {
  Termsofuseterms: {
    id: "Termsofuseterms ",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Looking to rent out your flat or move into a new one? MyLegalInstant.com provides expertly crafted Flat Rent Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is a Terms of use/terms of service of e-commerce website?",
      description:
        "A Terms of use/terms of service of e-commerce website Affidavit  is a legally binding document between a landlord (flat owner) and a tenant that outlines the terms and conditions for renting a residential flat. It protects the interests of both parties by defining their roles, rights, and responsibilities while ensuring compliance with applicable laws.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Financial Terms",
        description: "Specifies rent, security deposit, and payment terms.",
      },
      {
        icon: "Calendar",
        title: "Duration & Terms",
        description: "Details the lease duration and renewal conditions.",
      },
      {
        icon: "FileText",
        title: "Property Details",
        description: "Comprehensive details of the property and its condition.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Legal Protection",
        desc: "Safeguards both parties' rights and obligations under the law.",
      },
      {
        title: "Clear Expectations",
        desc: "Sets clear guidelines for property usage and maintenance.",
      },
      {
        title: "Dispute Prevention",
        desc: "Minimizes potential conflicts by documenting all terms clearly.",
      },
    ],
    legalFramework: [
      {
        title: "The Indian Contract Act, 1872",
        desc: "Establishes the legality of contracts and obligations between parties.",
      },
      {
        title: "Rent Control Act",
        desc: "Governs the relationship between landlords and tenants.",
      },
    ],
    steps: [
      {
        title: "Fill Details",
        desc: "Enter all required information about the property and parties involved.",
      },
      {
        title: "Review Terms",
        desc: "Carefully review all terms and conditions of the agreement.",
      },
      {
        title: "Generate & Download",
        desc: "Get your legally-verified agreement instantly.",
      },
    ],
    whyChooseUs: [
      {
        title: "Expert Legal Team",
        desc: "Agreements crafted by experienced legal professionals.",
      },
      {
        title: "Quick & Easy",
        desc: "Generate your agreement in minutes, not days.",
      },
    ],
    faqs: [
      {
        question: "Is a residential lease agreement mandatory?",
        answer:
          "While not legally mandatory, it's highly recommended to protect both parties' interests and prevent future disputes.",
      },
      {
        question: "What should be included in the agreement?",
        answer:
          "Key elements include rent amount, security deposit, duration, maintenance responsibilities, and terms of use.",
      },
    ],
  },
  PrivacyPolicy: {
    id: "PrivacyPolicy",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Need a Affidavit ForChange? MyLegalInstant.com provides expertly crafted Commercial Lease Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "what is  Privacy Policy  ?",
      description:
        "A Commercial Lease Agreement is a legally binding contract between a property owner and a business tenant that outlines the terms for renting commercial space. It includes specific provisions for business use while protecting both parties' interests.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Commercial Terms",
        description: "Detailed commercial rent and security deposit structure.",
      },
      {
        icon: "Calendar",
        title: "Business Usage",
        description:
          "Specific terms for commercial property usage and modifications.",
      },
      {
        icon: "FileText",
        title: "Business Provisions",
        description: "Special clauses for business operations and signage.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Business Protection",
        desc: "Safeguards your business interests and investment.",
      },
      {
        title: "Commercial Compliance",
        desc: "Ensures compliance with commercial property regulations.",
      },
      {
        title: "Business Operations",
        desc: "Clear terms for business operations and modifications.",
      },
    ],
    legalFramework: [
      {
        title: "Commercial Tenancy Laws",
        desc: "Covers specific regulations for commercial property leasing.",
      },
      {
        title: "Business Property Rights",
        desc: "Protects rights related to commercial property usage.",
      },
    ],
    steps: [
      {
        title: "Business Details",
        desc: "Enter business and property information.",
      },
      {
        title: "Commercial Terms",
        desc: "Specify commercial terms and conditions.",
      },
      {
        title: "Generate Agreement",
        desc: "Get your commercial lease agreement instantly.",
      },
    ],
    whyChooseUs: [
      {
        title: "Commercial Expertise",
        desc: "Specialized in commercial property agreements.",
      },
      {
        title: "Business-Focused",
        desc: "Terms tailored for business operations.",
      },
    ],
    faqs: [
      {
        question: "What makes commercial leases different?",
        answer:
          "Commercial leases include specific provisions for business operations, modifications, and commercial use of the property.",
      },
      {
        question: "Are commercial terms negotiable?",
        answer:
          "Yes, commercial lease terms are typically negotiable to accommodate specific business needs.",
      },
    ],
  },
  Cookiepolicy: {
    id: "Cookiepolicy",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Renting equipment? MyLegalInstant.com provides expertly crafted Equipment Rental Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is Cookie policy agreement   ?",
      description:
        "An Equipment Rental Agreement is a contract that outlines the terms for renting machinery, tools, or other equipment. It specifies usage conditions, maintenance responsibilities, and return requirements.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Rental Rates",
        description: "Clear pricing structure for equipment rental.",
      },
      {
        icon: "Calendar",
        title: "Usage Period",
        description: "Defined rental duration and extension terms.",
      },
      {
        icon: "Shield",
        title: "Equipment Protection",
        description: "Maintenance and damage liability terms.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Equipment Safety",
        desc: "Ensures proper handling and usage of equipment.",
      },
      {
        title: "Damage Protection",
        desc: "Clear terms for damage liability and insurance.",
      },
      {
        title: "Usage Guidelines",
        desc: "Specific instructions for equipment operation.",
      },
    ],
    legalFramework: [
      {
        title: "Equipment Safety Laws",
        desc: "Compliance with equipment safety regulations.",
      },
      {
        title: "Rental Regulations",
        desc: "Legal requirements for equipment rental.",
      },
    ],
    steps: [
      {
        title: "Equipment Details",
        desc: "Specify equipment information and condition.",
      },
      {
        title: "Rental Terms",
        desc: "Set rental duration and conditions.",
      },
      {
        title: "Complete Agreement",
        desc: "Generate your equipment rental agreement.",
      },
    ],
    whyChooseUs: [
      {
        title: "Equipment Expertise",
        desc: "Specialized in equipment rental agreements.",
      },
      {
        title: "Complete Protection",
        desc: "Comprehensive terms for equipment safety.",
      },
    ],
    faqs: [
      {
        question: "Is equipment insurance required?",
        answer:
          "Most equipment rentals require insurance coverage for damage protection.",
      },
      {
        question: "What about maintenance?",
        answer:
          "The agreement specifies maintenance responsibilities and procedures.",
      },
    ],
  },
  Subscription: {
    id: "Subscription",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Need a vehicle lease? MyLegalInstant.com provides expertly crafted Vehicle Lease Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is a Subscription service agreement?",
      description:
        "A Vehicle Lease Agreement is a contract that details the terms for leasing a vehicle, including usage rights, maintenance responsibilities, and return conditions.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Lease Payments",
        description: "Monthly payment terms and security deposit.",
      },
      {
        icon: "Clock",
        title: "Lease Duration",
        description: "Specified lease term and mileage limits.",
      },
      {
        icon: "Shield",
        title: "Vehicle Protection",
        description: "Insurance and maintenance requirements.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Vehicle Protection",
        desc: "Safeguards against improper use and damage.",
      },
      {
        title: "Clear Terms",
        desc: "Defined usage limits and maintenance requirements.",
      },
      {
        title: "Legal Compliance",
        desc: "Ensures adherence to vehicle leasing laws.",
      },
    ],
    legalFramework: [
      {
        title: "Motor Vehicle Act",
        desc: "Compliance with vehicle leasing regulations.",
      },
      {
        title: "Insurance Requirements",
        desc: "Mandatory insurance coverage terms.",
      },
    ],
    steps: [
      {
        title: "Vehicle Information",
        desc: "Enter vehicle details and condition.",
      },
      {
        title: "Lease Terms",
        desc: "Specify lease duration and conditions.",
      },
      {
        title: "Complete Lease",
        desc: "Generate your vehicle lease agreement.",
      },
    ],
    whyChooseUs: [
      {
        title: "Vehicle Expertise",
        desc: "Specialized in vehicle lease agreements.",
      },
      {
        title: "Comprehensive Coverage",
        desc: "Complete protection for your vehicle lease.",
      },
    ],
    faqs: [
      {
        question: "What about mileage limits?",
        answer:
          "The agreement specifies annual mileage limits and excess charges.",
      },
      {
        question: "Who handles maintenance?",
        answer:
          "Maintenance responsibilities are clearly defined in the agreement.",
      },
    ],
  },

  Cancellation: {
    id: "Cancellation",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Need a Affidavit ForChange? MyLegalInstant.com provides expertly crafted Commercial Lease Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "what is  Cancellation, returns and refund policy ?",
      description:
        "A leaveand Lease Agreement is a legally binding contract between a property owner and a business tenant that outlines the terms for renting commercial space. It includes specific provisions for business use while protecting both parties' interests.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Commercial Terms",
        description: "Detailed commercial rent and security deposit structure.",
      },
      {
        icon: "Calendar",
        title: "Business Usage",
        description:
          "Specific terms for commercial property usage and modifications.",
      },
      {
        icon: "FileText",
        title: "Business Provisions",
        description: "Special clauses for business operations and signage.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Business Protection",
        desc: "Safeguards your business interests and investment.",
      },
      {
        title: "Commercial Compliance",
        desc: "Ensures compliance with commercial property regulations.",
      },
      {
        title: "Business Operations",
        desc: "Clear terms for business operations and modifications.",
      },
    ],
    legalFramework: [
      {
        title: "Commercial Tenancy Laws",
        desc: "Covers specific regulations for commercial property leasing.",
      },
      {
        title: "Business Property Rights",
        desc: "Protects rights related to commercial property usage.",
      },
    ],
    steps: [
      {
        title: "Business Details",
        desc: "Enter business and property information.",
      },
      {
        title: "Commercial Terms",
        desc: "Specify commercial terms and conditions.",
      },
      {
        title: "Generate Agreement",
        desc: "Get your commercial lease agreement instantly.",
      },
    ],
    whyChooseUs: [
      {
        title: "Commercial Expertise",
        desc: "Specialized in commercial property agreements.",
      },
      {
        title: "Business-Focused",
        desc: "Terms tailored for business operations.",
      },
    ],
    faqs: [
      {
        question: "What makes commercial leases different?",
        answer:
          "Commercial leases include specific provisions for business operations, modifications, and commercial use of the property.",
      },
      {
        question: "Are commercial terms negotiable?",
        answer:
          "Yes, commercial lease terms are typically negotiable to accommodate specific business needs.",
      },
    ],
  },
  Ecommercewebsitedev: {
    id: "Ecommercewebsitedev",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Renting equipment? MyLegalInstant.com provides expertly crafted Equipment Rental Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is a E-commerce website development and services agreement?",
      description:
        "An Equipment Rental Agreement is a contract that outlines the terms for renting machinery, tools, or other equipment. It specifies usage conditions, maintenance responsibilities, and return requirements.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Rental Rates",
        description: "Clear pricing structure for equipment rental.",
      },
      {
        icon: "Calendar",
        title: "Usage Period",
        description: "Defined rental duration and extension terms.",
      },
      {
        icon: "Shield",
        title: "Equipment Protection",
        description: "Maintenance and damage liability terms.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Equipment Safety",
        desc: "Ensures proper handling and usage of equipment.",
      },
      {
        title: "Damage Protection",
        desc: "Clear terms for damage liability and insurance.",
      },
      {
        title: "Usage Guidelines",
        desc: "Specific instructions for equipment operation.",
      },
    ],
    legalFramework: [
      {
        title: "Equipment Safety Laws",
        desc: "Compliance with equipment safety regulations.",
      },
      {
        title: "Rental Regulations",
        desc: "Legal requirements for equipment rental.",
      },
    ],
    steps: [
      {
        title: "Equipment Details",
        desc: "Specify equipment information and condition.",
      },
      {
        title: "Rental Terms",
        desc: "Set rental duration and conditions.",
      },
      {
        title: "Complete Agreement",
        desc: "Generate your equipment rental agreement.",
      },
    ],
    whyChooseUs: [
      {
        title: "Equipment Expertise",
        desc: "Specialized in equipment rental agreements.",
      },
      {
        title: "Complete Protection",
        desc: "Comprehensive terms for equipment safety.",
      },
    ],
    faqs: [
      {
        question: "Is equipment insurance required?",
        answer:
          "Most equipment rentals require insurance coverage for damage protection.",
      },
      {
        question: "What about maintenance?",
        answer:
          "The agreement specifies maintenance responsibilities and procedures.",
      },
    ],
  },
  Termsandconditionsale: {
    id: "Termsandconditionsale",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Need a vehicle lease? MyLegalInstant.com provides expertly crafted Vehicle Lease Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is a Terms and conditions of sale?",
      description:
        "A Vehicle Lease Agreement is a contract that details the terms for leasing a vehicle, including usage rights, maintenance responsibilities, and return conditions.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Lease Payments",
        description: "Monthly payment terms and security deposit.",
      },
      {
        icon: "Clock",
        title: "Lease Duration",
        description: "Specified lease term and mileage limits.",
      },
      {
        icon: "Shield",
        title: "Vehicle Protection",
        description: "Insurance and maintenance requirements.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Vehicle Protection",
        desc: "Safeguards against improper use and damage.",
      },
      {
        title: "Clear Terms",
        desc: "Defined usage limits and maintenance requirements.",
      },
      {
        title: "Legal Compliance",
        desc: "Ensures adherence to vehicle leasing laws.",
      },
    ],
    legalFramework: [
      {
        title: "Motor Vehicle Act",
        desc: "Compliance with vehicle leasing regulations.",
      },
      {
        title: "Insurance Requirements",
        desc: "Mandatory insurance coverage terms.",
      },
    ],
    steps: [
      {
        title: "Vehicle Information",
        desc: "Enter vehicle details and condition.",
      },
      {
        title: "Lease Terms",
        desc: "Specify lease duration and conditions.",
      },
      {
        title: "Complete Lease",
        desc: "Generate your vehicle lease agreement.",
      },
    ],
    whyChooseUs: [
      {
        title: "Vehicle Expertise",
        desc: "Specialized in vehicle lease agreements.",
      },
      {
        title: "Comprehensive Coverage",
        desc: "Complete protection for your vehicle lease.",
      },
    ],
    faqs: [
      {
        question: "What about mileage limits?",
        answer:
          "The agreement specifies annual mileage limits and excess charges.",
      },
      {
        question: "Who handles maintenance?",
        answer:
          "Maintenance responsibilities are clearly defined in the agreement.",
      },
    ],
  },
  Internetbanking: {
    id: "Internetbanking",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Renting equipment? MyLegalInstant.com provides expertly crafted Equipment Rental Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is a Internet banking services agreement?",
      description:
        "An Equipment Rental Agreement is a contract that outlines the terms for renting machinery, tools, or other equipment. It specifies usage conditions, maintenance responsibilities, and return requirements.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Rental Rates",
        description: "Clear pricing structure for equipment rental.",
      },
      {
        icon: "Calendar",
        title: "Usage Period",
        description: "Defined rental duration and extension terms.",
      },
      {
        icon: "Shield",
        title: "Equipment Protection",
        description: "Maintenance and damage liability terms.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Equipment Safety",
        desc: "Ensures proper handling and usage of equipment.",
      },
      {
        title: "Damage Protection",
        desc: "Clear terms for damage liability and insurance.",
      },
      {
        title: "Usage Guidelines",
        desc: "Specific instructions for equipment operation.",
      },
    ],
    legalFramework: [
      {
        title: "Equipment Safety Laws",
        desc: "Compliance with equipment safety regulations.",
      },
      {
        title: "Rental Regulations",
        desc: "Legal requirements for equipment rental.",
      },
    ],
    steps: [
      {
        title: "Equipment Details",
        desc: "Specify equipment information and condition.",
      },
      {
        title: "Rental Terms",
        desc: "Set rental duration and conditions.",
      },
      {
        title: "Complete Agreement",
        desc: "Generate your equipment rental agreement.",
      },
    ],
    whyChooseUs: [
      {
        title: "Equipment Expertise",
        desc: "Specialized in equipment rental agreements.",
      },
      {
        title: "Complete Protection",
        desc: "Comprehensive terms for equipment safety.",
      },
    ],
    faqs: [
      {
        question: "Is equipment insurance required?",
        answer:
          "Most equipment rentals require insurance coverage for damage protection.",
      },
      {
        question: "What about maintenance?",
        answer:
          "The agreement specifies maintenance responsibilities and procedures.",
      },
    ],
  },
  Domainameass: {
    id: "Domainameass",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Need a vehicle lease? MyLegalInstant.com provides expertly crafted Vehicle Lease Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is a Domain name assignment agreement?",
      description:
        "A Vehicle Lease Agreement is a contract that details the terms for leasing a vehicle, including usage rights, maintenance responsibilities, and return conditions.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Lease Payments",
        description: "Monthly payment terms and security deposit.",
      },
      {
        icon: "Clock",
        title: "Lease Duration",
        description: "Specified lease term and mileage limits.",
      },
      {
        icon: "Shield",
        title: "Vehicle Protection",
        description: "Insurance and maintenance requirements.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Vehicle Protection",
        desc: "Safeguards against improper use and damage.",
      },
      {
        title: "Clear Terms",
        desc: "Defined usage limits and maintenance requirements.",
      },
      {
        title: "Legal Compliance",
        desc: "Ensures adherence to vehicle leasing laws.",
      },
    ],
    legalFramework: [
      {
        title: "Motor Vehicle Act",
        desc: "Compliance with vehicle leasing regulations.",
      },
      {
        title: "Insurance Requirements",
        desc: "Mandatory insurance coverage terms.",
      },
    ],
    steps: [
      {
        title: "Vehicle Information",
        desc: "Enter vehicle details and condition.",
      },
      {
        title: "Lease Terms",
        desc: "Specify lease duration and conditions.",
      },
      {
        title: "Complete Lease",
        desc: "Generate your vehicle lease agreement.",
      },
    ],
    whyChooseUs: [
      {
        title: "Vehicle Expertise",
        desc: "Specialized in vehicle lease agreements.",
      },
      {
        title: "Comprehensive Coverage",
        desc: "Complete protection for your vehicle lease.",
      },
    ],
    faqs: [
      {
        question: "What about mileage limits?",
        answer:
          "The agreement specifies annual mileage limits and excess charges.",
      },
      {
        question: "Who handles maintenance?",
        answer:
          "Maintenance responsibilities are clearly defined in the agreement.",
      },
    ],
  },
};

// intellectual property

export const intellectual = {
  "Technical-Know-How ": {
    id: "Technical-Know-How",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Looking to rent out your flat or move into a new one? MyLegalInstant.com provides expertly crafted Flat Rent Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is a Agreement for Sale of Technical Know-How?",
      description:
        "A Terms of use/terms of service of e-commerce website Affidavit  is a legally binding document between a landlord (flat owner) and a tenant that outlines the terms and conditions for renting a residential flat. It protects the interests of both parties by defining their roles, rights, and responsibilities while ensuring compliance with applicable laws.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Financial Terms",
        description: "Specifies rent, security deposit, and payment terms.",
      },
      {
        icon: "Calendar",
        title: "Duration & Terms",
        description: "Details the lease duration and renewal conditions.",
      },
      {
        icon: "FileText",
        title: "Property Details",
        description: "Comprehensive details of the property and its condition.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Legal Protection",
        desc: "Safeguards both parties' rights and obligations under the law.",
      },
      {
        title: "Clear Expectations",
        desc: "Sets clear guidelines for property usage and maintenance.",
      },
      {
        title: "Dispute Prevention",
        desc: "Minimizes potential conflicts by documenting all terms clearly.",
      },
    ],
    legalFramework: [
      {
        title: "The Indian Contract Act, 1872",
        desc: "Establishes the legality of contracts and obligations between parties.",
      },
      {
        title: "Rent Control Act",
        desc: "Governs the relationship between landlords and tenants.",
      },
    ],
    steps: [
      {
        title: "Fill Details",
        desc: "Enter all required information about the property and parties involved.",
      },
      {
        title: "Review Terms",
        desc: "Carefully review all terms and conditions of the agreement.",
      },
      {
        title: "Generate & Download",
        desc: "Get your legally-verified agreement instantly.",
      },
    ],
    whyChooseUs: [
      {
        title: "Expert Legal Team",
        desc: "Agreements crafted by experienced legal professionals.",
      },
      {
        title: "Quick & Easy",
        desc: "Generate your agreement in minutes, not days.",
      },
    ],
    faqs: [
      {
        question: "Is a residential lease agreement mandatory?",
        answer:
          "While not legally mandatory, it's highly recommended to protect both parties' interests and prevent future disputes.",
      },
      {
        question: "What should be included in the agreement?",
        answer:
          "Key elements include rent amount, security deposit, duration, maintenance responsibilities, and terms of use.",
      },
    ],
  },
  "Assignment-of-Copyright": {
    id: "Assignment-of-Copyright",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Need a Affidavit ForChange? MyLegalInstant.com provides expertly crafted Commercial Lease Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "what is  Deed of Assignment of Copyright ?",
      description:
        "A Commercial Lease Agreement is a legally binding contract between a property owner and a business tenant that outlines the terms for renting commercial space. It includes specific provisions for business use while protecting both parties' interests.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Commercial Terms",
        description: "Detailed commercial rent and security deposit structure.",
      },
      {
        icon: "Calendar",
        title: "Business Usage",
        description:
          "Specific terms for commercial property usage and modifications.",
      },
      {
        icon: "FileText",
        title: "Business Provisions",
        description: "Special clauses for business operations and signage.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Business Protection",
        desc: "Safeguards your business interests and investment.",
      },
      {
        title: "Commercial Compliance",
        desc: "Ensures compliance with commercial property regulations.",
      },
      {
        title: "Business Operations",
        desc: "Clear terms for business operations and modifications.",
      },
    ],
    legalFramework: [
      {
        title: "Commercial Tenancy Laws",
        desc: "Covers specific regulations for commercial property leasing.",
      },
      {
        title: "Business Property Rights",
        desc: "Protects rights related to commercial property usage.",
      },
    ],
    steps: [
      {
        title: "Business Details",
        desc: "Enter business and property information.",
      },
      {
        title: "Commercial Terms",
        desc: "Specify commercial terms and conditions.",
      },
      {
        title: "Generate Agreement",
        desc: "Get your commercial lease agreement instantly.",
      },
    ],
    whyChooseUs: [
      {
        title: "Commercial Expertise",
        desc: "Specialized in commercial property agreements.",
      },
      {
        title: "Business-Focused",
        desc: "Terms tailored for business operations.",
      },
    ],
    faqs: [
      {
        question: "What makes commercial leases different?",
        answer:
          "Commercial leases include specific provisions for business operations, modifications, and commercial use of the property.",
      },
      {
        question: "Are commercial terms negotiable?",
        answer:
          "Yes, commercial lease terms are typically negotiable to accommodate specific business needs.",
      },
    ],
  },
  "Agreement-Patent": {
    id: "Agreement-Patent",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Renting equipment? MyLegalInstant.com provides expertly crafted Equipment Rental Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is Agreement to sell Patent Rights ?",
      description:
        "An Equipment Rental Agreement is a contract that outlines the terms for renting machinery, tools, or other equipment. It specifies usage conditions, maintenance responsibilities, and return requirements.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Rental Rates",
        description: "Clear pricing structure for equipment rental.",
      },
      {
        icon: "Calendar",
        title: "Usage Period",
        description: "Defined rental duration and extension terms.",
      },
      {
        icon: "Shield",
        title: "Equipment Protection",
        description: "Maintenance and damage liability terms.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Equipment Safety",
        desc: "Ensures proper handling and usage of equipment.",
      },
      {
        title: "Damage Protection",
        desc: "Clear terms for damage liability and insurance.",
      },
      {
        title: "Usage Guidelines",
        desc: "Specific instructions for equipment operation.",
      },
    ],
    legalFramework: [
      {
        title: "Equipment Safety Laws",
        desc: "Compliance with equipment safety regulations.",
      },
      {
        title: "Rental Regulations",
        desc: "Legal requirements for equipment rental.",
      },
    ],
    steps: [
      {
        title: "Equipment Details",
        desc: "Specify equipment information and condition.",
      },
      {
        title: "Rental Terms",
        desc: "Set rental duration and conditions.",
      },
      {
        title: "Complete Agreement",
        desc: "Generate your equipment rental agreement.",
      },
    ],
    whyChooseUs: [
      {
        title: "Equipment Expertise",
        desc: "Specialized in equipment rental agreements.",
      },
      {
        title: "Complete Protection",
        desc: "Comprehensive terms for equipment safety.",
      },
    ],
    faqs: [
      {
        question: "Is equipment insurance required?",
        answer:
          "Most equipment rentals require insurance coverage for damage protection.",
      },
      {
        question: "What about maintenance?",
        answer:
          "The agreement specifies maintenance responsibilities and procedures.",
      },
    ],
  },
  "Mortgage": {
    id: "Mortgage",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Need a vehicle lease? MyLegalInstant.com provides expertly crafted Vehicle Lease Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is a Agreement for Mortgage of Patent?",
      description:
        "A Mortgage  Agreement is a contract that details the terms for leasing a vehicle, including usage rights, maintenance responsibilities, and return conditions.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Lease Payments",
        description: "Monthly payment terms and security deposit.",
      },
      {
        icon: "Clock",
        title: "Lease Duration",
        description: "Specified lease term and mileage limits.",
      },
      {
        icon: "Shield",
        title: "Vehicle Protection",
        description: "Insurance and maintenance requirements.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Vehicle Protection",
        desc: "Safeguards against improper use and damage.",
      },
      {
        title: "Clear Terms",
        desc: "Defined usage limits and maintenance requirements.",
      },
      {
        title: "Legal Compliance",
        desc: "Ensures adherence to vehicle leasing laws.",
      },
    ],
    legalFramework: [
      {
        title: "Motor Vehicle Act",
        desc: "Compliance with vehicle leasing regulations.",
      },
      {
        title: "Insurance Requirements",
        desc: "Mandatory insurance coverage terms.",
      },
    ],
    steps: [
      {
        title: "Vehicle Information",
        desc: "Enter vehicle details and condition.",
      },
      {
        title: "Lease Terms",
        desc: "Specify lease duration and conditions.",
      },
      {
        title: "Complete Lease",
        desc: "Generate your vehicle lease agreement.",
      },
    ],
    whyChooseUs: [
      {
        title: "Vehicle Expertise",
        desc: "Specialized in vehicle lease agreements.",
      },
      {
        title: "Comprehensive Coverage",
        desc: "Complete protection for your vehicle lease.",
      },
    ],
    faqs: [
      {
        question: "What about mileage limits?",
        answer:
          "The agreement specifies annual mileage limits and excess charges.",
      },
      {
        question: "Who handles maintenance?",
        answer:
          "Maintenance responsibilities are clearly defined in the agreement.",
      },
    ],
  },

  "AssignmentPatents": {
    id: "AssignmentPatents",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Need a Affidavit ForChange? MyLegalInstant.com provides expertly crafted Commercial Lease Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "what is Deed of Assignment of Patents?",
      description:
        "A leaveand Lease Agreement is a legally binding contract between a property owner and a business tenant that outlines the terms for renting commercial space. It includes specific provisions for business use while protecting both parties' interests.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Commercial Terms",
        description: "Detailed commercial rent and security deposit structure.",
      },
      {
        icon: "Calendar",
        title: "Business Usage",
        description:
          "Specific terms for commercial property usage and modifications.",
      },
      {
        icon: "FileText",
        title: "Business Provisions",
        description: "Special clauses for business operations and signage.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Business Protection",
        desc: "Safeguards your business interests and investment.",
      },
      {
        title: "Commercial Compliance",
        desc: "Ensures compliance with commercial property regulations.",
      },
      {
        title: "Business Operations",
        desc: "Clear terms for business operations and modifications.",
      },
    ],
    legalFramework: [
      {
        title: "Commercial Tenancy Laws",
        desc: "Covers specific regulations for commercial property leasing.",
      },
      {
        title: "Business Property Rights",
        desc: "Protects rights related to commercial property usage.",
      },
    ],
    steps: [
      {
        title: "Business Details",
        desc: "Enter business and property information.",
      },
      {
        title: "Commercial Terms",
        desc: "Specify commercial terms and conditions.",
      },
      {
        title: "Generate Agreement",
        desc: "Get your commercial lease agreement instantly.",
      },
    ],
    whyChooseUs: [
      {
        title: "Commercial Expertise",
        desc: "Specialized in commercial property agreements.",
      },
      {
        title: "Business-Focused",
        desc: "Terms tailored for business operations.",
      },
    ],
    faqs: [
      {
        question: "What makes commercial leases different?",
        answer:
          "Commercial leases include specific provisions for business operations, modifications, and commercial use of the property.",
      },
      {
        question: "Are commercial terms negotiable?",
        answer:
          "Yes, commercial lease terms are typically negotiable to accommodate specific business needs.",
      },
    ],
  },
  "Author-and-Publisher": {
    id: "Author-and-Publisher",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Renting equipment? MyLegalInstant.com provides expertly crafted Equipment Rental Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is a Agreement between Author and Publisher?",
      description:
        "An Equipment Rental Agreement is a contract that outlines the terms for renting machinery, tools, or other equipment. It specifies usage conditions, maintenance responsibilities, and return requirements.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Rental Rates",
        description: "Clear pricing structure for equipment rental.",
      },
      {
        icon: "Calendar",
        title: "Usage Period",
        description: "Defined rental duration and extension terms.",
      },
      {
        icon: "Shield",
        title: "Equipment Protection",
        description: "Maintenance and damage liability terms.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Equipment Safety",
        desc: "Ensures proper handling and usage of equipment.",
      },
      {
        title: "Damage Protection",
        desc: "Clear terms for damage liability and insurance.",
      },
      {
        title: "Usage Guidelines",
        desc: "Specific instructions for equipment operation.",
      },
    ],
    legalFramework: [
      {
        title: "Equipment Safety Laws",
        desc: "Compliance with equipment safety regulations.",
      },
      {
        title: "Rental Regulations",
        desc: "Legal requirements for equipment rental.",
      },
    ],
    steps: [
      {
        title: "Equipment Details",
        desc: "Specify equipment information and condition.",
      },
      {
        title: "Rental Terms",
        desc: "Set rental duration and conditions.",
      },
      {
        title: "Complete Agreement",
        desc: "Generate your equipment rental agreement.",
      },
    ],
    whyChooseUs: [
      {
        title: "Equipment Expertise",
        desc: "Specialized in equipment rental agreements.",
      },
      {
        title: "Complete Protection",
        desc: "Comprehensive terms for equipment safety.",
      },
    ],
    faqs: [
      {
        question: "Is equipment insurance required?",
        answer:
          "Most equipment rentals require insurance coverage for damage protection.",
      },
      {
        question: "What about maintenance?",
        answer:
          "The agreement specifies maintenance responsibilities and procedures.",
      },
    ],
  },
  "New-Publisher": {
    id: "New-Publisher",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Need a vehicle lease? MyLegalInstant.com provides expertly crafted Vehicle Lease Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is a Terms and conditions of sale?",
      description:
        "A Vehicle Lease Agreement is a contract that details the terms for leasing a vehicle, including usage rights, maintenance responsibilities, and return conditions.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Lease Payments",
        description: "Monthly payment terms and security deposit.",
      },
      {
        icon: "Clock",
        title: "Lease Duration",
        description: "Specified lease term and mileage limits.",
      },
      {
        icon: "Shield",
        title: "Vehicle Protection",
        description: "Insurance and maintenance requirements.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Vehicle Protection",
        desc: "Safeguards against improper use and damage.",
      },
      {
        title: "Clear Terms",
        desc: "Defined usage limits and maintenance requirements.",
      },
      {
        title: "Legal Compliance",
        desc: "Ensures adherence to vehicle leasing laws.",
      },
    ],
    legalFramework: [
      {
        title: "Motor Vehicle Act",
        desc: "Compliance with vehicle leasing regulations.",
      },
      {
        title: "Insurance Requirements",
        desc: "Mandatory insurance coverage terms.",
      },
    ],
    steps: [
      {
        title: "Vehicle Information",
        desc: "Enter vehicle details and condition.",
      },
      {
        title: "Lease Terms",
        desc: "Specify lease duration and conditions.",
      },
      {
        title: "Complete Lease",
        desc: "Generate your vehicle lease agreement.",
      },
    ],
    whyChooseUs: [
      {
        title: "Vehicle Expertise",
        desc: "Specialized in vehicle lease agreements.",
      },
      {
        title: "Comprehensive Coverage",
        desc: "Complete protection for your vehicle lease.",
      },
    ],
    faqs: [
      {
        question: "What about mileage limits?",
        answer:
          "The agreement specifies annual mileage limits and excess charges.",
      },
      {
        question: "Who handles maintenance?",
        answer:
          "Maintenance responsibilities are clearly defined in the agreement.",
      },
    ],
  },
  "Trade-Mark": {
    id: "Trade-Mark",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Renting equipment? MyLegalInstant.com provides expertly crafted Equipment Rental Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is a Agreement for use of Trade Mark?",
      description:
        "An Equipment Rental Agreement is a contract that outlines the terms for renting machinery, tools, or other equipment. It specifies usage conditions, maintenance responsibilities, and return requirements.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Rental Rates",
        description: "Clear pricing structure for equipment rental.",
      },
      {
        icon: "Calendar",
        title: "Usage Period",
        description: "Defined rental duration and extension terms.",
      },
      {
        icon: "Shield",
        title: "Equipment Protection",
        description: "Maintenance and damage liability terms.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Equipment Safety",
        desc: "Ensures proper handling and usage of equipment.",
      },
      {
        title: "Damage Protection",
        desc: "Clear terms for damage liability and insurance.",
      },
      {
        title: "Usage Guidelines",
        desc: "Specific instructions for equipment operation.",
      },
    ],
    legalFramework: [
      {
        title: "Equipment Safety Laws",
        desc: "Compliance with equipment safety regulations.",
      },
      {
        title: "Rental Regulations",
        desc: "Legal requirements for equipment rental.",
      },
    ],
    steps: [
      {
        title: "Equipment Details",
        desc: "Specify equipment information and condition.",
      },
      {
        title: "Rental Terms",
        desc: "Set rental duration and conditions.",
      },
      {
        title: "Complete Agreement",
        desc: "Generate your equipment rental agreement.",
      },
    ],
    whyChooseUs: [
      {
        title: "Equipment Expertise",
        desc: "Specialized in equipment rental agreements.",
      },
      {
        title: "Complete Protection",
        desc: "Comprehensive terms for equipment safety.",
      },
    ],
    faqs: [
      {
        question: "Is equipment insurance required?",
        answer:
          "Most equipment rentals require insurance coverage for damage protection.",
      },
      {
        question: "What about maintenance?",
        answer:
          "The agreement specifies maintenance responsibilities and procedures.",
      },
    ],
  },
  "Manufacturer-Agreeme": {
    id: "Manufacturer-Agreeme",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Need a vehicle lease? MyLegalInstant.com provides expertly crafted Vehicle Lease Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is a Agreement between Trade Mark Owner and a Manufacturer?",
      description:
        "A Vehicle Lease Agreement is a contract that details the terms for leasing a vehicle, including usage rights, maintenance responsibilities, and return conditions.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Lease Payments",
        description: "Monthly payment terms and security deposit.",
      },
      {
        icon: "Clock",
        title: "Lease Duration",
        description: "Specified lease term and mileage limits.",
      },
      {
        icon: "Shield",
        title: "Vehicle Protection",
        description: "Insurance and maintenance requirements.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Vehicle Protection",
        desc: "Safeguards against improper use and damage.",
      },
      {
        title: "Clear Terms",
        desc: "Defined usage limits and maintenance requirements.",
      },
      {
        title: "Legal Compliance",
        desc: "Ensures adherence to vehicle leasing laws.",
      },
    ],
    legalFramework: [
      {
        title: "Motor Vehicle Act",
        desc: "Compliance with vehicle leasing regulations.",
      },
      {
        title: "Insurance Requirements",
        desc: "Mandatory insurance coverage terms.",
      },
    ],
    steps: [
      {
        title: "Vehicle Information",
        desc: "Enter vehicle details and condition.",
      },
      {
        title: "Lease Terms",
        desc: "Specify lease duration and conditions.",
      },
      {
        title: "Complete Lease",
        desc: "Generate your vehicle lease agreement.",
      },
    ],
    whyChooseUs: [
      {
        title: "Vehicle Expertise",
        desc: "Specialized in vehicle lease agreements.",
      },
      {
        title: "Comprehensive Coverage",
        desc: "Complete protection for your vehicle lease.",
      },
    ],
    faqs: [
      {
        question: "What about mileage limits?",
        answer:
          "The agreement specifies annual mileage limits and excess charges.",
      },
      {
        question: "Who handles maintenance?",
        answer:
          "Maintenance responsibilities are clearly defined in the agreement.",
      },
    ],
  },

  "AssignmentTrade": {
    id: "AssignmentTrade",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Need a vehicle lease? MyLegalInstant.com provides expertly crafted Vehicle Lease Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is a Terms and conditions of sale?",
      description:
        "A Vehicle Lease Agreement is a contract that details the terms for leasing a vehicle, including usage rights, maintenance responsibilities, and return conditions.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Lease Payments",
        description: "Monthly payment terms and security deposit.",
      },
      {
        icon: "Clock",
        title: "Lease Duration",
        description: "Specified lease term and mileage limits.",
      },
      {
        icon: "Shield",
        title: "Vehicle Protection",
        description: "Insurance and maintenance requirements.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Vehicle Protection",
        desc: "Safeguards against improper use and damage.",
      },
      {
        title: "Clear Terms",
        desc: "Defined usage limits and maintenance requirements.",
      },
      {
        title: "Legal Compliance",
        desc: "Ensures adherence to vehicle leasing laws.",
      },
    ],
    legalFramework: [
      {
        title: "Motor Vehicle Act",
        desc: "Compliance with vehicle leasing regulations.",
      },
      {
        title: "Insurance Requirements",
        desc: "Mandatory insurance coverage terms.",
      },
    ],
    steps: [
      {
        title: "Vehicle Information",
        desc: "Enter vehicle details and condition.",
      },
      {
        title: "Lease Terms",
        desc: "Specify lease duration and conditions.",
      },
      {
        title: "Complete Lease",
        desc: "Generate your vehicle lease agreement.",
      },
    ],
    whyChooseUs: [
      {
        title: "Vehicle Expertise",
        desc: "Specialized in vehicle lease agreements.",
      },
      {
        title: "Comprehensive Coverage",
        desc: "Complete protection for your vehicle lease.",
      },
    ],
    faqs: [
      {
        question: "What about mileage limits?",
        answer:
          "The agreement specifies annual mileage limits and excess charges.",
      },
      {
        question: "Who handles maintenance?",
        answer:
          "Maintenance responsibilities are clearly defined in the agreement.",
      },
    ],
  },
  "RegisteredAgreement": {
    id: "RegisteredAgreement",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Renting equipment? MyLegalInstant.com provides expertly crafted Equipment Rental Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is a Agreement for use of Trade Mark?",
      description:
        "An Equipment Rental Agreement is a contract that outlines the terms for renting machinery, tools, or other equipment. It specifies usage conditions, maintenance responsibilities, and return requirements.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Rental Rates",
        description: "Clear pricing structure for equipment rental.",
      },
      {
        icon: "Calendar",
        title: "Usage Period",
        description: "Defined rental duration and extension terms.",
      },
      {
        icon: "Shield",
        title: "Equipment Protection",
        description: "Maintenance and damage liability terms.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Equipment Safety",
        desc: "Ensures proper handling and usage of equipment.",
      },
      {
        title: "Damage Protection",
        desc: "Clear terms for damage liability and insurance.",
      },
      {
        title: "Usage Guidelines",
        desc: "Specific instructions for equipment operation.",
      },
    ],
    legalFramework: [
      {
        title: "Equipment Safety Laws",
        desc: "Compliance with equipment safety regulations.",
      },
      {
        title: "Rental Regulations",
        desc: "Legal requirements for equipment rental.",
      },
    ],
    steps: [
      {
        title: "Equipment Details",
        desc: "Specify equipment information and condition.",
      },
      {
        title: "Rental Terms",
        desc: "Set rental duration and conditions.",
      },
      {
        title: "Complete Agreement",
        desc: "Generate your equipment rental agreement.",
      },
    ],
    whyChooseUs: [
      {
        title: "Equipment Expertise",
        desc: "Specialized in equipment rental agreements.",
      },
      {
        title: "Complete Protection",
        desc: "Comprehensive terms for equipment safety.",
      },
    ],
    faqs: [
      {
        question: "Is equipment insurance required?",
        answer:
          "Most equipment rentals require insurance coverage for damage protection.",
      },
      {
        question: "What about maintenance?",
        answer:
          "The agreement specifies maintenance responsibilities and procedures.",
      },
    ],
  },
  "WebsiteDevelopmentAgreement": {
    id: "WebsiteDevelopmentAgreement",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Need a vehicle lease? MyLegalInstant.com provides expertly crafted Vehicle Lease Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is a Agreement between Trade Mark Owner and a Manufacturer?",
      description:
        "A Vehicle Lease Agreement is a contract that details the terms for leasing a vehicle, including usage rights, maintenance responsibilities, and return conditions.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Lease Payments",
        description: "Monthly payment terms and security deposit.",
      },
      {
        icon: "Clock",
        title: "Lease Duration",
        description: "Specified lease term and mileage limits.",
      },
      {
        icon: "Shield",
        title: "Vehicle Protection",
        description: "Insurance and maintenance requirements.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Vehicle Protection",
        desc: "Safeguards against improper use and damage.",
      },
      {
        title: "Clear Terms",
        desc: "Defined usage limits and maintenance requirements.",
      },
      {
        title: "Legal Compliance",
        desc: "Ensures adherence to vehicle leasing laws.",
      },
    ],
    legalFramework: [
      {
        title: "Motor Vehicle Act",
        desc: "Compliance with vehicle leasing regulations.",
      },
      {
        title: "Insurance Requirements",
        desc: "Mandatory insurance coverage terms.",
      },
    ],
    steps: [
      {
        title: "Vehicle Information",
        desc: "Enter vehicle details and condition.",
      },
      {
        title: "Lease Terms",
        desc: "Specify lease duration and conditions.",
      },
      {
        title: "Complete Lease",
        desc: "Generate your vehicle lease agreement.",
      },
    ],
    whyChooseUs: [
      {
        title: "Vehicle Expertise",
        desc: "Specialized in vehicle lease agreements.",
      },
      {
        title: "Comprehensive Coverage",
        desc: "Complete protection for your vehicle lease.",
      },
    ],
    faqs: [
      {
        question: "What about mileage limits?",
        answer:
          "The agreement specifies annual mileage limits and excess charges.",
      },
      {
        question: "Who handles maintenance?",
        answer:
          "Maintenance responsibilities are clearly defined in the agreement.",
      },
    ],
  },
};

export const Notices = {
  NoticeDishonour: {
    id: "NoticeDishonour",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Looking to rent out your flat or move into a new one? MyLegalInstant.com provides expertly crafted Flat Rent Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is a Notice for Dishonour of Cheque?",
      description:
        "A Address Affidavit  is a legally binding document between a landlord (flat owner) and a tenant that outlines the terms and conditions for renting a residential flat. It protects the interests of both parties by defining their roles, rights, and responsibilities while ensuring compliance with applicable laws.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Financial Terms",
        description: "Specifies rent, security deposit, and payment terms.",
      },
      {
        icon: "Calendar",
        title: "Duration & Terms",
        description: "Details the lease duration and renewal conditions.",
      },
      {
        icon: "FileText",
        title: "Property Details",
        description: "Comprehensive details of the property and its condition.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Legal Protection",
        desc: "Safeguards both parties' rights and obligations under the law.",
      },
      {
        title: "Clear Expectations",
        desc: "Sets clear guidelines for property usage and maintenance.",
      },
      {
        title: "Dispute Prevention",
        desc: "Minimizes potential conflicts by documenting all terms clearly.",
      },
    ],
    legalFramework: [
      {
        title: "The Indian Contract Act, 1872",
        desc: "Establishes the legality of contracts and obligations between parties.",
      },
      {
        title: "Rent Control Act",
        desc: "Governs the relationship between landlords and tenants.",
      },
    ],
    steps: [
      {
        title: "Fill Details",
        desc: "Enter all required information about the property and parties involved.",
      },
      {
        title: "Review Terms",
        desc: "Carefully review all terms and conditions of the agreement.",
      },
      {
        title: "Generate & Download",
        desc: "Get your legally-verified agreement instantly.",
      },
    ],
    whyChooseUs: [
      {
        title: "Expert Legal Team",
        desc: "Agreements crafted by experienced legal professionals.",
      },
      {
        title: "Quick & Easy",
        desc: "Generate your agreement in minutes, not days.",
      },
    ],
    faqs: [
      {
        question: "Is a residential lease agreement mandatory?",
        answer:
          "While not legally mandatory, it's highly recommended to protect both parties' interests and prevent future disputes.",
      },
      {
        question: "What should be included in the agreement?",
        answer:
          "Key elements include rent amount, security deposit, duration, maintenance responsibilities, and terms of use.",
      },
    ],
  },
  NoticeDissolution: {
    id: "NoticeDissolution",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Need a Affidavit ForChange? MyLegalInstant.com provides expertly crafted Commercial Lease Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "what is  Notice of Dissolution of Partnership ?",
      description:
        "A Commercial Lease Agreement is a legally binding contract between a property owner and a business tenant that outlines the terms for renting commercial space. It includes specific provisions for business use while protecting both parties' interests.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Commercial Terms",
        description: "Detailed commercial rent and security deposit structure.",
      },
      {
        icon: "Calendar",
        title: "Business Usage",
        description:
          "Specific terms for commercial property usage and modifications.",
      },
      {
        icon: "FileText",
        title: "Business Provisions",
        description: "Special clauses for business operations and signage.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Business Protection",
        desc: "Safeguards your business interests and investment.",
      },
      {
        title: "Commercial Compliance",
        desc: "Ensures compliance with commercial property regulations.",
      },
      {
        title: "Business Operations",
        desc: "Clear terms for business operations and modifications.",
      },
    ],
    legalFramework: [
      {
        title: "Commercial Tenancy Laws",
        desc: "Covers specific regulations for commercial property leasing.",
      },
      {
        title: "Business Property Rights",
        desc: "Protects rights related to commercial property usage.",
      },
    ],
    steps: [
      {
        title: "Business Details",
        desc: "Enter business and property information.",
      },
      {
        title: "Commercial Terms",
        desc: "Specify commercial terms and conditions.",
      },
      {
        title: "Generate Agreement",
        desc: "Get your commercial lease agreement instantly.",
      },
    ],
    whyChooseUs: [
      {
        title: "Commercial Expertise",
        desc: "Specialized in commercial property agreements.",
      },
      {
        title: "Business-Focused",
        desc: "Terms tailored for business operations.",
      },
    ],
    faqs: [
      {
        question: "What makes commercial leases different?",
        answer:
          "Commercial leases include specific provisions for business operations, modifications, and commercial use of the property.",
      },
      {
        question: "Are commercial terms negotiable?",
        answer:
          "Yes, commercial lease terms are typically negotiable to accommodate specific business needs.",
      },
    ],
  },
  NoticeClearance: {
    id: "NoticeClearance",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Renting equipment? MyLegalInstant.com provides expertly crafted Equipment Rental Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is an Notice of Clearance of Dues ?",
      description:
        "An Equipment Rental Agreement is a contract that outlines the terms for renting machinery, tools, or other equipment. It specifies usage conditions, maintenance responsibilities, and return requirements.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Rental Rates",
        description: "Clear pricing structure for equipment rental.",
      },
      {
        icon: "Calendar",
        title: "Usage Period",
        description: "Defined rental duration and extension terms.",
      },
      {
        icon: "Shield",
        title: "Equipment Protection",
        description: "Maintenance and damage liability terms.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Equipment Safety",
        desc: "Ensures proper handling and usage of equipment.",
      },
      {
        title: "Damage Protection",
        desc: "Clear terms for damage liability and insurance.",
      },
      {
        title: "Usage Guidelines",
        desc: "Specific instructions for equipment operation.",
      },
    ],
    legalFramework: [
      {
        title: "Equipment Safety Laws",
        desc: "Compliance with equipment safety regulations.",
      },
      {
        title: "Rental Regulations",
        desc: "Legal requirements for equipment rental.",
      },
    ],
    steps: [
      {
        title: "Equipment Details",
        desc: "Specify equipment information and condition.",
      },
      {
        title: "Rental Terms",
        desc: "Set rental duration and conditions.",
      },
      {
        title: "Complete Agreement",
        desc: "Generate your equipment rental agreement.",
      },
    ],
    whyChooseUs: [
      {
        title: "Equipment Expertise",
        desc: "Specialized in equipment rental agreements.",
      },
      {
        title: "Complete Protection",
        desc: "Comprehensive terms for equipment safety.",
      },
    ],
    faqs: [
      {
        question: "Is equipment insurance required?",
        answer:
          "Most equipment rentals require insurance coverage for damage protection.",
      },
      {
        question: "What about maintenance?",
        answer:
          "The agreement specifies maintenance responsibilities and procedures.",
      },
    ],
  },
  NoticeFaultyProduct: {
    id: "NoticeFaultyProduct",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Need a vehicle lease? MyLegalInstant.com provides expertly crafted Vehicle Lease Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is a Notice for Faulty Product?",
      description:
        "A Vehicle Lease Agreement is a contract that details the terms for leasing a vehicle, including usage rights, maintenance responsibilities, and return conditions.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Lease Payments",
        description: "Monthly payment terms and security deposit.",
      },
      {
        icon: "Clock",
        title: "Lease Duration",
        description: "Specified lease term and mileage limits.",
      },
      {
        icon: "Shield",
        title: "Vehicle Protection",
        description: "Insurance and maintenance requirements.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Vehicle Protection",
        desc: "Safeguards against improper use and damage.",
      },
      {
        title: "Clear Terms",
        desc: "Defined usage limits and maintenance requirements.",
      },
      {
        title: "Legal Compliance",
        desc: "Ensures adherence to vehicle leasing laws.",
      },
    ],
    legalFramework: [
      {
        title: "Motor Vehicle Act",
        desc: "Compliance with vehicle leasing regulations.",
      },
      {
        title: "Insurance Requirements",
        desc: "Mandatory insurance coverage terms.",
      },
    ],
    steps: [
      {
        title: "Vehicle Information",
        desc: "Enter vehicle details and condition.",
      },
      {
        title: "Lease Terms",
        desc: "Specify lease duration and conditions.",
      },
      {
        title: "Complete Lease",
        desc: "Generate your vehicle lease agreement.",
      },
    ],
    whyChooseUs: [
      {
        title: "Vehicle Expertise",
        desc: "Specialized in vehicle lease agreements.",
      },
      {
        title: "Comprehensive Coverage",
        desc: "Complete protection for your vehicle lease.",
      },
    ],
    faqs: [
      {
        question: "What about mileage limits?",
        answer:
          "The agreement specifies annual mileage limits and excess charges.",
      },
      {
        question: "Who handles maintenance?",
        answer:
          "Maintenance responsibilities are clearly defined in the agreement.",
      },
    ],
  },
  noticenonpayemt: {
    id: "noticenonpayemt",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Need a Affidavit ForChange? MyLegalInstant.com provides expertly crafted Commercial Lease Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "what is  Notice for Non- Payment of Bill?",
      description:
        "A leaveand Lease Agreement is a legally binding contract between a property owner and a business tenant that outlines the terms for renting commercial space. It includes specific provisions for business use while protecting both parties' interests.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Commercial Terms",
        description: "Detailed commercial rent and security deposit structure.",
      },
      {
        icon: "Calendar",
        title: "Business Usage",
        description:
          "Specific terms for commercial property usage and modifications.",
      },
      {
        icon: "FileText",
        title: "Business Provisions",
        description: "Special clauses for business operations and signage.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Business Protection",
        desc: "Safeguards your business interests and investment.",
      },
      {
        title: "Commercial Compliance",
        desc: "Ensures compliance with commercial property regulations.",
      },
      {
        title: "Business Operations",
        desc: "Clear terms for business operations and modifications.",
      },
    ],
    legalFramework: [
      {
        title: "Commercial Tenancy Laws",
        desc: "Covers specific regulations for commercial property leasing.",
      },
      {
        title: "Business Property Rights",
        desc: "Protects rights related to commercial property usage.",
      },
    ],
    steps: [
      {
        title: "Business Details",
        desc: "Enter business and property information.",
      },
      {
        title: "Commercial Terms",
        desc: "Specify commercial terms and conditions.",
      },
      {
        title: "Generate Agreement",
        desc: "Get your commercial lease agreement instantly.",
      },
    ],
    whyChooseUs: [
      {
        title: "Commercial Expertise",
        desc: "Specialized in commercial property agreements.",
      },
      {
        title: "Business-Focused",
        desc: "Terms tailored for business operations.",
      },
    ],
    faqs: [
      {
        question: "What makes commercial leases different?",
        answer:
          "Commercial leases include specific provisions for business operations, modifications, and commercial use of the property.",
      },
      {
        question: "Are commercial terms negotiable?",
        answer:
          "Yes, commercial lease terms are typically negotiable to accommodate specific business needs.",
      },
    ],
  },
  noticesalaries: {
    id: "noticesalaries",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Renting equipment? MyLegalInstant.com provides expertly crafted Equipment Rental Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is a Notice for non-payment of salaries ?",
      description:
        "An Equipment Rental Agreement is a contract that outlines the terms for renting machinery, tools, or other equipment. It specifies usage conditions, maintenance responsibilities, and return requirements.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Rental Rates",
        description: "Clear pricing structure for equipment rental.",
      },
      {
        icon: "Calendar",
        title: "Usage Period",
        description: "Defined rental duration and extension terms.",
      },
      {
        icon: "Shield",
        title: "Equipment Protection",
        description: "Maintenance and damage liability terms.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Equipment Safety",
        desc: "Ensures proper handling and usage of equipment.",
      },
      {
        title: "Damage Protection",
        desc: "Clear terms for damage liability and insurance.",
      },
      {
        title: "Usage Guidelines",
        desc: "Specific instructions for equipment operation.",
      },
    ],
    legalFramework: [
      {
        title: "Equipment Safety Laws",
        desc: "Compliance with equipment safety regulations.",
      },
      {
        title: "Rental Regulations",
        desc: "Legal requirements for equipment rental.",
      },
    ],
    steps: [
      {
        title: "Equipment Details",
        desc: "Specify equipment information and condition.",
      },
      {
        title: "Rental Terms",
        desc: "Set rental duration and conditions.",
      },
      {
        title: "Complete Agreement",
        desc: "Generate your equipment rental agreement.",
      },
    ],
    whyChooseUs: [
      {
        title: "Equipment Expertise",
        desc: "Specialized in equipment rental agreements.",
      },
      {
        title: "Complete Protection",
        desc: "Comprehensive terms for equipment safety.",
      },
    ],
    faqs: [
      {
        question: "Is equipment insurance required?",
        answer:
          "Most equipment rentals require insurance coverage for damage protection.",
      },
      {
        question: "What about maintenance?",
        answer:
          "The agreement specifies maintenance responsibilities and procedures.",
      },
    ],
  },
  Specificperf: {
    id: "Specificperf",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Need a vehicle lease? MyLegalInstant.com provides expertly crafted Vehicle Lease Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is a Notice for Specific Performance Of Contract?",
      description:
        "A Vehicle Lease Agreement is a contract that details the terms for leasing a vehicle, including usage rights, maintenance responsibilities, and return conditions.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Lease Payments",
        description: "Monthly payment terms and security deposit.",
      },
      {
        icon: "Clock",
        title: "Lease Duration",
        description: "Specified lease term and mileage limits.",
      },
      {
        icon: "Shield",
        title: "Vehicle Protection",
        description: "Insurance and maintenance requirements.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Vehicle Protection",
        desc: "Safeguards against improper use and damage.",
      },
      {
        title: "Clear Terms",
        desc: "Defined usage limits and maintenance requirements.",
      },
      {
        title: "Legal Compliance",
        desc: "Ensures adherence to vehicle leasing laws.",
      },
    ],
    legalFramework: [
      {
        title: "Motor Vehicle Act",
        desc: "Compliance with vehicle leasing regulations.",
      },
      {
        title: "Insurance Requirements",
        desc: "Mandatory insurance coverage terms.",
      },
    ],
    steps: [
      {
        title: "Vehicle Information",
        desc: "Enter vehicle details and condition.",
      },
      {
        title: "Lease Terms",
        desc: "Specify lease duration and conditions.",
      },
      {
        title: "Complete Lease",
        desc: "Generate your vehicle lease agreement.",
      },
    ],
    whyChooseUs: [
      {
        title: "Vehicle Expertise",
        desc: "Specialized in vehicle lease agreements.",
      },
      {
        title: "Comprehensive Coverage",
        desc: "Complete protection for your vehicle lease.",
      },
    ],
    faqs: [
      {
        question: "What about mileage limits?",
        answer:
          "The agreement specifies annual mileage limits and excess charges.",
      },
      {
        question: "Who handles maintenance?",
        answer:
          "Maintenance responsibilities are clearly defined in the agreement.",
      },
    ],
  },
};

export const PowerAttorney = {
  GeneralPower: {
    id: "GeneralPower",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Create Your General Power of Attorney (GPA) Effortlessly with MyLegalInstant. Our platform simplifies the process, ensuring you have the necessary legal authority to manage your affairs seamlessly.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is a General Power of Attorney?",
      description:
        "A GPA is a legal document that empowers one person (the agent) to act on behalf of another person (the principal) in various legal, financial, and property-related matters.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Financial Terms",
        description: "Specifies rent, security deposit, and payment terms.",
      },
      {
        icon: "Calendar",
        title: "Duration & Terms",
        description: "Details the lease duration and renewal conditions.",
      },
      {
        icon: "FileText",
        title: "Property Details",
        description: "Comprehensive details of the property and its condition.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Legal Protection",
        desc: "Safeguards both parties' rights and obligations under the law.",
      },
      {
        title: "Clear Expectations",
        desc: "Sets clear guidelines for property usage and maintenance.",
      },
      {
        title: "Dispute Prevention",
        desc: "Minimizes potential conflicts by documenting all terms clearly.",
      },
    ],
    legalFramework: [
      { title: "Indian Contract Act, 1872", desc: "Governs the relationship between the principal and agent." },
      { title: "Power of Attorney Act, 1882", desc: "Outlines legal requirements for creating a Power of Attorney." },
      { title: "Registration Act, 1908", desc: "Mandates registration of GPAs in certain cases." },
      { title: "Stamp Act", desc: "Requires payment of appropriate stamp duty as per state laws." },
    ],
    steps: [
      { title: "Click on 'Create Now'", desc: "Begin your journey with a single click." },
      { title: "Submit Your Query", desc: "Provide details and receive a response within minutes." },
      { title: "Consultation", desc: "Legal experts will guide you in drafting a tailored GPA." },
      { title: "Customization", desc: "We incorporate necessary clauses for a personalized GPA." },
      { title: "Review & Approval", desc: "Review the draft and provide feedback." },
      { title: "Instant Delivery", desc: "Receive your GPA digitally or via doorstep delivery." },
    ],
    whyChooseUs: [
      { title: "Continuity", desc: "Ensures your affairs are managed even when you are unable to do so." },
      { title: "Flexibility", desc: "Allows your agent to make decisions in finance, healthcare, and property." },
      { title: "Legal Authority", desc: "Provides legal backing to your agent to act on your behalf." },
      { title: "Convenience", desc: "Your agent can handle matters when you are unavailable." },
    ],
    faqs: [
      { question: "What powers does a GPA grant?", answer: "Allows the agent to handle finance, property, and legal affairs." },
      { question: "Is a GPA legally valid in India?", answer: "Yes, if properly drafted, signed, and executed per Indian laws." },
      { question: "Do I need to register my GPA?", answer: "Yes, if it deals with immovable property." },
      { question: "Is notarization required?", answer: "Not mandatory but recommended for property-related GPAs." },
      { question: "Can I revoke a GPA?", answer: "Yes, unless it is explicitly stated as irrevocable." },
      { question: "How long does it take to create a GPA?", answer: "With MyLegalInstant, it can be ready within minutes." },
      { question: "Is the service available across India?", answer: "Yes, with digital and doorstep delivery options." },
      { question: "What if my agent misuses their power?", answer: "Legal action can be taken against misuse of authority." },
    ],
  },
  AttorneyProperty: {
    id: "AttorneyProperty",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Need a Affidavit ForChange? MyLegalInstant.com provides expertly crafted Commercial Lease Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "what is  Power of Attorney of Property ?",
      description:
        "A Commercial Lease Agreement is a legally binding contract between a property owner and a business tenant that outlines the terms for renting commercial space. It includes specific provisions for business use while protecting both parties' interests.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Commercial Terms",
        description: "Detailed commercial rent and security deposit structure.",
      },
      {
        icon: "Calendar",
        title: "Business Usage",
        description:
          "Specific terms for commercial property usage and modifications.",
      },
      {
        icon: "FileText",
        title: "Business Provisions",
        description: "Special clauses for business operations and signage.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Business Protection",
        desc: "Safeguards your business interests and investment.",
      },
      {
        title: "Commercial Compliance",
        desc: "Ensures compliance with commercial property regulations.",
      },
      {
        title: "Business Operations",
        desc: "Clear terms for business operations and modifications.",
      },
    ],
    legalFramework: [
      {
        title: "Power of Attorney Act, 1882",
        desc: "Defines the legal framework for granting authority.",
      },
      {
        title: "Registration Act, 1908",
        desc: "Mandates registration for GPA involving immovable property.",
      },
      {
        title: "Indian Stamp Act",
        desc: "Requires appropriate stamp duty for legal validity.",
      },
    ],
    steps: [
      {
        title: "Submit Your Query",
        desc: "Provide details about your property-related needs.",
      },
      {
        title: "Legal Consultation",
        desc: "Our experts guide you through the best legal approach.",
      },
      {
        title: "Tailored Drafting",
        desc: "We customize the GPA document based on your requirements.",
      },
      {
        title: "Instant Delivery",
        desc: "Receive a digital or physical copy of your GPA instantly.",
      },
    ],
    whyChooseUs: [
      {
        title: "Expert Consultation",
        desc: "Our legal team ensures your document is legally sound.",
      },
      {
        title: "Quick Turnaround",
        desc: "Get your GPA drafted within minutes.",
      },
      {
        title: "Nationwide Coverage",
        desc: "Available for property transactions anywhere in India.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between General and Special Power of Attorney?",
        answer:
          "A General Power of Attorney grants broad powers, while a Special Power of Attorney is limited to specific tasks.",
      },
      {
        question: "Is it necessary to register a GPA for Property?",
        answer:
          "Yes, registration is mandatory for GPAs involving immovable property to ensure legal validity.",
      },
      {
        question: "Can I revoke a GPA for Property?",
        answer:
          "Yes, you can revoke it at any time unless it is irrevocable under specific terms.",
      },
      {
        question: "Do I need to be physically present to create a GPA?",
        answer:
          "No, the entire process can be completed online with MyLegalInstant.com.",
      },
    ],
  },
  AttorneyNRI: {
    id: "AttorneyNRI",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Renting equipment? MyLegalInstant.com provides expertly crafted Equipment Rental Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is an Power of Attorney for NRI?",
      description:
        "An Equipment Rental Agreement is a contract that outlines the terms for renting machinery, tools, or other equipment. It specifies usage conditions, maintenance responsibilities, and return requirements.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Rental Rates",
        description: "Clear pricing structure for equipment rental.",
      },
      {
        icon: "Calendar",
        title: "Usage Period",
        description: "Defined rental duration and extension terms.",
      },
      {
        icon: "Shield",
        title: "Equipment Protection",
        description: "Maintenance and damage liability terms.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Equipment Safety",
        desc: "Ensures proper handling and usage of equipment.",
      },
      {
        title: "Damage Protection",
        desc: "Clear terms for damage liability and insurance.",
      },
      {
        title: "Usage Guidelines",
        desc: "Specific instructions for equipment operation.",
      },
    ],
    legalFramework: [
      {
        title: "Equipment Safety Laws",
        desc: "Compliance with equipment safety regulations.",
      },
      {
        title: "Rental Regulations",
        desc: "Legal requirements for equipment rental.",
      },
    ],
    steps: [
      {
        title: "Equipment Details",
        desc: "Specify equipment information and condition.",
      },
      {
        title: "Rental Terms",
        desc: "Set rental duration and conditions.",
      },
      {
        title: "Complete Agreement",
        desc: "Generate your equipment rental agreement.",
      },
    ],
    whyChooseUs: [
      {
        title: "Equipment Expertise",
        desc: "Specialized in equipment rental agreements.",
      },
      {
        title: "Complete Protection",
        desc: "Comprehensive terms for equipment safety.",
      },
    ],
    faqs: [
      {
        question: "Is equipment insurance required?",
        answer:
          "Most equipment rentals require insurance coverage for damage protection.",
      },
      {
        question: "What about maintenance?",
        answer:
          "The agreement specifies maintenance responsibilities and procedures.",
      },
    ],
  },
  RevocationPower: {
    id: "RevocationPower",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Need a vehicle lease? MyLegalInstant.com provides expertly crafted Vehicle Lease Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is a Revocation of Power of Attorney?",
      description:
        "A Vehicle Lease Agreement is a contract that details the terms for leasing a vehicle, including usage rights, maintenance responsibilities, and return conditions.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Lease Payments",
        description: "Monthly payment terms and security deposit.",
      },
      {
        icon: "Clock",
        title: "Lease Duration",
        description: "Specified lease term and mileage limits.",
      },
      {
        icon: "Shield",
        title: "Vehicle Protection",
        description: "Insurance and maintenance requirements.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Vehicle Protection",
        desc: "Safeguards against improper use and damage.",
      },
      {
        title: "Clear Terms",
        desc: "Defined usage limits and maintenance requirements.",
      },
      {
        title: "Legal Compliance",
        desc: "Ensures adherence to vehicle leasing laws.",
      },
    ],
    legalFramework: [
      {
        title: "Motor Vehicle Act",
        desc: "Compliance with vehicle leasing regulations.",
      },
      {
        title: "Insurance Requirements",
        desc: "Mandatory insurance coverage terms.",
      },
    ],
    steps: [
      {
        title: "Vehicle Information",
        desc: "Enter vehicle details and condition.",
      },
      {
        title: "Lease Terms",
        desc: "Specify lease duration and conditions.",
      },
      {
        title: "Complete Lease",
        desc: "Generate your vehicle lease agreement.",
      },
    ],
    whyChooseUs: [
      {
        title: "Vehicle Expertise",
        desc: "Specialized in vehicle lease agreements.",
      },
      {
        title: "Comprehensive Coverage",
        desc: "Complete protection for your vehicle lease.",
      },
    ],
    faqs: [
      {
        question: "What about mileage limits?",
        answer:
          "The agreement specifies annual mileage limits and excess charges.",
      },
      {
        question: "Who handles maintenance?",
        answer:
          "Maintenance responsibilities are clearly defined in the agreement.",
      },
    ],
  },

  SpecialPower: {
    id: "SpecialPower",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Renting equipment? MyLegalInstant.com provides expertly crafted Equipment Rental Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is Special Power of Attorney?",
      description:
        "An Equipment Rental Agreement is a contract that outlines the terms for renting machinery, tools, or other equipment. It specifies usage conditions, maintenance responsibilities, and return requirements.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Rental Rates",
        description: "Clear pricing structure for equipment rental.",
      },
      {
        icon: "Calendar",
        title: "Usage Period",
        description: "Defined rental duration and extension terms.",
      },
      {
        icon: "Shield",
        title: "Equipment Protection",
        description: "Maintenance and damage liability terms.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Equipment Safety",
        desc: "Ensures proper handling and usage of equipment.",
      },
      {
        title: "Damage Protection",
        desc: "Clear terms for damage liability and insurance.",
      },
      {
        title: "Usage Guidelines",
        desc: "Specific instructions for equipment operation.",
      },
    ],
    legalFramework: [
      {
        title: "Equipment Safety Laws",
        desc: "Compliance with equipment safety regulations.",
      },
      {
        title: "Rental Regulations",
        desc: "Legal requirements for equipment rental.",
      },
    ],
    steps: [
      {
        title: "Equipment Details",
        desc: "Specify equipment information and condition.",
      },
      {
        title: "Rental Terms",
        desc: "Set rental duration and conditions.",
      },
      {
        title: "Complete Agreement",
        desc: "Generate your equipment rental agreement.",
      },
    ],
    whyChooseUs: [
      {
        title: "Equipment Expertise",
        desc: "Specialized in equipment rental agreements.",
      },
      {
        title: "Complete Protection",
        desc: "Comprehensive terms for equipment safety.",
      },
    ],
    faqs: [
      {
        question: "Is equipment insurance required?",
        answer:
          "Most equipment rentals require insurance coverage for damage protection.",
      },
      {
        question: "What about maintenance?",
        answer:
          "The agreement specifies maintenance responsibilities and procedures.",
      },
    ],
  },
  DevelopmentProperty: {
    id: "DevelopmentProperty",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Need a vehicle lease? MyLegalInstant.com provides expertly crafted Vehicle Lease Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is a Power of Attorney for Development of Property?",
      description:
        "A Vehicle Lease Agreement is a contract that details the terms for leasing a vehicle, including usage rights, maintenance responsibilities, and return conditions.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Lease Payments",
        description: "Monthly payment terms and security deposit.",
      },
      {
        icon: "Clock",
        title: "Lease Duration",
        description: "Specified lease term and mileage limits.",
      },
      {
        icon: "Shield",
        title: "Vehicle Protection",
        description: "Insurance and maintenance requirements.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Vehicle Protection",
        desc: "Safeguards against improper use and damage.",
      },
      {
        title: "Clear Terms",
        desc: "Defined usage limits and maintenance requirements.",
      },
      {
        title: "Legal Compliance",
        desc: "Ensures adherence to vehicle leasing laws.",
      },
    ],
    legalFramework: [
      {
        title: "Motor Vehicle Act",
        desc: "Compliance with vehicle leasing regulations.",
      },
      {
        title: "Insurance Requirements",
        desc: "Mandatory insurance coverage terms.",
      },
    ],
    steps: [
      {
        title: "Vehicle Information",
        desc: "Enter vehicle details and condition.",
      },
      {
        title: "Lease Terms",
        desc: "Specify lease duration and conditions.",
      },
      {
        title: "Complete Lease",
        desc: "Generate your vehicle lease agreement.",
      },
    ],
    whyChooseUs: [
      {
        title: "Vehicle Expertise",
        desc: "Specialized in vehicle lease agreements.",
      },
      {
        title: "Comprehensive Coverage",
        desc: "Complete protection for your vehicle lease.",
      },
    ],
    faqs: [
      {
        question: "What about mileage limits?",
        answer:
          "The agreement specifies annual mileage limits and excess charges.",
      },
      {
        question: "Who handles maintenance?",
        answer:
          "Maintenance responsibilities are clearly defined in the agreement.",
      },
    ],
  },
};

export const postContractual = {
  VariationAmendment: {
    id: "VariationAmendment",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Looking to rent out your flat or move into a new one? MyLegalInstant.com provides expertly crafted Flat Rent Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is a Variation/Amendment Agreements?",
      description:
        "A Address Affidavit  is a legally binding document between a landlord (flat owner) and a tenant that outlines the terms and conditions for renting a residential flat. It protects the interests of both parties by defining their roles, rights, and responsibilities while ensuring compliance with applicable laws.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Financial Terms",
        description: "Specifies rent, security deposit, and payment terms.",
      },
      {
        icon: "Calendar",
        title: "Duration & Terms",
        description: "Details the lease duration and renewal conditions.",
      },
      {
        icon: "FileText",
        title: "Property Details",
        description: "Comprehensive details of the property and its condition.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Legal Protection",
        desc: "Safeguards both parties' rights and obligations under the law.",
      },
      {
        title: "Clear Expectations",
        desc: "Sets clear guidelines for property usage and maintenance.",
      },
      {
        title: "Dispute Prevention",
        desc: "Minimizes potential conflicts by documenting all terms clearly.",
      },
    ],
    legalFramework: [
      {
        title: "The Indian Contract Act, 1872",
        desc: "Establishes the legality of contracts and obligations between parties.",
      },
      {
        title: "Rent Control Act",
        desc: "Governs the relationship between landlords and tenants.",
      },
    ],
    steps: [
      {
        title: "Fill Details",
        desc: "Enter all required information about the property and parties involved.",
      },
      {
        title: "Review Terms",
        desc: "Carefully review all terms and conditions of the agreement.",
      },
      {
        title: "Generate & Download",
        desc: "Get your legally-verified agreement instantly.",
      },
    ],
    whyChooseUs: [
      {
        title: "Expert Legal Team",
        desc: "Agreements crafted by experienced legal professionals.",
      },
      {
        title: "Quick & Easy",
        desc: "Generate your agreement in minutes, not days.",
      },
    ],
    faqs: [
      {
        question: "Is a residential lease agreement mandatory?",
        answer:
          "While not legally mandatory, it's highly recommended to protect both parties' interests and prevent future disputes.",
      },
      {
        question: "What should be included in the agreement?",
        answer:
          "Key elements include rent amount, security deposit, duration, maintenance responsibilities, and terms of use.",
      },
    ],
  },
  TerminationAgreement: {
    id: "TerminationAgreement",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Need a Affidavit ForChange? MyLegalInstant.com provides expertly crafted Commercial Lease Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "what is  Termination  agreement ?",
      description:
        "A Commercial Lease Agreement is a legally binding contract between a property owner and a business tenant that outlines the terms for renting commercial space. It includes specific provisions for business use while protecting both parties' interests.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Commercial Terms",
        description: "Detailed commercial rent and security deposit structure.",
      },
      {
        icon: "Calendar",
        title: "Business Usage",
        description:
          "Specific terms for commercial property usage and modifications.",
      },
      {
        icon: "FileText",
        title: "Business Provisions",
        description: "Special clauses for business operations and signage.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Business Protection",
        desc: "Safeguards your business interests and investment.",
      },
      {
        title: "Commercial Compliance",
        desc: "Ensures compliance with commercial property regulations.",
      },
      {
        title: "Business Operations",
        desc: "Clear terms for business operations and modifications.",
      },
    ],
    legalFramework: [
      {
        title: "Commercial Tenancy Laws",
        desc: "Covers specific regulations for commercial property leasing.",
      },
      {
        title: "Business Property Rights",
        desc: "Protects rights related to commercial property usage.",
      },
    ],
    steps: [
      {
        title: "Business Details",
        desc: "Enter business and property information.",
      },
      {
        title: "Commercial Terms",
        desc: "Specify commercial terms and conditions.",
      },
      {
        title: "Generate Agreement",
        desc: "Get your commercial lease agreement instantly.",
      },
    ],
    whyChooseUs: [
      {
        title: "Commercial Expertise",
        desc: "Specialized in commercial property agreements.",
      },
      {
        title: "Business-Focused",
        desc: "Terms tailored for business operations.",
      },
    ],
    faqs: [
      {
        question: "What makes commercial leases different?",
        answer:
          "Commercial leases include specific provisions for business operations, modifications, and commercial use of the property.",
      },
      {
        question: "Are commercial terms negotiable?",
        answer:
          "Yes, commercial lease terms are typically negotiable to accommodate specific business needs.",
      },
    ],
  },
  SideLetters: {
    id: "SideLetters",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Need a Affidavit ForChange? MyLegalInstant.com provides expertly crafted Commercial Lease Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "what is  Side Letters agreement ?",
      description:
        "A Commercial Lease Agreement is a legally binding contract between a property owner and a business tenant that outlines the terms for renting commercial space. It includes specific provisions for business use while protecting both parties' interests.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Commercial Terms",
        description: "Detailed commercial rent and security deposit structure.",
      },
      {
        icon: "Calendar",
        title: "Business Usage",
        description:
          "Specific terms for commercial property usage and modifications.",
      },
      {
        icon: "FileText",
        title: "Business Provisions",
        description: "Special clauses for business operations and signage.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Business Protection",
        desc: "Safeguards your business interests and investment.",
      },
      {
        title: "Commercial Compliance",
        desc: "Ensures compliance with commercial property regulations.",
      },
      {
        title: "Business Operations",
        desc: "Clear terms for business operations and modifications.",
      },
    ],
    legalFramework: [
      {
        title: "Commercial Tenancy Laws",
        desc: "Covers specific regulations for commercial property leasing.",
      },
      {
        title: "Business Property Rights",
        desc: "Protects rights related to commercial property usage.",
      },
    ],
    steps: [
      {
        title: "Business Details",
        desc: "Enter business and property information.",
      },
      {
        title: "Commercial Terms",
        desc: "Specify commercial terms and conditions.",
      },
      {
        title: "Generate Agreement",
        desc: "Get your commercial lease agreement instantly.",
      },
    ],
    whyChooseUs: [
      {
        title: "Commercial Expertise",
        desc: "Specialized in commercial property agreements.",
      },
      {
        title: "Business-Focused",
        desc: "Terms tailored for business operations.",
      },
    ],
    faqs: [
      {
        question: "What makes commercial leases different?",
        answer:
          "Commercial leases include specific provisions for business operations, modifications, and commercial use of the property.",
      },
      {
        question: "Are commercial terms negotiable?",
        answer:
          "Yes, commercial lease terms are typically negotiable to accommodate specific business needs.",
      },
    ],
  },
  InterimAgreement: {
    id: "InterimAgreement",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Renting equipment? MyLegalInstant.com provides expertly crafted Equipment Rental Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is an  Interim agreement  ?",
      description:
        "An Equipment Rental Agreement is a contract that outlines the terms for renting machinery, tools, or other equipment. It specifies usage conditions, maintenance responsibilities, and return requirements.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Rental Rates",
        description: "Clear pricing structure for equipment rental.",
      },
      {
        icon: "Calendar",
        title: "Usage Period",
        description: "Defined rental duration and extension terms.",
      },
      {
        icon: "Shield",
        title: "Equipment Protection",
        description: "Maintenance and damage liability terms.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Equipment Safety",
        desc: "Ensures proper handling and usage of equipment.",
      },
      {
        title: "Damage Protection",
        desc: "Clear terms for damage liability and insurance.",
      },
      {
        title: "Usage Guidelines",
        desc: "Specific instructions for equipment operation.",
      },
    ],
    legalFramework: [
      {
        title: "Equipment Safety Laws",
        desc: "Compliance with equipment safety regulations.",
      },
      {
        title: "Rental Regulations",
        desc: "Legal requirements for equipment rental.",
      },
    ],
    steps: [
      {
        title: "Equipment Details",
        desc: "Specify equipment information and condition.",
      },
      {
        title: "Rental Terms",
        desc: "Set rental duration and conditions.",
      },
      {
        title: "Complete Agreement",
        desc: "Generate your equipment rental agreement.",
      },
    ],
    whyChooseUs: [
      {
        title: "Equipment Expertise",
        desc: "Specialized in equipment rental agreements.",
      },
      {
        title: "Complete Protection",
        desc: "Comprehensive terms for equipment safety.",
      },
    ],
    faqs: [
      {
        question: "Is equipment insurance required?",
        answer:
          "Most equipment rentals require insurance coverage for damage protection.",
      },
      {
        question: "What about maintenance?",
        answer:
          "The agreement specifies maintenance responsibilities and procedures.",
      },
    ],
  },
  ChangeOrder: {
    id: "ChangeOrder",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Need a vehicle lease? MyLegalInstant.com provides expertly crafted Vehicle Lease Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is a Change Order agreement?",
      description:
        "A Vehicle Lease Agreement is a contract that details the terms for leasing a vehicle, including usage rights, maintenance responsibilities, and return conditions.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Lease Payments",
        description: "Monthly payment terms and security deposit.",
      },
      {
        icon: "Clock",
        title: "Lease Duration",
        description: "Specified lease term and mileage limits.",
      },
      {
        icon: "Shield",
        title: "Vehicle Protection",
        description: "Insurance and maintenance requirements.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Vehicle Protection",
        desc: "Safeguards against improper use and damage.",
      },
      {
        title: "Clear Terms",
        desc: "Defined usage limits and maintenance requirements.",
      },
      {
        title: "Legal Compliance",
        desc: "Ensures adherence to vehicle leasing laws.",
      },
    ],
    legalFramework: [
      {
        title: "Motor Vehicle Act",
        desc: "Compliance with vehicle leasing regulations.",
      },
      {
        title: "Insurance Requirements",
        desc: "Mandatory insurance coverage terms.",
      },
    ],
    steps: [
      {
        title: "Vehicle Information",
        desc: "Enter vehicle details and condition.",
      },
      {
        title: "Lease Terms",
        desc: "Specify lease duration and conditions.",
      },
      {
        title: "Complete Lease",
        desc: "Generate your vehicle lease agreement.",
      },
    ],
    whyChooseUs: [
      {
        title: "Vehicle Expertise",
        desc: "Specialized in vehicle lease agreements.",
      },
      {
        title: "Comprehensive Coverage",
        desc: "Complete protection for your vehicle lease.",
      },
    ],
    faqs: [
      {
        question: "What about mileage limits?",
        answer:
          "The agreement specifies annual mileage limits and excess charges.",
      },
      {
        question: "Who handles maintenance?",
        answer:
          "Maintenance responsibilities are clearly defined in the agreement.",
      },
    ],
  },
  ReleasesContract: {
    id: "ReleasesContract",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Renting equipment? MyLegalInstant.com provides expertly crafted Equipment Rental Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is an Releases/Contract Cancellation agreement  ?",
      description:
        "An Equipment Rental Agreement is a contract that outlines the terms for renting machinery, tools, or other equipment. It specifies usage conditions, maintenance responsibilities, and return requirements.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Rental Rates",
        description: "Clear pricing structure for equipment rental.",
      },
      {
        icon: "Calendar",
        title: "Usage Period",
        description: "Defined rental duration and extension terms.",
      },
      {
        icon: "Shield",
        title: "Equipment Protection",
        description: "Maintenance and damage liability terms.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Equipment Safety",
        desc: "Ensures proper handling and usage of equipment.",
      },
      {
        title: "Damage Protection",
        desc: "Clear terms for damage liability and insurance.",
      },
      {
        title: "Usage Guidelines",
        desc: "Specific instructions for equipment operation.",
      },
    ],
    legalFramework: [
      {
        title: "Equipment Safety Laws",
        desc: "Compliance with equipment safety regulations.",
      },
      {
        title: "Rental Regulations",
        desc: "Legal requirements for equipment rental.",
      },
    ],
    steps: [
      {
        title: "Equipment Details",
        desc: "Specify equipment information and condition.",
      },
      {
        title: "Rental Terms",
        desc: "Set rental duration and conditions.",
      },
      {
        title: "Complete Agreement",
        desc: "Generate your equipment rental agreement.",
      },
    ],
    whyChooseUs: [
      {
        title: "Equipment Expertise",
        desc: "Specialized in equipment rental agreements.",
      },
      {
        title: "Complete Protection",
        desc: "Comprehensive terms for equipment safety.",
      },
    ],
    faqs: [
      {
        question: "Is equipment insurance required?",
        answer:
          "Most equipment rentals require insurance coverage for damage protection.",
      },
      {
        question: "What about maintenance?",
        answer:
          "The agreement specifies maintenance responsibilities and procedures.",
      },
    ],
  },
  Postincorporation: {
    id: "Postincorporation",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Need a vehicle lease? MyLegalInstant.com provides expertly crafted Vehicle Lease Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is a Post incorporation Contract Adoption?",
      description:
        "A Vehicle Lease Agreement is a contract that details the terms for leasing a vehicle, including usage rights, maintenance responsibilities, and return conditions.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Lease Payments",
        description: "Monthly payment terms and security deposit.",
      },
      {
        icon: "Clock",
        title: "Lease Duration",
        description: "Specified lease term and mileage limits.",
      },
      {
        icon: "Shield",
        title: "Vehicle Protection",
        description: "Insurance and maintenance requirements.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Vehicle Protection",
        desc: "Safeguards against improper use and damage.",
      },
      {
        title: "Clear Terms",
        desc: "Defined usage limits and maintenance requirements.",
      },
      {
        title: "Legal Compliance",
        desc: "Ensures adherence to vehicle leasing laws.",
      },
    ],
    legalFramework: [
      {
        title: "Motor Vehicle Act",
        desc: "Compliance with vehicle leasing regulations.",
      },
      {
        title: "Insurance Requirements",
        desc: "Mandatory insurance coverage terms.",
      },
    ],
    steps: [
      {
        title: "Vehicle Information",
        desc: "Enter vehicle details and condition.",
      },
      {
        title: "Lease Terms",
        desc: "Specify lease duration and conditions.",
      },
      {
        title: "Complete Lease",
        desc: "Generate your vehicle lease agreement.",
      },
    ],
    whyChooseUs: [
      {
        title: "Vehicle Expertise",
        desc: "Specialized in vehicle lease agreements.",
      },
      {
        title: "Comprehensive Coverage",
        desc: "Complete protection for your vehicle lease.",
      },
    ],
    faqs: [
      {
        question: "What about mileage limits?",
        answer:
          "The agreement specifies annual mileage limits and excess charges.",
      },
      {
        question: "Who handles maintenance?",
        answer:
          "Maintenance responsibilities are clearly defined in the agreement.",
      },
    ],
  },
};

export const wills = {
  generalwill: {
    id: "generalwill",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Looking to rent out your flat or move into a new one? MyLegalInstant.com provides expertly crafted Flat Rent Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is a generalwill ?",
      description:
        "A Ageneralwill  is a legally binding document between a landlord (flat owner) and a tenant that outlines the terms and conditions for renting a residential flat. It protects the interests of both parties by defining their roles, rights, and responsibilities while ensuring compliance with applicable laws.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Financial Terms",
        description: "Specifies rent, security deposit, and payment terms.",
      },
      {
        icon: "Calendar",
        title: "Duration & Terms",
        description: "Details the lease duration and renewal conditions.",
      },
      {
        icon: "FileText",
        title: "Property Details",
        description: "Comprehensive details of the property and its condition.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Legal Protection",
        desc: "Safeguards both parties' rights and obligations under the law.",
      },
      {
        title: "Clear Expectations",
        desc: "Sets clear guidelines for property usage and maintenance.",
      },
      {
        title: "Dispute Prevention",
        desc: "Minimizes potential conflicts by documenting all terms clearly.",
      },
    ],
    legalFramework: [
      {
        title: "The Indian Contract Act, 1872",
        desc: "Establishes the legality of contracts and obligations between parties.",
      },
      {
        title: "Rent Control Act",
        desc: "Governs the relationship between landlords and tenants.",
      },
    ],
    steps: [
      {
        title: "Fill Details",
        desc: "Enter all required information about the property and parties involved.",
      },
      {
        title: "Review Terms",
        desc: "Carefully review all terms and conditions of the agreement.",
      },
      {
        title: "Generate & Download",
        desc: "Get your legally-verified agreement instantly.",
      },
    ],
    whyChooseUs: [
      {
        title: "Expert Legal Team",
        desc: "Agreements crafted by experienced legal professionals.",
      },
      {
        title: "Quick & Easy",
        desc: "Generate your agreement in minutes, not days.",
      },
    ],
    faqs: [
      {
        question: "Is a residential lease agreement mandatory?",
        answer:
          "While not legally mandatory, it's highly recommended to protect both parties' interests and prevent future disputes.",
      },
      {
        question: "What should be included in the agreement?",
        answer:
          "Key elements include rent amount, security deposit, duration, maintenance responsibilities, and terms of use.",
      },
    ],
  },
  Islamicwill: {
    id: "Islamicwill",
    hero: {
      title: "Welcome to",
      subtitle: "MyLegalInstant.com",
      description:
        "Need a Affidavit ForChange? MyLegalInstant.com provides expertly crafted Commercial Lease Agreements that are legally sound, customizable, and hassle-free.",
      buttonText: "Create Agreement Now",
      buttonLink: "/create-agreement",
      trustIndicators: ["Legally Verified", "Instant Download", "24/7 Support"],
    },
    whatIs: {
      title: "What is Islamicwill",
      description:
        "A Commercial Lease Agreement is a legally binding contract between a property owner and a business tenant that outlines the terms for renting commercial space. It includes specific provisions for business use while protecting both parties' interests.",
      image: "/api/placeholder/400/300",
    },
    features: [
      {
        icon: "DollarSign",
        title: "Commercial Terms",
        description: "Detailed commercial rent and security deposit structure.",
      },
      {
        icon: "Calendar",
        title: "Business Usage",
        description:
          "Specific terms for commercial property usage and modifications.",
      },
      {
        icon: "FileText",
        title: "Business Provisions",
        description: "Special clauses for business operations and signage.",
      },
    ],
    whyNeedAgreement: [
      {
        title: "Business Protection",
        desc: "Safeguards your business interests and investment.",
      },
      {
        title: "Commercial Compliance",
        desc: "Ensures compliance with commercial property regulations.",
      },
      {
        title: "Business Operations",
        desc: "Clear terms for business operations and modifications.",
      },
    ],
    legalFramework: [
      {
        title: "Commercial Tenancy Laws",
        desc: "Covers specific regulations for commercial property leasing.",
      },
      {
        title: "Business Property Rights",
        desc: "Protects rights related to commercial property usage.",
      },
    ],
    steps: [
      {
        title: "Business Details",
        desc: "Enter business and property information.",
      },
      {
        title: "Commercial Terms",
        desc: "Specify commercial terms and conditions.",
      },
      {
        title: "Generate Agreement",
        desc: "Get your commercial lease agreement instantly.",
      },
    ],
    whyChooseUs: [
      {
        title: "Commercial Expertise",
        desc: "Specialized in commercial property agreements.",
      },
      {
        title: "Business-Focused",
        desc: "Terms tailored for business operations.",
      },
    ],
    faqs: [
      {
        question: "What makes commercial leases different?",
        answer:
          "Commercial leases include specific provisions for business operations, modifications, and commercial use of the property.",
      },
      {
        question: "Are commercial terms negotiable?",
        answer:
          "Yes, commercial lease terms are typically negotiable to accommodate specific business needs.",
      },
    ],
  },
};
