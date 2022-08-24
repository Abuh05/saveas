const textarea = document.querySelector("textarea"),
fileNameInput = document.querySelector(".file-name input"),
selectMenu = document.querySelector(".save-as  select"),
saveBtn = document.querySelector(".save-btn");


selectMenu.addEventListener("change", () => {
    //getting selected option text 
    let selectOption = selectMenu.options[selectMenu.selectedIndex].text;
    saveBtn.innerText = `Save as ${selectOption.split(" ") [0]} File`  
})



saveBtn.addEventListener('click', () => {
    const blob = new Blob([textarea.value], {type: selectMenu.value});
    //URL.createObjectURL creates a url that represent passed object
    const fileUrl = URL.createObjectURL(blob)
    const link = document.createElement('a'); // creating <a> tag
    link. download = fileNameInput.value;
    link.href = fileUrl;
    link.click();
}) 