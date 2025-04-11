
import React from 'react';
import { MessageSquare } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  return (
    <a 
      href="https://wa.me/5500000000000?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20serviços." 
      target="_blank" 
      rel="noopener noreferrer" 
      className="whatsapp-button"
      aria-label="Contato via WhatsApp"
    >
      <MessageSquare size={24} />
    </a>
  );
};

export default WhatsAppButton;
