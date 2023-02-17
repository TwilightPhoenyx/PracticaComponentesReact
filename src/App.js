import Header from "./components/Header/Header";
import NavMenu from "./components/NavMenu/NavMenu";
import styles from "./App.css"

function App() {
  return (
  
    <div className="container">
      <Header/>
      <NavMenu/>
      <footer>
        <p>Aviso Legal</p>
      </footer>
    </div>
   );
}

export default App;

