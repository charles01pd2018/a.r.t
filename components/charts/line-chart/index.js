// dependencies
import * as d3 from 'd3';

/* CONSTANTS */
const WIDTH = 650;
const HEIGHT = 400;

// load the data
/* data shape
[
    {
    "date": "1/1/2017",
    "high": 54,
    "avg": 50,
    "low": 46
  }, ...
] */
const data = d3.json('https://raw.githubusercontent.com/sxywu/react-d3-example/master/public/sf.json')
  .then(resp => {
    return resp.map( d => Object.assign( d, { date: new Date(d.date) } ) );
  } );

// d3 variables
const xExtent = d3.extent( data, d => d.date );
const xScale = d3.scaleTime()
    .domain( xExtent )
    .range( [ 0, WIDTH ] );

const yMinExtent = d3.max( data, d => d.high );
const yMaxExtent = d3.min( data, d => d.low );
const yScale = d3.scaleLinear()
  .domain( [ yMinExtent, yMaxExtent ] )
  .range( [ HEIGHT, 0 ] );

// final data
const highLine = d3.line()
  .x( d => xScale( d.date ) )
  .y( d => yScale( d.high ) );

const lowLine = d3.line()
  .x( d, xScale( d.date ) )
    .y( d => yScale( d.low ) ) ;

return [
    {
        path: highLine( data ), 
        fill: 'red'
    },
    {
        path: lowLine( data ),
        fill: 'blue'
    }
];