import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";
import logoPreta from "@/assets/logo-preta.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logoPreta} alt="Gráfica Timótio" className="h-10 w-auto object-contain brightness-0 invert" />
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Qualidade, agilidade e preço justo em impressão de papel, lona, adesivos e brindes. Sua gráfica de confiança.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-base mb-4">Links Rápidos</h4>
            <nav className="flex flex-col gap-2">
              {[
              { label: "Início", href: "/" },
              { label: "Serviços", href: "/servicos" },
              { label: "Catálogo", href: "/catalogo" },
              { label: "Sobre Nós", href: "/sobre" },
              { label: "Contato", href: "/contato" }].
              map((item) =>
              <Link
                key={item.href}
                to={item.href}
                className="text-primary-foreground/70 hover:text-accent text-sm transition-colors">

                  {item.label}
                </Link>
              )}
            </nav>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-base mb-4">Serviços</h4>
            <nav className="flex flex-col gap-2">
              {["Cartões de Visita", "Banners e Faixas", "Adesivos e Vinil", "Flyers e Folders", "Brindes", "Personalizados", "Convites"].map(
                (item) =>
                <span key={item} className="text-primary-foreground/70 text-sm">
                    {item}
                  </span>

              )}
            </nav>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-base mb-4">Contato</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <span>Av. São Miguel, 646 - Boa Vista, Garanhuns - PE</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span>(87)98817-5564
(87)98834-1771</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <span>graficatimotio@outlook.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Clock className="w-4 h-4 text-accent shrink-0" />
                <span>Segunda - Sexta: 8h às 17h</span>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <a href="https://www.instagram.com/graficatimotio/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-4 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} Gráfica Timótio. Todos os direitos reservados.
        </div>
      </div>
    </footer>);
};

export default Footer;