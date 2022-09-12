import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';


interface Buttonprops {
  title: string;
}

function Button(props: Buttonprops){
  return (
    <TouchableOpacity>
      <Text>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Hello React Native!
      </Text>
      <Button title="Enviar" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#000',
    fontSize: 22
  }
});
