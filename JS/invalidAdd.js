;(function(){
    const name = document.querySelector('#name')
    const course = document.querySelector('#courses')
    const saveBtn = document.querySelector('.save-btn')

    let alumnNumber = 1
    let loginError = false


    function noError(){
        document.querySelector('.error').remove()
    }

    function noErrorColor(id){
        document.getElementById(id).style.borderColor = "#000"
    }

    saveBtn.addEventListener('click', function(event){
        event.preventDefault()

        const msgErrorName = document.createElement("div")
        const msgErrorCourse = document.createElement("div")
        
        const isNameEmpty = name.value.trim().length === 0
        const isCourseEmpty = course.value === "0"
        
        if(isNameEmpty || isCourseEmpty) {
            
            if(isNameEmpty){
                loginError = true
                const containMsgErrorN = document.querySelector(".error-name")

                if(containMsgErrorN){
                    containMsgErrorN.remove()
                }
                document.getElementById("name").style.borderColor = "#fc0b03"
                msgErrorName.classList.add("error")
                msgErrorName.classList.add("error-name")
                msgErrorName.textContent = "Por favor insira o seu nome"
                name.after(msgErrorName)
            } 
            
            if(isCourseEmpty){
                loginError = true
                const containMsgErrorC = document.querySelector(".error-courses")
                
                if(containMsgErrorC){
                    containMsgErrorC.remove()
                }
                document.getElementById("courses").style.borderColor = "#fc0b03"
                msgErrorCourse.classList.add("error")
                msgErrorCourse.classList.add("error-courses")
                msgErrorCourse.textContent = "Por favor selecione o seu curso"
                course.after(msgErrorCourse)
            }
            
        

        } else {
            if (loginError) {
                loginError = false;
                noError()
                noError()
                noErrorColor("name")
                noErrorColor("courses")
                setTimeout(() => {
                    alert("This is only a test, your personal information will not be saved.")
                }, 1000);
            }


            
            alumnNumber++

                const alumn = $(`
                    <tr>
                    <td>${alumnNumber}</td> 
                    <td>${name.value}</td> 
                    <td>${course.value}</td>
                    <td>
                        <button class="btn-remove">
                            Remover
                        </button>
                    </td>
                </tr>
                    `)
            $("tbody").append(alumn)
            
        }
    })
})()