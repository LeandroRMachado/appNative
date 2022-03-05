import React, { useState } from 'react';
import { FlatList, View } from "react-native";
import { Appointment } from '../../components/Appointment';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { Profile } from '../../components/Profile';
import { ListHeader } from '../../ListHeader';
import { ListDivider } from '../../components/ListDivider';

import { styles } from './styles';
import { Background } from '../../components/Background';

export function Home() {
  const [category, setCategory] = useState('')

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '04/03 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Ranqueada',
        icon: null,
        owner: false
      },
      category: '1',
      date: '04/03 às 23:40h',
      description: 'Daqui a pouco tem duelo na Jungle'
    }
  ]

  function handleCategorySelect(categoryId: string) {
    // categoryId === category ? setCategory('') : setCategory(categoryId)
    if(categoryId ===category ) {
      setCategory('')
    }else {
      setCategory(categoryId)
    }
  }

  return(
    <Background >
      <View style={styles.header} >
        <Profile />
        <ButtonAdd />
      </View>

      <View>
        <CategorySelect
         categorySelect={category}
         setCategory={handleCategorySelect}
        />
        
        <View style={styles.content} >
          <ListHeader
           title='Partidas agendadas'
           subtitle='Total 6'
          />

          <FlatList 
             data={appointments}
             keyExtractor={item => item.id}
             renderItem={({ item  }) => (
             <Appointment  data={item} />
            )}
            ItemSeparatorComponent={() => <ListDivider />}
            style={styles.matches}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </Background>
  )
}