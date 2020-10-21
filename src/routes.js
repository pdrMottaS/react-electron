import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Page1 from './pages/page1/index';
import Page2 from './pages/page2/index';

function Routes(){
    return(
        <BrowserRouter>
            <div>
                <main>
                    <Route exact path="/" component={()=>(<Page1/>)}/>
                    <Route exact path="/other" component={()=>(<Page2/>)}/>
                </main>
            </div>
        </BrowserRouter>
    )
}

export default Routes;