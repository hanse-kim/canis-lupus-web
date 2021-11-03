import {atom} from 'recoil';

export const recentSearchState = atom<string[]>({
  key: 'recentSearchState',
  default: [],
});

export const searchPanelState = atom<boolean>({
  key: 'searchPanelState',
  default: false,
});
