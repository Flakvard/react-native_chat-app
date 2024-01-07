import React, { useEffect, useState } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import ContactThumbnail from "./ContactThumbnail";
import DetailListItem from "./DetailListItem";
import { MappedContact, StoreState } from "../../../common/utils/types";
import {COLORS} from "../../../common/constants/theme";
import store from "../store";
import { ProfileProps } from "../RoomNavigator";


const Profile: React.FC<ProfileProps> = ({ route }) => {
  const { userId } = route.params;
  const [contact, setContact] = useState<MappedContact | undefined>(undefined);

  useEffect(() => {
    const updateState = () => setContact(store.getState().contacts.find((c) => c.id === userId));

    const unsubscribe = store.onChange(() => updateState());

    updateState(); // Initial state update

    return () => {
        unsubscribe
    };
  }, [userId]);

  if (!contact) {
    // Handle case when contact is not found
    return null;
  }

  const { avatar, name, email, phone, cell } = contact;

  return (
    <View style={styles.container}>
      <View style={styles.avatarSection}>
        <ContactThumbnail avatar={avatar} name={name} phone={phone} />
      </View>
      <View style={styles.detailsSection}>
        <DetailListItem icon="mail" title="Email" subtitle={email} />
        <DetailListItem icon="phone" title="Work" subtitle={phone} />
        <DetailListItem icon="smartphone" title="Personal" subtitle={cell} />
      </View>
    </View>
  );
};

interface Style {
  container: ViewStyle;
  avatarSection: ViewStyle;
  detailsSection: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
  },
  avatarSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.blue,
  },
  detailsSection: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default Profile;