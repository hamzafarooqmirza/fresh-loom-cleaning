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
  },
  {
    slug: "leather-cleaning",
    title: "Leather Cleaning",
    description:
      "Specialist leather cleaning and conditioning that removes stains and restores a soft, supple finish.",
    icon: "Armchair",
  },
  {
    slug: "mattress-cleaning",
    title: "Mattress Cleaning",
    description:
      "Deep mattress cleaning eliminates dust mites, stains, and allergens for a healthier night's sleep.",
    icon: "BedDouble",
  },
  {
    slug: "pet-stain-removal",
    title: "Pet Stain Removal",
    description:
      "Targeted treatment that removes pet stains and odours safely from carpets and upholstery.",
    icon: "PawPrint",
  },
  {
    slug: "end-of-tenancy-deep-clean",
    title: "End Of Tenancy Deep Clean",
    description:
      "Thorough end of tenancy cleaning to help secure your deposit, covering carpets, upholstery, and more.",
    icon: "KeyRound",
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
