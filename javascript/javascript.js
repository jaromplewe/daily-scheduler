// APPEND THE CURRENT DATE
let m = moment().format("dddd" + ", " + "MMMM" + " " + "Do");
$('#currentDay').append(m);

// CREATE HOUR VARIABLES FOR COMPARISON
let textHour = $('.textHour');
let currentHour = JSON.stringify(moment().hour());
// console.log(moment().hour("8:00 PM"))

let textMoment = [];
for (let i = 0; i < $('.textHour').length; i++) {
    let wowo = (moment(textHour[i].textContent).hour());
    // console.log(wowo);
    textMoment += i;
};

// COMPARE THE TWO HOUR VARIABLES
// console.log(JSON.stringify(moment()))
// if (moment().hour() === textHour[0].hour()) {
//     console.log('butthole')
// }



// SAVE TEXT TO LOCALSTORAGE

// Get elements needed
const hourClass = document.getElementsByClassName('textHour');
const textArea = document.getElementsByClassName('textarea');
const saveBtn = document.getElementsByClassName('saveBtn');
// Add event listener to the save button to setItem to localStorage
for (let i = 0; i < textArea.length; i++) {
    saveBtn[i].addEventListener('click', function () {
        localStorage.setItem(hourClass[i].textContent, textArea[i].value);
    });
}



// APPEND THE LOCALSTORAGE TEXT INTO THE TEXT AREAS

for (let i=0; i<textArea.length; i++) {
    if (localStorage.getItem(hourClass[i].textContent) === null) {
        console.log('butthole');
    } else {
    let locStoreText = localStorage.getItem(hourClass[i].textContent);
    console.log(locStoreText)
    textArea[i].textContent = locStoreText;
    }
}