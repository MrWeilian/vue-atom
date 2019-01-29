<template>
    <section class="home">
        <div class="home-bgi"></div>
        <section class="home-banner">
            <div class="banner-content">
                <h1>原子資本</h1>
                <vline></vline>
                <p>您最值得信賴的投資專家</p>
                <div class="home-more">
                    <router-link to="/about/company">了解详情&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&gt;</router-link>
                </div>
            </div>
            <div class="business">
                <h2>核心業務</h2>
                <vline></vline>
                <div class="business-wrap">
                    <div class="business-item" v-for="(item,index) in businessItem" :key="index">
                        <div class="icon" :style="item.icon"></div>
                        <p>{{item.title}}</p>
                        <p>{{item.desc}}</p>
                    </div>
                </div>
            </div>
            <div class="news">
                <h2>最新資訊</h2>
                <vline></vline>
                <carousel :autoplay="autoplay" :dots="dots" :trigger="trigger">
                    <CarouselItem class="news-item" v-for="(item,index) in newsItem" :key="index">
                        <div class="bgi" :style="item.newImg"></div>
                        <div class="text">
                            <h3>{{item.title}}</h3>
                            <p>{{item.text}}</p>
                            <a href="" class="detail">了解詳情</a>
                        </div>
                    </CarouselItem>
                </carousel>
            </div>
            <div class="market">
                <h2>市場資訊</h2>
                <vline></vline>
                <div class="market-content">
                    <div class="market-item" v-for="(item,index) in market" :key="index" :style="item.bgi">
                        <h2>{{item.bTitle}}</h2>
                        <div class="detail">
                            <h3>{{item.sTitle}}</h3>
                            <p>{{item.desc}}</p>
                            <a href=""></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="partner">
                <h2>合作夥伴</h2>
                <vline></vline>
                <div class="partner-logo">
                    <i v-for="(item,index) in partnerLogo" :key="index" :style="item"></i>
                </div>
            </div>
            <div class="contact">
                <h2>聯繫我們</h2>
                <vline></vline>
                <div class="email">
                    <p>郵箱：support@atomgp.com</p>
                    <a href="">聯繫我們</a>
                </div>
            </div>
        </section>
    </section>
