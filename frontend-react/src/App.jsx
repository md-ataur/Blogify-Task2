import { useState } from "react";
import SearchPage from "./pages/SearchPage";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <SearchPage />
    </>
  );
}

export default App;
