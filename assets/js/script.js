console.log("I'm a JavaScript file linked to this page!");

var now = moment();
var clock = $("#clock")

function updateClock() {
    clock.text(now.format("MMM Do, YYYY, h:mm:ss a"));
    console.log("I'm in the updateClock function");
}

$('#modalButton').click($('#exampleModal').modal());



$('#projectDeetsModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

setInterval(updateClock, 1000);


