let nameValue = "Tanyo";
let ages = 16;
let isGreat = true;
let born = new Date(1991, 1, 12);
const TALL = 171;

let persons =
    [{
        name: nameValue,
        ages: ages,
        isGreat: isGreat,
        born: born
    },
    {
        name: 'Stanimir',
        ages: 20,
        isGreat: true,
        born: new Date(1992, 12, 28)
    },
    {
        name: 'Test',
        ages: 25,
        isGreat: false,
        born: new Date(1991, 12, 28)
    }];

// for (property in persons[0]) {
//     alert(property);
// }

for (let person of persons) {
    debugger;
    outputPerson(person);
}

function outputPerson(personArg) {
    if (personArg.ages <= 16) {
        document.getElementById('pnlPerson').innerHTML += '<p>' + personArg.name + ' is ' + personArg.ages + ' ages old. He is great=' + personArg.isGreat + '</p>';
    } else if (personArg.ages > 19 && personArg.ages < 24) {
        document.getElementById('pnlPerson').innerHTML += 'opa 1 <br />';
    } else {
        document.getElementById('pnlPerson').innerHTML += personArg.born;
    }
}