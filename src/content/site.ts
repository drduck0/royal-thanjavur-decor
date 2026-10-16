import brandLogo from "@/assets/brand/logos.png";
import heroStagePhoto from "@/assets/hero/hero-wedding-stage.jpg";
import stagePhoto from "@/assets/gallery/royal-wedding-stage.jpg";
import weddingStageDecorPhoto from "@/assets/specialise/wedding-stage.png";
import birthdayEventPhoto from "@/assets/specialise/birthday-stage.png";
import pubertyEventPhoto from "@/assets/specialise/puberty-stage.png";
import babyShowerPhoto from "@/assets/specialise/baby-shower-stage.png";
import houseWarmingPhoto from "@/assets/specialise/house-warming.jpg";
import engagementPhoto from "@/assets/specialise/engagement-stage.jpg";
import specialWorkBlushBackdrop from "@/assets/special-works/blush-backdrop.png";
import specialWorkGardenBanquet from "@/assets/special-works/garden-banquet.png";
import specialWorkGardenPavilion from "@/assets/special-works/garden-pavilion.png";
import specialWorkCelebrationCanopy from "@/assets/special-works/celebration-canopy.png";
import specialWorkBanquetDisplay from "@/assets/special-works/banquet-display.png";
import specialWorkFairyLights from "@/assets/special-works/fairy-lights.png";
import specialWorkBananaLeafStage from "@/assets/special-works/banana-leaf-stage.png";
import specialWorkWeddingSedan from "@/assets/special-works/wedding-sedan.png";
import { appPaths } from "@/lib/routes";
import receptionPhoto from "@/assets/gallery/reception-decor.jpg";
import traditionalPhoto from "@/assets/gallery/traditional-decor.jpg";
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
  /** Count-up animation (celebration-stats style); rendered before `text`. */
  animatedValue?: number;
  animatedSuffix?: string;
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
  /** Occasion label (e.g. for future contact flows). */
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
};

/** Public site URL for canonical links and social previews (no trailing slash). */
export const siteSeo = {
  siteUrl:
    typeof import.meta.env["VITE_SITE_URL"] === "string"
      ? import.meta.env["VITE_SITE_URL"].replace(/\/$/, "")
      : "",
  locale: "en_IN",
};

export const siteImages = {
  logo: brandLogo,
  logoAlt: `${site.businessName} — home`,
};

// ---------- Navigation (header) ----------
export const navigation: NavItem[] = [
  { label: "Home", hash: "home" },
  { label: "About Us", hash: "about" },
  { label: "Gallery", to: appPaths.gallery },
  { label: "Review", hash: "testimonials" },
];

// ---------- Contact details (header, contact section, links) ----------
const whatsappNumber = "918754615441";
const whatsappMessage = "Hi Royal Decor Thanjavur, I'd like to discuss event decor.";

export const contactDetails = {
  email: "royaldecorthanjavur@gmail.com",
  phoneDisplay: "+91 87546 15441",
  phoneHref: "tel:+918754615441",
  whatsappNumber,
  whatsappMessage,
  whatsappHref: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
  whatsappLabel: "WhatsApp",
  whatsappFloatLabel: "Chat with us on WhatsApp",
  instagramHref: "https://www.instagram.com/royal_decor.thanjavur",
  instagramHandle: "@royal_decor.thanjavur",
  instagramLabel: "Royal Decor Thanjavur on Instagram",
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
  galleryCta: "Visit the gallery",
  image: {
    src: heroStagePhoto,
    alt: "Symmetrical floral wedding stage with pink backdrop, carved sofa and red patterned carpet",
  },
};

// ---------- Celebration stats (reusable block) ----------
export const celebrationStats = {
  ariaLabel: "Our celebrations in numbers",
  items: [
    { label: "Weddings", value: 700, suffix: "+" },
    { label: "Birthday events", value: 40, suffix: "+" },
    { label: "Tent house", value: 1, suffix: "K+" },
    { label: "Happy customers", value: 5, suffix: "K+" },
  ] as {
    label: string
    value: number
    suffix: string
    showOnMobile?: boolean
  }[],
};

// ---------- About us ----------
export const aboutSection = {
  eyebrow: "ABOUT US",
  title: [
    { animatedValue: 26, animatedSuffix: "+", text: " Years of " },
    { text: "Excellence", accent: true },
  ] as TitleLine[],
  intro: "",
  image: {
    src: traditionalPhoto,
    alt: "Traditional celebration decor with floral mandap and warm lighting",
  },
  openingParagraphs: [
    `Founded in 2000, ${site.brandName} started as a small family business with a big dream — to make every celebration in Thanjavur unforgettable.`,
    "Led by our founder, Mr. S. Rajendran, CRA DP TMCH (Rtd chief Radiographer TMCH), our journey began with a passion for creativity, an eye for detail, and a commitment to making every event special. His dedication and love for artistry earned the trust of families across the region.",
  ],
  directorsHeading: "Our Directors",
  directorsParagraph:
    "Carrying forward this legacy, our directors, Mr. Ramesh Raja Rajendran and Mrs. Indhumathi Rajendran, continue to expand the business with fresh ideas, innovative designs, and a vision for excellence. Under their leadership, Royal Decor has grown to offer a wide range of decoration services, transforming weddings, engagements, receptions, and special occasions into unforgettable experiences.",
  closingBlocks: [
    {
      heading: "Full-service celebrations",
      body:
        "Over the years, we have continued to grow as a full-service decoration company, bringing together creativity, quality, and professional service to create beautiful celebrations tailored to every client’s vision and budget.",
    },
    {
      heading: "Our promise today",
      body: `Today, ${site.brandName} proudly stands as a trusted name in event decoration, committed to quality, creativity, and customer satisfaction. Every celebration we create reflects our passion for perfection and our promise to make your special moments truly memorable.`,
    },
  ],
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
      showOnMobile: false,
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
      showOnMobile: false,
    },
    {
      icon: Tent,
      title: "Tent house",
      text: "Shamiyanas, flooring and covered spaces sized for your guest list and venue.",
      showOnMobile: false,
    },
    {
      icon: Lightbulb,
      title: "Lighting",
      text: "Warm ambience, stage washes and accent lights that make every corner photograph beautifully.",
      showOnMobile: false,
    },
  ] as {
    icon: LucideIcon
    title: string
    text: string
    showOnMobile?: boolean
  }[],
};

