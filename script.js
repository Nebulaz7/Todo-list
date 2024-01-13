  /* Todo list web app v1.0.0 by peters joshua...
  copyright © Nebula Inc. 2024 */
  
     console.log("Hello world");
     
		function openNav() {
		document.getElementById("mySidenav").style.width = "250px";
		}
		
		function closeNav() {
		document.getElementById("mySidenav").style.width = "0";
		}

    function show() {
         document.getElementById("task-input-section").style.display = "block";
      }
      function hide() {
         document.getElementById("task-input-section").style.display = "none";
      }
    function createTask() {
      let task = document.getElementById("input").value;
      if (task.trim() !== "") {
      addTaskToList(task);
      document.getElementById("input").value = ""; // Clear input after creating a task
      }
      }
      
      function addTaskToList(task) {
      let taskContainer = document.getElementById("task-list");
     
      
      let taskDiv = document.createElement("div");
      taskDiv.className = "task";
      
      let taskName = document.createElement("p");
      taskName.className = "taskName";
      taskName.onclick = function() { toggleTask(taskDiv); };
      taskName.innerText = task;
      
     
      let editButton = document.createElement("span");
      editButton.className = "editbtn";
      editButton.innerText = "Edit    ";
      editButton.onclick = function() { editTask(taskDiv); };
      
      let deleteButton = document.createElement("span");
      deleteButton.className = "deletebtn";
      deleteButton.innerText = "Delete";
      deleteButton.onclick = function() { deleteTask(taskDiv); };
      
     
      taskDiv.appendChild(taskName);
      taskDiv.appendChild(editButton);
      taskDiv.appendChild(deleteButton);
      taskContainer.appendChild(taskDiv);
      }
      
  function editTask(taskDiv) {
    let editedTask = prompt("Edit task:", taskDiv.querySelector("p").innerText);
    if (editedTask !== null) {
        taskDiv.querySelector("p").innerText = editedTask;
    }
 }
   function toggleTask(taskDiv) {
   const taskName = taskDiv.querySelector(".taskName");
   const editBtn = taskDiv.querySelector(".editbtn");
   
   if (taskName.style.textDecoration === "line-through") {
   // If the task is already checked, uncheck it
   taskName.style.textDecoration = "none";
   taskName.style.color = "#fff";
   editBtn.style.display = "block";
   } else {
   // If the task is not checked, check it
   taskName.style.textDecoration = "line-through";
   taskName.style.color = "gray";
   editBtn.style.display = "none";
   }
   }
   
   
  function deleteTask(taskDiv) {
    taskDiv.remove();
 }
 
 function openTheme() {
    document.getElementById("theme").style.display = "inline";
 }
 function setTheme() {
   let bgColor = document.getElementById("theme").value;
   body.style.background = bgColor;
 };
/* jquery script begins... */
   
   $(document).ready(function(){
     
     $("#themebtn").click(function(){
        $("#themeSect").toggle(500)      
     });
    
    $("#bgbtn").click(function(){
      let color = $("#theme").val()
      $("body").css({
      background: color,
      margin: "0"
      });
      if( color === "#00000"||"#020202"){
      $("body").css("color", "white")
      $("#intro").css("color", "black")
      }
      else{
      $("body").css("color", "black");   
      };
      
    });
    $("#reset").click(function(){
    if(confirm("Are you sure you want to clear all data?")){  
     
     $("body").css("background", "#3498db")
     }
    
    });
   
   
   
   });