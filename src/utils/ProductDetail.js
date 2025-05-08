import HoWImage from "../../src/assets/images/hwo.png";
import Benefits from "../../src/assets/images/benefits.png";
import WhyChooseUs from "../../src/assets/images/whyChoose.png";
import E11 from "../../src/assets/images/E11.png";
import E12 from "../../src/assets/images/E12.png";
import SW1 from "../../src/assets/images/SW1.png";
import S1 from "../../src/assets/images/s1.png";
import S2 from "../../src/assets/images/s2.png";
import S3 from "../../src/assets/images/s3.png";
import S4 from "../../src/assets/images/s4.png";
import S5 from "../../src/assets/images/s5.png";
import S6 from "../../src/assets/images/s6.png";
import E1 from "../../src/assets/images/E1.png";
import E2 from "../../src/assets/images/E2.png";
import E3 from "../../src/assets/images/E3.png";
import E4 from "../../src/assets/images/E4.png";
import I1 from "../../src/assets/images/I1.png";
import I2 from "../../src/assets/images/I2.png";
import I3 from "../../src/assets/images/I3.png";
// import C1 from "../../src/assets/images/C1.png";
import C2 from "../../src/assets/images/C2.png";
import C3 from "../../src/assets/images/C3.png";
import A1 from "../../src/assets/images/A1.png";
import A2 from "../../src/assets/images/A2.png";
import A3 from "../../src/assets/images/A3.png";
import CM1 from "../../src/assets/images/CM!.png";
import CM2 from "../../src/assets/images/CM2.png";
import CM3 from "../../src/assets/images/CM3.png";
import CM4 from "../../src/assets/images/CM4.png";
import CM5 from "../../src/assets/images/CM5.png";

