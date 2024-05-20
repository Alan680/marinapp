import {Routes,Route} from 'react-router-dom';
import {Login} from './Login';
import { Dashboard } from './Dashboard';
import { DespachoNew } from './NuevoDespacho';
import { DetalleDespacho } from './DetalleDespacho';



export function App() {
  return(
    
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/despacho" element={<DespachoNew />} />
      <Route path="/detalledespacho" element={<DetalleDespacho />} />
    </Routes>
    
  )
}