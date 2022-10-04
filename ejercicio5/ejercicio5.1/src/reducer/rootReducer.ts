import { ADD_QUESTION, CHANGE_INPUT_STATE, ADD_ANSWER, DELETE_QUESTION } from '../constants/action-types';
import { Questions, User } from '../interfaces/reducerInterface';

interface initialStateProps {
    questions: Questions[];
    user: User;
    questionInput: string;
    answerInput: string;
}


const initialState: initialStateProps = {
    questions: [
        {
            id: 1,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book?",
            answer: {
                id: 1,
                text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
                questionId: 1,
                author: {
                    id: 2,
                    username: "NotATestUser01",
                    profilePhoto: ""
                }
            },
            author: {
                id: 1,
                username: "lucasfer01",
                profilePhoto: "https://avatars.githubusercontent.com/u/85971126?s=400&u=96e24a9c3bcd7bfd82b6d26ef7594c5a5e25fa18&v=4"
            }
        },
        {
            id: 2,
            text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English?",
            answer: {
                id: 2,
                text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet",
                questionId: 2,
                author: {
                    id: 1,
                    username: "NotATestUser01",
                    profilePhoto: ""
                }
            },
            author: {
                id: 1,
                username: "lucasfer01",
                profilePhoto: "https://avatars.githubusercontent.com/u/85971126?s=400&u=96e24a9c3bcd7bfd82b6d26ef7594c5a5e25fa18&v=4"
            }
        }
    ],
    user: {
        id: 1,
        username: "LucasFer01",
        profilePhoto: "https://avatars.githubusercontent.com/u/85971126?s=400&u=96e24a9c3bcd7bfd82b6d26ef7594c5a5e25fa18&v=4"
    },
    questionInput: "",
    answerInput: "",
};

export function rootReducer(state = initialState, action: any) {

    switch (action.type) {
        case ADD_QUESTION:
            return {
                ...state,
                questions: state.questions.concat(action.payload),
                questionInput: ''
            };

        case CHANGE_INPUT_STATE:
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }

        case ADD_ANSWER: 
            return {
                ...state,
                questions: [
                    ...state.questions.slice(0, state.questionInput.length - 1),
                    {
                        ...state.questions[state.questions.length - 1],
                        answer: action.payload
                    }
                ],
                answerInput: ''
            }

        case DELETE_QUESTION: 
            return {
                ...state,
                questions: state.questions.filter((question) => question.id !== action.payload)
            }

        default:
            return state;
    }
};