import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Dashboard, DetalheDePessoas, ListagemDePessoas } from '../pages';

import { useDrawerContext } from '../shared/contexts';

const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      { icon: 'home', path: '/pagina-inicial', label: 'Página inicial' },
      { icon: 'people', path: '/pessoas', label: 'Pessoas' },
      // { icon: 'location_city', path: '/cidades', label: 'Cidades' },
    ]);
  }, []);

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Dashboard />} />
      <Route path="/pessoas" element={<ListagemDePessoas />} />
      <Route path="/pessoas/detalhe/:id" element={<DetalheDePessoas />} />

      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
};

export default AppRoutes;
