
import Header from "./components/header";
import Main from "./components/Main";
import ScreenWrapper from "./components/header/ScrennWrapper";
import React from "react";
import { ScrollView } from "react-native";

export default function _screen() {
  return (
    <ScreenWrapper>
      <Header />

      <ScrollView>
        <Main />
      </ScrollView>

    
    </ScreenWrapper>
  );
}