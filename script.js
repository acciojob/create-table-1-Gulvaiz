let table = document.querySelector("table")
function insert_Row() {
    //Write your code here
  let newRow = document.createElement("tr")
	newRow.innerHTML = ` <td>New Cell1</td> <td>New Cell2</td>`
	table.prepend(newRow)
   
}
