import React from 'react';
import { Award, Users, Target, Lightbulb, CheckCircle, ArrowRight } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Foco no Cliente',
      description: 'Colocamos as necessidades dos nossos clientes no centro de tudo o que fazemos.',
    },
    {
      icon: Award,
      title: 'Qualidade Superior',
      description: 'Oferecemos apenas produtos da mais alta qualidade de marcas reconhecidas mundialmente.',
    },
    {
      icon: Lightbulb,
      title: 'Inovação Constante',
      description: 'Mantemo-nos sempre atualizados com as últimas tendências e tecnologias do mercado.',
    },
    {
      icon: Users,
      title: 'Equipa Especializada',
      description: 'Nossa equipa é formada por especialistas em cada área de atuação.',
    },
  ];

  const achievements = [
    'Mais de 15 anos de experiência no mercado',
    '2500+ clientes satisfeitos em todo o país',
    'Parceria com as melhores marcas internacionais',
    'Certificações de qualidade ISO 9001',
    'Suporte técnico especializado 24/7',
    'Garantia estendida em todos os produtos',
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-violet-900/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sobre a <span className="bg-gradient-to-r from-emerald-400 to-violet-400 bg-clip-text text-transparent">Maumbica Comercial</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Somos uma empresa líder no fornecimento de soluções completas para empresas, 
              oferecendo desde tecnologia de ponta até os produtos essenciais do dia a dia. 
              Nossa missão é ser o parceiro de confiança que sua empresa precisa para crescer e prosperar.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Nossa <span className="bg-gradient-to-r from-emerald-400 to-violet-400 bg-clip-text text-transparent">História</span>
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  Fundada em 2009, a Maumbica comercial nasceu com o objetivo de revolucionar 
                  a forma como as empresas moçambicanas adquirem seus produtos e equipamentos essenciais. 
                  O que começou como uma pequena loja especializada em informática, 
                  rapidamente evoluiu para se tornar um dos maiores fornecedores multissectoriais do país.
                </p>
                <p>
                  Ao longo dos anos, expandimos nossa oferta para incluir desde veículos automóveis 
                  até artigos de vestuário, sempre mantendo o mesmo compromisso com a qualidade 
                  e o atendimento personalizado que nos diferencia no mercado.
                </p>
                <p>
                  Hoje, orgulhamo-nos de servir mais de 2500 empresas em todo o território nacional, 
                  oferecendo não apenas produtos de excelência, mas também consultoria especializada 
                  e suporte técnico completo.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-500/20 to-violet-500/20 rounded-2xl p-8">
                <img
                  src="https://www.maumbicacomercial.co.mz/logo.png"
                  alt="Nossa equipa"
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nossos <span className="bg-gradient-to-r from-emerald-400 to-violet-400 bg-clip-text text-transparent">Valores</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Os princípios que orientam cada decisão e ação da nossa empresa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-emerald-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/10"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Nossos <span className="bg-gradient-to-r from-emerald-400 to-violet-400 bg-clip-text text-transparent">Conquistas</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Marcos importantes que demonstram nosso compromisso com a excelência e inovação
              </p>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-emerald-500/10 to-violet-500/10 rounded-2xl p-8">
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-violet-400 bg-clip-text text-transparent mb-4">
                  15+
                </div>
                <div className="text-white text-xl mb-8">Anos de Excelência</div>
                <button className="bg-gradient-to-r from-emerald-500 to-violet-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">
                  Fale Connosco
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;