import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 class="display-1">Pantry Manager</h1>
        <h2 class="display-3">Welcome to your virtual pantry!</h2>
        <h4 class="display-4">Here's your current list of products:</h4>

        <div className="row">
          <div className="col-4 offset-4">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Amount</th>
                  <th scope="col">Product</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>3</td>
                  <td>banana</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>avocado</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>sauce</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>pasta</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>shampoo</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>laundry detergent</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
