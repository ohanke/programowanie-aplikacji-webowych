import Link from "next/link"
import { Photo } from "../data/photos"
import Image from "next/image"

type Props = {
    photo: Photo
}

export default function PhotoCard({ photo }: Props) {

    return (
        <Link
            href={`/gallery/${photo.id}`}
            className="group block h-full"
        >

            <article
            className="h-full overflow-hidden rounded-2x1 border border-slate-400 bg-white shadow-sm transition duration-300 hover:translate-y-1 hover:shadow-1"
            >
                <div className="relative h-64 overflow-hidden">

                    <Image
                    src={photo.image}
                    alt={photo.title}
                    fill
                    sizes="(max-width:768px) 100vw,5"
                    className="object-cover"
                    />

                </div>

                <div className="p-5 m-1">
                    <h2>
                        {photo.id}
                    </h2>
                    <h2>
                        {photo.title}
                    </h2>
                    <h2>
                        {photo.description}
                    </h2>

                </div>

            </article>

        </Link>
    )

}