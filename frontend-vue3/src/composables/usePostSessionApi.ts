import axios, { AxiosError, AxiosResponse } from "axios";
import { ref } from "vue";

export default async function usePostSessionApi(message: () => string, id?: () => number) {

    const response = ref("")
    response.value = (await axios.post(
        `${import.meta.env.VITE_API_BASE}${import.meta.env.VITE_API_SESSION}`,
        { name: ""/** TODO: */, message: message() }
    )).data.session.response

    return { response }
}