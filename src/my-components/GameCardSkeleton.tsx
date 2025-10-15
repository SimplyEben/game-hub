import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

function GameCardSkeleton() {
  return (
    <Card.Root>
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText noOfLines={3} />
      </CardBody>
    </Card.Root>
  );
}

export default GameCardSkeleton;
