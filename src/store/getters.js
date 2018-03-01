export default {
    getFirebaseConfig: state => state.config,
    getUserType: state => state.userType,
    getCurrentLocation: function (state) {
        return {
            _lat: state.currentLocation.latitude,
            _long: state.currentLocation.longitude
        }
    }
}
