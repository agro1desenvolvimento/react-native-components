import React from 'react';
import {SafeAreaView} from 'react-native';
import {AirbnbRating, Text} from '@agro1desenvolvimento/react-native-components';

const App = () => {
  return (
    <SafeAreaView>
      <Text style={{ color: 'white', textAlign: 'center' }}  h3 >A biblioteca é:</Text>
      <AirbnbRating
        count={5}
        defaultRating={5}
        reviews={['Terrível', 'Rum', 'Aceitável', 'Boa', 'Ótima']}
        showRating
      />
    </SafeAreaView>
  );
};

export default App;
