import { FishList } from './fishlist.js'
import { locationsList } from './locationsList.js'


const fishParentHTMLElement = document.querySelector('.fish-container')


fishParentHTMLElement.innerHTML = FishList()

const locationsParentHTMLElement = document.querySelector('.locations__container')

locationsParentHTMLElement.innerHTML = locationsList()