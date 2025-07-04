import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

import osparlogo from '../assets/ospar1logo.png'

const Login = () => {

	const navigate = useNavigate();

    const [api_userName, setUsername] = useState('');
    const [api_userPass, setPassword] = useState('');

    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(()=>{
        if(api_userName == '' || api_userPass == ''){
            setIsDisabled(true);
        } else {
            setIsDisabled(false);
        }
    }, [api_userName, api_userPass])


    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post('http://localhost:8081/users/login', { api_userName, api_userPass });
          if (!response.data) {
                showSwal('Login unsuccessful!', 'error');
            } else {
                showSwal('Login Successful!', 'success');
                console.log(response.data)
                setTimeout(() => {
                    navigate('/dashboard');
                  }, 2000);
            }
        } catch (error) {
            if (error.response) {
                console.error('Error response:', error.response);
                showSwal('Login unsuccessful!', 'error');
            } else if (error.request) {
                console.error('Error request:', error.request);
                showSwal('Login unsuccessful!', 'error');
            } else {
                console.error('Error message:', error.message);
                showSwal('Login unsuccessful!', 'error');
            }
        }
        setUsername('');
        setPassword('');
      };


    const showSwal = (title, icon) => {
        let timerInterval;
        Swal.fire({
            title: title,
            icon: icon,
            html: 'I will close in <b></b> milliseconds.',
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const b = Swal.getHtmlContainer().querySelector('b');
                timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft();
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        });
    };


    function forgetPass (e) {
        e.preventDefault();
    
        // alert('Wag makulit!');
        let timerInterval
            Swal.fire({
                title: 'BOBO MO!',
                icon: 'error',
                html: 'I will close in <b></b> milliseconds.',
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft()
                }, 100)
                },
                willClose: () => {
                clearInterval(timerInterval)
                }
            })
    }

  return (
    <>

        <div>
        <div className="flex min-h-full flex-col justify-center py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto h-20 w-auto" src={osparlogo} alt="Ospar logo" />
                <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in account</h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit}  action="#" method="POST">
                <div>
                    <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Username</label>
                    <div className="mt-1">
                         <input 
                         id="username" 
                         name="username" 
                         type="text" 
                         autoComplete="username" 
                         placeholder='  Enter username'
                         required 
                         className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                        value={api_userName}
                        onChange={(e) => setUsername(e.target.value)}
                          />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                    </div>
                    <div className="mt-2">
                         <input 
                         id="password1" 
                         name="password2" 
                         type="password" 
                         autoComplete="password" 
                         placeholder='  Enter password'
                         required 
                         className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                        value={api_userPass}
                        onChange={(e) => setPassword(e.target.value)}
                         />
                    </div>
                </div>
                {/* {errorMessage && <p>{errorMessage}</p>} */}
                <div className="text-sm">
                        <a href="#" onClick={forgetPass} className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                </div>
                <div>
                    <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" disabled={isDisabled}>Login</button>
                </div>
                </form>
                
                <div className="mt-2 text-center text-sm text-gray-500">
                No ihomis Account?  
                    <Link className='font-semibold leading-6 text-green-600 hover:text-indigo-500' as={Link} to="/register"> Create Account</Link>
               </div>
            </div>
        </div>
    </div>


    </>
  )
}

export default Login