import { redirect } from "next/navigation";

interface GalleryDetailsProperties {
  readonly params: Promise<{
    readonly id: string;
  }>;
}

export default async function GalleryDetailsRedirect({
  params,
}: GalleryDetailsProperties) {
  const { id } = await params;
  redirect(`/movies/${id}`);
}
