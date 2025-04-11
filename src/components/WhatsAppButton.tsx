
import React from 'react';
import { MessageSquare } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  return (
    <a 
      href="https://wa.me/5500000000000?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20serviços." 
      target="_blank" 
      rel="noopener noreferrer" 
      className="fixed bottom-6 right-6 bg-brand hover:bg-brand/90 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-50"
      aria-label="Contato via WhatsApp"
    >
      <MessageSquare size={24} />
    </a>
  );
};

export default WhatsAppButton;
