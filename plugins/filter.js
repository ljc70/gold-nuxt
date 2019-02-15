import Vue from 'vue'
export function trim (str) {
  return str.replace(/(^\s*)(\s*$)/g, '')
}
const filters = {
  trim
}
export default filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})