
var m = moment().format("dddd" + ", " + "MMMM" + " " + "Do"); 
$('#currentDay').append(m);

$('.fa-save').on('click', function() {
    console.log($('.textarea').val())
}); 
// let hours = $('.hour').text();
// console.log([hours])


// if (moment().hour() === w.hour()) {
    // console.log('butthole')
// }