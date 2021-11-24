const cases = document.getElementsByClassName("case");
const LEFT_BUTTON = 0;
let lastPlayerX = 0;
let lastPlayerY = 0;

document.addEventListener('contextmenu', function (event){
    event.preventDefault();
});

for (let i = 0; i < cases.length; i++){
    cases[i].addEventListener("mouseup", function (event){
        if (event.button === LEFT_BUTTON) {
            if (lastPlayerX === 0) {
                lastPlayerX = 1;
                lastPlayerY = 0;
                insertText(this, "X", "green");

            }

        } else if(lastPlayerY === 0) {
            lastPlayerX = 0;
            lastPlayerY = 1;
            insertText(this, "O", "red");
        }
    })
}

function insertText (element, text, colorClass) {
    element.innerHTML = text;
    element.classList.add(colorClass);
}



