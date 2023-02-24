import {View, Text, StyleSheet, Switch, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [limit, setLimit] = useState(250);
  const [student, setStudent] = useState(false);

  function setInputName(text) {
    setName(text);
  }

  function setInputAge(text) {
    setAge(text);
  }

  function mostrarCadastro() {
    console.log(name, age, gender, limit.toFixed(0), student);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Banco Sujeito</Text>
      <TextInput
        placeholder="Digite seu nome"
        style={styles.input}
        value={name}
        onChangeText={text => setInputName(text)}
      />
      <TextInput
        placeholder="Digite sua idade"
        style={styles.input}
        value={age}
        onChangeText={text => setInputAge(text)}
      />

      <Picker
        style={styles.input}
        selectedValue={gender}
        onValueChange={(itemValue, itemIndex) => setGender(itemValue)}>
        <Picker.Item label="Masculino" value={0} key={0} />
        <Picker.Item label="Feminino" value={1} key={1} />
        <Picker.Item label="Outro" value={2} key={2} />
      </Picker>

      <Switch value={student} onValueChange={value => setStudent(value)} />
      <Text>{student ? 'Sim, sou estudante' : 'Não sou estudante'}</Text>

      <Slider
        style={styles.slider}
        minimumValue={250}
        maximumValue={5000}
        onValueChange={value => setLimit(value)}
      />
      <Text>R$ {limit.toFixed(0)}</Text>

      <Button title="Mostrar" onPress={mostrarCadastro} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    width: '70%',
    margin: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0A9fff',
  },
  slider: {
    width: '60%',
  },
});
