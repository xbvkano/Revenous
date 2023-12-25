import logo from './logo.svg';
import './App.css';
import BusinessList from './components/BusinessList.js';
import SearchBar from './components/SearchBar.js';


function App() {
  return (
    <div className="App">
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;
