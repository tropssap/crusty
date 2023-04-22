import { auth } from '../firebase';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

export async function loginUser(email: string, password: string): Promise<void> {
	await signInWithEmailAndPassword(auth, email, password);
}

export function signOutUser(): Promise<void> {
	return signOut(auth);
}
