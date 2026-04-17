import React from 'react';
import { Link, Map, MessageSquare, PieChart, Layers, Users } from 'lucide-react';

const solutions = [
  { title: "Vínculos Dinâmicos", desc: "Preenchimento automático com montagem de famílias de materiais.", icon: Link },
  { title: "Mapa de Preço", desc: "Visualização em tempo real com comparativo de pagamento.", icon: Map },
  { title: "Renegociação", desc: "Ferramenta de lance com total transparência e otimização.", icon: MessageSquare },
  { title: "Fluxo de Pedidos", desc: "Acompanhamento desde a fundação do fornecedor até a entrada.", icon: Layers },
  { title: "Multi usuários", desc: "Sistema intuitivo para toda a sua equipe com níveis de acesso.", icon: Users },
  { title: "Relatórios Gerenciais", desc: "Gráficos e indicadores para acompanhamento em tempo real.", icon: PieChart },
];

const Solutions: React.FC = () => {
  return (
    <section className="bg-blue-600 py-24 px-12 text-white">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h2 className="text-xs uppercase tracking-[0.4em] mb-4 opacity-80">Ambiente Corporativo</h2>
        <h3 className="text-5xl font-serif">Nossas Soluções</h3>
      </div>

     <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {solutions.map((item, idx) => (
            <div
            key={idx}
            className="group border-l border-white/20 pl-8 py-4 hover:bg-white/5 transition"
            >
            <item.icon className=" w-8 h-8 mb-6 opacity-70 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:-translate-y-2 group-hover:translate-x-1 group-hover:rotate-6 group-hover:scale-110 "/>
            <h4 className="text-xl font-bold mb-4 uppercase tracking-wider">
                {item.title}
            </h4>
            <p className="text-blue-100 font-light leading-relaxed">
                {item.desc}
            </p>
            </div>
        ))}
        </div>
    </section>
  );
};

export default Solutions;