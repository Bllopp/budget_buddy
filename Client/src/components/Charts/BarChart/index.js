import * as d3 from 'd3';
import { dataToArray } from '../../../utils/dataToArray.js';
import {sortArrayByObjectKey} from '../../../utils/sortArrayByObjectKey.js';

function BarChart(data, {
  width,
  height,
  margin,
  padding = 0.1,
  name = ([x]) => x, // given d in data, returns the (ordinal) label
  value = ([, y]) => y, // given d in data, returns the (quantitative) value
  names,
  format = ",",
  title // Ajout du paramètre "title"
}) {
  // Compute values.
  const N = d3.map(data, name);
  const V = d3.map(data, value);

  // Unique the names.
  if (names === undefined) names = N;
  names = new d3.InternSet(names);

  // Compute titles.
  if (title === undefined) {
      const formatValue = d3.format(format);
      title = (i) => `${N[i]}\n${formatValue(V[i])}`;
  } else {
      const O = d3.map(data, (d) => d);
      const T = title;
      title = (i) => T(O[i], i, data);
  }

  let colors = ["#054899", "#e29849"];
  if (data.length === 3) {
      colors = ["#054899", "#c64c7e", "#e29849"];
  } else if (data.length == 4) {
      colors = ["#054899", "#894696", "#e36b5e", "#e29849"];
  } else if (data.length > 4) {
      colors = ["#054899", "#894696", "#c64c7e", "#e36b5e", "#e29849"];
  }
  sortArrayByObjectKey(data, "category"); //group by category

  const colorScale = d3.scaleQuantize() //define a color scale
      .domain([0, data.length - 1])
      .range(colors);

  // find the max of values in data 
  const max = d3.max(dataToArray(data, "value"));

  const svg = d3.create("div") // créer le div qui va contenir le svg
      .attr("class", "div-bar-chart")
      .append("svg")
      .attr("width", width - 2 * margin)
      .attr("height", height - 2 * margin)
      .attr("viewBox", [0, 0, width, height]); // positionner le centre du svg à la position (width,height) avec un repère défini à (0,0)

  const xScale = d3.scaleBand()
      .domain(d3.range(data.length))
      .range([margin, width - margin])
      .paddingInner(padding);

  const yScale = d3.scaleLinear()
      .domain([0, max])
      .range([height - margin, margin]);

  const xAxis = d3.axisBottom(xScale); // permet de visualiser les axes
  const yAxis = d3.axisLeft(yScale);
  svg.append("g")
      .attr("transform", `translate(0, ${height - margin})`)
      .call(xAxis);

  svg.append("g")
      .attr("transform", `translate(${margin}, 0)`)
      .call(yAxis);

  svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => xScale(i)) // positionne les rectangles en fonction de l'index i
      .attr("y", (d) => yScale(d.value)) // positionne les rectangles en fonction de la hauteur
      .attr("width", xScale.bandwidth()) // largeur des rectangles
      .attr("height", (d) => height - yScale(d.value) - margin) // hauteur des rectangles
      .attr("fill", (d, i) => colorScale(i)); // couleur des rectangles en suivant le même dégradé que le background

  return svg.node();
}


export default BarChart;