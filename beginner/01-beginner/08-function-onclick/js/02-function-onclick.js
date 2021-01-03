function button_click() {
    document.getElementById("msgGetElement").innerHTML = "<b>Obrigado por clicar!</b>";

}

function button_redirect() {
    window.open("http://www.google.com.br");
    //window.location.href = "http://www.google.com.br";
}

function mouse_over(element) {
    element.innerHTML = "Obrigado por passar o mouse!";
}

function mouse_out(element) {
    element.innerHTML = "<u>Passe o mouse aqui.</u>";
}

function select_onchange(element) {
    document.getElementById("msgSelectValue").innerHTML = " Novo valor: " + element.value;   
}

function load() { 
    alert("Welcome!");
}