import React, { useState } from "react";
import CardAsk from "./components/CardAsk";
import CardThank from "./components/CardThank";
import "./App.css";

function App() {
  const [rateChosed, setRateChosed] = useState(0);

  if (rateChosed)
    return (
      <main>
        <CardThank rateChosed={rateChosed} />
      </main>
    );

  return (
    <main>
      <CardAsk onDiplayRate={(value) => setRateChosed(value)} />
    </main>
  );
}

export default App;
