import { reloadAppAsync } from 'expo';
import { Pressable, Text, View } from "react-native";
import { Canvas, Points, vec } from "@shopify/react-native-skia";


const points = [
  vec(128, 0),
  vec(168, 80),
  vec(256, 93),
  vec(192, 155),
  vec(207, 244),
  vec(128, 202),
  vec(49, 244),
  vec(64, 155),
  vec(0, 93),
  vec(88, 80),
  vec(128, 0),
];

export default function () {
  function reload() {
    reloadAppAsync();
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#D0D0D0' }}>
      <Canvas style={{ height: 500 }}>
        <Points
          points={points}
          mode="polygon"
          color="lightblue"
          style="stroke"
          strokeWidth={4}
        />
      </Canvas>
      <Pressable onPress={reload}>
        <Text style={{ fontSize: 24 }}>
          Reload app
        </Text>
      </Pressable>
    </View>
  );
}
