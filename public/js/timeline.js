var circleData = [
  // may 2014
  { "center_x": 170, "center_y": 180, "radius": 60, "border_width": 3, "border_color": "white", "fill_color": "#B0EBDE" },
  { "center_x": 750, "center_y": 180, "radius": 80, "border_width": 3, "border_color": "white", "fill_color": "#eac7ca" },
  // june 2013
  { "center_x": 170, "center_y": 500, "radius": 60, "border_width": 3, "border_color": "white", "fill_color": "#B0EBDE" },
  { "center_x": 850, "center_y": 500, "radius": 80, "border_width": 3, "border_color": "white", "fill_color": "#ffe7b8" },
  // august 2012
  { "center_x": 170, "center_y": 800, "radius": 60, "border_width": 3, "border_color": "white", "fill_color": "#B0EBDE" },
  { "center_x": 750, "center_y": 800, "radius": 110, "border_width": 3, "border_color": "white", "fill_color": "#E6E6E6" },
  // may 2012
  { "center_x": 170, "center_y": 1100, "radius": 60, "border_width": 3, "border_color": "white", "fill_color": "#B0EBDE" },
  { "center_x": 830, "center_y": 1100, "radius": 90, "border_width": 3, "border_color": "white", "fill_color": "#ffe3e4" },
  // august 2011
  { "center_x": 170, "center_y": 1400, "radius": 60, "border_width": 3, "border_color": "white", "fill_color": "#B0EBDE" },
  { "center_x": 750, "center_y": 1400, "radius": 80, "border_width": 3, "border_color": "white", "fill_color": "#a8cce8" },
  // may 2011
  { "center_x": 170, "center_y": 1700, "radius": 60, "border_width": 3, "border_color": "white", "fill_color": "#B0EBDE" },
  { "center_x": 850, "center_y": 1700, "radius": 110, "border_width": 3, "border_color": "white", "fill_color": "#black" },
  // jan 2011
  { "center_x": 170, "center_y": 2000, "radius": 60, "border_width": 3, "border_color": "white", "fill_color": "#B0EBDE" },
  { "center_x": 750, "center_y": 2000, "radius": 90, "border_width": 3, "border_color": "white", "fill_color": "#B06A6C" },
  // nov 2007
  { "center_x": 170, "center_y": 2300, "radius": 60, "border_width": 3, "border_color": "white", "fill_color": "#B0EBDE" },
  { "center_x": 800, "center_y": 2300, "radius": 80, "border_width": 3, "border_color": "white", "fill_color": "#C1C5DD" },
  // timeline bottom
  { "center_x": 170, "center_y": 2600, "radius": 60, "border_width": 3, "border_color": "white", "fill_color": "#A8CCE8" }

];

var lineData = [
  // timeline connectors
  { "start_x": 170, "start_y": 240, "end_x": 170, "end_y": 440, "width": 3, "color" : "white" },
  { "start_x": 170, "start_y": 560, "end_x": 170, "end_y": 740, "width": 3, "color" : "white" },
  { "start_x": 170, "start_y": 860, "end_x": 170, "end_y": 1040, "width": 3, "color" : "white" },  
  { "start_x": 170, "start_y": 1160, "end_x": 170, "end_y": 1340, "width": 3, "color" : "white" },
  { "start_x": 170, "start_y": 1460, "end_x": 170, "end_y": 1640, "width": 3, "color" : "white" },
  { "start_x": 170, "start_y": 1760, "end_x": 170, "end_y": 1940, "width": 3, "color" : "white" },
  { "start_x": 170, "start_y": 2060, "end_x": 170, "end_y": 2240, "width": 3, "color" : "white" },
  { "start_x": 170, "start_y": 2360, "end_x": 170, "end_y": 2540, "width": 3, "color" : "white" },

  // may 2014
  { "start_x": 230, "start_y": 180, "end_x": 670, "end_y": 180, "width": 3, "color" : "white" },
  // june 2013
  { "start_x": 230, "start_y": 500, "end_x": 770, "end_y": 500, "width": 3, "color" : "white" },
  // august 2012
  { "start_x": 230, "start_y": 800, "end_x": 640, "end_y": 800, "width": 3, "color" : "white" },
  // may 2012
  { "start_x": 230, "start_y": 1100, "end_x": 740, "end_y": 1100, "width": 3, "color" : "white" },
  // august 2011
  { "start_x": 230, "start_y": 1400, "end_x": 670, "end_y": 1400, "width": 3, "color" : "white" },
  // may 2011
  { "start_x": 230, "start_y": 1700, "end_x": 740, "end_y": 1700, "width": 3, "color" : "white" },
  // jan 2011
  { "start_x": 230, "start_y": 2000, "end_x": 660, "end_y": 2000, "width": 3, "color" : "white" },
  // nov 2007
  { "start_x": 230, "start_y": 2300, "end_x": 720, "end_y": 2300, "width": 3, "color" : "white" },



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
