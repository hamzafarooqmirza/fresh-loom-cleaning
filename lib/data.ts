export const siteInfo = {
  name: "Fresh Loom Cleaning",
  legalName: "Freshloom Carpet & Upholstery Cleaning Limited",
  phone: "+44 777 887 9063",
  phoneHref: "tel:+447778879063",
  email: "info@freshloomcleaning.co.uk",
  address: "2/2, 156 Charles St, Glasgow G21 2QH, United Kingdom",
  hours: ["Mon-Fri: 24hrs", "Sunday: Closed"],
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4476.981500466958!2d-4.230314718005873!3d55.87150142346282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48884531d6da7d63%3A0x69cc73504a94c2b4!2sFRESHLOOM%20CARPET%20%26%20UPHOLSTERY%20CLEANING%20LIMI!5e0!3m2!1sen!2s!4v1782135488420!5m2!1sen!2s",
};

export const aboutPage = {
  intro: [
    "Freshloom Carpet & Upholstery Cleaning Limited provides professional cleaning services designed to restore cleanliness, freshness, and comfort to homes and businesses. Our experienced team uses advanced equipment and proven techniques to remove dirt, stains, allergens, and unwanted odors from carpets and furniture.",
    "We are committed to delivering reliable service, exceptional results, and complete customer satisfaction. With careful attention to detail and safe cleaning methods, we help extend the life of your carpets, rugs, sofas, and upholstery while creating a healthier indoor environment.",
  ],
  vision: {
    title: "Our Vision",
    description:
      "To become the UK's most trusted cleaning company, delivering exceptional carpet and upholstery care with lasting customer satisfaction.",
  },
  mission: {
    title: "Our Mission",
    description:
      "To provide reliable, affordable cleaning services using safe methods and modern equipment, ensuring healthier and cleaner living environments.",
  },
  ukServices: {
    title: "Carpet & Upholstery Cleaning Services In UK",
    paragraphs: [
      "Freshloom Carpet & Upholstery Cleaning Limited provides expert cleaning services across the UK, specializing in carpets, sofas, rugs, and upholstery. Our professional team uses advanced cleaning equipment and eco-friendly methods to remove deep stains, dirt, allergens, and unpleasant odors, ensuring a healthier and fresher living or working environment.",
      "We are committed to delivering high-quality results with attention to detail and customer satisfaction at the core of our service. Whether you need residential or commercial cleaning, our reliable solutions restore the original beauty of your carpets and furniture while extending their lifespan. Contact Freshloom Cleaning Services today for trusted, affordable, and professional cleaning across the UK.",
    ],
  },
};

export const contactPage = {
  intro:
    "Have a question or ready to book your cleaning? Reach out to Freshloom Carpet & Upholstery Cleaning Limited — our team is on hand to help with a fast, friendly response.",
  cards: [
    { icon: "MapPin", title: "Our Address", lines: [siteInfo.address] },
    { icon: "Phone", title: "Phone Number", lines: [siteInfo.phone] },
    { icon: "Mail", title: "Email Address", lines: [siteInfo.email] },
    { icon: "Clock", title: "Working Hours", lines: siteInfo.hours },
  ],
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact-us" },
];

export const services = [
  {
    slug: "carpet-cleaning",
    title: "Carpet Cleaning",
    description: "Deep cleaning removes stains, dirt, and allergens for freshness.",
    image: "/images/services/carpet-cleaning.jpg",
  },
  {
    slug: "upholstery-cleaning",
    title: "Upholstery Cleaning",
    description: "Restore furniture freshness by removing stains, dust, and allergens.",
    image: "/images/services/upholstery-cleaning.jpg",
  },
  {
    slug: "rug-cleaning",
    title: "Rug Cleaning",
    description: "Professional rug cleaning removes dirt, stains, and trapped allergens.",
    image: "/images/services/rug-cleaning.jpg",
  },
  {
    slug: "sofa-cleaning",
    title: "Sofa Cleaning",
    description: "Deep sofa cleaning removes stains, dust, and unpleasant odours.",
    image: "/images/services/sofa-cleaning.jpg",
  },
  {
    slug: "stain-removal",
    title: "Stain Removal",
    description: "Effective stain treatment removes tough marks from all surfaces.",
    image: "/images/services/stain-removal.jpg",
  },
  {
    slug: "odour-removal",
    title: "Odour Removal",
    description: "Eliminates bad smells caused by pets, smoke, and moisture for a fresher home.",
    image: "/images/services/odour-removal.jpg",
  },
];

