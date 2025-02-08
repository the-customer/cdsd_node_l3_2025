const generateName = require("sillyname")

const names = [];

for (let i = 0; i < 1000; i++) {
    names.push(generateName())
}

names.forEach(name => {
    console.log(name);
    console.log('------------------------');
})