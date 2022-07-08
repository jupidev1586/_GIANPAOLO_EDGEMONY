const formEl = document.querySelector('.form');
const inputEl = document.querySelector('input');
const listEl = document.querySelector('.to-do__list');
// const buttonEl = document.querySelector('button');

  let date = new Date();
  // get the date as a string
  let dateToString = date.toDateString();
  // get the time as a string
  let time = date.toLocaleTimeString();
  // const inputValue = inputEl.value;
// formEl.addEventListener('submit', function (event) {
//   event.preventDefault();

//   
  

  
  
//   listEl.insertAdjacentHTML('beforeend', `${newTaskHtml}`);

//   formEl.reset();
// })

const newTaskHtml = (inputValue) => {
  return `<li><input type="checkbox" name="to-do__checkbox" class="to-do__checkbox"> <span>${inputValue}</span>
  <div>
    <small>
      ${'date:', dateToString}
    </small>
    <small>
      ${'time:', time}
    </small>
  </div>
  <span id="${listaTask.tasks.indexOf(inputValue)}" class="spanDelete"><i class="iconSpanDelete fa-solid fa-xmark"></i></span>
</li>`;
}

const listaTask = {

  tasks: [],

  get getTodos() {
    return this.tasks;
  },

  set setTodos(todo) {
    this.tasks.push(todo);
    listaTask.renderHTML();
  },

  set taskReloader(el) {
    this.tasks = el
  },

  set removeTask(id) {
    console.log(id)
    this.tasks.splice(id, 1);
    console.log(this.tasks);
    this.renderHTML();
  },

  renderHTML() {
   
    const renderTasks = this.tasks.map( newTaskHtml ).join('');
    listEl.innerHTML = `${renderTasks}`
    // listEl.insertAdjacentHTML('beforeend', renderTasks);

    // document.querySelector('.fa-solid').addEventListener( 'click', function (event) {
    //   console.log(event.target.closest(".to-do__li"))
    //   event.target.closest(".to-do__li").remove();
    // });
  }

}

formEl.addEventListener('submit', function (event) {
  event.preventDefault();

  let inputValue = `<span class="">${inputEl.value}</span>`;
  // let inputValue = `<li><input type="checkbox" name="to-do__checkbox" class="to-do__checkbox"> 
  //     <span>${inputEl.value}</span>
  //     <div>
  //       <small>
  //         ${'date:', dateToString}
  //       </small>
  //       <small>
  //         ${'time:', time}
  //       </small>
  //     </div>
  //     <span class="spanDelete"><i class="iconSpanDelete fa-solid fa-xmark"></i></span>
  //   </li>
  // `;
  // let inputValue = inputEl.value;
  listaTask.setTodos = inputValue;
  localStorage.setItem("listaTask", JSON.stringify(listaTask.tasks));
  // this.reset();
  inputEl.value = '';
})


const iconSpanDeleteEL = document.querySelector('.to-do__list')

iconSpanDeleteEL.addEventListener('click', (event) => {

  if (event.target.className === 'iconSpanDelete') {
    listaTask.removeTask = Number(event.target.id);
    localStorage.setItem("listaTask", JSON.stringify(listaTask.tasks));
    console.log(event.target.id);
  }
    
});

if (JSON.parse(localStorage.getItem("listaTask") === null)) {
  localStorage.setItem("listaTask", JSON.stringify(listaTask.tasks));
};

const taskReloader = JSON.parse(localStorage.getItem("listaTask"));

listaTask.taskReloader = taskReloader;

listaTask.renderHTML();

// console.log(listaTask.tasks);