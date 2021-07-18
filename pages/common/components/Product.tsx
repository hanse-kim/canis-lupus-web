import { Box, Image, Link, StylesProvider, Tag, Text } from "@chakra-ui/react";
import { ProductProps } from "../interfaces";

const IMAGE_MAX_WIDTH = 150;
const INFO_MAX_WIDTH = 150;

const styleProps = {
  productWrapper: {
    fontWeight: "bold",
    letterSpacing: "wide",
    fontSize: "sm",
  },
  imageWrapper: {
    maxW: `${IMAGE_MAX_WIDTH}px`,
  },
  infoWrapper: {
    maxW: `${INFO_MAX_WIDTH}px`,
  },
  desc: {
    fontWeight: "semibold",
    marginTop: 1,
    isTruncated: true,
  },
  title: {
    marginTop: 1,
    isTruncated: false,
    fontSize: "md",
  },
  memberCount: {
    marginTop: 1,
    fontSize: "sm",
    fontWeight: "light",
    color: "gray.400",
  },
  tags: {
    marginTop: 1,
  }
};

const imageProps = {
  fallbackSrc: "https://via.placeholder.com/180",
};

const Product = (props: ProductProps) => {
  return (
    <Box className="ProductWrapper" {...styleProps.productWrapper}>
      <Link href={props.url}>
        <Box display="flex">
          <Box className="ImageWrapper" {...styleProps.imageWrapper}>
            <Image src={props.imageUrl} {...imageProps} />
          </Box>
          <Box className="InfoWrapper" {...styleProps.infoWrapper}>
            <Box className="title" {...styleProps.title}>
              {props.title}
            </Box>{" "}
            <Box className="desc" {...styleProps.desc}>
              {props.desc}
            </Box>
            <Box className="memberCount" {...styleProps.memberCount}>
              <Box marginLeft="1">{`멤버수: ${props.memberCount}`}</Box>
            </Box>
            <Box className="tags" {...styleProps.tags}>
              {props.tags.map((tag) => <Tag marginLeft="1">{tag}</Tag>)}
            </Box>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};

export default Product;
