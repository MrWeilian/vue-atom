<template>
    <nav>
        <div class="nav-wrapper">
            <div class="nav-icon"></div>
            <ul class="nav-list">
                <li class="nav-item active"><router-link to="/home">首頁</router-link></li>
                <li class="nav-item">
                    核心業務
                    <ul>
                        <li><router-link to="/core-business/monetary-fund">貨幣基金</router-link></li>
                        <li><router-link to="/core-business/private-fund">私募基金</router-link></li>
                        <li><router-link to="/core-business/hedge-fund">對沖基金</router-link></li>
                        <li><router-link to="/core-business/digital-asset">數字資產</router-link></li>
                    </ul>
                </li>
                <li class="nav-item">
                    資訊中心
                    <ul>
                        <li><router-link to="/">最新資訊</router-link></li>
                        <li><router-link to="/">市場動態</router-link></li>
                        <li><router-link to="/">訂閱流程</router-link></li>
                        <li><router-link to="/">常見問題</router-link></li>
                    </ul>
                </li>
                <li class="nav-item">
                    關於我們
                    <ul>
                        <li><router-link to="/">企業簡介</router-link></li>
                        <li><router-link to="/">團隊介紹</router-link></li>
                    </ul>
                </li>
                <li class="nav-item"><router-link to="/call">聯繫我們</router-link></li>
                <li class="nav-item"><router-link to="/join">加入我們</router-link></li>
            </ul>
        </div>
    </nav>
</template>
<script>
    export default {
        
    }
</script>
<style lang="less">
    @import '../../common/less/base-less.less';

    nav{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        min-width: 1200px;
        z-index: 8;
        background-color: @theme-color-item;
        .nav-wrapper{
            width: 1200px;
            height: 60px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .nav-icon{
                width: 120px;
                height: 39px;
                background-image: url('./header-logo.png');
                background-position: center;
                background-repeat: no-repeat;
            }
            .nav-list{
                font-size: 0;
                .nav-item{
                    position: relative;
                    display: inline-block;
                    padding: 0 30px;
                    font-size: 14px;
                    height: 60px;
                    line-height: 60px;
                    ul{
                        position: absolute;
                        top: 60px;
                        left: 0;
                        width: 100%;
                        padding: 15px 0;
                        background: #0e121a;
                        transition: .3s ease;
                        transform: scaleY(0);
                        transform-origin: top;
                        li{
                            height: 32px;
                            line-height: 32px;
                            text-align: center;
                            padding: 0;
                            &:hover{
                                background-color: rgba(154,158,168,.1);
                                a{
                                    color: #fff;
                                }
                            }
                        }
                    }
                    a{
                        padding: 6px 2px 18px 2px;
                        box-sizing: border-box;
                        color: @font-color;
                    }
                    &.active{
                        a{
                            color: @active-color;
                            border-bottom: 2px solid @active-color;;
                        }
                    }
                    &:hover{
                        color: @active-color;
                        ul{
                            transform: scaleY(1);
                        }
                    }
                }
            }
        }
    }
    
</style>
