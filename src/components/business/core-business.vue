<template>
    <section class="business">
        <div class="bgi">
            <div class="content">
                <i></i>
                <h2>{{businessTitle}}</h2>
                <p>{{businessDesc}}</p>
            </div>
        </div>
        <router-view @currentHash="hashChange"></router-view>
    </section>
</template>
<script>
    export default {
        data() {
            return {
                businessTitle: '',
                businessDesc: ''
            }
        },
        methods: {
            hashChange(hash) {
                const CURRENT_HASH = window.location.hash.replace('#/core-business/','');
                switch (CURRENT_HASH) {
                    case 'monetary-fund':
                        this.businessTitle = '貨幣基金';
                        this.businessDesc = '原子夸克全球貨幣基金。';
                        break;
                    case 'private-fund':
                        this.businessTitle = '私募基金';
                        this.businessDesc = '原子私募股權投資基金';
                        break;
                    case 'hedge-fund':
                        this.businessTitle = '對沖基金';
                        this.businessDesc = '原子衍盛套利機會基金';
                        break;
                    case 'digital-asset':
                        this.businessTitle = '數字資產';
                        this.businessDesc = '原子數字資產對沖基金';
                        break;
                    default:
                        break;
                }
            }
        }
    }
</script>
<style lang="less">
    .business{
        margin-top: 60px;
        .bgi{
            width: 100%;
            min-width: 1200px;
            height: 400px;
            background-image: url('./core-business.png');
            overflow: hidden;
            .content{
                width: 1200px;
                margin: 134px auto 0;
                color: rgb(228, 231, 238);
                i{
                    display: block;
                    width: 88px;
                    height: 2px;
                    background-color: rgb(216, 216, 216);
                }
                h2{
                    margin: 36px 0 12px;
                    font-size: 30px;
                    font-weight: 500;
                }
                p{
                    font-size: 14px;
                    line-height: 25px;
                }
            }
        }
    }
</style>
