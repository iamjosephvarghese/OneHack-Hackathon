export default {
    getFirebaseConfig: state => state.config,
    getUserType: state => state.userType,
    getCurrentLocation: function (state) {
        return {
            _lat: state.currentLocation.latitude,
            _long: state.currentLocation.longitude
        }
    },
    getMoneyModal: state => state.AddMoney,
    getSupplyModal: state => state.addFoodSupply,
    getRequestModal: state => state.addFoodReq,
    getUser: state => state.User

}
