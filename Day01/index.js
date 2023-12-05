import fs from 'fs'

const input = fs.readFileSync('input.txt', 'utf-8').split('\n');
var total = input.map( e => e.match(/[0-9]/g))
                    .reduce((sum, curr) => parseInt(sum) + parseInt(curr[0] + curr[curr.length-1]),0);

console.log("Part 1: " + total);

const input2 = fs.readFileSync('input.txt', 'utf-8').split('\n');
var conversions = {
    'one': '1ne', 'two': '2wo', 'three': '3hree', 'four': '4our', 'five': '5ive',
    'six': '6ix', 'seven': '7even', 'eight': '8ight', 'nine': '9ine'
}
var regex = new RegExp(Object.keys(conversions).join('|'), 'g')
var total2 = input2.map( e => e.replace(regex, m => conversions[m])).map( e => e.replace(regex, m => conversions[m]))
                    .map( e => e.match(/[0-9]/g))
                    .reduce((sum, curr) => parseInt(sum) + parseInt(curr[0] + curr[curr.length-1]), 0);
console.log("part2: " + total2);