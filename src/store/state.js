var defaultcity = '北京'
try {
  if (localStorage.city) {
    defaultcity = localStorage.city
  }
} catch (e) { this.$throw(e) }
export default {
  city: defaultcity || '北京'
}
