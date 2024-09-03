module.exports = function towelSort (matrix) {
  if (!matrix || matrix.length === 0){
    return [];
  } 
    let output = new Array;
        for(let i = 0; i < matrix.length; i++) {  
            if ((i+1) % 2 === 0) {
                matrix[i] = matrix[i].reverse();
            } 
            output = output.concat (matrix[i]);
        }
    return output;  
    }

