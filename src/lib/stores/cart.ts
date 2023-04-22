import { writable } from 'svelte/store';
import { auth } from '../firebase';
import { db } from '../firebase';
import { doc, setDoc, getDoc, deleteDoc } from 'firebase/firestore';
import type { Item } from '../../routes/items/item';

export interface CartItem extends Item {
	quantity: number;
}

const cart = writable<CartItem[]>([]);

function addItemToCart(item: Item) {
	cart.update((currentCart) => {
		const existingItemIndex = currentCart.findIndex((i) => i.id === item.id);

		if (existingItemIndex !== -1) {
			currentCart[existingItemIndex].quantity += 1;
		} else {
			currentCart.push({ ...item, quantity: 1 });
		}

		return [...currentCart];
	});
}

function updateItemQuantity(itemId: string, quantity: number) {
	cart.update((currentCart) => {
		const itemIndex = currentCart.findIndex((i) => i.id === itemId);

		if (itemIndex !== -1) {
			currentCart[itemIndex].quantity = quantity;
		}

		return [...currentCart];
	});
}

function clearCart() {
	if (auth.currentUser) {
		clearCartInDB();
	}
	cart.set([]);
}

async function fetchCartFromDB() {
	const user = auth.currentUser;
	if (!user) return;

	const cartRef = doc(db, 'carts', user.uid);
	const cartSnap = await getDoc(cartRef);

	if (cartSnap.exists()) {
		cart.set(cartSnap.data().items);
	} else {
		cart.set([]);
	}
}

async function updateCartInDB(items: CartItem[]) {
	const user = auth.currentUser;
	if (!user) return;

	const cartRef = doc(db, 'carts', user.uid);
	await setDoc(cartRef, { items });
}

async function clearCartInDB() {
	const user = auth.currentUser;
	if (!user) return;

	const cartRef = doc(db, 'carts', user.uid);
	await deleteDoc(cartRef);
}

auth.onAuthStateChanged((user) => {
	if (user) {
		fetchCartFromDB();
	} else {
		cart.set([]);
	}
});

cart.subscribe((items) => {
	if (auth.currentUser) {
		updateCartInDB(items);
	}
});

export { addItemToCart, updateItemQuantity, clearCart, fetchCartFromDB, clearCartInDB };
export default cart;
