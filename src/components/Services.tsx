
import React from 'react';

const Services: React.FC = () => {
  return (
    <section id="servicos" className="section-padding bg-dark">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Nossos <span className="text-brand">Serviços</span></h2>
          <p className="text-gray-300">
            Tratamentos profissionais realizados com produtos de alta qualidade, no conforto da sua casa e com todo cuidado que seus cabelos merecem.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          {/* Progressiva Service */}
          <div className="bg-dark-light rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105 duration-300">
            <div className="h-60 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1609357912334-a8650fb35325?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Progressiva"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">Progressiva</h3>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-300">Alisamento duradouro (até 3 meses)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-300">Redução de volume e frizz</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-300">Brilho intenso e natural</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-300">Fórmula segura e sem formol</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="text-xl font-bold text-brand">A partir de R$120</div>
                <a 
                  href="https://wa.me/5500000000000?text=Olá!%20Gostaria%20de%20agendar%20uma%20progressiva." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-brand sm:ml-auto"
                >
                  Agendar
                </a>
              </div>
            </div>
          </div>
          
          {/* Hidratação Service */}
          <div className="bg-dark-light rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105 duration-300">
            <div className="h-60 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Hidratação"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">Hidratação Profunda</h3>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-300">Nutrição e reposição de massa capilar</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-300">Recuperação da maciez e elasticidade</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-300">Fios mais sedosos e saudáveis</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-300">Proteção contra danos externos</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="text-xl font-bold text-brand">A partir de R$80</div>
                <a 
                  href="https://wa.me/5500000000000?text=Olá!%20Gostaria%20de%20agendar%20uma%20hidratação." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-brand sm:ml-auto"
                >
                  Agendar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
