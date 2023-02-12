import { Button } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";

import { useAppthemeContext } from "../shared/contexts";

const AppRoutes = () => {
    const { toggleTheme } = useAppthemeContext();
    return (
        <Routes>
            <Route
                path="/pagina-inicial"
                element={
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={toggleTheme}
                    >
                        Toggle Theme
                    </Button>
                }
            />
            <Route path="*" element={<Navigate to="/pagina-inicial" />} />
        </Routes>
    );
};

export default AppRoutes;
