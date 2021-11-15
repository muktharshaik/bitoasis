import { createContext, useState } from 'react';


export const tickersContext = createContext([]);

const Store = ({ children }) => {
    const [tickers, setTickers] = useState([]);

    return (
        <tickersContext.provider value={[tickers, setTickers]}>
            {children}
        </tickersContext.provider>
    )
}

export default Store;