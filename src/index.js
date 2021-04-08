// import {getParametersfromUrl} from "./service/parameters"

import { data } from "cypress/types/jquery"

function showPokemonList (names, callback) {
    names.forEach((name) => {

    })
}   
function createItemPager (text, page) {
    const $item = document.createElement("li")
    const $link = document.createElement("#")
    $link.textContent = text;
    $link.href = page
    $link.className = "page-link";
    $item.className = "page-item";
    $item.appednChild($link)
    return $item
}
function handleChangePage(event, callback) {
    e.preventDefault();
    const {target} = e;
    callback()  
} 
function showPager (total, actualPage, nextUrl, prevUrl, callback) {
 
    
    
    loadPokemons(offset, limit)
    for(let i = 0; i < total; i++) {
        const $pageNumber = i + 1;
        const $page = createItemPager($pageNumber)
        if(actualPage === $page) {
            $page.classList.add("active")
        }
        $pager.appednChild($page)
    }
    $paginador.onclick = (e) => {
        handleChangePage(e)
    }
}
function getParametersUrl (url) {
    let offset = /offset=([0,9]+)/.exec(url).pop()
    let limit = /limit=([20,40]+)/.exec(url).pop()
}
function changePage (page) {
    let actualPage = page;
    const POKEMONS_PER_PAGE = 20;
    let offset;
    let limit = POKEMONS_PER_PAGE;
    if(typeof page === number) {
        offset = POKEMONS_PER_PAGE * (page - 1)
    } else {
        const parameters = getParemetersUrl(page)
    }
}   
function loadPokemons(offset, limit){
    const BASE_URL = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
    fetch(BASE_URL).json()
}
function initialize() {
    return changePage(1)
}


initialize()