 const products = [
    {
      id: "e-stamp-corner",
      title: "E-Stamp Corner",
      description: "Transform Your Agreements with Ease",
      image: "https://images.unsplash.com/photo-1641749460561-0e9a55f55342?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHN0YW1wfGVufDB8fDB8fHww",
      hasSubmenu: true,
      path: "/products/e-stamp-corner",
      sections: [
        {
          title: "E-Stamp Agreement",
          description: "Create and manage your e-stamp agreements",
          path: "/products/e-stamp-corner"
        },
        {
          title: "Create E-Stamp",
          description: "Generate e-stamps for your documents",
          path: "/products/create-stamp"
        },
      ],
    },
    {
      id: "instant-review",
      title: "Instant Review",
      description: "Fast, Reliable Legal Agreement Review",
      image: "https://plus.unsplash.com/premium_photo-1661540409860-fe00bb21a51c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxhd3llcnxlbnwwfHwwfHx8MA%3D%3D",
      path: "/products/instant-review"
    },
    {
      id: "your-legal-manager",
      title: "Your Legal Manager",
      description: "Elevate Your Firm's Legal Efficiency with dedicated Support",
      image: "https://plus.unsplash.com/premium_photo-1683141511225-1d9e52099f56?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGxhd3llcnxlbnwwfHwwfHx8MA%3D%3D",
      path: "/products/your-legal-manager"
    },
    {
      id: "rent-receipt-services",
      title: "Rent Receipt Services",
      description: "Simplifying Your Rental Transactions",
      image: "https://plus.unsplash.com/premium_photo-1694476607274-003dd175d073?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fGxhd3llcnxlbnwwfHwwfHx8MA%3D%3D",
      path: "/products/rent-receipt-services"
    },
    {
      id: "notice-lifecycle-management",
      title: "Notice Lifecycle Management",
      description: "Streamline Your Notice Management Process",
      image: "https://plus.unsplash.com/premium_photo-1661342406509-064b58299ca5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM5fHxsYXd5ZXJ8ZW58MHx8MHx8fDA%3D",
      
    },
    {
      id: "grow-instant",
      title: "Grow Instant",
      description: "Accelerate Your Business Growth",
      image: "data:image/jpeg;base64,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",
      path: "/products/grow-instant"
    },
    {
      id: "compliance",
      title: "Compliance Suite",
      description: "Stay Compliant with Ease",
      image: "https://images.unsplash.com/photo-1736881805287-663862fa0d1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGxhd3llcnxlbnwwfHwwfHx8MA%3D%3D",
      path: "/products/compliance"
    },
    {
      id: "risk-mitigator",
      title: "Risk Mitigator",
      description: "Proactive Risk Management Solutions",
      image: "https://plus.unsplash.com/premium_photo-1694476607281-d110c2a1ade1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fGxhd3llcnxlbnwwfHwwfHx8MA%3D%3D",
      path: "/products/risk-mitigator"
    },
    {
      id: "strategic",
      title: "Strategic Solutions",
      description: "Strategic Legal Planning Tools",
      image: "https://media.licdn.com/dms/image/v2/D5612AQH4_3nWITdbVQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1705594724404?e=2147483647&v=beta&t=rZosYwcZ4FcS8uuVM_8p-Hj7XNwN5eD79XhQifssiaE",
      path: "/products/strategic"
    },
    {
      id: "litigation",
      title: "Litigation Manager",
      description: "Comprehensive Litigation Management",
      image: "https://careyandleisure.com/wp-content/uploads/2021/10/featured-law-advice-and-legal-services-concept-2021-08-29-01-18-08-utc-1.jpg",
      path: "/products/litigation"
    },
    {
      id: "startup-saathi",
      title: "Startup Saathi",
      description: " Comprehensive startup legal services",
      image: "https://careyandleisure.com/wp-content/uploads/2021/10/featured-law-advice-and-legal-services-concept-2021-08-29-01-18-08-utc-1.jpg",
      path: "/products/startup-saathi"
    },

    {
      id: "risk-medicator",
      title: "Risk Mitigator",
      description: "Proactive Risk Management Solutions",
      image: "https://careyandleisure.com/wp-content/uploads/2021/10/featured-law-advice-and-legal-services-concept-2021-08-29-01-18-08-utc-1.jpg",
      path: "/products/risk-mitigator"
    },

    {
      id: "master-access-subscription",
      title: "Master Access Subscription",
      description: "Proactive Generate Stamp Paper  Solutions",
      image: "https://careyandleisure.com/wp-content/uploads/2021/10/featured-law-advice-and-legal-services-concept-2021-08-29-01-18-08-utc-1.jpg",
      path: "/products/risk-mitigator"
    },
    {
      id: "strategic-management-services",
      title: "Strategic Management Services ",
      description: "Proactive Risk Management Solutions",
      image: "https://careyandleisure.com/wp-content/uploads/2021/10/featured-law-advice-and-legal-services-concept-2021-08-29-01-18-08-utc-1.jpg",
      path: "/products/risk-mitigator"
    },
    {
      id: "contract-lifecycle-management",
      title: "Contract Lifecycle Management",
      description: "Proactive Risk Management Solutions",
      image: "https://careyandleisure.com/wp-content/uploads/2021/10/featured-law-advice-and-legal-services-concept-2021-08-29-01-18-08-utc-1.jpg",
      path: "/products/risk-mitigator"
    },
    {
      id: "litigation-pratice-managemen",
      title: "Litigation (Pratice) Managemen",
      description: "comming soon",
      image: "https://careyandleisure.com/wp-content/uploads/2021/10/featured-law-advice-and-legal-services-concept-2021-08-29-01-18-08-utc-1.jpg",
      path: "/products/risk-mitigator"
    },
    {
      id: "price-calculator",
      title: "Price Calculator ",
      description: "comming soon",
      image: "https://careyandleisure.com/wp-content/uploads/2021/10/featured-law-advice-and-legal-services-concept-2021-08-29-01-18-08-utc-1.jpg",
      path: "/products/risk-mitigator"
    },
    {
      id: "litigation-pratice-managemen",
      title: "Litigation (Pratice) Managemen",
      description: "comming soon",
      image: "https://careyandleisure.com/wp-content/uploads/2021/10/featured-law-advice-and-legal-services-concept-2021-08-29-01-18-08-utc-1.jpg",
      path: "/products/risk-mitigator"
    },
  
 
    // 

  ];


  export default products