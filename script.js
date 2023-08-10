
let myLeads = [];
let inputEl = document.getElementById("input-el")
let inputBtn = document.getElementById("btn-el");
const deleteBtn = document.getElementById("dlt-el");
const ulEl = document.getElementById("ul-el")

let leadsfromLocalstorage = JSON.parse(localStorage.getItem("myLeads"));

if(leadsfromLocalstorage)
{
    myLeads.push(leadsfromLocalstorage);
    renderLeads();
}

inputBtn.addEventListener("click" , function(){
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
    renderLeads();
})

function renderLeads(){
    let listItem = "";
    for(let i = 0; i < myLeads.length;i++)
    {
        listItem += `
                    <li>
                        <a href ='${myLeads[i]}' target = '_blank'>
                            ${myLeads[i]}
                        </a>
                    </li>`;
    }
    
    ulEl.innerHTML = listItem;
}

deleteBtn.addEventListener("dblclick" , function(){
    localStorage.clear();
    myLeads = [];
    renderLeads();
})

 