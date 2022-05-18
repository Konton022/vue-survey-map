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
		async registerUp({ commit }, { email, password, name }) {
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
                commit('setUser', res.user);
                commit('setUserAuth', true);
            } else {
                throw new Error('could not complete signIn');
            }
		},
        async loginOut({ commit }) {
            await signOut(auth);
            commit('setUser', null);
            commit('setUserUid', null);
            commit('setUserAuth', false);
        }    
	}, 
    mutations:{
        SET_USER(user){
            this.user = user
        },
        SET_USER_AUTH(status){
            this.isUserAuth = status
        }
    }
};

export default user
