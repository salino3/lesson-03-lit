  
  let arrayCharacters = [];
  
  
  export const ApiCall = async () => {
    try {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character/?page=2");
      const data = await response.json();
      arrayCharacters = data.results;
    //   console.log(arrayCharacters);
      return arrayCharacters;
    } catch (error) {
      console.error("Error fetching data:", error);
    };
  };

