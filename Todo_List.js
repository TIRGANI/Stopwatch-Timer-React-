import { useState } from "react";
import { useEffect,useRef } from "react";


const App = () => {
  const [cities, setCities] = useState([]);
  const addCities = () => {
    //Complete function
    let txt = document.getElementById("txt").value;
    setCities([...cities, txt]);


  };
  const removeCities = (index) => { 
    //Complete function
    const filteredCities = cities.filter((citye,i) => i !== index);
    setCities(filteredCities);
  };


  return (
    <div className="App">
      <input type="text" id="txt" placeholder="add me" />
      <button onClick={addCities}>Add</button>
      <ul className="cities">
        {cities.map((city,index) => (
          <li key={index}>
            {city} <button onClick={() => removeCities(index)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default App;