export const moreServices = [
  {
    slug: "curtain-cleaning",
    title: "Curtain Cleaning",
    description:
      "Professional curtain cleaning removes dust, allergens, and odours while preserving fabric quality.",
    icon: "Blinds",
    image: "/images/services/upholstery-cleaning.jpg",
  },
  {
    slug: "leather-cleaning",
    title: "Leather Cleaning",
    description:
      "Specialist leather cleaning and conditioning that removes stains and restores a soft, supple finish.",
    icon: "Armchair",
    image: "/images/services/sofa-cleaning.jpg",
  },
  {
    slug: "mattress-cleaning",
    title: "Mattress Cleaning",
    description:
      "Deep mattress cleaning eliminates dust mites, stains, and allergens for a healthier night's sleep.",
    icon: "BedDouble",
    image: "/images/services/stain-removal.jpg",
  },
  {
    slug: "pet-stain-removal",
    title: "Pet Stain Removal",
    description:
      "Targeted treatment that removes pet stains and odours safely from carpets and upholstery.",
    icon: "PawPrint",
    image: "/images/services/odour-removal.jpg",
  },
  {
    slug: "end-of-tenancy-deep-clean",
    title: "End Of Tenancy Deep Clean",
    description:
      "Thorough end of tenancy cleaning to help secure your deposit, covering carpets, upholstery, and more.",
    icon: "KeyRound",
    image: "/images/services/carpet-cleaning.jpg",
  },
];

export const allServices = [...services, ...moreServices];

function buildIncluded(word: string, extra: string) {
  return [
    `Deep ${word} Cleaning`,
    "Stain Removal Treatment",
    "Dust Extraction Process",
    "Odour Elimination Service",
    "Steam Cleaning Method",
    extra,
    "Allergen Reduction Service",
    "Eco Friendly Products",
    "Fast Drying Process",
    "Trained & Insured Technicians",
  ];
}

export const serviceDetails: Record<
  string,
  {
    intro: string[];
    included: string[];
    faq: { q: string; a: string }[];
  }
