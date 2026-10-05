import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Good morning 👋</Text>
          <Text style={styles.title}>Daily Quiz</Text>
        </View>

        <View style={styles.streakBadge}>
          <Text style={styles.streakIcon}>🔥</Text>
          <Text style={styles.streakText}>0</Text>
        </View>
      </View>

      <View style={styles.quizCard}>
        <Text style={styles.cardLabel}>TODAY'S QUIZ</Text>

        <Text style={styles.quizTitle}>Test Your Knowledge</Text>

        <Text style={styles.quizDescription}>
          Answer 5 questions and keep your daily streak alive.
        </Text>

        <View style={styles.quizInfo}>
          <Text style={styles.infoText}>📝 5 Questions</Text>
          <Text style={styles.infoText}>⏱️ Daily</Text>
        </View>

        <Pressable style={styles.button} onPress={() => router.push("/quiz")}>
          <Text style={styles.buttonText}>Start Today's Quiz</Text>
        </Pressable>
      </View>

      <Text style={styles.sectionTitle}>Choose a Topic</Text>

      <View style={styles.topicGrid}>
        <TopicCard icon="🌎" title="General Knowledge" />
        <TopicCard icon="🔢" title="Maths" />
        <TopicCard icon="💻" title="Coding" />
        <TopicCard icon="📚" title="English" />
      </View>
    </View>
  );
}

function TopicCard({ icon, title }: { icon: string; title: string }) {
  return (
    <Pressable style={styles.topicCard}>
      <Text style={styles.topicIcon}>{icon}</Text>
      <Text style={styles.topicTitle}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FC",
    padding: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 28,
  },

  greeting: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 4,
  },

  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#111827",
  },

  streakBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF4E5",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 20,
  },

  streakIcon: {
    fontSize: 18,
    marginRight: 5,
  },

  streakText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
  },

  quizCard: {
    backgroundColor: "#208AEF",
    borderRadius: 24,
    padding: 24,
    marginBottom: 30,
  },

  cardLabel: {
    color: "#DCEEFF",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1,
    marginBottom: 10,
  },

  quizTitle: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "800",
    marginBottom: 10,
  },

  quizDescription: {
    color: "#EAF5FF",
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 20,
  },

  quizInfo: {
    flexDirection: "row",
    gap: 18,
    marginBottom: 22,
  },

  infoText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "600",
  },

  button: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 15,
    borderRadius: 14,
    alignItems: "center",
  },

  buttonText: {
    color: "#208AEF",
    fontSize: 16,
    fontWeight: "700",
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#111827",
    marginBottom: 15,
  },

  topicGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 12,
  },

  topicCard: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 18,
    minHeight: 115,
    justifyContent: "center",
  },

  topicIcon: {
    fontSize: 28,
    marginBottom: 10,
  },

  topicTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#111827",
  },
});
