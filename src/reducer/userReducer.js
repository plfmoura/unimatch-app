import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        id: 1,
        given_name: "Pedro",
        picture: 'https://avatars.githubusercontent.com/u/107577096?v=4'
    },
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        //Add User
        setUser: (state, action) => {
            state.user = action.payload;
        },
        //Delete the User
        deleteUser: async (state) => {
            state.user = null;
            //Clean the "localStorage"
            await AsyncStorage.removeItem("@auth-token");
            await AsyncStorage.removeItem("@user");
        },
    },
});

// Action creators are generated for each case reducer function
export const { setUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
