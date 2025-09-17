import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "@/redux/store/index";
import { Toaster } from "react-hot-toast";
import MainWrapper from "@/routes/MainWrapper";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  registerServiceWorker,
  isServiceWorkerSupported,
} from "@/lib/register-service-worker";
import 'antd/dist/reset.css';

// Register service worker for PWA support
if (isServiceWorkerSupported()) {
  registerServiceWorker();
} else {
  console.warn("Service workers are not supported in this browser.");
}


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
        <MainWrapper />
        <Toaster position="top-right" />
    </Provider>
  </StrictMode>
);
