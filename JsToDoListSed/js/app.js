// // Creating neccessary vars
// let listContainer = document.getElementsByClassName('js-list')[0];
// let todoElm = document.getElementsByClassName('todo');
// let todoElmLength = todoElm.length;
// let todoTextArea = document.getElementById('todoText');
// let todoSubmit = document.getElementById('submitTodo');
// let submitError = document.getElementById('error');

// //add eventlistner to the submit btn
// todoSubmit.addEventListener("click", function(){
//   //get new todo
//   let todoNewContent = todoTextArea.value;
//   //check if todo is empty
//   if ( todoNewContent === "" ) {
//         //if empty give error
//         submitError.innerHTML = 'Error...you must type something todo!';
//         submitError.classList = 'error open';
//       } else {
//         //remove error if present
//         if ( submitError.classList.contains('open') === true ) {
//           submitError.classList.toggle('open');
//           submitError.innerHTML = '';
//         }
//         //else add new todo to the list
//         listContainer.innerHTML += '<div class="todo js-todo">' + todoNewContent + '<span class="done js-compleated"><i class="fa fa-check" aria-hidden="true"></i></span><span class="remove js-remove"><i class="fa fa-trash" aria-hidden="true"></i></span></div>';
//         updateListener();
//         updateVars();
//       }
// });

// //function to update vars
// function updateVars() {
//   todoElm = document.getElementsByClassName('todo');
//   todoDone = document.getElementsByClassName('js-compleated');
//   todoRemove = document.getElementsByClassName('js-remove');
//   todoElmLength = todoElm.length;
// }

// //loop throught the list items and add the eventlistener to the done and remove btn
// function updateListener() {
//   //get all elements with class js-compleated
//   let todoDone = document.querySelectorAll('.todo .js-compleated');
//   for ( let i = 0; todoDone.length>i; i++ ) {
//     //add event listener to each todoDone element
//     todoDone[i].addEventListener("click", function(){
//       //on click tick toogle class done
//       this.parentNode.classList.toggle('done');
//     });
//   }
//   //get all elements with class js-remove
//   let todoRemove = document.querySelectorAll('.todo .js-remove');
//   for ( let i = 0; todoRemove.length>i; i++ ) {
//     //add event listener to each todoRemove element
//     todoRemove[i].addEventListener("click", function(){
//       //on click bin icon remove todo from the list and then update the vars
//       this.parentNode.remove();
//       updateVars();
//     });
//   }
// }

// //init updateListener on load
// updateListener();

/********************************  ****************************************/ 

// (function() {
//     // Template function that returns html string for items based on passed array of items
//     const itemsTemplate = items => {
//         let result = '';

//         if (!items) return result;

//         items.forEach(item => {
//             result += `
//                 <div class="todo__item">
//                     <label class="todo__task">
//                         <input type="checkbox" class="todo__input js-todo__check" ${item.checked ? 'checked' : ''}/>
//                         <div class="todo__text">${item.name}</div>
//                     </label>
//                 </div>
//             `;
//         });

//         return result;
//     };

//     const selectors = {
//         root: '.js-todo',
//         form: '.js-todo__form',
//         list: '.js-todo__list',
//         input: '.js-todo__input',
//         check: '.js-todo__check',
//         reset: '.js-todo__reset'
//     };

//     const elRoot = document.querySelector(selectors.root);
//     const elForm = elRoot.querySelector(selectors.form);
//     const elList = elRoot.querySelector(selectors.list);
//     const elInput = elRoot.querySelector(selectors.input);
//     const elReset = elRoot.querySelector(selectors.reset);
//     const ls = window.localStorage;

//     // Key to store our data in local storage
//     const lsKey = 'todo';

//     // Helpers for working with local storage as data is stored in string format there, we use json string for that
//     const getItems = () => JSON.parse(ls.getItem(lsKey));
//     const setItems = (items) => ls.setItem(lsKey, JSON.stringify(items));

//     // Function to toggle item marked state
//     const toggleItem = (index, checked) => {
//         const items = getItems().slice();
//         // Change item checked state in it's data for local storage
//         items[index].checked = checked;
//         // Then update local storage with updated items
//         setItems(items);
//     };

