export type CatchButtonProps = {name: string; image: string};
export type PokemonPopupProps = {
  image: string;
  isCaught: boolean;
  setIsCaught: (isCaught: boolean) => void;
};
