/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Star, 
  MessageCircle, 
  Calendar, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  ChevronDown,
  Instagram,
  Stethoscope,
  Sparkles,
  Smile,
  Activity,
  ShieldCheck,
  Baby,
  Menu,
  X,
  Map as MapIcon
} from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 glass-effect border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-primary">
            <Stethoscope className="w-8 h-8" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl font-bold leading-none tracking-tight text-primary uppercase">Dr. João Lucas</h2>
            <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">Odontologia de Excelência</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#tratamentos" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Tratamentos</a>
          <a href="#sobre" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Sobre</a>
          <a href="#resultados" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Resultados</a>
          <a href="#faq" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">FAQ</a>
          <a href="https://wa.me/5585991169729" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-full text-sm font-bold apple-shadow transition-all">
            Agendar Consulta
          </a>
        </nav>

        <button className="md:hidden p-2 text-slate-600" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              <a href="#tratamentos" onClick={() => setIsOpen(false)} className="text-sm font-medium text-slate-600">Tratamentos</a>
              <a href="#sobre" onClick={() => setIsOpen(false)} className="text-sm font-medium text-slate-600">Sobre</a>
              <a href="#resultados" onClick={() => setIsOpen(false)} className="text-sm font-medium text-slate-600">Resultados</a>
              <a href="#faq" onClick={() => setIsOpen(false)} className="text-sm font-medium text-slate-600">FAQ</a>
              <a href="https://wa.me/5585991169729" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="bg-primary text-white px-6 py-3 rounded-xl text-sm font-bold text-center mt-2">
                Agendar Consulta
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 bg-background-light overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-full apple-shadow">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <span className="text-xs font-semibold text-slate-600 uppercase tracking-tight">Mais de 1000 pacientes atendidos</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
            Dentista em Horizonte – <span className="text-primary">Clínica Odontológica Especializada</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
            Seu sorriso merece o melhor cuidado. Tratamentos odontológicos modernos com tecnologia avançada e atendimento humanizado para transformar sua saúde bucal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="https://wa.me/5585991169729" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-bold text-lg transition-all apple-shadow">
              <MessageCircle className="w-6 h-6" />
              Agendar no WhatsApp
            </a>
            <a href="#tratamentos" className="flex items-center justify-center bg-white border border-slate-200 hover:border-primary text-slate-700 px-8 py-4 rounded-xl font-bold text-lg transition-all">
              Conhecer Tratamentos
            </a>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="aspect-[4/5] bg-slate-200 rounded-[2rem] overflow-hidden apple-shadow relative z-10">
            <img 
              src="https://i.postimg.cc/jSxXvS3R/Design-sem-nome.png" 
              alt="Dr. João Lucas" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Especialidades = () => {
  const services = [
    { icon: <Activity />, title: "Implantes Dentários", desc: "Recupere a funcionalidade e a confiança com as melhores próteses sobre implantes." },
    { icon: <Sparkles />, title: "Odontologia Estética", desc: "Lentes de contato dental e facetas de resina para um sorriso impecável." },
    { icon: <Smile />, title: "Ortodontia e Alinhadores", desc: "Alinhadores invisíveis (Invisalign) para um tratamento discreto e eficiente." },
    { icon: <Star />, title: "Clareamento Dental", desc: "Tecnologia a laser e clareamento caseiro supervisionado para dentes brancos naturais." },
    { icon: <ShieldCheck />, title: "Harmonização Facial", desc: "Equilíbrio estético facial com toxina botulínica e preenchedores." },
    { icon: <Baby />, title: "Odontopediatria", desc: "Cuidado lúdico e preventivo para as crianças crescerem com sorrisos saudáveis." },
  ];

  return (
    <section id="tratamentos" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Nossos Tratamentos</h2>
          <div className="w-12 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-slate-500 mt-6">Cuidado completo para todas as fases da vida, utilizando as técnicas mais avançadas da odontologia.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-white border border-slate-100 rounded-3xl apple-shadow hover:-translate-y-1 transition-all group cursor-pointer"
            >
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                {React.cloneElement(s.icon as React.ReactElement, { className: "w-8 h-8" })}
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SobreClinica = () => {
  return (
    <section id="sobre" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="aspect-video lg:aspect-square bg-slate-200 rounded-3xl overflow-hidden apple-shadow"
        >
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" 
            alt="Interior da clínica moderna" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Sobre a Clínica</h2>
          <p className="text-slate-600 leading-relaxed text-lg">
            Na nossa clínica transformamos sorrisos utilizando tecnologia de ponta e atendimento humanizado. Nosso objetivo é proporcionar a melhor experiência odontológica para você e sua família.
          </p>
          <ul className="space-y-4">
            {[
              "Equipamentos modernos",
              "Ambiente confortável",
              "Atendimento personalizado",
              "Profissionais especializados"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle2 className="text-primary w-6 h-6" />
                <span className="font-medium text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
          <a href="https://wa.me/5585991169729" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-bold transition-all apple-shadow">
            Agendar Avaliação
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const SobreDentista = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8 order-2 lg:order-1"
        >
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Dr. João Lucas</h2>
          <p className="text-slate-600 leading-relaxed text-lg">
            Dr. João Lucas é especialista em Ortodontia, Estética Dental, Facetas e Prótese Dentária, com anos de experiência transformando sorrisos em Horizonte e Eusébio. Busca sempre a excelência e resultados naturais em cada tratamento.
          </p>
          <div className="flex flex-wrap gap-4">
            <span className="inline-flex items-center gap-2 bg-accent text-primary px-4 py-2 rounded-full text-sm font-semibold">
              <CheckCircle2 className="w-4 h-4" /> Especialista certificada
            </span>
            <span className="inline-flex items-center gap-2 bg-accent text-primary px-4 py-2 rounded-full text-sm font-semibold">
              <Sparkles className="w-4 h-4" /> Tecnologia moderna
            </span>
            <span className="inline-flex items-center gap-2 bg-accent text-primary px-4 py-2 rounded-full text-sm font-semibold">
              <Smile className="w-4 h-4" /> Atendimento humanizado
            </span>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="aspect-[4/5] bg-slate-200 rounded-3xl overflow-hidden apple-shadow order-1 lg:order-2"
        >
          <img 
            src="https://i.postimg.cc/jSxXvS3R/Design-sem-nome.png" 
            alt="Dr. João Lucas" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
};

const Resultados = () => {
  const proteseImages = [
    "https://i.postimg.cc/rwHtXZmS/5efafddd-92c8-45b4-ab64-34539365b5a0.jpg",
    "https://i.postimg.cc/ZnYqy6nk/9cba37e9-b644-43d2-8ce0-541ca55abe8b.jpg",
    "https://i.postimg.cc/7Y66H1j2/a47b5a8e-b7b5-4d7e-82cf-3510a84ea67e.jpg"
  ];

  const esteticaImages = [
    "https://i.postimg.cc/yxr7g52t/Whats-App-Image-2026-03-13-at-13-05-23.jpg",
    "https://i.postimg.cc/NFPQ9VZV/Whats-App-Image-2026-03-13-at-13-05-43.jpg",
    "https://i.postimg.cc/BbwJLyRz/Whats-App-Image-2026-03-13-at-13-06-04.jpg"
  ];

  const ortodontiaImages = [
    "https://i.postimg.cc/kXbxMd0W/Whats-App-Image-2026-03-13-at-13-32-02.jpg",
    "https://i.postimg.cc/Ghyk31Wk/Whats-App-Image-2026-03-13-at-13-32-16.jpg",
    "https://i.postimg.cc/RC87z0DR/Whats-App-Image-2026-03-13-at-13-32-41.jpg"
  ];

  return (
    <section id="resultados" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Resultados de Pacientes</h2>
          <div className="w-12 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-slate-500 mt-6">Confira alguns dos resultados alcançados em nossos pacientes reais.</p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Prótese Dentária</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {proteseImages.map((img, i) => (
              <motion.div 
                key={`protese-${i}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="aspect-square bg-slate-200 rounded-2xl overflow-hidden apple-shadow relative group"
              >
                <img 
                  src={img} 
                  alt={`Resultado Prótese ${i + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-semibold">Antes / Depois - Prótese</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Estética Dental</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {esteticaImages.map((img, i) => (
              <motion.div 
                key={`estetica-${i}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="aspect-square bg-slate-200 rounded-2xl overflow-hidden apple-shadow relative group"
              >
                <img 
                  src={img} 
                  alt={`Resultado Estética ${i + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-semibold">Antes / Depois - Estética</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Ortodontia</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ortodontiaImages.map((img, i) => (
              <motion.div 
                key={`ortodontia-${i}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="aspect-square bg-slate-200 rounded-2xl overflow-hidden apple-shadow relative group"
              >
                <img 
                  src={img} 
                  alt={`Resultado Ortodontia ${i + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-semibold">Antes / Depois - Ortodontia</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a href="https://wa.me/5585991169729" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-bold transition-all apple-shadow">
            Agendar Avaliação
          </a>
        </div>
      </div>
    </section>
  );
};

const Depoimentos = () => {
  const testimonials = [
    { name: "Mariana Santos", text: "Equipe maravilhosa! Fiz meu tratamento estético e o resultado foi muito além do esperado. Dr. João Lucas é extremamente atencioso.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200" },
    { name: "Ricardo Oliveira", text: "Tinha pavor de dentista até conhecer o Dr. João Lucas. O atendimento é humanizado de verdade e não senti dor nenhuma na prótese.", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200" },
    { name: "Juliana Costa", text: "Fiz harmonização facial e ficou super natural. Amei cada detalhe e recomendo de olhos fechados para quem busca qualidade.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Depoimentos</h2>
            <p className="text-slate-500 mt-4">Confira a experiência de quem já transformou o sorriso conosco.</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900 text-xl">4.9/5</span>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl apple-shadow border border-slate-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-3 h-3 fill-current" />)}
                  </div>
                </div>
              </div>
              <p className="text-slate-600 text-sm italic leading-relaxed">"{t.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Diferenciais = () => {
  const diffs = [
    { icon: <Stethoscope />, title: "Tecnologia moderna" },
    { icon: <Smile />, title: "Atendimento humanizado" },
    { icon: <Sparkles />, title: "Resultados naturais" },
    { icon: <Activity />, title: "Equipamentos avançados" },
    { icon: <CheckCircle2 />, title: "Ambiente confortável" },
  ];

  return (
    <section className="py-24 px-6 bg-primary text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-16 tracking-tight">Por que escolher nossa clínica?</h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {diffs.map((d, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center gap-4 max-w-[150px]"
            >
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                {React.cloneElement(d.icon as React.ReactElement, { className: "w-8 h-8" })}
              </div>
              <span className="font-semibold text-center">{d.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Promocao = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto bg-accent rounded-[3rem] p-12 lg:p-20 overflow-hidden relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight">Agende sua Consulta</h2>
            <p className="text-slate-700 text-lg">Agende sua avaliação e descubra o melhor tratamento para o seu sorriso. Dê o primeiro passo para a sua transformação.</p>
            <a href="https://wa.me/5585991169729" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-primary text-white hover:bg-primary-hover px-10 py-5 rounded-2xl font-black text-xl transition-all apple-shadow">
              <MessageCircle className="w-6 h-6" />
              Agendar pelo WhatsApp
            </a>
          </div>
          <div className="hidden lg:block">
            <div className="aspect-square rounded-[2.5rem] overflow-hidden apple-shadow">
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800" 
                alt="Paciente sorrindo" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "Quanto custa um implante dentário?", a: "O valor do implante varia de acordo com a necessidade de cada paciente. É necessária uma avaliação clínica para um orçamento preciso." },
    { q: "Quanto tempo dura o clareamento dental?", a: "O clareamento costuma durar entre 1 a 3 anos, dependendo dos seus hábitos alimentares e de higiene. Bebidas como café e vinho podem reduzir esse tempo." },
    { q: "Qual o melhor tratamento para dentes tortos?", a: "Oferecemos diversas opções, desde aparelhos convencionais até alinhadores invisíveis como o Invisalign. A melhor opção será indicada após avaliação." },
    { q: "Dentista atende urgência?", a: "Sim, realizamos atendimentos de urgência. Entre em contato pelo WhatsApp para verificarmos a disponibilidade imediata." },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-6 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-900 tracking-tight">Perguntas Frequentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden bg-white">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-6 py-4 flex items-center justify-between font-bold hover:bg-slate-50 transition-colors text-slate-900"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 text-slate-600 bg-slate-50/50 border-t border-slate-100">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Localizacao = () => {
  return (
    <section id="contato" className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Localização e Contato</h2>
          <p className="text-slate-600 text-lg">Venha nos visitar! Estamos localizados em um ponto de fácil acesso, com infraestrutura completa para te receber.</p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent text-primary rounded-full flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Endereço</h4>
                <p className="text-slate-600">R. Raimundo Nogueira Lopes, 255 - Centro<br/>Horizonte - CE, 62880-396</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent text-primary rounded-full flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Contato</h4>
                <p className="text-slate-600">(85) 99116-9729<br/>contato@drjoaolucas.com.br</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent text-primary rounded-full flex items-center justify-center shrink-0">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Horário de Atendimento</h4>
                <p className="text-slate-600">Segunda a Sexta: 07:00 às 19:00<br/>Sábado: 07:30 às 12:00</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="https://wa.me/5585991169729" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded-xl font-bold transition-all">
              <MessageCircle className="w-5 h-5" /> WhatsApp
            </a>
            <a href="https://www.instagram.com/docjoaolucas" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-90 text-white px-6 py-3 rounded-xl font-bold transition-all">
              <Instagram className="w-5 h-5" /> Instagram
            </a>
            <a href="#maps" className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-6 py-3 rounded-xl font-bold transition-all">
              <MapIcon className="w-5 h-5" /> Google Maps
            </a>
          </div>
        </div>
        <div className="aspect-square lg:aspect-auto bg-slate-200 rounded-3xl overflow-hidden apple-shadow">
          <iframe 
            src="https://maps.google.com/maps?q=R.%20Raimundo%20Nogueira%20Lopes,%20255%20-%20Centro,%20Horizonte%20-%20CE&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Stethoscope className="text-primary w-8 h-8" />
              <h2 className="text-xl font-bold">Dr. João Lucas</h2>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">Referência em ortodontia, estética dental e próteses, unindo tecnologia de ponta e cuidado humanizado.</p>
          </div>
          <div>
            <h4 className="font-bold mb-6">Links Úteis</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Início</a></li>
              <li><a href="#tratamentos" className="hover:text-primary transition-colors">Tratamentos</a></li>
              <li><a href="#sobre" className="hover:text-primary transition-colors">Sobre a Clínica</a></li>
              <li><a href="#contato" className="hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/docjoaolucas" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
          <p>© 2024 Dr. João Lucas - Odontologia de Excelência. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

const FloatingWhatsApp = () => {
  return (
    <a 
      href="https://wa.me/5585991169729" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-primary/20">
      <Header />
      <main>
        <Hero />
        <Especialidades />
        <SobreClinica />
        <SobreDentista />
        <Resultados />
        <Depoimentos />
        <Diferenciais />
        <Promocao />
        <FAQ />
        <Localizacao />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
