import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { DashboardCards } from "@/components/dashboard/DashboardCards";
import { ClientesList } from "@/components/clientes/ClientesList";
import { ProdutosList } from "@/components/produtos/ProdutosList";
import { VendasList } from "@/components/vendas/VendasList";
import { CashbackDashboard } from "@/components/cashback/CashbackDashboard";
import { FinanceiroDashboard } from "@/components/financeiro/FinanceiroDashboard";
import { RelatoriosDashboard } from "@/components/relatorios/RelatoriosDashboard";
import { ConfiguracoesDashboard } from "@/components/configuracoes/ConfiguracoesDashboard";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <DashboardCards />
          </div>
        );
      case "clientes":
        return <ClientesList />;
      case "produtos":
        return <ProdutosList />;
      case "vendas":
        return <VendasList />;
      case "cashback":
        return <CashbackDashboard />;
      case "financeiro":
        return <FinanceiroDashboard />;
      case "relatorios":
        return <RelatoriosDashboard />;
      case "configuracoes":
        return <ConfiguracoesDashboard />;
      default:
        return <DashboardCards />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-bg">
      <Header />
      <div className="flex">
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
        <main className="flex-1 p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Index;
