export default {
  changeCity (state, city) {
    try {
      localStorage.setItem('city', city)
      console.log('mutation' + city)
      state.city = city
    } catch (e) { this.$throw(e) }
  }
}
