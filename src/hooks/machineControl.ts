import { ref } from "vue"
import type IItems from "../interfaces/item.interface.js"
import { ErrorMessages } from "../enums/errors.enum.js"

export default function machineControl() {
    const preview = ref<string>('')
    const code = ref<string>('')

    function searchProduct(payload: IItems[]) {
        if (payload.length === 0) return ErrorMessages.ARRAY_EMPTY
        const findProduct = payload.find(item => item.number === code.value.toUpperCase())
        console.log(findProduct, code.value)
        if (!findProduct) return ErrorMessages.NOT_FOUND_ITEM
        return findProduct.name + "\n" + `Price: ${findProduct.price}`
    }

    return {
        preview,
        code,
        searchProduct
    }
}