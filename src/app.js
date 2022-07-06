import 'bootstrap/dist/css/bootstrap.min.css';
import PublicRouter from "../src/route/PublicRouter";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <div className="">
      <Router>
      <Header />
      <PublicRouter/>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
