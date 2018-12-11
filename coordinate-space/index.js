'use strict';

// constrain our the space of our coordinate system
const margin = { top: 20, left: 20, bottom: 20, right: 20 },
      width = 500 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

// draw a space for our coordinate system in the DOM with an SVG (Scalable Vector Graphics) element
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

// How could you set the width and height of your SVG canvas dynamically?

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

// What we really need is a way to draw all three dots at the same time. D3
// allows us to bind a collection of data to a number of elements all in the
// same transformation.
const data = [
  { x: 50,  y: 100 },
  { x: 200, y: 10  },
  { x: 450, y: 450 }
];

// remove manually plotted dots
d3.selectAll('circle').remove();

// dynamically plot all dots at once
graph.selectAll('circle')
    .data(data)
  .enter().append('circle')
    .attr('r', 3.5)
    .attr('cx', d => d.x)
    .attr('cy', d => d.y)
    .style('fill', '#444');
