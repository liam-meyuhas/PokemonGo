// export type SortDirection = 'asc' | 'desc' | null;
export type SortDirection = 'desc' | null;

export type FilterAndSortCollectionProps = {
  sortByNickname: boolean;
  setSortByNickname: React.Dispatch<React.SetStateAction<boolean>>;
  showOnlyFavorites: boolean;
  setShowOnlyFavorites: React.Dispatch<React.SetStateAction<boolean>>;
  sortByDate: SortDirection;
  setSortByDate: React.Dispatch<React.SetStateAction<SortDirection>>;
};
