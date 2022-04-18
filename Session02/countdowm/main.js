let timer = Math.floor( prompt("Nhập một số bất kỳ"));
function countdownto(target, time,callback) {
    var finish = new Date(time);
    var s = 1000,
        m = s * 60,
        h = m * 60,
        d = h * 24;

    (function timer() {
        var now = new Date();
        var dist = finish - now;

        var days = Math.floor(dist / d),
            hours = Math.floor((dist % d) / h),
            minutes = Math.floor((dist % h) / m),
            seconds = Math.floor((dist % m) / s);

        var timestring = days + 'days ' + hours + 'hrs ' + minutes + 'mins ' + seconds + 'seconds ';
        target.innerHTML = timestring
        
        if (dist > 0) {
            setTimeout(timer, 1000);
        } else {
            callback()
        }
        
    })()

    let test = () =>{
        let now = new Date();
        var dist = finish - now;

        let days = Math.floor(dist / d),
            hours = Math.floor((dist % d) / h),
            minutes = Math.floor((dist % h) / m),
            seconds = Math.floor((dist % m) / s);

        let timestring = days + 'days ' + hours + 'hrs ' + minutes + 'mins ' + seconds + 'seconds ';
        target.innerHTML = timestring;
        
        if (dist > 0) {
            setTimeout(test, 1000);
        } else {
            callback()
        }
    }

}

// countdown element
var countdownel = document.getElementById('countdown')

// 10 seconds into the future
var time = new Date()
time.setSeconds(time.getSeconds() + timer)

// countdown function call
countdownto(countdownel, time, function(){
   countdownel.style.display = "none"

})