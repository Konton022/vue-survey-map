import { auth } from "@/firebase/config";
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from "firebase/auth";

const user = {
    namespaced: true,
    state() {
        return {
            user: null,
            isUserAuth: false,
        };
    },
    actions: {
		async registerUserAction({ commit }, { email, password, name }) {
            const res = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            
            if (res) {
                console.log("fb res", res.user);
                updateProfile(res.user, { displayName: name });
                commit('SET_USER', res.user);
                commit('SET_USER_AUTH', true);
            } else {
                throw new Error('could not complete registration');
            }
        },
		async signInUserAction({commit}, {email, password}){
            const res = await signInWithEmailAndPassword(auth, email, password);
            if (res) {
                console.log("fb res", res.user);
                commit('SET_USER', res.user);
                commit('SET_USER_AUTH', true);
            } else {
                throw new Error('could not complete signIn');
            }
		},
        async loginOutAction({ commit }) {
            await signOut(auth);
            commit('SET_USER', null);
            commit('SET_USER_AUTH', false);
        }    
	}, 
    mutations:{
        SET_USER(state, user){
            state.user = user
        },
        SET_USER_AUTH(state, status){
            state.isUserAuth = status
        }
    },
    getters: {
        GET_USER(state){
            return state.user
        }
    }
};

export default user
