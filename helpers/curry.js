
// Curry for n arguments
function curry(fn){
    return function(){
			
        const fnArity = fn.length;
        const numberOfArgs = arguments.length;
        const argsArray = Array.prototype.slice.call(arguments);
        const remainingArity = fnArity - numberOfArgs;
        
        if(remainingArity <= 0){
            return fn.apply(fn,argsArray);
        } else {
            const curriedFn = fn.bind.apply(fn, [null].concat(argsArray));
            return curry(curriedFn);
        }
    }
}
module.exports = curry