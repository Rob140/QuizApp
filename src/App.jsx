import { useState } from "react";

import Quiz from "./QuizApp";

function App() {
  const [count, setCount] = useState(0);

  return <Quiz />;
}

export default App;
