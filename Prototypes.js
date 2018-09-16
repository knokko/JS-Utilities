function extendProtoType(superFunction, subFunction){
	subFunction.prototype = Object.create(superFunction.prototype);
	subFunction.prototype.constructor = subFunction;
}