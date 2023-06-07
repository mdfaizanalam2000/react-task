import React, { useState } from 'react'

export default function BookTicket(props) {
    const [userData, setUserData] = useState({
        movieName: props.movie.name,
        name: "",
        email: "",
        phone: ""
    })

    const OnChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("user-data", JSON.stringify(userData));
        alert("Ticket Booked Successfully");
        window.location.reload();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="movieName" className="form-label">Movie Name</label>
                <input type="text" className="form-control" id="movieName" name='movieName' value={userData.movieName} disabled />
            </div>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input type="text" className="form-control" id="name" onChange={OnChange} name='name' value={userData.name} required />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" onChange={OnChange} name='email' value={userData.email} required />
            </div>
            <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input type="phone" className="form-control" id="phone" onChange={OnChange} name='phone' value={userData.phone} required />
            </div>
            <button type="submit" className="btn btn-primary">Book Ticket</button>
        </form>
    )
}
