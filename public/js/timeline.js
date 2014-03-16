var circleData = [
  { "center_x": 525, "center_y": 150, "radius": 60, "border_width": 3, "border_color": "white", "fill_color": "#CFD1E1" },
  { "center_x": 525, "center_y": 310, "radius": 25, "border_width": 3, "border_color": "white", "fill_color": "#df9fed" },
  { "center_x": 850, "center_y": 310, "radius": 8, "border_width": 3, "border_color": "white", "fill_color": "none" },
  { "center_x": 525, "center_y": 470, "radius": 60, "border_width": 3, "border_color": "white", "fill_color": "#CFD1E1" },
  { "center_x": 525, "center_y": 450, "radius": 8, "border_width": 3, "border_color": "white", "fill_color": "none" },
  { "center_x": 175, "center_y": 450, "radius": 100, "border_width": 3, "border_color": "white", "fill_color": "#F1F1F1"}

];

var lineData = [
  { "start_x": 525, "start_y": 210, "end_x": 525, "end_y": 286, "width": 3, "color" : "white" },
  { "start_x": 549, "start_y": 310, "end_x": 842, "end_y": 310, "width": 3, "color" : "white" },
  { "start_x": 525, "start_y": 335, "end_x": 525, "end_y": 410, "width": 3, "color" : "white" },
  { "start_x": 517, "start_y": 570, "end_x": 275, "end_y": 570, "width": 3, "color" : "white" },

];

var svgContainer = d3.select("#my-timeline-article").append("svg")
                                    .attr("width", $("#work-article").width())
                                    .attr("height", $("#work-article").height())
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
