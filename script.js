
fetch ('data.json')
.then(resp => resp.json())
.then(data =>{
    const dataList = document.getElementById('data-list');
    data.forEach(item => {
        const itemList = document.createElement('li');
        itemList.innerHTML = `<strong>Name:<strong> ${item.name}<br><strong>Email:<strong> ${item.email} <br><strong>ID:<strong> ${item.id}`
        dataList.appendChild(itemList);
        
    });
})
.catch(error=>{
    console.error('Error occuried',error);
})

