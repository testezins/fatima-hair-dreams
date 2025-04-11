
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="section-padding bg-dark-light">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-up">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Fátima Especialista em Progressivas"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-5 -right-5 h-20 w-3/4 bg-brand rounded-lg -z-10"></div>
            </div>
          </div>
          
          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="section-title">
              Sobre <span className="text-brand">Fátima</span>
            </h2>
            <p className="mb-6 text-gray-300">
              Há mais de 10 anos transformando a vida de mulheres através de cabelos mais bonitos, saudáveis e fáceis de cuidar.
            </p>
            <p className="mb-6 text-gray-300">
              Especialista em tratamentos capilares, Fátima desenvolveu técnicas personalizadas de progressiva e hidratação que respeitam a saúde dos fios enquanto entregam resultados duradouros e naturais.
            </p>
            <p className="text-gray-300">
              <span className="text-brand font-medium">Compromisso:</span> Seu cabelo tratado com responsabilidade, produtos profissionais e o cuidado de quem entende do assunto.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="bg-dark p-4 rounded-lg flex-1 min-w-[150px]">
                <div className="text-brand text-3xl font-bold">+500</div>
                <div className="text-gray-400">Clientes satisfeitas</div>
              </div>
              <div className="bg-dark p-4 rounded-lg flex-1 min-w-[150px]">
                <div className="text-brand text-3xl font-bold">10+</div>
                <div className="text-gray-400">Anos de experiência</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
