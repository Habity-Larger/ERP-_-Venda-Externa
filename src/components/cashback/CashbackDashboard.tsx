import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gift, TrendingUp, Users, DollarSign } from "lucide-react";

const mockCashbackData = [
  {
    cliente: "João Silva",
    saldoDisponivel: 125.50,
    totalAcumulado: 450.30,
    ultimaVenda: "2024-01-20"
  },
  {
    cliente: "Maria Santos", 
    saldoDisponivel: 89.30,
    totalAcumulado: 234.60,
    ultimaVenda: "2024-01-19"
  },
  {
    cliente: "Ana Costa",
    saldoDisponivel: 234.90,
    totalAcumulado: 1205.40,
    ultimaVenda: "2024-01-18"
  }
];

export function CashbackDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Cashback</h2>
        <Button className="gap-2" variant="secondary">
          <Gift className="h-4 w-4" />
          Configurar Cashback
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Distribuído</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">R$ 12.573,45</div>
            <p className="text-xs text-success">+8.2% este mês</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Saldo Disponível</CardTitle>
            <Gift className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">R$ 3.449,70</div>
            <p className="text-xs text-muted-foreground">Em 234 contas</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Clientes Ativos</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-secondary">234</div>
            <p className="text-xs text-success">+15 este mês</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taxa Atual</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5%</div>
            <p className="text-xs text-muted-foreground">Sobre vendas</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Maiores Saldos de Cashback</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockCashbackData.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Gift className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.cliente}</h3>
                    <p className="text-sm text-muted-foreground">
                      Última venda: {new Date(item.ultimaVenda).toLocaleDateString('pt-BR')}
                    </p>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Saldo Disponível</p>
                  <p className="font-semibold text-warning">R$ {item.saldoDisponivel.toFixed(2)}</p>
                </div>

                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Total Acumulado</p>
                  <p className="font-semibold">R$ {item.totalAcumulado.toFixed(2)}</p>
                </div>

                <Button variant="outline" size="sm">
                  Ver Histórico
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}