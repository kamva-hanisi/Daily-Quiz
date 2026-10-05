import { router, useLocalSearchParams } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const questions = [
  {
    text: "Which planet is known as the Red Planet?",
    correctAnswer: "Mars",
  },
  {
    text: "What is 12 × 8?",
    correctAnswer: "96",
  },
  {
    text: "Which language is primarily used to style web pages?",
    correctAnswer: "CSS",
  },
  {
    text: "Which word is a noun?",
    correctAnswer: "Happiness",
  },
  {
    text: "How many continents are there on Earth?",
    correctAnswer: "7",
  },
];

export default function ReviewAnswersScreen() {
  const { score } = useLocalSearchParams<{ score: string }>();

  const finalScore = Number(score ?? 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Review Answers</Text>

      <Text style={styles.subtitle}>
        You got {finalScore} out of {questions.length} correct.
      </Text>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
      >
        {questions.map((question, index) => {
          return (
            <View key={index} style={styles.card}>
              <View style={styles.questionHeader}>
                <Text style={styles.questionNumber}>Question {index + 1}</Text>

                <Text style={styles.correctBadge}>✓</Text>
              </View>

              <Text style={styles.question}>{question.text}</Text>

              <Text style={styles.answerLabel}>Correct answer</Text>

              <Text style={styles.correctAnswer}>{question.correctAnswer}</Text>
            </View>
          );
        })}
      </ScrollView>

      <Pressable style={styles.button} onPress={() => router.replace("/")}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </Pressable>
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

  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#111827",
  },

  subtitle: {
    fontSize: 16,
    color: "#6B7280",
    marginTop: 8,
    marginBottom: 20,
  },

  list: {
    paddingBottom: 20,
    gap: 14,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 20,
  },

  questionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  questionNumber: {
    fontSize: 13,
    fontWeight: "800",
    color: "#208AEF",
  },

  correctBadge: {
    fontSize: 18,
    fontWeight: "900",
    color: "#22C55E",
  },

  question: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: "700",
    color: "#111827",
    marginTop: 12,
  },

  answerLabel: {
    fontSize: 12,
    fontWeight: "700",
    color: "#6B7280",
    marginTop: 16,
  },

  correctAnswer: {
    fontSize: 16,
    fontWeight: "800",
    color: "#16A34A",
    marginTop: 4,
  },

  button: {
    backgroundColor: "#208AEF",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 15,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
  },
});
