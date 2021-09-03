import produce from 'immer';
import {useState} from 'react';
import useIntroduceValidation from './useIntroduceValidation';
import useSubmitChecker from './useSubmitChecker';

const useIntroduceHooks = () => {
  const keys = ['nickname', 'introduce'];
  const {error, validateNickname, validateIntroduce} = useIntroduceValidation();
  const [data, setData] = useState<{[key: string]: string}>({
    nickname: '',
    introduce: '',
  });
  const {setPassed, isSubmittable} = useSubmitChecker([
    'nickname',
    'introduce',
  ]);

  const onNicknameChange = (e: React.FocusEvent<HTMLInputElement>) => {
    const nickname = e.target.value;
    setPassed('nickname', validateNickname(nickname));
    setData(
      produce(data, (draft) => {
        draft.nickname = nickname;
      })
    );
  };

  const onIntroduceChange = (e: React.FocusEvent<HTMLInputElement>) => {
    const introduce = e.target.value;
    setPassed('introduce', validateIntroduce(introduce));
    setData(
      produce(data, (draft) => {
        draft.introduce = introduce;
      })
    );
  };

  return {
    data,
    error,
    onNicknameChange,
    onIntroduceChange,
    isSubmittable,
    keys,
  };
};

export default useIntroduceHooks;
