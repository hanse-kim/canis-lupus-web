import produce from 'immer';
import {useState} from 'react';

const useIntroduceValidation = () => {
  const [error, setError] = useState<{
    [key: string]: {isInvalid: boolean; message: string | null};
  }>({
    nickname: {isInvalid: false, message: null},
    introduce: {isInvalid: false, message: null},
  });

  const validateNickname = (nickname: string) => {
    let result = false;
    if (nickname === '중복') {
      setError(
        produce(error, (draft) => {
          (draft.nickname.isInvalid = true),
            (draft.nickname.message = '중복된 닉네임입니다.');
        })
      );
    } else if (nickname.length > 20) {
      setError(
        produce(error, (draft) => {
          (draft.nickname.isInvalid = true),
            (draft.nickname.message = '닉네임의 길이가 20자보다 깁니다.');
        })
      );
    } else {
      setError(
        produce(error, (draft) => {
          draft.nickname.isInvalid = false;
          draft.nickname.message = null;
        })
      );
      result = true;
    }

    return result;
  };

  const validateIntroduce = (introduce: string) => {
    let result = false;
    if (introduce.length === 0) {
      setError(
        produce(error, (draft) => {
          (draft.introduce.isInvalid = true),
            (draft.introduce.message = '자기소개를 입력해주세요.');
        })
      );
    } else {
      setError(
        produce(error, (draft) => {
          draft.introduce.isInvalid = false;
          draft.introduce.message = null;
        })
      );
      result = true;
    }

    return result;
  };

  return {error, validateNickname, validateIntroduce};
};

export default useIntroduceValidation;
