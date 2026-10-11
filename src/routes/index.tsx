import { createFileRoute, Link } from "@tanstack/react-router"
import { useEffect, useRef, useState, type FormEvent } from "react"
import {
  ArrowUpRight,
  ArrowRight,
  Crown,
  MapPin,
  Check,
  Menu,
  Download,
} from "lucide-react"
import { AiFillInstagram } from "react-icons/ai"
import { MdEmail } from "react-icons/md"
import { FaPhone } from "react-icons/fa6"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import {
  aboutSection,
  contactSection,
  enquiry,
  footerSection,
  hero,
  navigation,
  servicesSection,
  site,
  storySection,
  type NavItem,
  type ServiceItem,
  type TitleLine,
} from "@/content/site"
import logo from "@/assets/logos.png"

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Royal Decor Thanjavur | Stage & Function Decorations" },
      {
        name: "description",
        content:
          "Make your celebration beautiful with Royal Decor Thanjavur. Discover elegant wedding stages, reception decorations and traditional function decor.",
      },
      {
        property: "og:title",
        content: "Royal Decor Thanjavur | Made for your special moments",
      },
      {
        property: "og:description",
        content:
          "Thoughtfully designed stage and function decorations for beautiful celebrations in Thanjavur.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
})

function HeadlineLines({ lines }: { lines: TitleLine[] }) {
  return (
    <>
      {lines.map((line, index) => (
        <span key={index}>
          {line.accent ? <em>{line.text}</em> : line.text}
          {index < lines.length - 1 ? <br /> : null}
        </span>
      ))}
    </>
  )
}

function Brand() {
  return (
    <a href="#home" className="brand" aria-label={`${site.businessName} home`}>
      <Crown className="brand-icon" />
      <span>
        <span className="brand-title">{site.brandName}</span>
        <span className="brand-location">{site.location}</span>
      </span>
    </a>
  )
}

function NavLink({
  item,
  onNavigate,
}: {
  item: NavItem
  onNavigate?: () => void
}) {
  if (item.to)
    return (
      <Link to={item.to} onClick={onNavigate}>
        {item.label}
      </Link>
    )
  return (
    <a href={`#${item.hash}`} onClick={onNavigate}>
      {item.label}
    </a>
  )
}

