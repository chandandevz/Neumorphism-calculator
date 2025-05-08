let buttons = document.querySelectorAll('.buttons input')
let numField = document.querySelector("#num-field")
let str = ""


buttons.forEach((button)=>{
    button.addEventListener("click",function(){
        if(button.value == "C"){
            str = ""
            numField.value = str
        }
        else if(button.value === "="){
            if(str === ""){}
            else{
                str = eval(str)
                numField.value =str
            }
        }
        else{
            str = str + button.value
            numField.value = str
            console.log(typeof str);
        }
    })
})
