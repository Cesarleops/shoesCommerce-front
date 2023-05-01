import { Route, Routes } from "react-router-dom";
import { Home } from "../components/pages/home";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="" Component={}/> */}
    </Routes>
  );
};
