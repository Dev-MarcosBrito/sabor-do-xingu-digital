import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Visite-nos
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos esperando por você! Venha nos conhecer e experimentar o melhor da culinária amazônica
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="space-y-6 animate-fade-in-up">
            <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Endereço</h3>
                  <p className="text-foreground/80">
                    Av. das Palmeiras, nº 1234 – Centro<br />
                    Altamira – PA<br />
                    CEP: 68371-000
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Telefones</h3>
                  <p className="text-foreground/80">
                    Fixo: (93) 4002-4580<br />
                    WhatsApp: (93) 98888-1122
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">E-mail</h3>
                  <p className="text-foreground/80">
                    atendimento@sabordoxingu.com.br
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-8 rounded-lg border border-primary/30">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Faça sua Reserva</h3>
              <p className="text-foreground/80 mb-6">
                Entre em contato conosco pelo WhatsApp ou telefone para garantir sua mesa, especialmente nos finais de semana com música ao vivo!
              </p>
              <div className="space-y-3">
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-[var(--shadow-warm)] hover:scale-105 transition-all"
                  size="lg"
                  onClick={() => window.open('https://wa.me/5593988881122', '_blank')}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Reservar via WhatsApp
                </Button>
                <Button 
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold hover:scale-105 transition-all"
                  size="lg"
                  onClick={() => window.location.href = 'tel:+559340024580'}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Ligar Agora
                </Button>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="font-semibold text-lg mb-4 text-foreground">Formas de Pagamento</h3>
              <p className="text-foreground/80">
                💳 Cartões de Crédito e Débito<br />
                📱 PIX<br />
                💵 Dinheiro
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-primary/10 border border-primary/30 rounded-lg p-6">
            <p className="text-foreground/90 text-lg">
              <span className="font-semibold text-primary">Acessibilidade:</span> Contamos com rampa de acesso e banheiro adaptado
            </p>
          </div>
        </div>
      </div>

      <footer className="mt-20 py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-foreground/60">
            © 2025 Sabor do Xingu - Bar e Restaurante. Todos os direitos reservados.
          </p>
          <p className="text-foreground/40 text-sm mt-2">
            Desenvolvido com ❤️ em Altamira - PA
          </p>
        </div>
      </footer>
    </section>
  );
};
