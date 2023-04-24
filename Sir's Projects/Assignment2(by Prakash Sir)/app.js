// console.log("Connected");
const tbody = document.querySelector("tbody");
const addRowBtn = document.querySelector("form");
const fullName = document.querySelector("#name");
const email = document.querySelector("#email");
const phNumber = document.querySelector("#tel");
const errMsg = document.querySelector(".error-msg");

const resetForm=()=>{
    fullName.value="";
   email.value="";
   phNumber.value="";
}
const addRow=(e)=>{
    e.preventDefault();
    if(!(fullName.value && email.value && phNumber.value)){
        errMsg.textContent = "Empty Input field(s)";
        setTimeout(()=>{
        errMsg.textContent = "";
        },1000)
    }else{
        const newElm = document.createElement('tr');
        newElm.setAttribute("class", "row");
        newElm.innerHTML = `
        <td>${fullName.value}</td>
        <td>${email.value}</td>
        <td>${phNumber.value}</td>
        <td class="action-btn"><button id="remove-btn">Remove</button></td>
                                `;
        tbody.appendChild(newElm);
        resetForm();
    }

}
const removeRow=(e)=>{
    if(e.target.id==='remove-btn')
    e.target.parentElement.parentElement.remove();
}
addRowBtn.addEventListener('submit',addRow);
tbody.addEventListener('click',removeRow);

