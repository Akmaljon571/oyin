const body = document.querySelector('.body')
const qaytaUrinish = document.querySelector('.header_button')
const oop = document.querySelector('.header_select')
const span = document.querySelector('.header_span')
const oylaganSonim = document.querySelector('.oylagan_sonim')
const form = document.querySelector('.form')
const kiritganSoni = document.querySelector('.main_input')
const qolganSon = document.querySelector('.footer_soni')
let son_oyladim = Math.round((Math.random() * 8 + 2))
let random // radnom kiritganda 2ni ayirib Mathda qoshish uchun
let sana = 0;


oop.addEventListener('change', () => {
    span.textContent = `${oop.value} gacha ixtiyoriy son oyladim`
    random = oop.value - 2
    son_oyladim = Math.round((Math.random() * random + 2))
    qolganSon.textContent = 'Ketgan urinishlar: 0' 
    body.setAttribute('class', 'body')
    sana = 0
    oylaganSonim.textContent = '?'
}) // oop function


qaytaUrinish.addEventListener('click', () => {
    random = oop.value - 2
    son_oyladim = Math.round((Math.random() * random + 2))
    console.log(son_oyladim);
    body.setAttribute('class', 'body')
    qolganSon.textContent = 'Ketgan urinishlar: 0'
    oylaganSonim.textContent = '?'
    sana = 0

}) // qayta urinish funksiyasi

form.addEventListener('submit', (evt) => {
    evt.preventDefault()
    if (kiritganSoni.value == '') return
    sana ++
    if ((kiritganSoni.value - 0) == son_oyladim) {
        oylaganSonim.textContent = son_oyladim;
        body.setAttribute('class', 'body_green')

    } else if ((kiritganSoni.value - 0) > son_oyladim) {
        oylaganSonim.textContent = 'bu son katta'
        body.setAttribute('class', 'body_red')
    } else if ((kiritganSoni.value - 0) < son_oyladim) {
        oylaganSonim.textContent = 'bu son kichik'
        body.setAttribute('class', 'body_red')
    }
    qolganSon.textContent = `Ketgan urinishlar: ${sana}` 
    kiritganSoni.value = ''
    console.log(sana);
    if (sana == 10) {
        sana = 0
        alert('sizni urinishlaringiz tugadi oyinni boshqattan boshlang')
    }
}) // input submit funksiyasi









