import React from 'react';
import { Monitor, Car, Smartphone, Volume2, Home, Lightbulb, BookOpen, Tent, ShirtIcon, Shovel as Shoe } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Tecnologia & Informática',
      description: 'Computadores, periféricos e software especializado',
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      icon: Car,
      title: 'Veículos Automóveis',
      description: 'Comércio especializado em veículos',
      color: 'from-violet-500 to-violet-600',
    },
    {
      icon: Smartphone,
      title: 'Telecomunicações',
      description: 'Equipamentos de comunicação avançados',
      color: 'from-emerald-500 to-violet-500',
    },
    {
      icon: Volume2,
      title: 'Equipamento Audiovisual',
      description: 'Soluções de som e imagem profissionais',
      color: 'from-violet-500 to-emerald-500',
    },
    {
      icon: Home,
      title: 'Eletrodomésticos',
      description: 'Aparelhos para casa e escritório',
      color: 'from-emerald-600 to-violet-500',
    },
    {
      icon: Lightbulb,
      title: 'Mobiliário & Iluminação',
      description: 'Móveis e soluções de iluminação',
      color: 'from-violet-600 to-emerald-500',
    },
    {
      icon: BookOpen,
      title: 'Papelaria & Editorial',
      description: 'Livros, revistas e artigos de papelaria',
      color: 'from-emerald-500 to-violet-600',
    },
    {
      icon: Tent,
      title: 'Desporto & Lazer',
      description: 'Artigos para campismo e atividades ao ar livre',
      color: 'from-violet-500 to-emerald-600',
    },
    {
      icon: ShirtIcon,
      title: 'Vestuário',
      description: 'Roupas e acessórios de qualidade',
      color: 'from-emerald-600 to-violet-600',
    },
    {
      icon: Shoe,
      title: 'Calçado & Couro',
      description: 'Sapatos e artigos em couro',
      color: 'from-violet-600 to-emerald-600',
    },
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nossas <span className="bg-gradient-to-r from-emerald-400 to-violet-400 bg-clip-text text-transparent">Especialidades</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Oferecemos uma ampla gama de produtos e serviços especializados para atender todas as necessidades do seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/10"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;