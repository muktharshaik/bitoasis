import { createContext, useState } from 'react';


const tickersContext = createContext([]);

export const Store = (props) => {
    const [tickers, setTickers] = useState([]);

    return (
        <tickersContext.Provider value={[tickers, setTickers]}>
            {props.children}
        </tickersContext.Provider>
    )
}

export default tickersContext