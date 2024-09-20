import { getItem, removeItem, setItem } from "@/utils/AsyncStorageUtils";
import { atom, AtomEffect } from "recoil";

export interface LinkItem {
  title: string;
  image: string;
  link: string;
  createdAt: string;
}

export interface LinkListState {
  list: LinkItem[];
}

export const asyncStorageEffect =
  (key: string): AtomEffect<LinkListState> =>
  ({ setSelf, onSet }) => {
    // AsyncStorage에서 초기 값 불러오기
    getItem<LinkListState>(key).then((savedValue) => {
      if (savedValue != null) setSelf(savedValue);
    });

    // Atom 값이 변경될 때 AsyncStorage에 저장
    onSet((newValue, _, isReset) => {
      if (isReset) {
        removeItem(key);
      } else {
        setItem(key, newValue);
      }
    });
  };

export const atomLinkList = atom<LinkListState>({
  key: "MAIN/LINK_LIST",
  default: {
    list: [],
  },
  effects_UNSTABLE: [asyncStorageEffect("MAIN/LINK_LIST")],
});
