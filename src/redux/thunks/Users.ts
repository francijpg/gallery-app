import { AppThunk } from "../../types/types";
import { User, SignUpData, SignInData } from "../../types/user";
import { setNeedVerification, setUser, setLoading, setSignOut, setSuccess, setError } from "../actions/authActions";
import services from "../../services";

const { auth, firestore, firebaseApp, authGitHub, authTwitter, authFacebook } = services

export const checkUserExists = (): AppThunk => {
  return async dispatch => {
    try {
      dispatch(setLoading(true));
      const unsubscribe = auth.onAuthStateChanged(async (user) => {
        if (user) {
          const { uid, emailVerified } = user;
          dispatch(setLoading(true));
          await dispatch(getUserById(uid));
          if (!emailVerified && user.email?.trim().length === 0) {
            dispatch(setNeedVerification(true));
          }
        }
        dispatch(setLoading(false));
      });
      dispatch(setLoading(false));

      return () => {
        unsubscribe()
      }
    } catch (err) {
      dispatch(setError(err.message));
    }
  }
}

export const signUp = (data: SignUpData, onError: () => void): AppThunk => {
  return async dispatch => {
    try {
      const { email, password } = data;
      const res = await auth.createUserWithEmailAndPassword(email, password);
      if (res.user) {
        const userData: User = {
          email: data.email,
          firstName: data.firstName,
          id: res.user.uid,
          createdAt: firebaseApp.firestore.FieldValue.serverTimestamp()
        };
        await firestore.collection('/users').doc(res.user.uid).set(userData);
        await res.user.sendEmailVerification();
        dispatch(setNeedVerification(true));
        dispatch(setUser(userData));
      }
    } catch (err) {
      onError();
      dispatch(setError(err.message));
    }
  }
}

export const getUserById = (id: string): AppThunk => {
  return async dispatch => {
    try {
      const user = await firestore.collection('users').doc(id).get();
      if (user.exists) {
        const userData = user.data() as User;
        dispatch(setUser(userData));
      }
    } catch (err) {
      dispatch(setError(err.message));
    }
  }
}

export const signIn = (data: SignInData, onError: () => void): AppThunk => {
  const { email, password } = data;
  return async dispatch => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      onError();
      dispatch(setError(err.message));
    }
  }
}

export const signInWithGitHub = (github: () => void): AppThunk => {
  return async dispatch => {
    try {
      await auth.signInWithPopup(authGitHub)
        .then(async (result) => {
          if (result.user) {
            const userData: User = {
              email: result.user.email ? result.user.email : "",
              firstName: result.user.displayName ? result.user.displayName : "",
              id: result.user.uid,
              createdAt: firebaseApp.firestore.FieldValue.serverTimestamp()
            };
            await firestore.collection('/users').doc(result.user.uid).set(userData);
            dispatch(setUser(userData));
            dispatch(setNeedVerification(false));
          }
        })
        .catch(err => {
          dispatch(setError(err.message));
        })
    } catch (err) {
      dispatch(setError(err.message));
    }
  }
}

export const signInWithTwitter = (twitter: () => void): AppThunk => {
  return async dispatch => {
    try {
      await auth.signInWithPopup(authTwitter)
        .then(async (result) => {
          if (result.user) {
            const userData: User = {
              email: result.user.email ? result.user.email : "",
              firstName: result.user.displayName ? result.user.displayName : "",
              id: result.user.uid,
              createdAt: firebaseApp.firestore.FieldValue.serverTimestamp()
            };
            await firestore.collection('/users').doc(result.user.uid).set(userData);
            dispatch(setUser(userData));
            dispatch(setNeedVerification(false));
          }
        })
        .catch(err => {
          dispatch(setError(err.message));
        })
    } catch (err) {
      dispatch(setError(err.message));
    }
  }
}

export const signInWithFacebook = (facebook: () => void): AppThunk => {
  return async dispatch => {
    try {
      await auth.signInWithPopup(authFacebook)
        .then(async (result) => {
          if (result.user) {
            const userData: User = {
              email: result.user.email ? result.user.email : "",
              firstName: result.user.displayName ? result.user.displayName : "",
              id: result.user.uid,
              createdAt: firebaseApp.firestore.FieldValue.serverTimestamp()
            };
            await firestore.collection('/users').doc(result.user.uid).set(userData);
            dispatch(setUser(userData));
            dispatch(setNeedVerification(false));
          }
        })
        .catch(err => {
          dispatch(setError(err.message));
        })
    } catch (err) {
      dispatch(setError(err.message));
    }
  }
}

export const signOut = (): AppThunk => {
  return async dispatch => {
    try {
      dispatch(setLoading(true));
      await auth.signOut();
      dispatch(setSignOut());
    } catch (err) {
      dispatch(setError(err.message));
    }
  }
}

export const sendPasswordResetEmail = (email: string, successMsg: string): AppThunk => {
  return async dispatch => {
    try {
      await auth.sendPasswordResetEmail(email);
      dispatch(setSuccess(successMsg));
    } catch (err) {
      dispatch(setError(err.message));
    }
  }
}