import{Routes,Route,BrowserRouter} from 'react-router-dom'
import Layout from './components/Layout/Layout';
import { HomePage,NotFoundPage,ProductPage } from './pages';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Layout>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/product/:id" element={<ProductPage/>}/>
      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
    </Layout>
    </BrowserRouter>

  );
}

export default App;
