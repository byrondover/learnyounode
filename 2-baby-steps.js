var sum = 0;

for(var i = 2; i < process.argv.length; i++) {
  arg = Number(process.argv[i])
  sum += arg;
}

console.log(sum);
