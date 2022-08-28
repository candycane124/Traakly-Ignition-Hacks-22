function add() {
    let task = document.getElementById("taskName").value.trim();
    document.getElementById("taskName").value = "";
    let deadline = document.getElementById("deadline").value.trim();
    document.getElementById("deadline").value = ""
  
    if (deadline === "") {
      deadline = "N/A"
    }
  
    if (task !== "") {
      var x = document.createElement("tr");
  
      //Complete?
      var a = document.createElement("td");
      a.setAttribute("class", "tableItem")
      a.setAttribute("id", "inputPreview")
      anode = document.createElement("input");
      anode.setAttribute("class", "tableCb");
      anode.setAttribute("type", "checkbox");
      anode.setAttribute("onclick", "completeTask(this)");
      a.appendChild(anode);
      x.appendChild(a);
  
      //Task Name
      a = document.createElement("td");
      a.setAttribute("class", "taskName")
      anode = document.createTextNode(task);
      a.appendChild(anode);
      x.appendChild(a);
  
  
      //Deadline
      a = document.createElement("td");
      anode = document.createTextNode(deadline);
      a.setAttribute("class", "tableItem tableDeadline");
      a.appendChild(anode);
      x.appendChild(a);
  
      //Modify
      a = document.createElement("td");
      a.setAttribute("class", "tableItem");
  
      anode3 = document.createElement("button");
      anode3.setAttribute("class", "modifyBtn");
      anode3.setAttribute("onclick", "addMini(this)"); //add smaller "goals" function
      node3 = document.createElement("i");
      node3.setAttribute("class", "fa-regular fa-square-plus");
      anode3.appendChild(node3);
  
      anode2 = document.createElement("button");
      anode2.setAttribute("class", "modifyBtn");
      anode2.setAttribute("onclick", "renameTask(this)");
      node2 = document.createElement("i");
      node2.setAttribute("class", "fa-solid fa-pen-to-square");
      anode2.appendChild(node2);
  
      anode = document.createElement("button");
      anode.setAttribute("class", "modifyBtn");
      anode.setAttribute("onclick", "deleteRow(this)");
      nodenode = document.createElement("i");
      nodenode.setAttribute("class", "fa-solid fa-trash-can");
      anode.appendChild(nodenode);
  
      a.appendChild(anode3);
      a.appendChild(anode2);
      a.appendChild(anode);
      x.appendChild(a);
  
      document.getElementById("t1").appendChild(x);
      closeForm()
    } else {
      alert("Please input a task name.")
    }
  }
  
  function renameTask(e) {
    let newName = prompt("What would you like to rename the task to?").trim();
    if (newName !== null && newName !== "") {
      let current = e.parentElement.previousSibling.previousSibling;
      current.innerHTML = newName;
    }
  }
  
  function addMini(e) {
    let main = e.parentElement.previousSibling.previousSibling;
    let a = document.createElement("br");
    main.appendChild(a);
    a = document.createElement("input");
    a.setAttribute("type", "checkbox");
    main.appendChild(a);
    let subName = prompt("Sub-task Name:").trim();
    if (subName !== null && subName !== "") {
      a = document.createTextNode(subName);
      main.append(a);
    }
  }
  
  function deleteRow(e) {
    var tr = e.parentElement.parentElement;
    var tbl = e.parentElement.parentElement.parentElement;
    tbl.removeChild(tr);
  }
  
  function openForm() {
    document.getElementById("taskForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("taskForm").style.display = "none";
  }
  
  function completeTask(e) {
    let target = e.parentElement.parentElement;
    if (e.checked) {
      document.getElementById("t2").appendChild(target);
      target.setAttribute("class", "crossed");
    } else {
      document.getElementById("t1").appendChild(target);
      target.setAttribute("class", "uncrossed");
    }
  }