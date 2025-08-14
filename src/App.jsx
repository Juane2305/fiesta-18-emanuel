import { useEffect, useState } from "react"
import Loading from "./components/loading/Loading"
import Invitation from "./components/invitation/Invitation";

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <>
      {isLoading ? <Loading/> : <Invitation/>}
    </>
  )
}

export default App
