var array,res;
var reservationNum = 1;
var data = JSON.parse(window.localStorage.getItem("Data"));


if (data === null) {
    array = [];
}
else {
    array = data;
}

function submit() {

    var uName = document.getElementById("uName").value;
    var dateValue = document.getElementById("dateValue").value;
    var timeValue = document.getElementById("timeValue").value;
    var numChildren = document.getElementById("numChildren").value;
    var numAdult = document.getElementById("numAdult").value;

    for (res = 0;res < array.length;res++){
        if (array[res].Reservation === 1){
            reservationNum++;
        }

        else if (array[res].Reservation != 1){
            reservationNum = array[res].Reservation + 1;
        }
    }

    if (
        uName != "" &&
        dateValue != "" &&
        timeValue != "" &&
        numAdult != "" &&
        numChildren != ""
    ) {
        
        var userInformartion = {
            Reservation: reservationNum,
            Name: uName,
            Date: dateValue,
            Time: timeValue,
            NumAdults: parseInt(numAdult),
            NumChildren: parseInt(numChildren),
        };
        
        array.push(userInformartion);
        document.getElementById("status").innerHTML = "STATUS: <span>RESERVED SUCCESSFULLY</span>";
        
    } else {
        window.alert("Fill up all form!");
    }
    localStorage.setItem("Data",JSON.stringify(array));
}

function clearInput() {

    document.getElementById("uName").value = "";
    document.getElementById("dateValue").value = "";
    document.getElementById("timeValue").value = "";
    document.getElementById("numAdult").value = "";
    document.getElementById("numChildren").value = "";
    document.getElementById("status").innerHTML = "";
}