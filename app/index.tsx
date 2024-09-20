import * as React from "react";
import { StyleSheet } from "react-native";
import MainDrawerNavigations from "@/navigations/MainDrawerNavigations";
import { RecoilRoot } from "recoil";
import RecoilCustomPersist from "@/components/RecoilCustomPersist";

export default function App() {
  return (
    <RecoilRoot>
      <RecoilCustomPersist>
        <MainDrawerNavigations />
      </RecoilCustomPersist>
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({});
