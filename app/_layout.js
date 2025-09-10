import { Stack } from "expo-router";
const Layout = () => {
  // 用来管理页面堆栈，添加页面切换效果，并增加标题
  return (
    <Stack
      // 兼容安卓动画
      screenOptions={{
        headerTitleAlign: "center",
        animation: "slide_from_right",
      }}
    />
  );
};
export default Layout;
