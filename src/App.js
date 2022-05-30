import Hello from "./Hello";
import Clock from "./Clock";
import Login from "./Login";
import Form from "./Form";

function App() {
  
  const numbers = [
    {id : 1, num : 10},
    {id : 2, num : 20},
    {id : 3, num : 30},
    {id : 4, num : 40},
    {id : 5, num : 50},
  ]


  return (
    <div>
        <Hello name="Mitansh" />

        <Clock />

        <Login />

        {
          numbers.map((element) => {
            return <h5 id={element.id}>{element.num}</h5>
          })
        }

        <Form />
    </div>
  );
}

export default App;
