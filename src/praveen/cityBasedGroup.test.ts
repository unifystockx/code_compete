import { getCityBasedPeopleGroup } from './cityBasedGroup';

const testData = [
  {
    _id: '5f322e9e0b033f228afd008a',
    name: 'Brown Lara',
    gender: 'male',
    email: 'brownlara@zolar.com',
    phone: '+91 9411359806',
    city: 'Hyderabad'
  },
  {
    _id: '5f322e9e90a973778cc279b2',
    name: 'Molina Barker',
    gender: 'male',
    email: 'molinabarker@zolar.com',
    phone: '+91 8473520620',
    city: 'Bengaluru'
  },
  {
    _id: '5f322e9ef93188370ee080e7',
    name: 'Loretta Mcintyre',
    gender: 'female',
    email: 'lorettamcintyre@zolar.com',
    phone: '+91 1993560484',
    city: 'Hyderabad'
  },
  {
    _id: '5f322e9e2c7c9b2c77a3ff73',
    name: 'Sherman Avila',
    gender: 'male',
    email: 'shermanavila@zolar.com',
    phone: '+91 1825229684',
    city: 'Pune'
  },
  {
    _id: '5f322e9e9a6b98a902c2b04d',
    name: 'Claire Molina',
    gender: 'female',
    email: 'clairemolina@zolar.com',
    phone: '+91 3679340671',
    city: 'Bengaluru'
  }
];

const expectedTestResult = [
  {
    count: 2,
    city: 'Hyderabad',
    people: [
      {
        _id: '5f322e9e0b033f228afd008a',
        name: 'Brown Lara',
        gender: 'male',
        email: 'brownlara@zolar.com',
        phone: '+91 9411359806',
        city: 'Hyderabad'
      },
      {
        _id: '5f322e9ef93188370ee080e7',
        name: 'Loretta Mcintyre',
        gender: 'female',
        email: 'lorettamcintyre@zolar.com',
        phone: '+91 1993560484',
        city: 'Hyderabad'
      }
    ]
  },
  {
    count: 2,
    city: 'Bengaluru',
    people: [
      {
        _id: '5f322e9e90a973778cc279b2',
        name: 'Molina Barker',
        gender: 'male',
        email: 'molinabarker@zolar.com',
        phone: '+91 8473520620',
        city: 'Bengaluru'
      },
      {
        _id: '5f322e9e9a6b98a902c2b04d',
        name: 'Claire Molina',
        gender: 'female',
        email: 'clairemolina@zolar.com',
        phone: '+91 3679340671',
        city: 'Bengaluru'
      }
    ]
  },
  {
    count: 1,
    city: 'Pune',
    people: [
      {
        _id: '5f322e9e2c7c9b2c77a3ff73',
        name: 'Sherman Avila',
        gender: 'male',
        email: 'shermanavila@zolar.com',
        phone: '+91 1825229684',
        city: 'Pune'
      }
    ]
  }
];

const partialTestData = [
  {
    _id: '5f322e9e0b033f228afd008a',
    name: 'Brown Lara',
    gender: 'male',
    email: 'brownlara@zolar.com',
    phone: '+91 9411359806',
    city: 'Hyderabad'
  },
  {
    _id: '5f322e9e90a973778cc279b2',
    name: 'Molina Barker',
    gender: 'male',
    email: 'molinabarker@zolar.com',
    phone: '+91 8473520620',
    city: 'Bengaluru'
  }
];

const partialTestDataResult = [
  {
    count: 1,
    city: 'Hyderabad',
    people: [
      {
        _id: '5f322e9e0b033f228afd008a',
        name: 'Brown Lara',
        gender: 'male',
        email: 'brownlara@zolar.com',
        phone: '+91 9411359806',
        city: 'Hyderabad'
      }
    ]
  },
  {
    count: 1,
    city: 'Bengaluru',
    people: [
      {
        _id: '5f322e9e90a973778cc279b2',
        name: 'Molina Barker',
        gender: 'male',
        email: 'molinabarker@zolar.com',
        phone: '+91 8473520620',
        city: 'Bengaluru'
      }
    ]
  }
];

describe('testing getCityBasedPeopleGroup function', () => {
  it('testing if testData returns the expectedTestResult', () => {
    const result = getCityBasedPeopleGroup(testData);
    expect(result).toEqual(expectedTestResult);
  });

  it('testing if testData does not return the partialTestDataResult', () => {
    const result = getCityBasedPeopleGroup(testData);
    expect(result).not.toEqual(partialTestDataResult);
  });

  it('testing if partialTestData returns the partialTestDataResult', () => {
    const result = getCityBasedPeopleGroup(partialTestData);
    expect(result).toEqual(partialTestDataResult);
  });

  it('testing if partialTestData does not return the expectedTestResult', () => {
    const result = getCityBasedPeopleGroup(partialTestData);
    expect(result).not.toEqual(expectedTestResult);
  });

  it('testing if [] data returns the []', () => {
    const result = getCityBasedPeopleGroup([]);
    expect(result).toEqual([]);
  });
});
