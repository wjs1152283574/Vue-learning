<template>
    <div>
       <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in neslist" :key="item.id">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h3>{{item.title}}</h3>
							<p class='mui-ellipsis'>
                                <span>发表时间:{{item.add_time | timeF}}</span>
                                <span>点击：{{item.click}} 次</span>
                            </p>
						</div>
					</a>
				</li>
			</ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            neslist:[]
        }
    },
    created(){
        this.getData()
    },
    methods:{
        getData(){
            this.$http.get('api/getnewslist')
            .then(res => {
                if(res.body.status === 0){
                    console.log(res.bodyText);
                    this.neslist = res.body.message;
                }
            },res => {

            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .mui-table-view{
        li{
            h3{
                font-size: 14px;
            }
        }
    }
    .mui-ellipsis{
        font-size: 11px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
    }
</style>
