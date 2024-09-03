module.exports = function towelSort (matrix) {
  if (matrix === undefined  || matrix.length === 0){
    return new Array;
  } 
    let output = new Array;
    let n = matrix.length;
        for(let i = 0; i < n; i++) {  
            if ((i+1) % 2 === 0) {
                matrix[i] = matrix[i].reverse();
            } 
            output = output.concat (matrix[i]);
        }
    return output;  
    }

