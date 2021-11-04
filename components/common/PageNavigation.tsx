import {HStack, Link, LinkProps} from '@chakra-ui/layout';
import {useState} from 'react';
import {colors} from 'style';

const PageButton = (
  props: LinkProps & {
    label: string;
    activated?: boolean;
  }
) => {
  const {label, activated, ...linkProps} = props;

  return (
    <Link
      width='36px'
      height='36px'
      color={activated ? colors.mainBlue[1] : colors.mainGray[0]}
      fontWeight={activated ? 'bold' : 'normal'}
      textAlign='center'
      lineHeight='36px'
      {...linkProps}
    >
      {label}
    </Link>
  );
};

const PageNavigation = (props: {
  currentPage: number;
  maxPage: number;
  setPage: (page: number) => void;
}) => {
  const {currentPage, maxPage, setPage} = props;
  const [pageNavList] = useState<number[]>(() => {
    const firstPage = currentPage > 2 ? currentPage - 2 : 1;
    const lastPage = currentPage < maxPage - 1 ? currentPage + 2 : maxPage;
    return [...Array(lastPage - firstPage + 1)].map((v, i) => i + firstPage);
  });

  const setPageAndScrollUp = (page: number) => {
    setPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <HStack className='pageNavigation' spacing='12px' justifyContent='center'>
      <PageButton
        label='<'
        onClick={() => {
          if (currentPage > 1) {
            setPageAndScrollUp(currentPage - 1);
          }
        }}
      />
      {pageNavList.map((item, index) => (
        <PageButton
          key={index}
          label={`${item}`}
          activated={item === currentPage}
          onClick={() => {
            setPageAndScrollUp(item);
          }}
        />
      ))}
      <PageButton
        label='>'
        onClick={() => {
          if (currentPage < maxPage) {
            setPageAndScrollUp(currentPage + 1);
          }
        }}
      />
    </HStack>
  );
};

export default PageNavigation;
