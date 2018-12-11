'use strict';

// constrain our the space of our coordinate system

// draw a space for our coordinate system in the DOM with an SVG (Scalable Vector Graphics) element
  // group all of our SVG child elements so they can be acted on as one

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

// What we really need is a way to draw all three dots at the same time. D3
// allows us to bind a collection of data to a number of elements all in the
// same transformation.

// remove manually plotted dots

// dynamically plot all dots at once
