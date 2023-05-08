import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import {
  Dashboard,
  DetalheDeCidades,
  DetalheDePessoas,
  ListagemDeCidades,
  ListagemDePessoas,
} from '../pages';

import { useDrawerContext } from '../shared/contexts';

const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      { icon: 'home', path: '/pagina-inicial', label: 'Página inicial' },
      { icon: 'location_city', path: '/cidades', label: 'Cidades' },
      { icon: 'people', path: '/pessoas', label: 'Pessoas' },
      // { icon: 'location_city', path: '/cidades', label: 'Cidades' },
    ]);
  }, []);

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Dashboard />} />

      <Route path="/pessoas" element={<ListagemDePessoas />} />
      <Route path="/pessoas/detalhe/:id" element={<DetalheDePessoas />} />

      <Route path="/cidades" element={<ListagemDeCidades />} />
      <Route path="/cidades/detalhe/:id" element={<DetalheDeCidades />} />

      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
};

export default AppRoutes;
