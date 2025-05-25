// TODO: fix these types
// @ts-expect-error: Implicit any
export const HydrateFallback = ({ loaderData }: Route.HydrateFallbackProps) => {
  // const { version } = loaderData;
  const version = loaderData?.version;

  return (
    <div>
      <h1>Loading version: {version}</h1>
      <div>(spinner)</div>
    </div>
  );
};
