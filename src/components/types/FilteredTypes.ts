type FilteredTypes = {
  filteredPayments: { id: string; name: string; amount: number; date: string }[];
  setFilteredPayments: React.Dispatch<React.SetStateAction<{ id: string; name: string; amount: number; date: string }[]>>;
};

export default FilteredTypes;
