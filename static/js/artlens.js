// For Dark Mode
const darkToggleButtons = document.querySelectorAll('.dark-toggle');
function changeDarkToggleBtnIcon () {
    darkToggleButtons.forEach(btn => {
        if (btn.querySelector('img').src.indexOf('/static/img/moon.svg') !== -1) {
            btn.querySelector('img').src = "/static/img/sun.svg";
        } else {
            btn.querySelector('img').src = "/static/img/moon.svg";
        }
    });
}
if (localStorage.prefsDark === 'true' || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && localStorage.prefsDark !== 'false')) {
    document.documentElement.setAttribute('data-bs-theme', 'dark');
    changeDarkToggleBtnIcon();
}
darkToggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        changeDarkToggleBtnIcon();
        if (document.documentElement.hasAttribute('data-bs-theme', 'dark')) {
            document.documentElement.removeAttribute("data-bs-theme");
            localStorage.prefsDark = 'false';
        } else {
            document.documentElement.setAttribute('data-bs-theme', 'dark');
            localStorage.prefsDark = 'true';
        }
    });
});

//For Toasts
const toastslist = document.querySelectorAll('.toast')
toastslist.forEach(toast => {
    var id = toast.id
    var cookie = readCookie(id)
    if(cookie != 'yes') {
        showtoast(toast)
    }
    closebutton = toast.querySelectorAll('.btn-close')
    closebutton.forEach(button => {
        button.onclick = function() {
            closeToast(id)
        }
    })
})

function showtoast(toast) {
    toast = new bootstrap.Toast(toast)
    toast.show()
}

function closeToast(id) {
    createCookie(id, 'yes', '30')
}

function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+";domain=artlensoptic.ro; path=/;";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}