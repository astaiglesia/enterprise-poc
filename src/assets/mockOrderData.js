const mockOrderProfiles = {
  'Google Tribeca': {
    orderState: 'Draft',
    projectNickname: 'Google Tribeca',
    location: 'New York City',
    client: 'Alfie S',
    company: 'Vaulted Oak',
    deliveryDate: new Date(2022, 5, 15),
    rentalTerm: '12 months',
    tag: 'Breakout Spaces',
    
    // --- properties for additional functionality
    // clientProfile: {clientObject: 'to be created'},
    // billingInformation: {billingObject: 'to be created'},
    // productList: [],
  },
  'Blackrock Hudson Yards': {
    orderState: 'Reserved',
    projectNickname: 'Blackrock Hudson Yards',
    location: 'New York City',
    client: 'Alfie S',
    company: 'Vaulted Oak',
    deliveryDate: new Date(2022, 1, 15),
    rentalTerm: '12 months',
    tag: 'Guest Lounges',

       // --- properties for additional functionality
    // clientProfile: {clientObject: 'to be created'},
    // billingInformation: {billingObject: 'to be created'},
    // productList: [],
  },
  'WeWork Vesey St': {
    orderState: 'Draft',
    projectNickname: 'Wework Vesey St',
    location: 'New York City',
    client: 'Fake Client',
    company: 'WeWork',
    deliveryDate: new Date(2022, 7, 15),
    rentalTerm: '12 months',
    tag: 'Common Areas',

    // --- properties for additional functionality
    // clientProfile: {clientObject: 'to be created'},
    // billingInformation: {billingObject: 'to be created'},
    // productList: [],
  },
};

export default mockOrderProfiles;