import { MAX_ITEMS } from "../common/const.js";
import ProductsConfig from "../controllers/productsConfig.controller.js";
import Items from "../models/items.model.js";
import alphaNumerics from "./alphaNumerics.js";



export default async function machineConfig() {
    const payload = await ProductsConfig.getProducts()
    for (let pos = 42; pos <= MAX_ITEMS; pos++) {
        const value = payload[pos]
        if (value) {
            Items.setItem({
                name: value.name,
                number: alphaNumerics(pos) + pos,
                img: value.image,
                price: value.price
            }, pos)
        }
    }
    //Retornamos el array
    return Items.getAllItems()
}