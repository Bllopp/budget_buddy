import * as d3 from 'd3';
import { dataToArray } from '../../../utils/dataToArray.js';
import {sortArrayByObjectKey} from '../../../utils/sortArrayByObjectKey.js';

function BarChart(data,{
    width,
    height,
    margin,
    padding = 0.1,
}){
    sortArrayByObjectKey(data, "category")//group by category
    
    // turn data  into an array with only the values
    
      // find the max of values in data 
    const max = d3.max(dataToArray(data, "value"));

    const svg = d3.create("div") // créer le div qui va contenir le svg
    .attr("class", "div-bar-chart")
    .append("svg")
    .attr("width", width-2*margin)
    .attr("height", height-2*margin)
    .attr("viewBox", [0, 0, width, height])  // positionner le centre du svg à la position (width,height) avec un repère défini à (0,0)
  
    const xScale = d3.scaleBand() //créé l'objet contenant les valeurs que peut prendre x 
                    .domain(d3.range(data.length))
                    .range(margin, width-margin)
                    .paddingInner(padding);
    
    const yScale = d3.scaleLinear() // idem pour y
                    .domain([0, max])
                    .range([margin, height-margin]);

    const xAxis = d3.axisBottom(xScale); // permet de visualiser les axes
    const yAxis = d3.axisLeft(yScale);


    
    svg.selectAll("rect")
        .data(data)
        .enter()
            .append("rect")
            .attr("x", (d,i) => xScale(i) ) // positionne les rectangles en fonction de l'index i
            .attr("y", (d) => yScale(d.value) ) // positionne les rectangles en fonction de la hauteur
            .attr("width", xScale.bandwidth()) // largeur des rectangles
            .attr("height", (d) => height - yScale(d.value) - margin) // hauteur des rectangles



        // add to style section later on svg .attr("style", "max-width: 100%; height: auto; height: intrinsic;"); // responsive
    return svg.node();
    }

export default BarChart;