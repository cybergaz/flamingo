import { ANIME, IEpisodeServer } from "@consumet/extensions";

import ArtPlayer from "@/components/player/art-player";

type WatchPageProps = {
    params: {
        slug: string[];
    };
};

const fetchEpisodes = async (title: string) => {
    const gogoanime = new ANIME.Gogoanime();
    try {
        const episodes = await gogoanime.fetchEpisodeSources(title)
        console.log(episodes);
        return episodes;
    } catch (error) {
        throw error;
    }
};

const WatchPage = async ({ params }: WatchPageProps) => {
    const slug = (await params).slug
    const id = slug[0];
    const title = slug[1];

    const episodes = await fetchEpisodes(title);

    const videoUrl = episodes.sources.find((source) => source.quality === "720p")?.url ?? episodes.sources[0].url;

    return (
        <div className="flex h-screen w-full items-center justify-center">
            <ArtPlayer url={`http://localhost:8787?url=${videoUrl}`} className="aspect-video w-[800px]" />
        </div>
    );
};

export default WatchPage;