function AboutSection() {
  const ref = useRef<HTMLElement | null>(null)
  useEffect(() => {
    const element = ref.current
    if (!element) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          element.classList.add("about-in")
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])
  return (
    <section id="about" ref={ref} className="about-cards section page-width">
      <div className="section-heading">
        <div>
          <p className="eyebrow text-primary">{aboutSection.eyebrow}</p>
          <h2>
            <HeadlineLines lines={aboutSection.title} />
          </h2>
        </div>
        <p>{aboutSection.intro}</p>
      </div>
      <div className="about-grid">
        {aboutSection.cards.map((card, index) => {
          const Icon = card.icon
          return (
            <article
              className="about-card"
              key={card.title}
              style={{ animationDelay: `${index * 110}ms` }}
            >
              <Icon className="about-card-icon" />
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [enquiryOpen, setEnquiryOpen] = useState(false)
  const [eventType, setEventType] = useState(enquiry.defaultOccasion)
  const [brief, setBrief] = useState("")
  const [previewImage, setPreviewImage] = useState<ServiceItem | null>(null)
  function openEnquiry(type = enquiry.defaultOccasion) {
    setEventType(type)
    setBrief("")
    setEnquiryOpen(true)
  }
  function prepareBrief(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    setBrief(
      `${enquiry.briefHeading}\n\nName: ${data.get("name")}\nPhone: ${data.get("phone")}\nOccasion: ${data.get("occasion")}\nEvent date: ${data.get("date") || enquiry.fields.noDate}\nVenue: ${data.get("venue") || enquiry.fields.noDate}\n\nYour vision:\n${data.get("message") || enquiry.fallbackMessage}`,
    )
  }
  function downloadBrief() {
    const url = URL.createObjectURL(
      new Blob([brief], { type: "text/plain;charset=utf-8" }),
    )
    const link = document.createElement("a")
    link.href = url
    link.download = site.enquiryFileName
    link.click()
    URL.revokeObjectURL(url)
  }
  return (
    <>
      <header id="home" className="site-header-1">
        <div className="flex items-center gap-2">
          <MdEmail />
          <a href="mailto:royaldecorthanjavur.com">Email Us</a>
        </div>
        <span className="font-bold text-2xl font-sans">
          Royal Decor Thanjavur
        </span>
        <div className="flex items-center gap-2">
          <FaPhone />
          <a href="tel:+918754615441">+91 87546 15441</a>
          <AiFillInstagram />
        </div>
      </header>
      <header id="home" className="site-header page-width">
        <img
          className="logo"
          src={logo}
          alt="logo"
          width={82}
          height={89}
          loading="lazy"
        />
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <NavLink key={item.label} item={item} />
          ))}
        </nav>
        <Button
          variant="royal"
          className="hidden sm:inline-flex h-11 px-5 text-xs"
          onClick={() => openEnquiry()}
        >
          Let’s plan your event <ArrowUpRight />
        </Button>
      </header>
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <img
            src={hero.image.src}
            className="hero-photo"
            alt={hero.image.alt}
            width={1920}
            height={1088}
            fetchPriority="high"
          />
          <div className="hero-content page-width intro-animate">
            <p className="eyebrow">{hero.eyebrow}</p>
            <h1 id="hero-title">
              <HeadlineLines lines={hero.title} />
            </h1>
            <p className="hero-description">{hero.description}</p>
            <div className="hero-actions">
              <Button
                variant="gold"
                className="h-12 px-6 text-xs"
                onClick={() => openEnquiry()}
              >
                {hero.primaryCta} <ArrowUpRight />
              </Button>
              <Button
                variant="heroOutline"
                asChild
                className="h-12 px-6 text-xs"
              >
                <Link to="/gallery">
                  {hero.secondaryCta} <ArrowUpRight />
                </Link>
              </Button>
            </div>
          </div>
          <div className="hero-caption">
            <MapPin size={13} /> {hero.caption}
          </div>
        </section>
        <AboutSection />
        <section id="services" className="section page-width">
          <div className="section-heading">
            <div>
              <p className="eyebrow text-primary">{servicesSection.eyebrow}</p>
              <h2>
                <HeadlineLines lines={servicesSection.title} />
              </h2>
            </div>
            <p>{servicesSection.description}</p>
          </div>
          <div id="gallery" className="service-grid">
            {servicesSection.items.map((service, index) => (
              <article className="service" key={service.title}>
                <div className="service-image">
                  <img
                    src={service.image}
                    alt={service.title + " design inspiration"}
                    width={1024}
                    height={1024}
                    loading="lazy"
                  />
                  <span className="image-index">0{index + 1}</span>
                </div>
                <div className="service-title">
                  <h3>{service.title}</h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label={`View ${service.title}`}
                    title={`View ${service.title}`}
                    onClick={() => setPreviewImage(service)}
                  >
                    <ArrowUpRight />
                  </Button>
                </div>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-7 flex items-center justify-between gap-4">
            <p className="text-[10px] text-muted-foreground">
              {servicesSection.footnote}
            </p>
            <Button variant="outline" asChild>
              <Link to="/gallery">
                {servicesSection.galleryCta} <ArrowUpRight />
              </Link>
            </Button>
          </div>
        </section>
        <section id="story" className="story section">
          <div className="story-inner page-width">
            <img
              src={storySection.image.src}
              className="story-photo"
              alt={storySection.image.alt}
              width={1024}
              height={1024}
              loading="lazy"
            />
            <div>
              <p className="eyebrow text-primary">{storySection.eyebrow}</p>
              <h2>
                <HeadlineLines lines={storySection.title} />
              </h2>
              {storySection.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <div className="story-values">
                {storySection.values.map((value) => (
                  <span key={value}>
                    <Check /> {value}
                  </span>
                ))}
              </div>
              <Button
                variant="outline"
                className="h-11 text-xs"
                onClick={() => openEnquiry()}
              >
                {storySection.cta} <ArrowUpRight />
              </Button>
            </div>
          </div>
        </section>
        <section id="contact" className="contact">
          <div className="page-width">
            <p className="eyebrow">{contactSection.eyebrow}</p>
            <h2>
              <HeadlineLines lines={contactSection.title} />
            </h2>
            <p>{contactSection.description}</p>
            <Button
              variant="gold"
              className="h-12 px-7 text-xs"
              onClick={() => openEnquiry()}
            >
              {contactSection.cta} <ArrowUpRight />
            </Button>
          </div>
        </section>
      </main>
      <footer className="footer page-width">
        <Brand />
        <p>
          © {new Date().getFullYear()} {site.businessName}. All rights reserved.
        </p>
        <div className="footer-links">
          {footerSection.links.map((item) => (
            <NavLink key={item.label} item={item} />
          ))}
        </div>
      </footer>
      <Dialog open={menuOpen} onOpenChange={setMenuOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{site.businessName}</DialogTitle>
            <DialogDescription>{site.tagline}</DialogDescription>
          </DialogHeader>
          <nav className="mobile-links">
            {navigation.map((item) => (
              <NavLink
                key={item.label}
                item={item}
                onNavigate={() => setMenuOpen(false)}
              />
            ))}
          </nav>
        </DialogContent>
      </Dialog>
      <Dialog open={enquiryOpen} onOpenChange={setEnquiryOpen}>
        <DialogContent className="max-h-[90dvh] overflow-y-auto max-w-[calc(100%-32px)] sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-display text-3xl">
              {enquiry.dialogTitle}
            </DialogTitle>
            <DialogDescription>{enquiry.dialogDescription}</DialogDescription>
          </DialogHeader>
          {brief ? (
            <>
              <div className="enquiry-preview">{brief}</div>
              <Button variant="royal" onClick={downloadBrief}>
                <Download /> {enquiry.downloadButton}
              </Button>
              <Button variant="ghost" onClick={() => setBrief("")}>
                {enquiry.editButton}
              </Button>
            </>
          ) : (
            <form className="enquiry-form" onSubmit={prepareBrief}>
              <div className="grid grid-cols-2 gap-4">
                <label className="form-field">
                  {enquiry.fields.name}
                  <input
                    name="name"
                    required
                    autoComplete="name"
                    placeholder={enquiry.fields.namePlaceholder}
                  />
                </label>
                <label className="form-field">
                  {enquiry.fields.phone}
                  <input
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder={enquiry.fields.phonePlaceholder}
                  />
                </label>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <label className="form-field">
                  {enquiry.fields.occasion}
                  <select
                    name="occasion"
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                  >
                    {enquiry.occasions.map((occasion) => (
                      <option key={occasion}>{occasion}</option>
                    ))}
                  </select>
                </label>
                <label className="form-field">
                  {enquiry.fields.date}
                  <input name="date" type="date" />
                </label>
              </div>
              <label className="form-field">
                {enquiry.fields.venue}
                <input
                  name="venue"
                  placeholder={enquiry.fields.venuePlaceholder}
                />
              </label>
              <label className="form-field">
                {enquiry.fields.message}
                <textarea
                  name="message"
                  rows={3}
                  placeholder={enquiry.fields.messagePlaceholder}
                />
              </label>
              <Button variant="royal" type="submit" className="h-11">
                {enquiry.submitButton} <ArrowRight />
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
      <Dialog
        open={Boolean(previewImage)}
        onOpenChange={(open) => {
          if (!open) setPreviewImage(null)
        }}
      >
        <DialogContent className="max-w-[calc(100%-32px)] sm:max-w-2xl max-h-[90dvh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-display text-3xl">
              {previewImage?.title}
            </DialogTitle>
            <DialogDescription>
              {servicesSection.previewDescription}
            </DialogDescription>
          </DialogHeader>
          {previewImage && (
            <>
              <img
                src={previewImage.image}
                alt={previewImage.title}
                width={1024}
                height={1024}
                className="w-full max-h-[55dvh] object-cover"
              />
              <Button
                variant="royal"
                onClick={() => {
                  const type = previewImage.type
                  setPreviewImage(null)
                  openEnquiry(type)
                }}
              >
                {servicesSection.previewCta} <ArrowUpRight />
              </Button>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
