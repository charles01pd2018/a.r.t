// dependencies
import * as d3  from 'd3';

export const formatd3RadialChart = ( data, width ) => {
    /* CONSTANTS */
    const perSliceAngle = 2 * Math.PI / data.length;

    /* D3 VARIABLES */
    const radiusScale = d3.scaleLinear()
        .domain(
            [
                d3.min( data, d => d.low ),
                d3.max( data, d => d.high ),
            ]
        )
        .range( [ 0, width / 2] );

    const colorScale = d3.scaleSequential()
        .domain( d3.extent( data, d => d.avg ) )
        .interpolator( d3.interpolateRdYlBu ); // check the d3 docs for the color scale needed

    /* FINAL DATA */
    const arcGenerator = d3.arc();
    const radialChartData = data.map( ( d, i ) => (
        {
            path: arcGenerator(
                {
                    startAngle: i * perSliceAngle,
                    endAngle: ( i + 1 ) * perSliceAngle,
                    innerRadius: radiusScale( d.low ),
                    outerRadius: radiusScale( d.high ),
                }
            ),
            fill: colorScale( d.avg ),
        }
    ) );

    return radialChartData;
}