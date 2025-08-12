import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-violet-900/20 to-emerald-900/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-violet-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-emerald-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fadeInUp">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-8 w-8 text-emerald-400 mr-2 animate-pulse" />
            <span className="text-emerald-400 font-semibold text-lg">Soluções Completas para Seu Negócio</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Tudo que Sua Empresa
            <span className="block bg-gradient-to-r from-emerald-400 to-violet-400 bg-clip-text text-transparent">
              Precisa em Um Só Lugar
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Da tecnologia mais avançada aos materiais essenciais do dia a dia. 
            Oferecemos soluções completas para empresas que buscam qualidade, 
            inovação e excelência em cada produto.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/produtos"
              className="group bg-gradient-to-r from-emerald-500 to-violet-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              Explorar Produtos
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link 
              to="/sobre"
              className="border-2 border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-emerald-500 hover:bg-emerald-500/10 transition-all duration-300 transform hover:scale-105"
            >
              Conheça Nossa História
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-emerald-400 to-violet-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;