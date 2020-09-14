interface Person {
  _id: string;
  name: string;
  gender: string;
  email: string;
  phone: string;
  city: string;
}

interface PersonGroup {
  count: number;
  city: string;
  people: Array<Person>;
}

/**
 * Function to return city based people groups for the given people/persons
 * @param {Array<Person>} peopleArr array of Person type
 * @return {Array<PersonGroup>} array of PersonGroup type
 */

const getCityBasedPeopleGroup = (
  peopleArr: Array<Person>
): Array<PersonGroup> => {
  const cityBasedPeopleGroups: Array<PersonGroup> = [];
  peopleArr.forEach((person) => {
    const foundIndex: number = cityBasedPeopleGroups.findIndex(
      (group) => group.city === person.city
    );
    if (foundIndex !== -1) {
      cityBasedPeopleGroups[foundIndex].count =
        cityBasedPeopleGroups[foundIndex].count + 1;
      cityBasedPeopleGroups[foundIndex].people = [
        ...cityBasedPeopleGroups[foundIndex].people,
        person
      ];
    } else {
      const cityBasedPeopleGroup: PersonGroup = {
        count: 1,
        city: person.city,
        people: [person]
      };
      cityBasedPeopleGroups.push(cityBasedPeopleGroup);
    }
  });
  return cityBasedPeopleGroups;
};

export { getCityBasedPeopleGroup };
