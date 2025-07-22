import Ghost from "./_components/ghost";

interface Params {
  username: string;
}

interface Props {
  params: Promise<Params>;
}

const GhostPage = async ({ params }: Props) => {
  const { username } = await params;
  return (
    <div className="mt-4 top-12 h-full">
      <Ghost username={username} />
    </div>
  );
};

export default GhostPage;
