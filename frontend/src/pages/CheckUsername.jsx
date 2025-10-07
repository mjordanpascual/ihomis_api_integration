import {useState, useEffect} from 'react'
import axios from 'axios'
import Swal2 from 'sweetalert2';

import { useNavigate } from 'react-router-dom';

const CheckUsername = () => {

    const navigate = useNavigate();

    const [api_userName, setUsername] = useState('');
    const [message, setMessage] = useState('');

    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(()=>{
        if(api_userName != ''){
            setIsDisabled(false);
        } else{
            setIsDisabled(true);
        }
    }, [api_userName])

    // const handleChange = (e) => {
    //     // setUsername({...username, [e.target.name]:[e.target.value]})

    // }

    const handleSubmit = async (e) => {
        e.preventDefault();

            try {
              const response = await axios.post('http://localhost:8081/users/checkuser', { api_userName });
              if (response > 0) {
                setMessage('Username is taken');
              } else {
                setMessage('Username is available');
              }
            } catch (error) {
              setMessage('Error checking username');
            }

        }
    //     const response = axios.post('http://localhost:8081/users/checkuser', {api_userName})
    //     .then(data => {
    //         if(response.data.exists){
    //             // console.log(data)
    //             let timerInterval
    //             Swal2.fire({
    //                 title: 'Email already exist! Please try again!',
    //                 icon: 'error',
    //                 text: 'Check your email address and try again',
    //                 html: 'I will close in <b></b> milliseconds.',
    //                 timer: 1500,
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
    //             // return console.log('Email already exist! Please try again!');
    //             // setMessage('Email already exists.');
    //             // return console.log(data)
    //         } else {
    //                 let timerInterval
    //                 Swal2.fire({
    //                     title: 'Email is Available!',
    //                     icon: 'Success',
    //                     text: 'Check your email address and try again',
    //                     html: 'I will close in <b></b> milliseconds.',
    //                     timer: 1500,
    //                     timerProgressBar: true,
    //                     didOpen: () => {
    //                     Swal2.showLoading()
    //                     const b = Swal2.getHtmlContainer().querySelector('b')
    //                     timerInterval = setInterval(() => {
    //                         b.textContent = Swal2.getTimerLeft()
    //                     }, 100)
    //                     },
    //                     willClose: () => {
    //                     clearInterval(timerInterval)
    //                     }
    //                 })
    //             }
    //             navigate('/register');
    //         }
    //         // setUsername('');
    //     })
    //     // .then(data => {
    //     //     if(d)
    //     // })
            
    //     .catch(err => console.log(err));
    //     // setUsername('');
    // }

  return (
            <div className='flex justify-center'>
                <form onSubmit={handleSubmit}>
                    <label className='font-bold'>Check Username if Exist in Database: </label>
                    {message && <p className='text-green-500'>{message}</p>}
                    <input type='text' className='w-full' name='username' value={api_userName} onChange={(e) => setUsername(e.target.value)} placeholder='Enter Username' />
                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" disabled={isDisabled}>Check Username</button>
                    </div>
                </form>
            </div>
  )
}

export default CheckUsername