function updateTime() {

   var today = new Date();

    var h = today.getHours();
    var m = today.getMinutes();
    var day = h<11 ? 'AM' : 'PM';



    h = h<10? '0'+h: h;
    m = m<10? '0'+m: m;
    d = h<11 ? 'AM' : 'PM';

     h = h % 12;

    document.getElementById('hours').innerHTML = h;
    document.getElementById('minute').innerHTML = m;
    document.getElementById('day').innerHTML = d;


   
}var inter = setInterval(updateTime, 400);

