/**
 * Chunck
 * @method _chunk()
 * @param array
 * @param int size (optional, default 0)
 * @return array
 */

function chunk(arr, size) {
  if(!Array.isArray(arr)) {
    throw 'This is not an array!'
  }
  if (isNaN(size) || size < 1) {
    return arr;
  }
  size -= 0
  var result = [];
  for (var i = 0; i < arr.length; i = i + size) {
    var chunk = [];
    for (var j = 0; j < size; j++) {
      var index = i + j;
      if (index < arr.length) {
        chunk.push(arr[index]);
      }
    }
    result.push(chunk);
  }
  return result;
}