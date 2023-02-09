import { appState } from "../AppState.js";
import { Gift } from "../Models/Gift.js";
import { sandBoxApi } from "./AxiosService.js"

class GiftsService {
    async getGifts() {
        const res = await sandBoxApi.get('api/gifts')
        console.log(res.data);
        let newGift = res.data.map(g => new Gift(g))
        appState.gifts = newGift
    }
}


export const giftsService = new GiftsService()