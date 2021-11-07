import {UserInfo} from 'types/auth';

const isJoining = (userInfo: UserInfo, groupId: string) => {
  return userInfo.meetings.joining.some((group) => group._id === groupId);
};

export default isJoining;
