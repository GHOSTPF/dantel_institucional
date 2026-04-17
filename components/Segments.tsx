import React from 'react';

const segments = [
  { name: "Comércio e Indústria", img: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&w=800" },
  { name: "Construção Civil", img: "https://plus.unsplash.com/premium_photo-1681691912442-68c4179c530c?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Usinas", img: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=800" },
];

const Segments: React.FC = () => {
  return (
    <section className="bg-[#121212] py-24 px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-3xl font-serif mb-16">Conheça nossos <span className="italic">Segmentos</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {segments.map((s, i) => (
            <div key={i} className="group relative overflow-hidden aspect-[4/5] bg-gray-800">
              <img 
                src={s.img} 
                className="w-full h-full object-cover opacity-50 group-hover:scale-105 group-hover:opacity-80 transition duration-700" 
                alt={s.name} 
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="w-10 h-[1px] bg-white mb-4 group-hover:w-full transition-all duration-500"></div>
                <h4 className="text-white text-xl font-bold uppercase tracking-widest">{s.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Segments;