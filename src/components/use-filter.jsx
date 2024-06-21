import { useState, useEffect } from 'react';

const useFilteredData = (dataArray, keyword) => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (keyword) {
      const filtered = dataArray.filter(item =>
        item.toLowerCase().includes(keyword.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(dataArray);
    }
  }, [dataArray, keyword]);

  return filteredData;
};

export default useFilteredData;
