import stagePhoto from "@/assets/royal-wedding-stage.jpg";
import { appPaths } from "@/lib/routes";
import receptionPhoto from "@/assets/reception-decor.jpg";
import traditionalPhoto from "@/assets/traditional-decor.jpg";
import {
  CalendarDays,
  Cake,
  Flower2,
  Heart,
  Lightbulb,
  PartyPopper,
  Sparkles,
  Tent,
  type LucideIcon,
} from "lucide-react";

// ============================================================
// SITE CONTENT
// Every word, image, card, link and label on the website lives
// in the objects below. Edit the values here — the pages render
// whatever is defined, so nothing needs to change elsewhere.
// ============================================================

export interface TitleLine {
  text: string;
  /** Displayed in italic script style when true. */
  accent?: boolean;
}

export interface NavItem {
  label: string;
  /** Separate page — use paths from `appPaths` in `src/lib/routes.ts`. */
  to?: string;
  /** Landing section id on `/` — must match `homeSectionIds` in `src/lib/routes.ts`. */
  hash?: string;
}

export interface ServiceItem {
  title: string;
  image: string;
  description: string;
  /** Occasion name used to preselect the enquiry form. */
  type: string;
}

export interface GalleryDesign {
  title: string;
  category: string;
  image: string;
  alt: string;
}

// ---------- Site identity ----------
export const site = {
  brandName: "Royal Decor",
  location: "THANJAVUR",
  businessName: "Royal Decor Thanjavur",
  tagline: "Your celebration, beautifully imagined.",
  enquiryFileName: "royal-decor-event-enquiry.txt",
};

/** Public site URL for canonical links and social previews (no trailing slash). */
export const siteSeo = {
  siteUrl:
    typeof import.meta.env.VITE_SITE_URL === "string"
      ? import.meta.env.VITE_SITE_URL.replace(/\/$/, "")
      : "",
  locale: "en_IN",
};

export const siteImages = {
  logoAlt: `${site.businessName} — home`,
};

// ---------- Navigation (header) ----------
export const navigation: NavItem[] = [
  { label: "Home", hash: "home" },
  { label: "Gallery", to: appPaths.gallery },
  { label: "About us", hash: "about" },
  { label: "FAQ", hash: "faq" },
];

// ---------- Contact details (header, contact section, links) ----------
const whatsappNumber = "918754615441";
const whatsappMessage = "Hi Royal Decor Thanjavur, I'd like to discuss event decor.";

export const contactDetails = {
  email: "hello@royaldecorthanjavur.com",
  emailLabel: "Email us",
  phoneDisplay: "+91 87546 15441",
  phoneHref: "tel:+918754615441",
  whatsappNumber,
  whatsappMessage,
  whatsappHref: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
  whatsappLabel: "WhatsApp",
  whatsappFloatLabel: "Chat with us on WhatsApp",
  instagramHref: "https://www.instagram.com/",
  instagramLabel: "Instagram",
  serviceAreaLabel: "Service area",
  serviceArea: "Thanjavur and nearby towns — including Kumbakonam, Mannargudi, and Ariyalur.",
  responseTime: "We aim to reply within one business day.",
  addressLines: ["Thanjavur", "Tamil Nadu, India"],
  mapsLabel: "Open in Google Maps",
  mapsHref: "https://www.google.com/maps/search/?api=1&query=Royal+Decor+Thanjavur+Tamil+Nadu",
  mapEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39158.884!2d79.1374!3d10.787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba861853031f8c9%3A0x9a0fff5dd3c33e6!2sThanjavur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
};

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.businessName,
  description:
    "Wedding stages, reception decorations and traditional function decor in Thanjavur and nearby towns.",
  url: siteSeo.siteUrl || undefined,
  email: contactDetails.email,
  telephone: contactDetails.phoneDisplay,
  areaServed: contactDetails.serviceArea,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Thanjavur",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
};

// ---------- Hero ----------
export const hero = {
  eyebrow: "Beautiful beginnings. Unforgettable celebrations.",
  title: [
    { text: "Premium Wedding & " },
    { text: "Event Decorations in" },
    { text: "Thanjavur", accent: true },
  ] as TitleLine[],
  description:
    "Your moments deserve a beautiful setting. Thoughtfully crafted stage and function decorations, made with love in Thanjavur.",
  primaryCta: "Plan your celebration",
  secondaryCta: "Explore our decor",
  image: {
    src: stagePhoto,
    alt: "Grand floral wedding stage with gold arches, jasmine flowers and an ivory sofa",
  },
  caption: "ROOTED IN THANJAVUR. MADE FOR YOUR MOMENTS.",
};

// ---------- Celebration stats (reusable block) ----------
export const celebrationStats = {
  ariaLabel: "Our celebrations in numbers",
  items: [
    { label: "Weddings", value: 200, suffix: "+" },
    { label: "Birthday parties", value: 40, suffix: "+" },
    { label: "Happy clients", value: 4, suffix: "K+" },
  ] as { label: string; value: number; suffix: string }[],
};

