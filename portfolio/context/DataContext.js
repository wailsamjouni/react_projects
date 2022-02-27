import { createContext, useState } from 'react'

const DataContext = createContext();

export const DataProvider = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <DataContext.Provider value={{isOpen, setIsOpen}}>
            { props.children }
        </DataContext.Provider>
    );
}

export default DataContext;