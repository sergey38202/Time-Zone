import { useEffect, useState } from 'react';

const useUserLogo = (firstName: string) => {
  const [userLogo, setUserLogo] = useState<null | string>(null);

  useEffect(() => {
    const generateUserLogo = () => {
      if (typeof firstName !== 'string' || firstName.length === 0) {
        throw new Error('Invalid input: Please provide a non-empty string as the first name.');
      }

      const firstLetter = firstName.charAt(0).toUpperCase();
      const logoURL = `https://dummyimage.com/100x100/007BFF/ffffff&text=${firstLetter}`;
      setUserLogo(logoURL);
    };

    generateUserLogo();
  }, [firstName]);

  return userLogo;
};

export default useUserLogo;
