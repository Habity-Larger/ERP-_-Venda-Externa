import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, Download, Calendar, Filter, BarChart3 } from "lucide-react";
import { useState } from "react";

const mockRelatorioVendas = [
  { periodo: "Janeiro 2024", vendas: 347, faturamento: 45231.89, cashback: 2261.59 },
  { periodo: "Dezembro 2023", vendas: 298, faturamento: 38921.45, cashback: 1946.07 },
  { periodo: "Novembro 2023", vendas: 312, faturamento: 41567.23, cashback: 2078.36 }
];

const mockRelatorioProdutos = [
  { produto: "Smartphone Samsung", vendidos: 45, faturamento: 58495.55, estoque: 25 },
  { produto: "Notebook Dell", vendidos: 12, faturamento: 29999.88, estoque: 8 },
  { produto: "Cadeira Gamer", vendidos: 23, faturamento: 20699.77, estoque: 0 }
];

export function RelatoriosDashboard() {
  const [activeTab, setActiveTab] = useState("vendas");
  const [periodoInicio, setPeriodoInicio] = useState("");
  const [periodoFim, setPeriodoFim] = useState("");
  const [tipoRelatorio, setTipoRelatorio] = useState("");

  const renderFiltros = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Filter className="h-5 w-5" />
          Filtros de Relatório
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-2">
            <Label htmlFor="periodo-inicio">Data Início</Label>
            <Input
              id="periodo-inicio"
              type="date"
              value={periodoInicio}
              onChange={(e) => setPeriodoInicio(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="periodo-fim">Data Fim</Label>
            <Input
              id="periodo-fim"
              type="date"
              value={periodoFim}
              onChange={(e) => setPeriodoFim(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>Tipo de Relatório</Label>
            <Select value={tipoRelatorio} onValueChange={setTipoRelatorio}>
              <SelectTrigger>
                <SelectValue placeholder="Selecionar tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="detalhado">Detalhado</SelectItem>
                <SelectItem value="resumido">Resumido</SelectItem>
                <SelectItem value="analitico">Analítico</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-end">
            <Button className="w-full gap-2">
              <BarChart3 className="h-4 w-4" />
              Gerar Relatório
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderRelatorioVendas = () => (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Relatório de Vendas</CardTitle>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Exportar PDF
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">957</div>
                  <p className="text-sm text-muted-foreground">Total de Vendas</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-success">R$ 125.720,57</div>
                  <p className="text-sm text-muted-foreground">Faturamento Total</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-warning">R$ 6.286,02</div>
                  <p className="text-sm text-muted-foreground">Cashback Distribuído</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="border rounded-lg">
            <div className="grid grid-cols-4 gap-4 p-4 border-b bg-muted/50 font-semibold">
              <div>Período</div>
              <div>Vendas</div>
              <div>Faturamento</div>
              <div>Cashback</div>
            </div>
            {mockRelatorioVendas.map((item, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 p-4 border-b last:border-b-0">
                <div>{item.periodo}</div>
                <div>{item.vendas}</div>
                <div className="text-success font-semibold">R$ {item.faturamento.toFixed(2)}</div>
                <div className="text-warning font-semibold">R$ {item.cashback.toFixed(2)}</div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderRelatorioProdutos = () => (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Relatório de Produtos</CardTitle>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Exportar Excel
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="border rounded-lg">
          <div className="grid grid-cols-4 gap-4 p-4 border-b bg-muted/50 font-semibold">
            <div>Produto</div>
            <div>Unidades Vendidas</div>
            <div>Faturamento</div>
            <div>Estoque Atual</div>
          </div>
          {mockRelatorioProdutos.map((item, index) => (
            <div key={index} className="grid grid-cols-4 gap-4 p-4 border-b last:border-b-0">
              <div>{item.produto}</div>
              <div>{item.vendidos}</div>
              <div className="text-primary font-semibold">R$ {item.faturamento.toFixed(2)}</div>
              <div className={`font-semibold ${item.estoque === 0 ? 'text-destructive' : item.estoque < 10 ? 'text-warning' : 'text-success'}`}>
                {item.estoque}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const renderRelatorioFinanceiro = () => (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Relatório Financeiro</CardTitle>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Exportar PDF
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-success">R$ 125.720,57</div>
                  <p className="text-sm text-muted-foreground">Total de Receitas</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-destructive">R$ 18.980,95</div>
                  <p className="text-sm text-muted-foreground">Total de Despesas</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">R$ 106.739,62</div>
                <p className="text-sm text-muted-foreground">Lucro Líquido</p>
                <p className="text-xs text-success">Margem de 84.9%</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Relatórios</h2>
      </div>

      {renderFiltros()}

      <div className="flex gap-2">
        <Button 
          variant={activeTab === "vendas" ? "default" : "outline"}
          onClick={() => setActiveTab("vendas")}
        >
          <BarChart3 className="h-4 w-4 mr-2" />
          Vendas
        </Button>
        <Button 
          variant={activeTab === "produtos" ? "default" : "outline"}
          onClick={() => setActiveTab("produtos")}
        >
          <FileText className="h-4 w-4 mr-2" />
          Produtos
        </Button>
        <Button 
          variant={activeTab === "financeiro" ? "default" : "outline"}
          onClick={() => setActiveTab("financeiro")}
        >
          <Calendar className="h-4 w-4 mr-2" />
          Financeiro
        </Button>
      </div>

      {activeTab === "vendas" && renderRelatorioVendas()}
      {activeTab === "produtos" && renderRelatorioProdutos()}
      {activeTab === "financeiro" && renderRelatorioFinanceiro()}
    </div>
  );
}