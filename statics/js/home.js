var form = document.querySelector('#form')
var url_ = document.querySelector('#url')
var btn = document.querySelector('#btn')

var names = form.children[1]

var desc = url_.nextElementSibling
form.addEventListener('submit', function(e) {
    e.preventDefault()
     e.stopPropagation()
    btn.style.display = 'none';
    btn.nextElementSibling.style.display = 'block';
    $.ajax({
        type: "POST",
        url: url_.value,
        data: $("#form").serialize(),
        datatype: "json",
        success: function(data) {
            if (data.msg === "Success") {
                $("#card").append('<div class="card mb-4 jumbotron mr-1" id="card"><div class="card-header mb-3 text-center text-uppercase"><a href="/tasks/' + data.id + '">' + names.value + '</a></div><div class="card-text text-capitalize">' + desc.value + '</div></div>')
                btn.style.display = 'block'
                btn.nextElementSibling.style.display = 'none'
                $("#form")[0].reset()
                  alert("creation de votre tache terminer")
                  location.reload()
                  alert("creation de votre tache terminer")


            } else {
                alert(data.msg)
                btn.style.display = 'block'
                btn.nextElementSibling.style.display = 'none'

            }
        }


    })

})



/*
    scructure de l'ajax avec jquery
    - $.ajax(
        type:
        url:
        data:
        datatype:
        success:

    )

*/

var deletebtn = document.querySelectorAll("#delete")
var url = document.querySelector("#del_url")
var pk = document.querySelector("#pk")
// var delForm = document.querySelector("#delForm")



for (var i = 0; i < deletebtn.length; i++) {
    deletebtn[i].addEventListener("click", function(e){
        e.preventDefault()
        e.stopPropagation()
        document.querySelector("#pk").value = this.value
        console.log(pk)
        $.ajax({
            type:"POST",
            url:url.value,
            data:$("#delForm").serialize(),
            datatype:"json",
            success:function(){
                alert("cette tâche vient d' être supprimé")
            }
        })
    })
}