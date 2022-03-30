const login = document.querySelector('.section__form__login')
const password = document.querySelector('.section__form__password')
const addBtn = document.querySelector('.section__form__btn')
const error = document.querySelector('.section__form__error')


addBtn.addEventListener('click', ()=>{
    const name = login.value
    const value = password.value
    localStorage.setItem(`${name}`, `${value}`)
    console.log(localStorage.getItem(name))
    // localStorage.clear()
    /////////////////////////////////////////////
})

password.addEventListener('keyup', e => {
    e.preventDefault()
    if (e.keyCode === 13){
        const name = login.value
        const value = password.value
        localStorage.setItem(`${name}`, `${value}`)
        console.log(localStorage.getItem(name))
    }
})

addBtn.addEventListener('click', ()=>{

    error.classList.add('flex-error')

})




