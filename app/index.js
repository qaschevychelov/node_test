/**
 * Created by User on 26.10.2018.
 */

// пример 1
/*
const fs = require('fs');
let content
try {
    content = fs.readFileSync('./app/file.md', 'utf-8');
} catch (ex) {
    console.log(ex);
}
console.log(content);*/

// пример 2
/*
const numbers = [2, 5, 7, 11, 3, 4];
function isBiggerThanThree(num) {
    return num > 3;
}
numbers.filter(isBiggerThanThree);*/

// пример 3
/*
const fs = require('fs');
fs.readFile('./app/file.md', 'utf-8', function (err, content) {
    if (err) {
        return console.log(err);
    }
    console.log(content);
});*/

// пример 4
/*
const  fs = require('fs');
console.log('начинаем читать файл');

fs.readFile('./app/file.md', 'utf-8', function (err, content) {
    if (err) {
        console.log('во время чтения возникла ошибка');
        return console.log(err);
    }
    console.log(content);
});
console.log('закончили читать файл');*/

// пример 5
const  fs = require('fs');

function stats(file) {
    return new Promise((resolve, reject) => {
        fs.stat(file, (err, data) => {
            if (err) {
                return reject (err);
            }
            resolve(data);
        });
    })
}

Promise.all([
    stats('./app/file1.txt'),
    stats('./app/file2.txt'),
    stats('./app/file3.txt')
])
    .then((data) => console.log(data))
    .catch((err) => console.log(err));