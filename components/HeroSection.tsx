import React from 'react';
import { ArrowUpRight, Play, ShoppingCart, Target } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#0a0a0a] text-white overflow-hidden font-sans">
      
      <div 
        className="absolute inset-0 z-0 opacity-20 grayscale bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: `url('banner_login.png') `, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/80 via-[#121212]/90 to-[#121212] z-[1]"></div>

      <div 
        className="absolute inset-0 opacity-30 z-[2]"
        style={{
          backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="relative z-10">
        <nav className="flex justify-between items-center px-12 py-8">
          <div className="text-xl font-bold tracking-tighter flex items-center gap-2">
            <img src="/logo.svg" alt="Logo" className=" h-15  " />
          </div>
          <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest opacity-80">
            <a href="#" className="hover:text-yellow-200 transition">Empresa</a>
            <a href="#" className="hover:text-yellow-200 transition">Soluções</a>
            <a href="#" className="hover:text-yellow-200 transition">Segmentos</a>
            <a href="#" className="hover:text-yellow-200 transition">Clientes</a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://sistema.cotacoesecompras.com.br" target='_blank' className="text-xs uppercase tracking-widest opacity-80 hover:text-white">Login</a>
            <button className="border border-white/30 px-6 py-2 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition">
              <a href="https://sistema.cotacoesecompras.com.br/novocliente/" target='_blank'>Cadastre-se Gratuitamente</a>
            </button>
          </div>
        </nav>

        <main className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-12 mt-20 items-center">
          
          <div className="max-w-2xl">
            <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.3em] mb-6 text-yellow-200">
              <Target className="w-4 h-4" />
              <span>Gestão & Cotações Estratégicas</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-serif leading-tight mb-8">
              A Evolução <br />
              <span className="italic">do Setor de Compras</span>
            </h1>
            
            <p className="text-xl opacity-80 mb-10 font-light max-w-md">
              Plataforma 100% web para aumentar a eficiência nos processos de cotações da sua empresa. Reduza custos, ganhe agilidade.
            </p>
            
            <div className="flex space-x-6">
              <button className="bg-[#E5E7EB] text-black px-8 py-4 flex items-center font-bold uppercase text-xs tracking-widest hover:bg-white transition">
                Falar com um Especialista <ArrowUpRight className="ml-2 w-4 h-4" />
              </button>
              <button className="flex items-center space-x-3 group">
                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white/10 transition">
                  <Play className="w-4 h-4 fill-white" />
                </div>
                <span className="text-xs uppercase tracking-widest font-bold">Ver Demonstração</span>
              </button>
            </div>
          </div>

          <div className="relative flex justify-center">
  <div className="relative z-20 w-[420px] h-[500px] border-[10px] border-[#1a1a1a] shadow-2xl overflow-hidden grayscale-[0.2] hover:grayscale-0 transition duration-700">

    <img 
      src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800" 
      alt="Executivo Focado" 
      className="w-full h-full object-cover object-top"
    />

    <div className="absolute bottom-0 left-0 bg-black/60 backdrop-blur-md p-6 text-sm w-full">
      <p className="font-serif italic text-lg text-white">Liderança em Decisões</p>
      <p className="text-[10px] uppercase tracking-widest opacity-70">
        Sua empresa focada no crescimento estratégico.
      </p>
    </div>
  </div>

  {/* BORDA DECORATIVA */}
  <div className="absolute -top-4 -right-4 w-[420px] h-[500px] border border-white/10 z-10"></div>
</div>
        </main>

        <div className="px-12 mt-24 pb-12 flex space-x-16 opacity-50 text-[10px] tracking-[0.2em] uppercase">
          <div><span className="block text-xl font-bold mb-1">+2.500</span> Fornecedores</div>
          <div><span className="block text-xl font-bold mb-1">R$ 500Mi+</span> Transacionados</div>
          <div><span className="block text-xl font-bold mb-1">99.9%</span> Uptime Plataforma</div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;