import { motion } from "framer-motion";
import { FileText, Image, Sticker, ChevronRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    icon: FileText,
    title: "Impressão em Papel",
    color: "cyan",
    items: [
      { name: "Cartões de Visita", desc: "Diversos tamanhos e acabamentos: verniz, laminação fosca ou brilho, corte especial." },
      { name: "Flyers e Panfletos", desc: "Impressão em alta qualidade para divulgação de eventos, promoções e campanhas." },
      { name: "Folders", desc: "2, 3 ou mais dobras. Ideal para apresentações e cardápios." },
      { name: "Convites", desc: "Casamentos, aniversários, formaturas. Papel especial e acabamento refinado." },
      { name: "Blocos e Receituários", desc: "Impressão personalizada com numeração e logo." },
    ],
  },
  {
    icon: Image,
    title: "Brindes promocionais e corporativos",
    color: "magenta",
    items: [
      { name: "Canecas", desc: "Canecas personalizadas com impressão de alta qualidade, ideais para brindes corporativos e datas comemorativas." },
      { name: "Squeeze", desc: "Squeeze personalizados resistentes e práticos, perfeitos para eventos, academias e ações promocionais." },
      { name: "Bottons", desc: "Bottons personalizados com excelente acabamento, ideais para campanhas, eventos e divulgação de marca." },
      { name: "Caneta", desc: "Canetas personalizadas para fortalecer sua marca no dia a dia de clientes e colaboradores." },
      { name: "Agenda", desc: "Agendas personalizadas com acabamento profissional, ideais para brindes empresariais e organização corporativa." },
      { name: "Copos", desc: "Copos personalizados para festas, eventos e ações promocionais, com impressão durável e cores vibrantes." },
    ],
  },
  {
    icon: Image,
    title: "Lona e Banners",
    color: "yellow",
    items: [
      { name: "Banners", desc: "Impressão em lona com acabamento em bastão ou ilhós. Diversos tamanhos." },
      { name: "Faixas", desc: "Lona resistente para eventos, inaugurações e promoções." },
      { name: "Outdoors", desc: "Impressão em grande formato com alta resolução e cores vibrantes." },
      { name: "Backdrops", desc: "Painéis para eventos, estandes e cenários fotográficos." },
    ],
  },
  {
    icon: Sticker,
    title: "Adesivos e Vinil",
    color: "cyan",
    items: [
      { name: "Etiquetas Adesivas", desc: "Para produtos, embalagens e identificação. Diversos formatos." },
      { name: "Recorte em Vinil", desc: "Letras, logos e formas recortadas em vinil adesivo de alta durabilidade." },
      { name: "Adesivos Personalizados", desc: "Qualquer formato, transparente, fosco ou brilho." },
      { name: "Placas em PS (Poliestireno)", desc: "Placas em PS para identicação e sinalização. Diversos formatos." },
    ],
  },
];

const categoryColors = {
  cyan: {
    iconBg: "bg-cyan/10",
    iconText: "text-cyan",
    topBar: "bg-cyan",
    cardBorder: "hover:border-cyan/30",
    link: "text-cyan",
  },
  magenta: {
    iconBg: "bg-magenta/10",
    iconText: "text-magenta",
    topBar: "bg-magenta",
    cardBorder: "hover:border-magenta/30",
    link: "text-magenta",
  },
  yellow: {
    iconBg: "bg-yellow/10",
    iconText: "text-yellow",
    topBar: "bg-yellow",
    cardBorder: "hover:border-yellow/30",
    link: "text-yellow",
  },
} as const;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

const Services = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-hero py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Serviços</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mt-2 mb-4">
              Nossos Serviços
            </h1>
            <p className="text-primary-foreground/70 text-lg max-w-xl">
              Conheça todas as soluções que oferecemos para destacar seu negócio com impressões de alta qualidade.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 space-y-16">
          {categories.map((cat, ci) => {
            const colors = categoryColors[cat.color as keyof typeof categoryColors];
            return (
              <motion.div
                key={cat.title}
                custom={ci}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colors.iconBg}`}>
                    <cat.icon className={`w-6 h-6 ${colors.iconText}`} />
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">{cat.title}</h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {cat.items.map((item, i) => (
                    <motion.div
                      key={item.name}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp}
                      className={`bg-card rounded-xl overflow-hidden shadow-card border border-border hover:shadow-card-hover ${colors.cardBorder} transition-all duration-300 group`}
                    >
                      <div className={`h-1.5 ${colors.topBar}`} />
                      <div className="p-6">
                        <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{item.name}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.desc}</p>
                        <a
                          href={`https://wa.me/5587988175564?text=Olá! Gostaria de um orçamento para: ${item.name}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${colors.link} text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all`}
                        >
                          Solicitar Orçamento <ChevronRight className="w-4 h-4" />
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Não encontrou o que procura?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Entre em contato e faremos um orçamento personalizado para sua necessidade.
          </p>
          <a
            href="https://wa.me/5587988175564?text=Olá! Preciso de um serviço personalizado."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-accent-gradient text-accent-foreground shadow-button hover:opacity-90 font-semibold">
              <Phone className="w-4 h-4 mr-2" />
              Falar com Especialista
            </Button>
          </a>
        </div>
      </section>
    </main>
  );
};

export default Services;