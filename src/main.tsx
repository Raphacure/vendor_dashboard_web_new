import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store, { persistorStore } from "@/redux/store/index";
import { Toaster } from "react-hot-toast";
import MainWrapper from "@/routes/MainRoutes";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  registerServiceWorker,
  isServiceWorkerSupported,
} from "@/lib/register-service-worker";
import "antd/dist/reset.css";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Register service worker for PWA support
if (isServiceWorkerSupported()) {
  registerServiceWorker();
} else {
  console.warn("Service workers are not supported in this browser.");
}

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistorStore}>
        <QueryClientProvider client={queryClient}>
          <MainWrapper />
          <Toaster position="top-right" />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
