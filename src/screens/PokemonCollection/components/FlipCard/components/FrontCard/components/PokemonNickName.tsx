import { HStack, Pressable, Text } from "native-base";
import { ROUTES } from "../../../../../../../components/Navigation/enums/navigation.enum";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../../../../../../../components/Navigation/types/navigation.type";
import React from "react";
import { PokemonCollection } from "../../../../../../../types/pokemon.type";
import Icon from 'react-native-vector-icons/FontAwesome';

const PokemonNickName:React.FC<{pokemon: PokemonCollection}> = ({pokemon}) => { 

    const navigation = useNavigation<NavigationProps>()

    return ( <HStack alignItems="center" justifyContent="center" space={2}>
        <Text bold fontSize="lg" color="#0274DE" fontWeight="extrabold">
      {pokemon.nickName}
    </Text>
    <Pressable onPress={() => navigation.navigate(ROUTES.EDIT_NICKNAME,{pokemon})}>
      <Icon name="pencil" size={15} color="#62D2FE" />

    </Pressable>

    </HStack>)
}

export default PokemonNickName;