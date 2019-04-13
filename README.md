Casso OBJ


1. Mint-ui
2.Mui
3.Vue
4.Webpack4.+


坑一：在手机端测试的时候发现photos.vue里面的顶部导航点击“家居生活”，也就是没有数据的导航项时不会清空数据；
方案：点击方法使用mui里面内置的绑定事件的关键字：@tap="获取图片的方法" 而不是使用@click

如何使用手机测试项目？
    1.首先，在cmd中运行ipconfig查看当前局域网wifi 的ip地址，
    2.然后在package.json 中添加--host 当前局域网wifi 的ip地址
        "dev": "webpack-dev-server --open --port 3001 --contentBase src --hot --host 172.16.1.16"
    3.在手机浏览器上输入对应地址就可以查看项目（设置host之后在电脑运行，直接复制地址栏的http://localhost:3001/#/home/photos 到手机浏览器就可以了--保证手机连接了该网络）


Vuex是Vue配套的公共数据管理工具，公共数据存储在Vuex中，项目中所有组件都可以调用；不局限于嵌套组件，平行组件可用；
父传子--属性绑定
子传父--子组件调用父组件内部的事件this.$emit('父组件绑定的事件名称',需要传输的数据)；