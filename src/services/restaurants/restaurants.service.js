import camelize from 'camelize';
import { host } from '../../utils/env';

export const restaurantsRequest = (location) => {
  return fetch(`${host}/placesNearby?location=${location}`)
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .catch((e) => {
      console.log(e);
    });
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      rating: restaurant.rating,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
    };
  });
  return camelize(mappedResults);
};
