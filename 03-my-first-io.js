var fs = require('fs')

foo = fs.readFileSync(process.argv[2])
bar = foo.toString()

baz = bar.split('\n')
qux = baz.length - 1

console.log(qux)
