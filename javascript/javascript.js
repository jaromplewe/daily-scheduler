
// GET DOM ELEMENTS
const hourClass = document.getElementsByClassName('textHour');
const textArea = document.getElementsByClassName('textarea');
const saveBtn = document.getElementsByClassName('saveBtn');


// APPEND THE CURRENT DATE TO HEADER
let m = moment().format("dddd" + ", " + "MMMM" + " " + "Do");
$('#currentDay').append(m);



// CREATE HOUR FROM PAGE DISPLAY
// Set variables needed
let textHour = $('.textHour');
let textMoment = [];
// Format page display hour to HH for comparison with moment().hour()
for (let i = 0; i < $('.textHour').length; i++) {
    let formattedTextHour = moment(textHour[i].textContent, ["h:mm A"]).format("HH");
    textMoment.push(formattedTextHour);
};




// COMPARE THE TWO HOUR VARIABLES AND CHANGE COLORS ACCORDINGLY
for (let i = 0; i < textMoment.length; i++) {
    if (JSON.stringify(moment().hour()) === textMoment[i]) {
        console.log("current")
        textArea[i].classList.add('present');
    } else if (textMoment[i] < JSON.stringify(moment().hour())) {
        console.log("before")
        textArea[i].classList.add('past');
    } else if (textMoment[i] > JSON.stringify(moment().hour())) {
        console.log("after")
        textArea[i].classList.add('future');
    }
}



// SAVE TEXT TO LOCALSTORAGE

// Get elements needed
// const hourClass = document.getElementsByClassName('textHour');
// const textArea = document.getElementsByClassName('textarea');
// const saveBtn = document.getElementsByClassName('saveBtn');
// Add event listener to the save button to setItem to localStorage
for (let i = 0; i < textArea.length; i++) {
    saveBtn[i].addEventListener('click', function () {
        localStorage.setItem(hourClass[i].textContent, textArea[i].value);
    });
}



// APPEND THE LOCALSTORAGE TEXT INTO THE TEXT AREAS

for (let i = 0; i < textArea.length; i++) {
    if (localStorage.getItem(hourClass[i].textContent) === null) {

    } else {
        let locStoreText = localStorage.getItem(hourClass[i].textContent);
        textArea[i].textContent = locStoreText;
    }
}