var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();
}

//Lists the drink info
function readFormData(){
    var formData = {};
    formData["drinkType"] = document.getElementById("drinkType").value;
    formData["addOns"] = document.getElementById("addOns").value;
    formData["iceLevel"] = document.getElementById("iceLevel").value;
    formData["drinkPrice"] = document.getElementById("drinkPrice").value;
    return formData;
}

//Allows user to insert drink
function insertNewRecord(data){
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.drinkType;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.addOns;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.iceLevel;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.drinkPrice;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`    
}

//Allows user to edit drink
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('drinkType').value = selectedRow.cells[0].innerHTML;
    document.getElementById('addOns').value = selectedRow.cells[1].innerHTML;
    document.getElementById('iceLevel').value = selectedRow.cells[2].innerHTML;
    document.getElementById('drinkPrice').value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.drinkType;
    selectedRow.cells[1].innerHTML = formData.addOns;
    selectedRow.cells[2].innerHTML = formData.iceLevel;
    selectedRow.cells[3].innerHTML = formData.drinkPrice;
}

//Allows user to delete unwanted drink
function onDelete(td){
    if(confirm('Would you like to delete the current drink?')){
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
    }
    resetForm();
}

//The Data Will Reset
function resetForm(){
    document.getElementById('drinkType').value = '';
    document.getElementById('addOns').value = '';
    document.getElementById('iceLevel').value = '';
    document.getElementById('drinkPrice').value = '';
}