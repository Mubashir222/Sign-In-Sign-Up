function validation() {
    //Color change on valid and invalid codition
    let validcolor = "green"
    let invalidcolor = "red"
        //Email variable for validation
    let val = document.querySelector('#mail').value
    let mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    //Password variable for validation
    let password = document.querySelector('#psw').value
        // let checkpsw = /^(?=(.*[a-zA-Z]){1,})(?=(.*[0-9]){2,}).{8,}$/
    let ucase = /[A-Z]/g
    let lcase = /[a-z]/g
    let numeric = /[0-9]/g
    let specialchar = /[!`@#$ %^&*';,.|":<>?~_]/g

    //Condition for validation
    if (val == "") {
        document.querySelector('#pg1').innerHTML = "Email is Empty!"
        document.querySelector('#pg1').style.backgroundColor = invalidcolor
    } else if (!val.match(mail)) {
        document.querySelector('#pg1').innerHTML = 'Email is not valid!'
        document.querySelector('#pg1').style.backgroundColor = invalidcolor
    } else if (password == "") {
        document.querySelector('#pg1').innerHTML = 'Password is Empty!'
        document.querySelector('#pg1').style.backgroundColor = invalidcolor
    } else if (password.length < 8) {
        document.querySelector('#pg1').innerHTML = 'Password is too weak!'
        document.querySelector('#pg1').style.backgroundColor = invalidcolor
    } else if (!password.match(ucase)) {
        document.querySelector('#pg1').innerHTML = 'Contain Capital Letter!'
        document.querySelector('#pg1').style.backgroundColor = invalidcolor
    } else if (!password.match(lcase)) {
        document.querySelector('#pg1').innerHTML = 'Contain Small Letter!'
        document.querySelector('#pg1').style.backgroundColor = invalidcolor
    } else if (!password.match(numeric)) {
        document.querySelector('#pg1').innerHTML = 'Contain Numerical Number!'
        document.querySelector('#pg1').style.backgroundColor = invalidcolor
    } else if (!password.match(specialchar)) {
        document.querySelector('#pg1').innerHTML = 'Contain Special Character!'
        document.querySelector('#pg1').style.backgroundColor = invalidcolor

    } else if (password.length > 20) {
        document.querySelector('#pg1').innerHTML = 'Password is too long!'
        document.querySelector('#pg1').style.backgroundColor = invalidcolor
    } else {
        document.querySelector('#pg1').innerHTML = 'Password is Strong!'
        document.querySelector('#pg1').style.backgroundColor = validcolor
    }
    console.log(password);
}