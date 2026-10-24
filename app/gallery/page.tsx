import PhotoGrid from "../components/PhotoGrid";
import { photos } from "../data/photos";

export default function GalleryPage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        {/* <h2>Gallery page works</h2> */}


        <section className="mx-auto max-w-7x1 px-6 py-12">
            <PhotoGrid photos={photos}/>

        </section>
      </main>
    </div>
  );
}