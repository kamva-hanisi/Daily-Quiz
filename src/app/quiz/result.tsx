import { router, useLocalSearchParams } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function QuizResultScreen() {
  const { score } = useLocalSearchParams<{ score: string }>();

  const finalScore = Number(score ?? 0);
  const totalQuestions = 5;
  const percentage = Math.round((finalScore / totalQuestions) * 100);

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🎉</Text>

      <Text style={styles.title}>Quiz Complete!</Text>

      <Text style={styles.subtitle}>Great job! Here are your results.</Text>

      <View style={styles.scoreCard}>
        <Text style={styles.scoreLabel}>Your Score</Text>

        <Text style={styles.score}>{percentage}%</Text>

        <Text style={styles.correct}>
          {finalScore} / {totalQuestions} Correct
        </Text>
      </View>

      <View style={styles.streakCard}>
        <Text style={styles.streak}>🔥 1 Day Streak</Text>
        <Text style={styles.xp}>+{percentage} XP</Text>
      </View>

      <Pressable
        style={styles.reviewButton}
        onPress={() =>
          router.push({
            pathname: "/quiz/review",
            params: {
              score: finalScore.toString(),
            },
          })
        }
      >
        <Text style={styles.reviewButtonText}>Review Answers</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => router.replace("/")}>
        <Text style={styles.buttonText}>Done</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FC",
    padding: 20,
    paddingTop: 80,
    alignItems: "center",
  },

  emoji: {
    fontSize: 56,
    marginBottom: 15,
  },

  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#111827",
    textAlign: "center",
  },

  subtitle: {
    fontSize: 16,
    color: "#6B7280",
    marginTop: 8,
    textAlign: "center",
  },

  scoreCard: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 30,
    marginTop: 40,
    alignItems: "center",
  },

  scoreLabel: {
    fontSize: 15,
    fontWeight: "600",
    color: "#6B7280",
  },

  score: {
    fontSize: 58,
    fontWeight: "900",
    color: "#208AEF",
    marginTop: 8,
  },

  correct: {
    fontSize: 17,
    fontWeight: "700",
    color: "#111827",
    marginTop: 5,
  },

  streakCard: {
    width: "100%",
    backgroundColor: "#FFF7ED",
    borderRadius: 18,
    padding: 20,
    marginTop: 16,
    alignItems: "center",
  },

  streak: {
    fontSize: 18,
    fontWeight: "800",
    color: "#111827",
  },

  xp: {
    fontSize: 15,
    fontWeight: "700",
    color: "#F97316",
    marginTop: 6,
  },

  button: {
    width: "100%",
    backgroundColor: "#208AEF",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 25,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
  },
  reviewButton: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#208AEF",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 25,
  },

  reviewButtonText: {
    color: "#208AEF",
    fontSize: 16,
    fontWeight: "800",
  },
});
