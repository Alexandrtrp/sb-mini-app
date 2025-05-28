import React, { useEffect, useState } from "react";
import "./styles.css";
import List from "./List";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://mocki.io/v1/970fd1a4-8c7a-40b6-9694-f4545a30d966")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      <List data={data} />
    </div>
  );
};

export default App;
