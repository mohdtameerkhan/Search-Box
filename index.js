
let listG = document.querySelectorAll('.list-item-group')


document.querySelector('#search-box').addEventListener('input' , filterF)

function filterF()

{
    let searchInput = document.querySelector('#search-box').value
    let filterr = searchInput.toLowerCase();
    listG.forEach(e=>{
        let text = e.textContent
        if(text.toLowerCase().includes(filterr.toLowerCase()))
        {
         e.style.display = '';
        }
        else
        {
         e.style.display = 'none';
        }

    })

}