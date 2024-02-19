import { useState, useEffect } from 'react';

const useGetCurrentYear = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const updateYear = () => {
      setCurrentYear(new Date().getFullYear());
    };

    const intervalId = setInterval(updateYear, 60000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return currentYear;
};

export default useGetCurrentYear;
