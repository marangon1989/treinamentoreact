import React, { useState, useEffect } from 'react';
import { Platform, TouchableOpacity, ScrollView, Alert, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { useRoute, useNavigation } from '@react-navigation/native';
import { SpeakerNavigationProps } from '@types/navigation';


import { useAuth } from '@hooks/auth';

import { ButtonBack } from '@components/ButtonBack';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { Photo } from '@components/Photo';
import { SpeakerProps } from '@components/SpeakerCard';

import { 
  Container, 
  Header, 
  Title, 
  DeleteLabel, 
  Upload, 
  PickImageButton,
  Form,
  Label,
  InputGroup,
  InputGroupHeader,
  MaxCharacters,
  Name,
  JobTitle,
  Description,
  Website
} from './styles';

type SpeakerResponse = SpeakerProps & {
  photo_path: string;
}

export function Speaker() {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [country, setCountry] = useState('');
  const [businessModel, setBusinessModel] = useState('');
  const [website, setWebsite] = useState('');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [photoPath, setPhotoPath] = useState('');

  const navigation = useNavigation();

  const { user } = useAuth();

  const route = useRoute();
  const { id } = route.params as SpeakerNavigationProps;

  async function handlePickerImage() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if(status === 'granted') {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        // allowsEditing: true,
        aspect: [4, 4]
      });

      if(!result.cancelled) {
        setImage(result.uri);
      }
    }
  }

  async function handleAdd() {
    // if(!name.trim()) {
    //   return Alert.alert('Registration', 'Enter the name of the speaker.')
    // }
    // if(!jobTitle.trim()) {
    //   return Alert.alert('Registration', 'Enter a speaker position.')
    // }
    // if(!country.trim()) {
    //   return Alert.alert('Registration', 'Enter a speaker country.')
    // }
    // if(!businessModel.trim()) {
    //   return Alert.alert('Registration', 'Enter a speaker business model.')
    // }
    // if(!website.trim()) {
    //   return Alert.alert('Registration', 'Enter a speaker website.')
    // }
    // if(!description.trim()) {
    //   return Alert.alert('Registration', 'Informe a descrição do speaker.')
    // }
    // if(!image) {
    //   return Alert.alert('Registration', 'Select the speaker image.')
    // }

    setIsLoading(true);

    const fileName = new Date().getTime();
    const reference = storage().ref(`/speakers/${fileName}.png`);

    await reference.putFile(image);
    const photo_url = await reference.getDownloadURL();

    firestore()
      .collection('speakers')
      .add({
        name,
        name_insensitive: name.toLowerCase().trim(),
        job_title: jobTitle,
        country,
        business_model: businessModel,
        website,
        description,
        photo_url,
        photo_path: reference.fullPath
      })
      .then(() => navigation.navigate('home'))
      .catch(() => {
        setIsLoading(false);
        Alert.alert('Cadastro', 'Não foi possível cadastrar a pizza.')
    })


  }

  

  async function handleUpdate() {

    if(!image) {
      return Alert.alert('Registration', 'Select the speaker image.')
    }

    setIsLoading(true);

    const fileName = new Date().getTime();
    const fileExtension = image.match(/\.(?:.(?!\.))+$/);
    const imageReference = storage().ref(
      `/speakers/${fileName}.${fileExtension}`,
    );

    await imageReference.putFile(image);
    const photo_url = await imageReference.getDownloadURL();
    
    await firestore()
      .collection('speakers')
      .doc(id)
      .update({
        name,
        name_insensitive: name.toLowerCase().trim(),
        job_title: jobTitle,
        country,
        business_model: businessModel,
        website,
        description,
        photo_url,
        photo_path: imageReference.fullPath
      })
      .then(() => {
        navigation.navigate('home')
      })
      .catch(() => {
        Alert.alert('Cadastro', 'Não foi possível cadastrar a speaker.')
        setIsLoading(false);
    })

  }

  function handleGoBack() {
    navigation.goBack();
  }

  function handleDelete() {
    firestore()
      .collection('speakers')
      .doc(id)
      .delete()
      .then(() => {
        storage()
        .ref(photoPath)
        .delete()
        .then(() => navigation.navigate('home'));
      })
  }

  useEffect(() => {
    if(id) {
      firestore()
        .collection('speakers')
        .doc(id)
        .get()
        .then(response => {
          const speaker = response.data() as SpeakerResponse;

          setName(speaker.name);
          setImage(speaker.photo_url);
          setJobTitle(speaker.job_title);
          setCountry(speaker.country);
          setBusinessModel(speaker.business_model);
          setWebsite(speaker.website);
          setDescription(speaker.description);
          setPhotoPath(speaker.photo_path);
        })
    }
  }, [id]);

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      {user?.isAdmin ? (
        <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Header>

          <ButtonBack
            onPress={handleGoBack} 
          />
          
          <Title>Register</Title>

          {
          user?.isAdmin && id ?
            <TouchableOpacity onPress={handleDelete}>
            <DeleteLabel>Delete</DeleteLabel>
          </TouchableOpacity>
          : <View style={{ width: 20 }} />
          }

        </Header>

        <Upload>
          <Photo 
            uri={image}
          />

            <PickImageButton 
            title="Upload" 
            type='secondary'
            onPress={handlePickerImage}
          />
          
        </Upload>

        <Form>

          <InputGroup>
            <Label>Name</Label>
            <Input
              value={name}
              onChangeText={setName}
            />
          </InputGroup>

          <InputGroup>
            <Label>Job Title</Label>
            <Input
              value={jobTitle}
              onChangeText={setJobTitle}
            />
          </InputGroup>

          <InputGroup>
            <Label>Country</Label>
            <Input
              value={country}
              onChangeText={setCountry}
            />
          </InputGroup>
          <InputGroup>
            <Label>Business Model</Label>
            <Input
              value={businessModel}
              onChangeText={setBusinessModel}
            />
          </InputGroup>
          <InputGroup>
            <Label>Website</Label>
            <Input
              value={website}
              onChangeText={setWebsite}
            />
          </InputGroup>

          <InputGroup>
            <InputGroupHeader>
              <Label>Description</Label>
              <MaxCharacters>{description.length} of 60 characters</MaxCharacters>
            </InputGroupHeader>
            <Input
              multiline
              maxLength={60}
              style={{ height: 80 }}
              value={description}
              onChangeText={setDescription}
            />
          </InputGroup>

          <Button
            title={!id ? 'Register Speaker' : 'Update Speaker'}
            isLoading={isLoading}
            onPress={!id ? handleAdd : handleUpdate}
          />
          

        </Form>
      </ScrollView>
      ) : (
        <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Header>
          <ButtonBack
            onPress={handleGoBack} 
            style={{ marginBottom: 108 }}
          />
        </Header>

        <Upload
          style={{
            top: -120,
            flexDirection: 'column'
          }}
        >
        <Photo uri={image} />  
        <InputGroup>
          <Name>{name}</Name>
          <JobTitle>{jobTitle}</JobTitle>
          <JobTitle>{country}</JobTitle>
          <JobTitle>{businessModel}</JobTitle>
          <Website>{website}</Website>
          <Description>{description}</Description>
        </InputGroup>
        </Upload>
      </ScrollView>
      )}
    </Container>
  );
}