import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Snackbar from 'react-native-snackbar';

const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINER: 0.0043,
  BITCOIN: 0.000004,
};

const App = () => {
  const [inputValue, setInputValue] = useState(0);
  const [resultValue, setResultValue] = useState(0);

  const buttonPressed = currency => {
    if (!inputValue) {
      return Snackbar.show({
        text: 'Please enter a value',
        backgroundColor: '#EA7773',
        textColor: '#FFFFFF',
      });
    }

    let result = parseFloat(inputValue) * currencyPerRupee[currency]
    setResultValue(result.toFixed(2)); 
  };

  return (
    <>
      <StatusBar backgroundColor={'#1b262c'} />
      <ScrollView
        backgroundColor="#1b262c"
        keyboardDismissMode="handled"
        contentInsetAdjustmentBehavior="automatic">
        <SafeAreaView style={styles.container}>
          <View style={styles.resultContainer}>
            <Text style={styles.resultValue}>{resultValue}</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="Enter Value"
              placeholderTextColor="#c1c1c1"
              // value={inputValue}
              onChangeText={inputValue => setInputValue(inputValue)}>
              </TextInput>
          </View>
          <View style={styles.convertButtonContainer}>
            {Object.keys(currencyPerRupee).map((currency) => (
              <TouchableOpacity
                onPress = {() => buttonPressed(currency)}
                key={currency} style={styles.converterButton}>
                <Text style={styles.convertButtonText}>{currency}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#1b262c',
  },
  resultContainer: {
    height: 70,
    marginHorizontal: 20,
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#bbe1fa',
    borderBottomWidth: 2,
  },
  resultValue: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
  inputContainer: {
    height: 70,
    marginHorizontal: 20,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#bbe1fa',
  },
  input: {
    fontSize: 30,
    textAlign: 'center',
    color: '#fff',
  },
  convertButtonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 40,
  },
  converterButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: '30%',
    marginTop: 10,
    marginLeft: 10,
    backgroundColor: '#0f4c75',
    borderWidth: 2,
    borderColor: '#bbe1fa',
    borderRadius: 7,
  },
  convertButtonText: {
    color: '#fff',
  },
});
