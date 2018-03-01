export default {
    SET_USERTYPE (state, usertype) {
        state.usertype = usertype
    },
    SET_CURRENT_LOCATION (state, currentLocation) {
        state.currentLocation = currentLocation
    },
    TOGGLE_MONEY (state) {
        state.AddMoney = !state.AddMoney
    },
    TOGGLE_REQUEST (state) {
        state.addFoodReq = !state.addFoodReq
    },
    TOGGLE_SUPPLY (state) {
        state.addFoodSupply = !state.addFoodSupply
    }
}
