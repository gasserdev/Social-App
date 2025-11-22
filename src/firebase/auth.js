import { auth, googleProvider } from './config.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';

export async function register(email, password, name) {
  const userCred = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(userCred.user, { displayName: name });
  return userCred;
}


export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function loginWithGoogle() {
  return signInWithPopup(auth, googleProvider);
}

export function onAuthStateChanged(callback) {
  auth.onAuthStateChanged(callback);
}

export function setUserName(name){
  if (auth.currentUser){
    return updateProfile(auth.currentUser ,{ displayName : name })
  }
}
