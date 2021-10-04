import React, {useEffect, useState} from 'react';
import {fetchData} from '../services/data';
import DataItems from './DataItems';

function Navigation(props) {
    const [data, setData] = useState([]);

    useEffect(() =>{
        async function getData(){
             const result = await fetchData();
             setData(result);
         }
         
         getData();
     })
    return (
        <div>
            <DataItems data={data}></DataItems>
        </div>
    );
}

export default Navigation;