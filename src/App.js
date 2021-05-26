import "./App.css";
import Table from "./Table";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 class="display-1">Pantry Manager</h1>
        <h2 class="display-3">Welcome to your virtual pantry!</h2>
        <h4 class="display-4">Here's your current list of products:</h4>
        <Table />
      </div>
    </div>
  );
}
