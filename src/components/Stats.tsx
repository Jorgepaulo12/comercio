import React, { useState, useEffect } from 'react';
import { Users, Package, Award, Clock } from 'lucide-react';

const Stats = () => {
  const [counters, setCounters] = useState({
    clients: 0,
    products: 0,
    awards: 0,
    years: 0,
  });

  const finalValues = {
    clients: 2500,
    products: 15000,
    awards: 25,
    years: 15,
  };

  useEffect(() => {
    const duration = 2000;
    const interval = 50;
    const steps = duration / interval;

    Object.keys(finalValues).forEach((key) => {
      const increment = finalValues[key] / steps;
      let currentValue = 0;

      const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= finalValues[key]) {
          setCounters((prev) => ({ ...prev, [key]: finalValues[key] }));
          clearInterval(timer);
        } else {
          setCounters((prev) => ({ ...prev, [key]: Math.floor(currentValue) }));
        }
      }, interval);
    });
  }, []);

  const stats = [
    {
      icon: Users,
      value: counters.clients,
      label: 'Clientes Satisfeitos',
      suffix: '+',
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      icon: Package,
      value: counters.products,
      label: 'Produtos Disponíveis',
      suffix: '+',
      color: 'from-violet-500 to-violet-600',
    },
    {
      icon: Award,
      value: counters.awards,
      label: 'Prémios Recebidos',
      suffix: '',
      color: 'from-emerald-500 to-violet-500',
    },
    {
      icon: Clock,
      value: counters.years,
      label: 'Anos de Experiência',
      suffix: '+',
      color: 'from-violet-500 to-emerald-500',
    },
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Números que <span className="bg-gradient-to-r from-emerald-400 to-violet-400 bg-clip-text text-transparent">Falam por Si</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nossa trajetória de sucesso refletida em números que demonstram nosso compromisso com a excelência
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="group bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 text-center hover:border-emerald-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/10"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.value.toLocaleString()}{stat.suffix}
                </div>
                <div className="text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;