/**
 * Remove all falsey vaules from an array.
 * @method _differenceBy
 * @param array
 * @param array
 * @param function
 * @return array 
 */

//  example 
/**
 *_.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
// => [1.2]
 */

function _differenceBy() {
    var args = Array.prototype.slice.apply(arguments)
    if(args.length > 0 && args.length < 4) {
        if(Array.isArray(args[0])) {
            switch (args.length) {
                case 1:
                    return args[0]
                case 2:
                    return Array.isArray(args[1]) ? difference(args[0], args[1]) : throwError('Your second param is not an Array')
                case 3:
                    if( typeof args[2] === 'function') {
                        return differenceBy(args[0], args[1], args[2])
                    }
                    else {
                        throw 'Your third param is not a function'
                    }
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
function differenceBy(arr1, arr2, func) {
    var result = []
    var temp = arr2.map(function(e) {
        return func(e)
    })
    arr1.forEach(function(e){
        var el = func(e)
        if(temp.indexOf(el) === -1) {
            result.push(el)
        }
    })
    return result
}

function throwError(errorMessage) {
    throw errorMessage
}