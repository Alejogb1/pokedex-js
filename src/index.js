// import {getParametersfromUrl} from "./service/parameters"

function changePage (page) {
 loadPokemons()
}   


function loadPokemons(offset, limit){
    const BASE_URL = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"

    function fetchUrl () {
        fetch(BASE_URL)
        .then(response => response.json())
        .then(pokeData => renderPokemons(pokeData))
    }
    fetchUrl()
    function renderPokemons (pokemons) {
        console.log(pokemons)
        const table = document.querySelector("#table")
        pokemons.results.forEach(pokemon => {
            const $code = document.createElement("tbody")
            $code.innerHTML = ` <tbody class="bg-white divide-y divide-gray-200">
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1595452767427-0905ad9b036d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="">
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">
                      ${pokemon.name}
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>`
            table.appendChild($code)
        })
    }

}
function initialize() {
    return changePage(1)
}


initialize()