function twonumberssum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
          return [arr[i], arr[j]];
        }
      }
    }
    return []; 
  }
  
  const arr = [4, 7, 5, 1, 2, 6];
  const target = 10;
  const result = twonumberssum(arr, target);
  
  for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
  }
  