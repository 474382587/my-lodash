/**
 * Remove all falsey vaules from an array.
 * @method _compact
 * @param array
 * @return array 
 */

function _compact(arr) {
  if(!Array.isArray(arr)) {
    throw 'This is not an array'
  }
  return arr.filter(function(element) {
    return !!element !== false;
  })
}

// test case
// _compact([0, 1, false, 2, '', 3, [], null, undefined, NaN, ])
