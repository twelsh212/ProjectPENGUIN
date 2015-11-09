$(document).ready(function(){
	mytable = $('<table></table>').attr({ id: "gridbox" });
	var rows = 10;
	var cols = 10;
	var tr = [];
	for (var i = 0; i < rows; i++) {
		var row = $('<tr></tr>').attr({ class: ["class1", "class2", "class3"].join(' ') }).appendTo(mytable);
		for (var j = 0; j < cols; j++) {
			$('<td></td>').addClass('playCell').appendTo(row); 
		}
	}
	mytable.appendTo("#playArea");
});
