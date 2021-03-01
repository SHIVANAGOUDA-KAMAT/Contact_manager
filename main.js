let result= '';

let deleteContact = function (randId) {
    let contacts = JSON.parse(localStorage.getItem("contacts"));
    contacts = contacts.filter(function(contact) {
        return contact.id != randId;
    });

    location.reload();
    localStorage.setItem("contacts", JSON.stringify(contacts));
};

if (!localStorage.getItem("contacts")) {
    localStorage.setItem("contacts", "[]");
}

let contacts = JSON.parse(localStorage.getItem("contacts"));

let submitContact = function (e) {
    e.preventDefault();
    let contact_name = document.getElementById("name").value;
    let contact_number = document.getElementById("number").value;

    if (contact_name==='' || contact_number ==='') {return;}

    let contact = {
        id: Math.random().toString(36).substr(2,9),
        name: contact_name,
        number: contact_number
    }
    contacts.push(contact);
    localStorage.setItem("contacts", JSON.stringify(contacts));
   
    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
    location.reload();
}

for (let i=0;i<contacts.length;i++) {
    result+= `<i id="user" style="display: flex;">
    <img src="icon/showContact.svg" alt="Users">
    <p>
        ${contacts[i].name} <br> ${contacts[i].number}
    </p>
    <img onclick="deleteContact('${contacts[i].id}')"; src="icon/close.svg" alt="Close">
</i>`
}

let disResult = document.querySelector(".contacts").innerHTML = result;
