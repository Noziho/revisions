const cases = document.getElementsByClassName("case");
const LEFT_BUTTON = 0;
const RIGHT_BUTTON = 2;
document.addEventListener('contextmenu', function (event){
    event.preventDefault();
});

for (let i = 0; i < cases.length; i++){
    cases[i].addEventListener("mouseup", function (event){
        switch (event.button) {
            case LEFT_BUTTON:
                this.innerHTML = "X";
                this.classList.add('green');
                break;

            case RIGHT_BUTTON:
                this.innerHTML = "O";
                this.classList.add('red');
                break;
        }
    })
}



