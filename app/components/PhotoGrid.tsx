import { Photo } from "../data/photos"
import PhotoCard from "./PhotoCard"



type Props = {
    photos: Photo[]
}


export default function PhotoGrid({ photos }: Props) {

    return (
        <div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >

            {
                photos.map((photo) => (
                    <PhotoCard
                        key={photo.id}
                        photo={photo}
                    >

                    </PhotoCard>
                ))
            }

        </div>
    )

}