export default function PageSection({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="py-20 px-6 text-center">
      <h1 className="text-4xl font-bold mb-4 text-black">{title}</h1>
      <p className="text-gray-700 max-w-2xl mx-auto">{description}</p>
    </section>
  );
}
