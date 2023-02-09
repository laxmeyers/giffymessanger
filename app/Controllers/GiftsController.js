import { appState } from "../AppState.js";
import { giftsService } from "../Services/GiftsService.js";
import { getFormData } from "../Utils/FormHandler.js";
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

    async makeGift() {
        try {
            window.event?.preventDefault()
            let form = window.event?.target
            let formData = getFormData(form)
            await giftsService.makeGift(formData)
        } catch (error) {
            Pop.error(error)
        }
    }

    async openGift(giftId) {
        try {
            await giftsService.openGift(giftId)
        } catch (error) {
            Pop.error(error)
        }
    }
}
