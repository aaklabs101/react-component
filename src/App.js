import './App.css';
import Child from './components/Child';

function App() {
  // static data..................
  const data=[
    {
      name:"Ahmed",
      subject:"Math",
      roll:1
    },
    {
      name:"Rohim",
      subject:"Physics",
      roll:2
    },
    {
      name:"Karim",
      subject:"English",
      roll:3
    }
  ]
  return (
    <ul >
      {/* passing data in child component */}
      {
        data.map(item=>{
         return <Child {...item} />
        })
      }
    </ul>
  );
}

export default App;
