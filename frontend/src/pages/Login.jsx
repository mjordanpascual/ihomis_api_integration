import { useState } from 'react'
import Swal2 from 'sweetalert2'

const Login = () => {

    const [isDisabled, setIsDisabled] = useState(true);

    function handleSubmit (e) {
		e.preventDefault();
        // alert('Clicked!')
        Swal2.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
          });
    }


  return (
    <>
        <div className='justify-center w-full max-w-xs'>
            <div className='w-full bg-blue-900 rounded text-white '>
                <h1 className='font-bold'>Login</h1>
                <p className='text-sm'>Welcome back again  </p>
            </div>
            <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>Username: </label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="email" name="email" id="email" placeholder="Enter username" />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>Password: </label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="password" name="password" id="password" placeholder="Enter password" />
                    </div>
                    
                    <button type="button" className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={handleSubmit} >Login</button>
            </form>
        </div>


        {/* <div class="w-full max-w-xs">
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Username
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                </div>
                <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Password
                </label>
                <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" >
                <p class="text-red-500 text-xs italic">Please choose a password.</p>
                </div>
                <div class="flex items-center justify-between">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Sign In
                </button>
                <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                    Forgot Password?
                </a>
                </div>
            </form>
            <p class="text-center text-gray-500 text-xs">
                &copy;2020 Acme Corp. All rights reserved.
            </p>
        </div> */}

        



    </>
  )
}

export default Login