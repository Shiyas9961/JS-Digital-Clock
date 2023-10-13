const clock=document.getElementById('clock');
const hours=document.querySelectorAll('.hour');
const minutes=document.querySelectorAll('.minute');
const seconds=document.querySelectorAll('.second');
const ampms=document.querySelector('.ampm')

function currentTime(){
    const datetime=new Date();
    let hour=datetime.getHours();
    let minute=datetime.getMinutes();
    let second=datetime.getSeconds();
    let ampm='AM';

    if(hour>12){
        hour=hour-12;
        ampm='PM'
    }
    ampms.innerHTML=ampm;
    let h=hour<10?'0'+hour:hour;
    let m=minute<10?'0'+minute:minute;
    let s=second<10?('0'+second).toString():second.toString();

    h.toString;
    hours[0].innerHTML=h[0];
    hours[1].innerHTML=h[1];

    m.toString;

    minutes[0].innerHTML=m[0];
    minutes[1].innerHTML=m[1];

    seconds[0].innerHTML=s[0];
    seconds[1].innerHTML=s[1];
    
}
setInterval(currentTime,1000);

