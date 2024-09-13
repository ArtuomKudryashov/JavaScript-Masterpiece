function task(n) {
  let ll = "<<<<<<<<<<<<<<<<<<< ";
  let t = "Task # ";
  let rl = " >>>>>>>>>>>>>>>>>>>";
  console.log(`${ll}${t}${n}${rl}`);
}

function max_in_array(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(max);
}

function min_in_array(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  console.log(min);
}
export { task, max_in_array, min_in_array };
