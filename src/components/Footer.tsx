import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'Sobre Nós', path: '/sobre' },
      { name: 'Carreiras', path: '/carreiras' },
      { name: 'Imprensa', path: '/imprensa' },
      { name: 'Blog', path: '/blog' },
    ],
    products: [
      { name: 'Tecnologia', path: '/produtos?category=technology' },
      { name: 'Mobiliário', path: '/produtos?category=furniture' },
      { name: 'Papelaria', path: '/produtos?category=stationery' },
      { name: 'Eletrodomésticos', path: '/produtos?category=appliances' },
    ],
    support: [
      { name: 'Centro de Ajuda', path: '/ajuda' },
      { name: 'Contacto', path: '/contato' },
      { name: 'Garantia', path: '/garantia' },
      { name: 'Devolução', path: '/devolucoes' },
    ],
    legal: [
      { name: 'Termos de Uso', path: '/termos' },
      { name: 'Política de Privacidade', path: '/privacidade' },
      { name: 'Cookies', path: '/cookies' },
      { name: 'GDPR', path: '/gdpr' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <div className="flex-shrink-0">
                  <img 
                    src="/logo.png" 
                    alt="Maumbica Comercial" 
                    className="h-10 w-10 object-contain"
                  />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-violet-400 bg-clip-text text-transparent">
                  Maumbica Comercial
                </span>
              </Link>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Sua empresa de confiança para soluções completas em tecnologia, 
                mobiliário, papelaria e muito mais. Há mais de 15 anos servindo 
                empresas em todo Moçambique.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-gray-400">
                  <MapPin className="h-5 w-5 mr-3 text-emerald-400" />
                  <span className="text-sm">Av. Filipe Samuel Magaia, Niassa</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Phone className="h-5 w-5 mr-3 text-emerald-400" />
                  <span className="text-sm">+258 84 104 1035</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Mail className="h-5 w-5 mr-3 text-emerald-400" />
                  <span className="text-sm">geral@officepro.pt</span>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            <div>
              <h3 className="text-white font-semibold mb-4">Empresa</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Produtos</h3>
              <ul className="space-y-3">
                {footerLinks.products.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Suporte</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Maumbica Comercial. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;