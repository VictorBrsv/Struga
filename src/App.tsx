import { About } from './pages/About/About';
import { Catalog } from './pages/Catalog/Catalog';
import { MainPage } from './pages/MainPage/MainPage';
import './App.css';

export function App() {
  return (
    <>
      <MainPage />
      <Catalog />
      <About />
    </>
  );
}
