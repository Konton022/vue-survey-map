import { auth } from "@/firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";


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
		signInUserAction(){

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
