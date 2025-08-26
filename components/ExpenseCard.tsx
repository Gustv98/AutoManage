// ExpenseCard.tsx
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Expense = {
  date: string;
  title: string;
  value: string;
};

type Props = {
  expenses: Expense[];
  onAdd?: () => void;
  onEdit?: (expense: Expense) => void;
};

export default function ExpenseCard({ expenses, onAdd, onEdit }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>DESPESAS:</Text>

      {/* Cabeçalho da tabela */}
      <View style={styles.tableHeader}>
        <Text style={styles.headerText}>DATA</Text>
        <Text style={styles.headerText}>TÍTULO</Text>
        <Text style={styles.headerText}>VALOR</Text>
      </View>

      {/* Linhas da tabela */}
      {expenses.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => onEdit && onEdit(item)}
          style={styles.tableRow}
        >
          <Text style={styles.cell}>{item.date}</Text>
          <Text style={styles.cell}>{item.title}</Text>
          <Text style={styles.cell}>{item.value}</Text>
        </TouchableOpacity>
      ))}

      {/* Botões de ação */}
      <View style={styles.actions}>
        <TouchableOpacity onPress={() => onEdit && onEdit(expenses[0])}>
          <FontAwesome name="edit" size={28} color="#555" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onAdd} style={styles.addButton}>
          <FontAwesome name="plus" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#E5E5E5", // fundo cinza
    padding: 10,
    borderRadius: 6,
    width: 320,
  },
  title: {
    textAlign: "center",
    fontWeight: "500",
    marginBottom: 6,
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#D3D3D3",
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  headerText: {
    flex: 1,
    fontWeight: "600",
    fontSize: 12,
    textAlign: "center",
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  cell: {
    flex: 1,
    fontSize: 12,
    textAlign: "center",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10,
    alignItems: "center",
    gap: 10,
  },
  addButton: {
    backgroundColor: "#888",
    borderRadius: 20,
    padding: 4,
  },
});
