import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkAuthenticatedRoute } from '../utils/auth';

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    checkAuthenticatedRoute(navigate);
  }, [navigate]);
  
  return <h1>Halaman Home</h1>;
}
export default Home;
