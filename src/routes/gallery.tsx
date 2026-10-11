import { createFileRoute, Link } from '@tanstack/react-router';
import { useState } from 'react';
import { Crown, Menu, ArrowUpRight, ArrowLeft, ArrowRight, Expand } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import {
  contactSection,
  galleryContact,
  gallerySection,
  navigation,
  site,
  type NavItem,
  type TitleLine,
} from '@/content/site';

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
  );
}

function NavLink({ item, currentPath }: { item: NavItem; currentPath: string }) {
  if (item.to) {
    const active = item.to === currentPath;
    return <Link to={item.to} aria-current={active ? 'page' : undefined} className={active ? 'font-semibold' : undefined}>{item.label}</Link>;
  }
  return <Link to="/" hash={item.hash}>{item.label}</Link>;
}

function Gallery() {
  const categories = [gallerySection.allLabel, ...gallerySection.categories];
  const [category, setCategory] = useState(categories[0]);
  const [selected, setSelected] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const visible = gallerySection.designs.filter(design => category === categories[0] || design.category === category);
  const current = selected === null ? undefined : visible[selected];
  const brand = <Link to="/" className="brand" aria-label={`${site.businessName} home`}><Crown className="brand-icon" /><span><span className="brand-title">{site.brandName}</span><span className="brand-location">{site.location}</span></span></Link>;
  const links = navigation.map(item => <NavLink key={item.label} item={item} currentPath="/gallery" />);
  return <>
    <header className="site-header page-width">{brand}<nav className="desktop-nav" aria-label="Main navigation">{links}</nav><Button variant="royal" asChild className="hidden sm:inline-flex h-11 px-5 text-xs"><Link to="/" hash="contact">{contactSection.cta} <ArrowUpRight /></Link></Button><Button variant="ghost" size="icon" className="hidden max-sm:inline-flex" aria-label="Open navigation" onClick={() => setMenuOpen(true)}><Menu /></Button></header>
    <main>
      <section className="gallery-intro"><div className="page-width intro-animate"><p className="eyebrow text-gold">{gallerySection.eyebrow}</p><h1><HeadlineLines lines={gallerySection.title} /></h1><p>{gallerySection.description}</p></div></section>
      <section className="page-width" aria-label="Decoration gallery"><div className="gallery-toolbar" role="group" aria-label="Filter decorations">{categories.map(item => <Button key={item} variant={category === item ? 'royal' : 'outline'} size="sm" aria-pressed={category === item} onClick={() => { setCategory(item); setSelected(null); }}>{item}</Button>)}</div>
        <div className="gallery-grid">{visible.map((design, index) => <article className="gallery-item" key={design.title}><Button variant="ghost" className="gallery-image-button h-auto w-full p-0" aria-label={`View ${design.title}`} onClick={() => setSelected(index)}><img src={design.image} alt={design.alt} width={1024} height={1024} loading="lazy" /></Button><div className="flex items-start justify-between gap-3"><div><h2>{design.title}</h2><p>{design.category}</p></div><Button variant="ghost" size="icon" className="mt-4 shrink-0" aria-label={`Enlarge ${design.title}`} title="Enlarge image" onClick={() => setSelected(index)}><Expand /></Button></div></article>)}</div><p className="pb-10 text-xs text-muted-foreground">{gallerySection.footnote}</p>
      </section>
      <section className="contact"><div className="page-width"><p className="eyebrow">{galleryContact.eyebrow}</p><h2><HeadlineLines lines={galleryContact.title} /></h2><p>{galleryContact.description}</p><Button variant="gold" asChild className="h-12 px-7 text-xs"><Link to="/" hash="contact">{galleryContact.cta} <ArrowUpRight /></Link></Button></div></section>
    </main>
    <footer className="footer page-width">{brand}<p>© {new Date().getFullYear()} {site.businessName}. All rights reserved.</p><div className="footer-links"><Link to="/">Home</Link><Link to="/" hash="contact">Get in touch <ArrowUpRight size={12} className="inline" /></Link></div></footer>
    <Dialog open={menuOpen} onOpenChange={setMenuOpen}><DialogContent><DialogHeader><DialogTitle>{site.businessName}</DialogTitle><DialogDescription>{site.tagline}</DialogDescription></DialogHeader><nav className="mobile-links" onClick={() => setMenuOpen(false)}>{links}</nav></DialogContent></Dialog>
    <Dialog open={current !== undefined} onOpenChange={open => { if (!open) setSelected(null); }}><DialogContent className="max-w-[calc(100%-32px)] sm:max-w-3xl max-h-[90dvh] overflow-y-auto"><DialogHeader><DialogTitle className="font-display text-2xl">{current?.title}</DialogTitle><DialogDescription>{current?.category} · Illustrative decoration inspiration</DialogDescription></DialogHeader>{current && <img src={current.image} alt={current.alt} width={1024} height={1024} className="gallery-lightbox-image" />}<div className="gallery-lightbox-controls"><Button variant="outline" size="icon" title="Previous image" aria-label="Previous image" disabled={visible.length < 2} onClick={() => setSelected(value => value === null ? 0 : (value + visible.length - 1) % visible.length)}><ArrowLeft /></Button><span className="text-xs text-muted-foreground">{selected === null ? 0 : selected + 1} / {visible.length}</span><Button variant="outline" size="icon" title="Next image" aria-label="Next image" disabled={visible.length < 2} onClick={() => setSelected(value => value === null ? 0 : (value + 1) % visible.length)}><ArrowRight /></Button></div></DialogContent></Dialog>
  </>;
}

const contactCtaLabel = 'Let’s plan your event';
