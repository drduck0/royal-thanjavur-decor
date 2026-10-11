import { createFileRoute, Link } from '@tanstack/react-router';
import { useState } from 'react';
import { Crown, Menu, ArrowUpRight, ArrowLeft, ArrowRight, Expand } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import stagePhoto from '@/assets/royal-wedding-stage.jpg';
import receptionPhoto from '@/assets/reception-decor.jpg';
import traditionalPhoto from '@/assets/traditional-decor.jpg';

export const Route = createFileRoute('/gallery')({
  head: () => ({ meta: [
    { title: 'Decoration Gallery | Royal Decor Thanjavur' },
    { name: 'description', content: 'Explore wedding stage, reception and traditional function decoration inspiration from Royal Decor Thanjavur.' },
    { property: 'og:title', content: 'Decoration Gallery | Royal Decor Thanjavur' },
    { property: 'og:description', content: 'Discover floral stages, elegant reception settings and traditional celebration decor.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Gallery,
});

const designs = [
  { title: 'The royal floral stage', category: 'Wedding stages', image: stagePhoto, alt: 'Gold arches with jasmine and roses framing an ivory wedding sofa' },
  { title: 'A celebration in bloom', category: 'Receptions', image: receptionPhoto, alt: 'Pastel pink floral arches and an elegant reception stage' },
  { title: 'Tradition, beautifully adorned', category: 'Traditional functions', image: traditionalPhoto, alt: 'Traditional mandap with marigolds, banana leaves and brass lamps' },
];
const categories = ['All decorations', 'Wedding stages', 'Receptions', 'Traditional functions'];

function Gallery() {
  const [category, setCategory] = useState(categories[0]);
  const [selected, setSelected] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const visible = designs.filter(design => category === categories[0] || design.category === category);
  const current = selected === null ? undefined : visible[selected];
  const brand = <Link to="/" className="brand" aria-label="Royal Decor Thanjavur home"><Crown className="brand-icon" /><span><span className="brand-title">Royal Decor</span><span className="brand-location">THANJAVUR</span></span></Link>;
  const links = <><Link to="/">Home</Link><Link to="/" hash="services">Our services</Link><Link to="/gallery" aria-current="page" className="font-semibold">Gallery</Link><Link to="/" hash="about">About us</Link></>;
  return <>
    <header className="site-header page-width">{brand}<nav className="desktop-nav" aria-label="Main navigation">{links}</nav><Button variant="royal" asChild className="hidden sm:inline-flex h-11 px-5 text-xs"><Link to="/" hash="contact">Let’s plan your event <ArrowUpRight /></Link></Button><Button variant="ghost" size="icon" className="hidden max-sm:inline-flex" aria-label="Open navigation" onClick={() => setMenuOpen(true)}><Menu /></Button></header>
    <main>
      <section className="gallery-intro"><div className="page-width intro-animate"><p className="eyebrow text-gold">THE ROYAL DECOR GALLERY</p><h1>Beautiful settings.<br /><em className="text-gold">Endless inspiration.</em></h1><p>Discover a world of flowers, colour and celebration. Find the little details that speak to your big day.</p></div></section>
      <section className="page-width" aria-label="Decoration gallery"><div className="gallery-toolbar" role="group" aria-label="Filter decorations">{categories.map(item => <Button key={item} variant={category === item ? 'royal' : 'outline'} size="sm" aria-pressed={category === item} onClick={() => { setCategory(item); setSelected(null); }}>{item}</Button>)}</div>
        <div className="gallery-grid">{visible.map((design, index) => <article className="gallery-item" key={design.title}><Button variant="ghost" className="gallery-image-button h-auto w-full p-0" aria-label={`View ${design.title}`} onClick={() => setSelected(index)}><img src={design.image} alt={design.alt} width={1024} height={1024} loading="lazy" /></Button><div className="flex items-start justify-between gap-3"><div><h2>{design.title}</h2><p>{design.category}</p></div><Button variant="ghost" size="icon" className="mt-4 shrink-0" aria-label={`Enlarge ${design.title}`} title="Enlarge image" onClick={() => setSelected(index)}><Expand /></Button></div></article>)}</div><p className="pb-10 text-xs text-muted-foreground">Decoration inspiration · Illustrative images</p>
      </section>
      <section className="contact"><div className="page-width"><p className="eyebrow">YOUR VISION. OUR ROYAL TOUCH.</p><h2>Found your inspiration?</h2><p>Let’s make it personal. Bring your ideas and we’ll help imagine a beautiful setting for your celebration.</p><Button variant="gold" asChild className="h-12 px-7 text-xs"><Link to="/" hash="contact">Plan your celebration <ArrowUpRight /></Link></Button></div></section>
    </main>
    <footer className="footer page-width">{brand}<p>© {new Date().getFullYear()} Royal Decor Thanjavur. All rights reserved.</p><div className="footer-links"><Link to="/">Home</Link><Link to="/" hash="contact">Get in touch <ArrowUpRight size={12} className="inline" /></Link></div></footer>
    <Dialog open={menuOpen} onOpenChange={setMenuOpen}><DialogContent><DialogHeader><DialogTitle>Royal Decor Thanjavur</DialogTitle><DialogDescription>Your celebration, beautifully imagined.</DialogDescription></DialogHeader><nav className="mobile-links" onClick={() => setMenuOpen(false)}>{links}</nav></DialogContent></Dialog>
    <Dialog open={current !== undefined} onOpenChange={open => { if (!open) setSelected(null); }}><DialogContent className="max-w-[calc(100%-32px)] sm:max-w-3xl max-h-[90dvh] overflow-y-auto"><DialogHeader><DialogTitle className="font-display text-2xl">{current?.title}</DialogTitle><DialogDescription>{current?.category} · Illustrative decoration inspiration</DialogDescription></DialogHeader>{current && <img src={current.image} alt={current.alt} width={1024} height={1024} className="gallery-lightbox-image" />}<div className="gallery-lightbox-controls"><Button variant="outline" size="icon" title="Previous image" aria-label="Previous image" disabled={visible.length < 2} onClick={() => setSelected(value => value === null ? 0 : (value + visible.length - 1) % visible.length)}><ArrowLeft /></Button><span className="text-xs text-muted-foreground">{selected === null ? 0 : selected + 1} / {visible.length}</span><Button variant="outline" size="icon" title="Next image" aria-label="Next image" disabled={visible.length < 2} onClick={() => setSelected(value => value === null ? 0 : (value + 1) % visible.length)}><ArrowRight /></Button></div></DialogContent></Dialog>
  </>;
}