import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const Adm = () => {

    const  [results, setResults] = useEffect([]);

    axios.get('http://localhost:8081/users/adm')
            .then(res => setResults(res.data))
            .catch(err => {console.log(err)})

  return (
    <div>
      Admitted Patient
      {results}
    </div>
  )
}

export default Adm
