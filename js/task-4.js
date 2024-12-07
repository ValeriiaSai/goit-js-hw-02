function getShippingCost(country, price) {
  switch (country) {
    case 'China':
    case 'Chile':
    case 'Australia':
    case 'Jamaica':
      return `Shipping to ${country} will cost ${price} credits`;
      break;
    default:
      return `Sorry, there is no delivery to your country`;
  }
}

console.log(getShippingCost('China', 100));
console.log(getShippingCost('Chile', 250));
console.log(getShippingCost('Australia', 170));
console.log(getShippingCost('Jamaica', 120));
console.log(getShippingCost('Sweden'));
