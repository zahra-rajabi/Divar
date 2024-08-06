import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { defaultOptions } from "configs/reactQuery";
import Router from "router/Router";
import Layout from "layouts/Layout";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  const queryClient = new QueryClient({
    defaultOptions,
  });
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout open={open} setOpen={setOpen}>
          <Router open={open} setOpen={setOpen} />
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
