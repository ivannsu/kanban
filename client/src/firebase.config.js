import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyBYQ_-w91GG0ZB1A21wX8cT5QyBP0I3-UI',
  authDomain: 'kanban-d4f51.firebaseapp.com',
  databaseURL: 'https://kanban-d4f51.firebaseio.com',
  projectId: 'kanban-d4f51',
  storageBucket: 'kanban-d4f51.appspot.com',
  messagingSenderId: '546937754308'
}
firebase.initializeApp(config)

let db = firebase.database()

export default db
