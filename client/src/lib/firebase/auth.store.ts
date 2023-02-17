import { defineStore } from 'pinia';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  User,
} from 'firebase/auth';

const auth = getAuth();
const provider = new GoogleAuthProvider();

export const useAuthStore = defineStore('auth', {
  state: () => ({
    currentUser: null as User | null,
  }),
  getters: {
    isLoggedIn: (state) => state.currentUser !== null,
  },
  actions: {
    async signIn() {
      try {
        const res = await signInWithPopup(auth, provider);

        this.$patch({ currentUser: res.user });
      } catch (err) {
        if (err instanceof Error) {
          const errorStore = useErrorStore();
          errorStore.setError(err);
          return;
        }
        throw err;
      }
    },
    async signOut() {
      try {
        await signOut(auth);
        this.$reset();
      } catch (err) {
        if (err instanceof Error) {
          const errorStore = useErrorStore();
          errorStore.setError(err);
          return;
        }
        throw err;
      }
    },
    async getAuthState() {
      return new Promise((resolve, reject) => {
        onAuthStateChanged(auth,
          (user) => {
            this.$patch({ currentUser: user });
            resolve(user);
          },
          (error) => {
            const errorStore = useErrorStore();
            errorStore.setError(error);
            reject(error);
          });
      });
    },
  },
});
