// dependencies
import { useState } from 'react';
// utils
import { getDemoData } from '../utils';
import { formatd3LineChart } from './data';


const LineChart = ({
    id,
    dimensions: { width, height },
}) => {

    const rawData = getDemoData();
    const [ data, setData ] = useState( formatd3LineChart( rawData, width, height ) );

    return (
        <section id={id} className='container'>
        <h2>Line Chart</h2>
        <div className='radial-chart-container chart-container'>
            <svg width={width} height={height}>
                <g transform={`translate( ${width / 2}, ${height / 2} )`}>
                    {
                        data.map( ( radialItem, index ) => (
                            <path key={`radial-${index}`} d={radialItem.path} fill={radialItem.fill} /> 
                        ) )
                    }
                </g>
            </svg>
        </div>
        </section>
    );
}

export default LineChart;