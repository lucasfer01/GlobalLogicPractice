interface infoDataItem {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
}

export interface resultsDataItem {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: { name: string; url: string; };
    location: {name: string; url: string};
    image: string;
    episode: Array<string>;
    url: string;
    created: string;
}