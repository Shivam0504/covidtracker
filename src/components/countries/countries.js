import React,{useState,useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import {fetchCountries} from '../../api';

const Countries =({handleCountryChange}) =>{   
    const [fetchedCountries,setFetchedCountries] = useState([]);

    useEffect(()=>{
        const fecthAPI = async () =>{
            setFetchedCountries(await fetchCountries());
        }
        fecthAPI();
    },[setFetchedCountries]);
    
        return (
            <FormControl style={{padding : "2.5%"}}>
                <NativeSelect defaultValue="" onChange={(e)=> handleCountryChange(e.target.value)} >
                    <option value="" disabled={true} >None</option>
                    {fetchedCountries.map((country,i)=><option key={i} value={country}>{country}</option>)}
       

                </NativeSelect>
            </FormControl>
        )
    
}

export default Countries;