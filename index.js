var canvas = document.querySelector("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width,
    height = canvas.height;

var simulation = d3.forceSimulation()
    .force("link", d3.forceLink().id(function(d) { return d.id; }))
    .force("charge", d3.forceManyBody())
    .force("center", d3.forceCenter());

d3.json("a.json", function(error, graph) {
  if (error) throw error;

  simulation
      .nodes(graph.nodes)
      .on("tick", ticked);

  simulation.force("link")
      .links(graph.links);

  function ticked() {
    context.clearRect(0, 0, width, height);
    context.save();
    context.translate(width / 2, height / 2 + 40);

    context.beginPath();
    graph.links.forEach(drawLink);
    context.strokeStyle = "#aaa";
    context.stroke();
      
    context.beginPath();
    graph.nodes.forEach(drawNode);
    context.fill();
    context.strokeStyle = "#fff";
    context.stroke();

    context.restore();
  }
});

function drawLink(d) {
  context.moveTo(d.source.x, d.source.y);
  context.lineTo(d.target.x, d.target.y);
  context.moveTo((d.target.x - d.source.x)/2 + d.source.x,(d.target.y - d.source.y)/2 + d.source.y);
   // if ((d.target.y - d.source.y) > 0 && (d.target.x - d.source.x) > 0) {
     //   context.lineTo((d.target.x - d.source.x)/2 + d.source.x - (3 * (d.target.x - //d.source.x) /(Math.sqrt(Math.pow(d.target.x - d.source.x, 2) + Math.pow(d.target.y - //d.source.y, 2)))) - (3 * (d.target.y - d.source.y) /(Math.sqrt(Math.pow(d.target.x - //d.source.x, 2) + Math.pow(d.target.y - d.source.y, 2)))), (d.target.y - d.source.y) / 2 //+ d.source.y - (3 * (d.target.y - d.source.y) /(Math.sqrt(Math.pow(d.target.x - //d.source.x, 2) + Math.pow(d.target.y - d.source.y, 2)))) + (3 * (d.target.x - //d.source.x) /(Math.sqrt(Math.pow(d.target.x - d.source.x, 2) + Math.pow(d.target.y - //d.source.y, 2)))));
    //} else if ((d.target.y - d.source.y) > 0 && (d.target.x - d.source.x) < 0) {
        //context.lineTo(d.target.x + 5, d.target.y + 5);
    //} else if ((d.target.y - d.source.y) < 0 && (d.target.x - d.source.x) > 0) {
  context.lineTo((d.target.x - d.source.x)/2 + d.source.x - (3 * (d.target.x - d.source.x) /(Math.sqrt(Math.pow(d.target.x - d.source.x, 2) + Math.pow(d.target.y - d.source.y, 2)))) - (3 * (d.target.y - d.source.y) /(Math.sqrt(Math.pow(d.target.x - d.source.x, 2) + Math.pow(d.target.y - d.source.y, 2)))), (d.target.y - d.source.y) / 2 + d.source.y - (3 * (d.target.y - d.source.y) /(Math.sqrt(Math.pow(d.target.x - d.source.x, 2) + Math.pow(d.target.y - d.source.y, 2)))) + (3 * (d.target.x - d.source.x) /(Math.sqrt(Math.pow(d.target.x - d.source.x, 2) + Math.pow(d.target.y - d.source.y, 2)))));

  context.moveTo((d.target.x - d.source.x)/2 + d.source.x,(d.target.y - d.source.y)/2 + d.source.y);
    
  context.lineTo((d.target.x - d.source.x)/2 + d.source.x - (3 * (d.target.x - d.source.x) /(Math.sqrt(Math.pow(d.target.x - d.source.x, 2) + Math.pow(d.target.y - d.source.y, 2)))) + (3 * (d.target.y - d.source.y) /(Math.sqrt(Math.pow(d.target.x - d.source.x, 2) + Math.pow(d.target.y - d.source.y, 2)))), (d.target.y - d.source.y) / 2 + d.source.y - (3 * (d.target.y - d.source.y) /(Math.sqrt(Math.pow(d.target.x - d.source.x, 2) + Math.pow(d.target.y - d.source.y, 2)))) - (3 * (d.target.x - d.source.x) /(Math.sqrt(Math.pow(d.target.x - d.source.x, 2) + Math.pow(d.target.y - d.source.y, 2)))));
    //} else {
    //    context.lineTo(d.target.x + 5, d.target.y + 5);
    //}
}

function drawNode(d) {
  context.moveTo(d.x + 3, d.y);
  context.arc(d.x, d.y, 3, 0, 2 * Math.PI);
}

