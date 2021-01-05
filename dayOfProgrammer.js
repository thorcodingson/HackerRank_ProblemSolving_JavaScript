function dayOfProgrammer(year) {

    let dayNum256 = "01.01.1699";
    let dateLpTrue = "12.09.";
    let dateLpFalse = "13.09."
    let date1918 = "26.09.";

    if(year < 1918)
    {
        if(year % 4 == 0)
            dayNum256 = dateLpTrue + year;
        else
            dayNum256 = dateLpFalse + year;
    }
    else if(year == 1918)
    {
        dayNum256 = date1918 + "1918";
    }
    else // > 1918
    {
        if(year % 400 == 0 || (year % 4 == 0 && year % 100 != 0))
            dayNum256 = dateLpTrue + year;
        else
            dayNum256 = dateLpFalse + year;
    }

    return dayNum256;
}

console.log(dayOfProgrammer(1800));