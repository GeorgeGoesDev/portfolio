import { dbConnection } from './firebaseConfig';
import { collection, getDocs, query } from 'firebase/firestore';


const collectionName = 'Projects';
const highscoresRef = collection(dbConnection, collectionName);

export const getProjects = async () => {
    const q = query(highscoresRef);
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc: any) => doc.data());
}