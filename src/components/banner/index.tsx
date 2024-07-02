import { View, Text, Image } from "react-native";

export function Banner() {
  return (
    <Image
      source={require("@/assets/baner.png")}
      className="w-full h-40 -mb-16"
    />
  );
}