> = {
  "carpet-cleaning": {
    intro: [
      "We provide professional carpet cleaning services across the UK, using advanced cleaning equipment and safe methods to remove deep stains, dust, allergens, and unpleasant odors from all types of carpet. Our expert team carefully restores freshness, comfort, and hygiene while protecting fibre quality and extending carpet life.",
      "Our reliable cleaning process is designed to improve indoor air quality and maintain a healthier environment. We focus on delivering high-quality results with attention to detail, eco-friendly solutions, and complete customer satisfaction for every carpet cleaning project.",
    ],
    included: buildIncluded("Carpet", "Fibre Protection Layer"),
    faq: [
      {
        q: "What types of carpet do you clean?",
        a: "We clean wool, synthetic, berber, and all types of fitted and loose carpets.",
      },
    ],
  },
  "upholstery-cleaning": {
    intro: [
      "We provide professional upholstery cleaning services across the UK, using advanced cleaning equipment and safe methods to remove deep stains, dust, allergens, and unpleasant odors from all types of furniture. Our expert team carefully restores freshness, comfort, and hygiene while protecting fabric quality and extending furniture life.",
      "Our reliable cleaning process is designed to improve indoor air quality and maintain a healthier environment. We focus on delivering high-quality results with attention to detail, eco-friendly solutions, and complete customer satisfaction for every upholstery cleaning project.",
    ],
    included: buildIncluded("Upholstery", "Fabric Protection Layer"),
    faq: [
      {
        q: "What types of upholstery do you clean?",
        a: "We clean fabric, leather, velvet, suede, and all upholstered furniture types.",
      },
    ],
  },
  "rug-cleaning": {
    intro: [
      "We provide professional rug cleaning services across the UK, using advanced cleaning equipment and safe methods to remove deep stains, dust, allergens, and unpleasant odors from all types of rugs. Our expert team carefully restores freshness, comfort, and hygiene while protecting fibre quality and extending rug life.",
      "Our reliable cleaning process is designed to improve indoor air quality and maintain a healthier environment. We focus on delivering high-quality results with attention to detail, eco-friendly solutions, and complete customer satisfaction for every rug cleaning project.",
    ],
    included: buildIncluded("Rug", "Fringe & Fibre Care"),
    faq: [
      {
        q: "What types of rugs do you clean?",
        a: "We clean wool, silk, synthetic, and hand-woven rugs of all sizes.",
      },
    ],
  },
  "sofa-cleaning": {
    intro: [
      "We provide professional sofa cleaning services across the UK, using advanced cleaning equipment and safe methods to remove deep stains, dust, allergens, and unpleasant odors from all types of sofas. Our expert team carefully restores freshness, comfort, and hygiene while protecting fabric quality and extending sofa life.",
      "Our reliable cleaning process is designed to improve indoor air quality and maintain a healthier environment. We focus on delivering high-quality results with attention to detail, eco-friendly solutions, and complete customer satisfaction for every sofa cleaning project.",
    ],
    included: buildIncluded("Sofa", "Fabric Protection Layer"),
    faq: [
      {
        q: "What sofa fabrics can you clean?",
        a: "We clean fabric, leather, velvet, suede, and all upholstered sofa types.",
      },
    ],
  },
  "stain-removal": {
    intro: [
      "We provide professional stain removal services across the UK, using advanced cleaning equipment and safe methods to lift deep stains, dust, allergens, and unpleasant odors from carpets and furniture. Our expert team carefully restores freshness, comfort, and hygiene while protecting fibre and fabric quality.",
      "Our reliable cleaning process is designed to improve indoor air quality and maintain a healthier environment. We focus on delivering high-quality results with attention to detail, eco-friendly solutions, and complete customer satisfaction for every stain removal project.",
    ],
    included: buildIncluded("Stain", "Fabric & Fibre Protection"),
    faq: [
      {
        q: "What types of stains can you remove?",
        a: "We treat food, drink, pet, ink, and general household stains from carpets and furniture.",
      },
    ],
  },
  "odour-removal": {
    intro: [
      "We provide professional odour removal services across the UK, using advanced cleaning equipment and safe methods to eliminate deep-set odours, dust, and allergens from carpets and furniture. Our expert team carefully restores freshness, comfort, and hygiene while protecting fibre and fabric quality.",
      "Our reliable cleaning process is designed to improve indoor air quality and maintain a healthier environment. We focus on delivering high-quality results with attention to detail, eco-friendly solutions, and complete customer satisfaction for every odour removal project.",
    ],
    included: buildIncluded("Odour", "Fabric & Fibre Protection"),
    faq: [
      {
        q: "What causes bad odours in carpets and furniture?",
        a: "Pets, smoke, moisture, and everyday use can all trap odours deep in fibres.",
      },
    ],
  },
  "curtain-cleaning": {
    intro: [
      "We provide professional curtain cleaning services across the UK, using advanced cleaning equipment and safe methods to remove dust, allergens, and unpleasant odors from all types of curtains and drapes. Our expert team carefully restores freshness and hygiene while preserving fabric quality.",
      "Our reliable cleaning process is designed to improve indoor air quality and maintain a healthier environment, with complete customer satisfaction for every curtain cleaning project.",
    ],
    included: buildIncluded("Curtain", "Fabric Protection Layer"),
    faq: [
      {
        q: "Can you clean curtains without taking them down?",
        a: "Yes, we offer both in-situ and take-down cleaning depending on the fabric and fitting.",
      },
    ],
  },
  "leather-cleaning": {
    intro: [
      "We provide professional leather cleaning services across the UK, using specialist products and safe methods to remove stains and dirt while conditioning and restoring a soft, supple finish. Our expert team carefully protects leather quality and extends the life of your furniture.",
      "Our reliable cleaning process is designed to keep leather looking and feeling its best, with complete customer satisfaction for every leather cleaning project.",
    ],
    included: buildIncluded("Leather", "Leather Conditioning Treatment"),
    faq: [
      {
        q: "Is leather cleaning safe for all leather types?",
        a: "We assess your leather type first and use tailored, safe products for the best result.",
      },
    ],
  },
  "mattress-cleaning": {
    intro: [
      "We provide professional mattress cleaning services across the UK, using advanced cleaning equipment and safe methods to remove dust mites, stains, allergens, and unpleasant odors. Our expert team carefully restores freshness and hygiene for a healthier night's sleep.",
      "Our reliable cleaning process is designed to improve indoor air quality and maintain a healthier environment, with complete customer satisfaction for every mattress cleaning project.",
    ],
    included: buildIncluded("Mattress", "Dust Mite Elimination"),
    faq: [
      {
        q: "How often should a mattress be professionally cleaned?",
        a: "We recommend a deep clean every 6-12 months to reduce dust mites and allergens.",
      },
    ],
  },
  "pet-stain-removal": {
    intro: [
      "We provide professional pet stain removal services across the UK, using advanced cleaning equipment and safe methods to remove pet stains, dirt, allergens, and unpleasant odors from carpets and upholstery. Our expert team carefully restores freshness and hygiene throughout your home.",
      "Our reliable cleaning process is designed to neutralise odours at the source and maintain a healthier environment, with complete customer satisfaction for every pet stain removal project.",
    ],
    included: buildIncluded("Pet Stain", "Pet Odour Neutraliser"),
    faq: [
      {
        q: "Will the pet odour come back after cleaning?",
        a: "Our treatment neutralises odour at the source rather than masking it, for lasting results.",
      },
    ],
  },
  "end-of-tenancy-deep-clean": {
    intro: [
      "We provide professional end of tenancy deep cleaning services across the UK, using advanced cleaning equipment and safe methods to remove deep stains, dust, allergens, and unpleasant odors from carpets and upholstery. Our expert team helps your property look its best for the final inspection.",
      "Our reliable cleaning process is designed to help secure your deposit with complete customer satisfaction for every end of tenancy cleaning project.",
    ],
    included: buildIncluded("End Of Tenancy", "Fabric & Fibre Protection"),
    faq: [
      {
        q: "Will end of tenancy cleaning help me get my deposit back?",
        a: "Our thorough deep clean is designed to meet the standard landlords and agents expect.",
      },
    ],
  },
};

