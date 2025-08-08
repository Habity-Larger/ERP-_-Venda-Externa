import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Eye, Gift } from "lucide-react";

const mockVendas = [
  {
    id: 1,
    cliente: "João Silva",
    data: "2024-01-20",
    total: 1299.99,
    cashback: 64.99,
    produtos: 1,
    status: "concluida"
  },
  {
    id: 2,
    cliente: "Maria Santos",
    data: "2024-01-19",
    total: 899.99,
    cashback: 44.99,
    produtos: 1,
    status: "concluida"
  },
  {
    id: 3,
    cliente: "Pedro Costa",
    data: "2024-01-18",
    total: 2499.99,
    cashback: 124.99,
    produtos: 2,
    status: "pendente"
  }
];

export function VendasList() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredVendas = mockVendas.filter(venda =>
    venda.cliente.toLowerCase().includes(searchTerm.toLowerCase()) ||
    venda.id.toString().includes(searchTerm)
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Vendas</h2>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Nova Venda
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Vendas Hoje</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">47</div>
            <p className="text-xs text-success">+12% em relação a ontem</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ticket Médio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-secondary">R$ 187,50</div>
            <p className="text-xs text-success">+5.2% este mês</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cashback Gerado</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">R$ 234,97</div>
            <p className="text-xs text-muted-foreground">Hoje</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Buscar vendas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredVendas.map((venda) => (
              <div key={venda.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold">Venda #{venda.id}</h3>
                    <Badge variant={venda.status === 'concluida' ? 'default' : 'secondary'}>
                      {venda.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Cliente: {venda.cliente}</p>
                  <p className="text-sm text-muted-foreground">Data: {new Date(venda.data).toLocaleDateString('pt-BR')}</p>
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Produtos</p>
                  <p className="font-semibold">{venda.produtos}</p>
                </div>
                
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Total</p>
                  <p className="font-semibold text-primary">R$ {venda.total.toFixed(2)}</p>
                </div>

                <div className="text-right">
                  <p className="text-sm text-muted-foreground flex items-center gap-1 justify-end">
                    <Gift className="h-3 w-3" />
                    Cashback
                  </p>
                  <p className="font-semibold text-warning">R$ {venda.cashback.toFixed(2)}</p>
                </div>

                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4" />
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