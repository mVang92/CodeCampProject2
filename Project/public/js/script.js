var bardata = [12, 78, 45, 15, 53];
var height = 320,
  // width = 600,
  width = 320,
  // barWidth = 50,
  barWidth = 60,
  barOffset = 5;

var yScale = d3
  .scaleLinear()
  .domain([0, d3.max(bardata)])
  .range([0, height]);

d3.select("#viz")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .style("background", "#C9D7D6")
  .selectAll("rect")
  .data(bardata)
  .enter()
  .append("rect")
  .style("fill", "#C61C6F")
  .attr("width", barWidth)
  .attr("height", function(d) {
    return yScale(d);
  })
  .attr("x", function(d, i) {
    return i * (barWidth + barOffset);
  })
  .attr("y", function(d) {
    return height - yScale(d);
  });
