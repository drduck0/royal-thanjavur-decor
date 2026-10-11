import { createFileRoute, Link } from '@tanstack/react-router';
import { useState, type FormEvent } from 'react';
import { ArrowUpRight, ArrowRight, Crown, MapPin, Flower2, Sparkles, Heart, PartyPopper, Check, Menu, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import stagePhoto from '@/assets/royal-wedding-stage.jpg';
import receptionPhoto from '@/assets/reception-decor.jpg';
import traditionalPhoto from '@/assets/traditional-decor.jpg';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Royal Decor Thanjavur | Stage & Function Decorations' },
    { name: 'description', content: 'Make your celebration beautiful with Royal Decor Thanjavur. Discover elegant wedding stages, reception decorations and traditional function decor.' },
    { property: 'og:title', content: 'Royal Decor Thanjavur | Made for your special moments' },
    { property: 'og:description', content: 'Thoughtfully designed stage and function decorations for beautiful celebrations in Thanjavur.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Index,
});

const services = [
  { title: 'Wedding stage decor', image: stagePhoto, description: 'Statement stages, beautiful blooms and thoughtful details for the beginning of your forever.', type: 'Wedding' },
  { title: 'Reception decor', image: receptionPhoto, description: 'Elegant floral backdrops and picture-perfect settings to celebrate your love in style.', type: 'Reception' },
  { title: 'Traditional & function decor', image: traditionalPhoto, description: 'From meaningful family occasions to joyful celebrations, decor that feels uniquely yours.', type: 'Family function' },
];

