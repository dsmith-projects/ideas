var event = {
    startDateTime: "Wed Jul 12 2019 16:00:24 GMT-0600 ", 
    endDateTime: "Wed Juj 12 2019 19:00:24 GMT-0600 ", 
    lieue: "Casa Blanca", 
    eventSummary: function() {
        return "Start date: " + this.startDateTime + "&lt;br&gt;" + "End date: " + this.endDateTime + "&lt;br&gt;" + "Location: " + this.lieue;
    }
};

function callFunctionOnExternalFile() {
    document.getElementById("anotherParagraph").innerHTML = "Hallo meine Freunde!";
}

function captureEventData() {
    var val1 = document.getElementById("prgph01").innerHTML;
    var val2 = document.getElementById("prgph03").innerHTML;
    var val3 = val1 + val2;
    document.getElementById("prgph05").innerHTML = val3;
}

function eventSummary() {
    return "Hallo meine Freunde!";
}