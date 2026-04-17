"use client";
import React, { useState } from 'react';
import { Check, ArrowRight, ShieldCheck, Zap, Briefcase } from 'lucide-react';

const Target = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
);

type Plan = {
  plan: string;
  price: string;
  features: string[];
  icon: React.ElementType;
  popular?: boolean;
};

type TabKey = 'compradores' | 'fornecedores';

const CONTENT: Record<TabKey, Plan[]> = {
  compradores: [
    {
      plan: "Basic",
      price: "Grátis",
      features: ["Cotações Ilimitadas", "Até 3 usuários", "Relatórios básicos"],
      icon: Zap,
    },
    {
      plan: "Pro",
      price: "R$ 299",
      features: ["Gestão de Contratos", "Workflow de Aprovação", "Suporte 24/7", "BI Integrado"],
      icon: ShieldCheck,
      popular: true,
    },
  ],
  fornecedores: [
    {
      plan: "Standard",
      price: "R$ 150",
      features: ["Receber Cotações", "Perfil Verificado", "Dashboard de Vendas"],
      icon: Briefcase,
    },
    {
      plan: "Premium",
      price: "R$ 450",
      features: ["Destaque em Buscas", "Análise de Concorrência", "API de Integração"],
      icon: Target,
      popular: true,
    },
  ],
};

const Pricing: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('compradores');

  return (
    <section className="relative py-24 px-12 bg-[#0a0a0a] text-white overflow-hidden">
      
      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-[0.4em] text-yellow-200 mb-4">
            Investimento Estratégico
          </h2>
          <h3 className="text-5xl font-serif">
            Planos e <span className="italic">Condições</span>
          </h3>
        </div>

        {/* TABS */}
        <div className="flex justify-center mb-16">
          <div className="relative w-[420px] h-[52px] bg-white/5 border border-white/10 rounded-full backdrop-blur-md p-1">

            {/* INDICADOR */}
            <div
              className="absolute top-1 left-1 h-[44px] w-[calc(50%-4px)] rounded-full bg-white transition-all duration-300 ease-out pointer-events-none shadow-md"
              style={{
                transform: activeTab === 'compradores'
                  ? 'translateX(0%)'
                  : 'translateX(100%)'
              }}
            />

            {/* BOTÕES */}
            <div className="relative flex w-full h-full">

              <button
                type="button"
                onClick={() => setActiveTab('compradores')}
                className={`w-1/2 z-10 text-xs uppercase tracking-widest transition ${
                  activeTab === 'compradores'
                    ? 'text-black font-semibold'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                 Compradores
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('fornecedores')}
                className={`w-1/2 z-10 text-xs uppercase tracking-widest transition ${
                  activeTab === 'fornecedores'
                    ? 'text-black font-semibold'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                 Fornecedores
              </button>

            </div>
          </div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {CONTENT[activeTab].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={`${activeTab}-${item.plan}`}
                className={`relative p-10 border transition-all duration-500 group ${
                  item.popular
                    ? 'border-yellow-200/50 bg-[#151515]'
                    : 'border-white/10 bg-[#111111]'
                } hover:border-white/40`}
              >
                {item.popular && (
                  <span className="absolute -top-3 right-8 bg-yellow-200 text-black text-[10px] font-bold px-3 py-1 uppercase">
                    Mais Utilizado
                  </span>
                )}

                <Icon className="w-8 h-8 mb-6 text-yellow-200 opacity-80" />
                <h4 className="text-2xl font-serif mb-2">{item.plan}</h4>

                <div className="flex items-baseline mb-8">
                  <span className="text-4xl font-bold">{item.price}</span>
                  {item.price !== 'Grátis' && (
                    <span className="text-xs opacity-50 ml-2">/mês</span>
                  )}
                </div>

                <ul className="space-y-4 mb-10">
                  {item.features.map((f, i) => (
                    <li key={i} className="flex items-center text-sm opacity-70 group-hover:opacity-100 transition">
                      <Check className="w-4 h-4 mr-3 text-yellow-200" />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 text-xs uppercase tracking-widest font-bold flex items-center justify-center transition-all ${
                    item.popular
                      ? 'bg-white text-black hover:bg-yellow-200'
                      : 'border border-white/20 hover:bg-white hover:text-black'
                  }`}
                >
                  Começar Agora <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Pricing;