const canvasSketch = require('canvas-sketch');
const { lerp } = require('canvas-sketch-util');

const settings = {
  dimensions: [ 2048, 2048 ],
};

const circleSketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'blue';
    context.fillRect(0, 0, width, height);

    context.beginPath();
    context.arc( width/2, height/2, width*0.3, 0, Math.PI * 2 , false );
    context.fillStyle = 'orange';
    context.fill();
    
    context.lineWidth = width * 0.05;
    context.strokeStyle = 'green';
    context.stroke();
  };
};

// canvasSketch( circleSketch, settings );

const gridSketch = () => {
  const createGrid = () => {
    const points = [];
    const count = 5;
    for (let x=0; x < count; x++ ) {
      for(let y=0; y < count; y++ ) {
        const num = count <= 1 ? 0.5 : ( count - 1 );
        const u = x / num;
        const v = y / num;
        points.push( [ u, v ] ); 
      }
    }
    return points;
  }

  const points = createGrid();
  const margin = 50;

  return ( { context, width, height } ) => {
    context.fillStyle = 'white';
    context.fillRect( 0, 0, width, height );

    points.forEach( ( [ u, v ] )  => {
      const x = lerp( margin, width-margin, u );
      const y = lerp( margin, height-margin, v );

      context.beginPath();
      context.arc( x, y, 100, 0, Math.PI*2, false );
      context.strokeWidth = 'black';
      context.lineWidth = 40;
      context.stroke();
    } );
  } 
}

canvasSketch(gridSketch, settings);
