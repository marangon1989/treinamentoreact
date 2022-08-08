import React, { useState, useCallback } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Alert, TouchableOpacity, FlatList } from 'react-native';
import { useTheme } from 'styled-components/native';
import firestore from '@react-native-firebase/firestore';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import happyEmoji from '@assets/happy.png';

import { useAuth } from '@hooks/auth';
import { Search } from '@components/Search';
import { SpeakerCard, SpeakerProps } from '@components/SpeakerCard';

import { 
  Container, 
  Header,
  Greeting,
  GreetingEmoji,
  GreetingText,
  Title,
  MenuHeader,
  MenuItemsNumber,
  NewSpeakerButton
} from './styles';

export function Home() {
  const [speaker, setSpeaker] = useState<SpeakerProps[]>([]);
  const [search, setSearch] = useState('');

  const { COLORS } = useTheme();
  const navigation = useNavigation();
  const { user, signOut } = useAuth();

  function fetchSpeaker(value: string) {
    const formattedValue = value.toLocaleLowerCase().trim();

    firestore()
      .collection('speakers')
      .orderBy('name_insensitive')
      .startAt(formattedValue)
      .endAt(`${formattedValue}\uf8ff`)
      .get()
      .then((response) => {
        const data = response.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        }) as SpeakerProps[];

        setSpeaker(data);

      })
      .catch(() => Alert.alert('Query', 'The query could not be performed.'));
  }

  function handleSearch() {
    fetchSpeaker(search);
  }

  function handleSearchClear() {
    setSearch('');
    fetchSpeaker('');
  }

  function handleOpen(id: string) {
    navigation.navigate('speaker', { id });
  }

  function handleAdd() {
    navigation.navigate('speaker', {});
  }

  useFocusEffect(useCallback(
    () => {
      fetchSpeaker('');
    },[]));

  return (
    <Container>

      <Header>
        <Greeting>
          <GreetingEmoji source={happyEmoji} />
          <GreetingText>Hello, {user?.name}!</GreetingText>
        </Greeting>

        <TouchableOpacity>
          <MaterialIcons
            onPress={signOut}
            name='logout' 
            color={COLORS.TITLE} 
            size={24} 
          />
        </TouchableOpacity>
      </Header>

      <Search
        value={search}
        onChangeText={setSearch}
        onSearch={handleSearch}
        onClear={handleSearchClear}
      />

      <MenuHeader>
        <Title>Speaker</Title>
        <MenuItemsNumber>{speaker.length} speaker</MenuItemsNumber>
      </MenuHeader>

      <FlatList 
        data={speaker}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SpeakerCard 
            data={item}
            onPress={() => handleOpen(item.id)}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 20,
          paddingBottom: 125,
          marginHorizontal: 24
        }}
      />
      
      {
        user?.isAdmin &&
        <NewSpeakerButton 
        title="Register Speaker"
        type="secondary"
        onPress={handleAdd}
      />
      }

    </Container>
  );
}