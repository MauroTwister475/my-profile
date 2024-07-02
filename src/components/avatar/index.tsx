import { View, Text, Image } from "react-native";

export function Avatar() {
  return (
    <View className="items-center justify-center gap-4 mb-2">
      <Image
        source={{ uri: "https://github.com/MauroTwister475.png" }}
        className="w-32 h-32 rounded-full"
      />
      <View className="flex-col items-center justify-center">
        <Text className="text-2xl text-white font-semibold">
          Mauro Dinis Raimundo
        </Text>
        <Text className="text-base font-medium text-gray-400">
          @maurotwister475
        </Text>
      </View>
    </View>
  );
}
