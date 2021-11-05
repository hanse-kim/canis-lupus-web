import axios from 'axios';
import {useState} from 'react';
import {useMutation} from 'react-query';
import {ImageInfo} from 'types/domain';
import {API_URL} from 'utils/api/_constants';

const useImageUpload = (imageType: string) => {
  const [imageUrl, setImageUrl] = useState('');
  const imageUploadMutation = useMutation(
    (image: File) => {
      const formData = new FormData();
      formData.append('images', image);
      return axios.post<ImageInfo>(
        `${API_URL}/images?type=${imageType}`,
        formData
      );
    },
    {
      onSuccess: (res) => {
        setImageUrl(res.data.imageUrls[0]);
      },
    }
  );

  return {
    uploadImage: imageUploadMutation.mutate,
    isLoading: imageUploadMutation.isLoading,
    isUploaded: imageUploadMutation.isSuccess,
    imageUrl,
  };
};

export default useImageUpload;
