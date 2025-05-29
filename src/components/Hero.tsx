
import { motion } from 'framer-motion';

/**
 * Componente Hero - Seção principal de apresentação
 * Contém foto, nome, idade e animações de entrada fluida
 */
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark-gradient">
      {/* Efeito de partículas de fundo */}
      <div className="absolute inset-0 bg-dark-gradient">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Foto com animação de entrada */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Container da foto com efeito glassmorphism */}
              <div className="absolute inset-0 glass-effect rounded-full animate-pulse-glow" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-neon-purple/30">
                <img
                  src="https://i.imgur.com/MRaGTl7.jpeg"
                  alt="Matheus - Desenvolvedor Full Stack"
                  className="w-full h-full object-cover"
                />
                {/* Overlay com gradiente */}
                <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple/20 to-neon-blue/20" />
              </div>
            </div>
          </motion.div>

          {/* Texto de apresentação */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-center lg:text-left"
          >
            {/* Nome com efeito de digitação */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-neon-purple via-neon-blue to-neon-cyan bg-clip-text text-transparent">
                Matheus
              </span>
            </motion.h1>

            {/* Idade */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 mb-6"
            >
              22 anos 📍 Brasília 
            </motion.p>

            {/* Título profissional */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mb-8"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-2">
                Desenvolvedor
              </h2>
              <p className="text-lg md:text-xl text-gray-400">
                Estudante de Análise e Desenvolvimento de Sistemas
              </p>
            </motion.div>

            {/* Call to action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <button
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-4 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]"
              >
                <span className="relative z-10">Vamos conversar!</span>
                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Indicador de scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-neon-purple/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-neon-purple rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
