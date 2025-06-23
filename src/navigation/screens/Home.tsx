import React from 'react'
import { Text, View } from 'react-native'
import Container from '../../components/ui/Container'
import { useSQLiteContext } from 'expo-sqlite';
import { drizzle } from 'drizzle-orm/expo-sqlite';
import * as schema from '../../../db/schema';

const Home = () => {
      const db = useSQLiteContext();
  const drizzleDb = drizzle(db, { schema});
  
  return (
    <Container>
        <Text style={{color:"#fff"}}>Home</Text>
        
    </Container>
  )
}

export default Home