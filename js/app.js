// Ключ к API
const apiKey = 'a779fecdd0f97616fee6f7b5e6749b5a'


// Элементы на странице
const form = document.querySelector('form');
const cards = document.querySelector('.cards')





const getweather = async (city) => {
    const requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=ru`
    console.log(requestUrl);

    const response = await fetch(requestUrl)

    const data = response.json()

    return data

}

const showcard = ({ main, name, weather }) => {
    const { temp, feels_like, humidity } = main
    const { description, icon } = weather[0]
    console.log(main);

    const cardHTML = `
    
<div class="card">

  <div class="card_header">
    <div class="info">
      <h3>${name}</h3>
      <div class="desc">${description}</div>
    </div>
    <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="">
  </div>
<div class="temp">
  ${temp.toFixed()}
</div>
<ul>
  <li>temerature:${temp.toFixed()}</li>
  <li>feels:${feels_like.toFixed()}</li>
  <li>humidity:${humidity}</li>
</ul>

</div>
`
    cards.insertAdjacentHTML('afterbegin', cardHTML)
}


form.addEventListener('submit', async (e) => {
    e.preventDefault()



    const input = document.querySelector("#city")
    const inputValue = input.value


    if (inputValue.trim().length > 0) {

        const data = await getweather(inputValue)
        showcard(data)
    }
    input.value = ''
})

