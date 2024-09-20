import { StyleSheet, View } from "react-native";
import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useSetRecoilState } from "recoil";
import { getItem } from "@/utils/AsyncStorageUtils";
import { atomLinkList, LinkListState } from "@/states/atomLinkList";

export default function RecoilCustomPersist({ children }: PropsWithChildren) {
  const [isLoaded, setIsLoaded] = useState(false);
  const setList = useSetRecoilState(atomLinkList);

  const loadData = useCallback(async () => {
    const data = await getItem<LinkListState>("MAIN/LINK_LIST");
    if (data !== null) {
      setList(data);
    }
    setIsLoaded(true);
  }, [setList]);

  useEffect(() => {
    if (!isLoaded) {
      loadData();
    }
  }, [isLoaded, loadData]);

  return <>{isLoaded && children}</>;
}

const styles = StyleSheet.create({});
