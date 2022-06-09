import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AgendaContacto from './components/AgendaContacto';
import TablaContactos from './components/TablaContactos';
import FormularioAgenda from './components/FormularioAgenda';
import NavBar from './components/NavBar';
const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className='container'>
        <Router>
          <Routes>
            <Route path="/" element={<AgendaContacto />} />
            <Route path="/:letra" element={<AgendaContacto />} />
            <Route path="/tabla" element={<TablaContactos />} />
            <Route path="/nuevo" element={<FormularioAgenda />} />
            <Route path="/actualizar/:id" element={<FormularioAgenda />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
