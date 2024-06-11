import Sidebar from './Sidebar'
// import { useHistory } from 'react-router-dom';

const Dashboard = () => {

  // const history = useHistory();

  // const handleLogout = () => {
  //   localStorage.removeItem('token');
  //   history.push('/login');
  // };

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