// ---------- About us cards ----------
export const aboutSection = {
  eyebrow: "ABOUT US",
  title: [
    { text: "Rooted in Thanjavur." },
    { text: "Crafted for your moments.", accent: true },
  ] as TitleLine[],
  intro:
    "We create stage and function decorations that blend the warmth of our traditions with a touch of modern elegance — one thoughtful detail at a time.",
  cards: [
    {
      icon: Flower2,
      title: "Wedding stages",
      text: "Statement stages with beautiful blooms and thoughtful details for the beginning of your forever.",
    },
    {
      icon: Heart,
      title: "Reception decorations",
      text: "Elegant floral backdrops and picture-perfect settings to celebrate your love in style.",
    },
    {
      icon: PartyPopper,
      title: "Family functions",
      text: "Warm, joyful decor for engagements and every family celebration.",
    },
    {
      icon: Cake,
      title: "Birthday events",
      text: "Colourful themes, balloon accents and photo-ready backdrops for milestones at every age.",
    },
    {
      icon: Sparkles,
      title: "Traditional celebrations",
      text: "Rooted in Thanjavur tradition, styled with a touch of modern elegance.",
    },
    {
      icon: CalendarDays,
      title: "Event planner",
      text: "Timelines, vendor coordination and on-the-day support so your celebration runs smoothly.",
    },
    {
      icon: Tent,
      title: "Tent house",
      text: "Shamiyanas, flooring and covered spaces sized for your guest list and venue.",
    },
    {
      icon: Lightbulb,
      title: "Lighting",
      text: "Warm ambience, stage washes and accent lights that make every corner photograph beautifully.",
    },
  ] as { icon: LucideIcon; title: string; text: string }[],
};

// ---------- Services / specialities ----------
export const servicesSection = {
  eyebrow: "OUR SPECIALITIES",
  title: [
    { text: "Every occasion." },
    { text: "A beautiful expression.", accent: true },
  ] as TitleLine[],
  description:
    "From an intimate gathering to your grandest day, we bring your vision to life, one thoughtful detail at a time.",
  footnote: "Decoration inspiration · Illustrative images",
  galleryCta: "Visit the gallery",
  previewDescription: "Decoration inspiration for your celebration. Illustrative image.",
  previewCta: "Plan a celebration like this",
  items: [
    {
      title: "Wedding stage decor",
      image: stagePhoto,
      description:
        "Statement stages, beautiful blooms and thoughtful details for the beginning of your forever.",
      type: "Wedding",
    },
    {
      title: "Reception decor",
      image: receptionPhoto,
      description:
        "Elegant floral backdrops and picture-perfect settings to celebrate your love in style.",
      type: "Reception",
    },
    {
      title: "Traditional & function decor",
      image: traditionalPhoto,
      description:
        "From meaningful family occasions to joyful celebrations, decor that feels uniquely yours.",
      type: "Family function",
    },
  ] as ServiceItem[],
};

// ---------- Story ----------
export const storySection = {
  eyebrow: "THE ROYAL TOUCH",
  title: [
    { text: "Rooted in tradition." },
    { text: "Inspired by you.", accent: true },
  ] as TitleLine[],
  image: {
    src: traditionalPhoto,
    alt: "Traditional floral mandap with marigolds, banana leaves and brass lamps",
  },
  paragraphs: [
    "Some moments stay with us forever. At Royal Decor Thanjavur, we believe the setting should be just as memorable.",
    "We bring together the warmth of our traditions and the elegance of contemporary design to create decorations that reflect your story.",
  ],
  values: [
    "Personalised designs",
    "Thoughtful details",
    "Traditional elegance",
    "Beautiful floral settings",
  ],
  cta: "Tell us your vision",
};

// ---------- Testimonials ----------
export const testimonialsSection = {
  eyebrow: "KIND WORDS",
  title: [
    { text: "Celebrations we were" },
    { text: "honoured to style.", accent: true },
  ] as TitleLine[],
  description: "Every event is personal. Here’s what families have shared after their day with us.",
  items: [
    {
      quote:
        "The stage looked exactly how we imagined — elegant, warm, and full of flowers. Our relatives kept asking who decorated it.",
      name: "Priya & Arun",
      occasion: "Wedding reception",
      rating: 5,
    },
    {
      quote:
        "They listened to our colours and budget, and still made the mandap feel grand. Setup was calm and on time.",
      name: "Lakshmi family",
      occasion: "Traditional function",
      rating: 4.5,
    },
    {
      quote:
        "From the first call to the final touch, the team was patient and creative. The reception backdrop was picture-perfect.",
      name: "Divya & Karthik",
      occasion: "Wedding stage",
      rating: 4.8,
    },
    {
      quote:
        "We booked them for an engagement at home. Beautiful florals, neat finishing, and they left the space tidy.",
      name: "Meena",
      occasion: "Engagement",
      rating: 4.1,
    },
  ] as {
    quote: string
    name: string
    occasion: string
    /** Star rating shown on the card (0–5, decimals supported). */
    rating: number
  }[],
};

