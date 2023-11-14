import Fuse from "fuse.js";
import { useState } from "preact/hooks";

const options = {
    keys: ['data.title', 'data.description', 'data.tags', 'data.url', 'slug'],
    includeMatches: true,
    minMatchCharLength: 2,
    threshold: 0.5,
};

function Search({ searchList }: any) {
    const [query, setQuery] = useState('');
    
    const fuse = new Fuse(searchList, options);

    const websites = fuse
        .search(query)
        .map((res) => res.item)
        .slice(0, 20);

    function handleInput(e: any) {
        setQuery(e.target.value);
    }

    return (
        <div class="w-full md:w-[560px] flex flex-col gap-y-6">
            <div class="
                    w-full border-2 border-navy dark:border-khaki
                    flex items-center gap-x-2 p-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>              
                <input
                    type="text"
                    value={query}
                    placeholder="Search title, category, URL..."
                    onInput={(e) => handleInput(e)}
                    class="
                        w-full h-full bg-transparent outline-none
                        text-lg text-navy dark:text-khaki font-bold
                    "
                />
            </div>

            <div class="w-full">
                <ul class="w-full flex flex-col gap-y-6">
                    {websites && websites.map((website: any) => (
                        <li class="flex flex-col gap-y-1">
                            <a
                                href={`/websites/${website.slug}`}
                                class="text-xl font-bold"
                            >
                                {website.data.title}
                            </a>
                            <ul class="w-full flex flex-wrap gap-1">
                                {website.data.tags.map((tag: string) => (
                                    <li>
                                        <a
                                            href={`/tags/${tag}`}
                                            class="
                                                bg-navy dark:bg-khaki px-2 py-1
                                                text-sm text-khaki dark:text-navy
                                                font-bold hover:no-underline
                                            "
                                        >
                                            {tag}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <p class="w-full text-base line-clamp-2">
                                {website.data.description}
                            </p>
                            <a
                                href={website.data.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="text-sm line-clamp-1"
                            >
                                {website.data.url}
                            </a>
                        </li>
                    ))}

                </ul>
            </div>
        </div>
    )
}

export default Search;