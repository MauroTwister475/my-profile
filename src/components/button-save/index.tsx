import { View, Pressable, Text } from "react-native";

export function ButtonSave() {
  return (
    <View className="w-full px-6 mt-4">
      <Pressable 
        onPress={() => alert("Dados salvos com sucesso!")}
        className="w-full items-center rounded-lg px-3 py-2 bg-green-400"
      >
        <Text className="text-white text-lg">
          Save
        </Text>
      </Pressable>
    </View>
  );
}