export interface FaqItem {
  question: string;
  answer: string;
}

// ---------- FAQ ----------
export const faqSection = {
  eyebrow: "FAQ",
  title: [{ text: "Questions before" }, { text: "you book.", accent: true }] as TitleLine[],
  description:
    "A few things families often ask us about stages, flowers, and planning in Thanjavur.",
  items: [
    {
      question: "How far in advance should we book?",
      answer:
        "For weddings and peak season dates, we recommend reaching out at least 4–8 weeks ahead. Smaller functions may be possible with shorter notice — share your date and we’ll let you know.",
    },
    {
      question: "Do you travel outside Thanjavur?",
      answer:
        "Yes. We regularly work in Thanjavur and nearby towns. Travel and logistics are discussed when you share your venue.",
    },
    {
      question: "Can we choose colours, flowers, and themes?",
      answer:
        "Absolutely. Share photos, colour palettes, or traditions you’d like honoured. We’ll suggest options that fit your venue and budget.",
    },
    {
      question: "How long does setup take?",
      answer:
        "It depends on the scale of the decor and venue access. We coordinate arrival times with your hall or family so everything is ready before guests arrive.",
    },
    {
      question: "Do you provide fresh flowers or artificial decor?",
      answer:
        "We can work with fresh blooms, mixed arrangements, or reusable elements depending on your occasion, season, and preferences.",
    },
    {
      question: "How do enquiries work right now?",
      answer:
        "Use the event brief form to download your details, then share it with us by phone, WhatsApp, or email. We’ll follow up to discuss ideas and next steps.",
    },
  ] as FaqItem[],
};

// ---------- Contact ----------
export const contactSection = {
  eyebrow: "LET’S CREATE SOMETHING BEAUTIFUL",
  title: [
    { text: "Your next beautiful memory" },
    { text: "starts here.", accent: true },
  ] as TitleLine[],
  description:
    "A date, an occasion, a little inspiration. Let’s give your celebration the Royal Decor touch.",
  cta: "Let’s plan your event",
};

export const siteHeader = {
  primaryCta: contactSection.cta,
  primaryCtaShort: "Plan event",
  galleryCtaShort: "Contact",
};

// ---------- Footer ----------
export const footerSection = {
  contactHeading: "Contact",
  mapHeading: "Location",
  links: [
    { label: "Gallery", to: appPaths.gallery },
    { label: "About", hash: "about" },
    { label: "FAQ", hash: "faq" },
    { label: "Get in touch", hash: "contact" },
  ] as NavItem[],
};

// ---------- Gallery page ----------
export const gallerySection = {
  eyebrow: "THE ROYAL DECOR GALLERY",
  title: [
    { text: "Beautiful settings." },
    { text: "Endless inspiration.", accent: true },
  ] as TitleLine[],
  description:
    "Discover a world of flowers, colour and celebration. Find the little details that speak to your big day.",
  allLabel: "All decorations",
  categories: ["Wedding stages", "Receptions", "Traditional functions"],
  footnote: "Decoration inspiration · Illustrative images",
  designs: [
    {
      title: "The royal floral stage",
      category: "Wedding stages",
      image: stagePhoto,
      alt: "Gold arches with jasmine and roses framing an ivory wedding sofa",
    },
    {
      title: "A celebration in bloom",
      category: "Receptions",
      image: receptionPhoto,
      alt: "Pastel pink floral arches and an elegant reception stage",
    },
    {
      title: "Tradition, beautifully adorned",
      category: "Traditional functions",
      image: traditionalPhoto,
      alt: "Traditional mandap with marigolds, banana leaves and brass lamps",
    },
  ] as GalleryDesign[],
};

export const galleryContact = {
  eyebrow: "YOUR VISION. OUR ROYAL TOUCH.",
  title: [{ text: "Found your inspiration?" }] as TitleLine[],
  description:
    "Let’s make it personal. Bring your ideas and we’ll help imagine a beautiful setting for your celebration.",
  cta: "Plan your celebration",
};

// ---------- Enquiry dialog ----------
export const enquiry = {
  dialogTitle: "Your celebration, your vision.",
  dialogDescription:
    "Prepare your event brief. Online enquiries aren’t connected yet; download it to share with Royal Decor.",
  briefHeading: "ROYAL DECOR THANJAVUR — EVENT ENQUIRY",
  fallbackMessage: "I would like to discuss decoration ideas.",
  defaultOccasion: "Wedding",
  occasions: ["Wedding", "Reception", "Family function", "Other celebration"],
  downloadButton: "Download event brief",
  editButton: "Edit details",
  submitButton: "Prepare my event brief",
  fields: {
    name: "Your name",
    namePlaceholder: "Name",
    phone: "Phone number",
    phonePlaceholder: "Phone number",
    occasion: "Occasion",
    date: "Event date",
    venue: "Venue / location",
    venuePlaceholder: "Where are you celebrating?",
    message: "What do you have in mind?",
    messagePlaceholder: "Colours, flowers, themes… tell us your ideas.",
    noDate: "To be decided",
  },
};