export const productsData = {
  "e-stamp-corner": {
    id: "e-stamp-corner", // Add id field
    title: "E-Stamp Corner",
    tagLine: "Upload it or attach it",
    description:
      "Welcome to E-Stamp Corner\nUpload it or attach it\nTransform Your Agreements with Ease",
    overview:
      "At E-Stamp Corner, we simplify the process of getting your agreements printed on official stamp paper. Whether you have a pre-prepared document or need to add additional information, our platform allows you to seamlessly upload your agreements, have them professionally printed, and deliver them both digitally and physically.",
    whyChoose: [
      "Convenience: Upload your agreements effortlessly from any device.",
      "Fast Delivery: Receive a scanned copy of your stamped document in your inbox within minutes, and the physical document at your doorstep.",
      "Secure Transactions: Our platform ensures that your documents are handled securely and confidentially.",
    ],
    features: [],
    renderSubscriptionDetails: false,
    steps: [
      {
        title: "Upload Your Document",
        description:
          "Simply drag and drop or select the agreement you want to stamp.",
        image: E1,
      },
      {
        title: "Select Your Preferences",
        description:
          "Choose the appropriate stamp paper based on your legal requirements.",
        image: E2,
      },
      {
        title: "Complete Your Order",
        description: "Make a secure payment and confirm your order.",
        image: E3,
      },
      {
        title: "Receive Your Stamped Agreement",
        description:
          "Sit back and relax while we print and deliver a scanned copy of your stamped document via email within minutes and the physical stamped document is delivered to your doorstep",
        image: E4,
      },
    ],
    benefits: [
      "Time-Saving: No more waiting in long queues at physical locations.",
      "User-Friendly Interface: Our platform is designed for ease of use by professionals and individuals alike.",
      "Cost-Effective: Competitive pricing that saves you both time and money compared to traditional methods.",
    ],
    getStarted:
      "Join countless satisfied customers who have transformed their documentation process with E-Stamp Corner. Upload your agreement now, and experience hassle-free stamping with quick digital and physical delivery!\n\nUpload your agreement now and experience hassle-free stamping!",
    faqs: [
      {
        question: "What types of documents can I upload to be stamped?",
        answer:
          "You can upload a variety of legal documents, such as rental agreements, lease agreements, deeds, and any other document that requires official stamp paper.",
      },
      {
        question: "How secure is my document during the upload and processing?",
        answer:
          "Our platform uses advanced encryption technology to ensure that your documents are handled securely and confidentially throughout the entire process.",
      },
      {
        question: "How quickly will I receive my scanned stamped document?",
        answer:
          "You will receive a scanned copy of your stamped document in your email inbox within minutes after completing your order.",
      },
      {
        question:
          "How long does it take to receive the physical stamped document?",
        answer:
          "Delivery of the physical stamped document typically takes three to four business days, depending on your location.",
      },
    ],
    images: {
      whyChoose: E11,
      benefits: E12,
      howItWorks: HoWImage,
    },
  },
  "instant-review": {

    id: "instant-review",

    title: "Instant Review",  
    tagLine: "Fast, Reliable Legal Agreement Review and Stamp Paper Printing",
    description:
      "Fast, Reliable Legal Agreement Review and Stamp Paper Printing",
    overview:
      "Legal agreements are essential, but creating and ensuring their compliance can be time-consuming and complex. Instant Review simplifies this process by offering a quick, efficient way to get your agreements reviewed and printed on stamp paper—all from a single platform. Instant Review allows you to directly upload your prepared agreements, have our team review them for legal soundness, and deliver the printed, stamped document along with a detailed review report. Save time, ensure compliance, and get your agreements ready for action, instantly!",
    whyChoose: [
      "Time-Saving: Simplify your document review and stamp paper process with a single, streamlined service.",
      "Expert Insight: Benefit from professional legal expertise to make sure your agreement is legally sound.",
      "Convenience: Everything you need in one place—from review to printing.",
      "Cost-Effective: Avoid the high costs of traditional legal review services without compromising quality.",
    ],
    features: [
      "Quick & Easy Upload – Drag and drop your file onto our platform to get started instantly.",
      "Professional Legal Review – Gain peace of mind with a detailed review from experienced legal professionals.",
      "Customized Review Report – Receive a report outlining any adjustments or legal insights to strengthen your agreement.",
      "Convenient Stamp Paper Printing – Skip the hassle of sourcing stamp paper; we take care of it and send it directly to you.",
      "Fast Turnaround – Get your reviewed and printed agreement quickly, so you can move forward without delay.",
    ],
    steps: [
      {
        title: "Upload Your Agreement",
        description:
          "Upload your pre-made agreement directly onto our platform in a few simple steps.",
        image: E1,
      },
      {
        title: "Expert Review",
        description:
          "Our team of legal professionals reviews your document for completeness, compliance, and potential improvements.",
        image: I1,
      },
      {
        title: "Review Report & Recommendations",
        description:
          "Receive a detailed report highlighting any suggestions or necessary adjustments, so you can be confident in your document's strength and validity.",
        image: I2,
      },
      {
        title: "Stamp Paper Printing",
        description:
          "Once approved, we print your agreement on the required stamp paper and deliver it directly to you, ready for official use.",
        image: I3,
      },
    ],
    getStarted:
      "Streamline your agreement process with Instant Review—the easiest way to get your legal documents reviewed, improved, and printed on stamp paper, all in one place. Upload your document now to get started!",
    faqs: [
      {
        question: "How quickly will I receive my stamped agreement?",
        answer:
          "Our standard turnaround time is two to three business days after your document has been reviewed and approved.",
      },
      {
        question: "Can I request changes after the review?",
        answer:
          "Yes, if any recommendations are made, you'll have the option to update your agreement and re-upload it for a final check.",
      },
      {
        question: "What types of agreements can I upload?",
        answer:
          "We accept most types of legal agreements, including rental agreements, partnership contracts, NDAs, and more.",
      },
      {
        question: "Is my information secure?",
        answer:
          "Absolutely. We prioritize the privacy and security of your documents using the latest encryption standards.",
      },
      {
        question: "Do you offer customer support?",
        answer:
          "Yes, our support team is available to assist you with any questions or concerns throughout the process.",
      },
    ],
    images: {
      whyChoose: WhyChooseUs,
      benefits: Benefits,
      howItWorks: HoWImage,
    },
  },
  "your-legal-manager": {
    id: "your-legal-manager", // Add id field
    title: "Your Legal Manager",
    tagLine: "Have your own legal manager",
    renderSubscriptionDetails: false,
    description: "Elevate Your Firm's Legal Efficiency with dedicated Support",
    overview:
      "Welcome to Your Legal Manager, your partner in comprehensive legal management services tailored precisely for your firm's unique needs. Our dedicated team acts as your in-house legal manager, ensuring that all compliance needs, agreements, and internal legal documentation are meticulously managed. From routine compliance oversight to support in complex litigation, we've got you covered.",
    whyChoose: [
      "Industry Expertise: Our team consists of seasoned legal professionals with extensive experience in diverse practice areas, offering top notch legal support.",
      "Cost-Effective: Minimize the high costs associated with hiring full-time in-house counsel without compromising on the quality of your legal support.",
      "Focus on Your Business: With legal complexities managed by us, you can concentrate on scaling and developing your firm effectively",
    ],
    features: [],
    steps: [
      {
        title: "Consultation",
        description:
          "Start with a personalized consultation to understand your firm's specific legal requirements. Our experts will assess your needs and provide a customized roadmap on how our services can best support your operations.",
        image: C1,
      },
      {
        title: "Tailored Legal Management",
        description:
          "Once onboarded, our team will take over all aspects of your firm's legal needs, including compliance management, document preparation and review, and litigation support.",
        image: C2,
      },
      {
        title: "Ongoing Support",
        description:
          "Enjoy continuous, hands-on support as we monitor legislative updates, manage regulatory changes, and adapt our services to meet your firm's evolving needs, empowering you to focus on core business operations without legal distractions.",
        image: C3,
      },
    ],
    benefits: [
      "Comprehensive legal oversight without the cost of full-time counsel",
      "Proactive compliance management and updates",
      "Professional document preparation and review",
      "Expert litigation support (subject to agreement)",
      "Continuous adaptation to your evolving needs",
    ],
    getStarted:
      "Transform the way you manage your firm's legal affairs with Your Legal Manager. Contact us today for a consultation and take the first step towards streamlined legal management!",
    faqs: [
      {
        question: "What services does Your Legal Manager provide?",
        answer:
          "We offer a full range of legal management services including compliance oversight, document drafting and review, litigation support (subject to agreement), and ongoing strategic legal consultation customized to your firm's needs.",
      },
      {
        question: "How do I get started?",
        answer:
          "Getting started is simple. Contact us to schedule a consultation, where we'll discuss your specific needs and formulate a personalized legal management plan for your firm.",
      },
      {
        question: "Can Your Legal Manager handle litigation?",
        answer:
          "Yes, we provide comprehensive litigation support, including representation in court and strategic advice throughout the litigation process. (Please note that engaging our litigation support services requires acceptance of our standard service agreement.)",
      },
      {
        question: "Is my firm's information secure with Your Legal Manager?",
        answer:
          "Absolutely! We prioritize confidentiality and data security, ensuring that all client information is handled with the utmost care.",
      },
      {
        question: "What if I need additional services later on?",
        answer:
          "Our services are fully flexible and scalable. As your firm expands or its legal requirements evolve, we can adjust our offerings to meet your changing needs.",
      },
    ],
    images: {
      whyChoose: WhyChooseUs,
      benefits: Benefits,
      howItWorks: HoWImage,
    },
  },
  "rent-receipt-services": {
    id: "rent-receipt-services",
    title: "Rent Receipt Services",
    tagLine: "Streamline Your Rental Process",
    description: "Simplifying Your Rental Transactions",
    renderSubscriptionDetails: false,
    overview:
      "Welcome to Rent Receipt Services, your go-to solution for hassle-free rent management. Whether you're a tenant, landlord, professional, or student, we're here to simplify your rental transactions and enhance your record-keeping.",
    whyChoose: [
      "Automated Monthly Receipts: Say goodbye to manual tracking! Once you set up an agreement through our platform, monthly rent receipts are automatically generated and sent to both parties.",
      "Direct Communication: Stay in the loop! We send rent payment updates directly to your email, keeping both tenants and landlords informed.",
      "E-Signature Convenience: Add an extra layer of security and convenience with our e-signature feature. Sign documents digitally and keep everything safely organized.",
      "Timely Rent Reminders: Never miss a payment again! Our automatic monthly reminders help ensure rent is paid and collected on time, every time.",
    ],
    features: [
      "Easy Setup: Get started in just minutes! Our intuitive platform makes it simple for you to create and manage rental agreements with ease.",
      "Secure Documentation: Rest assured—your receipts, agreements, and communications are stored securely, giving you easy access whenever needed.",
      "Customizable Options: Tailor your experience to your unique needs. Choose features like e-signatures or personalized reminders.",
      "Comprehensive Record Keeping: Ideal for professionals and students who need to keep detailed records for budgeting, tax filings, or expense tracking.",
    ],
    steps: [
      {
        title: "Sign Up",
        description:
          "Create your account on our user-friendly platform and set up your profile in just a few minutes.",
      },
      {
        title: "Enter Agreement Details",
        description:
          "Input the key details of your rental agreement, including tenant and landlord information, rent amount, payment frequency, and any additional terms.",
      },
      {
        title: "Activate Rent Receipts",
        description:
          "Once your agreement is saved, our system will automatically generate and send rent receipts to both parties every month, or as per your specified payment cycle.",
      },
      {
        title: "Stay Updated",
        description:
          "Receive rent payment notifications and updates directly in your email inbox. Both tenants and landlords are kept informed about the status of payments.",
      },
      {
        title: "E-Sign and Manage Documents",
        description:
          "Opt for the e-signature feature to securely sign rental agreements online. All documents and receipts are stored securely and are easily accessible at any time.",
      },
      {
        title: "Receive Reminders",
        description:
          "Never miss a due date! Our platform sends timely rent reminders, ensuring both parties are on track with payments and collections.",
      },
    ],
    benefits: [
      "Perfect for tenants seeking easy payment tracking and instant proof of payment",
      "Ideal for landlords looking to streamline rent collection and maintain professional records",
      "Excellent for professionals and students managing multiple rental agreements",
      "Comprehensive solution for shared accommodation management",
    ],
    getStarted:
      "Join the growing community of satisfied users who have transformed their rental experience with Rent Receipt Services. Don't wait— Sign up now and take the first step towards effortless rent management!\n\nExperience the ease of managing your rental transactions with Rent Receipt Services – where convenience and professionalism come together!",
    faqs: [
      {
        question: "How do I get started with Rent Receipt Services?",
        answer:
          "Simply sign up on our platform, create your profile, and start entering your rental agreement details. The entire process takes just a few minutes.",
      },
      {
        question: "Is my information secure on the platform?",
        answer:
          "Yes, we use advanced security measures to protect all your data, documents, and communications. Your information is stored safely and is only accessible to authorized parties.",
      },
      {
        question: "How does the automated receipt generation work?",
        answer:
          "Once you set up your rental agreement, our system automatically generates and sends rent receipts to both parties according to your specified payment schedule.",
      },
      {
        question: "Can I use this service for multiple rental agreements?",
        answer:
          "Absolutely! Our platform is designed to handle multiple rental agreements, making it perfect for landlords with multiple properties or tenants managing different rental arrangements.",
      },
      {
        question: "How can I contact support if I need help?",
        answer:
          "Our friendly support team is available via email at support@rentreceiptservices.com. We're here to help with any questions or concerns you may have.",
      },
    ],
    images: {
      whyChoose: WhyChooseUs,
      benefits: Benefits,
      howItWorks: HoWImage,
    },
  },
  "instant-here": {
    id: "instant-here",
    title: "Instant Here",
    renderSubscriptionDetails: false,
    tagLine: "Get Tailored Legal Documents Made Just for You!",
    description:
      "Instant Here: Transform Your Document Needs with Personalized, Expert Support",
    overview:
      "Tired of one-size-fits-all templates that just don't fit? With us, you'll get more than a generic template – you'll gain a partner dedicated to delivering legal documents tailored to your specific needs. Connect with our dedicated representatives for a customized experience that fits your unique requirements seamlessly.",
    whyChoose: [
      "Direct Communication: Whether you prefer a phone call, a live session, or email, we make it easy for you to get in touch with our experts. Your convenience is our priority!",
      "Expert Consultation: One of our professionals will contact you to discuss your requirements in detail, ensuring that your document is comprehensive, accurate, and compliant.",
      "Personalized Service: Enjoy the benefit of a dedicated relationship and support manager who will guide you through the entire process from start to finish, ensuring your experience is smooth, efficient, and completely tailored to your preferences. You're not just another customer, you're our priority.",
      "Full-Scope Solutions: From simple documents to specialized agreements, our experienced team creates a wide range of legal documents that meet both your needs and industry standards.",
    ],
    features: [],
    steps: [
      {
        title: "Reach Out",
        description:
          "Contact us via your preferred method—call, chat, or email.",
        image: A1,
      },
      {
        title: "Discuss Your Needs",
        description:
          "Share your specific requirements with our representative to ensure we fully understand your objectives.",
        image: A2,
      },
      {
        title: "Receive Your Customize Document",
        description:
          "Sit back and relax while we create the document that meets your exact specifications.",
        image: A3,
      },
    ],
    benefits: [
      "Tailored Solutions: No more one-size-fits-all documents. We focus on what YOU need.",
      "Expert Guidance: Our experienced team is here to help you every step of the way, ensuring every detail is covered, so you have a document you can trust.",
      "Save Time: Skip the hassle of creating documents from scratch. Let us handle it for you!",
      "Peace of Mind: Rest easy knowing that your documents are crafted by experienced professionals who know the legal nuances, your document is in safe hands.",
      "Confidentiality Assured: We prioritize your privacy and ensure that all communications and documents are handled securely.",
      "Ongoing Support: Have questions after receiving your document? Our support doesn't end there! We're here for any follow-up queries or adjustments you may need.",
    ],
    getStarted:
      "Don't settle for less! Experience the ease and efficiency of personalized document creation with us today.\n\nWe are here for you",
    faqs: [
      {
        question: "What types of documents can I create?",
        answer:
          "We can assist with a wide range of legal documents, including contracts, agreements, proposals, reports, and more! Just let us know what you need.",
      },
      {
        question: "Are my documents legally binding?",
        answer:
          "Absolutely! We ensure that all documents are crafted with the highest level of accuracy and legal compliance. Our experts tailor each document to meet applicable legal standards.",
      },
      {
        question: "Can I request edits after receiving my document?",
        answer:
          "Yes, if you need revisions or adjustments to your document, just reach out, and we'll make sure it meets your expectations.",
      },
      {
        question: "How quickly can I expect my document?",
        answer:
          "Turnaround time varyies based on complexity, but we strive to deliver your custom document as quickly and efficiently.",
      },
      {
        question: "Is there a cost for this service?",
        answer:
          "Yes, our pricing is competitive and tailored to your specific requirements. Get in touch for a detailed quote!",
      },
      {
        question: "Do you offer bulk document services for businesses?",
        answer:
          "Yes! For businesses that need multiple documents or ongoing support, we provide customizable packages and bulk services. Contact us to discuss how we can accommodate your business needs.",
      },
    ],
    images: {
      whyChoose: WhyChooseUs,
      benefits: Benefits,
      howItWorks: HoWImage,
    },
  },
  "startup-saathi": {
      id: "startup-saathi",
      title: "Startup Saathi",
      tagLine: "Your Trusted Partner for Legal Documentation",
      description: `Starting a business is challenging. From ideation to execution, each stage demands precision, passion and a partner who truly grasps the intricacies of your business. Startup Saathi is here to ease your path by handling the complexities of the legal landscape, offering a comprehensive, reliable legal documentation solution tailored specifically to meet the needs of startups.
  
  Recognizing the unique challenges faced by new businesses, our service ensures that you have all the necessary legal documents in place to operate smoothly and comply with regulations. We guide you through every step of your startup journey, ensuring that your legal needs are met efficiently.
  
  Whether you're setting up a new venture, scaling an existing one, or preparing for investment rounds, our solution covers every legal document and process you need, backed by dedicated experts to guide you.`,
      overview: `At Startup Saathi, we understand that navigating the legal landscape can be daunting for entrepreneurs. Our platform adds value by:
  
  - Streamlining Legal Processes: We simplify the creation and management of essential legal documents, allowing you to focus on growing your business.
  - Expert Guidance: With a dedicated Legal Manager, you have an expert in your corner, providing you with customized legal solutions and strategies.
  - Cost-Effective Solutions: By offering comprehensive packages, we help you avoid the high costs associated with hiring multiple legal professionals.
  - Seamless Communication: Your User Relationship Manager is available to answer questions, troubleshoot, and provide updates on every aspect of your service.
  - Scalability: As your startup grows, so do your legal needs. Startup Saathi grows with you, adapting and expanding to meet your changing requirements.`,
      whyChoose: [
        "Streamlining Legal Processes: We simplify the creation and management of essential legal documents, allowing you to focus on growing your business",
        "Expert Guidance: With a dedicated Legal Manager, you have an expert in your corner, providing you with customized legal solutions and strategies",
        "Cost-Effective Solutions: By offering comprehensive packages, we help you avoid the high costs associated with hiring multiple legal professionals",
        "Seamless Communication: Your User Relationship Manager is available to answer questions, troubleshoot, and provide updates on every aspect of your service",
        "Scalability: As your startup grows, so do your legal needs. Startup Saathi grows with you, adapting and expanding to meet your changing requirements",
      ],
      features: [
        "Comprehensive Document Library: Access a wide range of essential legal documents required for your Startup, such as MOAs, NDAs, Employment contracts, Incorporation documents and many more",
        "Dedicated Legal and Relationship Managers: Our team is always available to assist you with any queries or concerns regarding your legal documents, providing tailored legal support and advice throughout the process",
        "Customizable Templates: Tailor documents to fit your specific business needs, ensuring legal compliance",
        "Automated Document Generation: Quickly generate standard legal documents using our user-friendly platform, saving you time and effort",
        "Periodic Compliance Checks: Ensuring your startup stays up-to-date with legal requirements",
        "Data Security: All your sensitive data is stored securely, with complete privacy guaranteed",
        "Ongoing Support: Enjoy continuous access to legal advice as your startup evolves and grows",
        "Scan Services: Option to get scan copies of documents with customer upload capability",
        "Law Books Access: Available through subscription plans",
        "Master Access Subscription: Category-wise access to documents with flexible plans",
      ],
      steps: [
        {
          title: "Sign Up",
          description: "Create an account on our platform",
          image: S1,
        },
        {
          title: "Choose Flexible Plans",
          description:
            "Choose the plan that best suits your startup's current stage and goals",
            image: S2,
        },
        {
          title: "Onboarding Call",
          description:
            "Meet your dedicated Legal Manager and User Relationship Manager",
            image: S3,
        },
        {
          title: "Consultation",
          description:
            "Schedule a consultation with your dedicated Legal Manager to discuss your startup's specific needs",
            image: S4,
        },
        {
          title: "Document Preparation",
          description:
            "Our team will prepare the necessary legal documents tailored to your requirements",
            image: S5,
        },
        {
          title: "Review & Approval",
          description:
            "Review the drafted documents with your Legal Manager and make any necessary adjustments",
            image: S6,
        },
        {
          title: "Finalization",
          description:
            "Once approved, receive finalized copies of your documents for use",
            image: S6,
        },
      ],
      benefits: [
        "Access to comprehensive document library with essential legal documents",
        "Dedicated support from Legal and Relationship Managers",
        "Customizable templates for specific business needs",
        "Automated document generation saving time and effort",
        "Regular compliance checks",
        "Secure data storage and privacy",
        "Continuous legal advice and support",
        "Scan services for document digitization",
        "Access to law books through subscription",
        "Flexible subscription plans (quarterly, semi-annually, annual)",
        "Special 'Instant Benefits' for subscribers including 24/7 support",
        "Prime user status with dedicated executive support",
      ],
      renderSubscriptionDetails: false,
      subscriptionDetails: {
        plans: [
          "Master Access (Subscription for specific document category)",
          "Category-wise access plans",
          "Quarterly plans",
          "Semi-annual plans",
          "Annual plans",
        ],
        pricing: [
          "Subscription plan costs",
          "Stamp paper costs per agreement",
          "Shipping charges (inclusive of printing and convenience fees)",
          "Scanning charges where applicable",
        ],
      },
      getStarted: `With Startup Saathi, you're not just getting legal documentation, you're getting a partner committed to protecting, supporting, and growing with your business. Sign up today and take the first step toward a legally sound, scalable, and successful startup journey!
  
  Our platform is intuitive, easy to navigate, and always up-to-date with the latest legal standards, so you can focus on what you do best: growing your business.
  
  Join Startup Saathi Today and Secure Your Startup's Future`,
      faqs: [
        {
          question: "What types of businesses can benefit from Startup Saathi?",
          answer:
            "Startup Saathi is designed for all types of Startups, including tech companies, e-commerce platforms, service providers, and more.",
        },
        {
          question: "Do I need legal experience to use Startup Saathi?",
          answer:
            "Not at all! Our User Relationship Manager is here to guide you every step of the way, ensuring you're supported throughout the process.",
        },
        {
          question: "What types of documents does Startup Saathi offer?",
          answer:
            "We offer a broad range of legal documents, including founder agreements, NDAs, employee contracts, IP rights documents, partnership agreements, and more.",
        },
        {
          question: "How long does it take to prepare the legal documents?",
          answer:
            "The preparation time varies depending on the complexity of the documents but typically ranges from one to five business days.",
        },
        {
          question: "Are the legal documents compliant with local laws?",
          answer:
            "Yes, all documents are prepared in accordance with current local laws and regulations to ensure compliance.",
        },
        {
          question: "Can I customize the documents to fit my startup's needs?",
          answer:
            "Absolutely, our templates are customizable, allowing you to tailor each document to your specific requirements.",
        },
        {
          question: "Is my data secure with Startup Saathi?",
          answer:
            "Absolutely. We prioritize your data security and employ advanced encryption to keep all information safe and private.",
        },
        {
          question: "What if I need additional legal assistance later?",
          answer:
            "You can always reach out to your Legal Manager for ongoing support as your business grows and evolves.",
        },
      ],
      images: {
        whyChoose: SW1,
        benefits: Benefits,
        howItWorks: HoWImage,
      },
    },
  "contract-lifecycle-management": {
    id: "contract-lifecycle-management",
    title: "Contract Lifecycle Management",
    renderSubscriptionDetails: false,
    tagLine:
      "Streamline your entire contract process, from drafting and negotiation to compliance and renewal, ensuring your organization operates efficiently, effectively and risk-free.",
    description: "Your ultimate partner in Contract Lifecycle Management (CLM)",
    overview:
      "Contract Lifecycle Management (CLM) refers to the systematic management of contracts from initiation through execution, performance, and renewal. Our platform is designed to streamline the entire contract process, from creation to renewal, ensuring that your organization operates efficiently and effectively. By centralizing contract data and automating workflows, CLM helps organizations reduce risks, improve compliance, and enhance visibility into contractual obligations.",
    whyChoose: [
      "Draft contracts effortlessly with ready-made templates and custom clauses",
      "Collaborate with ease on terms and conditions",
      "Obtain signatures and finalize agreements swiftly",
      "Stay compliant and monitor contract performance",
      "Proactively manage expirations and renegotiations",
    ],
    features: [
      "Automated Contract Creation with pre-approved templates and standardized clauses",
      "Advanced Workflow Management with configurable stages and real-time tracking",
      "Centralized Contract Repository with secure, cloud-based storage",
      "Compliance Tracking with automated alerts and regulatory monitoring",
      "Analytics and Reporting with customizable dashboards",
      "Electronic Signatures support with audit trails",
      "Alerts & Notifications for crucial dates and deadlines",
      "Integration Capabilities with CRMs, ERPs, and GRC platforms",
      "Advanced Data Extraction and Analysis tools",
      "Mobile Accessibility for remote contract management",
    ],
    steps: [
      {
        title: "Initiation",
        description:
          "Start by selecting a template that fits your needs. Customize it as necessary using our intuitive editing tools.",
        image: CM1,
      },
      {
        title: "Approval Workflow",
        description:
          "Route the contract through predefined approval stages automatically, ensuring that all necessary stakeholders review it promptly.",
        image: CM2,
      },
      {
        title: "Execution",
        description:
          "Once approved, send the contract for electronic signatures, eliminating the need for physical paperwork.",
        image: CM3,
      },
      {
        title: "Post-execution Monitoring",
        description:
          "After execution, the system will monitor compliance with contract terms and notify you of important milestones such as renewals or audits.",
        image: CM4,
      },
      {
        title: "Analytics & Reporting",
        description:
          "Utilize built-in analytics tools to generate reports on contract performance, helping you make informed decisions moving forward.",
        image: CM5,
      },
    ],
    benefits: [
      "Reduce administrative costs by automating manual processes and minimizing errors",
      "Strengthen adherence to contractual obligations through automated tracking and alerts",
      "Expedite contract cycles, streamline approval processes with automated routine, enabling quicker decision-making, reducing turnaround times by up to 50%",
      "Enhance visibility into contract terms and obligations, reducing the likelihood of missed deadlines or compliance issues",
    ],
    getStarted:
      "Transform your contracting process with our comprehensive Contract Lifecycle Management solution. Experience streamlined workflows, enhanced compliance, and significant cost savings.\n\nRequest a demo today to see how our CLM can revolutionize your contract management!",
    faqs: [
      {
        question: "What is E-documentation?",
        answer:
          "E-documentation refers to the process of creating, executing, and storing legal documents in electronic form, as opposed to physical paper documents.",
      },
      {
        question: "Is e-documentation legally valid in India?",
        answer:
          "Yes, e-documents are legally valid in India under the Information Technology Act, 2000, which grants legal recognition to electronic records and digital signatures",
      },
      {
        question: "What constitutes an Electronic Record?",
        answer:
          "An electronic record encompasses any data, document, or information conceived, retained, or transmitted in a digital format. It can involve emails, scanned papers, as well as other digital files.",
      },
      {
        question: "Can contracts be finalized electronically in India?",
        answer:
          "Yes, contracts can be executed electronically provided they meet the standards of the Indian Contract Act of 1872. The document must be legally enforceable and involve consent from all parties involved.",
      },
      {
        question: "How secure is e-documentation?",
        answer:
          "To ensure the authenticity and confidentiality of e-documentation, encryption, access monitoring, and electronic signatures are employed. According to Indian law, digital signatures are mandated for specific legal documents to heighten security.",
      },
      {
        question: "What is an electronic signature or digital signature?",
        answer:
          "An electronic signature or digital signature is a form of signature used to authenticate electronic documents. It ensures that the document has not been altered after signing and verifies the identity of the signer.",
      },
      {
        question: "What are the Benefits of E- documentation?",
        answer:
          "Cost and time efficiency\nReduced paperwork\nEasy storage and retrieval\nEnvironmentally friendly\nEnhanced safety and compliance\nImproved Accessibility and Better Convenience",
      },
      {
        question: "What laws govern e-documentation in India?",
        answer:
          "Information Technology Act, 2000: Provides the legal framework for electronic records and digital signatures.\nIndian Evidence Act, 1872: Recognizes electronic records as admissible evidence.\nIndian Contract Act, 1872: Governs the legality of contracts executed electronically.",
      },
      {
        question: "Are e-documents admissible as evidence in courts of law?",
        answer:
          "Indeed, the Indian Evidence Act of 1872 stipulates that electronic records may be admitted as evidence in legal proceedings, provided certain stringent conditions are satisfied. Namely, the authenticity of any corresponding digital signature and integrity of the electronic document must be demonstrable.",
      },
      {
        question: "How does E-documentation impact businesses in India?",
        answer:
          "E-documentation facilitates faster execution of agreements, reduces operational costs, and improves compliance. It is particularly useful in sectors such as banking, finance, and corporate governance.",
      },
      {
        question:
          "What distinguishes an electronic document from one that has been scanned?",
        answer:
          "A document existing natively in a digital format such as a PDF or Microsoft Word file constitutes an electronic document. Conversely, a scanned document refers to a physical document that has been converted into electronic form through scanning. However, the legal standing of scanned documents may depend more on contextual specifics.",
      },
    ],
    images: {
      whyChoose: SW1,
      benefits: Benefits,
      howItWorks: HoWImage,
    },
  },

  "notice-lifecycle-management": {
    id: "notice-lifecycle-management",
    title: "Notice Lifecycle Management",
    renderSubscriptionDetails: false,
    tagLine:
      "Transform your notice management process with our comprehensive solution",
    headingOverview:
      "Welcome to MyLegalInstant.com, where we introduce our innovative Notice Lifecycle Management (NLM) solution. This platform is designed to streamline the management of notices throughout their lifecycle, ensuring that your organization remains compliant, efficient, and organized at every step of the way.",
    description: "Your ultimate partner in Contract Lifecycle Management (CLM)",
    overview: [
      "What is Notice Lifecycle Management?",
      "Notice Lifecycle Management (NLM) refers to the systematic process of managing notices from their creation to their expiration or renewal. Our platform streamlines each stage of the notice process:",
    ],
    whyChoose: [
      "Draft contracts effortlessly with ready-made templates and custom clauses",
      "Collaborate with ease on terms and conditions",
      "Obtain signatures and finalize agreements swiftly",
      "Stay compliant and monitor contract performance",
      "Proactively manage expirations and renegotiations",
    ],
    features: [
      "Automated Contract Creation with pre-approved templates and standardized clauses",
      "Advanced Workflow Management with configurable stages and real-time tracking",
      "Centralized Contract Repository with secure, cloud-based storage",
      "Compliance Tracking with automated alerts and regulatory monitoring",
      "Analytics and Reporting with customizable dashboards",
      "Electronic Signatures support with audit trails",
      "Alerts & Notifications for crucial dates and deadlines",
      "Integration Capabilities with CRMs, ERPs, and GRC platforms",
      "Advanced Data Extraction and Analysis tools",
      "Mobile Accessibility for remote contract management",
    ],
    steps: [
      {
        title: "Initiation",
        description:
          "Start by selecting a template that fits your needs. Customize it as necessary using our intuitive editing tools.",
        image: CM1,
      },
      {
        title: "Approval Workflow",
        description:
          "Route the contract through predefined approval stages automatically, ensuring that all necessary stakeholders review it promptly.",
        image: CM2,
      },
      {
        title: "Execution",
        description:
          "Once approved, send the contract for electronic signatures, eliminating the need for physical paperwork.",
        image: CM3,
      },
      {
        title: "Post-execution Monitoring",
        description:
          "After execution, the system will monitor compliance with contract terms and notify you of important milestones such as renewals or audits.",
        image: CM4,
      },
      {
        title: "Analytics & Reporting",
        description:
          "Utilize built-in analytics tools to generate reports on contract performance, helping you make informed decisions moving forward.",
        image: CM5,
      },
    ],
    benefits: [
      "Reduce administrative costs by automating manual processes and minimizing errors",
      "Strengthen adherence to contractual obligations through automated tracking and alerts",
      "Expedite contract cycles, streamline approval processes with automated routine, enabling quicker decision-making, reducing turnaround times by up to 50%",
      "Enhance visibility into contract terms and obligations, reducing the likelihood of missed deadlines or compliance issues",
    ],
    getStarted:
      "Transform your contracting process with our comprehensive Contract Lifecycle Management solution. Experience streamlined workflows, enhanced compliance, and significant cost savings.\n\nRequest a demo today to see how our CLM can revolutionize your contract management!",
    faqs: [
      {
        question:
          "What types of notices can be managed with your NLM software?",
        answer:
          "Our NLM solution supports various types of notices including legal notifications, compliance reminders, and internal communications.",
      },
      {
        question: "Is training available for new users?",
        answer:
          "Yes, we provide comprehensive training resources and support to help users navigate our platform effectively.",
      },
      {
        question: "Can this software integrate with existing systems?",
        answer:
          "Absolutely! Our NLM solution is designed for seamless integration with other enterprise applications such as CRM systems and document management platforms.",
      },
      {
        question: "How secure is my data?",
        answer:
          "We prioritize data security with robust encryption protocols and regular audits to ensure your information remains confidential and protected.",
      },
      {
        question: "What customer support options are available?",
        answer:
          "We offer 24/7 customer support via chat, email, or phone to assist you with any inquiries or issues you may encounter.",
      },
    ],
    images: {
      whyChoose: SW1,
      benefits: Benefits,
      howItWorks: HoWImage,
    },
  },

  "grow-instant": {
    id: "grow-instant",
    title: "Grow Instant",
    renderSubscriptionDetails: false,
    tagLine:
      "Streamline your entire contract process, from drafting and negotiation to compliance and renewal, ensuring your organization operates efficiently, effectively and risk-free.",
    description: "Your ultimate partner in Contract Lifecycle Management (CLM)",
    overview:
      "Contract Lifecycle Management (CLM) refers to the systematic management of contracts from initiation through execution, performance, and renewal. Our platform is designed to streamline the entire contract process, from creation to renewal, ensuring that your organization operates efficiently and effectively. By centralizing contract data and automating workflows, CLM helps organizations reduce risks, improve compliance, and enhance visibility into contractual obligations.",
    whyChoose: [
      "Draft contracts effortlessly with ready-made templates and custom clauses",
      "Collaborate with ease on terms and conditions",
      "Obtain signatures and finalize agreements swiftly",
      "Stay compliant and monitor contract performance",
      "Proactively manage expirations and renegotiations",
    ],
    features: [
      "Automated Contract Creation with pre-approved templates and standardized clauses",
      "Advanced Workflow Management with configurable stages and real-time tracking",
      "Centralized Contract Repository with secure, cloud-based storage",
      "Compliance Tracking with automated alerts and regulatory monitoring",
      "Analytics and Reporting with customizable dashboards",
      "Electronic Signatures support with audit trails",
      "Alerts & Notifications for crucial dates and deadlines",
      "Integration Capabilities with CRMs, ERPs, and GRC platforms",
      "Advanced Data Extraction and Analysis tools",
      "Mobile Accessibility for remote contract management",
    ],
    steps: [
      {
        title: "Initiation",
        description:
          "Start by selecting a template that fits your needs. Customize it as necessary using our intuitive editing tools.",
        image: CM1,
      },
      {
        title: "Approval Workflow",
        description:
          "Route the contract through predefined approval stages automatically, ensuring that all necessary stakeholders review it promptly.",
        image: CM2,
      },
      {
        title: "Execution",
        description:
          "Once approved, send the contract for electronic signatures, eliminating the need for physical paperwork.",
        image: CM3,
      },
      {
        title: "Post-execution Monitoring",
        description:
          "After execution, the system will monitor compliance with contract terms and notify you of important milestones such as renewals or audits.",
        image: CM4,
      },
      {
        title: "Analytics & Reporting",
        description:
          "Utilize built-in analytics tools to generate reports on contract performance, helping you make informed decisions moving forward.",
        image: CM5,
      },
    ],
    benefits: [
      "Reduce administrative costs by automating manual processes and minimizing errors",
      "Strengthen adherence to contractual obligations through automated tracking and alerts",
      "Expedite contract cycles, streamline approval processes with automated routine, enabling quicker decision-making, reducing turnaround times by up to 50%",
      "Enhance visibility into contract terms and obligations, reducing the likelihood of missed deadlines or compliance issues",
    ],
    getStarted:
      "Transform your contracting process with our comprehensive Contract Lifecycle Management solution. Experience streamlined workflows, enhanced compliance, and significant cost savings.\n\nRequest a demo today to see how our CLM can revolutionize your contract management!",
    faqs: [
      {
        question: "What is E-documentation?",
        answer:
          "E-documentation refers to the process of creating, executing, and storing legal documents in electronic form, as opposed to physical paper documents.",
      },
      {
        question: "Is e-documentation legally valid in India?",
        answer:
          "Yes, e-documents are legally valid in India under the Information Technology Act, 2000, which grants legal recognition to electronic records and digital signatures",
      },
      {
        question: "What constitutes an Electronic Record?",
        answer:
          "An electronic record encompasses any data, document, or information conceived, retained, or transmitted in a digital format. It can involve emails, scanned papers, as well as other digital files.",
      },
      {
        question: "Can contracts be finalized electronically in India?",
        answer:
          "Yes, contracts can be executed electronically provided they meet the standards of the Indian Contract Act of 1872. The document must be legally enforceable and involve consent from all parties involved.",
      },
      {
        question: "How secure is e-documentation?",
        answer:
          "To ensure the authenticity and confidentiality of e-documentation, encryption, access monitoring, and electronic signatures are employed. According to Indian law, digital signatures are mandated for specific legal documents to heighten security.",
      },
      {
        question: "What is an electronic signature or digital signature?",
        answer:
          "An electronic signature or digital signature is a form of signature used to authenticate electronic documents. It ensures that the document has not been altered after signing and verifies the identity of the signer.",
      },
      {
        question: "What are the Benefits of E- documentation?",
        answer:
          "Cost and time efficiency\nReduced paperwork\nEasy storage and retrieval\nEnvironmentally friendly\nEnhanced safety and compliance\nImproved Accessibility and Better Convenience",
      },
      {
        question: "What laws govern e-documentation in India?",
        answer:
          "Information Technology Act, 2000: Provides the legal framework for electronic records and digital signatures.\nIndian Evidence Act, 1872: Recognizes electronic records as admissible evidence.\nIndian Contract Act, 1872: Governs the legality of contracts executed electronically.",
      },
      {
        question: "Are e-documents admissible as evidence in courts of law?",
        answer:
          "Indeed, the Indian Evidence Act of 1872 stipulates that electronic records may be admitted as evidence in legal proceedings, provided certain stringent conditions are satisfied. Namely, the authenticity of any corresponding digital signature and integrity of the electronic document must be demonstrable.",
      },
      {
        question: "How does E-documentation impact businesses in India?",
        answer:
          "E-documentation facilitates faster execution of agreements, reduces operational costs, and improves compliance. It is particularly useful in sectors such as banking, finance, and corporate governance.",
      },
      {
        question:
          "What distinguishes an electronic document from one that has been scanned?",
        answer:
          "A document existing natively in a digital format such as a PDF or Microsoft Word file constitutes an electronic document. Conversely, a scanned document refers to a physical document that has been converted into electronic form through scanning. However, the legal standing of scanned documents may depend more on contextual specifics.",
      },
    ],
    images: {
      whyChoose: SW1,
      benefits: Benefits,
      howItWorks: HoWImage,
    },
  },

  compliance: {
    id: "compliance",
    title: "Compliance Suite",
    renderSubscriptionDetails: false,
    tagLine:
      "Streamline your entire contract process, from drafting and negotiation to compliance and renewal, ensuring your organization operates efficiently, effectively and risk-free.",
    description: "Your ultimate partner in Contract Lifecycle Management (CLM)",
    overview:
      "Contract Lifecycle Management (CLM) refers to the systematic management of contracts from initiation through execution, performance, and renewal. Our platform is designed to streamline the entire contract process, from creation to renewal, ensuring that your organization operates efficiently and effectively. By centralizing contract data and automating workflows, CLM helps organizations reduce risks, improve compliance, and enhance visibility into contractual obligations.",
    whyChoose: [
      "Draft contracts effortlessly with ready-made templates and custom clauses",
      "Collaborate with ease on terms and conditions",
      "Obtain signatures and finalize agreements swiftly",
      "Stay compliant and monitor contract performance",
      "Proactively manage expirations and renegotiations",
    ],
    features: [
      "Automated Contract Creation with pre-approved templates and standardized clauses",
      "Advanced Workflow Management with configurable stages and real-time tracking",
      "Centralized Contract Repository with secure, cloud-based storage",
      "Compliance Tracking with automated alerts and regulatory monitoring",
      "Analytics and Reporting with customizable dashboards",
      "Electronic Signatures support with audit trails",
      "Alerts & Notifications for crucial dates and deadlines",
      "Integration Capabilities with CRMs, ERPs, and GRC platforms",
      "Advanced Data Extraction and Analysis tools",
      "Mobile Accessibility for remote contract management",
    ],
    steps: [
      {
        title: "Initiation",
        description:
          "Start by selecting a template that fits your needs. Customize it as necessary using our intuitive editing tools.",
        image: CM1,
      },
      {
        title: "Approval Workflow",
        description:
          "Route the contract through predefined approval stages automatically, ensuring that all necessary stakeholders review it promptly.",
        image: CM2,
      },
      {
        title: "Execution",
        description:
          "Once approved, send the contract for electronic signatures, eliminating the need for physical paperwork.",
        image: CM3,
      },
      {
        title: "Post-execution Monitoring",
        description:
          "After execution, the system will monitor compliance with contract terms and notify you of important milestones such as renewals or audits.",
        image: CM4,
      },
      {
        title: "Analytics & Reporting",
        description:
          "Utilize built-in analytics tools to generate reports on contract performance, helping you make informed decisions moving forward.",
        image: CM5,
      },
    ],
    benefits: [
      "Reduce administrative costs by automating manual processes and minimizing errors",
      "Strengthen adherence to contractual obligations through automated tracking and alerts",
      "Expedite contract cycles, streamline approval processes with automated routine, enabling quicker decision-making, reducing turnaround times by up to 50%",
      "Enhance visibility into contract terms and obligations, reducing the likelihood of missed deadlines or compliance issues",
    ],
    getStarted:
      "Transform your contracting process with our comprehensive Contract Lifecycle Management solution. Experience streamlined workflows, enhanced compliance, and significant cost savings.\n\nRequest a demo today to see how our CLM can revolutionize your contract management!",
    faqs: [
      {
        question: "What is E-documentation?",
        answer:
          "E-documentation refers to the process of creating, executing, and storing legal documents in electronic form, as opposed to physical paper documents.",
      },
      {
        question: "Is e-documentation legally valid in India?",
        answer:
          "Yes, e-documents are legally valid in India under the Information Technology Act, 2000, which grants legal recognition to electronic records and digital signatures",
      },
      {
        question: "What constitutes an Electronic Record?",
        answer:
          "An electronic record encompasses any data, document, or information conceived, retained, or transmitted in a digital format. It can involve emails, scanned papers, as well as other digital files.",
      },
      {
        question: "Can contracts be finalized electronically in India?",
        answer:
          "Yes, contracts can be executed electronically provided they meet the standards of the Indian Contract Act of 1872. The document must be legally enforceable and involve consent from all parties involved.",
      },
      {
        question: "How secure is e-documentation?",
        answer:
          "To ensure the authenticity and confidentiality of e-documentation, encryption, access monitoring, and electronic signatures are employed. According to Indian law, digital signatures are mandated for specific legal documents to heighten security.",
      },
      {
        question: "What is an electronic signature or digital signature?",
        answer:
          "An electronic signature or digital signature is a form of signature used to authenticate electronic documents. It ensures that the document has not been altered after signing and verifies the identity of the signer.",
      },
      {
        question: "What are the Benefits of E- documentation?",
        answer:
          "Cost and time efficiency\nReduced paperwork\nEasy storage and retrieval\nEnvironmentally friendly\nEnhanced safety and compliance\nImproved Accessibility and Better Convenience",
      },
      {
        question: "What laws govern e-documentation in India?",
        answer:
          "Information Technology Act, 2000: Provides the legal framework for electronic records and digital signatures.\nIndian Evidence Act, 1872: Recognizes electronic records as admissible evidence.\nIndian Contract Act, 1872: Governs the legality of contracts executed electronically.",
      },
      {
        question: "Are e-documents admissible as evidence in courts of law?",
        answer:
          "Indeed, the Indian Evidence Act of 1872 stipulates that electronic records may be admitted as evidence in legal proceedings, provided certain stringent conditions are satisfied. Namely, the authenticity of any corresponding digital signature and integrity of the electronic document must be demonstrable.",
      },
      {
        question: "How does E-documentation impact businesses in India?",
        answer:
          "E-documentation facilitates faster execution of agreements, reduces operational costs, and improves compliance. It is particularly useful in sectors such as banking, finance, and corporate governance.",
      },
      {
        question:
          "What distinguishes an electronic document from one that has been scanned?",
        answer:
          "A document existing natively in a digital format such as a PDF or Microsoft Word file constitutes an electronic document. Conversely, a scanned document refers to a physical document that has been converted into electronic form through scanning. However, the legal standing of scanned documents may depend more on contextual specifics.",
      },
    ],
    images: {
      whyChoose: SW1,
      benefits: Benefits,
      howItWorks: HoWImage,
    },
  },

  "risk-mitigator": {
    id: "risk-mitigator",
    title: "Risk Mitigator",
    renderSubscriptionDetails: false,
    tagLine:
      "Streamline your entire contract process, from drafting and negotiation to compliance and renewal, ensuring your organization operates efficiently, effectively and risk-free.",
    description: "Your ultimate partner in Contract Lifecycle Management (CLM)",
    overview:
      "Contract Lifecycle Management (CLM) refers to the systematic management of contracts from initiation through execution, performance, and renewal. Our platform is designed to streamline the entire contract process, from creation to renewal, ensuring that your organization operates efficiently and effectively. By centralizing contract data and automating workflows, CLM helps organizations reduce risks, improve compliance, and enhance visibility into contractual obligations.",
    whyChoose: [
      "Draft contracts effortlessly with ready-made templates and custom clauses",
      "Collaborate with ease on terms and conditions",
      "Obtain signatures and finalize agreements swiftly",
      "Stay compliant and monitor contract performance",
      "Proactively manage expirations and renegotiations",
    ],
    features: [
      "Automated Contract Creation with pre-approved templates and standardized clauses",
      "Advanced Workflow Management with configurable stages and real-time tracking",
      "Centralized Contract Repository with secure, cloud-based storage",
      "Compliance Tracking with automated alerts and regulatory monitoring",
      "Analytics and Reporting with customizable dashboards",
      "Electronic Signatures support with audit trails",
      "Alerts & Notifications for crucial dates and deadlines",
      "Integration Capabilities with CRMs, ERPs, and GRC platforms",
      "Advanced Data Extraction and Analysis tools",
      "Mobile Accessibility for remote contract management",
    ],
    steps: [
      {
        title: "Initiation",
        description:
          "Start by selecting a template that fits your needs. Customize it as necessary using our intuitive editing tools.",
        image: CM1,
      },
      {
        title: "Approval Workflow",
        description:
          "Route the contract through predefined approval stages automatically, ensuring that all necessary stakeholders review it promptly.",
        image: CM2,
      },
      {
        title: "Execution",
        description:
          "Once approved, send the contract for electronic signatures, eliminating the need for physical paperwork.",
        image: CM3,
      },
      {
        title: "Post-execution Monitoring",
        description:
          "After execution, the system will monitor compliance with contract terms and notify you of important milestones such as renewals or audits.",
        image: CM4,
      },
      {
        title: "Analytics & Reporting",
        description:
          "Utilize built-in analytics tools to generate reports on contract performance, helping you make informed decisions moving forward.",
        image: CM5,
      },
    ],
    benefits: [
      "Reduce administrative costs by automating manual processes and minimizing errors",
      "Strengthen adherence to contractual obligations through automated tracking and alerts",
      "Expedite contract cycles, streamline approval processes with automated routine, enabling quicker decision-making, reducing turnaround times by up to 50%",
      "Enhance visibility into contract terms and obligations, reducing the likelihood of missed deadlines or compliance issues",
    ],
    getStarted:
      "Transform your contracting process with our comprehensive Contract Lifecycle Management solution. Experience streamlined workflows, enhanced compliance, and significant cost savings.\n\nRequest a demo today to see how our CLM can revolutionize your contract management!",
    faqs: [
      {
        question: "What is E-documentation?",
        answer:
          "E-documentation refers to the process of creating, executing, and storing legal documents in electronic form, as opposed to physical paper documents.",
      },
      {
        question: "Is e-documentation legally valid in India?",
        answer:
          "Yes, e-documents are legally valid in India under the Information Technology Act, 2000, which grants legal recognition to electronic records and digital signatures",
      },
      {
        question: "What constitutes an Electronic Record?",
        answer:
          "An electronic record encompasses any data, document, or information conceived, retained, or transmitted in a digital format. It can involve emails, scanned papers, as well as other digital files.",
      },
      {
        question: "Can contracts be finalized electronically in India?",
        answer:
          "Yes, contracts can be executed electronically provided they meet the standards of the Indian Contract Act of 1872. The document must be legally enforceable and involve consent from all parties involved.",
      },
      {
        question: "How secure is e-documentation?",
        answer:
          "To ensure the authenticity and confidentiality of e-documentation, encryption, access monitoring, and electronic signatures are employed. According to Indian law, digital signatures are mandated for specific legal documents to heighten security.",
      },
      {
        question: "What is an electronic signature or digital signature?",
        answer:
          "An electronic signature or digital signature is a form of signature used to authenticate electronic documents. It ensures that the document has not been altered after signing and verifies the identity of the signer.",
      },
      {
        question: "What are the Benefits of E- documentation?",
        answer:
          "Cost and time efficiency\nReduced paperwork\nEasy storage and retrieval\nEnvironmentally friendly\nEnhanced safety and compliance\nImproved Accessibility and Better Convenience",
      },
      {
        question: "What laws govern e-documentation in India?",
        answer:
          "Information Technology Act, 2000: Provides the legal framework for electronic records and digital signatures.\nIndian Evidence Act, 1872: Recognizes electronic records as admissible evidence.\nIndian Contract Act, 1872: Governs the legality of contracts executed electronically.",
      },
      {
        question: "Are e-documents admissible as evidence in courts of law?",
        answer:
          "Indeed, the Indian Evidence Act of 1872 stipulates that electronic records may be admitted as evidence in legal proceedings, provided certain stringent conditions are satisfied. Namely, the authenticity of any corresponding digital signature and integrity of the electronic document must be demonstrable.",
      },
      {
        question: "How does E-documentation impact businesses in India?",
        answer:
          "E-documentation facilitates faster execution of agreements, reduces operational costs, and improves compliance. It is particularly useful in sectors such as banking, finance, and corporate governance.",
      },
      {
        question:
          "What distinguishes an electronic document from one that has been scanned?",
        answer:
          "A document existing natively in a digital format such as a PDF or Microsoft Word file constitutes an electronic document. Conversely, a scanned document refers to a physical document that has been converted into electronic form through scanning. However, the legal standing of scanned documents may depend more on contextual specifics.",
      },
    ],
    images: {
      whyChoose: SW1,
      benefits: Benefits,
      howItWorks: HoWImage,
    },
  },

  strategic: {
    id: "strategic",
    title: "Strategic Solutions",
    renderSubscriptionDetails: false,
    tagLine:
      "Streamline your entire contract process, from drafting and negotiation to compliance and renewal, ensuring your organization operates efficiently, effectively and risk-free.",
    description: "Your ultimate partner in Contract Lifecycle Management (CLM)",
    overview:
      "Contract Lifecycle Management (CLM) refers to the systematic management of contracts from initiation through execution, performance, and renewal. Our platform is designed to streamline the entire contract process, from creation to renewal, ensuring that your organization operates efficiently and effectively. By centralizing contract data and automating workflows, CLM helps organizations reduce risks, improve compliance, and enhance visibility into contractual obligations.",
    whyChoose: [
      "Draft contracts effortlessly with ready-made templates and custom clauses",
      "Collaborate with ease on terms and conditions",
      "Obtain signatures and finalize agreements swiftly",
      "Stay compliant and monitor contract performance",
      "Proactively manage expirations and renegotiations",
    ],
    features: [
      "Automated Contract Creation with pre-approved templates and standardized clauses",
      "Advanced Workflow Management with configurable stages and real-time tracking",
      "Centralized Contract Repository with secure, cloud-based storage",
      "Compliance Tracking with automated alerts and regulatory monitoring",
      "Analytics and Reporting with customizable dashboards",
      "Electronic Signatures support with audit trails",
      "Alerts & Notifications for crucial dates and deadlines",
      "Integration Capabilities with CRMs, ERPs, and GRC platforms",
      "Advanced Data Extraction and Analysis tools",
      "Mobile Accessibility for remote contract management",
    ],
    steps: [
      {
        title: "Initiation",
        description:
          "Start by selecting a template that fits your needs. Customize it as necessary using our intuitive editing tools.",
        image: CM1,
      },
      {
        title: "Approval Workflow",
        description:
          "Route the contract through predefined approval stages automatically, ensuring that all necessary stakeholders review it promptly.",
        image: CM2,
      },
      {
        title: "Execution",
        description:
          "Once approved, send the contract for electronic signatures, eliminating the need for physical paperwork.",
        image: CM3,
      },
      {
        title: "Post-execution Monitoring",
        description:
          "After execution, the system will monitor compliance with contract terms and notify you of important milestones such as renewals or audits.",
        image: CM4,
      },
      {
        title: "Analytics & Reporting",
        description:
          "Utilize built-in analytics tools to generate reports on contract performance, helping you make informed decisions moving forward.",
        image: CM5,
      },
    ],
    benefits: [
      "Reduce administrative costs by automating manual processes and minimizing errors",
      "Strengthen adherence to contractual obligations through automated tracking and alerts",
      "Expedite contract cycles, streamline approval processes with automated routine, enabling quicker decision-making, reducing turnaround times by up to 50%",
      "Enhance visibility into contract terms and obligations, reducing the likelihood of missed deadlines or compliance issues",
    ],
    getStarted:
      "Transform your contracting process with our comprehensive Contract Lifecycle Management solution. Experience streamlined workflows, enhanced compliance, and significant cost savings.\n\nRequest a demo today to see how our CLM can revolutionize your contract management!",
    faqs: [
      {
        question: "What is E-documentation?",
        answer:
          "E-documentation refers to the process of creating, executing, and storing legal documents in electronic form, as opposed to physical paper documents.",
      },
      {
        question: "Is e-documentation legally valid in India?",
        answer:
          "Yes, e-documents are legally valid in India under the Information Technology Act, 2000, which grants legal recognition to electronic records and digital signatures",
      },
      {
        question: "What constitutes an Electronic Record?",
        answer:
          "An electronic record encompasses any data, document, or information conceived, retained, or transmitted in a digital format. It can involve emails, scanned papers, as well as other digital files.",
      },
      {
        question: "Can contracts be finalized electronically in India?",
        answer:
          "Yes, contracts can be executed electronically provided they meet the standards of the Indian Contract Act of 1872. The document must be legally enforceable and involve consent from all parties involved.",
      },
      {
        question: "How secure is e-documentation?",
        answer:
          "To ensure the authenticity and confidentiality of e-documentation, encryption, access monitoring, and electronic signatures are employed. According to Indian law, digital signatures are mandated for specific legal documents to heighten security.",
      },
      {
        question: "What is an electronic signature or digital signature?",
        answer:
          "An electronic signature or digital signature is a form of signature used to authenticate electronic documents. It ensures that the document has not been altered after signing and verifies the identity of the signer.",
      },
      {
        question: "What are the Benefits of E- documentation?",
        answer:
          "Cost and time efficiency\nReduced paperwork\nEasy storage and retrieval\nEnvironmentally friendly\nEnhanced safety and compliance\nImproved Accessibility and Better Convenience",
      },
      {
        question: "What laws govern e-documentation in India?",
        answer:
          "Information Technology Act, 2000: Provides the legal framework for electronic records and digital signatures.\nIndian Evidence Act, 1872: Recognizes electronic records as admissible evidence.\nIndian Contract Act, 1872: Governs the legality of contracts executed electronically.",
      },
      {
        question: "Are e-documents admissible as evidence in courts of law?",
        answer:
          "Indeed, the Indian Evidence Act of 1872 stipulates that electronic records may be admitted as evidence in legal proceedings, provided certain stringent conditions are satisfied. Namely, the authenticity of any corresponding digital signature and integrity of the electronic document must be demonstrable.",
      },
      {
        question: "How does E-documentation impact businesses in India?",
        answer:
          "E-documentation facilitates faster execution of agreements, reduces operational costs, and improves compliance. It is particularly useful in sectors such as banking, finance, and corporate governance.",
      },
      {
        question:
          "What distinguishes an electronic document from one that has been scanned?",
        answer:
          "A document existing natively in a digital format such as a PDF or Microsoft Word file constitutes an electronic document. Conversely, a scanned document refers to a physical document that has been converted into electronic form through scanning. However, the legal standing of scanned documents may depend more on contextual specifics.",
      },
    ],
    images: {
      whyChoose: SW1,
      benefits: Benefits,
      howItWorks: HoWImage,
    },
  },

  litigation: {
    id: "litigation",
    title: "Litigation Manager",
    renderSubscriptionDetails: false,
    tagLine:
      "Streamline your entire contract process, from drafting and negotiation to compliance and renewal, ensuring your organization operates efficiently, effectively and risk-free.",
    description: "Your ultimate partner in Contract Lifecycle Management (CLM)",
    overview:
      "Contract Lifecycle Management (CLM) refers to the systematic management of contracts from initiation through execution, performance, and renewal. Our platform is designed to streamline the entire contract process, from creation to renewal, ensuring that your organization operates efficiently and effectively. By centralizing contract data and automating workflows, CLM helps organizations reduce risks, improve compliance, and enhance visibility into contractual obligations.",
    whyChoose: [
      "Draft contracts effortlessly with ready-made templates and custom clauses",
      "Collaborate with ease on terms and conditions",
      "Obtain signatures and finalize agreements swiftly",
      "Stay compliant and monitor contract performance",
      "Proactively manage expirations and renegotiations",
    ],
    features: [
      "Automated Contract Creation with pre-approved templates and standardized clauses",
      "Advanced Workflow Management with configurable stages and real-time tracking",
      "Centralized Contract Repository with secure, cloud-based storage",
      "Compliance Tracking with automated alerts and regulatory monitoring",
      "Analytics and Reporting with customizable dashboards",
      "Electronic Signatures support with audit trails",
      "Alerts & Notifications for crucial dates and deadlines",
      "Integration Capabilities with CRMs, ERPs, and GRC platforms",
      "Advanced Data Extraction and Analysis tools",
      "Mobile Accessibility for remote contract management",
    ],
    steps: [
      {
        title: "Initiation",
        description:
          "Start by selecting a template that fits your needs. Customize it as necessary using our intuitive editing tools.",
        image: CM1,
      },
      {
        title: "Approval Workflow",
        description:
          "Route the contract through predefined approval stages automatically, ensuring that all necessary stakeholders review it promptly.",
        image: CM2,
      },
      {
        title: "Execution",
        description:
          "Once approved, send the contract for electronic signatures, eliminating the need for physical paperwork.",
        image: CM3,
      },
      {
        title: "Post-execution Monitoring",
        description:
          "After execution, the system will monitor compliance with contract terms and notify you of important milestones such as renewals or audits.",
        image: CM4,
      },
      {
        title: "Analytics & Reporting",
        description:
          "Utilize built-in analytics tools to generate reports on contract performance, helping you make informed decisions moving forward.",
        image: CM5,
      },
    ],
    benefits: [
      "Reduce administrative costs by automating manual processes and minimizing errors",
      "Strengthen adherence to contractual obligations through automated tracking and alerts",
      "Expedite contract cycles, streamline approval processes with automated routine, enabling quicker decision-making, reducing turnaround times by up to 50%",
      "Enhance visibility into contract terms and obligations, reducing the likelihood of missed deadlines or compliance issues",
    ],
    getStarted:
      "Transform your contracting process with our comprehensive Contract Lifecycle Management solution. Experience streamlined workflows, enhanced compliance, and significant cost savings.\n\nRequest a demo today to see how our CLM can revolutionize your contract management!",
    faqs: [
      {
        question: "What is E-documentation?",
        answer:
          "E-documentation refers to the process of creating, executing, and storing legal documents in electronic form, as opposed to physical paper documents.",
      },
      {
        question: "Is e-documentation legally valid in India?",
        answer:
          "Yes, e-documents are legally valid in India under the Information Technology Act, 2000, which grants legal recognition to electronic records and digital signatures",
      },
      {
        question: "What constitutes an Electronic Record?",
        answer:
          "An electronic record encompasses any data, document, or information conceived, retained, or transmitted in a digital format. It can involve emails, scanned papers, as well as other digital files.",
      },
      {
        question: "Can contracts be finalized electronically in India?",
        answer:
          "Yes, contracts can be executed electronically provided they meet the standards of the Indian Contract Act of 1872. The document must be legally enforceable and involve consent from all parties involved.",
      },
      {
        question: "How secure is e-documentation?",
        answer:
          "To ensure the authenticity and confidentiality of e-documentation, encryption, access monitoring, and electronic signatures are employed. According to Indian law, digital signatures are mandated for specific legal documents to heighten security.",
      },
      {
        question: "What is an electronic signature or digital signature?",
        answer:
          "An electronic signature or digital signature is a form of signature used to authenticate electronic documents. It ensures that the document has not been altered after signing and verifies the identity of the signer.",
      },
      {
        question: "What are the Benefits of E- documentation?",
        answer:
          "Cost and time efficiency\nReduced paperwork\nEasy storage and retrieval\nEnvironmentally friendly\nEnhanced safety and compliance\nImproved Accessibility and Better Convenience",
      },
      {
        question: "What laws govern e-documentation in India?",
        answer:
          "Information Technology Act, 2000: Provides the legal framework for electronic records and digital signatures.\nIndian Evidence Act, 1872: Recognizes electronic records as admissible evidence.\nIndian Contract Act, 1872: Governs the legality of contracts executed electronically.",
      },
      {
        question: "Are e-documents admissible as evidence in courts of law?",
        answer:
          "Indeed, the Indian Evidence Act of 1872 stipulates that electronic records may be admitted as evidence in legal proceedings, provided certain stringent conditions are satisfied. Namely, the authenticity of any corresponding digital signature and integrity of the electronic document must be demonstrable.",
      },
      {
        question: "How does E-documentation impact businesses in India?",
        answer:
          "E-documentation facilitates faster execution of agreements, reduces operational costs, and improves compliance. It is particularly useful in sectors such as banking, finance, and corporate governance.",
      },
      {
        question:
          "What distinguishes an electronic document from one that has been scanned?",
        answer:
          "A document existing natively in a digital format such as a PDF or Microsoft Word file constitutes an electronic document. Conversely, a scanned document refers to a physical document that has been converted into electronic form through scanning. However, the legal standing of scanned documents may depend more on contextual specifics.",
      },
    ],
    images: {
      whyChoose: SW1,
      benefits: Benefits,
      howItWorks: HoWImage,
    },
  },
};
