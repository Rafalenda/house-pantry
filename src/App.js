import "./App.css";
import Table from "./Table";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <section>
          <header>
            <h1 className="display-1">Pantry Manager</h1>
            <p className="h3 fs-3 text-muted">Welcome to your virtual pantry</p>
          </header>
        </section>
        <section>
          <Table />
        </section>
      </div>
    </div>
  );
}
