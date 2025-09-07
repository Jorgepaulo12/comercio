import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, User, Building } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically handle form submission
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      details: ['Av. 25 de Setembro, Maputo', 'Moçambique'],
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      icon: Phone,
      title: 'Telefone',
      details: ['+258 86 372 3774'],
      color: 'from-violet-500 to-violet-600',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['ecnmc84@gmail.com'],
      color: 'from-emerald-500 to-violet-500',
    },
    {
      icon: Clock,
      title: 'Horário',
      details: ['Seg-Sex: 9:00 - 18:00', 'Sábado: 9:00 - 13:00'],
      color: 'from-violet-500 to-emerald-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-violet-900/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Entre em <span className="bg-gradient-to-r from-emerald-400 to-violet-400 bg-clip-text text-transparent">Contato</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Estamos aqui para ajudar sua empresa a encontrar as melhores soluções. 
              Entre em contato connosco e descubra como podemos ser seu parceiro de sucesso.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div
                  key={index}
                  className="group bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-emerald-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/10"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-400">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Envie-nos uma <span className="bg-gradient-to-r from-emerald-400 to-violet-400 bg-clip-text text-transparent">Mensagem</span>
              </h2>
              <p className="text-gray-300 mb-8">
                Preencha o formulário abaixo e entraremos em contato o mais breve possível. 
                Todos os campos são obrigatórios.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Nome Completo
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors duration-300"
                        placeholder="Seu nome completo"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors duration-300"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Empresa
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors duration-300"
                      placeholder="Nome da sua empresa"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Assunto
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition-colors duration-300"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="cotacao">Pedido de Cotação</option>
                    <option value="informacoes">Informações sobre Produtos</option>
                    <option value="suporte">Suporte Técnico</option>
                    <option value="parceria">Proposta de Parceria</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Mensagem
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors duration-300 resize-none"
                      placeholder="Descreva como podemos ajudar..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-violet-500 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  Enviar Mensagem
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Visite-nos
                </h3>
                <p className="text-gray-300 mb-6">
                  Nossa loja física está localizada no coração de Maputo, 
                  com fácil acesso de transporte público e estacionamento disponível.
                </p>
                <div className="aspect-w-16 aspect-h-9 bg-gray-700 rounded-lg">
                  <div className="w-full h-64 bg-gradient-to-br from-emerald-500/20 to-violet-500/20 rounded-lg flex items-center justify-center">
                    <MapPin className="h-16 w-16 text-emerald-400" />
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Porquê Escolher-nos?
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                    Atendimento personalizado e especializado
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-violet-400 rounded-full mr-3"></div>
                    Produtos de marcas reconhecidas mundialmente
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                    Garantia estendida em todos os produtos
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-violet-400 rounded-full mr-3"></div>
                    Entrega rápida em todo o país
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                    Suporte técnico 24/7
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;