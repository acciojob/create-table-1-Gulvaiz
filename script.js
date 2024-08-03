function insert_Row() {
    //Write your code here
let table = document.querySelector("table")

	let newRow = table.insertRow(0)
	let newCell1 = newRow.insertCell(0)
     newCell1.innerText = "New Cell1"
	let newCell2 = newRow.insertCell(1)
    newCell2.innerText = "New Cell2"
}
