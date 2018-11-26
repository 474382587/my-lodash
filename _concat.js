/**
 * Creates a new array concatenating array with any additional arrays and/or values.
 * @method _concat
 * @param array
 * @return array
 */

/*example
  _.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
 
_.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
 */

function _concat() {
  var args = [].slice.apply(arguments)
  
  if (args[0] && Array.isArray(args[0])) {
    var result = args[0] // should use deep copy, will do this later
    var index = 1
    while (index < args.length) {
      if (Array.isArray(args[index])) {
        for (var i = 0; i < args[index].length; i++) {
          result.push(args[index][i])
        }
      } else {
        result.push(args[index])
      }
      index++
    }
    return result
  } else {
    throw 'Your first param is not an array.'
  }
}
