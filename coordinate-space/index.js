'use strict';

// constrain our coordinate space
const margin = { top: 20, left: 20, bottom: 20, right: 20 },
      width = 500 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

// draw a coordinate space in the DOM with an SVG (Scalable Vector Graphics) element
const graph = d3.select('#mount').append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .style('border', 'solid 1px #444')
  // group all of our SVG child elements so they can be acted on as one
  .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

/*
 *   SVG coordinate space
 *
 *   (0,0) ----------------------------------- (500,0)
 *     |                                           |
 *     |                                           |
 *     |                                           |
 *     |                 SVG                       |
 *     |                                           |
 *     |                                           |
 *     |                                           |
 *   (0,500) --------------------------------- (500,500)
 */

// plot three separate points in the coordinate space (50,100), (200,10), (450,450)
graph.append('circle')
    .attr('r', 3.5)
    .attr('cx', 50)
    .attr('cy', 100)
    .style('fill', '#444');

graph.append('circle')
    .attr('r', 3.5)
    .attr('cx', 200)
    .attr('cy', 10)
    .style('fill', '#444');

graph.append('circle')
    .attr('r', 3.5)
    .attr('cx', 450)
    .attr('cy', 450)
    .style('fill', '#444');
