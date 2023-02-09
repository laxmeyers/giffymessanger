import { appState } from "../AppState.js";
import { giftsService } from "../Services/GiftsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function drawGifts() {
    let template = ''
    appState.gifts.forEach(g => template += g.GifsTemplate)
    setHTML('gift-container', template)
}

export class GiftsController { 

    constructor() {
        console.log('this work?');
        this.getGifts()
        appState.on('gifts', drawGifts)
    }

    async getGifts() {
        try {
            await giftsService.getGifts()
        } catch (error) {
            Pop.error(error)
        }
    }
}
