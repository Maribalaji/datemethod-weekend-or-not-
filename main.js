var date=new Date();
var week=date.getDay();
console.log(week);

if(week==0||week==6){
    document.write("It is a weekend day");
}
    else{
        document.write("It is not weekend day");

    }
