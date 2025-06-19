export type SearchBarProps = {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  fetchPokemon: (name: string) => void;
};
