import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { defaultOptions } from "configs/reactQuery";
import Router from "router/Router";
import Layout from "layouts/Layout";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  const queryClient = new QueryClient({
    defaultOptions,
  });
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout show={show} setShow={setShow}>
          <Router show={show} setShow={setShow} />
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
