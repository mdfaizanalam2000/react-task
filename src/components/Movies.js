import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import Summary from './Summary';

export default function Movies() {
    const [moviesData, setMoviesData] = useState([]);
    const [summary, setSummary] = useState(false);
    const [summaryID, setSummaryID] = useState("");
    const fetchData = () => {
        //The API provided to use has a serious issue while fetching data on browser. It is working fine on Postman or ThunderClient but response is going in pending state when used in browser. Therefore I have used a proxy server in order to bypass this problem temporarily and complete my task.
        fetch("https://thingproxy.freeboard.io/fetch/https://api.tvmaze.com/search/shows?q=all")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setMoviesData(data)
            })
    }

    useEffect(() => {
        fetchData();
    }, [])

    const showSummary = (id) => {
        setSummaryID(id);
        setSummary(true);
    }

    return (
        <>
            {!summary ?
                <div className='container'>
                    <div className="row">
                        {moviesData.map((item) => {
                            return <Movie key={item.show.id} item={item} summary={summary} showSummary={showSummary} />
                        })}
                    </div>
                </div>
                :
                moviesData.map((item) => {
                    if (item.show.id === summaryID) {
                        return <Summary key={item.show.id} summary={item.show} setSummary={setSummary} />
                    }
                    return null;
                })
            }
        </>
    )
}
