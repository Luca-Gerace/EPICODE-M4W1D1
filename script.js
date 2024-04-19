function one(x, y) {
    let result
    if (x === 50 || y === 50 || x + y === 50) {
        result = true
    } else {
        result = false
    }
    console.log(result);
}
one(25,26)

function two(string, position) {
    let array = string.split('');
    array.splice(position, 1);
    console.log(array.join('')); 
}
two('pippo', 3);

function three(x, y) {
    let result
    if (
        (x >= 40 && x <= 60 || x >= 70 && x <= 100) &&
        (y >= 40 && y <= 60 || y >= 70 && y <= 100)
    ) {
        result = true
    } else {
        result = false
    }
    console.log(result);
}
three(40,70)

function four(city) {
    let result
    if (city.startsWith("Los") || city.startsWith("New")) {
        result = city
    } else {
        result = false
    }
    console.log(result);
}
four('New York');

function five(array) {
    let sum = 0
    array.forEach(number => {
        sum += number
    });
    console.log(sum);
}
let array5 = [1, 2, 3, 4, 5];
five(array5);

function six(array) {
    let result
    array.forEach(number => {
        if (number === 3 || number === 5) {
            result = false
        } else {
            result = true
        }
    });
    console.log(result);
}
let array6 = [1, 2, 3];
six(array6);

function seven(angles) {
    let result
    if (angles < 90) {
        result = "Angolo Acuto"
    } else if (angles === 90) {
        result = "Angolo Retto"
    } else if (angles > 90 && angles < 180) {
        result = "Angolo Ottuso"
    } else if (angles === 180) {
        result = "Angolo Piatto"
    } else {
        result = "Impossibile calcolare l'angolo"
    }
    console.log(result);
}
seven(181)

function eight(string) {
    let result = '';
    let words = string.split(' ');
    for (let word of words) {
        result += word[0];
    }
    console.log(result.toUpperCase());
}
eight("Federazione Italiana automobili Torino")