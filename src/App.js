
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus';
import Todos from './components/Todos';
import Addtodo from './components/Addtodo';

import RestaurantHome from './Restaurant/RestaurantHome';
import UseState from './HooksExamples.jsx/UseState';
import PageNotFound from './components/PageNotFound';
import WeatherApp from './Weather/WeatherApp';
import Testhooks from './components/Testhooks';
import ReduxEx from './components/ReduxEx';

function App() {
  return (
    <>
      <Router>
        <Header title="My Todo List" />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/addtodo" element={<Addtodo />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/restaurant" element={<RestaurantHome />} />
          <Route path='/hooks' element={<UseState />} />
          <Route path="/weather" element={<WeatherApp />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/testhooks" element={<Testhooks />} />
          <Route path="/redux" element={<ReduxEx />} />

        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
