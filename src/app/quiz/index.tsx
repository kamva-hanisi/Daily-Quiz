import { router } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const questions = [
  {
    text: "Which planet is known as the Red Planet?",
    answers: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: "Mars",
  },
  {
    text: "What is 12 × 8?",
    answers: ["86", "96", "108", "112"],
    correctAnswer: "96",
  },
  {
    text: "Which language is primarily used to style web pages?",
    answers: ["JavaScript", "Python", "CSS", "PHP"],
    correctAnswer: "CSS",
  },
  {
    text: "Which word is a noun?",
    answers: ["Quickly", "Beautiful", "Happiness", "Run"],
    correctAnswer: "Happiness",
  },
  {
    text: "How many continents are there on Earth?",
    answers: ["5", "6", "7", "8"],
    correctAnswer: "7",
  },
];

export default function QuizScreen() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const question = questions[currentQuestion];
  const isLastQuestion = currentQuestion === questions.length - 1;

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);

    if (answer === question.correctAnswer) {
      setScore((currentScore) => currentScore + 1);
    }
  };

  const handleNext = () => {
    if (isLastQuestion) {
      const finalScore =
        score + (selectedAnswer === question.correctAnswer ? 1 : 0);

      router.push({
        pathname: "/quiz/result",
        params: {
          score: finalScore.toString(),
        },
      });

      return;
    }

    setCurrentQuestion((currentQuestion) => currentQuestion + 1);
    setSelectedAnswer(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.progress}>
        Question {currentQuestion + 1} of {questions.length}
      </Text>

      <View style={styles.progressBar}>
        <View
          style={[
            styles.progressFill,
            { width: `${((currentQuestion + 1) / questions.length) * 100}%` },
          ]}
        />
      </View>

      <Text style={styles.topic}>GENERAL KNOWLEDGE</Text>

      <Text style={styles.question}>{question.text}</Text>

      <View style={styles.answers}>
        {question.answers.map((answer) => {
          const isSelected = selectedAnswer === answer;
          const isCorrect = answer === question.correctAnswer;

          let answerStyle = styles.answer;

          if (isSelected && isCorrect) {
            answerStyle = styles.correctAnswer;
          } else if (isSelected && !isCorrect) {
            answerStyle = styles.incorrectAnswer;
          }

          return (
            <Pressable
              key={answer}
              style={answerStyle}
              onPress={() => handleAnswer(answer)}
              disabled={selectedAnswer !== null}
            >
              <Text
                style={
                  isSelected ? styles.selectedAnswerText : styles.answerText
                }
              >
                {answer}
              </Text>
            </Pressable>
          );
        })}
      </View>

      {selectedAnswer !== null && (
        <>
          <Text style={styles.feedback}>
            {selectedAnswer === question.correctAnswer
              ? "✅ Correct!"
              : `❌ Incorrect. The correct answer is ${question.correctAnswer}.`}
          </Text>

          <Pressable style={styles.nextButton} onPress={handleNext}>
            <Text style={styles.nextButtonText}>
              {isLastQuestion ? "Finish Quiz" : "Next Question"}
            </Text>
          </Pressable>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FC",
    padding: 20,
    paddingTop: 60,
  },

  progress: {
    fontSize: 14,
    fontWeight: "700",
    color: "#6B7280",
    marginBottom: 10,
  },

  progressBar: {
    height: 8,
    backgroundColor: "#E5E7EB",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 45,
  },

  progressFill: {
    height: "100%",
    backgroundColor: "#208AEF",
  },

  topic: {
    fontSize: 12,
    fontWeight: "800",
    color: "#208AEF",
    letterSpacing: 1,
    marginBottom: 14,
  },

  question: {
    fontSize: 27,
    lineHeight: 36,
    fontWeight: "800",
    color: "#111827",
    marginBottom: 35,
  },

  answers: {
    gap: 14,
  },

  answer: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 16,
    padding: 18,
  },

  correctAnswer: {
    backgroundColor: "#DCFCE7",
    borderWidth: 1,
    borderColor: "#22C55E",
    borderRadius: 16,
    padding: 18,
  },

  incorrectAnswer: {
    backgroundColor: "#FEE2E2",
    borderWidth: 1,
    borderColor: "#EF4444",
    borderRadius: 16,
    padding: 18,
  },

  answerText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },

  selectedAnswerText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
  },

  feedback: {
    marginTop: 25,
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    color: "#111827",
  },

  nextButton: {
    backgroundColor: "#208AEF",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 20,
  },

  nextButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
});
