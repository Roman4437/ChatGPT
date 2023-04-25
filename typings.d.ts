export interface Message {
  text: { role: string, content: string }
  createdAt: admin.firestore.Timestamp,
  user: {
    _id: string,
    name: string,
    pfp: string
  }
}