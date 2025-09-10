import { Tabs, Link } from "expo-router";
import { Image } from "expo-image";
import { SimpleLineIcons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";

const Logo = () => {
  return (
    <Image contentFit="contain" source={require("../../assets/favicon.png")} />
  );
};

const HeaderButton = (props) => {
  const { name, ...rest } = props;
  return (
    <Link asChild {...rest}>
      <TouchableOpacity>
        <SimpleLineIcons size={20} color="#1f99bo" name={name} />
      </TouchableOpacity>
    </Link>
  );
};

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerTitleAlign: "center",
        headerTitle: () => <Logo />,
        headerLeft: () => <HeaderButton name="bell" href="/articles" />,
        headerRight: () => (
          <>
            <HeaderButton name="magnifier" href="/search" />
            <HeaderButton name="options" href="/video" />
          </>
        ),
      }}
    >
      <Tabs.Screen name="index" options={{ title: "配置" }}></Tabs.Screen>
      <Tabs.Screen name="video" options={{ title: "视频" }}></Tabs.Screen>
    </Tabs>
  );
};
export default TabLayout;
