// console.log("hello world");
// process.stdout.write("hello world");

console.table({ name: "Alice", age: 30 });  // table format
console.error("This is an error message");

console.count("Counter");  // Counter: 1
console.count("Counter");  // Counter: 2
console.time("Timer");
setTimeout(() => {
  console.timeEnd("Timer");  // Timer: 1000ms
}, 1000);