import React from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { Block, Button, DetailListItem } from "../../../common/components";
import { OptionsProps } from "../AuthNavigator";
import store from "../../../common/store";


const Options: React.FC<OptionsProps> = ({navigation, route}, title) => {

  const handleLogin = () => {
    // Perform login logic here
    // For simplicity, let's assume the login is successful
    store.notifyLoginChange(false);
  };


  return (
    <Block style={styles.container}>
      <DetailListItem title="Update Profile" />
      <DetailListItem title="Change Language" />
      <Button onPress={handleLogin}>
      <DetailListItem title="Sign Out" />
      </Button>
    </Block>
  );
};

interface Style {
  container: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default Options;
