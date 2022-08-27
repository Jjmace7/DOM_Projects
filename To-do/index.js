  let formTag = document.querySelector("form");
  let tbodyTag = document.querySelector("tbody");
  let tableTag = document.querySelector("table");
  
  function Add(details) {
    details.preventDefault(); // to prevent page reloading
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let number = document.querySelector(".number").value;
    tbodyTag.innerHTML += `
      <tr>
          <td>${name}</td>
          <td>${email}</td>
          <td>${number}</td>
          <td><button class="removeBtn">Remove</button></td>
      </tr>
  `;
  }


  formTag.addEventListener("submit", Add);
  
  function Delete(details) {
    if (!details.target.classList.contains("removeBtn")) {
      return;
    }
  
    const remove = details.target;
    remove.closest("tr").remove();
  }
  
  tableTag.addEventListener("click", Delete);