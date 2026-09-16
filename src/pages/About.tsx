import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';

const About = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-bg text-ink container">
        <Navbar />
        <main className="py-20">
          <h1 className="font-serif text-6xl mb-8">Our Story</h1>
          <p className="font-sans text-lg max-w-2xl">
            Foundry Goods was born from a passion for timeless craftsmanship. We curate essential home goods that blend raw utility with refined artistry.
          </p>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default About;
