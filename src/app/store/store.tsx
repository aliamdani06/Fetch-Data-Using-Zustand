import { create } from 'zustand';
import axios from 'axios';


interface AppState {
    data: Data | null;
    Data: () => Promise<void>;
}
const Api = async () => {
    const response = await axios.get<Data>('https://jsonplaceholder.typicode.com/todos');
    return response.data;
};
export const useStore = create<AppState>((set) => ({
    data: null,
    Data: async () => {
        try {
            const response = await Api();
            set({ data: response });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    },
}));

type Data = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
};
