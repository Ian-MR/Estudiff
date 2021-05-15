var box = window.document.getElementById('dm')
var css = window.document.getElementById('css')
var logo = window.document.getElementById('logo')
var home = window.document.getElementById('home')
let hrefA = ''
let filter = (/\/(css)/)
let numbCode = ''

window.onload = () => {
    isDark = localStorage.getItem("darkMode")
    if (isDark === "on") {
        box.checked = true
        darkMode(isDark)
    } else {
        box.checked = false
        darkMode(isDark)
    }

}

function darkMode(option){
    hrefA = css.href
    arrayH = hrefA.split(filter)
    arrayH.shift()
    numbCode = arrayH.length - 2

    switch (option){
        case 'on':
            arrayH[numbCode] = "cssdark"
            hrefA = arrayH.join('')
            css.href = hrefA
            filter = (/\/(cssdark)/)
            logo.src = "cssdark/img/estudiff.png"
            if(home != null){
                home.src = "cssdark/img/home.png"
            }
            break
        case 'off':
            arrayH[numbCode] = "css"
            hrefA = arrayH.join('')
            css.href = hrefA
            filter = (/\/(css)/)
            logo.src = "https://i.ibb.co/mF6tb8Z/estudiff.png"
            if(home != null){
                home.src = "img/home.png"
            }
            break
    }
}

function check(){
    if(box.checked == true){
        localStorage.setItem("darkMode", "on")
        isDark = localStorage.getItem("darkMode")
        darkMode(isDark)
    }else{
        localStorage.setItem("darkMode", "off")
        isDark = localStorage.getItem("darkMode")
        darkMode(isDark)
    }
}
