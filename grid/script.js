const table=document.querySelector(".table");
//fetch the users data from fake API
const fetchUsers=async()=>{
    try {
        const res=await fetch("https://jsonplaceholder.typicode.com/users");
        const data=await res.json();
        return data;
    } catch (error){
        console.error(error);
        return [];
    }
}
//Render user list in the form of table in the page
const renderUsersList=(users)=>{
    users.forEach(user => {
        const {id,name,username,email,address:{city},phone,website}=user;
        const row=document.createElement("div");
        row.classList.add("row");
        const innerText=`
        <span>${id}</span>
        <span>${name}</span>
        <span>${email}</span>
        <span>${city}</span>
        <span>${city}</span>
        <span>${website}</span>
        `;
        row.innerHTML=innerText;
        table.append(row);
    });
}
//fetch and render users list after the load window
window.addEventListener("load",async()=>{
    const data=await fetchUsers();
    renderUsersList(data);
});
