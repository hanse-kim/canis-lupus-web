import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
} from '@chakra-ui/popover';
import {Image} from '@chakra-ui/image';
import {
  Box,
  Flex,
  Stack,
  HStack,
  Link,
  CloseButton,
  Center,
} from '@chakra-ui/react';
import React, {useState} from 'react';
import {NotificationInfo} from 'types/notification';
import {MainNavigationIconButton} from './MainNavigationBar';
import {colors} from 'style';
import dateToKorFormat from 'utils/dateToKorFormat';
import useNotificationList from 'hooks/api/useNotificationList';
import LoadingSpinner from 'components/common/LoadingSpinner';
import useDeleteNotification from 'hooks/notification/useDeleteNotification';

const Notification = (props: {notificationInfo: NotificationInfo}) => {
  const {notificationInfo} = props;
  const [isDeleted, setDeleted] = useState(false);
  const {deleteNotification} = useDeleteNotification(() => {
    setDeleted(true);
  });

  if (isDeleted) {
    return null;
  }

  return (
    <Flex padding='20px' justifyContent='space-between' alignItems='center'>
      <Link href={`/group/${notificationInfo.meeting}`}>
        <HStack spacing='8px'>
          <Box width='36px' height='36px' borderRadius='full' overflow='hidden'>
            <Image
              src={notificationInfo.imageUrl}
              alt='notificaitonImage'
              width='full'
              height='full'
            />
          </Box>
          <Stack spacing='4px'>
            <Box>{notificationInfo.contents}</Box>
            <Box fontSize='10px' color={colors.minorTextGray}>
              {dateToKorFormat(notificationInfo.createdAt)}
            </Box>
          </Stack>
        </HStack>
      </Link>
      <CloseButton
        onClick={() => {
          deleteNotification(notificationInfo);
        }}
      />
    </Flex>
  );
};

const NotificationButton = () => {
  const {notificationList, isLoading} = useNotificationList();

  return (
    <Popover placement='bottom-end'>
      <PopoverTrigger>
        <Link>
          <MainNavigationIconButton icon='icon_notice' title='알림' />
        </Link>
      </PopoverTrigger>
      <PopoverContent width='400px'>
        <PopoverArrow />
        <PopoverBody padding='0'>
          {isLoading && <LoadingSpinner />}
          {!isLoading && notificationList && notificationList.length !== 0 && (
            <Box>
              {notificationList?.map((item, index) => (
                <Notification key={index} notificationInfo={item} />
              ))}
            </Box>
          )}
          {!isLoading && notificationList && notificationList.length === 0 && (
            <Center height='48px'>새 알림이 없습니다!</Center>
          )}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default NotificationButton;
