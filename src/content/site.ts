import stagePhoto from "@/assets/royal-wedding-stage.jpg"
import receptionPhoto from "@/assets/reception-decor.jpg"
import traditionalPhoto from "@/assets/traditional-decor.jpg"
import {
  Flower2,
  Heart,
  PartyPopper,
  Sparkles,
  type LucideIcon,
} from "lucide-react"

// ============================================================
// SITE CONTENT
// Every word, image, card, link and label on the website lives
// in the objects below. Edit the values here — the pages render
// whatever is defined, so nothing needs to change elsewhere.
// ============================================================

export interface TitleLine {
  text: string
  /** Displayed in italic script style when true. */
  accent?: boolean
}

export interface NavItem {
  label: string
  /** Other page, e.g. "/gallery". Renders as a route link. */
  to?: string
  /** Section on the landing page, e.g. "services". Renders as "#services". */
  hash?: string
}

export interface ServiceItem {
  title: string
  image: string
  description: string
  /** Occasion name used to preselect the enquiry form. */
  type: string
}

export interface GalleryDesign {
  title: string
  category: string
  image: string
  alt: string
}

// ---------- Site identity ----------
export const site = {
  brandName: "Royal Decor",
  location: "THANJAVUR",
  businessName: "Royal Decor Thanjavur",
  tagline: "Your celebration, beautifully imagined.",
  enquiryFileName: "royal-decor-event-enquiry.txt",
}

// ---------- Navigation (header, mobile menu) ----------
export const navigation: NavItem[] = [
  { label: "Home", hash: "home" },
  { label: "Our services", hash: "services" },
  { label: "Gallery", to: "/gallery" },
  { label: "About us", hash: "about" },
]

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
}

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
      text: "Warm, joyful decor for engagements, birthdays and every family celebration.",
    },
    {
      icon: Sparkles,
      title: "Traditional celebrations",
      text: "Rooted in Thanjavur tradition, styled with a touch of modern elegance.",
    },
  ] as { icon: LucideIcon; title: string; text: string }[],
}

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
  previewDescription:
    "Decoration inspiration for your celebration. Illustrative image.",
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
}

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
}

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
}

// ---------- Footer ----------
export const footerSection = {
  links: [
    { label: "Services", hash: "services" },
    { label: "About", hash: "about" },
    { label: "Get in touch", hash: "contact" },
  ] as NavItem[],
}

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
}

export const galleryContact = {
  eyebrow: "YOUR VISION. OUR ROYAL TOUCH.",
  title: [{ text: "Found your inspiration?" }] as TitleLine[],
  description:
    "Let’s make it personal. Bring your ideas and we’ll help imagine a beautiful setting for your celebration.",
  cta: "Plan your celebration",
}

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
}
