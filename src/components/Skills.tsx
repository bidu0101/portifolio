
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Componente Skills - Seção de habilidades técnicas
 * Exibe ícones e nomes das tecnologias com animações interativas
 */
const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  // Array de habilidades com cores personalizadas
  const skills = [
    { name: 'JavaScript', icon: '｡🇯‌🇸‌', color: 'from-yellow-400 to-yellow-600' },
    { name: 'TypeScript', icon: '🇹🇸', color: 'from-blue-400 to-blue-600' },
    { name: 'React', icon: '⚛️', color: 'from-cyan-400 to-blue-500' },
    { name: 'Bootstrap', icon: '🅱️', color: 'from-purple-400 to-purple-600' },
    { name: 'MySQL', icon: '🗄️', color: 'from-orange-400 to-red-500' },
    { name: 'Supabase', icon: '🚀', color: 'from-green-400 to-emerald-500' },
    { name: 'GitHub', icon: '🐙', color: 'from-gray-400 to-gray-600' },
    { name: 'APIs', icon: '🔌', color: 'from-indigo-400 to-purple-500' },
    { name: 'Automação', icon: '🤖', color: 'from-emerald-400 to-teal-500' },
    { name: 'MongoDB', icon: '🍃', color: 'from-violet-400 to-purple-500' }
  ];

  return (
    <section id="habilidades" className="py-20 relative overflow-hidden bg-gray-900">
      {/* Background animado */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(139,92,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.1),transparent_50%)]" />
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
              Habilidades
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Tecnologias que domino e utilizo em meus projetos
          </p>
        </motion.div>

        {/* Grid de habilidades */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.8 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.1, 
                rotateY: 15,
                z: 50
              }}
              className="group relative"
            >
              {/* Card da habilidade */}
              <div className="glass-effect rounded-xl p-6 text-center transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-neon-purple/20 cursor-pointer">
                {/* Ícone com animação */}
                <motion.div
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.5 }
                  }}
                  className="text-4xl mb-4 filter drop-shadow-lg"
                >
                  {skill.icon}
                </motion.div>

                {/* Nome da habilidade */}
                <h3 className="text-white font-semibold text-sm md:text-base group-hover:text-neon-cyan transition-colors duration-300">
                  {skill.name}
                </h3>

                {/* Barra de progresso animada */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: '100%' } : { width: 0 }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  className={`h-1 bg-gradient-to-r ${skill.color} rounded-full mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Efeito de brilho no hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-neon-purple/0 via-neon-purple/10 to-neon-blue/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Partículas flutuantes no hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute -top-2 -right-2 w-4 h-4 bg-neon-cyan rounded-full animate-ping opacity-0 group-hover:opacity-75"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute -bottom-2 -left-2 w-3 h-3 bg-neon-purple rounded-full animate-ping opacity-0 group-hover:opacity-75"
                style={{ animationDelay: '0.5s' }}
              />
            </motion.div>
          ))}
        </div>

        {/* Seção adicional - Áreas de atuação */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-white">
            Áreas de <span className="text-neon-cyan">Atuação</span>
          </h3>
          
          <div className="flex justify-center max-w-4xl mx-auto">
            {/* Desenvolvimento */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass-effect rounded-xl p-6 group"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4"></span>
                <h4 className="text-xl font-semibold text-neon-purple">Desenvolvimento</h4>
              </div>
              <p className="text-gray-400">
                Meu foco principal é no desenvolvimento Back-end, a estrutura que faz os sistemas funcionarem de verdade. Construo soluções robustas e escaláveis usando tecnologias modernas para entregar resultados eficazes.

Além disso, atuo no Front-end, desenvolvendo interfaces que complementam a experiência do usuário. Minha abordagem de trabalho é fortemente baseada em Métodos Ágeis, como Scrum, garantindo entregas eficientes e adaptáveis.

Estou sempre buscando aprimorar meu conhecimento para contribuir com soluções digitais completas e de alta qualidade, atendendo às necessidades de cada projeto.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
