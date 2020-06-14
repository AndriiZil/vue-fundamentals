export default {
  data() {
    return {
      searchName: '',
      names: ['Vlad', 'Andrii', 'Max', 'Elena', 'Igor']
    }
  },
  computed: {
    filteredName() {
      return this.names.filter(name => {
        return name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1
      })
    }
  }
}