const clock=document.getElementById('clock');

function currentTime(){
    const datetime=new Date();
    let hour=datetime.getHours();
    const minute=datetime.getMinutes();
    const second=datetime.getSeconds();
    let ampm='AM';

    if(hour>12){
        hour=hour-12;
        ampm='PM';
    }else{
        ampm="AM";
    }
    let h=hour<10?'0'+hour:hour;
    const m=minute<10?'0'+minute:minute;
    const s=second<10?'0'+second:second;

    clock.innerHTML=`${h}: ${m}: ${s} ${ampm}`;
}

setInterval(currentTime,1000);