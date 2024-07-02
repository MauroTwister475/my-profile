import { useState } from "react";
import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import CheckBox from "react-native-check-box";

interface PreferenceItemProps {
  icon: keyof typeof MaterialIcons.glyphMap;
  preference: string;
}

export function PreferenceItem({ icon, preference }: PreferenceItemProps) {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <View
      style={{
        borderColor: "#fff",
        borderBottomWidth: 0.5,
      }}
      className="flex-row py-4 items-center justify-center"
    >
      <View className="flex-1 flex-row gap-2">
        <MaterialIcons name={icon} size={20} color={"#ffff"} />
        <Text className="text-white">{preference}</Text>
      </View>
      <CheckBox
        isChecked={isChecked}
        checkBoxColor={colors.green[600]}
        onClick={() => setIsChecked(!isChecked)}
      />
    </View>
  );
}
