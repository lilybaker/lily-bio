var circleData = [
  // map circle and pivot
  { "center_x": 250, "center_y": 250 , "radius": 170, "border_width": 3, "border_color": "white", "fill_color": "#f0e0f6" },
  { "center_x": 250, "center_y": 470 , "radius": 8, "border_width": 3, "border_color": "white", "fill_color": "none" },
  // australia circle and pivot
  { "center_x": 870, "center_y": 470 , "radius": 100, "border_width": 3, "border_color": "white", "fill_color": "#a0cec6" },
  // canada circle and pivot
  { "center_x": 250, "center_y": 690 , "radius": 8, "border_width": 3, "border_color": "white", "fill_color": "none" },
  { "center_x": 730, "center_y": 690 , "radius": 100, "border_width": 3, "border_color": "white", "fill_color": "#e8aeb4" },
  // uk circle and pivot
  { "center_x": 250, "center_y": 910 , "radius": 8, "border_width": 3, "border_color": "white", "fill_color": "none" },
  { "center_x": 870, "center_y": 910 , "radius": 100, "border_width": 3, "border_color": "white", "fill_color": "#ab9ac7" }
];

var lineData = [
  // map horizontal and vertical
  { "start_x": 420, "start_y": 250, "end_x": 630, "end_y": 250, "width": 3, "color" : "white" },
  { "start_x": 250, "start_y": 420, "end_x": 250, "end_y": 462, "width": 3, "color" : "white" },
  // ausralia vertical and horizontal
  { "start_x": 258, "start_y": 470, "end_x": 770, "end_y": 470, "width": 3, "color" : "white" },
  { "start_x": 250, "start_y": 478, "end_x": 250, "end_y": 682, "width": 3, "color" : "white" },
  // canada vertical and horizontal
  { "start_x": 258, "start_y": 690, "end_x": 630, "end_y": 690, "width": 3, "color" : "white" },
  { "start_x": 250, "start_y": 698, "end_x": 250, "end_y": 902, "width": 3, "color" : "white" },
  // uk horizontal
  { "start_x": 258, "start_y": 910, "end_x": 770, "end_y": 910, "width": 3, "color" : "white" }
];


var svgContainer = d3.select("#about-me-article").append("svg")
                                    .attr("width", $("#about-me-article").width())
                                    .attr("height", $("#about-me-article").height())
                                    .attr("display", "block");

var circles = svgContainer.selectAll("circle")
                          .data(circleData)
                          .enter()
                          .append("circle")

var lines = svgContainer.selectAll("line")
                          .data(lineData)
                          .enter()
                          .append("line");

var circleAttributes = circles
                       .attr("cx", function (d) { return d.center_x; })
                       .attr("cy", function (d) { return d.center_y; })
                       .attr("r", function (d) { return d.radius; })
                       .style("stroke-width", function(d) { return d.border_width; })
                       .style("stroke", function(d) { return d.border_color; })
                       .style("fill", function(d) { return d.fill_color; });

var lineAttributes = lines
                       .attr("x1", function (d) { return d.start_x; })
                       .attr("y1", function (d) { return d.start_y; })
                       .attr("x2", function (d) { return d.end_x; })
                       .attr("y2", function (d) { return d.end_y; })
                       .style("stroke-width", function(d) { return d.width; })
                       .style("stroke", function(d) { return d.color; });
