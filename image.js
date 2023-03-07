window.onload = function() {
    var files =  document.querySelectorAll("input[type=file]");
    console.log(files);
    files[0].addEventListener("change", function(e) {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                document.getElementById("preview").src = e.target.result;
            }
            reader.readAsDataURL(this.files[0]);
        }
    });
}