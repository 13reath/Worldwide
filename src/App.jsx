import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./assets/pages/Homepage";
import Product from "./assets/pages/Product";
import Pricing from "./assets/pages/Pricing";
import PageNotFound from "./assets/pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="homepage" element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
