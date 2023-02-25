import { useRoutes } from "react-router-dom";

import { AppRoutes } from "./routes/app.routes";

import "./App.css";

function App() {
  return useRoutes(AppRoutes());
}

export default App;
