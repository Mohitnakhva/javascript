
function handleClick() {
    let a = document.getElementById("pass");
    if (a.type === "password") {
        a.type = "text";
    }
    else {
        a.type = "password";
    }
}