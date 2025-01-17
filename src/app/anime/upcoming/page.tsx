import { Metadata } from "next";

import { UpcomingAnime } from "@/types/anime";
import { animeStoreSelector, setUpcomingAnime } from "@/store";
import SwiperCard from "@/components/swiper/swiper-card";
import { H1 } from "@/components/ui/topography";

export const metadata: Metadata = {
    title: "Upcoming Anime | flamingo",
    description: "Watch Trailers for Upcoming Anime on flamingo",
};
const fetchUpcomingAnime = async () => {
    const res = await fetch("https://api.jikan.moe/v4/top/anime?filter=upcoming");
    const upcoming: UpcomingAnime = await res.json();

    // set upcoming anime in store
    setUpcomingAnime(upcoming);

    return upcoming;
};

const UpcomingAnimePage = async () => {
    // get upcoming anime from store if it exists
    // otherwise fetch it
    const upcoming =
        animeStoreSelector().upcoming ?? (await fetchUpcomingAnime());

    return (
        <>
            <H1 className="py-4 sm:py-6 md:py-8">Upcoming Anime</H1>

            <div className="grid-rows grid h-full w-full grid-cols-2 gap-8 py-4 sm:grid-cols-3 md:grid-cols-4 md:gap-12 lg:grid-cols-5 xl:grid-cols-6">
                {upcoming.data.map((anime) => (
                    <SwiperCard
                        key={Math.random()}
                        item={anime}
                        isUpcoming
                        className="mx-auto w-40 lg:w-48 xl:w-56"
                    />
                ))}
            </div>
        </>
    );
};

export default UpcomingAnimePage;

