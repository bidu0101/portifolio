
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Componente Services - Seção de serviços oferecidos
 * Cards animados com hover effects para cada serviço
 */
const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  // Array de serviços oferecidos
  const services = [
    {
      title: 'Desenvolvimento Web',
      description: 'Criação de websites e aplicações web modernas, responsivas e otimizadas para performance.',
      features: ['React & TypeScript', 'Design Responsivo', 'Otimização SEO', 'Performance'],
      gradient: 'from-neon-purple to-neon-blue'
    },
    {
      title: 'Integrações API e CRM',
      description: 'Integração de sistemas, APIs e CRMs para automatizar processos e melhorar a eficiência.',
      features: ['APIs RESTful', 'Integração CRM', 'Webhook Setup', 'Data Sync'],
      gradient: 'from-neon-blue to-neon-cyan'
    },
    {
      title: 'Automações Empresariais',
      description: 'Desenvolvimento de fluxos de automação para empresas físicas e digitais.',
      features: ['Fluxos Automatizados', 'Pré-atendimento', 'Chatbots', 'Workflows'],
      gradient: 'from-neon-cyan to-neon-green'
    },
    {
      title: 'Estratégias de Vendas e Marketing Digital',
      description: 'Planejamento e execução de estratégias de marketing digital e vendas online.',
      features: ['Tráfego Pago', 'Lead Generation', 'Funis de Vendas', 'Analytics'],
      gradient: 'from-neon-green to-neon-purple'
    }
  ];

  return (
    <section id="servicos" className="py-20 relative overflow-hidden">
      {/* Background com padrão geométrico */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/10 to-purple-900/10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(139,92,246,0.05)_25%,transparent_25%,transparent_75%,rgba(139,92,246,0.05)_75%,rgba(139,92,246,0.05)),linear-gradient(45deg,rgba(139,92,246,0.05)_25%,transparent_25%,transparent_75%,rgba(139,92,246,0.05)_75%,rgba(139,92,246,0.05))] bg-[length:40px_40px] bg-[position:0_0,20px_20px]" />
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
              Experiência
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Já atuei em diversos serviços, desde criação de landing pages até campanhas de tráfego pago e automações para captar e atender novos leads.
          </p>
        </motion.div>

        {/* Grid de serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Card do serviço */}
              <div className="glass-effect rounded-2xl p-8 h-full transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-neon-purple/20 cursor-pointer relative overflow-hidden">
                
                {/* Efeito de gradiente animado no hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Conteúdo do card */}
                <div className="relative z-10">
                  {/* Ícone com animação */}
                  <motion.div
                    whileHover={{ 
                      scale: 1.2,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.5 }
                    }}
                    className="text-5xl mb-6 inline-block filter drop-shadow-lg"
                  >
                    {service.icon}
                  </motion.div>

                  {/* Título */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-cyan transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Descrição */}
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: index * 0.2 + featureIndex * 0.1 + 0.5 
                        }}
                        className="flex items-center space-x-3"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`} />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Partículas decorativas */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute top-4 right-4 w-3 h-3 bg-neon-cyan rounded-full animate-pulse"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute bottom-4 left-4 w-2 h-2 bg-neon-purple rounded-full animate-pulse"
                  style={{ animationDelay: '0.5s' }}
                />

                {/* Borda animada no hover */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-neon-purple/30 transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        
      </div>
    </section>
  );
};

export default Services;
