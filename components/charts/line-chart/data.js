// dependencies
import * as d3 from 'd3';

export const formatd3LineChart = ( data, width, height ) => {
    /* X */
    const xExtent = d3.extent( data, d => d.date );
    const xScale = d3.scaleTime()
        .domain( xExtent )
        .range( [ 0, width ] );
    /* Y */
    const yMinExtent = d3.max( data, d => d.high );
    const yMaxExtent = d3.min( data, d => d.low );
    const yScale = d3.scaleLinear()
        .domain( [ yMinExtent, yMaxExtent ] )
        .range( [ height, 0 ] );

    /* FINAL DATA */
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
}

