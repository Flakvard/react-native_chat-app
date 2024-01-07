import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { StyleSheet, View, Text, ViewStyle, TextStyle } from "react-native";
import {COLORS} from "../../../common/constants/theme";

interface Props {
  icon?: string;
  title: string;
  subtitle?: string;
}

const DetailListItem: React.FC<Props> = ({ icon, title, subtitle }) => {
  return (
    <View style={styles.borderContainer}>
      <View style={styles.wrapper}>
        <View style={styles.container}>
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
          <View style={styles.contentContainer}>
            <Text style={[styles.title]}>{title}</Text>

            {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
          </View>
        </View>
      </View>
    </View>
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
