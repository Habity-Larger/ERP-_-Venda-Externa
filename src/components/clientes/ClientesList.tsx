import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Edit, Eye } from "lucide-react";

const mockClientes = [
  {
    id: 1,
    nome: "João Silva",
    email: "joao@email.com",
    telefone: "(34) 99999-9999",
    cashback: 125.50,
    totalCompras: 2850.00,
    status: "ativo"
  },
  {
    id: 2,
    nome: "Maria Santos",
    email: "maria@email.com", 
    telefone: "(34) 88888-8888",
    cashback: 89.30,
    totalCompras: 1950.00,
    status: "ativo"
  },
  {
    id: 3,
    nome: "Pedro Costa",
    email: "pedro@email.com",
    telefone: "(34) 77777-7777",
    cashback: 0,
    totalCompras: 0,
    status: "inativo"
  }
];

export function ClientesList() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredClientes = mockClientes.filter(cliente =>
    cliente.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cliente.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Clientes</h2>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Novo Cliente
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Buscar clientes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredClientes.map((cliente) => (
              <div key={cliente.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold">{cliente.nome}</h3>
                    <Badge variant={cliente.status === 'ativo' ? 'default' : 'secondary'}>
                      {cliente.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{cliente.email}</p>
                  <p className="text-sm text-muted-foreground">{cliente.telefone}</p>
                </div>
                
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Cashback</p>
                  <p className="font-semibold text-warning">R$ {cliente.cashback.toFixed(2)}</p>
                </div>
                
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Total em Compras</p>
                  <p className="font-semibold">R$ {cliente.totalCompras.toFixed(2)}</p>
                </div>

                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
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