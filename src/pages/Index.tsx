import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Award, Clock, DollarSign, Star, ArrowRight, FileText, Image, Sticker, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  {
    icon: FileText,
    title: "Impressão em Papel",
    desc: "Cartões de visita, flyers, folders, convites e muito mais com acabamento impecável.",
    link: "/servicos",
    color: "cyan",
  },
  {
    icon: Image,
    title: "Lona e Banners",
    desc: "Banners, faixas e outdoors em alta resolução para máximo impacto visual.",
    link: "/servicos",
    color: "magenta",
  },
  {
    icon: Sticker,
    title: "Adesivos e Vinil",
    desc: "Etiquetas, recorte em vinil e personalização com durabilidade garantida.",
    link: "/servicos",
    color: "yellow",
  },
];

const serviceColors = {
  cyan: {
    iconBg: "bg-cyan/10",
    iconHoverBg: "group-hover:bg-cyan",
    iconText: "text-cyan",
    border: "hover:border-cyan/30",
    link: "text-cyan",
    topBar: "bg-cyan",
  },
  magenta: {
    iconBg: "bg-magenta/10",
    iconHoverBg: "group-hover:bg-magenta",
    iconText: "text-magenta",
    border: "hover:border-magenta/30",
    link: "text-magenta",
    topBar: "bg-magenta",
  },
  yellow: {
    iconBg: "bg-yellow/10",
    iconHoverBg: "group-hover:bg-yellow",
    iconText: "text-yellow",
    border: "hover:border-yellow/30",
    link: "text-yellow",
    topBar: "bg-yellow",
  },
} as const;

const differentials = [
  { icon: Award, title: "Qualidade Premium", desc: "Equipamentos de última geração e materiais de primeira linha." },
  { icon: Clock, title: "Entrega Rápida", desc: "Prazos que respeitam a urgência do seu negócio." },
  { icon: DollarSign, title: "Preço Justo", desc: "Melhor custo-benefício sem comprometer a qualidade." },
];

const testimonials = [
  { name: "Ana Clara", role: "Empresária", text: "Qualidade excepcional! Meus cartões de visita ficaram perfeitos. Recomendo a todos.", rating: 5 },
  { name: "Carlos Silva", role: "Restaurante Sabor & Arte", text: "Banners lindos e entrega no prazo. A melhor gráfica da região, sem dúvida.", rating: 5 },
  { name: "Maria Fernanda", role: "Loja Bella Moda", text: "Adesivos de vinil de altíssima qualidade. Atendimento nota 10!", rating: 5 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-overlay)" }} />
        <div className="container mx-auto px-4 relative z-10 py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-6 border border-accent/30">
              Sua Gráfica de Confiança
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Impressões que{" "}
              <span className="text-gradient">destacam</span>{" "}
              seu negócio
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              Papel, lona e adesivos com qualidade profissional, preço justo e entrega rápida. Transforme suas ideias em impressões impactantes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5587988175564?text=Olá! Gostaria de solicitar um orçamento."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-accent-gradient text-accent-foreground shadow-button hover:opacity-90 font-semibold text-base px-8">
                  <Phone className="w-5 h-5 mr-2" />
                  Solicitar Orçamento
                </Button>
              </a>
              <Link to="/catalogo">
                <Button size="lg" variant="outline" className="border-accent bg-white/10 text-accent hover:bg-accent hover:text-accent-foreground font-semibold text-base px-8 backdrop-blur-sm">
                  Ver Catálogo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Nossos Serviços</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
              Soluções completas em impressão
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
              >
                <Link
                  to={s.link}
                  className={`block bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group border border-border ${serviceColors[s.color].border}`}
                >
                  <div className={`h-1.5 ${serviceColors[s.color].topBar}`} />
                  <div className="p-8">
                    <div className={`w-14 h-14 rounded-xl ${serviceColors[s.color].iconBg} flex items-center justify-center mb-5 ${serviceColors[s.color].iconHoverBg} transition-all duration-300`}>
                      <s.icon className={`w-7 h-7 ${serviceColors[s.color].iconText} group-hover:text-white transition-colors`} />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-foreground mb-2">{s.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                    <span className={`${serviceColors[s.color].link} text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all`}>
                      Saiba mais <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Por que nos escolher</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
              Nossos diferenciais
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {differentials.map((d, i) => (
              <motion.div
                key={d.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent-gradient flex items-center justify-center mx-auto mb-5 shadow-button">
                  <d.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-2">{d.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Depoimentos</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
              O que nossos clientes dizem
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => {
              const colors = ["bg-cyan", "bg-magenta", "bg-yellow"];
              const starColors = ["text-cyan fill-cyan", "text-magenta fill-magenta", "text-yellow fill-yellow"];
              return (
                <motion.div
                  key={t.name}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeUp}
                  className="bg-card rounded-xl overflow-hidden shadow-card border border-border"
                >
                  <div className={`h-1.5 ${colors[i % 3]}`} />
                  <div className="p-8">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className={`w-4 h-4 ${starColors[i % 3]}`} />
                      ))}
                    </div>
                    <p className="text-foreground text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                    <div>
                      <p className="font-heading font-semibold text-foreground">{t.name}</p>
                      <p className="text-muted-foreground text-xs">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-hero">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Pronto para transformar suas ideias em impressões?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">
              Entre em contato agora e receba seu orçamento em minutos. Atendimento personalizado via WhatsApp.
            </p>
            <a
              href="https://wa.me/5587988175564?text=Olá! Gostaria de solicitar um orçamento."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-accent-gradient text-accent-foreground shadow-button hover:opacity-90 font-semibold text-lg px-10">
                <Phone className="w-5 h-5 mr-2" />
                Fale Conosco
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;
