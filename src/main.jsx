import { BrowserRouter } from "react-router-dom";
import App from "./App";

const basename = "/Personal-Website"; // Numele repo-ului GitHub

export default function Root() {
  return (
    <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
      </BrowserRouter>
    </StrictMode>
  );
}
