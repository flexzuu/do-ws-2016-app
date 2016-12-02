import React from 'react';
import styled from 'styled-components/native';
import {
  View,
} from 'react-native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #F5FCFF;
`;

const Text = styled.Text`
  font-size: 20;
  text-align: center;
  margin: 10;
`;

const Button = styled.TouchableHighlight`
  background-color: ${props => props.warning ? 'orange' : 'limegreen'};
  padding: 5;
  border: 1 solid black;
  border-radius: 5;
  min-width: 100;
`;
// const prepare = (navigate, scenes) => () => navigate({key: '[' + scenes.length + ']-' + Date.now()})
const prepare = (navigate, id) => () => navigate({key: 'Recipes', id})

export default ({ triggerDemo, navigatePush, demo, children }) => (
  <Container>
    <Text>
      Cookbooks
    </Text>
    <Button onPress={prepare(navigatePush, "Beef")}>
      <View><Text>Show Beef Recipes</Text></View>
    </Button>
    <Button onPress={prepare(navigatePush, "Chicken")}>
      <View><Text>Show Chicken Recipes</Text></View>
    </Button>
  </Container>
);
