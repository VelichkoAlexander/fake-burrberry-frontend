const mainUrl = 'https://erodionov-burberry-fake-api.now.sh/';
export const MobileMenuNavigation = [
  {
    title: 'Men',
    image:
      'https://assets.burberry.com/is/image/Burberryltd/d68dce82ea0a299febf5a35de882c78f0d70ad7d.jpg?$BBY_V2_BASIC$',
    links: [
      { title: 'New Arrivals', url: '/men/new-arrivals' },
      { title: 'Clothing', url: 'mens-clothing' },
      { title: 'Scarves', url: '/men/scarves' },
      { title: 'Accessories', url: '/men/accessories' },
      { title: 'Shoes', url: '/men/shoes' },
      { title: 'Fragnance', url: '/men/fragnance' },
      { title: 'Gifts', url: '/men/gifts' },
      { title: 'Runway', url: '/men/runway' },
    ],
  },
  {
    title: 'Women',
    image:
      'https://assets.burberry.com/is/image/Burberryltd/4234f8a6cd1084d7710a3e40d0b0752d9674e798.jpg?$BBY_V2_BASIC$',
    links: [
      { title: 'New Arrivals', url: '/women/new-arrivals' },
      { title: 'Clothing', url: '/women/clothing' },
      { title: 'Scarves', url: '/women/scarves' },
      { title: 'Bags', url: '/women/bags' },
      { title: 'Accessories', url: '/women/accessories' },
      { title: 'Shoes', url: '/women/shoes' },
      { title: 'Make-up', url: '/women/make-up' },
      { title: 'Fragnance', url: '/women/fragnance' },
      { title: 'Gifts', url: '/women/gifts' },
      { title: 'Runway', url: '/women/runway' },
    ],
  },
  {
    title: 'Children',
    image:
      'https://assets.burberry.com/is/image/Burberryltd/cf6e1b1b9d32f13a7b684b141dbdf26bd842020b.jpg?$BBY_V2_BASIC$',
    links: [
      { title: 'New In', url: '/children/new-in' },
      { title: 'Baby', url: '/children/baby' },
      { title: 'Girl 4-11 Yrs', url: '/children/girl-4-11-yrs' },
      { title: 'Boy 4-11 Yrs', url: '/children/boy-4-11-yrs' },
      { title: 'Accessories', url: '/children/Accessories' },
      { title: 'Gifts', url: '/children/gifts' },
    ],
  },
  {
    title: 'Beauty',
    image:
      'https://assets.burberry.com/is/image/Burberryltd/dcdefeb4e3c9da75bda644c8b8873cc22da50449.jpg?$BBY_V2_BASIC$',
    links: [
      { title: 'Make-up', url: '/beauty/make-up' },
      { title: 'Women′s Fragrance', url: '/women/fragnance' },
      { title: 'Men′s Fragrance', url: '/men/fragnance' },
      { title: 'Beauty Gifts', url: '/beauty/beauty-gifts' },
    ],
  },
];

export const supportedLanguages = [
  { name: 'Russian Federation (₽)', value: 'ru', currency: 'RUB' },
  { name: 'United Kingdom (£)', value: 'en', currency: 'GBP' },
];

export const languages = ['Russian', 'English'];

function readResponseToJson(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response.json();
}

export const get = url => fetch(mainUrl + url).then(readResponseToJson);