//     // Function to add a new task to the list
//     const addTask = name => {
//         const elWrapper = document.createElement('div');
//         const item = { name };
//         // Get all items from local storage
//         const lsData = JSON.parse(ls.getItem(lsKey)) || [];

//         // Add new task to them and save to local storage
//         lsData.push(item);
//         setItems(lsData);

//         // Render tasks into the list and clear input
//         elList.innerHTML = itemsTemplate(lsData);
//         elInput.value = '';
//     };

//     // On page load - get all items from local storage and render them
//     const lsItems = getItems();
//     elList.innerHTML = itemsTemplate(lsItems);

//     // Wehenver form is submited - add a new task with submitted name
//     elForm.addEventListener('submit', e => {
//         e.preventDefault();

//         addTask(elInput.value);
//     });

//     // Tasks are built as checkboxes, so change event is there
//     elList.addEventListener('change', e => {
//         const elTarget = e.target;
//         const elsCheck = elList.querySelectorAll(selectors.check);
//         const elsArr = [].slice.call(elsCheck);
//         // Get the checked item index
//         const index = elsArr.findIndex(el => el === elTarget);

//         // Update item in local storage
//         toggleItem(index, elTarget.checked);
//     });

//     // On reset click
//     elReset.addEventListener('click', () => {
//         // Reset local storage and delete items from list
//         setItems([]);
//         elList.innerHTML = '';
//     });
// })();

/********************************  ****************************************/ 


//DOM variables
const inputDOM=document.querySelector('.inputArea')
const submitButtonDOM=document.querySelector('.submitButton')
const ulDOM=document.querySelector('.listUl')
let liDOM1=document.querySelector('.listItemLi1')
let liDOM2=document.querySelector('.listItemLi2')
let removeButtonDOM=document.querySelector('.closeButton')

const toastFailDOM = document.querySelector(".failToast");
const toastSuccessDOM = document.querySelector(".successToast");

submitButtonDOM.addEventListener('click', clickEvent)
ulDOM.addEventListener('click', clickEvent);
var option = {
            
    animation : true,
    delay : 1000
};


function clickEvent(event){
    event.preventDefault()

    let inputValue= inputDOM.value.trim()
    if(inputValue !=""){
        
        let firstLi=document.createElement('li')
        firstLi.classList.add("listItemLi1", "list-group-item", "d-flex", "justify-content-between", "align-items-center")
        firstLi.innerHTML=`<div><i class="checkMark fas fa-check"></i><span style="margin-left: 20px;">${inputValue}</span></div>
        <button type="button" class="btn-close closeButton " aria-label="Close">`
        ulDOM.appendChild(firstLi)
        inputDOM.value=""
        liDOM1=document.querySelector('.listItemLi1')
        removeButtonDOM=document.querySelector('.closeButton')

        let toastElement = new bootstrap.Toast(toastSuccessDOM, option);
            toastElement.show();

    }else {
        let toastElement = new bootstrap.Toast(toastFailDOM, option);
            toastElement.show();
            
    }
    if (removeButtonDOM) {
        if(event.target.className === removeButtonDOM.className) {       
            
            event.target.parentElement.remove();
        };
    };

    if (liDOM1) {
        if(event.target.className === liDOM1.className) {
            isCheckedEvent(event.target,'liDOM1');
            
        };
    }; 

    
}

function isCheckedEvent (event,liDOM) {
    if (liDOM === 'liDOM1'){
        if (event.style.backgroundColor !== "rgb(36, 101, 115)") {
            event.style.background = "rgb(36, 101, 115)";
            event.style.textDecoration = "line-through";
            event.style.color = "white";
            event.firstElementChild.firstElementChild.style.opacity = 1;
        }
        else if (event.style.backgroundColor == "rgb(36, 101, 115)") {
            event.style.backgroundColor = null;
            event.style.textDecoration = null;
            event.style.color = null;
            event.firstElementChild.firstElementChild.style.opacity = null;
        };
    }
    
};

