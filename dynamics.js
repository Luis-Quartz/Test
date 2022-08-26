function toggleBar(id) {
	var bar = document.getElementById(id);
	if (bar.style.display === "none") {
		bar.style.display = "block";
	}
	else {
		bar.style.display = "none";
	}
}

function loadBar(content) {/*TEST------------------------------------------------------------------------------------------*/
	document.getElementById(content).innerHTML='<object type="text/html" data="navbar.html" ></object>';
}

function flipSprite(spr, front, back, tex) {
	var sp = document.getElementById(spr);
	var tx = document.getElementById(tex);
	if (sp.title == "Front") {
		sp.src = back;
		sp.title = "Back";
		tx.innerHTML = "<i>Back</i>";
	} else {
		sp.src = front;
		sp.title = "Front";
		tx.innerHTML = "<i>Front</i>";
	}
}

function sortTable(n, target) {
	var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
	table = document.getElementById(target);
	switching = true;
	// Set the sorting direction to ascending:
	dir = "asc";
	/* Make a loop that will continue until no switching has been done: */
	while (switching) {
		// Start by saying: no switching is done:
		switching = false;
		rows = table.rows;
		/* Loop through all table rows (except the first, which contains table headers): */
		for (i = 1; i < (rows.length - 1); i++) {
			// Start by saying there should be no switching:
			shouldSwitch = false;
			/* Get the two elements you want to compare,
			one from current row and one from the next: */
			x = rows[i].getElementsByTagName("TD")[n];
			y = rows[i + 1].getElementsByTagName("TD")[n];
			/* Check if the two rows should switch place,
			based on the direction, asc or desc: */
			if (dir == "asc") {
				if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
					// If so, mark as a switch and break the loop:
					shouldSwitch = true;
					break;
					}
				}
			else if (dir == "desc") {
				if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
					// If so, mark as a switch and break the loop:
					shouldSwitch = true;
					break;
				}
			}
		}
		if (shouldSwitch) {
			/* If a switch has been marked, make the switch and mark that a switch has been done: */
			rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			switching = true;
			// Each time a switch is done, increase this count by 1:
			switchcount ++;
		}
		else {
			/* If no switching has been done AND the direction is "asc", set the direction to "desc" and run the while loop again. */
			if (switchcount == 0 && dir == "asc") {
				dir = "desc";
				switching = true;
			}
		}
	}
}