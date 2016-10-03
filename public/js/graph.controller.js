// create new graph using Chart constructor
var graph = new Graph({
	element: document.querySelector('.graph-container'),
    data: [
    	{ id: 1, value: 'A', connections: [3] }
    	{ id: 2, value: 'B', connections: [4] }
    	{ id: 3, value: 'C', connections: [] }
    	{ id: 4, value: 'D', connections: [] }
    	// { id: , value: '', connections: [] }
    ]
});

// redraw graph on each resize
d3.select(window).on('resize', function(){
    graph.draw(); 
});