import * as d3 from 'd3';
import { dataToArray } from '../../../utils/dataToArray.js';
import {sortArrayByObjectKey} from '../../../utils/sortArrayByObjectKey.js';

function BarChart(data,{
    width,
    height,
    margin,
    padding = 0.1,
}){
    let colors = ["#054899", "#e29849"];
    if (data.length ===3) {
        colors = ["#054899", "#c64c7e", "#e29849"];
    }
    else if (data.length ==4) {
        colors = ["#054899", "#894696", "#e36b5e", "#e29849"];
    }
    else if (data.length >4) {colors = ["#054899", "#894696", "#c64c7e", "#e36b5e", "#e29849"];}
    sortArrayByObjectKey(data, "category")//group by category
    
const colorScale = d3.scaleQuantize() //define a color scale
  .domain([0, data.length - 1])
  .range(colors);
    
      // find the max of values in data 
    const max = d3.max(dataToArray(data, "value"));

    const svg = d3.create("div") // créer le div qui va contenir le svg
    .attr("class", "div-bar-chart")
    .append("svg")
    .attr("width", width-2*margin)
    .attr("height", height-2*margin)
    .attr("viewBox", [0, 0, width, height])  // positionner le centre du svg à la position (width,height) avec un repère défini à (0,0)
  
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
            .attr("x", (d,i) => xScale(i) ) // positionne les rectangles en fonction de l'index i
            .attr("y", (d) => yScale(d.value) ) // positionne les rectangles en fonction de la hauteur
            .attr("width", xScale.bandwidth()) // largeur des rectangles
            .attr("height", (d) => height - yScale(d.value) - margin) // hauteur des rectangles
            .attr("fill", (d, i) => colorScale(i)); // couleur des rectangles en suivant le meme dégradé que le background

        // add to style section later on svg .attr("style", "max-width: 100%; height: auto; height: intrinsic;"); // responsive
    return svg.node();
    }

export default BarChart;