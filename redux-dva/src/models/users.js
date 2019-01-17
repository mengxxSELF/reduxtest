export default {
  namespace: 'users',
  state: [
    {name: 'tom'}
  ],
  reducers: {
    add () {
      return [{name: 'tom2'}]
    }
  }
}