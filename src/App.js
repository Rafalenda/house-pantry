import "./App.css";
import Table from "./Table";
import Add from "./Add";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <section>
          <header>
            <h1 className="display-1">Pantry Manager</h1>
            <h2 className="display-3">Welcome to your virtual pantry</h2>
          </header>
        </section>
        <section>
          <div className="row">
            <div className="col-8 offset-2">
              <Add />
            </div>
          </div>
        </section>
        <section>
          <h4 className="display-6">Here's your current list of products:</h4>
          <Table />
        </section>
      </div>
    </div>
  );
}
