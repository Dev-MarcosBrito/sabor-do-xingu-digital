import { Music, Calendar, Bike, Wifi, ParkingCircle, PartyPopper } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Features = () => {
  const features = [
    {
      icon: Music,
      title: "Música Ao Vivo",
      description: "Sextas e sábados das 20h à 00h com samba, MPB e música regional"
    },
    {
      icon: Calendar,
      title: "Espaço para Eventos",
      description: "Organize aniversários, confraternizações e reuniões para até 50 pessoas"
    },
    {
      icon: Bike,
      title: "Pet Friendly",
      description: "Traga seu pet! Animais de pequeno porte são bem-vindos na área externa"
    },
    {
      icon: Wifi,
      title: "Wi-Fi Gratuito",
      description: "Conexão de internet disponível para todos os clientes"
    },
    {
      icon: ParkingCircle,
      title: "Estacionamento Próprio",
      description: "Capacidade para 20 veículos com segurança"
    },
    {
      icon: PartyPopper,
      title: "Promoções Semanais",
      description: "Terça: Chopp em dobro | Quinta: Noite do hambúrguer | Domingo: 20% off sobremesas"
    }
  ];

  return (
    <section id="diferenciais" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Nossos Diferenciais
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mais do que comida deliciosa, oferecemos experiências completas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, idx) => (
            <Card 
              key={idx} 
              className="bg-card border-border hover:border-primary/50 transition-all hover:scale-105 animate-fade-in-up group"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <CardContent className="p-6">
                <feature.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border">
          <h3 className="text-2xl font-bold text-center mb-6 text-foreground">Horário de Funcionamento</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-border/50">
                <span className="text-foreground/80">Segunda a Quinta</span>
                <span className="text-primary font-semibold">11h às 23h</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border/50">
                <span className="text-foreground/80">Sexta e Sábado</span>
                <span className="text-primary font-semibold">11h à 01h</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-border/50">
                <span className="text-foreground/80">Domingo</span>
                <span className="text-primary font-semibold">11h às 22h</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border/50">
                <span className="text-foreground/80">Delivery</span>
                <span className="text-primary font-semibold">11h às 22h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
