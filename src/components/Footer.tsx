import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t-2 border-ink mt-24">
      <div className="container py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <Link to="/" className="font-sans font-extrabold text-2xl tracking-tighter mb-4 block">FOUNDRY GOODS</Link>
          <p className="font-serif text-lg italic max-w-sm">
            Curating essential artifacts for the modern home. Foundry Goods bridges the gap between raw industrial utility and refined artisan craft.
          </p>
        </div>
        
        <div>
          <h4 className="font-sans font-extrabold text-[0.7rem] uppercase tracking-[0.12em] mb-4">Site Map</h4>
          <nav className="flex flex-col gap-2 font-serif text-lg">
            <Link to="/" className="hover:text-accent transition">Shop All</Link>
            <Link to="/about" className="hover:text-accent transition">Our Story</Link>
            <Link to="/contact" className="hover:text-accent transition">Contact</Link>
          </nav>
        </div>

        <div>
          <h4 className="font-sans font-extrabold text-[0.7rem] uppercase tracking-[0.12em] mb-4">Social</h4>
          <nav className="flex flex-col gap-2 font-serif text-lg">
            <a href="#" className="hover:text-accent transition">Instagram</a>
            <a href="#" className="hover:text-accent transition">Pinterest</a>
            <a href="#" className="hover:text-accent transition">Twitter</a>
          </nav>
        </div>
      </div>
      
      <div className="container py-8 border-t border-ink/20 flex justify-between items-center">
        <div className="font-sans text-[0.7rem] uppercase tracking-[0.12em] opacity-60">© 2024 FOUNDRY GOODS.</div>
        <div className="font-sans text-[0.7rem] uppercase tracking-[0.12em] text-accent font-extrabold">SYSTEM OPERATIONAL</div>
      </div>
    </footer>
  );
};

export default Footer;
