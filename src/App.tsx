import "./App.css";
import { Navigate } from "react-router";
import { setupResourceErrorHandling } from "@/lib/assetLoader";
import { isServiceWorkerSupported } from "@/lib/register-service-worker";

// Setup resource error handling as fallback when service worker is not available
if (!isServiceWorkerSupported()) {
  setupResourceErrorHandling();
  
}

function App() {

  return <Navigate to="/dashboard" />;
}

export default App;