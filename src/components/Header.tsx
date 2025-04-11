
import React from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed w-full bg-dark/90 backdrop-blur-sm z-50">
      <div className="container-custom flex justify-between items-center py-4">
        <Logo />
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white" 
          onClick={toggleMenu}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#inicio" className="text-white hover:text-brand transition-colors">Início</a>
          <a href="#sobre" className="text-white hover:text-brand transition-colors">Sobre</a>
          <a href="#servicos" className="text-white hover:text-brand transition-colors">Serviços</a>
          <a href="#contato" className="text-white hover:text-brand transition-colors">Contato</a>
          <a 
            href="https://wa.me/5500000000000?text=Olá!%20Gostaria%20de%20agendar%20um%20horário." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-brand"
          >
            Agendar Agora
          </a>
        </nav>
        
        {/* Mobile navigation */}
        {menuOpen && (
          <div className="absolute top-full left-0 right-0 bg-dark-light md:hidden">
            <nav className="flex flex-col py-4 px-4">
              <a 
                href="#inicio" 
                className="py-3 text-white hover:text-brand transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Início
              </a>
              <a 
                href="#sobre" 
                className="py-3 text-white hover:text-brand transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Sobre
              </a>
              <a 
                href="#servicos" 
                className="py-3 text-white hover:text-brand transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Serviços
              </a>
              <a 
                href="#contato" 
                className="py-3 text-white hover:text-brand transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Contato
              </a>
              <a 
                href="https://wa.me/5500000000000?text=Olá!%20Gostaria%20de%20agendar%20um%20horário." 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-brand mt-3 text-center"
                onClick={() => setMenuOpen(false)}
              >
                Agendar Agora
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
