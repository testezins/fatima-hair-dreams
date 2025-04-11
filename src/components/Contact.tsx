
import React from 'react';
import { Phone, MapPin, Clock, MessageSquare, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="section-padding bg-gradient-to-b from-dark to-dark-light">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Entre em <span className="text-brand">Contato</span></h2>
          <p className="text-gray-300">
            Vamos cuidar do seu cabelo hoje? Agende seu horário e receba um atendimento profissional no conforto da sua casa.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-brand rounded-full p-3 mr-4">
                <Phone size={24} className="text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">WhatsApp</h4>
                <p className="text-gray-300">
                  Agende seu horário ou tire suas dúvidas:
                </p>
                <a 
                  href="https://wa.me/5500000000000" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-brand hover:underline"
                >
                  (00) 00000-0000
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-brand rounded-full p-3 mr-4">
                <MapPin size={24} className="text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Área de Atendimento</h4>
                <p className="text-gray-300">
                  Atendimento domiciliar em toda a cidade e região metropolitana. 
                  Entre em contato para verificar disponibilidade para sua localização.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-brand rounded-full p-3 mr-4">
                <Clock size={24} className="text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Horários</h4>
                <p className="text-gray-300">
                  Segunda a Sexta: 9h às 19h<br />
                  Sábados: 9h às 17h
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-brand rounded-full p-3 mr-4">
                <Instagram size={24} className="text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Instagram</h4>
                <p className="text-gray-300">
                  Confira os resultados e novidades:
                </p>
                <a 
                  href="https://instagram.com/fatima.progressivas" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-brand hover:underline"
                >
                  @fatima.progressivas
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-dark p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Mensagem Direta</h3>
            <p className="mb-6 text-gray-300">
              Prefere que eu entre em contato com você? Preencha o formulário abaixo:
            </p>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full p-3 bg-dark-light border border-gray-700 rounded-md focus:ring-2 focus:ring-brand focus:border-transparent outline-none"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium">WhatsApp</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full p-3 bg-dark-light border border-gray-700 rounded-md focus:ring-2 focus:ring-brand focus:border-transparent outline-none"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div>
                <label htmlFor="service" className="block mb-2 text-sm font-medium">Serviço</label>
                <select 
                  id="service" 
                  className="w-full p-3 bg-dark-light border border-gray-700 rounded-md focus:ring-2 focus:ring-brand focus:border-transparent outline-none"
                >
                  <option value="">Selecione o serviço</option>
                  <option value="progressiva">Progressiva</option>
                  <option value="hidratacao">Hidratação</option>
                  <option value="outro">Outro / Dúvidas</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">Mensagem</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full p-3 bg-dark-light border border-gray-700 rounded-md focus:ring-2 focus:ring-brand focus:border-transparent outline-none"
                  placeholder="Como posso te ajudar?"
                ></textarea>
              </div>
              <button type="submit" className="w-full btn-brand">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
