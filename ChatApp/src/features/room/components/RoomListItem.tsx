import React from "react";
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  Image,
  ViewStyle,
  ImageStyle,
  TextStyle
} from "react-native";
import {COLORS} from "../../../common/constants/theme";

interface Props {
  name: string;
  avatar: string;
  email: string;
  onPress(): void;
}

const RoomListItem: React.FC<Props> = ({ name, avatar, email, onPress }) => {
  return (
    <TouchableHighlight
      underlayColor={COLORS.grey}
      style={styles.container}
      onPress={onPress}
    >
      <View style={styles.contactInfo}>
        <Image
          style={styles.avatar}
          source={{
            uri: avatar
          }}
        />

        <View style={styles.details}>
          <Text style={[styles.title]}>{name}</Text>
          <Text style={styles.subtitle}>{email}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

interface Style {
  container: ViewStyle;
  contactInfo: ViewStyle;
  avatar: ImageStyle;
  details: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    paddingLeft: 24
  },
  contactInfo: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 24,
    borderBottomColor: COLORS.grey,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  avatar: {
    borderRadius: 22,
    width: 44,
    height: 44
  },
  details: {
    justifyContent: "center",
    flex: 1,
    marginLeft: 20
  },
  title: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 16
  },
  subtitle: {
    color: COLORS.primary,
    fontSize: 15,
    marginTop: 4
  }
});

export default RoomListItem;
