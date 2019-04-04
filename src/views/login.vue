<template>
    <Layout>
        <Row>
            <Col span="6" offset="9" style="padding-top:10rem">
                <Card>
                    <p slot="title">
                        <Icon type="md-home" size="20" />平台权限系统
                    </p>
                    <Form ref="user" :model="user" :rules="ruleLogin" :label-width="40">
                        <FormItem label="账号" prop="UserCid">
                            <Input type="text" v-model="user.UserCid" />
                        </FormItem>
                        <FormItem label="密码" prop="password">
                            <Input type="password" v-model="user.Password"/>
                        </FormItem>
                        <Button type="primary" @click="handleSubmit()" long>登录</Button>
                    </Form>
                </Card>
            </Col>
        </Row>
    </Layout>
</template>
<script>
    export default {
        created(){
        },
        data(){
            const validateName = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please enter your name'));
                } else {
                    if (this.loginUser.name !== '') {
                        // 对第二个密码框单独验证
                        this.$refs.loginUser.validateField('password');
                    }
                    callback();
                }
            };
            const validatePassword = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please enter your password again'));
                }  else {
                    callback();
                }
            };
            
            return {
                user: {
                    UserCid: 'admin',
                    Password: 'admin',
                },
                ruleLogin: {
                    name: [
                        { validator: validateName, trigger: 'blur' }
                    ],
                    password: [
                        { validator: validatePassword, trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit () {
                // this.$http.post('http://localhost:8084/api/User/UserLogin',this.user).then(res=>{
                //     console.log(res.data);
                // })
                this.$store.dispatch('SystemUserLogin',this.user).then(res=>{
                    console.log(res);
                   if(res!=null){
                       this.$router.push('/');
                   }else{
                       this.$Message.success("登录失败！");
                   }
                });
            }
        }
    }
</script>
<style scoped>
    .ivu-layout{
        background-image: url('/static/imgs/login_bg.jpg');
        background-size: cover;
        display: block;
        height: 100%;
        position: fixed;
        bottom: 0;
        top: 0;
        left: 0;
        right: 0;
    }
</style>
