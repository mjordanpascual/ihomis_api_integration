import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Swal2 from 'sweetalert2';

import osparlogo from '../assets/ospar1logo.png'
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {

    // const [formData, setFormData] = useState({
    //     api_userName: '',
    //     api_userPass: ''
    // });

    const navigate = useNavigate();


    const [api_userName, setUsername] = useState('');
    const [api_userPass1, setPassword1] = useState('');
    const [api_userPass2, setPassword2] = useState('');
    const [isPasswordMatch, setIsPasswordMatch] = useState(true);
    // const [message, setMessage] = useState('');

    useEffect(()=>{
        if(api_userPass2 === api_userPass1){
            setIsPasswordMatch(true);
        } else if(api_userPass2 !== '') {
            setIsPasswordMatch(false);
        } else if(api_userPass2.length === 0) {
            setIsPasswordMatch(true);
        } else {
            setIsPasswordMatch(false);
        }
    }, [api_userPass1, api_userPass2])


const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/users/register', {
        api_userName: api_userName,
        api_userPass: api_userPass1
      });

      if (response.status === 201) {
        console.log(response.data)
        showSwal('Registration Successful!', 'success');
        setTimeout(() => {
            navigate('/login');
          }, 2000);
    } else {
        console.log(response.data.message)
        showSwal('Username already exists', 'error');
      }
    } catch (error) {
        if (error.response) {
            console.error('Error response:', error.response);
            showSwal('Username already exists', 'error');
        } else if (error.request) {
            console.error('Error request:', error.request);
            showSwal('Username already exists', 'error');
        } else {
            console.error('Error message:', error.message);
            showSwal('Username already exists', 'error');
        }
    }
    setUsername('');
    setPassword1('');
    setPassword2('');
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
        Swal2.fire({
            title: 'BOBO MO!',
            icon: 'error',
            html: 'I will close in <b></b> milliseconds.',
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
            Swal2.showLoading()
            const b = Swal2.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
                b.textContent = Swal2.getTimerLeft()
            }, 100)
            },
            willClose: () => {
            clearInterval(timerInterval)
            }
        })
}

  return (
    <div>
        <div className="flex min-h-full flex-col justify-center lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto h-20 w-auto" src={osparlogo} alt="Ospar logo" />
                <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign up new ihomis account</h2>
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
                        value={api_userPass1}
                        onChange={(e) => setPassword1(e.target.value)}
                         />
                    </div>
                </div>
                {/* {errorMessage && <p>{errorMessage}</p>} */}
                <div>
                    <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
                    </div>
                    <div className="mt-2">
                         <input 
                         id="password2" 
                         name="password2" 
                         type="password" 
                         autoComplete="password" 
                         placeholder='   Confirm password'
                         required 
                         className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                        //  value={formData.password} 
                        //  onChange={e => setPassword(e.target.value)} />
                        // onChange={handleChange}
                        value={api_userPass2}
                        onChange={(e) => setPassword2(e.target.value)}
                         />
                    <div className="text-danger" hidden = {isPasswordMatch}>
                        Password does not match! Please Try Again!
                    </div>
                    </div>
                </div>

                <div className="text-sm">
                        <a href="#" onClick={forgetPass} className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                </div>

                <div>
                    <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create Account</button>
                </div>
                </form>

                <div className="mt-2 text-center text-sm text-gray-500">
                Already have Account?
                    <Link className='font-semibold leading-6 text-green-600 hover:text-indigo-500' as={Link} to="/login"> Login</Link>
               </div>

            </div>
        </div>
    </div>
  )
}

export default Register