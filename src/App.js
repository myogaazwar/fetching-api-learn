import { useEffect } from "react";
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [factCat, setFactCat] = useState(null);

  const getFactCatData = async () => {
    const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json();

    return data.fact;
  };

  useEffect(() => {
    const run = async () => {
      const data = await getFactCatData();
      setFactCat(data);
    };

    run();
  }, []);

  const handleGenerate = async () => {
    const data = await getFactCatData();
    setFactCat(data);
  };

  console.log(factCat);

  return (
    <div className="App">
      <button onClick={handleGenerate}>Generate Cat Fact</button>

      <h1>{factCat}</h1>
    </div>
  );
}
