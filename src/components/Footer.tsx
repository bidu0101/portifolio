
import { motion } from 'framer-motion';

/**
 * Componente Footer - Rodapé do site
 * Inclui informações de copyright e design responsivo
 */
const Footer = () => {
  return (
    <footer className="relative py-12 overflow-hidden">
      {/* Background com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-800 to-transparent">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(139,92,246,0.1),transparent_70%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Logo/Nome */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-3xl font-bold">
              <span className="bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
                Matheus
              </span>
            </h3>
            <p className="text-gray-400 mt-2">Desenvolvedor Full Stack</p>
          </motion.div>

          {/* Divider animado */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent max-w-md mx-auto mb-8"
          />

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg"
          >
            Desenvolvido por{' '}
            <span className="text-neon-cyan font-semibold">Matheus</span>{' '}
            © 2025
          </motion.p>

          {/* Elementos decorativos */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-4 mt-6"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-2 h-2 bg-neon-purple rounded-full"
            />
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              className="w-2 h-2 bg-neon-blue rounded-full"
            />
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              className="w-2 h-2 bg-neon-cyan rounded-full"
            />
          </motion.div>

          {/* Scroll to top button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-8 w-12 h-12 rounded-full bg-gradient-to-r from-neon-purple to-neon-blue flex items-center justify-center text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all duration-300 group"
          >
            <motion.span
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-xl"
            >
              ↑
            </motion.span>
          </motion.button>
        </motion.div>
      </div>

      {/* Efeito de partículas flutuantes */}
      <motion.div
        animate={{ 
          y: [0, -10, 0],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-4 left-1/4 w-1 h-1 bg-neon-purple rounded-full"
      />
      <motion.div
        animate={{ 
          y: [0, -15, 0],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-8 right-1/4 w-1 h-1 bg-neon-cyan rounded-full"
      />
      <motion.div
        animate={{ 
          y: [0, -8, 0],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-6 left-3/4 w-1 h-1 bg-neon-blue rounded-full"
      />
    </footer>
  );
};

export default Footer;
