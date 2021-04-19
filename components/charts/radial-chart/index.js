// dependencies
import * as d3  from 'd3';

/* CONSTANTS */
const perSliceAngle = 2 * Math.PI / data.length;

// d3 variableS
const radiusScale = d3.scaleLinear()
    .domain(
        [
            d3.min( data, d => d.low ),
            d3.max( data, d => d.high ),
        ]
    )
    .range( [ 0, WIDTH / 2] );

const colorScale = d3.scaleSequential()
    .domain( d3.extent( data, d => d.avg ) )
    .interpolator( d3.interpolateRdYlBu );


// final data
const arcGenerator = d3.arc();
const radialChartData = data.map ( ( d, i ) => {
    const path = arcGenerator(
        {
            startAngle: i * perSliceAngle,
            endAngle: ( i + 1 ) * perSliceAngle,
            innerRadius: radiusScale( d.low ),
            outerRadius: radiusScale( d.high ),
        }
    )
    return {
        path,
        fill: colorScale ( d.avg ),
    }
} );

return radialChartData;