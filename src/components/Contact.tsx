
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

/**
 * Componente Contact - Seção de contato
 * Inclui botão WhatsApp com loading animado e ícones de redes sociais
 */
const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const [isLoading, setIsLoading] = useState(false);

  // Função para lidar com o clique no WhatsApp
  const handleWhatsAppClick = () => {
    setIsLoading(true);
    
    // Simula loading por 4 segundos
    setTimeout(() => {
      // Substitua pelos dígitos do seu número real
      window.open('https://wa.me/5561981576975', '_blank');
      setIsLoading(false);
    }, 4000);
  };

  // Links das redes sociais
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://www.linkedin.com/in/matheusvspereira/',
      color: 'from-blue-400 to-blue-600'
    },
    {
      name: 'GitHub',
      icon: '🐙',
      url: 'https://github.com/matheusvsp',
      color: 'from-gray-400 to-gray-600'
    },
    {
      name: 'WhatsApp',
      icon: '💬',
      url: '#',
      color: 'from-green-400 to-green-600',
      action: handleWhatsAppClick
    }
  ];

  return (
    <section id="contato" className="py-20 relative overflow-hidden">
      {/* Background com efeito de ondas */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_70%)]" />
        <svg className="absolute bottom-0 left-0 w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity="0.25"
            fill="url(#gradient1)"
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Título da seção */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
              Vamos Conversar?
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Pronto para transformar suas ideias em realidade? Entre em contato comigo!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Botão principal do WhatsApp */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            {!isLoading ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWhatsAppClick}
                className="group relative inline-flex items-center px-12 py-6 bg-gradient-to-r from-green-500 to-green-600 rounded-full text-white font-bold text-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(34,197,94,0.5)] overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <span className="text-3xl mr-4"></span>
                  Fale Comigo no WhatsApp
                </span>
                
                {/* Efeito de ondas no hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Partículas animadas */}
                <motion.div
                  className="absolute top-2 right-4 w-2 h-2 bg-white rounded-full"
                  animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                />
                <motion.div
                  className="absolute bottom-3 left-6 w-1 h-1 bg-white rounded-full"
                  animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
              </motion.button>
            ) : (
              /* Tela de loading animada */
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="glass-effect rounded-2xl p-12 max-w-md mx-auto"
              >
                {/* Spinner animado */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-16 h-16 border-4 border-neon-purple/30 border-t-neon-purple rounded-full mx-auto mb-6"
                />
                
                {/* Texto de loading */}
                <motion.p
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-white text-lg font-semibold mb-2"
                >
                  Abrindo WhatsApp...
                </motion.p>
                <p className="text-gray-400">Aguarde um momento 🔄</p>

                {/* Barra de progresso */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 4 }}
                  className="w-full h-2 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full mt-6"
                />
              </motion.div>
            )}
          </motion.div>

          {/* Ícones das redes sociais */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center space-x-8"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target={social.url !== '#' ? '_blank' : undefined}
                rel={social.url !== '#' ? 'noopener noreferrer' : undefined}
                onClick={social.action}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.2, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.9 }}
                className="group relative"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${social.color} flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-white/25`}>
                  <span className="text-2xl filter drop-shadow-sm">
                    {social.icon}
                  </span>
                </div>
                
                {/* Tooltip */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded pointer-events-none"
                >
                  {social.name}
                </motion.div>

                {/* Efeito de onda no hover */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1.5, opacity: 0.3 }}
                  className={`absolute inset-0 rounded-full bg-gradient-to-r ${social.color}`}
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Informações adicionais */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16"
          >
            <div className="glass-effect rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Pronto para o próximo passo?
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Estou sempre aberto a novas oportunidades e projetos interessantes. 
                Vamos discutir como posso contribuir para o sucesso do seu negócio!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
