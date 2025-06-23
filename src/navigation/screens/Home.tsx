import React from 'react'
import { Text, View } from 'react-native'
import Container from '../../components/ui/Container'
import { useSQLiteContext } from 'expo-sqlite';
import { drizzle } from 'drizzle-orm/expo-sqlite';
import * as schema from '../../../db/schema';
import { Button } from '../../components/ui/Button';

const Home = () => {
      const db = useSQLiteContext();
  const drizzleDb = drizzle(db, { schema});
  
  return (
    <Container>
        <Text style={{color:"#fff"}}>Home</Text>
        <Button>Hello World</Button>
    </Container>
  )
}

export default Home