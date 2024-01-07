import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ActivityIndicator, ViewStyle } from "react-native";
import { COLORS } from "../../../common/constants/theme";
import store from "../../../common/store";
import { Listener, MappedContact, Subscription } from "../../../common/utils/types";
import { fetchUserContact } from "../../../common/utils/api";
import { UserProps } from "../AuthNavigator";
import { ContactThumbnail } from "../../../common/components";

interface State {
  user?: MappedContact | {};
  loading?: boolean;
  error?: boolean;
}

interface Style {
  container: ViewStyle;
}

const User: React.FC<UserProps> = (navigation) => {
  // State to hold user data, loading state, and error stat
  const [state, setState] = useState<State>({
    user: store.getState().user,
    loading: store.getState().isFetchingUser,
    error: store.getState().error,
  });

  const { user, loading, error } = state;
  const { avatar, name, phone } = user as MappedContact;

  // Listener function to update the component state
  const updateState: Listener = () => {
    setState({
      user: store.getState().user,
      loading: store.getState().isFetchingUser,
      error: store.getState().error,
    });
  };

  useEffect(() => {
    // Function to fetch user contact data
    const fetchData = async () => {
      const user = await fetchUserContact();
      store.setState({ user, isFetchingUser: false });
    };

    // Initial data fetch
    fetchData();

    // Subscribe to changes in the store and update the component state
    const unsubscribe = store.onChange(updateState);

    return () => {
    // Cleanup function to unsubscribe when the component is unmounted
      unsubscribe();
    };
  }, []); // The empty dependency array ensures the effect runs only once on mount

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" />}
      {error && <Text>Error...</Text>}

      {!loading && <ContactThumbnail avatar={avatar} name={name} phone={phone} />}
    </View>
  );
};


const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.secondary,
  },
});

export default User;