
import React from 'react';

const testimonials = [
  {
    id: 1,
    name: "Amanda Silva",
    text: "Meu cabelo nunca esteve tão liso e saudável! A Fátima é uma profissional incrível, super atenciosa e o melhor: vem até minha casa. Recomendo muito!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Carla Rodrigues",
    text: "Já fiz progressiva em vários salões, mas depois que conheci o trabalho da Fátima não quero mais saber de outro lugar. Resultado impecável e duradouro!",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 3,
    name: "Patrícia Mendes",
    text: "A hidratação que a Fátima faz é um verdadeiro milagre para os cabelos. Meus fios estavam muito ressecados e em apenas uma sessão já senti a diferença.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="section-padding bg-dark-light">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">O que as <span className="text-brand">clientes</span> dizem</h2>
          <p className="text-gray-300">
            A satisfação das minhas clientes é meu maior orgulho. Confira algumas experiências de quem já transformou seus cabelos comigo.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="bg-dark p-6 rounded-xl shadow-lg"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full mr-4 border-2 border-brand"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
