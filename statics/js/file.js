console.log("log")

var eleme = document.querySelectorAll(".element")
var form = document.querySelector("#element")
var formdata = document.querySelector("#data")
var url = document.querySelector("#url")

for (var i = 0; i < eleme.length; i++) {
    eleme[i].addEventListener("click", function() {
        if (this.previousElementSibling.style.textDecoration === "line-through") {
            this.previousElementSibling.style.textDecoration = "none"
            this.innerHTML = "&rarr;";
            formdata.value = this.previousElementSibling.innerHTML
            formdata.nextElementSibling.value = 0

        } else {

            this.previousElementSibling.style.textDecoration = "line-through"
            formdata.value = this.previousElementSibling.innerHTML
            this.innerHTML = "&larr;";
            formdata.nextElementSibling.value = 1
        }

        $.ajax({
            type: "POST",
            url: url.value,
            data: $("#form").serialize(),
            datatype: "json",
            success: function(data) {
                if (data.msg === "Success") {
                    alert("terminer")
                    location.reload()
                }
            }
        })
    })

}