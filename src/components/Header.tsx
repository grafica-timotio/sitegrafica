import { useState, useEffect } from "react";
import logoColorida from "@/assets/logo-colorida.png";
import logoPreta from "@/assets/logo-preta.png";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
{ label: "Início", href: "/" },
{ label: "Serviços", href: "/servicos" },
{ label: "Catálogo", href: "/catalogo" },
{ label: "Sobre", href: "/sobre" },
{ label: "Contato", href: "/contato" }];


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  // On non-home pages, always show solid header
  const showSolid = scrolled || !isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      showSolid ?
      "bg-card/95 backdrop-blur-md shadow-card border-b border-border" :
      "bg-transparent"}`
      }>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src={showSolid ? logoColorida : logoPreta} 
              alt="Gráfica Timótio" 
              className={`h-10 md:h-12 w-auto object-contain transition-all duration-300 ${!showSolid ? "brightness-0 invert" : ""}`}
            />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) =>
            <Link
              key={item.href}
              to={item.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              location.pathname === item.href ?
              "bg-accent text-accent-foreground" :
              showSolid ?
              "text-foreground hover:bg-secondary" :
              "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"}`
              }>

                {item.label}
              </Link>
            )}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/5587988175564?text=Olá! Gostaria de solicitar um orçamento."
              target="_blank"
              rel="noopener noreferrer">

              <Button className="bg-accent-gradient text-accent-foreground shadow-button hover:opacity-90 font-semibold">
                <Phone className="w-4 h-4 mr-2" />
                Orçamento
              </Button>
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg ${showSolid ? "text-foreground" : "text-primary-foreground"}`}>

            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen &&
      <div className="md:hidden bg-card border-t border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) =>
          <Link
            key={item.href}
            to={item.href}
            className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
            location.pathname === item.href ?
            "bg-accent text-accent-foreground" :
            "text-foreground hover:bg-secondary"}`
            }>

                {item.label}
              </Link>
          )}
            <a
            href="https://wa.me/5587988175564?text=Olá! Gostaria de solicitar um orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2">

              <Button className="w-full bg-accent-gradient text-accent-foreground shadow-button font-semibold">
                <Phone className="w-4 h-4 mr-2" />
                Solicitar Orçamento
              </Button>
            </a>
          </nav>
        </div>
      }
    </header>);

};

export default Header;