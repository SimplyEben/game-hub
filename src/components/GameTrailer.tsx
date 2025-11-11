import useTrailers from "@/hooks/useTrailers";

interface Props {
  gameId: number;
}

function GameTrailer({ gameId }: Props) {
  const { data, isLoading, error } = useTrailers(gameId);
  const first = data?.results[0];
  if (!first) return null;
  // console.log(data);
  if (isLoading) return null;
  if (error) throw error;

  return first ? (
    <video src={first?.data[480]} poster={first.preview} controls />
  ) : null;
}

export default GameTrailer;
