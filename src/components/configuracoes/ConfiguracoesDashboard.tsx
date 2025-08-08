import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Settings, Gift, Users, Bell, Database } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function ConfiguracoesDashboard() {
  const [activeTab, setActiveTab] = useState("geral");
  const [cashbackTaxa, setCashbackTaxa] = useState("5");
  const [notificacoes, setNotificacoes] = useState(true);
  const [backupAuto, setBackupAuto] = useState(true);
  const { toast } = useToast();

  const handleSalvar = () => {
    toast({
      title: "Configurações salvas",
      description: "As configurações foram atualizadas com sucesso.",
    });
  };

  const renderConfigGeral = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Configurações Gerais</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="nome-empresa">Nome da Empresa</Label>
              <Input id="nome-empresa" defaultValue="Habity" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="cnpj">CNPJ</Label>
              <Input id="cnpj" placeholder="00.000.000/0001-00" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="endereco">Endereço</Label>
            <Textarea id="endereco" placeholder="Endereço completo da empresa" />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="telefone">Telefone</Label>
              <Input id="telefone" placeholder="(34) 99999-9999" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" placeholder="contato@habity.com.br" />
            </div>
          </div>

          <Button onClick={handleSalvar} className="w-full md:w-auto">
            Salvar Configurações
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  const renderConfigCashback = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Gift className="h-5 w-5" />
            Configurações de Cashback
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="taxa-cashback">Taxa de Cashback (%)</Label>
              <Input 
                id="taxa-cashback" 
                type="number" 
                value={cashbackTaxa}
                onChange={(e) => setCashbackTaxa(e.target.value)}
                placeholder="5" 
              />
              <p className="text-xs text-muted-foreground">
                Porcentagem aplicada sobre o valor das vendas
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="valor-minimo">Valor Mínimo para Cashback</Label>
              <Input id="valor-minimo" type="number" placeholder="50.00" />
              <p className="text-xs text-muted-foreground">
                Valor mínimo da compra para gerar cashback
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="validade-cashback">Validade do Cashback (dias)</Label>
            <Input id="validade-cashback" type="number" placeholder="365" />
            <p className="text-xs text-muted-foreground">
              Número de dias que o cashback fica disponível
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <Switch id="cashback-ativo" defaultChecked />
            <Label htmlFor="cashback-ativo">Sistema de cashback ativo</Label>
          </div>

          <Button onClick={handleSalvar} className="w-full md:w-auto">
            Salvar Configurações de Cashback
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  const renderConfigUsuarios = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Gestão de Usuários
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h3 className="font-semibold">Admin</h3>
                <p className="text-sm text-muted-foreground">admin@habity.com.br</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-success">Ativo</span>
                <Button variant="outline" size="sm">Editar</Button>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h3 className="font-semibold">Vendedor</h3>
                <p className="text-sm text-muted-foreground">vendedor@habity.com.br</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-success">Ativo</span>
                <Button variant="outline" size="sm">Editar</Button>
              </div>
            </div>
          </div>

          <Button className="gap-2">
            <Users className="h-4 w-4" />
            Adicionar Usuário
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  const renderConfigSistema = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Configurações do Sistema
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="notificacoes">Notificações por E-mail</Label>
                <p className="text-xs text-muted-foreground">
                  Receber notificações sobre vendas e atualizações
                </p>
              </div>
              <Switch 
                id="notificacoes" 
                checked={notificacoes}
                onCheckedChange={setNotificacoes}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="backup-auto">Backup Automático</Label>
                <p className="text-xs text-muted-foreground">
                  Realizar backup diário dos dados
                </p>
              </div>
              <Switch 
                id="backup-auto" 
                checked={backupAuto}
                onCheckedChange={setBackupAuto}
              />
            </div>

            <div className="space-y-2">
              <Label>Fuso Horário</Label>
              <Select defaultValue="america-saopaulo">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="america-saopaulo">América/São Paulo</SelectItem>
                  <SelectItem value="america-manaus">América/Manaus</SelectItem>
                  <SelectItem value="america-brasilia">América/Brasília</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Moeda</Label>
              <Select defaultValue="brl">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="brl">Real Brasileiro (R$)</SelectItem>
                  <SelectItem value="usd">Dólar Americano (US$)</SelectItem>
                  <SelectItem value="eur">Euro (€)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button onClick={handleSalvar} className="w-full md:w-auto">
            Salvar Configurações do Sistema
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            Backup e Restauração
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Button variant="outline" className="gap-2">
              <Database className="h-4 w-4" />
              Fazer Backup Agora
            </Button>
            
            <Button variant="outline" className="gap-2">
              <Database className="h-4 w-4" />
              Restaurar Backup
            </Button>
          </div>
          
          <p className="text-xs text-muted-foreground">
            Último backup: 20/01/2024 às 02:00
          </p>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Configurações</h2>
      </div>

      <div className="flex gap-2 flex-wrap">
        <Button 
          variant={activeTab === "geral" ? "default" : "outline"}
          onClick={() => setActiveTab("geral")}
          className="gap-2"
        >
          <Settings className="h-4 w-4" />
          Geral
        </Button>
        <Button 
          variant={activeTab === "cashback" ? "default" : "outline"}
          onClick={() => setActiveTab("cashback")}
          className="gap-2"
        >
          <Gift className="h-4 w-4" />
          Cashback
        </Button>
        <Button 
          variant={activeTab === "usuarios" ? "default" : "outline"}
          onClick={() => setActiveTab("usuarios")}
          className="gap-2"
        >
          <Users className="h-4 w-4" />
          Usuários
        </Button>
        <Button 
          variant={activeTab === "sistema" ? "default" : "outline"}
          onClick={() => setActiveTab("sistema")}
          className="gap-2"
        >
          <Database className="h-4 w-4" />
          Sistema
        </Button>
      </div>

      {activeTab === "geral" && renderConfigGeral()}
      {activeTab === "cashback" && renderConfigCashback()}
      {activeTab === "usuarios" && renderConfigUsuarios()}
      {activeTab === "sistema" && renderConfigSistema()}
    </div>
  );
}