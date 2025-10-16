import { Badge } from "@chakra-ui/react";
interface Props {
  score: number;
}
function CriticScore({ score }: Props) {
  const color =
    score >= 80 ? "green" : score >= 60 ? "yellow" : score >= 40 ? "red" : "";
  return (
    <Badge colorPalette={color} borderRadius="4px" fontSize="14px" paddingX={2}>
      {score}
    </Badge>
  );
}

export default CriticScore;
