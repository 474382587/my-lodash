/**
 * Remove all falsey vaules from an array.
 * @method _difference
 * @param array
 * @return array 
 */

//  example 
/**
 * _.difference([2, 1], [2, 3]); // => [1]
 */

function _difference() {
    var args = Array.prototype.slice.apply(arguments)
    if(args.length > 0 && args.length < 3) {
        if(Array.isArray(args[0])) {
            switch (args.length) {
                case 1:
                    return args[0]
                case 2:
                    return Array.isArray(args[1]) ? difference(args[0], args[1]) : throwError('Your second param is not an Array')
                default:
                    throw 'Internal Error!'
            }
        }
        else {
            throw 'Your first param is not an Array'
        }
    }
    else {
        throw 'You need to have at least one param / You have entered more than 2 params'
    }
}

function difference(arr1, arr2) {
    var result = []
    arr1.forEach(function(e){
        if(arr2.indexOf(e) === -1) {
            result.push(e)
        }
    })
    return result
}

function throwError(errorMessage) {
    throw errorMessage
}