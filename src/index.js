module.exports = function towelSort (matrix) {
  if (!matrix) {
    return [];
  }

  let array = [];

  for (let index = 0; index < matrix.length; index++) {
    if (index % 2 === 0) {
      matrix[index].sort(orderByAscending);
    } else {
      matrix[index].sort(orderByDescending);
    }

    array = array.concat(matrix[index]);
  }

  return array;
}

function orderByDescending(a, b) {
  return b - a;
}

function orderByAscending(a, b) {
  return a - b;
}