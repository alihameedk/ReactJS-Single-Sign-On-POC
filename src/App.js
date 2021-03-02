
import './App.css';//sh stylesss
import 'bootstrap/dist/css/bootstrap.min.css'; ///sh
import Login from './pages/login/Login'; ///sh
import Dashboard from './pages/dashboard/Dashboard'; ///sh

function App() {
  return (
    <div className="App"> {/*why classname=app*/}
      {<Dashboard />}
     
    </div>
  );
}

export default App;
