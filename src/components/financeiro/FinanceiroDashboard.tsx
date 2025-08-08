import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, DollarSign, TrendingUp, TrendingDown, Calendar } from "lucide-react";
import { useState } from "react";

const mockContasPagar = [
  {
    id: 1,
    fornecedor: "Distribuidora Tech",
    descricao: "Produtos eletrônicos",
    valor: 15750.00,
    vencimento: "2024-01-25",
    status: "pendente"
  },
  {
    id: 2,
    fornecedor: "Office Solutions",
    descricao: "Material de escritório",
    valor: 2340.50,
    vencimento: "2024-01-22",
    status: "vencida"
  },
  {
    id: 3,
    fornecedor: "Energia Elétrica",
    descricao: "Conta de luz",
    valor: 890.45,
    vencimento: "2024-01-28",
    status: "pendente"
  }
];

const mockContasReceber = [
  {
    id: 1,
    cliente: "João Silva",
    descricao: "Venda #001",
    valor: 1299.99,
    vencimento: "2024-01-30",
    status: "pendente"
  },
  {
    id: 2,
    cliente: "Maria Santos",
    descricao: "Venda #002",
    valor: 899.99,
    vencimento: "2024-01-27",
    status: "recebida"
  }
];

export function FinanceiroDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const totalPagar = mockContasPagar.reduce((acc, conta) => acc + conta.valor, 0);
  const totalReceber = mockContasReceber.filter(c => c.status === "pendente").reduce((acc, conta) => acc + conta.valor, 0);
  const fluxoCaixa = totalReceber - totalPagar;

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Contas a Pagar</CardTitle>
            <TrendingDown className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">R$ {totalPagar.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">3 contas pendentes</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Contas a Receber</CardTitle>
            <TrendingUp className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">R$ {totalReceber.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">1 conta pendente</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Fluxo de Caixa</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${fluxoCaixa >= 0 ? 'text-success' : 'text-destructive'}`}>
              R$ {fluxoCaixa.toFixed(2)}
            </div>
            <p className="text-xs text-muted-foreground">Projeção 30 dias</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Saldo em Caixa</CardTitle>
            <DollarSign className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">R$ 23.456,78</div>
            <p className="text-xs text-success">+12.5% este mês</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderContasPagar = () => (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Contas a Pagar</CardTitle>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Nova Conta
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockContasPagar.map((conta) => (
            <div key={conta.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex-1">
                <h3 className="font-semibold">{conta.fornecedor}</h3>
                <p className="text-sm text-muted-foreground">{conta.descricao}</p>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Vencimento</p>
                <p className="font-semibold">{new Date(conta.vencimento).toLocaleDateString('pt-BR')}</p>
              </div>
              
              <div className="text-right">
                <p className="font-semibold text-destructive">R$ {conta.valor.toFixed(2)}</p>
                <Badge variant={conta.status === 'vencida' ? 'destructive' : 'secondary'}>
                  {conta.status}
                </Badge>
              </div>

              <Button variant="outline" size="sm">
                Pagar
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const renderContasReceber = () => (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Contas a Receber</CardTitle>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Nova Conta
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockContasReceber.map((conta) => (
            <div key={conta.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex-1">
                <h3 className="font-semibold">{conta.cliente}</h3>
                <p className="text-sm text-muted-foreground">{conta.descricao}</p>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Vencimento</p>
                <p className="font-semibold">{new Date(conta.vencimento).toLocaleDateString('pt-BR')}</p>
              </div>
              
              <div className="text-right">
                <p className="font-semibold text-success">R$ {conta.valor.toFixed(2)}</p>
                <Badge variant={conta.status === 'recebida' ? 'default' : 'secondary'}>
                  {conta.status}
                </Badge>
              </div>

              {conta.status === 'pendente' && (
                <Button variant="outline" size="sm">
                  Receber
                </Button>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Financeiro</h2>
      </div>

      <div className="flex gap-2">
        <Button 
          variant={activeTab === "dashboard" ? "default" : "outline"}
          onClick={() => setActiveTab("dashboard")}
        >
          Dashboard
        </Button>
        <Button 
          variant={activeTab === "pagar" ? "default" : "outline"}
          onClick={() => setActiveTab("pagar")}
        >
          Contas a Pagar
        </Button>
        <Button 
          variant={activeTab === "receber" ? "default" : "outline"}
          onClick={() => setActiveTab("receber")}
        >
          Contas a Receber
        </Button>
      </div>

      {activeTab === "dashboard" && renderDashboard()}
      {activeTab === "pagar" && renderContasPagar()}
      {activeTab === "receber" && renderContasReceber()}
    </div>
  );
}