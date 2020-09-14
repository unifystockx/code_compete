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
interface GroupOfPeopleByGender {
  count: number;
  gender: string;
  people: Array<People>;
}

const groupBy = (
  arrayOfObject: Array<any>,
  property: string
): Record<string, []> => {
  const grouped = {};
  arrayOfObject.map((obj) => {
    if (obj[property]) {
      if (grouped[obj[property]]) {
        grouped[obj[property]].push(obj);
      } else {
        grouped[obj[property]] = [obj];
      }
    }
  });
  return grouped;
};

const getPeopleByCity = (
  peopleArr: Array<People>
): Array<GroupOfPeopleByCity> => {
  const groupedByCity = groupBy(peopleArr, 'city');
  const result: Array<GroupOfPeopleByCity> = [];
  for (const city in groupedByCity) {
    result.push({
      count: groupedByCity[city].length,
      city: city,
      people: groupedByCity[city]
    });
  }
  return result;
};
const getPeopleByGender = (
  peopleArr: Array<People>
): Array<GroupOfPeopleByGender> => {
  const groupedByGender = groupBy(peopleArr, 'gender');
  const result: Array<GroupOfPeopleByGender> = [];
  for (const gender in groupedByGender) {
    result.push({
      count: groupedByGender[gender].length,
      gender: gender,
      people: groupedByGender[gender]
    });
  }
  return result;
};

export { getPeopleByCity, getPeopleByGender };
