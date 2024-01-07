import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  ViewStyle,
  Linking,
} from "react-native";
import getURLParams from "../utils/getURLParams";
import store from "../store";
import { MappedContact, Subscription } from "../utils/types";
import RoomListItem from "../components/RoomListItem";
import { fetchContacts } from "../utils/api";
import { RoomListProps } from "../RoomNavigator";
import useTheme from "../../../common/hooks/useTheme";


const RoomList : React.FC<RoomListProps> = ({navigation}) => {
  const {sizes, colors} = useTheme();

  const [contacts, setContacts] = useState<MappedContact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const keyExtractor = ({ phone }: { phone: string }) => phone;

    useEffect(() => {
    const updateState = () => {
        setContacts(store.getState().contacts);
        setLoading(store.getState().isFetchingContacts);
        setError(store.getState().error);
    };

    const unsubscribe: Subscription = store.onChange(() => updateState());

    const fetchData = async () => {
        const fetchedContacts = await fetchContacts();
        store.setState({ contacts: fetchedContacts, isFetchingContacts: false });
    };

    fetchData();

    const subscription = Linking.addEventListener("url", handleOpenUrl);

    return () => {
        subscription.remove();
        unsubscribe();
    };
    }, []);

  const handleOpenUrl = ({ url }: { url: string }) => {
    const params = getURLParams(url);

    if (params.name) {
      const queriedContact = store
        .getState()
        .contacts.find(
          (contact) =>
            contact.name.split(" ")[0].toLowerCase() ===
            params.name.toLowerCase()
        );

      if (queriedContact) {
        navigation.navigate("Message");
      }
    }
  };

  const renderContact = ({ item }: { item: MappedContact }) => {
    const { id, name, avatar, phone } = item;

    return (
      <RoomListItem
        name={name}
        avatar={avatar}
        phone={phone}
        onPress={() => navigation.navigate("Message")}
      />
    );
  };

  const contactsSorted = contacts.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" />}
      {error && <Text>Error...</Text>}
      {!loading && !error && (
        <FlatList
          data={contactsSorted}
          keyExtractor={keyExtractor}
          renderItem={renderContact}
        />
      )}
    </View>
  );
};

interface Style {
  container: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    backgroundColor: "white",
    justifyContent: "center",
    flex: 1,
  },
});

export default RoomList;
