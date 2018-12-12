'use strict';

// select elements that already exist in the DOM
document.getElementsByTagName('body')[0];
d3.select('body');

document.getElementById('mount');
d3.select('#mount');

// what do these methods return?
console.log(document.getElementsByTagName('body')[0]);
console.log(d3.select('body'));

// create some elements which we can then select
const div = document.createElement('div');
document.getElementById('mount').appendChild(div);
d3.select('#mount').append('div');

d3.select('#mount').append('div');

/*
 *  <div id="mount">
 *    <div></div>
 *    <div></div>
 *    <div></div>
 *  </div>
 */

// Is there a way to minimize the amount of typeing we have to do here?
const mount = d3.select('#mount');

mount.append('div');

mount.append('div');

/*
 *  <div id="mount">
 *    <div></div>
 *    <div></div>
 *    <div></div>
 *    <div></div>
 *    <div></div>
 *  </div>
 */

mount.append('div').append('div');

/*
 *  <div id="mount">
 *    <div></div>
 *    <div></div>
 *    <div></div>
 *    <div></div>
 *    <div></div>
 *    <div>
 *      <div></div>
 *    </div>
 *  </div>
 */

// select all of the divs within the div with an id of mount
console.log(mount.selectAll('div'));

// return the selections NodeList
console.log(mount.selectAll('div').nodes());


