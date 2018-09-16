if(window.toRadians === undefined){
	window.toRadians = function(degrees){
		return degrees * Math.PI / 180;
	};
}

if(window.toDegrees === undefined){
	window.toDegrees = function(radians){
		return radians * 180 / Math.PI;
	};
}

function roundTo0(number){
	if(number > 0){
		return Math.floor(number);
	}
	return Math.ceil(number);
}