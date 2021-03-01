const url = 'https://reqres.in/api/users?page=2'
const my_url = 'http://localhost:3000/test';
const vm = {
  data() {
    return {
      users: []
    }
  },
  mounted() {
    axios.get(my_url).then(res => {
      this.users = res.data.data;
      console.log(this.users);
    })
  },
  methods:{
    async deleteUser(index){
      this.users.splice(index,1)
    }
  }
};

Vue.createApp(vm).mount('#app')