import usePlatforms from "./usePlatforms";

function usePlatform(id?: number) {
  const { data: platforms } = usePlatforms();
  return platforms?.results.find((plat) => plat.id === id);
}

export default usePlatform;
