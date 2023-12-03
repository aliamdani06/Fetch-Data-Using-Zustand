'use client'

import { useEffect } from 'react';
import { useStore } from '../../store/store';

const Todos: React.FC = () => {
    const { data, Data } = useStore();
    console.log(data)

    useEffect(() => {
        Data();
    }, []);

    return (
        <div>
            {data ? (
                <p>{data.title}</p>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Todos;
