export interface Task {
  id: string
  title: string
  description: string
  date: string
  time: string
  priority: "low" | "medium" | "high"
  status: "todo" | "doing" | "done"
}
