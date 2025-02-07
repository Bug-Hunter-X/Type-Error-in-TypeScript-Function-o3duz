function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return add(a, b);
  } else {
    console.error("One or both inputs are not numbers");
    return 0; // Or handle the error in a different way
  }
}

let result1 = addSafe(1, "2"); //Correctly handles the error
let result2 = addSafe(1,2); //Returns 3