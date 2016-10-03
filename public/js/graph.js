/*	WHAT WE NEED:	

	[ A ]

	1. Create Graph object and constructors
	2. Test graph by rendering 4 nodes

		[ B ]
		1. Add 4 nodes to NORTH of graph
		2. Add 4 nodes to EAST of graph
		3. Add intermediary nodes at bendpoint
		4. Connect both with 90 degree turn

		[ C ]
		1. Add 4 nodes to NORTH-WEST of graph
		2. Add 4 nodes to SOUTH-EAST of graph
		3. Add intermediary nodes at first bendpoint
		4. Add intermediary nodes at second bendpoint
		4. Add 45 degree turn towards EAST and go forward
		5. Add 45 degree turn towards SOUTH and connect to target nodes

		[ D ]
		1. All grouped lines must advance together

*/

var Graph = function(opts) {
    
    // load in arguments from config object
    this.data = opts.data;
    this.element = opts.element;
    
    // create the chart
    this.draw();
}

Graph.prototype.draw = function() {
    
    // define width, height and margin
    this.width = this.element.offsetWidth;
    this.height = this.width / 2;
    this.margin = {
        top: 20,
        right: 75,
        bottom: 45,
        left: 50
    };
    
    // set up parent element and SVG
    this.element.innerHTML = '';
    var svg = d3.select(this.element).append('svg');
    svg.attr('width',  this.width);
    svg.attr('height', this.height);

    // we'll actually be appending to a <g> element
    this.plot = svg.append('g')
        .attr('transform','translate('+this.margin.left+','+this.margin.top+')');
    
    // create the other stuff
    this.createScales();
    this.addAxes();
    this.addLine();

}

Graph.prototype.setNodes = function() {
	// id, name, x, y, fixed
	var n = 4,
		nodes = d3.range(n).map(function() { return {}; }),
		links = d3.range(n).map(function() { return source: n})

}


Graph.prototype.setData = function(newData) {
    this.data = newData;

    // full redraw needed
    this.draw();
}