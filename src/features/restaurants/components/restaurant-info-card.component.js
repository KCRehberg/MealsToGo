import React from 'react';
import { SvgXml } from 'react-native-svg';
import { Favourite } from '../../../components/favourites/favourite.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';
import star from '../../../../assets/star';
import open from '../../../../assets/open';
import {
  RestaurantCard,
  RestaurantCardCover,
  Address,
  Info,
  Rating,
  Section,
  SectionEnd,
  Icon,
} from './restaurant-info-card.styles';

export const RestaurantInfoCard = ({ restaurant }) => {
  const ratingArray = Array.from(new Array(Math.floor(restaurant.rating)));

  return (
    <RestaurantCard elevation={5}>
      <Favourite restaurant={restaurant} />
      <RestaurantCardCover
        key={restaurant.name}
        source={{ uri: restaurant.photos[0] }}
      />
      <Info>
        <Text variant="label">{restaurant.name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((val, idx) => (
              <SvgXml
                key={`star-${restaurant.placeId}-${idx}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </Rating>
          <SectionEnd>
            {restaurant.isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {restaurant.isOpenNow && (
                <SvgXml xml={open} width={20} height={20} />
              )}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: restaurant.icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{restaurant.address}</Address>
      </Info>
    </RestaurantCard>
  );
};
