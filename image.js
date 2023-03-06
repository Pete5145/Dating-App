// Select all elements of interest
let avatarFile = document.getElementById("avatar"); 
let preview = document.getElementById("preview");

    
avatarFile.addEventListener("change", (event) => {
    let fileName = event.target.files[0].name;
    preview.src = fileName;
});