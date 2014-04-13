var circleData = [
  { "center_x": 525, "center_y": 150, "radius": 50, "border_width": 3, "border_color": "white", "fill_color": "#C3CDF9" },
  { "center_x": 525, "center_y": 280, "radius": 25, "border_width": 3, "border_color": "white", "fill_color": "#E8AEB4" },
  { "center_x": 525, "center_y": 410, "radius": 50, "border_width": 3, "border_color": "white", "fill_color": "#C3CDF9" },
  { "center_x": 525, "center_y": 545, "radius": 25, "border_width": 3, "border_color": "white", "fill_color": "#A0CEC6" },
  { "center_x": 175, "center_y": 280, "radius": 100, "border_width": 3, "border_color": "white", "fill_color": "#F1F1F1"},
  { "center_x": 970, "center_y": 280, "radius": 8, "border_width": 3, "border_color": "white", "fill_color": "none" },
  { "center_x": 175, "center_y": 550, "radius": 8, "border_width": 3, "border_color": "white", "fill_color": "none" },
  { "center_x": 850, "center_y": 550, "radius": 8, "border_width": 3, "border_color": "white", "fill_color": "none" },
  { "center_x": 525, "center_y": 679, "radius": 25, "border_width": 3, "border_color": "white", "fill_color": "#AB9AC7"},
  { "center_x": 175, "center_y": 679, "radius": 8, "border_width": 3, "border_color": "white", "fill_color": "none" },
  { "center_x": 175, "center_y": 810, "radius": 80, "border_width": 3, "border_color": "white", "fill_color": "#F1F1F1"},
  { "center_x": 850, "center_y": 810, "radius": 100, "border_width": 3, "border_color": "white", "fill_color": "#black"},
  { "center_x": 175, "center_y": 1060, "radius": 80, "border_width": 3, "border_color": "white", "fill_color": "#AA1826"},
  { "center_x": 525, "center_y": 1060, "radius": 25, "border_width": 3, "border_color": "white", "fill_color": "#E8AEB4" },
  { "center_x": 525, "center_y": 810, "radius": 50, "border_width": 3, "border_color": "white", "fill_color": "#C3CDF9" },
  { "center_x": 525, "center_y": 950, "radius": 25, "border_width": 3, "border_color": "white", "fill_color": "#E8AEB4" },
  { "center_x": 850, "center_y": 950, "radius": 8, "border_width": 3, "border_color": "white", "fill_color": "none" },
  { "center_x": 175, "center_y": 280, "radius": 8, "border_width": 3, "border_color": "white", "fill_color": "none" },

];

var lineData = [
  { "start_x": 525, "start_y": 210, "end_x": 525, "end_y": 256, "width": 3, "color" : "white" },
  { "start_x": 550, "start_y": 280, "end_x": 961, "end_y": 280, "width": 3, "color" : "white" },
  { "start_x": 525, "start_y": 305, "end_x": 525, "end_y": 351, "width": 3, "color" : "white" },
  { "start_x": 525, "start_y": 470, "end_x": 525, "end_y": 520, "width": 3, "color" : "white" },
  { "start_x": 500, "start_y": 550, "end_x": 182, "end_y": 550, "width": 3, "color" : "white" },
  { "start_x": 550, "start_y": 550, "end_x": 842, "end_y": 550, "width": 3, "color" : "white" },
  { "start_x": 525, "start_y": 570, "end_x": 525, "end_y": 655, "width": 3, "color" : "white" },
  { "start_x": 175, "start_y": 542, "end_x": 175, "end_y": 510, "width": 3, "color" : "white" },
  { "start_x": 500, "start_y": 679, "end_x": 182, "end_y": 679, "width": 3, "color" : "white" },
  { "start_x": 175, "start_y": 686, "end_x": 175, "end_y": 710, "width": 3, "color" : "white" },
  { "start_x": 850, "start_y": 556, "end_x": 850, "end_y": 710, "width": 3, "color" : "white" },
  { "start_x": 525, "start_y": 705, "end_x": 525, "end_y": 750, "width": 3, "color" : "white" },
  { "start_x": 525, "start_y": 870, "end_x": 525, "end_y": 925, "width": 3, "color" : "white" },
  { "start_x": 275, "start_y": 1060, "end_x": 500, "end_y": 1060, "width": 3, "color" : "white" },
  { "start_x": 525, "start_y": 1085, "end_x": 525, "end_y": 1130, "width": 3, "color" : "white" },
  { "start_x": 550, "start_y": 950, "end_x": 842, "end_y": 950, "width": 3, "color" : "white" },
  { "start_x": 850, "start_y": 940, "end_x": 850, "end_y": 910, "width": 3, "color" : "white" },
  { "start_x": 175, "start_y": 310, "end_x": 175, "end_y": 288, "width": 3, "color" : "white" },
  { "start_x": 182, "start_y": 280, "end_x": 500, "end_y": 280, "width": 3, "color" : "white" },


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
