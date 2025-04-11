
import React from 'react';
import Logo from './Logo';
import { Instagram, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-10 mb-16">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 text-gray-400 max-w-md">
              Beleza com conforto e qualidade, direto na sua casa. Especialista em progressivas e hidratação capilar.
            </p>
            <div className="flex mt-6 space-x-4">
              <a 
                href="https://instagram.com/fatima.progressivas" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-brand/20 hover:bg-brand/30 text-brand p-3 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://wa.me/5500000000000" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-brand/20 hover:bg-brand/30 text-brand p-3 rounded-full transition-colors"
                aria-label="WhatsApp"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-gray-400 hover:text-brand transition-colors">Início</a>
              </li>
              <li>
                <a href="#sobre" className="text-gray-400 hover:text-brand transition-colors">Sobre</a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-brand transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#contato" className="text-gray-400 hover:text-brand transition-colors">Contato</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Serviços</h4>
            <ul className="space-y-3">
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-brand transition-colors">Progressiva</a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-brand transition-colors">Hidratação</a>
              </li>
              <li>
                <a 
                  href="https://wa.me/5500000000000?text=Olá!%20Gostaria%20de%20agendar%20um%20horário." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-brand transition-colors"
                >
                  Agendar
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2025 Fátima Progressivas. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-brand text-sm">Política de Privacidade</a>
              <a href="#" className="text-gray-500 hover:text-brand text-sm">Termos de Serviço</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
