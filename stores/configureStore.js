import { createStore } from 'redux'
import toggleFavorite from '../helpers/favoriteReducer'

export default createStore(toggleFavorite);