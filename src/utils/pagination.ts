export const generatePageNumbers = (pageCount: number) => {
  const result = [];

  for (let i = 1; i <= pageCount; i++) {
    result.push(i);
  }

  return result;
};

export const getPaginatedItems = <Type>(
  data: Type[],
  currentPage: number,
  perPage: number,
) => {
  const indexLastElement = currentPage * perPage;
  const indexFirstElement = indexLastElement - perPage;
  const result = data.slice(indexFirstElement, indexLastElement);

  return result;
};
