import { useState } from 'preact/hooks';
import { shuffle } from '../utils/array';
// import WebsiteCard from './WebsiteCard.astro';
// import WebsiteList from './WebsiteList.astro';

export default function RandomWebsiteList({websites}: any) {
    const randomize = () => shuffle(websites);
    const randomSites = randomize();

    const [site0, setSite0] = useState(randomSites[0]);
    const [site1, setSite1] = useState(randomSites[1]);
    const [site2, setSite2] = useState(randomSites[2]);

    const handleClick = (e: any) => {
        const randomSites = randomize();
        setSite0(randomSites[0]);
        setSite1(randomSites[1]);
        setSite2(randomSites[2]);

        if (e.target) {
            e.target.classList.add('animate-spin');

            window.setTimeout(() => {
                e.target.classList.remove('animate-spin');
            }, 500);
        }
    }

    return (
        <div class="w-full flex flex-col items-center gap-y-8 md:gap-y-24">            
            <button
                id="random-btn"
                onClick={(e) => handleClick(e)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3.5}
                    stroke="currentColor"
                    className="w-10 h-10"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="
                            M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181
                            3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181
                            3.182m0-4.991v4.99"
                    />
                </svg>
            </button>
    
            {/* Error occured " Astro components cannot be rendered directly via function call..."  */}
            {/* But I don't understand this and cannot fix. */}
            {/* <WebsiteList>
                {sites.map((site: any, i: number) => (
                    i < 20 && (
                        <li class="w-full">
                            <WebsiteCard website={site} />
                        </li>
                    )
                ))}
            </WebsiteList> */}
            
            <ul class="w-full grid grid-cols-1 md:grid-cols-3 auto-rows-auto gap-y-8 md:gap-x-6">
                <li class="w-full flex flex-col gap-y-2">
                    <a
                        href={`/websites/${site0.slug}`}
                        class="text-xl font-bold underline"
                    >
                        {site0.data.title}
                    </a>
                    <ul class="flex flex-wrap items-center gap-x-2">
                        {site0.data.tags.map((tag: string) => (
                            <li>
                                <a
                                    href={`/tags/${tag}`}
                                    class="
                                        border-2 border-black dark:border-white
                                        px-1
                                        text-sm hover:no-underline
                                    "
                                >
                                    {tag}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <p class="text-base line-clamp-3">{site0.data.description}</p>
                    <a
                        href={site0.data.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-sm underline line-clamp-1 break-words"
                    >
                        {site0.data.url}
                    </a>
                </li>
                <li class="w-full flex flex-col gap-y-2">
                    <a
                        href={`/websites/${site1.slug}`}
                        class="text-xl font-bold underline"
                    >
                        {site1.data.title}
                    </a>
                    <ul class="flex flex-wrap items-center gap-x-2">
                        {site1.data.tags.map((tag: string) => (
                            <li>
                                <a
                                    href={`/tags/${tag}`}
                                    class="
                                        border-2 border-black dark:border-white
                                        px-1
                                        text-sm hover:no-underline
                                    "
                                >
                                    {tag}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <p class="text-base line-clamp-3">{site1.data.description}</p>
                    <a
                        href={site1.data.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-sm underline line-clamp-1 break-words"
                    >
                        {site1.data.url}
                    </a>
                </li>
                <li class="w-full flex flex-col gap-y-2">
                    <a
                        href={`/websites/${site2.slug}`}
                        class="text-xl font-bold underline"
                    >
                        {site2.data.title}
                    </a>
                    <ul class="flex flex-wrap items-center gap-x-2">
                        {site2.data.tags.map((tag: string) => (
                            <li>
                                <a
                                    href={`/tags/${tag}`}
                                    class="
                                        border-2 border-black dark:border-white
                                        px-1
                                        text-sm hover:no-underline
                                    "
                                >
                                    {tag}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <p class="text-base line-clamp-3">{site2.data.description}</p>
                    <a
                        href={site2.data.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-sm underline line-clamp-1 break-words"
                    >
                        {site2.data.url}
                    </a>
                </li>
            </ul>
        </div>
    )
}

<script>

</script>