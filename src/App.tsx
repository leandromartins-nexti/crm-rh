import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/Layout";
import Dashboard from "./pages/Dashboard";
import Recruitment from "./pages/Recruitment";
import Talents from "./pages/Talents";
import Employees from "./pages/Employees";
import Calendar from "./pages/Calendar";
import Teste from "./pages/Teste";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/recrutamento" element={<Recruitment />} />
            <Route path="/talentos" element={<Talents />} />
            <Route path="/colaboradores" element={<Employees />} />
            <Route path="/calendario" element={<Calendar />} />
            <Route path="/teste" element={<Teste />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
