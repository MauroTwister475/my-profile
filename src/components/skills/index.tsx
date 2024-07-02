import { SKILLS } from "@/data/skills";
import { View, Text, Image } from "react-native";
import { Title } from "@/components/title";
import { Badge } from "@/components/badge";

export function Skills() {
  return (
    <View className="w-full px-6 items-center justify-center">
      <Title title="Skills" />
      <View className="w-full flex-row gap-2 py-3 flex-wrap">
        {SKILLS.map((skill) => (
          <Badge key={skill.id} skill={skill.skill} icon={skill.icon} />
        ))}
      </View>
    </View>
  );
}
