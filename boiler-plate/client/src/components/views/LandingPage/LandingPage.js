import React, {useEffect} from 'react'
import axios from 'axios';

function LandingPate() {
    useEffect(() => {
        axios.get('/api/hello')
        .then(response => console.log(response.data));
    }, [])

    return (
        <div>
            LandingPage
        </div>
    )
}

export default LandingPate
