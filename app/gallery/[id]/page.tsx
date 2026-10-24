import { photos } from "@/app/data/photos"
import Link from "next/link"



type Props = {
    params: Promise<{
        id: string
    }>
}

export default async function PhotoDetails({ params }: Props) {

    const { id } = await params

    const photo = photos.find(
        (photo) => photo.id === Number(id)
    )

    if (!photo) {
        return (
            <main>
                <h2>Image doesn't exist</h2>
                <Link
                    href="/gallery"
                >
                    Back to gallery
                </Link>
            </main>
        )
    }

    return (
        <main className="mx-auto max-w-5x1 px-6 py-10">

            <article>
                <img
                    src={photo.image}
                    alt={photo.title}
                />
            </article>

            <Link
                href="/gallery"
            >
                Back to gallery
            </Link>

        </main>
    )

}