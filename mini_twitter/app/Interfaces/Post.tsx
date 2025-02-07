export interface PostThreadType {
    content: string;
    date: Date;
}

export default interface PostType {
    content: string;
    date: Date;
    threads: PostThreadType[];
}