</template>
<script>
    import carousel from '../carousel/carousel.vue'
    import vline from '../vline/vline.vue'

    export default {
        data() {
            return {
                businessItem: [
                    {
                        icon: 'background-image: url(data:image/png;base64,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)',
                        title: '貨幣基金',
                        desc: '原子夸克全球貨幣基金'
                    },
                    {
                        icon: 'background-image: url(data:image/png;base64,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)',
                        title: '私募基金',
                        desc: '原子私募股權投資基金'
                    },
                    {
                        icon: 'background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAyCAYAAADx/eOPAAAAAXNSR0IArs4c6QAACeRJREFUaAXVWg1sXEcR3nl35387TkgdnERVIT+kAUuURi0qCGRRiO3Edl0n5yROnPPPlaoIUZTQqiEk1Cmi0EpuqVAl/53tOCZ3KW7sBINAalBKoBJRKIG0TeOggPKj2IS68fkn9r23fPvu9t07+3z37JyNWMme2d2Z2Znd2dnZfUcswYVzrni6uu/TJtS1jGsrmUKZmsbSFcbGNWJ+YsoA2dQPbeqy/urq/PFEDk+JEObxvJkdoIlCxnkp51TAGF9kQe4kETvNiHrtPKm3urrsigWemCR3ZUxLm7dc4+wpztlXYIA95khxOmHYeeJ0OCuDfu50OsfikEftnpMxLe3efLjOi3Cph6JJJUaDjNg19N+Aktc50QBpPBswFwMuh+G5mIAV4IX3TSlE1xTOf5iVoXhglDqlN2Z1VsZ4PG+sCzC1AUrClSKKBuXfYYx6yebodVc9/n5Eb5RKR0d3zh0tUMw1XgLer8NFUyPIiH2ASdnjrq7oi2iPUbFsTEubr0TTeCdnPDMsj0aJ+M+SbUkNVVWPD4TbZ4f5fL7U236tkjM6CPkrJTdBOPAX6lzOgyFcdkWFloxpbPXuh7vUY0VC9BTAbLbYUlLqa7eXXo8qeQ6NHs+plAAb/DZn2nOMs8VSBMbuUZak7qotLR2WbdFgTGMwY0kfj2id8O+tkhlL3092XlZXte3vsi3R8MiRk4tHJkYOw/U2Sdkw6EKyTSmqqnL+S7ZNhdM3oIliaIS/bjYEq/HbtOT0h+bTEDF8ZeXmj9wuZwnOqB9LdaDHZ8dVfrKlp8fk5rI3CGc0prnVuxczUxMmp4bsdKVIDBRumz8Me0R7wlWxD4fsNqxK8HDlPE+7NdYFd4+qd1Q3a2w/tpmpag9U1ZkUoqa66oon5k/12JKb2rzbEfW6DCqFXoah3zPqIWSahe3tvhWkaoJR78Os/P7zeau+NZVxIetuV8UvsFKHjDE1vrfZ433MqIeQacZMqPyQDL/6Zk9Xyjds2DA5lXGh68HwzI7JcbGHXjp79qxD1gWMMMbj8eXBkN0GASk1dU7nf4y6RaSr68RSi6SWycQ5syhdcQPeEkzQc/W5v/U/aRYQYUyA8ZfQKd2rx1299W0zsRW8uc13wH9n9EJTR/f9VuhnQ4P05mNE1HqDh7MDnZ19WbJuGNPS4fsyosTGYAcFFLvyrCSyCps83npN055HFMxh6uRbrUd++WmrvFbpHvjcqteF+4fol44H/E9LXsMYVdMqjEZintpdzouybgXCkB9hMn5gon2XJpYkLDuQcsX+hccZ4yDFCustiUgjIzpwphyW7VYg0p2fwJB9khZ+3bdiWeZjib58Sfk2tuw4klp/sM7XIwFeI3B9ZVo63tggEzws4WCda8sZyRgPNrV6X8Z2fEbSwZATi9KprKio6I5sSzQUk4QD8jdSrkpqmcB1YzQ1WNE7ifdCIU0SxoJwrQZMwh6Dhuj4A3mryrFRJ4y2eUKg45tSNNeY7lXydvhV2aGQ0ivxWFBsdriWsfmCtHzdX85fPofVisU6cx+xv+L+snNmgnBPVjr71ZCfiUlXMKEPi4xbNwZKfcYgszFLGx8CvmPwSISzdWiXtdlDzkasMokw3ejx3kTkzAUPPGxwjYI0Xzw+hA+5rGRLEQj3dUsraFW5udBh3xi6TipstX1kxIFLkNyr5I93AZKDumsqduFVBiFycsaUXNJahUSOUau0gg4pzTWABwWuaHwx3CysDOK3YakgiFcS8TwUb4xY/UiCr8OgUKFM49DUW7h+55a9/3cQK+PAvTroZjBSPP9YLq0+3z3quD283yxzRie0q1rA5Sq/bPVowKrg2UoWPiyi2ZCswgszxLXU6r4JjPLvMm3iuTD/3WHintHk8b2HoPQwolXohJ9ZJjG+XHqZptBHCvx+CDOhp9U62+07JmtnFjR/PXz98LiyzqJ8Q1eHxvr1cwaMH+DvS0IAD/C1ABcFHq8Q5+KtLO6DX0w5RKtwziUZNMT+WLOr/FxtldESFRGp/9jk8DIR0lBweN5zSTcGr2GncdYFjSFWgs4TUSVMaXRXb3sFTeJvTqXJc/RpGNIgmeEh76Q6Mgut7JmxwPAm8NpCvH8W+ZoezRych/MczkpAFBnl5GgJhHik2INJNRtyRlmS8o2dO4tuWxomlI/ptKE8TVfa5ao4i08L4gASJ1FO6+Fjj+j4PP1DGvIsXluQbQcLzou3kWkXWA08fX19yeAslPw2Ox0XuG4MllW8u+oNolFVuaVkT9DOtiBB3YcJe1HyidefZNviQivRS/JcHRguRQ6oZx7Q+315kTTcCUJ9khj7p7axvVsEgoSW0GtKkRSKSXzrk0vTN1VVbbScYOoyOH9ByoBHGSm6YUydq+I0hP8uSMTtpE4as2cw3iUirrzYF4W4AP5JjAXX2lxcXDyrfOzd8//4JiZbv1lCxi3IMAKQYYzQU7Fz8UqoX8ywjGXNbV49wt2lDRHsYl+kJmUW2FlOCVxrLKIzTkWEY+h1QJJhUg6Jq0C4LrEQhE+3IZrtFlW43odpSRlfXKj35SmqTKsilB9FBAw+YBC7/IW81febHygjVkbndtj3y8cCMK4dnfAfO3XqlDxcpw2wUA2Y5IOGIRiUmO0ZsyFCj2nGuHeWX8XLu4hmQXfj7Gv9VwZeE8T/q9LY5nVi7INyfOyVV/BA2S3rEk4zRnS4a7b2wMf2SSK43ZNY4p8uxGEqx5Swqd23BRteuD6isHB96sOm3yv7zVAnMDeYcfP+CbX/OjtD2W7edGb6ROJCeTz1Pg+Z+8OGsAupjqxHZsoSYhqjfwb086MisklFEUEuMrujzMoXZckzWyjeJYb8vAPpiMgTgwVfn5UkR0FdZfk/ZdNUGNMYQRyaIeGvB+QMAZ/EejdRckq9e0fpTUGXiCLSlOsDw+JHEt/HWJ+QMqHkydSkrMqZVsREJ9HYsLHdV8ZUfbYyJCVC9wh8uCEtKe3VHTuK/y3bZwuFEVdv+rdj6sSj+70R/Piu6d7txNfu+A+TcVfGLLi107c+MMFfxaCPmtsxkPglxRnES/wOxobfwWy5ZO6PhotvOKPjo5vw7CBcaSNWIz2CjtglGyl7a11Oy09aszJGDtba7n1UDf7c5EHZFgGJbuDidg2ueAMzfYMUGoCyixCVcqH8cuy7XNDfC1eS95Ewu+BhrH7NfTnN+fn5gXBHfGxOxgixYv8gbG7FafQU3E1825muWPzxTRT0Hla2I3dp2muzzdekkDkbIwUI2OzzLcHDqrj5leASWwBTjX1lpjPjwjWxWn9QFNZjZ0m9LlfZZXP/XPCEGGMeWKQ+V67c+tSkgvdrTVsJl8K9g2M/0DgjPgxjB202fjEnO/3SXFfAPJ4Z/y91MrEwSUuM2wAAAABJRU5ErkJggg==)',
                        title: '對沖基金',
                        desc: '原子衍盛套利機會基金'
                    },
                    {
                        icon: 'background-image: url(data:image/png;base64,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)',
                        title: '數字資產',
                        desc: '原子數字資產對沖基金'
                    }
                ],
                newsItem: [
                    {
                        newImg: 'background-image: url(../../../static/img/article1.jpg)',
                        title: '原子資本受到香港特區政府高度關注和支持',
                        text: '2018年6月12日，原子資本外匯事業部總裁很榮幸獲邀出席由行政長官及投資推廣處在特首官-香港禮賓府所舉辦“歡迎在香港成立的海外及內地企業酒會”，特首林鄭月娥女士發表演講及感謝各個海外及內地企業投資者對香港的信任和支持，並對在港發展企業的美好遠景。原子資本由籌備，開幕，發布首款外匯基金至今，因為原子資本的合法合規一直得到香港政府的大力支持和高度認可，此次酒會，總裁...'
                    },
                    {
                        newImg: 'background-image: url(../../../static/img/article2.jpg)',
                        title: '原子資本的周海江博士獲邀參加第四屆摩根士丹利中國峰會',
                        text: '5月30日，摩根斯丹利在北京舉辦了第四屆中國峰會，隨著金融業開放穩步推進、中等收入群體不斷壯大，中國市場湧現的蓬勃商機正吸引越來越多全球企業和投資者的目光。摩根士丹利董事長兼首席執行官高聞日前在京表示，長期看好中國市場前景，並將持續拓展中國業務。'
                    },
                    {
                        newImg: 'background-image: url(../../../static/img/article3.jpg)',
                        title: '原子資本集團開業典禮圓滿成功',
                        text: '2018年5月18日下午14:00在充滿藝術氣息的香港半島酒店，亞洲高淨值人群財富論壇暨原子資本集團開業典禮正式開始。'
                    },
                    {
                        newImg: 'background-image: url(../../../static/img/article4.png)',
                        title: '原子資本成為阿斯頓維拉唯一金融官方合作夥伴',
                        text: '2018年5月，香港原子資本集團和英超著名球隊阿斯頓維拉簽署戰略合作協議，原子資本將成為阿斯頓維拉唯一金融集團官方合作夥伴。'
                    },
                    {
                        newImg: 'background-image: url(../../../static/img/article5.jpg)',
                        title: '原子資本集團榮獲全球負責任企業領導獎',
                        text: '全球負責任企業領導獎 (GRBLA)頒獎典禮於2018年4月26日於馬來西亞吉隆玻市金字塔會議中心舉行。原子資本集團榮獲金融商業領域“全球負責任企業領導獎”。'
                    }
                ],
                market: [
                    {
                        bgi: 'background-image: url(../../../static/img/week.png)',
                        bTitle: '週周說市',
                        sTitle: '金融市場周報 (2018.10.15 – 2018.10.19)',
                        desc: '除了黃金之外，整體市場依然陷入震蕩行情。美元指數在到達了96關口之後，開始回撤至95附近，但還未體現任何大趨勢的變化。歐系在上周得到了一定的多頭，歐美鎊美都錄得增值，暫時擺脫貶值的行爲。避險貨幣日元因股市大跌的恐慌情緒得到一定的多頭，美日從114.5的高位在一周内跌至112附近才獲得支撐。加元則是最大的輸家，面臨在上周不斷回撤的美元依然還是遭受貶值，但明顯的在1.3070的空頭結構區獲得阻力。'
                    },
                    {
                        bgi: 'background-image: url(../../../static/img/month.png)',
                        bTitle: '月度市場總結',
                        sTitle: '金融市場月報 (2018.09)',
                        desc: '9月份的市場依然起伏不平，美元遲遲不漲，卻在局勢即將改變之時，美元接著美聯儲加息的舉動突然來個大反彈，美元一度突破95關口。英鎊一直是接著脫歐談判不斷湧出的好消息持續暴漲，但局勢也在月末極度反轉，脫歐談判可能打不成協議，英國首相特雷斯也做好了無協議的準備，英鎊也接著大暴跌。歐洲央行采取按兵不動，對未來加息也為給出任何提示，歐元區的經濟狀況似乎還是緩慢，歐美最終從最高的1.18的位置，隨著美元大漲而暴跌，到達1.16關口附近。'
                    },
                    {
                        bgi: 'background-image: url(../../../static/img/quarter.png)',
                        bTitle: '季度投資研報',
                        sTitle: '2018年第二季度投資策略報告',
                        desc: '踏入2018年第二季度，美國加息步伐和通脹表現依然是全球市場關注的焦點。同時，各大發達經濟體亦開始步向利率正常化的道路，投資者亦應注視各國貨幣政策的前瞻指引。在美國加息預期已大部分入價(Price-In)的背景下，如某國央行收緊貨幣政策幅度比市場預期稍強，或會導致其貨幣大幅上漲。'
                    }
                ],
                partnerLogo: [
                    'background-image: url(../../../static/img/logo1.png)',
                    'background-image: url(../../../static/img/logo2.png)',
                    'background-image: url(../../../static/img/logo3.png)',
                    'background-image: url(../../../static/img/logo4.png)',
                    'background-image: url(../../../static/img/logo5.png)',
                    'background-image: url(../../../static/img/logo6.png)'
                ],
                autoplay: true,
                dots: 'outside',
                trigger: 'hover'
            }
        },
        components: {
            carousel,
            vline
        }
    }
