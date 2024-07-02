import { SKILLS } from "@/data/skills";
import { View, Text, Image } from "react-native";
import { Title } from "@/components/title";
import { Badge } from "@/components/badge";
import { PreferenceItem } from "./preference-item";

export function Preferences() {
  return (
    <View className="w-full px-6 items-center justify-center mt-4">
      <Title title="Preferences" />
      <View className="w-full flex-col gap-4 py- flex-wrap">
        <PreferenceItem icon="dark-mode" preference="Dark mode" />
        <PreferenceItem icon="email" preference="Public e-mail" />
      </View>
    </View>
  );
}
