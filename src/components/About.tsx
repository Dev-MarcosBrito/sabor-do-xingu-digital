import { Users, Award, Heart } from "lucide-react";

export const About = () => {
  return (
    <section id="sobre" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Sobre Nós
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="animate-fade-in-up">
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                O <span className="text-primary font-semibold">Sabor do Xingu</span> nasceu da paixão pela culinária amazônica e do desejo de criar um espaço acolhedor onde família e amigos possam se reunir.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Localizado no coração de Altamira, oferecemos uma experiência gastronômica única, combinando pratos tradicionais da região com um ambiente moderno e confortável.
              </p>
            </div>
            
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Com capacidade para 80 pessoas, nosso espaço conta com salão climatizado e área externa, perfeita para quem gosta de estar ao ar livre.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Às sextas e sábados, você ainda pode aproveitar música ao vivo com o melhor do samba, MPB e música regional.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all hover:scale-105 animate-fade-in-up">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Gestão Familiar</h3>
              <p className="text-foreground/70">
                Gerido por 3 sócios dedicados que cuidam de cada detalhe com amor
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all hover:scale-105 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <Award className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Qualidade</h3>
              <p className="text-foreground/70">
                Ingredientes frescos e regionais preparados por nossa chef especializada
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all hover:scale-105 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Heart className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Ambiente Acolhedor</h3>
              <p className="text-foreground/70">
                Decoração regional amazônica que faz você se sentir em casa
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
