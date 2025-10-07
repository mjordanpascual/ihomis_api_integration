import Sidebar from './Sidebar'
// import { useHistory } from 'react-router-dom';
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {

  const navigate = useNavigate();

  // const history = useHistory();

  // const handleLogout = () => {
  //   localStorage.removeItem('token');
  //   history.push('/login');
  // };

  useEffect(()=>{
    console.log('Authenticated. OK');
    // navigate('/');
  }, [])

  return (
    <div>
      <Sidebar />
      <div>
        <h1>Dashboard</h1>
        <p>Welcome to the protected route!</p>
      </div>
      {/* <button className='bg-info' onClick={handleLogout}>Logout</button> */}
    </div>
  )
}

export default Dashboard