// ---------- Services / specialities ----------
export const servicesSection = {
  eyebrow: "WHAT WE SPECIALISE IN",
  title: [
    { text: "Every occasion." },
    { text: "A beautiful expression.", accent: true },
  ] as TitleLine[],
  description:
    "From wedding stages to intimate family functions, we design decor that reflects your story and elevates every moment.",
  footnote: "Decoration inspiration · Illustrative images",
  galleryCta: "Visit the gallery",
  items: [
    {
      title: "Wedding Stages",
      image: weddingStageDecorPhoto,
      description:
        "Statement stages, beautiful blooms and thoughtful details for the beginning of your forever.",
      type: "Wedding",
    },
    {
      title: "Birthday Events",
      image: birthdayEventPhoto,
      description:
        "Playful themes, balloon styling and picture-perfect stages for first birthdays and every milestone.",
      type: "Birthday",
    },
    {
      title: "House Warming",
      image: houseWarmingPhoto,
      description:
        "Floral entrance décor, rangoli and traditional welcomes that make your new home feel blessed from day one.",
      type: "House warming",
    },
    {
      title: "Puberty",
      image: pubertyEventPhoto,
      description:
        "Traditional floral stages and thoughtful details to honour this meaningful coming-of-age celebration.",
      type: "Puberty",
    },
    {
      title: "Baby Shower",
      image: babyShowerPhoto,
      description:
        "Warm, elegant stages with florals and thoughtful details to welcome your little one in style.",
      type: "Baby shower",
    },
    {
      title: "Engagement",
      image: engagementPhoto,
      description:
        "Romantic floral stages and elegant backdrops to celebrate the beginning of your journey together.",
      type: "Engagement",
    },
  ] as ServiceItem[],
};

// ---------- Special works ----------
export const specialWorksSection = {
  eyebrow: "OUR SPECIAL WORKS IN WEDDINGS",
  title: [
    { text: "Beyond the stage." },
    { text: "Every detail considered.", accent: true },
  ] as TitleLine[],
  description:
    "From welcome boards to tent draping and traditional touches — the finishing elements that complete your wedding day.",
  items: [
    {
      title: "Welcome Board",
      image: specialWorkBlushBackdrop,
      description: "Soft blush tones and layered florals for an intimate ceremony setting.",
      type: "Backdrop",
    },
    {
      title: "Serial Lights",
      image: specialWorkFairyLights,
      description: "Ambient golden fairy lights to add warmth and sparkle to your venue.",
      type: "Lighting",
    },
    {
      title: "Shamiyana Tents",
      image: specialWorkCelebrationCanopy,
      description: "Grand outdoor canopy draping in rich red and gold for wedding celebrations.",
      type: "Canopy",
    },
    {
      title: "Arabian Tents",
      image: specialWorkGardenPavilion,
      description: "Burgundy and gold pavilion styling for grand outdoor celebrations.",
      type: "Pavilion",
    },
    {
      title: "Car Decoration",
      image: specialWorkWeddingSedan,
      description: "Floral garlands and ribbon styling for the bride and groom’s arrival in style.",
      type: "Wedding car",
    },
    {
      title: "Doli Pallaku",
      image: specialWorkBanquetDisplay,
      description: "Cascade florals and table styling for memorable reception moments.",
      type: "Banquet",
    },
    {
      title: "Tables and Chairs",
      image: specialWorkGardenBanquet,
      description: "Open-air elegance with gold accents and coordinated guest seating.",
      type: "Banquet",
    },    
    {
      title: "Vaalai Maram",
      image: specialWorkBananaLeafStage,
      description: "Tropical banana leaf styling with gold accents and soft draped lighting.",
      type: "Stage",
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
    "Family-run since 2000",
    "Personalised for every occasion",
    "Traditional & modern styling",
    "Trusted across Thanjavur",
  ],
  cta: "Tell us your vision",
};

// ---------- Testimonials ----------
export const testimonialsSection = {
  eyebrow: "REVIEWS",
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

// ---------- Contact ----------
export const contactSection = {
  eyebrow: "LET’S CREATE SOMETHING BEAUTIFUL",
  title: [
    { text: "Your next beautiful memory" },
    { text: "starts here.", accent: true },
  ] as TitleLine[],
  description:
    "A date, an occasion, a little inspiration. Let’s give your celebration the Royal Decor touch.",
  cta: "Let’s Plan Your Event",
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

