import "./App.css";
import Table from "./Table";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1 className="display-1">Pantry Manager</h1>
          <h2 className="display-3">Welcome to your virtual pantry!</h2>
        </header>
        <h4 className="display-6">Here's your current list of products:</h4>

        <Table />
      </div>
    </div>
  );
}
