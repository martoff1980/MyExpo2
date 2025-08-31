import { View } from 'react-native';
import {HapticTab} from './components/HapticTab';
import { HelloWave } from './components/HelloWave';
import { Collapsible } from './components/Collapsible';

export default function App() {
  return (
    <View>
 n    <HapticTab children={undefined} />
      <HelloWave />
      <Collapsible title={'Hello'}/>
    </View>
  );
}
