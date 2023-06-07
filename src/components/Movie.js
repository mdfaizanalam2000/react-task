import React from 'react'
export default function Movie(props) {
    return (
        <div className='col-md-4 my-3'>
            <div className="card" style={{ width: "auto" }}>
                <img src={props.item.show.image.medium} className="card-img-top" alt="movie poster" />
                <div className="card-body">
                    <h5 className="card-title">{props.item.show.name}</h5>
                    <p className="card-text">
                        Score:<b>{parseFloat(props.item.score).toFixed(2)}</b> | Type:<b>{props.item.show.type}</b> <br />
                        Language:<b>{props.item.show.language}</b> | Status:<b>{props.item.show.status}</b>
                    </p>
                    <button className="btn btn-primary" onClick={() => props.showSummary(props.item.show.id)}>Read more</button>
                </div>
            </div>
        </div>
    )
}
