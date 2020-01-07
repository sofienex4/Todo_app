
var container = document.createElement('div')
document.querySelector('body').appendChild(container)


var InputToDo = document.querySelector(".inputtodo");
let text = ''
InputToDo.addEventListener('change', e => {

    text = e.target.value;
    console.log(text)
})

const addBtn = document.querySelector('.btn-outline-secondary')
addBtn.addEventListener('click', function(){
    var div = document.createElement('div')
    div.className = "div-a"
   

    



    var btn1 = document.createElement("button");
    btn1.className = "delete-btn"
    btn1.innerHTML = "delete";
    div.appendChild(btn1);



    var btn2 = document.createElement("button");
    btn2.className = "delete-btn2"
    btn2.innerHTML = "Complete";
    div.appendChild(btn2);
    btn1.addEventListener('click', function () {
    btn1.parentElement.remove()
    })

    var tt = document.createElement("h5");
    tt.innerHTML = text;
    div.appendChild(tt);
    InputToDo.value = ""

    container.appendChild(div)


    btn2.addEventListener("click", function () {
        if (btn2.innerHTML === "Complete") {
            btn2.innerHTML = "Undo";
            tt.style.textDecoration = 'line-through';
        }
        else if (btn2.innerHTML === "Undo") {
            btn2.innerHTML = "Complete";
            tt.style.textDecoration = 'none';
        }
    })

})