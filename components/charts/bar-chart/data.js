// dependencies
import * as d3 from 'd3';

export const formatd3BarChartData = ( data, width, height ) => {
    /* X */
    const xExtent = d3.extent( data, d => d.date );
    const xScale = d3.scaleTime()
        .domain( xExtent )
        .range( [ 0, width ] );
    /* Y */
    const [ yMinExtent, yMaxExtent ] = d3.extent( data, d => d.high );
    const yScale = d3.scaleLinear()
        .domain( [ Math.min( yMinExtent, 0 ), yMaxExtent ] )
        .range( [ height, 0 ] );
    /* COLOR SCALE */
    const colorExtent = d3.extent( data, d => d.avg ).reverse(); // use reverse when to flip color scale axis
    const colorScale = d3.scaleSequential()
        .domain( colorExtent )
        .interpolator( d3.interpolateRdYlBu ); // check the d3 docs for the color scale needed

    /* FINAL DATA */
    const barChartData = data.map( d => (
        {
            x: xScale( d.date ),
            y: yScale( d.high ),
            height: yScale( d.low ) - yScale( d.high ),
            fill: colorScale( d.avg )
        }
    ));

    return barChartData;
}