import React, { Component } from "react";
import styled from "styled-components";
import MerchantItem from "./list-item";
import Header from "./header";

const merchants = [
  {
    hasPremium: true,
    firstName: "Harold",
    lastName: "Breckenridge",
    email: "Breckenridge@gmail.com",
    avatarUrl:
      "https://pbs.twimg.com/profile_images/907811115459125248/i8AzK6gR_400x400.jpg",
    phone: "0123456789",
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

export const MerchantsWrapper = styled.div`
  margin-top: 30px;
`;

export default class Merchants extends Component {
  render() {
    return (
      <MerchantsWrapper>
        <Header />
        {merchants.map(item => {
          return <MerchantItem item={item} />;
        })}
      </MerchantsWrapper>
    );
  }
}