export const sharedFaqs = [
  {
    q: "Can you remove tough stains?",
    a: "Yes, our advanced equipment and treatments are effective on most tough and set-in stains.",
  },
  {
    q: "Are your cleaning products safe?",
    a: "Yes, we use safe, eco-friendly products that are gentle on your home and family.",
  },
  {
    q: "How long does drying take?",
    a: "Most surfaces are dry within a few hours thanks to our fast-drying cleaning methods.",
  },
  {
    q: "Do you offer UK-wide service?",
    a: "Yes, we provide professional cleaning services to homes and businesses across the UK.",
  },
];

export const stats = [
  { value: "1,000+", label: "Total Customers" },
  { value: "10+", label: "Years Experience" },
  { value: "50+", label: "Team Members" },
];

export const whyChooseUs = [
  {
    title: "Deep Carpet Cleaning",
    description:
      "Remove dirt, stains, and allergens to restore freshness, cleanliness, and comfort throughout your carpets.",
  },
  {
    title: "Sofa & Upholstery Care",
    description:
      "Professional cleaning solutions that refresh furniture, eliminate odors, and extend the life of upholstery.",
  },
  {
    title: "Safe & Reliable Service",
    description:
      "Using modern equipment and effective cleaning methods to deliver outstanding results with customer satisfaction guaranteed.",
  },
];

export const processSteps = [
  { step: "1", title: "Book Your Appointment" },
  { step: "2", title: "Deep Cleaning Process" },
  { step: "3", title: "Final Quality Inspection" },
];

export const galleryItems = [
  { title: "Sofa Cleaning", image: "/images/gallery/sofa-cleaning.png" },
  { title: "Stain Removal", image: "/images/gallery/stain-removal.png" },
  { title: "Rug Cleaning", image: "/images/gallery/rug-cleaning.png" },
  { title: "Carpet Cleaning", image: "/images/gallery/carpet-cleaning.png" },
];

export const testimonials = [
  {
    name: "Olivia Carter",
    quote:
      "Freshloom did an amazing job on our sofa set. All stains were removed and it smells fresh. Highly recommended!",
  },
  {
    name: "Daniel Thompson",
    quote:
      "Very reliable and efficient team. They cleaned our rugs with great care and attention to detail. Great results.",
  },
  {
    name: "Sophie Williams",
    quote:
      "Outstanding upholstery cleaning service. My chairs and sofas look refreshed and much cleaner than before.",
  },
  {
    name: "Michael Brown",
    quote:
      "Booked end of tenancy cleaning and they did a perfect job. Got my full deposit back without any issues.",
  },
  {
    name: "Emily Johnson",
    quote:
      "Great experience from start to finish. Friendly staff, modern equipment, and excellent cleaning quality. Will use again.",
  },
  {
    name: "James Mitchell",
    quote:
      "Excellent carpet cleaning service. My carpets look brand new again. Very professional, punctual, and affordable service in the UK.",
  },
];

export const footerServiceLinks = [
  "Carpet Cleaning",
  "Upholstery Cleaning",
  "Rug Cleaning",
  "Sofa Cleaning",
  "Stain Removal",
];

export const socialLinks = [
  { label: "Facebook", href: "#" },
  { label: "X", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
];
