import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";

const values = [
  { icon: Target, title: "Missão", desc: "Entregar impressões de alta qualidade com preço justo, agilidade e atendimento humano, ajudando nossos clientes a crescerem.", color: "cyan" },
  { icon: Eye, title: "Visão", desc: "Ser a gráfica mais confiável e acessível da região, referência em qualidade e atendimento personalizado.", color: "magenta" },
  { icon: Heart, title: "Valores", desc: "Compromisso, transparência, qualidade, respeito ao cliente e inovação constante nos nossos processos.", color: "yellow" },
];

const valueColors = {
  cyan: { iconBg: "bg-cyan", shadow: "shadow-[0_4px_12px_-2px_hsl(195_100%_45%/0.4)]" },
  magenta: { iconBg: "bg-magenta", shadow: "shadow-[0_4px_12px_-2px_hsl(330_100%_45%/0.4)]" },
  yellow: { iconBg: "bg-yellow", shadow: "shadow-[0_4px_12px_-2px_hsl(50_100%_55%/0.4)]" },
} as const;

const About = () => {
  return (
    <main className="pt-20">
      <section className="bg-hero py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Sobre</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mt-2 mb-4">
              Sobre a Gráfica Timótio
            </h1>
            <p className="text-primary-foreground/70 text-lg max-w-xl">
              Conheça nossa história e o que nos motiva a oferecer o melhor para você.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">Nossa História</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A Gráfica Timótio nasceu da paixão pela arte da impressão. Começamos como uma pequena gráfica de bairro e, com dedicação e compromisso com a qualidade, nos tornamos referência em impressão de papel, lona e adesivos na região de Garanhuns.
                </p>
                <p>
                  Investimos constantemente em equipamentos modernos e na capacitação da nossa equipe para oferecer a você o melhor resultado possível. Cada projeto é tratado com atenção e cuidado, independente do tamanho.
                </p>
                <p>
                  Nosso diferencial é o atendimento próximo e personalizado. Entendemos que cada cliente tem uma necessidade única, e trabalhamos para entregar exatamente o que você precisa, no prazo e com a qualidade que você merece.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => {
              const colors = valueColors[v.color as keyof typeof valueColors];
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className={`w-16 h-16 rounded-2xl ${colors.iconBg} flex items-center justify-center mx-auto mb-5 ${colors.shadow}`}>
                    <v.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-3">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;