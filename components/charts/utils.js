// dependencies
import { json } from 'd3';

export const fetchDataWithDate = async ( url ) => {
    const response = await json( url );

    return response.map( d => Object.assign( d, { date: new Date(d.date) } ) ); 
}

export const getDemoData = () => {
    const rawData = require('../../data/data.json');

    return rawData.map( d => Object.assign( d, { date: new Date(d.date) } ) ); ;
}