import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Phone, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number | null;
  description: string;
  specs: string;
};

const products: Product[] = [
  { id: 1, name: "100 Cartões de Visita", category: "Papel", price: 49.90, description: "Papel couchê 300g, 4x4 cores, laminação fosca.", specs: "9x5cm" },
  { id: 2, name: "1000 Flyers A5", category: "Papel", price: 129.90, description: "Papel couchê 150g, 4x0 cores, impressão frente.", specs: "15x21cm" },
  { id: 3, name: "500 Folders 2 Dobras", category: "Papel", price: 199.90, description: "Papel couchê 170g, 4x4 cores, 2 dobras paralelas.", specs: "A4 aberto" },
  { id: 4, name: "Banner 60x90cm", category: "Lona", price: 39.90, description: "Lona 440g, impressão digital, com bastão e corda.", specs: "60x90cm" },
  { id: 5, name: "Faixa 3m x 0,7m", category: "Lona", price: 89.90, description: "Lona resistente, acabamento com ilhós.", specs: "300x70cm" },
  { id: 6, name: "100 Adesivos Redondos", category: "Adesivos", price: 29.90, description: "Vinil adesivo brilho, recorte redondo.", specs: "5cm diâmetro" },
  { id: 7, name: "Recorte Vinil (m²)", category: "Adesivos", price: 79.90, description: "Vinil adesivo colorido, recorte eletrônico.", specs: "Por m²" },
  { id: 8, name: "Banner 1,2m x 0,7m", category: "Lona", price: 59.90, description: "Lona 440g com impressão em alta resolução.", specs: "120x70cm" },
  { id: 9, name: "Projeto Personalizado", category: "Personalizado", price: null, description: "Medidas, materiais e arte sob medida para seu projeto.", specs: "Sob consulta" },
];

const categories = ["Todos", "Papel", "Lona", "Adesivos", "Personalizado"];

const categoryColorMap: Record<string, string> = {
  Papel: "bg-cyan",
  Lona: "bg-magenta",
  Adesivos: "bg-yellow",
  Personalizado: "bg-brand-black",
};

const categoryBadgeMap: Record<string, string> = {
  Papel: "text-cyan",
  Lona: "text-magenta",
  Adesivos: "text-yellow",
  Personalizado: "text-muted-foreground",
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.4, ease: "easeOut" as const },
  }),
};

const Catalog = () => {
  const [filter, setFilter] = useState("Todos");

  const filtered = filter === "Todos" ? products : products.filter((p) => p.category === filter);

  const handleQuote = (product: Product) => {
    const msg = product.price
      ? `Olá! Gostaria de comprar: ${product.name} (R$ ${product.price.toFixed(2)})`
      : `Olá! Gostaria de um orçamento personalizado para: ${product.name}`;
    window.open(`https://wa.me/5587988175564?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <main className="pt-20">
      <section className="bg-hero py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Catálogo</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mt-2 mb-4">
              Nossos Produtos
            </h1>
            <p className="text-primary-foreground/70 text-lg max-w-xl">
              Produtos com preço fixo prontos para pedir, ou solicite um orçamento personalizado.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex items-center gap-2 flex-wrap mb-10">
            <Filter className="w-5 h-5 text-muted-foreground mr-1" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === cat
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card rounded-xl overflow-hidden shadow-card border border-border hover:shadow-card-hover transition-all duration-300 flex flex-col"
              >
                <div className={`h-1.5 ${categoryColorMap[p.category] || "bg-accent"}`} />
                <div className="bg-secondary p-6 flex items-center justify-center min-h-[100px]">
                  <div className="text-center">
                    <span className={`text-xs font-semibold uppercase tracking-wider ${categoryBadgeMap[p.category] || "text-muted-foreground"}`}>{p.category}</span>
                    <p className="text-muted-foreground text-xs mt-1">{p.specs}</p>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-heading font-bold text-lg text-foreground mb-1">{p.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{p.description}</p>
                  <div className="flex items-center justify-between">
                    {p.price ? (
                      <span className="font-heading font-bold text-2xl text-accent">
                        R$ {p.price.toFixed(2)}
                      </span>
                    ) : (
                      <span className="text-muted-foreground text-sm font-medium">Sob consulta</span>
                    )}
                    <Button
                      onClick={() => handleQuote(p)}
                      size="sm"
                      className={p.price ? "bg-accent-gradient text-accent-foreground shadow-button hover:opacity-90" : "bg-primary text-primary-foreground hover:opacity-90"}
                    >
                      {p.price ? (
                        <>
                          <ShoppingCart className="w-4 h-4 mr-1" /> Pedir
                        </>
                      ) : (
                        <>
                          <Phone className="w-4 h-4 mr-1" /> Orçamento
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Catalog;