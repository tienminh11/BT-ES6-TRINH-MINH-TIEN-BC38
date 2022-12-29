// function createdMyTask
function Task(info) {
  this.info = info;
}
let myTask = [];
// CREATE
let createdMyTask = () => {
  let info = document.getElementById("newTask").value;
  let task = new Task(info);

  myTask.push(task);
  renderMyTask();
};
let findNumber = (info) => {
  for (let i = 0; i < myTask.length; i++) {
    if (myTask[i].info === info) {
      return i;
    }
  }
  return -1;
};
// DELETE
let removeMyTask = (info) => {
  let index = findNumber(info);
  myTask.splice(index, 1);
  renderMyTask()
};

let renderMyTask = (data) => {
  data = data || myTask;
  let html = "";
  for (let i = 0; i < data.length; i++) {
    html += `<li>
               <div>
                  <p>${data[i].info}</p>
                </div>
               <div>
                 <button 
                 onclick="removeMyTask('${data[i].info}')"
                 class="buttons">
                  <i class="fa-solid fa-trash-can remove"></i>
                  </button>
                 <button class="buttons">
                  <i class="fa-solid fa-circle-check"></i>
                   </button>
                 </div>
</li>`;
  }
  document.getElementById("todo").innerHTML = html;
};


function up(){
    myTask.sort()
}




// // reset form
// let resetInput = () => {
//   document.getElementById("form").reset();
// };
