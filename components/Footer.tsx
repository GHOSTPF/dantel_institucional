import React from 'react';
import { Phone, Clock, Cookie } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-16 px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        <div>
          <h4 className="font-bold text-lg mb-6">Fale Conosco</h4>
          <p className="text-gray-500 text-sm">Contate um de nossos especialistas para tirar suas dúvidas.</p>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 uppercase tracking-tighter">Nosso Contato</h4>
          <div className="flex items-center space-x-3 text-sm text-gray-600">
            <Phone className="w-4 h-4 text-green-600" />
            <span>WhatsApp: (00) 99999-0000</span>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 uppercase tracking-tighter">Funcionamento</h4>
          <div className="flex items-start space-x-3 text-sm text-gray-600">
            <Clock className="w-4 h-4 mt-1" />
            <div>
              <p>Segunda - Sexta: 08:00 às 18:00</p>
              <p>Sábado - Domingo: Fechado</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-400 uppercase tracking-widest">
        <p>© 2026 E-Compras. Todos os direitos reservados.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-black">Política de Cookies</a>
          <a href="#" className="hover:text-black">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;