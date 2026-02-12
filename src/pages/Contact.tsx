import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  { icon: MapPin, label: "Endereço", value: "Av. São Miguel, 646 - Boa Vista, Garanhuns - PE", color: "cyan" },
  { icon: Phone, label: "Telefone", value: "(87) 98817-5564 / (87) 98834-1771", color: "magenta" },
  { icon: Mail, label: "E-mail", value: "graficatimotio@outlook.com", color: "yellow" },
  { icon: Clock, label: "Horário", value: "Segunda - Sexta: 8h às 17h", color: "cyan" },
];

const Contact = () => {
  return (
    <main className="pt-20">
      <section className="bg-hero py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Contato</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mt-2 mb-4">
              Fale Conosco
            </h1>
            <p className="text-primary-foreground/70 text-lg max-w-xl">
              Estamos prontos para atender você. Entre em contato pelo meio que preferir.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-heading text-2xl font-bold text-foreground mb-8">Informações de Contato</h2>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                      info.color === "cyan" ? "bg-cyan/10" : info.color === "magenta" ? "bg-magenta/10" : "bg-yellow/10"
                    }`}>
                      <info.icon className={`w-5 h-5 ${
                        info.color === "cyan" ? "text-cyan" : info.color === "magenta" ? "text-magenta" : "text-yellow"
                      }`} />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-foreground text-sm">{info.label}</p>
                      <p className="text-muted-foreground text-sm">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href="https://wa.me/5587988175564?text=Olá! Gostaria de mais informações."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-accent-gradient text-accent-foreground shadow-button hover:opacity-90 font-semibold">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Conversar no WhatsApp
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-heading text-2xl font-bold text-foreground mb-8">Nossa Localização</h2>
              <div className="rounded-xl overflow-hidden shadow-card border border-border h-80">
                <iframe
                  title="Localização Gráfica Timótio"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.5!2d-36.4934!3d-8.8908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAv.+S%C3%A3o+Miguel%2C+646+-+Boa+Vista%2C+Garanhuns+-+PE!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
