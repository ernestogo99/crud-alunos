import { Button } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAppThemeContext } from "../shared/contexts/themecontext";

export const Approutes = () => {
  const { toggletheme } = useAppThemeContext();

  return (
    <Routes>
      <Route
        path="/pagina-inicial"
        element={
          <Button onClick={toggletheme} variant="contained" color="primary">
            teste
          </Button>
        }
      ></Route>
      <Route
        path="*"
        element={<Navigate to="/pagina-inicial"></Navigate>}
      ></Route>
    </Routes>
  );
};
