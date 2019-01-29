<template>
    <footer>
        <div class="content">
            <div class="left">
                <div class="logo">
                    <img src="./footer-logo.png" alt="">
                    <p>@2018 All Rights Reserved</p>
                </div>
            </div>
            <div class="right">
                <div class="nav">
                    <ul v-for="(nav,index) in footNav" :key="index">
                        <h3>{{nav.title}}</h3>
                        <li v-for="(item,index) in nav.numbers" :key="index"><a href="">{{item.name}}</a></li>
                    </ul>
                </div>
                <div class="align-line"></div>
                <div class="phone-num">
                    <p>原子貴賓熱線</p>
                    <h3>+852-37289188</h3>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
    export default {
        data() {
            return {
                footNav: [
                    {
                        title: '核心業務',
                        numbers: [
                            {
                                name: '貨幣基金',
                                path: ''
                            },
                            {
                                name: '私募基金',
                                path: ''
                            },
                            {
                                name: '對衝基金',
                                path: ''
                            },
                            {
                                name: '數字資產',
                                path: ''
                            }
                        ]
                    },
                    {
                        title: '市場動態',
                        numbers: [
                            {
                                name: '過周說市',
                                path: ''
                            },
                            {
                                name: '月度市場總結',
                                path: ''
                            },
                            {
                                name: '季度投資研報',
                                path: ''
                            }
                        ]
                    },
                    {
                        title: '投資服務',
                        numbers: [
                            {
                                name: '訂閱流程',
                                path: ''
                            },
                            {
                                name: '文檔下載',
                                path: ''
                            },
                            {
                                name: '常見問題',
                                path: ''
                            },
                            {
                                name: '免責聲明',
                                path: ''
                            }
                        ]
                    },
                    {
                        title: '關於我們',
                        numbers: [
                            {
                                name: '企業簡介',
                                path: ''
                            },
                            {
                                name: '團隊介紹',
                                path: ''
                            },
                            {
                                name: '加入我們',
                                path: ''
                            },
                            {
                                name: '聯繫我們',
                                path: ''
                            }
                        ]
                    },
                ]
            }
        }
    }
</script>
<style lang="less">
    footer{
        width: 100%;
        min-width: 1200px;
        height: 368px;
        background-image: url('./footer-bg.png');
        overflow: hidden;
        .content{
            width: 1200px;
            margin: 60px auto 0;
            display: flex;
            justify-content: space-between;
            .left{
                width: 160px;
                .logo{
                    img{
                        width: 120px;
                        height: 38px;
                    }
                    p{
                        padding-top: 6px;
                        font-size: 12px;
                        text-align: center;
                    }
                }
            }
            .right{
                width: 820px;
                display: flex;
                justify-content: space-between;
                .nav{
                    width: 540px;
                    display: flex;
                    justify-content: space-around;
                    h3{
                        color: #e4e7ee;
                        font-size: 14px;
                    }
                    li{
                        padding: 6px 0;
                        a{
                            color: #adb1bd;
                            font-size: 12px;
                            &:hover{
                                color: #fff;
                            }
                        }
                    }
                }
                .align-line{
                    width: 1px;
                    height: 136px;
                    background-color: #49515c;
                }
                .phone-num{
                    p{
                        font-size: 14px;
                        margin-bottom: 10px;
                    }
                }
            }
        }
    }
</style>
