import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Separator from '../../utils/Separator';

const SearchFilter = (props) => {
  const [open, setOpen] = useState(false);

  const onChangeText = (text) => {
    props.onChange(text);
  };

  return (
    <>
      <View style={[styles.mainContainer, props.style]}>
        <TouchableOpacity onPress={() => setOpen(!open)}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{text.name}</Text>
            <Text style={styles.filterArrow}>{open ? 'Λ' : 'ᐯ'}</Text>
          </View>
        </TouchableOpacity>
        {open ? (
          <View style={styles.container}>
            <View style={styles.iconContainer}>
              <Image source={require('./search.png')} style={styles.icon} />
            </View>

            <TextInput
              style={styles.input}
              placeholder={text.placeholder}
              underlineColorAndroid="transparent"
              onChangeText={onChangeText}
              defaultValue={props.initial}
            />
          </View>
        ) : null}
      </View>
    </>
  );
};

const text = {
  placeholder: 'Filtrar...',
  name: 'Nombre',
};

const styles = StyleSheet.create({
  mainContainer: {},
  container: {
    marginTop: 5,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#1c7dd6',
    height: 40,
    borderRadius: 5,
    margin: 2,
    width: 190,
  },
  iconContainer: {
    backgroundColor: 'lightgrey',
    borderRadius: 5,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    padding: 5,
    margin: 5,
    height: 15,
    width: 15,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: 15,
  },
  title: {
    marginBottom: 5,
    fontSize: 20,
  },
  filterArrow: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    color: 'gray',
    marginLeft: 90,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default SearchFilter;
