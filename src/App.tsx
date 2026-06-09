import React from 'react';
import PortfolioApp from './PortfolioApp';
import { LanguageProvider } from './context/LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <PortfolioApp />
    </LanguageProvider>
  );
};

export default App;
