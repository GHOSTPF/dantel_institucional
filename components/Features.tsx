import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="bg-white py-24 px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1">
          <h2 className="text-4xl font-serif text-[#121212] mb-6 leading-tight">
            Praticidade de comprar <br />
            <span className="italic">de qualquer lugar</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mb-8"></div>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Sem necessidade de instalar nenhum tipo de software em seu dispositivo, 
            nosso sistema é totalmente web e seguro — trazendo a liberdade de poder 
            acessar de qualquer lugar que o usuário deseje.
          </p>
          <p className="text-gray-400 text-sm uppercase tracking-widest">
            Acesse pelo computador, tablet ou smartphone. Tudo em mãos.
          </p>
        </div>
        
        <div className="flex-1 relative">
          {/* Mockup simplificado ou placeholder de imagem */}
          <div className="relative z-10 bg-[#121212] p-2 rounded-lg shadow-2xl">
             <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
              alt="Dashboard" 
              className="rounded opacity-90"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 w-48 h-64 bg-gray-200 -z-10 border border-gray-300"></div>
        </div>
      </div>
    </section>
  );
};

export default Features;