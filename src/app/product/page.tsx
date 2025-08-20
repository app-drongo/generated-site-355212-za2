import PageHeaderProduct from '../../components/PageHeaderProduct';
import Features from '../../components/Features';
import Pricing from '../../components/Pricing';
import Cta from '../../components/Cta';

export default function ProductPage() {
  return (
    <main className="min-h-screen">
      <section id="page-header" className="scroll-mt-16">
        <PageHeaderProduct />
      </section>
      <section id="features" className="scroll-mt-16">
        <Features />
      </section>
      <section id="pricing" className="scroll-mt-16">
        <Pricing />
      </section>
      <section id="cta" className="scroll-mt-16">
        <Cta />
      </section>
    </main>
  );
}