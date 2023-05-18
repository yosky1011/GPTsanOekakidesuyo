import {IGetSessionsResponse} from "./interface/IGetSessionsResponse";
import {ref} from "vue";
import axios from "axios";

export default function useGetSessionsAPi() {
    const sessions = ref<IGetSessionsResponse[]>();

    const getSessionList = async () => {
        try {
            const response = await axios.get(import.meta.env.VITE_API_BASE + import.meta.env.VITE_API_SESSIONS);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    return {getSessionList}
}
