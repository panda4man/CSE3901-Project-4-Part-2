var id_list = [];
function getIds() {
	var table = document.getElementById('schedule');
	for(var i = 0, row; row = table.rows[i]; i++){
		if(i == 0) continue;
		var id = row.id;
		var date = new Date(id);
		var object = {
			'hash': id
		}
		id_list[date.getTime()] = object;
	}
}

function goToDay() {
	window.location.hash = "";
	var today = (new Date()).getTime();
	for(var time in id_list){
		if(today >= time){
			console.log('today: ' + (new Date(today)) + ' found: ' + (new Date(time));
			window.location.hash = id_list[time].hash;
			break;
		}
	}
	return false;
}