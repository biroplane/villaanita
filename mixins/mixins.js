export default {
  methods: {
    stripTag (str) {
      if (str == null) {
        return ''
      }
      const pattern = /<script([\S\s]*?)>([\S\s]*?)<\/script>/ig
      return str.replace(pattern, '')
    }
  }
}
