let setcookie = (answer) => { 
    document.cookie = `yuyuyuyu=${answer}; expires=Wed, 15 Jun 2022 12:00:00 GMT`
}

$(document).ready(function(){
    $(".icon").hide();
    //setting change theme buttons
    let theme = window.localStorage.getItem("theme");
    function settheme(varr){
        window.localStorage.setItem("theme", varr);
        let background = (varr === 'dark') ? 'rgb(0, 4, 42)' : 'rgb(228, 251, 228)';
        let color = (varr === 'dark') ? 'white' : 'black'; 
        $(".container").css('background', background);
        $(".container").css('color', color);
        $(".themes").css('background', (varr === 'dark') ? 'rgb(0, 4, 42' : 'white');
        $(".main").css('background', (varr === 'dark') ? 'rgb(0, 4, 42' : 'white');
    }
    settheme(theme);
    $('#switch-light').on('click', () => settheme('light'));
    $('#switch-dark').on('click', () => settheme('dark'));


     //setting the content of the result field  
    $('button').on('click', function(){
        let [h, w, nclr] = Object.values($('input')).map((el) => el.value);
        let size = h*w*nclr;
        let ok = size < 20000 ? true : false;
        answer = `File is ${size}KB which is` + (ok ? ' ok' : ' not good');
        $( '.result' ).text(answer);
        $( '.result' ).css('color', 'green');
        if(!ok){
            $( '.result' ).css('color', 'red');
            $('.icon').attr("src", "icons/thumb-down.png"); 
        }
        $(".icon").show();
        setcookie(answer); 
    })
})