function Brand() {
  return <a href="#home" className="brand" aria-label="Royal Decor Thanjavur home"><Crown className="brand-icon" /><span><span className="brand-title">Royal Decor</span><span className="brand-location">THANJAVUR</span></span></a>;
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [eventType, setEventType] = useState('Wedding');
  const [brief, setBrief] = useState('');
  const [previewImage, setPreviewImage] = useState<(typeof services)[number] | null>(null);
  function openEnquiry(type = 'Wedding') { setEventType(type); setBrief(''); setEnquiryOpen(true); }
  function prepareBrief(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setBrief(`ROYAL DECOR THANJAVUR — EVENT ENQUIRY\n\nName: ${data.get('name')}\nPhone: ${data.get('phone')}\nOccasion: ${data.get('occasion')}\nEvent date: ${data.get('date') || 'To be decided'}\nVenue: ${data.get('venue') || 'To be decided'}\n\nYour vision:\n${data.get('message') || 'I would like to discuss decoration ideas.'}`);
  }
  function downloadBrief() {
    const url = URL.createObjectURL(new Blob([brief], { type: 'text/plain;charset=utf-8' }));
    const link = document.createElement('a'); link.href = url; link.download = 'royal-decor-event-enquiry.txt'; link.click(); URL.revokeObjectURL(url);
  }
  return <>
    <header id="home" className="site-header page-width">
      <Brand />
      <nav className="desktop-nav" aria-label="Main navigation"><a href="#home">Home</a><a href="#services">Our services</a><Link to="/gallery">Gallery</Link><a href="#about">About us</a></nav>
      <Button variant="royal" className="hidden sm:inline-flex h-11 px-5 text-xs" onClick={() => openEnquiry()}>Let’s plan your event <ArrowUpRight /></Button>
      <Button variant="ghost" size="icon" className="hidden max-sm:inline-flex" aria-label="Open navigation" onClick={() => setMenuOpen(true)}><Menu /></Button>
    </header>
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <img src={stagePhoto} className="hero-photo" alt="Grand floral wedding stage with gold arches, jasmine flowers and an ivory sofa" width={1920} height={1088} fetchPriority="high" />
        <div className="hero-content page-width intro-animate">
          <p className="eyebrow">Beautiful beginnings. Unforgettable celebrations.</p>
          <h1 id="hero-title">Royal Decor<br />Thanjavur<br /><em>A touch of magic.</em></h1>
          <p className="hero-description">Your moments deserve a beautiful setting. Thoughtfully crafted stage and function decorations, made with love in Thanjavur.</p>
          <div className="hero-actions"><Button variant="gold" className="h-12 px-6 text-xs" onClick={() => openEnquiry()}>Plan your celebration <ArrowUpRight /></Button><Button variant="heroOutline" asChild className="h-12 px-6 text-xs"><Link to="/gallery">Explore our decor <ArrowUpRight /></Link></Button></div>
        </div>
        <div className="hero-caption"><MapPin size={13} /> ROOTED IN THANJAVUR. MADE FOR YOUR MOMENTS.</div>
      </section>
      <div className="occasion-strip"><div className="occasions page-width"><span><Flower2 /> Wedding stages</span><Sparkles size={11} className="text-gold hidden sm:block" /><span><Heart /> Reception decorations</span><Sparkles size={11} className="text-gold hidden sm:block" /><span><PartyPopper /> Family functions</span><Sparkles size={11} className="text-gold hidden sm:block" /><span><Flower2 /> Traditional celebrations</span></div></div>
      <section id="services" className="section page-width">
        <div className="section-heading"><div><p className="eyebrow text-primary">OUR SPECIALITIES</p><h2>Every occasion.<br /><em>A beautiful expression.</em></h2></div><p>From an intimate gathering to your grandest day, we bring your vision to life, one thoughtful detail at a time.</p></div>
        <div id="gallery" className="service-grid">{services.map((service, index) => <article className="service" key={service.title}>
          <div className="service-image"><img src={service.image} alt={service.title + ' design inspiration'} width={1024} height={1024} loading="lazy" /><span className="image-index">0{index + 1}</span></div>
          <div className="service-title"><h3>{service.title}</h3><Button variant="ghost" size="icon" aria-label={`View ${service.title}`} title={`View ${service.title}`} onClick={() => setPreviewImage(service)}><ArrowUpRight /></Button></div><p>{service.description}</p>
        </article>)}</div>
        <div className="mt-7 flex items-center justify-between gap-4"><p className="text-[10px] text-muted-foreground">Decoration inspiration · Illustrative images</p><Button variant="outline" asChild><Link to="/gallery">Visit the gallery <ArrowUpRight /></Link></Button></div>
      </section>
      <section id="about" className="story section"><div className="story-inner page-width"><img src={traditionalPhoto} className="story-photo" alt="Traditional floral mandap with marigolds, banana leaves and brass lamps" width={1024} height={1024} loading="lazy" /><div><p className="eyebrow text-primary">THE ROYAL TOUCH</p><h2>Rooted in tradition.<br /><em>Inspired by you.</em></h2><p>Some moments stay with us forever. At Royal Decor Thanjavur, we believe the setting should be just as memorable.</p><p>We bring together the warmth of our traditions and the elegance of contemporary design to create decorations that reflect your story.</p><div className="story-values"><span><Check /> Personalised designs</span><span><Check /> Thoughtful details</span><span><Check /> Traditional elegance</span><span><Check /> Beautiful floral settings</span></div><Button variant="outline" className="h-11 text-xs" onClick={() => openEnquiry()}>Tell us your vision <ArrowUpRight /></Button></div></div></section>
      <section id="contact" className="contact"><div className="page-width"><p className="eyebrow">LET’S CREATE SOMETHING BEAUTIFUL</p><h2>Your next beautiful memory<br /><em>starts here.</em></h2><p>A date, an occasion, a little inspiration. Let’s give your celebration the Royal Decor touch.</p><Button variant="gold" className="h-12 px-7 text-xs" onClick={() => openEnquiry()}>Let’s plan your event <ArrowUpRight /></Button></div></section>
    </main>
    <footer className="footer page-width"><Brand /><p>© {new Date().getFullYear()} Royal Decor Thanjavur. All rights reserved.</p><div className="footer-links"><a href="#services">Services</a><a href="#about">About</a><a href="#contact">Get in touch <ArrowUpRight size={12} className="inline" /></a></div></footer>
    <Dialog open={menuOpen} onOpenChange={setMenuOpen}><DialogContent><DialogHeader><DialogTitle>Royal Decor Thanjavur</DialogTitle><DialogDescription>Your celebration, beautifully imagined.</DialogDescription></DialogHeader><nav className="mobile-links"><Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>{[['Home','home'],['Our services','services'],['About us','about'],['Get in touch','contact']].map(([label,id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav></DialogContent></Dialog>
    <Dialog open={enquiryOpen} onOpenChange={setEnquiryOpen}><DialogContent className="max-h-[90dvh] overflow-y-auto max-w-[calc(100%-32px)] sm:max-w-lg"><DialogHeader><DialogTitle className="font-display text-3xl">Your celebration, your vision.</DialogTitle><DialogDescription>Prepare your event brief. Online enquiries aren’t connected yet; download it to share with Royal Decor.</DialogDescription></DialogHeader>{brief ? <><div className="enquiry-preview">{brief}</div><Button variant="royal" onClick={downloadBrief}><Download /> Download event brief</Button><Button variant="ghost" onClick={() => setBrief('')}>Edit details</Button></> : <form className="enquiry-form" onSubmit={prepareBrief}><div className="grid grid-cols-2 gap-4"><label className="form-field">Your name<input name="name" required autoComplete="name" placeholder="Name" /></label><label className="form-field">Phone number<input name="phone" type="tel" required autoComplete="tel" placeholder="Phone number" /></label></div><div className="grid grid-cols-2 gap-4"><label className="form-field">Occasion<select name="occasion" value={eventType} onChange={e => setEventType(e.target.value)}><option>Wedding</option><option>Reception</option><option>Family function</option><option>Other celebration</option></select></label><label className="form-field">Event date<input name="date" type="date" /></label></div><label className="form-field">Venue / location<input name="venue" placeholder="Where are you celebrating?" /></label><label className="form-field">What do you have in mind?<textarea name="message" rows={3} placeholder="Colours, flowers, themes… tell us your ideas." /></label><Button variant="royal" type="submit" className="h-11">Prepare my event brief <ArrowRight /></Button></form>}</DialogContent></Dialog>
    <Dialog open={Boolean(previewImage)} onOpenChange={open => { if (!open) setPreviewImage(null); }}><DialogContent className="max-w-[calc(100%-32px)] sm:max-w-2xl max-h-[90dvh] overflow-y-auto"><DialogHeader><DialogTitle className="font-display text-3xl">{previewImage?.title}</DialogTitle><DialogDescription>Decoration inspiration for your celebration. Illustrative image.</DialogDescription></DialogHeader>{previewImage && <><img src={previewImage.image} alt={previewImage.title} width={1024} height={1024} className="w-full max-h-[55dvh] object-cover" /><Button variant="royal" onClick={() => { const type = previewImage.type; setPreviewImage(null); openEnquiry(type); }}>Plan a celebration like this <ArrowUpRight /></Button></>}</DialogContent></Dialog>
  </>;
}
