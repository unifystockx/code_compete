interface People {
  _id: string;
  name: string;
  gender: string;
  email: string;
  phone: string;
  city: string;
}

interface GroupOfPeopleByCity {
  count: number;
  city: string;
  people: Array<People>;
}

/**
 * Function to group people by city
 *
 * @param {Array<People>} arrayOfObject - Array of objects having people information
 * @return {Array<GroupOfPeopleByCity>} - Array of objects returning people information grouped by their cities
 *
 */
const groupPeopleByCity = (
  arrayOfObject: Array<People>
): Array<GroupOfPeopleByCity> => {
  if (!arrayOfObject || arrayOfObject.length < 1) return [];
  const grouped = {};
  const property = 'city';
  arrayOfObject.forEach((obj) => {
    if (obj[property]) {
      if (grouped[obj[property]]) {
        grouped[obj[property]].push(obj);
      } else {
        grouped[obj[property]] = [obj];
      }
    }
  });

  const res: Array<GroupOfPeopleByCity> = Object.keys(grouped).map((key) => ({
    count: grouped[key].length,
    city: key,
    people: grouped[key]
  }));

  return res;
};

export { groupPeopleByCity };
