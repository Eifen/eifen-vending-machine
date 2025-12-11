import axios from "axios";
import type IBeer from "../interfaces/api.interface.js";

export default class ProductsConfig {
    /**
     * Abstrae la informacion de la api de cerveza
     */
    private constructor() { }

    static async getProducts() {
        const payload = await axios.get<IBeer[]>('https://api.sampleapis.com/beers/ale')
        return payload.data
    }
}