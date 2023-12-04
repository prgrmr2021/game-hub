import {
  HStack,
  Image,
  ListItem,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <ListItem paddingY="5px">
      <HStack width='100%'>
        <SkeletonCircle width='20%'/>
        <SkeletonText width="80%" />
      </HStack>
    </ListItem>
  );
};

export default GenreListSkeleton;
