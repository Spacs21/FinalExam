export interface ProductType {
    id: string;
    title: string;
    desc: string;
    url: string;
    price: number;
    star: number;
    images: string[];
    createdAt: string;
}
export interface Review {
    fname: string;
    comment: string;
    star: number;
}
export interface CommentType {
    author: string;
    createdAt: string;
    text: string;
    id: string;
    star: number;
    length: number;
}
export interface CommentCreateType {
    author: string;
    text: string;
    star: number;
}