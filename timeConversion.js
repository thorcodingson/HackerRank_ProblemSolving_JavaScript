function timeConversion(s) {
    /*
     * Write your code here.
     */

    let ampm = s.slice(-2);
    let addH = ampm === "PM" ? 12 : 0;


    let hh = (Number(s.slice(0,2)) + addH) + "";
    if(hh === "12" && ampm === "AM") hh = "00";
    if(hh === "24" && ampm === "PM") hh = "12";
    return (hh.length == 2 ? hh : "0" + hh) + s.slice(2,s.length-2);

    //console.log(hh);
}

console.log(timeConversion("12:45:54PM"));