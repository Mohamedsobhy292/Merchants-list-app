const merchants = [
  {
    hasPremium: true,
    firstName: "Harold",
    lastName: "Breckenridge",
    email: "Breckenridge@gmail.com",
    phone: "0123456789",
    avatarUrl: "https://s3.amazonaws.com/uifaces/faces/twitter/sauro/128.jpg",
    bids: [
      {
        id: 1,
        carTitle: "car 1",
        amount: 55,
        created: Date.now()
      },
      {
        id: 2,
        carTitle: "car 2",
        amount: 150,
        created: Date.now()
      },
      {
        id: 3,
        carTitle: "car 3",
        amount: 250,
        created: Date.now()
      },
      {
        id: 4,
        carTitle: "car 4",
        amount: 100,
        created: Date.now()
      }
    ]
  },
  {
    hasPremium: true,
    firstName: "Michelle",
    lastName: "Curry",
    email: "janelle_moo@hotmail.com",
    phone: "0123456789",
    avatarUrl: "https://s3.amazonaws.com/uifaces/faces/twitter/peterme/128.jpg",
    bids: [
      {
        id: 3,
        carTitle: "NEW CAR",
        amount: 550,
        created: Date.now()
      },
      {
        id: 4,
        carTitle: "NEW CAR 2",
        amount: 150,
        created: Date.now()
      }
    ]
  },
  {
    hasPremium: false,
    firstName: "Michelle",
    lastName: "Curry",
    email: "janelle_moo@hotmail.com",
    phone: "0123456789",
    avatarUrl:
      "https://s3.amazonaws.com/uifaces/faces/twitter/tonypeterson/128.jpg",
    bids: [
      {
        id: 1,
        carTitle: "LOGAN",
        amount: 550,
        created: Date.now()
      },
      {
        id: 2,
        carTitle: "Megan",
        amount: 150,
        created: Date.now()
      }
    ]
  }
];

module.exports = merchants;
