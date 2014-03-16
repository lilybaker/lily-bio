var circleData = [
  // central line pivots
  { "center_x": 150, "center_y": 325 , "radius": 8, "border_width": 3, "border_color": "white", "fill_color": "none" },
  { "center_x": 900, "center_y": 325 , "radius": 8, "border_width": 3, "border_color": "white", "fill_color": "none" },
  { "center_x": 820, "center_y": 325 , "radius": 8, "border_width": 3, "border_color": "white", "fill_color": "none" },
  { "center_x": 740, "center_y": 325 , "radius": 8, "border_width": 3, "border_color": "white", "fill_color": "none" },
  { "center_x": 660, "center_y": 325 , "radius": 8, "border_width": 3, "border_color": "white", "fill_color": "none" },
  { "center_x": 580, "center_y": 325 , "radius": 8, "border_width": 3, "border_color": "white", "fill_color": "none" },

];

var lineData = [
  // central line segments
  { "start_x": 158, "start_y": 325, "end_x": 572, "end_y": 325, "width": 3, "color" : "white" },
  { "start_x": 588, "start_y": 325, "end_x": 652, "end_y": 325, "width": 3, "color" : "white" },
  { "start_x": 668, "start_y": 325, "end_x": 732, "end_y": 325, "width": 3, "color" : "white" },
  { "start_x": 748, "start_y": 325, "end_x": 812, "end_y": 325, "width": 3, "color" : "white" },
  { "start_x": 828, "start_y": 325, "end_x": 892, "end_y": 325, "width": 3, "color" : "white" },
  // get in touch branch segments
  { "start_x": 660, "start_y": 317, "end_x": 660, "end_y": 287, "width": 3, "color" : "white" },
  { "start_x": 740, "start_y": 317, "end_x": 740, "end_y": 237, "width": 3, "color" : "white" },
  { "start_x": 820, "start_y": 317, "end_x": 820, "end_y": 287, "width": 3, "color" : "white" },
  // follow me branch segments
  { "start_x": 580, "start_y": 332, "end_x": 580, "end_y": 362, "width": 3, "color" : "white" },
  { "start_x": 660, "start_y": 332, "end_x": 660, "end_y": 412, "width": 3, "color" : "white" },
  { "start_x": 740, "start_y": 332, "end_x": 740, "end_y": 462, "width": 3, "color" : "white" },
  { "start_x": 820, "start_y": 332, "end_x": 820, "end_y": 412, "width": 3, "color" : "white" },
  { "start_x": 900, "start_y": 332, "end_x": 900, "end_y": 362, "width": 3, "color" : "white" },

];


var svgContainer = d3.select("#contact-me-article").append("svg")
                                    .attr("width", $("#contact-me-article").width())
                                    .attr("height", $("#contact-me-article").height())
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
