import { notFound } from "next/navigation";

export default function ProductId({
  params,
}: {
  params: { productId: string };
}) {
  if (parseInt(params.productId) > 10) {
    notFound();
  }
  return <h1>This is detail pge of {params.productId}</h1>;
}
