import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react'

export default function HomePage() {
    // quote var to hold the quote data
    const [quote, setQuote] = useState("")

    // Fetch a quote when the component mounts
    useEffect(() => {
        qenerateQuote();
    }, []);


    // function to fetch a new quote data from the API
    const qenerateQuote = () =>{
        axios.get("https://api.kanye.rest/")
            .then(data =>{
                setQuote(data.data.quote);
            })
            .catch(err =>{
                console.log(`Error fetching the quote: ${err}`);
                setQuote("Failed to load Quote")
            })
    }


  return (
    <div>
       <p className="quoteStyle" >"{quote}"</p>
      <button onClick={qenerateQuote} className="btn-class">
         New Quote
       </button>
     </div>
   );
}

// Mohamed