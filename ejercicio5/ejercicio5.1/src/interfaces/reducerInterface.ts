export interface Questions {
    id: number;
    text: string;
    answer?: Answers;
    author: Author;
};

export interface Answers extends Questions {
    questionId: number;
}

interface Author {
    id: number;
    username: string;
    profilePhoto: string;
}

export interface User {
    id: number;
    username: string;
    profilePhoto: string;
} 