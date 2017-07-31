const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const places = []
fetch(endpoint)
    .then(response => response.json())
    .then(data => places.push(...data))

function findMatches(stringToMatch) {
    return places.filter(place => {
        const regex = new RegExp(stringToMatch, 'gi')
        return place.city.match(regex) || place.state.match(regex)
    })
}

function displayMatches() {
    const matches = findMatches(this.value)
    const html = matches.map(match => {
        const regex = new RegExp(this.value, 'gi')
        const cityName = match.city.replace(regex, `<span class="hl">${this.value}</span>`)
        const stateName = match.state.replace(regex, `<span class="h1">${this.value}</span>`)
        return `
        <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${numberWithCommas(match.population)}</span>
        </li>
        `
    }).join('')
    suggestions.innerHTML = html
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const searchField = document.querySelector(".search")
const suggestions = document.querySelector(".suggestions")

searchField.addEventListener("change", displayMatches)
searchField.addEventListener("keyup", displayMatches)
