import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { Text, View, SafeAreaView } from 'react-native'

import { 
  Container, 
  Card, 
  CardHeader, 
  Title, 
  Description, 
  CardContent,
  CardFooter, 
  Annotation ,
  Content
} from './styles'
import Header from '~/components/Header'
import Tabs from '~/components/Tabs'
import Menu from '~/components/Menu'

export default Main = () => {

  return (
    <SafeAreaView style={{flex: 1}}>
      <Container>
        <Header />
        <Content>
          <Menu/>
          <Card>
            <CardHeader>
              <Icon name='attach-money' size={28} color='#666'/>
              <Icon name='visibility-off' size={28} color='#666'/>
            </CardHeader>
            <CardContent>
              <Title>Saldo disponivel</Title>
              <Description>R$ 7.611,65</Description>
            </CardContent>
            <CardFooter>
              <Annotation>
                Transferencia de R$ 20,00 recebida de Diego Schell Fernandes hoje as 06:00 horas 
              </Annotation>
            </CardFooter>
          </Card>
        </Content>
        <Tabs />
      </Container>
    </SafeAreaView>
  )

}
