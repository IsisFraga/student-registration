;(function(){
    const name = document.querySelector('#name')
    const course = document.querySelector('#courses')
    const btn = document.querySelector('.save-btn')

    function noError(){
        document.querySelector('.error').remove()
    }
    function noErrorColor(id){
        document.getElementById(id).style.borderColor = "#000"
    }


    btn.addEventListener('click', function(event){
        event.preventDefault()

        const msgErrorName = document.createElement("div")
        const msgErrorCourse = document.createElement("div")
        const containMsgErrorN = document.querySelector(".error-name")
        const containMsgErrorC = document.querySelector(".error-courses")

        const isNameEmpty = name.value.trim().length === 0
        
        if(isNameEmpty){

            if(containMsgErrorN){
                containMsgErrorN.remove()
            }

            document.getElementById("name").style.borderColor = "#fc0b03"
            msgErrorName.classList.add("error")
            msgErrorName.classList.add("error-name")
            msgErrorName.textContent = "Por favor insira o seu nome"
            name.after(msgErrorName)
        }


        const isCourseEmpty = course.value === "0"
        if(isCourseEmpty){

            if(containMsgErrorC){
                containMsgErrorC.remove()
            }

            document.getElementById("courses").style.borderColor = "#fc0b03"
            msgErrorCourse.classList.add("error")
            msgErrorCourse.classList.add("error-courses")
            msgErrorCourse.textContent = "Por favor selecione o seu curso"
            course.after(msgErrorCourse)

        } else {

            noError()
            noError()
            noErrorColor("name")
            noErrorColor("courses")

            setTimeout(() => {
                alert("This is only a test, your personal information will not be saved.")
            }, 1000);
        }
    })
})()