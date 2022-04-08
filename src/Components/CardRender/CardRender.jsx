import React from 'react';
import Card from '.././Card/Card';
import './Style.css';
import Data from '.././Data/Data'
import { BrowserRouter } from 'react-router-dom';


function CardRender(){
    const info = Data.map((item) => {
return(
    <BrowserRouter>
    <Card item = { item } />
    </BrowserRouter>

);

    })
    return(
<div className='wrapper'>
{ info }
</div>
    );

}
export default CardRender;