import { db } from '../firebase';
import type { Item } from '../../routes/items/item';
import { collection, getDocs, doc, getDoc, addDoc } from 'firebase/firestore';

export const getAllItems = async () => {
	const itemCollection = collection(db, 'items');
	const snapshot = await getDocs(itemCollection);
	return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as Item[];
};

export const getItemById = async (itemId: string) => {
	const itemDoc = doc(db, 'items', itemId);
	const docSnapshot = await getDoc(itemDoc);
	return { id: docSnapshot.id, ...docSnapshot.data() } as Item;
};
export const addItem = async (item: Omit<Item, 'id'>) => {
	const itemCollection = collection(db, 'items');
	const docRef = await addDoc(itemCollection, item);
	return docRef.id;
};
