$(document).ready(function(){
	var createTable = function(){	
		mytable = $('<table></table>').attr({ id: "gridbox" });
		var rows = 20;
		var cols = 20;
		var tr = [];
		for (var i = 0; i < rows; i++) {
			var row = $('<tr></tr>').attr({ class: ["class1", "class2", "class3"].join(' ') }).appendTo(mytable);
			for (var j = 0; j < cols; j++) {
				$('<td></td>').addClass('playCell').appendTo(row); 
			}
		}
		mytable.appendTo("#playGrid");
	};
	createTable();
});
