let input = document.getElementById("input");
let listContainer = document.getElementById("listContainer");

function add() {
    if(input.value === ''){
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "*";
        li.appendChild(span);
    }
    input.value = '';
    saveData();
}


listContainer.addEventListener("click", function(mks) {
    if(mks.target.tagName === "LI") {
        mks.target.classList.toggle("checked");
        saveData();
    }
    else if (mks.target.tagName === "SPAN") {
        mks.target.parentElement.remove();
        saveData();
    }
} );

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showList() {
    listContainer.innerHTML = localStorage.getItem("data")
}
showList();