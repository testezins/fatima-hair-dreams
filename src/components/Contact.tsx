
import React, { useState } from 'react';
import { Phone, MapPin, Clock, MessageSquare, Instagram } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';

// Schema de validação do formulário
const formSchema = z.object({
  name: z.string().min(3, { message: 'O nome deve ter pelo menos 3 caracteres' }),
  phone: z.string().min(10, { message: 'Digite um número de telefone válido' }),
  service: z.string().min(1, { message: 'Selecione um serviço' }),
  message: z.string().optional(),
});

const Contact: React.FC = () => {
  // Inicializar o formulário com react-hook-form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      service: '',
      message: '',
    },
  });

  // Função para enviar para o WhatsApp
  const sendToWhatsApp = (data: z.infer<typeof formSchema>) => {
    const serviceText = data.service === 'progressiva' 
      ? 'Progressiva' 
      : data.service === 'hidratacao' 
      ? 'Hidratação' 
      : 'Outro serviço';
    
    // Preparar a mensagem
    let message = `Olá! Meu nome é ${data.name}.\n`;
    message += `Gostaria de mais informações sobre ${serviceText}.\n`;
    if (data.message) {
      message += `Mensagem: ${data.message}\n`;
    }
    
    // Formatar número de telefone para remover caracteres especiais
    const formattedNumber = '5500000000000';
    
    // Preparar a URL do WhatsApp
    const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodeURIComponent(message)}`;
    
    // Redirecionar para o WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  // Handler de submit
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    sendToWhatsApp(data);
  };

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
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">Nome</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Seu nome completo" 
                          className="w-full p-3 bg-dark-light border border-gray-700 rounded-md focus:ring-2 focus:ring-brand focus:border-transparent outline-none"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage className="text-xs text-red-500" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">WhatsApp</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="(00) 00000-0000" 
                          className="w-full p-3 bg-dark-light border border-gray-700 rounded-md focus:ring-2 focus:ring-brand focus:border-transparent outline-none"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage className="text-xs text-red-500" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">Serviço</FormLabel>
                      <FormControl>
                        <select 
                          className="w-full p-3 bg-dark-light border border-gray-700 rounded-md focus:ring-2 focus:ring-brand focus:border-transparent outline-none"
                          {...field}
                        >
                          <option value="">Selecione o serviço</option>
                          <option value="progressiva">Progressiva</option>
                          <option value="hidratacao">Hidratação</option>
                          <option value="outro">Outro / Dúvidas</option>
                        </select>
                      </FormControl>
                      <FormMessage className="text-xs text-red-500" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">Mensagem</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Como posso te ajudar?" 
                          className="w-full p-3 bg-dark-light border border-gray-700 rounded-md focus:ring-2 focus:ring-brand focus:border-transparent outline-none"
                          rows={4}
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage className="text-xs text-red-500" />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full btn-brand"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
