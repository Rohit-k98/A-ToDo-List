const addToDo = document.getElementById('addToDo');
const search = document.getElementById('search');
const inputTEXT = document.getElementById('inputText');
const theToDoList = document.getElementById('toDoList');
let count = 0;
let listContainer = [];


function addToDoList() {
    let something = '';
    something = `<nav class="navbar shadow-lg justify-content-between "  style="margin-top: 10px ;border-radius:10px;background-color: rgb(109, 177, 107);" id="wholeRow${count}">
    <div class="navbar-brand text-dark" id="brandText">${inputTEXT.value}</div>
    <form class="form-inline">
    <button  class="btn my-2 my-sm-0" id="removeToDoID" onClick="remove(${count})" type="button"><i style="font-size: 30px; border-radius:10px;" class="fa fa-minus"></i></button>
    </form>
    </nav>`
    listContainer[count] = something;
    theToDoList.innerHTML += something;
    inputTEXT.value = '';
    count++;
}


// SEARCH FILTER


const filterSearch = function (someValue) {
    return (someValue.slice(someValue.indexOf("brandText") + 11, (someValue.indexOf("brandText") + 11 + inputTEXT.value.length)) === inputTEXT.value)
}
function searchList() {
    theToDoList.innerHTML = listContainer.filter(filterSearch)
}


// SHOW Original List


function showOriginalList() {
    if (inputTEXT.value === '') {
        theToDoList.innerHTML = listContainer.join(``);
    }
    else {

    }


}


//Remove


function remove(index) {

    document.getElementById(`wholeRow${index}`).outerHTML = '';
    delete listContainer[index];

}