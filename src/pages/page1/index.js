import React from 'react';
import {Link} from 'react-router-dom';

function Page1(){
    return(
        <>
        <h1>Page 1</h1>
        <Link to="/other">Link to Page 2</Link>
        </>
    )
}

export default Page1;