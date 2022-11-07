'use strict'
const ul = document.querySelector('ul')
const li = document.querySelector('.liStyle')
ul.addEventListener('dblclick', function (e) {
    if (e.target.tagName === 'LI') {
        console.log('log')
        e.target.classList.replace('liStyle', 'newLiStyle')

    }
})
const addTextBtn = document.getElementById('add_text_btn')

addTextBtn.addEventListener('click', function (e) {
    e.preventDefault()
    let formInfo = document.getElementById('put_info_form')
    const formData = new FormData(formInfo)
    let text = document.getElementById('text_id')
    formData.append('text', text)


    const ul = document.getElementById('todo_list')
    if (formData.get('text').length > 0) {
        console.log(formData.get('text'))
        text.value = ""
        text.focus()
        const li = document.createElement('li')
        li.classList.add("liStyle")
        li.innerHTML = formData.get('text');
        ul.append(li)
    } else {
        alert('Введите задачу')
    }
});