import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import BackgroundRemover from "./pages/BackgroundRemover";
import { BlogPost } from "./components/BlogPost";
import BlogListing from "./pages/BlogListing";
import ContactForm from "./pages/ContactForm";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/background-remover" element={<BackgroundRemover />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/blog" element={<BlogListing />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;