</script>
<style lang="less">
    @import '../../common/less/base-less.less';

    .home{
        width: 100%;
        min-width: 1200px;
        position: relative;
        overflow: hidden;
        .home-bgi{
            position: absolute;
            width: 100%;
            top: 0;
            left: 0;
            height: 1700px;
            background-image: url('./home-banner.png');
            background-position: center;
        }
        .home-banner{
            width: 1200px;
            margin: 0 auto;
            .banner-content{
                position: relative;
                h1{
                    margin-top: 220px;
                    line-height: 60px;
                    color: #fff;
                    font-size: 55px;
                    text-align: center;
                    text-shadow: 0 2px 4px rgba(0,0,0,.39);
                    font-weight: bold;
                }
                p{
                    margin-top: 16px;
                    line-height: 40px;
                    text-align: center;
                    text-shadow: 0 2px 4px rgba(0,0,0,.39);
                    color: hsla(0,0%,100%,.8);
                    font-size: 36px;
                }
            }
            .home-more{
                width: 200px;
                height: 45px;
                text-align: center;
                margin: 40px auto 0;
                a{
                    display: block;
                    width: 100%;
                    height: 100%;
                    line-height: 45px;
                    color: #49515c;
                    background-color: hsla(0,0%,100%,.8);
                }
            }
            .business{
                margin-top: 310px;
                position: relative;
                h2{
                    color: #cfd3dc;
                    text-align: center;
                    font-size: 30px;
                }
                .business-wrap{
                    margin-top: 60px;
                    display: flex;
                    justify-content: space-between;
                    .business-item{
                        width: 256px;
                        height: 306px;
                        text-align: center;
                        background-color: #192131;
                        transition: .5s ease;
                        &:hover{
                            transform: translate3d(0, -10px, 0);
                            background-color: #1c2536;
                        }
                        .icon{
                            width: 52px;
                            height: 52px;
                            margin: 74px auto 0;
                            background-position: center;
                            background-repeat: no-repeat;
                        }
                        p{
                            margin-top: 40px;
                            line-height: 28px;
                            font-size: 20px;
                        }
                        p:last-child {
                            margin-top: 12px;
                            font-size: 14px;
                        }
                    }
                }
            }
            .news{
                margin-top: 168px;
                position: relative;
                h2{
                    text-align: center;
                    color: #cfd3dc;
                    font-size: 30px;
                    font-weight: 400;
                }
                .news-item{
                    margin: 90px 0 60px;
                    padding:0 2px;
                    display: flex;
                    justify-content: space-between;
                    .bgi{
                        overflow: hidden;
                        flex: 0 0 560px;
                        width: 560px;
                        height: 335px;
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: 100%;
                    }
                    .text{
                        width: 565px;
                        position: relative;
                        h3{
                            line-height: 33px;
                            font-size: 24px;
                            color: #e4e7ee;
                        }
                        p{
                            margin-top: 15px;
                            line-height: 30px;
                            font-size: 16px;
                        }
                        .detail{
                            width: 161px;
                            height: 43px;
                            font-size: 16px;
                            position: absolute;
                            bottom: 10px;
                            text-align: center;
                            line-height: 43px;
                            color: #e4e7ee;
                            background-color: hsla(0,0%,100%,.1);
                        }
                    }
                }
            }
            .market{
                margin-top: 168px;
                h2{
                    color: #cfd3dc;
                    text-align: center;
                    font-size: 30px;
                }
                .market-content{
                    display: flex;
                    justify-content: space-between;
                    margin-top: 68px;
                    .market-item{
                        position: relative;
                        width: 356px;
                        height: 482px;
                        background-position: center;
                        background-repeat: no-repeat;
                        transition: .5s ease;
                        h2{
                            margin-top: 224px;
                            font-size: 24px;
                            font-weight: 500;
                            color: #e4e7ee;
                        }
                        .detail{
                            position: absolute;
                            text-align: center;
                            width: 356px;
                            height: 198px;
                            bottom: 0;
                            background-color: rgba(15,20,23,.7);
                            h3{
                                display: inline-block;
                                padding-top: 20px;
                                color: #e4e7ee;
                                border-bottom: 1px solid #9a9ea8;
                                font-size: 14px;
                                line-height: 30px;
                                text-align: center;
                            }
                            p{
                                width: 250px;
                                margin: 0 auto;
                                line-height: 24px;
                                text-overflow: ellipsis;
                                display: -webkit-box;
                                -webkit-box-orient: vertical;
                                -webkit-line-clamp: 2;
                                overflow: hidden;
                                font-size: 12px;
                            }
                            a{
                                display: block;
                                width: 36px;
                                height: 36px;
                                margin: 32px auto 0;
                                border-radius: 50%;
                                background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAANCAYAAACUwi84AAAAAXNSR0IArs4c6QAAAIRJREFUGBl9kMsNgCAQBR9oAx49aSdSiqXZidqJJiYcrQDRB8RoXNwDbDKT/cHavd3sPvGHENoBA+C7AxAlXQC9glo9fCNJilVZnpASZQ2Yuq4WsiAwyUm3kJNeQpKMgx+ZXw3mlyC1uQUJctAg5GBo8gcplOmSn/0JGeGSnPZ5nIjiewKN0mN86F86/wAAAABJRU5ErkJggg==');
                                background-size: 30%;
                                background-repeat: no-repeat;
                                background-position: center;
                                background-color: #313b47;
                            }
                        }
                        &:hover{
                            transform: translate3d(0, -10px, 0);
                        }
                    }
                }
            }
            .partner{
                margin-top: 168px;
                h2{
                    color: #cfd3dc;
                    text-align: center;
                    font-size: 30px;
                    font-weight: 400;
                }
                .partner-logo{
                    margin-top: 68px;
                    display: flex;
                    justify-content: space-between;
                    i{
                        display: block;
                        width: 137px;
                        height: 33px;
                        background-repeat: no-repeat;
                        background-position: center;
                        transition: .2s linear;
                        &:hover{
                            transform: scale(1.03);
                        }
                    }
                }
            }
            .contact{
                margin: 168px 0 138px;
                h2{
                    color: #cfd3dc;
                    text-align: center;
                    font-size: 30px;
                    font-weight: 400;
                }
                .email{
                    margin: 68px auto 0;
                    width: 412px;
                    height: 40px;
                    line-height: 40px;
                    display: flex;
                    justify-content: space-between;
                    a{
                        display: block;
                        width: 140px;
                        height: 40px;
                        line-height: 36px;
                        border: 2px solid #9a9ea8;
                        color: #9a9ea8;
                        text-align: center;
                    }
                }
            }
        }
    }
</style>
