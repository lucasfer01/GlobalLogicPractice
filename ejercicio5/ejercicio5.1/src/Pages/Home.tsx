import React from "react";
import {
  Header,
  QuestionsMapContainer,
  Question,
  Answer,
  Logo,
  ResponseContainer,
  QuestionTextArea,
  AnswerTextArea,
  Text,
  DispatchButton,
} from "../components";
import { connect } from "react-redux";
import logoGL from "../assets/globallogic-logo.svg";
import { Avatar } from "../components/Avatar/Avatar";
import { Questions, User } from "../interfaces/reducerInterface";
import CssStyle from "./Home.module.css";
import { addQuestion } from "../actions/addQuestion";
import { changeInputState } from "../actions/changeInputState";
import { addAnswer } from "../actions/addAnswer";
import { deleteQuestion } from '../actions/deleteQuestion';

const {
  Home__Avatar__Question,
  Home__Avatar__Answer,
  Home__QuestionContainer,
} = CssStyle;

interface Props {
  questions: Questions[];
  user: User;
  questionInput: string;
  answerInput: string;
}

const ConnectedHome = ({
  questions,
  user,
  questionInput,
  answerInput,
}: Props) => {
  return (
    <div>
      <Header>
        <Logo logo={logoGL} />

        <Avatar image={user.profilePhoto} />
      </Header>

      <QuestionsMapContainer
        className={`${Home__QuestionContainer}`}
        value={questions}
      >
        {(question) => (
          <>
            <Question
              value={question.text}
              style={{
                margin: "1rem 3rem 1rem 3.2rem",
                boxSizing: "border-box",
                float: "right",
              }}
            >
              <div className={`${Home__Avatar__Question}`}>
                <Avatar image={question.author.profilePhoto} />

                <Text value={question.author.username} />
              </div>

              <DispatchButton style={{float: 'right'}} dispatchValue={() => deleteQuestion(question.id)}>Borrar pregunta</DispatchButton>
            </Question>

            {question.answer && (
              <Answer
                value={question.answer?.text}
                style={{
                  margin: "1rem 3rem 1rem 3rem",
                  boxSizing: "border-box",
                }}
              >
                <div className={`${Home__Avatar__Answer}`}>
                  <Avatar image={question.answer?.author.profilePhoto} />

                  <Text value={question.answer?.author.username} />
                </div>
              </Answer>
            )}
          </>
        )}
      </QuestionsMapContainer>

      <ResponseContainer style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            marginRight: "2rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Text value="Respuesta" />

          <AnswerTextArea name={"answerInput"} value={answerInput} />

          <DispatchButton
            dispatchValue={() =>
              addAnswer({
                id: Math.random() * 10000,
                text: answerInput,
                author: {
                  id: 1,
                  username: "NotATestUser01",
                  profilePhoto: "",
                },
              })
            }
          >Responder</DispatchButton>
        </div>

        <div
          style={{
            marginLeft: "3rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Text value="Pregunta" />
          <QuestionTextArea name={"questionInput"} value={questionInput} />

          <DispatchButton
            dispatchValue={() =>
              addQuestion({
                id: Math.round(Math.random() * 10000),
                text: questionInput,
                author: user,
              })
            }
          >Preguntar</DispatchButton>
        </div>
      </ResponseContainer>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    questions: state.questions,
    user: state.user,
    questionInput: state.questionInput,
    answerInput: state.answerInput,
  };
};

export const Home = connect(mapStateToProps)(ConnectedHome);
