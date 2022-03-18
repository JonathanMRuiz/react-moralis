
import { useMoralis } from 'react-moralis'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const App = () => {
  const { authenticate, isAuthenticated } = useMoralis();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/dashboard");
  },[isAuthenticated]);
  
  return (
    <div className="flex w-screen h-screen items-center justify-center">   
      <button
        onClick={authenticate}
        className="bg-yellow-300 px-8 py-5 rounded-xl text-lg animate-pulse"
      >
        Login using MetaMask
      </button>
      
    </div>
  )
}

export default App