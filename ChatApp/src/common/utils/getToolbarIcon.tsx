import MaterialIcons from "react-native-vector-icons/MaterialIcons"

export const getTabBarIcon = (icon: string) => ({ color }: { color: string }) => (
  <MaterialIcons name={icon} size={26} style={{ color: color }} />
);