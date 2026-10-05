import { Pressable, StyleSheet, Text, View } from "react-native";

export default function QuizScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.progress}>Question 1 of 5</Text>

      <View style={styles.progressBar}>
        <View style={styles.progressFill} />
      </View>

      <Text style={styles.topic}>GENERAL KNOWLEDGE</Text>

      <Text style={styles.question}>
        Which planet is known as the Red Planet?
      </Text>

      <View style={styles.answers}>
        <Answer text="Earth" />
        <Answer text="Mars" />
        <Answer text="Jupiter" />
        <Answer text="Venus" />
      </View>
    </View>
  );
}

function Answer({ text }: { text: string }) {
  return (
    <Pressable style={styles.answer}>
      <Text style={styles.answerText}>{text}</Text>
    </Pressable>
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
    width: "20%",
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

  answerText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },
});
