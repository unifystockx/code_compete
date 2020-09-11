interface Person {
  _id: string;
  name: string;
  gender: string;
  email: string;
  phone: string;
  city: string;
}

/**
 * Function to group the people data based on their cities
 * Problem Statement: For the given array of people data, parse the data in to the form grouped by their cities.
 * The output shall have count of the people,list of people for each city.
 * @param {Person[]} people - people data array
 * @return {Array<{ count: number; city: string; people: Person[] }>} returns an array data grouped in to each city
 */
const groupPeople = (
  people: Person[] = []
): Array<{ count: number; city: string; people: Person[] }> => {
  const cityMap: { [propName: string]: Person[] } = people.reduce(
    (acc, person) => ({
      ...acc,
      [person.city]: [...(acc[person.city] || []), person]
    }),
    {}
  );
  return Object.keys(cityMap).map((city) => ({
    count: cityMap[city].length,
    city,
    people: cityMap[city]
  }));
};

export default groupPeople;
