export default {
  methods: {
    stripTag (str) {
      if (str == null) {
        return ''
      }
      const pattern = /<script([\S\s]*?)>([\S\s]*?)<\/script>/ig
      return str.replace(pattern, '')
    },
    isEmptyObject (obj) {
      for (const key in obj) {
        if (this.hasOwnProperty(key)) {
          return false
        }
      }
      return true
    },
    hasAllProperties (obj, props) {
      for (let i = 0; i < props.length; i++) {
        if (obj === undefined) {
          return true
        }
        // eslint-disable-next-line no-console
        console.log('CHECKING ', obj, props)
        if (!obj.hasOwnProperty(props[i])) {
          return false
        }
      }
      return true
    }
  }
}
