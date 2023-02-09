import { appState } from "../AppState.js";
import { Gift } from "../Models/Gift.js";
import { sandBoxApi } from "./AxiosService.js"

class GiftsService {
    async openGift(giftId) {
        let giftIndex = appState.gifts.findIndex(g => g.id == giftId)
        let tempGift = appState.gifts.find(g => g.id == giftId)
        // @ts-ignore
        tempGift.opened = true
        const res = await sandBoxApi.put(`/api/gifts/${giftId}`, tempGift)
        console.log(res.data);
        appState.gifts[giftIndex].opened = true
        appState.gifts[giftIndex].url = res.data.url
        appState.emit('gifts')
        console.log();
    }
    async makeGift(formData) {
        const res = await sandBoxApi.post('api/gifts', formData)
        let newGift = new Gift(res.data)
        appState.gifts.unshift(newGift)
        appState.emit('gifts')
    }
    async getGifts() {
        const res = await sandBoxApi.get('api/gifts')
        console.log(res.data);
        let newGift = res.data.map(g => new Gift(g))
        appState.gifts = newGift
        console.log(appState.gifts)
    }
}


export const giftsService = new GiftsService()