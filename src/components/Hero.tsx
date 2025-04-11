
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
          backgroundPosition: "center 30%"
        }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 mt-20">
        <div className="max-w-2xl animate-fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight pink-glow">
            Transforme seus fios com quem entende de beleza
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Progressiva e hidratação no conforto da sua casa. Atendimento profissional com resultado garantido.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.me/5500000000000?text=Olá!%20Gostaria%20de%20agendar%20um%20horário." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-brand"
            >
              Agendar Agora
            </a>
            <a href="#servicos" className="btn-outline">
              Conheça Nossos Serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
