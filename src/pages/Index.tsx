
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

/**
 * Página principal - Landing page única
 * Combina todas as seções em uma experiência fluida
 */
const Index = () => {
  return (
    <main className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Efeito de partículas de fundo global */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(6,182,212,0.05),transparent_50%)]" />
      </div>

      {/* Seções da página */}
      <div className="relative z-10">
        {/* Seção Hero - Apresentação principal */}
        <Hero />
        
        {/* Seção About - Sobre mim */}
        <About />
        
        {/* Seção Skills - Habilidades técnicas */}
        <Skills />
        
        {/* Seção Services - Serviços oferecidos */}
        <Services />
        
        {/* Seção Contact - Contato */}
        <Contact />
        
        {/* Rodapé */}
        <Footer />
      </div>
    </main>
  );
};

export default Index;
