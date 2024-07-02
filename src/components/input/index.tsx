import { colors } from "@/styles/colors";
import { View, TextInput, Text } from "react-native";

interface InputProps {
  label?: string;
}

export function Input({ label }: InputProps) {
  return (
    <View className="w-full flex-col px-6 mt-2 gap-2 items-start">
      <Text className="text-white text-md">{label}</Text>
      <TextInput
        placeholder="SmadCode Inc."
        placeholderTextColor={colors.gray[600]}
        className="w-full px-4 py-2 bg-zinc-900 rounded-lg border-none"
      />
    </View>
  );
}
