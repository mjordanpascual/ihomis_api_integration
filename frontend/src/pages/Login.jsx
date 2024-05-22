import { useEffect, useState } from 'react'
import Swal2 from 'sweetalert2'
import { Navigate, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

const Login = () => {

	const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(()=>{
        if(username == '' || password == ''){
            setIsDisabled(true);
        } else {
            setIsDisabled(false);
        }
    }, [username, password])



    // function handleSubmit (e) {
	// 	e.preventDefault();


    //     fetch('http:localhost:8081/users/login', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type' : 'application/json'
    //         },
    //         body: JSON.stringify({
    //             api_userName : username,
    //             api_userPass : password
    //         })
    //     })
    //     .then(response => response.json(response.data))
	// 		.then(data => {

	// 			if(data === false){
	// 				let timerInterval
	// 				Swal2.fire({
	// 					title: 'Login unsuccessful!',
	// 					icon: 'error',
	// 					  html: 'Please try again in <b></b> milliseconds.',
	// 					  timer: 2500,
	// 					  timerProgressBar: true,
	// 					  didOpen: () => {
	// 					    Swal2.showLoading()
	// 					    const b = Swal2.getHtmlContainer().querySelector('b')
	// 					    timerInterval = setInterval(() => {
	// 					      b.textContent = Swal2.getTimerLeft()
	// 					    }, 100)
	// 					  },
	// 					  willClose: () => {
	// 					    clearInterval(timerInterval)
	// 					  }
	// 					})


	// 			} else if (data.isAdmin == true){
	// 				// localStorage.setItem('token', data.access)
					
	// 				// retrieveUserDetails(data.access)

	// 				let timerInterval
	// 				Swal2.fire({
	// 					title: 'Welcome User',
	// 					icon: 'success',
	// 					  html: 'You will redirecting to Dashboard page in <b></b>.',
	// 					  timer: 2500,
	// 					  timerProgressBar: true,
	// 					  didOpen: () => {
	// 					    Swal2.showLoading()
	// 					    const b = Swal2.getHtmlContainer().querySelector('b')
	// 					    timerInterval = setInterval(() => {
	// 					      b.textContent = Swal2.getTimerLeft()
	// 					    }, 100)
	// 					  },
	// 					  willClose: () => {
	// 					    clearInterval(timerInterval)
	// 					  }
	// 					})
					
	// 			navigate('/dashboard')

	// 			} else {
	// 				localStorage.setItem('token', data.access)
					
	// 				retrieveUserDetails(data.access)

	// 				let timerInterval
	// 				Swal2.fire({
	// 					title: `Welcome, ${email}`,
	// 					icon: 'success',
	// 					  html: 'You will redirecting to home page in <b></b>.',
	// 					  timer: 2500,
	// 					  timerProgressBar: true,
	// 					  didOpen: () => {
	// 					    Swal2.showLoading()
	// 					    const b = Swal2.getHtmlContainer().querySelector('b')
	// 					    timerInterval = setInterval(() => {
	// 					      b.textContent = Swal2.getTimerLeft()
	// 					    }, 100)
	// 					  },
	// 					  willClose: () => {
	// 					    clearInterval(timerInterval)
	// 					  }
	// 					})
					
	// 				navigate('/')
	// 			}


	// 		})

	// }



    // const handleSubmit = async (event) => {
    //     event.preventDefault();

    //     try {
    //         const response = await axios.post('http://localhost:8081/users/login', { username, password });
    //         // setMessage('Login successful');
    //         return response;
    //         // localStorage.setItem('token', response.data.token); // Store the JWT token
    //     } catch (error) {
    //         // setMessage('Login failed');
    //         return error;
    //     }
    // };

    // function handleSubmit (e) {
    //     e.preventDefault();

    //     fetch('http://localhost:8081/users/login', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type' : 'application/json'
    //         },
    //         body: JSON.stringify({
    //             api_userName : username,
    //             api_userPass : password
    //         })
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         if(!data){
    //             let timerInterval
    //             Swal2.fire({
    //                 title: 'Login unsuccessful!',
    //                 icon: 'error',
    //                 html: 'Please try again in <b></b> milliseconds.',
    //                 timer: 2000,
    //                 timerProgressBar: true,
    //                 didOpen: () => {
    //                 Swal2.showLoading()
    //                 const b = Swal2.getHtmlContainer().querySelector('b')
    //                 timerInterval = setInterval(() => {
    //                     b.textContent = Swal2.getTimerLeft()
    //                 }, 100)
    //                 },
    //                 willClose: () => {
    //                 clearInterval(timerInterval)
    //                 }
    //             })
    //         }
    //         else {
    //             let timerInterval
    //             Swal2.fire({
    //                 title: 'Welcome Users',
    //                 icon: 'success',
    //                 html: 'You will redirecting to Dashboard page in <b></b>.',
    //                 timer: 2000,
    //                 timerProgressBar: true,
    //                 didOpen: () => {
    //                 Swal2.showLoading()
    //                 const b = Swal2.getHtmlContainer().querySelector('b')
    //                 timerInterval = setInterval(() => {
    //                     b.textContent = Swal2.getTimerLeft()
    //                 }, 100)
    //                 },
    //                 willClose: () => {
    //                 clearInterval(timerInterval)
    //                 }
    //             })
    //         navigate('/dashboard')
    //         }
    //     })
    // }



    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');

        try {
            const response = await axios.post('http://localhost:8081/users/login', {
                username,
                password
            });

            if (response.data.success) {
                // Handle successful login, e.g., store token, redirect user, etc.
                console.log('Login successful:', response.data);
                // let timerInterval
                //     Swal2.fire({
                //         title: 'Welcome Users',
                //         icon: 'success',
                //         html: 'You will redirecting to Dashboard page in <b></b>.',
                //         timer: 2000,
                //         timerProgressBar: true,
                //         didOpen: () => {
                //         Swal2.showLoading()
                //         const b = Swal2.getHtmlContainer().querySelector('b')
                //         timerInterval = setInterval(() => {
                //             b.textContent = Swal2.getTimerLeft()
                //         }, 100)
                //         },
                //         willClose: () => {
                //         clearInterval(timerInterval)
                //         }
                //     })
                // navigate('/dashboard')
            } else {
                // Handle login failure
                setError(response.data.message);
            }
        } catch (error) {
            setError('An error occurred. Please try again.');
            console.error('Login error:', error);
        }
    };



  return (
    <>
        <div className='justify-center w-full max-w-xs'>
            <div className='w-full bg-blue-900 rounded text-white '>
                <h1 className='font-bold'>Login</h1>
                <p className='text-sm'>Welcome back again  </p>
            </div>

            <form onSubmit={handleSubmit} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                    <div className='mb-4'>
                        <label 
                        className='block text-gray-700 text-sm font-bold mb-2' 
                        htmlFor='email'>Username: 
                        </label>
                        <input 
                        value={username} 
                        onChange={e => setUsername(e.target.value)} 
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                        type="text" 
                        name="email" 
                        id="email" 
                        placeholder="Enter username" />
                    </div>
                    <div className='mb-4'>
                        <label 
                        className='block text-gray-700 text-sm font-bold mb-2' 
                        htmlFor='password'>Password: 
                        </label>
                        <input 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="Enter password" />
                    </div>
                    
                    <button 
                    type="submit" 
                    className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' 
                    disabled = {isDisabled}>Login</button>
                    {error && <p style={{ color: 'red' }}>{error}</p>}

            </form>
            
        </div>

    </>
  )
}

export default Login