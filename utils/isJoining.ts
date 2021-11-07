import {UserInfo} from 'types/auth';

export const isJoining = (userInfo: UserInfo, groupId: string) => {
  return userInfo.meetings.joining.some((group) => group._id === groupId);
};

export const isWaiting = (userInfo: UserInfo, groupId: string) => {
  return userInfo.meetings.joining.some((group) => group._id === groupId);
};
