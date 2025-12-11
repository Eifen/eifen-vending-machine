import { AxiosError } from "axios";

export default function axiosError(error: unknown) {
    if (error instanceof AxiosError) return 'Error en la api: ' + error.message;
    else return 'Error desconocido'
}