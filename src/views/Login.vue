<template>

<form>
    <input type="text" id="email" v-model="email"/>
    <input type="password" id="password" v-model="password"/>
    <button type="button" @click="postData">post</button>
</form>
    
</template>

<script>
const Host = "http://192.168.93.129:8000/user/login";


export default {
    data: function(){
        return {
            email : '',
            password: ''
        }
    },
    methods:{
        postData() {
            const str = {
                email:this.email,
                password:this.password
            }

            this.$axios
            .post(Host,str)
            .then((res) => {
                if(res.status === 200){
                    this.$cookies.set("token",res.data[1],"60*30");
                    console.log(1)
                }
            })
            .catch((error) => {
                console.log(error);
            })
        
        }
    }
    
}



</script>

