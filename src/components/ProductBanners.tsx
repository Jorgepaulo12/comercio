import React from 'react';
import { ArrowRight, Zap, Gift, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductBanners = () => {
  const banners = [
    {
      id: 1,
      title: 'Tecnologia de Ponta',
      subtitle: 'Até 30% de desconto',
      description: 'Laptops, smartphones e equipamentos profissionais',
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg',
      cta: 'Ver Ofertas',
      gradient: 'from-blue-600 to-purple-600',
      icon: Zap,
    },
    {
      id: 2,
      title: 'Mobiliário Premium',
      subtitle: 'Conforto e elegância',
      description: 'Cadeiras ergonômicas e mesas executivas',
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg',
      cta: 'Explorar',
      gradient: 'from-emerald-600 to-teal-600',
      icon: Gift,
    },
    {
      id: 3,
      title: 'Entrega Rápida',
      subtitle: 'Em todo Moçambique',
      description: 'Receba seus produtos em 24-48h',
      image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg',
      cta: 'Saiba Mais',
      gradient: 'from-orange-600 to-red-600',
      icon: Truck,
    },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ofertas <span className="bg-gradient-to-r from-emerald-400 to-violet-400 bg-clip-text text-transparent">Especiais</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubra nossas promoções exclusivas e ofertas limitadas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {banners.map((banner, index) => {
            const IconComponent = banner.icon;
            return (
              <div
                key={banner.id}
                className={`group relative overflow-hidden rounded-2xl ${
                  index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}
              >
                <div className="absolute inset-0">
                  <img
                    src={banner.image}
                    alt={banner.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${banner.gradient} opacity-80`}></div>
                </div>
                
                <div className={`relative p-8 text-white ${
                  index === 0 ? 'lg:p-12 min-h-[400px] flex flex-col justify-center' : 'min-h-[280px] flex flex-col justify-between'
                }`}>
                  <div>
                    <div className="flex items-center mb-4">
                      <IconComponent className={`h-8 w-8 mr-3 ${index === 0 ? 'lg:h-12 lg:w-12' : ''}`} />
                      <span className={`font-semibold ${index === 0 ? 'text-xl lg:text-2xl' : 'text-lg'}`}>
                        {banner.subtitle}
                      </span>
                    </div>
                    <h3 className={`font-bold mb-4 ${
                      index === 0 ? 'text-3xl lg:text-5xl' : 'text-2xl'
                    }`}>
                      {banner.title}
                    </h3>
                    <p className={`mb-6 opacity-90 ${
                      index === 0 ? 'text-lg lg:text-xl' : 'text-base'
                    }`}>
                      {banner.description}
                    </p>
                  </div>
                  
                  <Link
                    to="/produtos"
                    className={`inline-flex items-center bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105 w-fit ${
                      index === 0 ? 'px-8 py-4 text-lg' : 'px-6 py-3'
                    }`}
                  >
                    {banner.cta}
                    <ArrowRight className={`ml-2 ${index === 0 ? 'h-6 w-6' : 'h-5 w-5'}`} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductBanners;