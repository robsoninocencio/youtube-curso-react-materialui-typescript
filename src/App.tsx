import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './routes';
import { MenuLateral } from './shared/components';
import { DrawerProvider, AppThemeProvider } from './shared/contexts';

export const App = () => {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>
          <MenuLateral>
            <AppRoutes />
          </MenuLateral>
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  );
};
