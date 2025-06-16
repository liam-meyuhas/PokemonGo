// import React, {createContext, useContext, useEffect, useState} from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// type Pokemon = {name: string; caughtNumber: number};

// type PokemonContextType = {
//   pokemonList: Pokemon[];
//   addPokemon: (name: string) => void;
// };

// const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

// const STORAGE_KEY = 'pokemonList';

// export const PokemonProvider: React.FC<{children: React.ReactNode}> = ({
//   children,
// }) => {
//   const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

//   // טוען את הנתונים מה-AsyncStorage כשהאפליקציה עולה
//   useEffect(() => {
//     const loadPokemonList = async () => {
//       try {
//         const storedValue = await AsyncStorage.getItem(STORAGE_KEY);
//         if (storedValue) {
//           setPokemonList(JSON.parse(storedValue));
//         }
//       } catch (error) {
//         console.error('Failed to load pokemon list.', error);
//       }
//     };

//     loadPokemonList();
//   }, []);

//   // שומר כל שינוי ברשימה ל-AsyncStorage
//   useEffect(() => {
//     AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(pokemonList)).catch(
//       error => console.error('Failed to save pokemon list.', error),
//     );
//   }, [pokemonList]);

//   const addPokemon = (name: string) => {
//     setPokemonList(prevList => {
//       const index = prevList.findIndex(pokemon => pokemon.name === name);
//       if (index !== -1) {
//         const updated = [...prevList];
//         updated[index] = {
//           ...updated[index],
//           caughtNumber: updated[index].caughtNumber + 1,
//         };
//         return updated;
//       } else {
//         return [...prevList, {name, caughtNumber: 1}];
//       }
//     });
//   };

//   return (
//     <PokemonContext.Provider value={{pokemonList, addPokemon}}>
//       {children}
//     </PokemonContext.Provider>
//   );
// };

// export const usePokemon = () => {
//   const context = useContext(PokemonContext);
//   if (!context) {
//     throw new Error('usePokemon must be used within a PokemonProvider');
//   }
//   return context;
// };

import {View, Text} from 'react-native';
import React, {createContext, useState} from 'react';

type Pokemon = {name: string; caughtNumber: number};

type PokemonContextTypes = {
  pokemonList: Pokemon[];
  addPokemon: (name: string) => void;
};

export const PokemonContext = createContext<PokemonContextTypes | undefined>(
  undefined,
);

// const STORAGE_KEY = 'pokemon-list';

const PokemonProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  const addPokemon = (name: string) => {
    setPokemonList(prevList => {
      const index = prevList.findIndex(pokemon => pokemon.name === name);
      if (index !== -1) {
        const updated = [...prevList];
        updated[index] = {
          ...updated[index],
          caughtNumber: updated[index].caughtNumber + 1,
        };
        return updated;
      } else {
        return [...prevList, {name, caughtNumber: 1}];
      }
    });
  };

  const ctx = {
    pokemonList,
    addPokemon,
  };
  return (
    <PokemonContext.Provider value={ctx}>{children}</PokemonContext.Provider>
  );
};

export default PokemonProvider;
