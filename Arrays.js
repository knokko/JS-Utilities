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