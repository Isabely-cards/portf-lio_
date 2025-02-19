import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScreenLayout from "../pages/ScreenLayout";

export default function AppRoutes() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/">
                <Route index element={<ScreenLayout />} />
            </Route>
          </Routes>
    </BrowserRouter>
  );
}
