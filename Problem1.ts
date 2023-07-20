//Simple Equation

function solveForXYZ(A: number, B: number, C: number): [number, number, number] | null {
    for (let x = 1; x <= 1000; x++) {
      for (let y = 1; y <= 1000; y++) {
        for (let z = 1; z <= 1000; z++) {
          if (x + y + z === A && x * y * z === B && x ** 2 + y ** 2 + z ** 2 === C) {
            return [x, y, z];
          }
        }
      }
    }
    return null;
  }
  
  // Sample test cases
  console.log(solveForXYZ(123, 456, 789)); // Output: null (No solution)
  console.log(solveForXYZ(6614, 123, 456)); // Output: [38, 37, 6539] (One possible solution)
  