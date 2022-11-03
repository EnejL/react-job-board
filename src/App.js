// importing components
import './components/JobListing';

// importing assets
import './styles/App.css';
import logo from './logo.svg';
import JobListing from "./components/JobListing";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <p>
          Heloooo
        </p>
      </header>
      <JobListing />
    </div>
  );
}

export default App;
