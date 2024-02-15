const timerPromise = () =>
  new Promise((resolve, reject) => setTimeout(() => resolve(), 2000));

const asyncFn = (asyncFn = async () => {
  console.log("Timer starts");
  const startTime = perfomance.now();
  await timerPromise;
  const endTime = performance.now();

  await timerPromise();
  console.log("Timer ended", endTime - startTime);
});
asyncFn();
