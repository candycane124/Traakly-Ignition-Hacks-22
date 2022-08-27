function add() {
    var num = document.getElementById("t1").rows.length;
    var x = document.createElement("tr");
  
    //Complete?
    a = document.createElement("td");
    anode = document.createElement("input");
    var b = document.createAttribute("type");
    b.value = "checkbox";
    anode.setAttributeNode(b);
    a.appendChild(anode);
    x.appendChild(a);
  
    //Task Name
    a = document.createElement("td");
    anode = document.createElement("input");
    b = document.createAttribute("type");
    b.value = "text";
    anode.setAttributeNode(b);
    a.appendChild(anode);
    x.appendChild(a);
  
    //Deadline
    a = document.createElement("td");
    x.appendChild(a);
    
    //Delete/Add Row
    a = document.createElement("td");
    anode = document.createElement("input");
    anode.setAttribute("type", "button");
    anode.setAttribute("value", "Delete");
    anode.setAttribute("onclick", "deleteRow(this)");
    a.appendChild(anode);
    x.appendChild(a);
    document.getElementById("t1").appendChild(x);
}
  
function deleteRow(e) {
    var tr = e.parentElement.parentElement;
    var tbl = e.parentElement.parentElement.parentElement;
    tbl.removeChild(tr);
}