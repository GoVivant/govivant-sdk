export default class Tag {
    name: string;
    description: string;
    images: string;
    rank: number;
    enabled: boolean;
    constructor(name: string, description: string, images: string, enabled: boolean, rank: number);
}
