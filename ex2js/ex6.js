const Person = [
  {
    "name": "Avi Cohen",
    "age": 30,
    "address": {
      "street": "Herzel",
      "number": 23,
      "city": "Tel Aviv",
      "phones": {
        "mobile": "054-1111",
        "fax": "03-2222",
        "home": "02-2222"
      }
    }
  },
  {
    "name": "Chaggai Thal",
    "age": 37,
    "address": {
      "street": "Chativa Tesha",
      "number": 28,
      "city": "Afule",
      "phones": {
        "mobile": "050-33333",
        "fax": "03-2222",
        "home": "03-33333"
      }
    },
  }
]

const main = (person, fax) => {
  for (var i = 0; i < person.length; i++) {
    if (person[i].address.phones.fax === fax) {
      return person[i].name, person[i].address.city;
    }
  }
}

const result = main(Person, '03-2222');
console.log(result);