import { useState } from "react";
import ResumeOne from "./ResumeOne";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ResumeOne />
    </>
  );
}

export default App;
