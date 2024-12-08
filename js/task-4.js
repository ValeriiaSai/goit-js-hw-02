function getShippingCost(country) {
  let price;
  switch (country) {
    case 'China':
      price = 100;
    case 'Chile':
      price = 250;
    case 'Australia':
      price = 170;
    case 'Jamaica':
      price = 120
      return `Shipping to ${country} will cost ${price} credits`;
      break;
    default:
      return `Sorry, there is no delivery to your country`;
  }
}

console.log(getShippingCost('China'));
console.log(getShippingCost('Chile'));
console.log(getShippingCost('Australia'));
console.log(getShippingCost('Jamaica'));
console.log(getShippingCost('Sweden'));
