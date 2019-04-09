<template>
    <div class="cms-container">
        <h3>发表评论</h3>
        <hr>
        <textarea cols="30" rows="10" maxlength="250" placeholder="请收集吐槽能量。。"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <div class="cms">
            <div class="cms-item" v-for="(item,i) in comentInfo" :key="item.id">
                <div class="cms-title">
                    第{{i+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time |timeF}}
                </div>
                <div class="cms-body">
                    {{item.content === 'undefined' ? '懒的一批！！':item.content}}
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="addMore">加载更多</mt-button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            comentInfo:[],
            pageIndexs:1
        }
    },
    created(){
        this.getcomentsinfo()
    },
    methods:{
        getcomentsinfo(){
            this.$http.get('api/getcomments/'+ this.id +'?pageindex='+this.pageIndexs).then(
                res =>{
                    if(res.body.status ===0){
                        this.comentInfo =this.comentInfo.concat(res.body.message) 
                        console.log(this.comentInfo);
                        
                    }
                },
                res =>{
                    alert('失败了老铁')
                }
            )
        },
        addMore(){
            this.pageIndexs++;
            this.getcomentsinfo;
            console.log(123);
            
        }
    },
    props:['id']
}
</script>

<style lang="scss" scoped>
    .cms-container{
        h3{
            font-size: 18px;
        }
        textarea{
            font-size: 14px;
            height: 85px;
            margin: 0;
        }
        .cms{
            margin:5px 0;
            .cms-item{
                font-size: 13px;
                .cms-title{
                    line-height: 30px;
                    background-color: #ccc;
                }
                .cms-body{
                    line-height: 35ps;
                    text-indent: 2em;
                }
            }
        }
    }
</style>
