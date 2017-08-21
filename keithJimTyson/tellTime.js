var hour=8;
var minute=00;
var period="AM";
var clause,clause2;

if (minute==00) {
    clause=String();
}
else if (minute<15){
    clause="almost a quarter after";
}
else if (minute<30) {
    clause="almost half past";
}
else if (minute===30) {
    clause="half past";
}
else if (minute<45){
    clause="almost a quarter to";
}
else{
    clause="almost";
    hour++;
}


if (period==="AM") {
    clause2="in the morning";
}
else {
    clause2="in the afternoon";
}

console.log("It's",clause,hour,clause2);
