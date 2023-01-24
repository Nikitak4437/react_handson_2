import { useState } from "react";
import "./App.css";
import Forms from "./forms";
function App() {
  const [detailsList, setDetailsList] = useState([]);
  const add_details = (details) => {
    console.log(details);
    setDetailsList([...detailsList, details]);
  };
  return (
    <div className="App">
      <Forms add_details={add_details} />
      <hr
        style={{
          background: "#000",
          height: 5,
          color: "#000",
        }}
      />
      <div className="row">
        {detailsList.map((details, i) => (
          <p key={i}>
            Name : {details.name} | Department {details.department} | Rating :
            {details.rating}
          </p>
        ))}
      </div>
    </div>
  );
}
export default App;
