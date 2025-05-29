
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Componente About - Seção "Sobre mim"
 * Apresenta informações detalhadas sobre experiência e objetivos
 */
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <section id="sobre" className="py-20 relative overflow-hidden">
      {/* Background com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
              Sobre mim
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Conheça minha jornada e paixão pela tecnologia</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-effect rounded-2xl p-8 md:p-12 space-y-6"
          >
            {/* Parágrafo 1 - Apresentação acadêmica */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-300 leading-relaxed text-lg"
            >
              Sou <span className="text-neon-purple font-semibold">Matheus Vinicius</span>, tenho{' '}
              <span className="text-neon-blue font-semibold">22 anos</span>, atualmente estou cursando{' '}
              <span className="text-neon-cyan font-semibold">Análise e Desenvolvimento de Sistemas</span>{' '}
              na Universidade Católica de Brasília (3º semestre). Sou um apaixonado por tecnologia, 
              estudo porque gosto e tenho facilidade em aprender coisas novas.
            </motion.p>

            {/* Parágrafo 2 - Experiência técnica */}
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-gray-300 leading-relaxed text-lg"
            >
              Me considero <span className="text-neon-purple font-semibold">Desenvolvedor</span> pelas minhas 
              experiências e serviços. Atualmente estudo muito{' '}
              <span className="text-neon-blue font-semibold">JavaScript, TypeScript, NodeJs, MySQL, Supabase, MongoDB, Metodos Ageis </span>sempre gostei mais do beck-end e estou voltando meu estudo para esse foco, e conseguir me efetivar na área.
            </motion.p>

            {/* Parágrafo 3 - Marketing Digital */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-gray-300 leading-relaxed text-lg"
            >
              Além disso, possuo habilidades voltadas para{' '}
              <span className="text-neon-cyan font-semibold">Marketing Digital</span>, como{' '}
              <span className="text-neon-purple font-semibold"> CRM, automações de pré-atendimento, 
              fluxos de automação</span> para empresas físicas e digitais, <span>ão de leads, tráfego pago e orgânico, organização de estruturas e estratégias de vendas e lançamentos.</span>
            </motion.p>

            {/* Parágrafo 4 - Objetivo profissional */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="mt-8 p-6 rounded-xl bg-gradient-to-r from-neon-purple/10 to-neon-blue/10 border border-neon-purple/20"
            >
<p className="text-gray-300 leading-relaxed text-lg">
  Procuro uma oportunidade como{' '}
  <span className="text-neon-blue font-semibold">
    Desenvolvedor ou Analista de Sistemas
  </span>
  , seja estágio ou vaga júnior, com total comprometimento em contribuir para sua empresa e seguir desenvolvendo minha carreira.
</p>

            </motion.div>
          </motion.div>

          {/* Cards com estatísticas */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            {/* Card 1 - Idade */}
            <div className="glass-effect rounded-xl p-6 text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-neon-purple mb-2">22</div>
              <div className="text-gray-400">Anos de idade</div>
            </div>

            {/* Card 2 - Semestre */}
            <div className="glass-effect rounded-xl p-6 text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-neon-blue mb-2">3º</div>
              <div className="text-gray-400">Semestre ADS</div>
            </div>

            {/* Card 3 - Experiência */}
            <div className="glass-effect rounded-xl p-6 text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-neon-cyan mb-2">Full</div>
              <div className="text-gray-400">Stack Developer</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
