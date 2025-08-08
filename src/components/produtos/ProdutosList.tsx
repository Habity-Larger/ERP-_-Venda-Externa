import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Edit, Package } from "lucide-react";

const mockProdutos = [
  {
    id: 1,
    nome: "Smartphone Samsung Galaxy",
    codigo: "TECH001",
    categoria: "Eletrônicos",
    estoque: 25,
    preco: 1299.99,
    custo: 899.90,
    status: "ativo"
  },
  {
    id: 2,
    nome: "Notebook Dell Inspiron",
    codigo: "TECH002", 
    categoria: "Eletrônicos",
    estoque: 8,
    preco: 2499.99,
    custo: 1899.90,
    status: "ativo"
  },
  {
    id: 3,
    nome: "Cadeira Gamer",
    codigo: "MOV001",
    categoria: "Móveis",
    estoque: 0,
    preco: 899.99,
    custo: 599.90,
    status: "inativo"
  }
];

export function ProdutosList() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProdutos = mockProdutos.filter(produto =>
    produto.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    produto.codigo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    produto.categoria.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Produtos</h2>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Novo Produto
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Buscar produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredProdutos.map((produto) => (
              <div key={produto.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-muted rounded-lg flex items-center justify-center">
                    <Package className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold">{produto.nome}</h3>
                      <Badge variant={produto.status === 'ativo' ? 'default' : 'secondary'}>
                        {produto.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Código: {produto.codigo}</p>
                    <p className="text-sm text-muted-foreground">Categoria: {produto.categoria}</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Estoque</p>
                  <p className={`font-semibold ${produto.estoque === 0 ? 'text-destructive' : produto.estoque < 10 ? 'text-warning' : 'text-success'}`}>
                    {produto.estoque} unidades
                  </p>
                </div>
                
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Preço de Venda</p>
                  <p className="font-semibold text-primary">R$ {produto.preco.toFixed(2)}</p>
                </div>

                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Custo</p>
                  <p className="font-semibold">R$ {produto.custo.toFixed(2)}</p>
                </div>

                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}