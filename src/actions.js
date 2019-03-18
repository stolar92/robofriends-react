import { CHANGE_SEARCHFIELD } from './constants';
export const setSearchField = (text) => ({
    type: CHANGE_SEARCHFIELD,
    payload: text
}) // umiesczenie nawiasów pozwala na zwrocenie obiektu. Akcja setSearchField pobiera text (text jest tym co wpisal user w inpucie) i zwaraca go razem z typem