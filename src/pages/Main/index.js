import React from 'react';

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Title,
  Descriptions,
  Annotation,
} from './styles';

export default function Main() {
  return (
    <Container>
      <Header />

      <Content>
        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#333" />
            <Icon name="visibility-off" size={28} color="#333" />
          </CardHeader>
          <CardContent>
            <Title>Saldo Disponível</Title>
            <Descriptions>R$ 203.800,00</Descriptions>
          </CardContent>
          <CardFooter>
            <Annotation>
              Tranferência de R$ 2.000,00 recebida hoje as 6:00h
            </Annotation>
          </CardFooter>
        </Card>
      </Content>

      <Tabs />
    </Container>
  );
}
