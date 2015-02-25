var id_list = [];
var toggle = true;

/**
 *	This method creates an object list of all the ids
 *	of each row in the schedule table.
 */
function getIds() {
    var table = document.getElementById('schedule');
    for (var i = 0, row; row = table.rows[i]; i++) {
        if (i == 0) continue;
        var id = row.id;
        var date = new Date(id);
        var object = {
            'hash': id,
            'time': date.getTime()
        }
        id_list.push(object);
    }
}

/**
 *	This method searches through the {@code id_list} and searches for a
 *	time in the {@code id_list} that is {@code >= current && <= next},
 *	and then changes the window location hash to the id of that time.
 */
function goToDay() {
    window.location.hash = "";
    var today = (new Date()).getTime();
    for (var i = 0; i < id_list.length; i++) {
        var current = id_list[i];
        var next = id_list[i + 1];
        if (today >= current.time && today <= next.time) {
            location.hash = current.hash;
            break;
        }
    }
}

function toggleTable() {
    var today = (new Date()).getTime();
    var table = document.getElementById('schedule');
    if (toggle) {
        for (var i = 0, row; row = table.rows[i]; i++) {
            if (i == 0) continue;
            var current = (new Date(row.id)).getTime();
            if (today > current) {
                row.style.display = "none";
            } else {
                break;
            }
        }
    } else {
        for (var j = 0, row; row = table.rows[j]; j++) {
            if (j == 0) continue;
            var current = (new Date(row.id)).getTime();
            if (today > current) {
                row.style.display = "table-row";
            } else {
                break;
            }
        }
    }
    toggle = !toggle;
}
