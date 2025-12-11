import type IItems from "../interfaces/item.interface.js";

export default class Items {
    protected static itemMap: Map<number, IItems> = new Map<number, IItems>()

    private constructor() { }

    /**
     * Registra un Item
     * @param payload Información del objeto a registrar usando la interface IItems
     * @param key Posicion que tomara ese item
     */
    static setItem(payload: IItems, key: number) {
        this.itemMap.set(key, payload)
    }

    /**
     * Obtiene un item basado en su key
     * @param key Posicion a buscar
     * @returns 
     */
    static getItem(key: number): IItems | undefined {
        return this.itemMap.get(key)
    }

    /**
     * Obtiene todos los items registrados
     * @returns 
     */
    static getAllItems(): IItems[] {
        return Array.from(this.itemMap.values())
    }
}