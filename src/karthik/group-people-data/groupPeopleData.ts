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

const groupPeopleByCity = (
  arrayOfObject: Array<any>
): Array<GroupOfPeopleByCity> => {
  if (arrayOfObject === []) return [];
  const grouped = {};
  const property = 'city';
  arrayOfObject.map((obj) => {
    if (obj[property]) {
      if (grouped[obj[property]]) {
        grouped[obj[property]].push(obj);
      } else {
        grouped[obj[property]] = [obj];
      }
    }
  });

  const res: Array<GroupOfPeopleByCity> = [];
  for (let str in grouped) {
    res.push({
      count: grouped[str].length,
      city: str,
      people: grouped[str]
    });
  }

  return res;
};

export { groupPeopleByCity };
