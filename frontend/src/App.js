
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Productroutes from './components/products/routes/Productroutes';
import { Provider } from 'react-redux';

function App() {
  return (
<div className="h-screen ">
      <Navbar />
  
        <Productroutes />
  

    </div>
  );
}

export default App;
