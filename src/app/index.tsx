import { View } from "react-native";
import { Banner } from "@/components/banner";
import { Avatar } from "@/components/avatar";
import { Skills } from "@/components/skills";
import { Preferences } from "@/components/preferences";
import { Input } from "@/components/input";
import { ButtonSave } from "@/components/button-save";

export default function Home() {
  return (
    <View className="flex-1 items-center bg-gray-950">
      <Banner />
      <Avatar />
      <Skills />
      <Preferences />
      {/* <Input label="Company" /> */}
      <ButtonSave />
    </View>
  );
}
