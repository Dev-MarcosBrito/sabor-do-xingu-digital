import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UtensilsCrossed, Coffee, Wine, IceCream } from "lucide-react";

export const Menu = () => {
  const menuCategories = [
    {
      icon: UtensilsCrossed,
      title: "Pratos Principais",
      items: [
        { name: "Filé de Tambaqui Grelhado", price: "R$ 42,00", highlight: true },
        { name: "Picanha na Chapa", price: "R$ 65,00", highlight: true },
        { name: "Moqueca de Camarão (2 pessoas)", price: "R$ 78,00" },
        { name: "Peixe Assado na Brasa", price: "R$ 69,00" },
      ]
    },
    {
      icon: Coffee,
      title: "Petiscos",
      items: [
        { name: "Bolinho de Peixe da Região", price: "R$ 22,00" },
        { name: "Iscas de Carne", price: "R$ 28,00" },
        { name: "Tábua de Frios", price: "R$ 35,00" },
        { name: "Calabresa Acebolada", price: "R$ 26,00" },
      ]
    },
    {
      icon: Wine,
      title: "Bebidas",
      items: [
        { name: "Chopp Artesanal (300ml)", price: "R$ 12,00" },
        { name: "Caipirinha Tradicional", price: "R$ 18,00" },
        { name: "Drink Sabor do Xingu", price: "R$ 25,00", highlight: true },
        { name: "Suco Natural (Cupuaçu, Acerola)", price: "R$ 10,00" },
      ]
    },
    {
      icon: IceCream,
      title: "Sobremesas",
      items: [
        { name: "Mousse de Cupuaçu", price: "R$ 15,00", highlight: true },
        { name: "Brownie com Sorvete", price: "R$ 18,00" },
        { name: "Pudim de Leite Condensado", price: "R$ 12,00" },
        { name: "Sorvete Artesanal (2 bolas)", price: "R$ 14,00" },
      ]
    }
  ];

  return (
    <section id="cardapio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Nosso Cardápio
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos destaques do nosso cardápio, preparados com ingredientes frescos e muito carinho
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {menuCategories.map((category, idx) => (
            <Card 
              key={idx} 
              className="bg-card border-border hover:border-primary/50 transition-all hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <category.icon className="w-8 h-8 text-primary" />
                  <CardTitle className="text-2xl text-foreground">{category.title}</CardTitle>
                </div>
                <CardDescription className="text-foreground/60">
                  Seleção especial da casa
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex justify-between items-start group">
                      <div className="flex-1">
                        <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {item.name}
                          {item.highlight && (
                            <Badge variant="secondary" className="ml-2 bg-primary/20 text-primary border-none">
                              Destaque
                            </Badge>
                          )}
                        </p>
                      </div>
                      <span className="text-primary font-semibold ml-4">{item.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-foreground/80 mb-4">
            Este é apenas um resumo! Temos muito mais opções disponíveis.
          </p>
          <p className="text-primary font-semibold">
            Visite-nos e conheça o cardápio completo! 🍽️
          </p>
        </div>
      </div>
    </section>
  );
};
