import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@/hooks/use-theme'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="system" storageKey="portfolio-ui-theme">
    <App />
  </ThemeProvider>
);
