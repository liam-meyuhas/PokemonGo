import { Text } from "native-base";
import React from "react";

const PokemonName:React.FC<{pokemonName: string}> = ({pokemonName}) => {
    return(<>
    <Text fontSize="lg" color="#0A8CC8" fontWeight="extrabold">
        {pokemonName}
      </Text>

      <Text
        fontSize="lg"
        color="#1DD3CC"
        fontWeight="extrabold"
        position="absolute"
        top="42.5%">
        {pokemonName}
      </Text></>)
}

export default PokemonName;