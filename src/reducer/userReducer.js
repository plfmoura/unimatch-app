import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
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
