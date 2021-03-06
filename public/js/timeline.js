var y_offset = -90;

var circleData = [
  // oct 2014
  { "center_x": 170, "center_y": 280 + y_offset, "radius": 60, "border_width": 3, "border_color": "white", "fill_color": "#B0EBDE" },
  { "center_x": 850, "center_y": 280 + y_offset, "radius": 110, "border_width": 3, "border_color": "white", "fill_color": "#DBFFFB" },
  // may 2014
  { "center_x": 170, "center_y": 580 + y_offset, "radius": 60, "border_width": 3, "border_color": "white", "fill_color": "#B0EBDE" },
  { "center_x": 750, "center_y": 580 + y_offset, "radius": 80, "border_width": 3, "border_color": "white", "fill_color": "#eac7ca" },
  // june 2013
  { "center_x": 170, "center_y": 900 + y_offset, "radius": 60, "border_width": 3, "border_color": "white", "fill_color": "#B0EBDE" },
  { "center_x": 850, "center_y": 900 + y_offset, "radius": 80, "border_width": 3, "border_color": "white", "fill_color": "#ffe7b8" },
  // august 2012
  { "center_x": 170, "center_y": 1200 + y_offset, "radius": 60, "border_width": 3, "border_color": "white", "fill_color": "#B0EBDE" },
  { "center_x": 750, "center_y": 1200 + y_offset, "radius": 110, "border_width": 3, "border_color": "white", "fill_color": "#E6E6E6" },
  // may 2012
  { "center_x": 170, "center_y": 1500 + y_offset, "radius": 60, "border_width": 3, "border_color": "white", "fill_color": "#B0EBDE" },
  { "center_x": 830, "center_y": 1500 + y_offset, "radius": 90, "border_width": 3, "border_color": "white", "fill_color": "#ffe3e4" },
  // august 2011
  { "center_x": 170, "center_y": 1800 + y_offset, "radius": 60, "border_width": 3, "border_color": "white", "fill_color": "#B0EBDE" },
  { "center_x": 750, "center_y": 1800 + y_offset, "radius": 80, "border_width": 3, "border_color": "white", "fill_color": "#a8cce8" },
  // may 2011
  { "center_x": 170, "center_y": 2100 + y_offset, "radius": 60, "border_width": 3, "border_color": "white", "fill_color": "#B0EBDE" },
  { "center_x": 850, "center_y": 2100 + y_offset, "radius": 110, "border_width": 3, "border_color": "white", "fill_color": "#black" },
  // jan 2011
  { "center_x": 170, "center_y": 2400 + y_offset, "radius": 60, "border_width": 3, "border_color": "white", "fill_color": "#B0EBDE" },
  { "center_x": 750, "center_y": 2400 + y_offset, "radius": 90, "border_width": 3, "border_color": "white", "fill_color": "#B06A6C" },
  // nov 2007
  { "center_x": 170, "center_y": 2700 + y_offset, "radius": 60, "border_width": 3, "border_color": "white", "fill_color": "#B0EBDE" },
  { "center_x": 800, "center_y": 2700 + y_offset, "radius": 80, "border_width": 3, "border_color": "white", "fill_color": "#C1C5DD" },
  // timeline bottom
  { "center_x": 170, "center_y": 3000 + y_offset, "radius": 60, "border_width": 3, "border_color": "white", "fill_color": "#A8CCE8" }

];

var lineData = [
  // timeline connectors
  { "start_x": 170, "start_y": 340 + y_offset, "end_x": 170, "end_y": 520 + y_offset, "width": 3, "color" : "white" },
  { "start_x": 170, "start_y": 640 + y_offset, "end_x": 170, "end_y": 840 + y_offset, "width": 3, "color" : "white" },
  { "start_x": 170, "start_y": 960 + y_offset, "end_x": 170, "end_y": 1140 + y_offset, "width": 3, "color" : "white" },
  { "start_x": 170, "start_y": 1260 + y_offset, "end_x": 170, "end_y": 1440 + y_offset, "width": 3, "color" : "white" },
  { "start_x": 170, "start_y": 1560 + y_offset, "end_x": 170, "end_y": 1740 + y_offset, "width": 3, "color" : "white" },
  { "start_x": 170, "start_y": 1860 + y_offset, "end_x": 170, "end_y": 2040 + y_offset, "width": 3, "color" : "white" },
  { "start_x": 170, "start_y": 2160 + y_offset, "end_x": 170, "end_y": 2340 + y_offset, "width": 3, "color" : "white" },
  { "start_x": 170, "start_y": 2460 + y_offset, "end_x": 170, "end_y": 2640 + y_offset, "width": 3, "color" : "white" },
  { "start_x": 170, "start_y": 2760 + y_offset, "end_x": 170, "end_y": 2940 + y_offset, "width": 3, "color" : "white" },

  //oct 2014
{ "start_x": 230, "start_y": 280 + y_offset, "end_x": 740, "end_y": 280 + y_offset, "width": 3, "color" : "white" },
  // may 2014
  { "start_x": 230, "start_y": 580 + y_offset, "end_x": 670, "end_y": 580 + y_offset, "width": 3, "color" : "white" },
  // june 2013
  { "start_x": 230, "start_y": 900 + y_offset, "end_x": 770, "end_y": 900 + y_offset, "width": 3, "color" : "white" },
  // august 2012
  { "start_x": 230, "start_y": 1200 + y_offset, "end_x": 640, "end_y": 1200 + y_offset, "width": 3, "color" : "white" },
  // may 2012
  { "start_x": 230, "start_y": 1500 + y_offset, "end_x": 740, "end_y": 1500 + y_offset, "width": 3, "color" : "white" },
  // august 2011
  { "start_x": 230, "start_y": 1800 + y_offset, "end_x": 670, "end_y": 1800 + y_offset, "width": 3, "color" : "white" },
  // may 2011
  { "start_x": 230, "start_y": 2100 + y_offset, "end_x": 740, "end_y": 2100 + y_offset, "width": 3, "color" : "white" },
  // jan 2011
  { "start_x": 230, "start_y": 2400 + y_offset, "end_x": 660, "end_y": 2400 + y_offset, "width": 3, "color" : "white" },
  // nov 2007
  { "start_x": 230, "start_y": 2700 + y_offset, "end_x": 720, "end_y": 2700 + y_offset, "width": 3, "color" : "white" },



];

var svgContainer = d3.select("#my-timeline-article").append("svg")
                                    .attr("width", $("#my-timeline-article").width())
                                    .attr("height", $("#my-timeline-article").height())
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
