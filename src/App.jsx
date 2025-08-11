import { Route, Routes } from 'react-router';
import './App.css';
import HomePage from './routes/home.route';
import ContactPage from './routes/contact.route';
import NavBar from './layouts/nav-bar/nav-bar';
import ProductListPage from './routes/product/product-list.route';
import ProductDetailPage from './routes/product/product-detail.route';

function App() {

  return (
    <>
      <NavBar />

      {/* Attention, définition des routes -> Pluriel */}
      <Routes> 

        {/* Affectatrion d'une route -> Singulier ! */}
        {/* Page d'accueil : '/' */}
        <Route index element={<HomePage />} />

        {/* Page de contact : '/contact' */}
        <Route path='contact' element={<ContactPage />} />

        {/* Pages product */}
        <Route path='product'>
          <Route index element={<ProductListPage />} />
          <Route path=':id' element={<ProductDetailPage /> }/>
        </Route>

      </Routes>
    </>
  );
}

export default App;
