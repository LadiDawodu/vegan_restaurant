import { auth } from "./firebase.jsx";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "./firebase.jsx";
import { ref, set } from "firebase/database";

const signUp = async (username, firstName, lastName, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const userLoggedIn = auth.currentUser;
    if (userLoggedIn) {
      throw new Error("You are already signed in.");
    }

    const user = userCredential.user;
    const userUID = username;

    if (user) {
      await updateProfile(user, {
        displayName: username,
      });

      const userData = {
        username: username,
        firstName: firstName,
        lastName: lastName,
        email: email,
      };

      await set(ref(db, `user/${userUID}`), userData);

      if (user) {
        await sendEmailVerification(auth.currentUser);
      }

      alert("You have successfully signed up");

      return user;
    }
  } catch (error) {
    console.error("registration error", error);
    throw error;
  }
};

const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    const username = user.displayName;

    alert("You have successfuly logged in");

    console.log(username);
  } catch (error) {
    console.error("login error:", error.code, error.message);
    throw error;
  }
};

export { signUp, signIn, auth, sendEmailVerification };
