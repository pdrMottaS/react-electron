import React from 'react';
import {Link} from 'react-router-dom';

function Page2(){
    return(
        <>
        <h1>Page 2</h1>
        <Link to="/">Link to Page 1</Link>
        </>
    )
}

export default Page2;