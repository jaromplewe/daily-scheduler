
var m = moment(); console.log(m.toString())
console.log(moment().date());


let hours = ["8:00 PM", "9:00 PM"];

for (let i = 0; i < hours.length; i++) {
    var dateAndTime = moment().format('YYYY-MM-DD ') + hours[i];
    var w = moment(dateAndTime);
    console.log(w.hour());
}

if (moment().hour() === w.hour()) {
    console.log('butthole')
}