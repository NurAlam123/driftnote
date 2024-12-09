type ParamsType = {
  slug: string;
};

export default function Page({ params }: { params: ParamsType }) {
  const slug = params.slug;
  return <section>Blog {slug}</section>;
}
