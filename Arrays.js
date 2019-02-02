function javaArrayCopy(source, sourcePos, dest, destPos, length){
	if(source === dest){//make a copy because strange things could happen otherwise
		const copy = source.slice(0, source.length);
		for(let count = 0; count < length; count++){
			dest[destPos + count] = copy[sourcePos + count];
		}
	}
	else {
		for(let count = 0; count < length; count++){
			dest[destPos + count] = source[sourcePos + count];
		}
	}
}

function arrayEquals(array1, array2){
	if (array1.length === array2.length){
		const length = array1.length;

		for (let index = 0; index < length; index++){
			if (array1[index] !== array2[index]){
				return false;
			}
		}

		return true;
	} else {
		return false;
	}
}