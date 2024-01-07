import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { StyleSheet,  ViewStyle, TextStyle } from "react-native";
import { COLORS } from "../constants/theme";
import { Block, Text } from ".";

interface Props {
  icon?: string;
  title: string;
  subtitle?: string;
  onPress?: () => {};
}

const DetailListItem: React.FC<Props> = ({ icon, title, subtitle }) => {
  return (
    <Block style={styles.borderContainer}>
      <Block style={styles.wrapper}>
        <Block style={styles.container}>
          {icon && (
            <MaterialIcons
              name={icon}
              size={24}
              style={{
                color: COLORS.black,
                marginRight: 20,
              }}
            />
          )}
          <Block style={styles.contentContainer}>
            <Text style={[styles.title]}>{title}</Text>

            {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

interface Style {
  container: ViewStyle;
  borderContainer: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
  wrapper: ViewStyle;
  contentContainer: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  borderContainer: {
    paddingLeft: 24,
  },
  wrapper: {
    flexDirection: "row",
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 24,
    borderBottomColor: COLORS.grey,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  contentContainer: {
    justifyContent: "center",
    flex: 1,
  },
  title: {
    color: COLORS.black,
    fontWeight: "bold",
    fontSize: 16,
  },
  subtitle: {
    color: COLORS.blue,
    fontSize: 15,
    marginTop: 4,
  },
});

export default DetailListItem;
