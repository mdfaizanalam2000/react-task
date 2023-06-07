import React, { useState } from 'react'
import BookTicket from './BookTicket';

export default function Summary(props) {
    const [bookTicket, setBookTicket] = useState(false);
    return (
        <>
            <div className='container'>
                <h1 className='text-center'>Summary of {props.summary.name}</h1>
                <p dangerouslySetInnerHTML={{ __html: props.summary.summary }}></p>
                <div className="text-center">
                    <button className='btn btn-danger me-3' onClick={() => props.setSummary(false)}>Go back</button>
                    <button className='btn btn-success' onClick={() => setBookTicket(true)}>Book Ticket</button>
                </div>
                <hr />
                {bookTicket && <BookTicket movie={props.summary}/>}
            </div>
        </>
    )
}
