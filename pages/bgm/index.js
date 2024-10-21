import {
        getTokenAndUserID
} from '../../utils/server';
import {
        initSDK,
        destroySDK,
        authCheck,
        startPush,
        republish
} from '../../utils/common';
import {
        wxp
} from '../../app';

let {
        zegoAppID,
        server
} = getApp().globalData;
let zg;
Page({
        data: {
                roomID: '', // 房间ID
                token: '', // 服务端校验token
                pushStreamID: 'xcx-streamID-' + new Date().getTime(), // 推流ID
                livePusherUrl: '', // 推流地址
                livePusher: null, // live-pusher 的 Context，内部只有一个对象
                userID: '', // 用户ID,
                livePlayerList: [],
                connectType: -1, // -1为初始状态，1为连接，0断开连接
                canShow: -1,
                roomUserList: [],
                handupStop: false,
                bgmStart: false,
                bgmPaused: false,
                isRelogin: false
        },
        bindKeyInput(e) {
                this.setData({
                        roomID: e.detail.value
                });
        },
        async openRoom(e) {
                if (!this.data.roomID) {
                        wxp.showModal({
                                title: '提示',
                                content: '请输入房间号',
                                showCancel: false,
                        });
                        return;
                }
                if (this.data.connectType !== 1) {
                        try {
                                /** 获取token, userID */
                                const res = getTokenAndUserID();
                                if (!res) {
                                  console.error("userID and Token haven't been set.")
                                  return;
                                }
                                this.setData({
                                    token: res.token,
                                    userID: res.userID
                                });
                                let isLogin = await zg.loginRoom(this.data.roomID, this.data.token, {
                                        userID: this.data.userID,
                                        userName: 'nick' + this.data.userID
                                });
                                isLogin ? console.log('login success') : console.error('login fail');
                                this.setData({
                                        connectType: 1,
                                        isRelogin: true,
                                });
                        } catch (error) {
                                console.error('error: ', error);
                                return;
                        }
                }
                // 创建房间，开始推流
                if (e.target.dataset && e.target.dataset.role == 1 && this.data.livePusherUrl === '') {
                        startPush(this);
                }
                this.setData ({
                        role: e.target.dataset.role 
                })

        },
        async logout() {
                try {
                        if (this.data.livePusherUrl) {
                                zg.stopPublishingStream(this.data.pushStreamID);
                                this.data.livePusher.stop();
                                this.setData({
                                        livePusherUrl: ''
                                });
                        }
                        if (this.data.livePlayerList.length > 0) {
                                this.data.livePlayerList.forEach(async (item) => {
                                        zg.stopPlayingStream(item.streamID);
                                });
                                this.setData({
                                        livePlayerList: []
                                });
                        }
                        // 退出登录
                        if (zg && this.data.connectType === 1) await zg.logoutRoom(this.data.roomID);
                } catch (error) {
                        console.error('error: ', error);
                }

        },
        playOrStopBgm() {
                if (!this.data.livePusher.playBGM) {
                        wxp.showModal({
                                title: '提示',
                                content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后再试。',
                                showCancel: false,
                        });
                        return;
                }
                this.setData({
                        bgmStart: !this.data.bgmStart
                }, () => {
                        if (this.data.bgmStart) {
                                this.bgmStartEvent()
                        } else {
                                this.data.livePusher && this.data.livePusher.stopBGM();
                        }
                });
        },
        bgmStartEvent() {
                if (this.data.livePusher) {
                        console.error("playBGM")
                        this.data.livePusher.playBGM({
                                url: 'https://zego-sdkdemospace.oss-cn-shanghai.aliyuncs.com/demo/bgm.mp3',
                                success: function (res) {
                                        console.error('playBGM suc', res)
                                },
                                fail: function (err) {
                                        console.error('playBGM fail', err)
                                }
                        });
                }
        },
        handleBgm() {
                if (!this.data.livePusher.pauseBGM) {
                        wxp.showModal({
                                title: '提示',
                                content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后再试。',
                                showCancel: false,
                        });
                        return;
                }
                if (!this.data.bgmStart) return;
                this.setData({
                        bgmPaused: !this.data.bgmPaused
                }, () => {
                        if (this.data.bgmPaused) {
                                this.data.livePusher && this.data.livePusher.pauseBGM()
                        } else {
                                this.data.livePusher && this.data.livePusher.resumeBGM()
                        }
                })
        },
        onBgmStart(e) {
                console.log('onBgmStart', e);
        },
        onBgmProgress(e) {
                console.log('onBgmProgress', e);
        },
        onBgmComplete(e) {
                console.log('onBgmComplete', e);
        },
        // live-pusher 绑定推流事件，透传推流事件给 SDK
        onPushStateChange(e) {
                // console.error('onPushStateChange', e.detail.code, e.detail.message);
                if (e.detail.code === 5000) {
                        this.setData({
                                handupStop: true
                        })
                        // this.data.livePusher && (this.data.livePusher! as wx.LivePusherContext).stop();
                }
                zg.updatePlayerState(this.data.pushStreamID, e);
        },
        // live-pusher 绑定网络状态事件，透传网络状态事件给 SDK
        onPushNetStateChange(e) {
                zg.updatePlayerNetStatus(this.data.pushStreamID, e);
        },
        onPushError(e) {
                console.error('onPushError', e);
        },
        // live-player 绑定网络状态事件，透传网络状态事件给 SDK
        onPlayNetStateChange(e) {
               
                zg.updatePlayerNetStatus(e.currentTarget.id, e);
        },
        //live-player 绑定拉流事件，透传拉流事件给 SDK
        onPlayStateChange(e) {
                console.warn(e)
                zg.updatePlayerState(e.currentTarget.id, e);
        },
        async onReady() {
                console.error('onReady')
                zg = initSDK(this);
        },
        async reLogin() {
                try {
                        await zg.logoutRoom();
                        let isLogin = await zg.loginRoom (this.data.roomID, this.data.token, {userID: this.data.userID, userName: 'nick' + this.data.userID}, { userUpdate: true });
                        isLogin ? console.log('login success') : console.error('login fail');
                        this.setData({
                                connectType: 1,
                                isRelogin: true,
                        });
                        console.log('pushStream: ', this.data.pushStreamID, this.data.livePusherUrl);
                        republish(this)
                        console.error("reLogin", this.data.bgmStart, this.data.livePusher)
                } catch (error) {
                        console.error('error: ', error);
                }
        },
        onShow() {
                console.log('server: ', server);
                authCheck(this);
                // if (zg && this.data.roomID) {
                //         this.reLogin();
                // }
                // 刷新全局变量
                zegoAppID = getApp().globalData.zegoAppID;
                server = getApp().globalData.server;
                if (this.data.bgmStart) {
                        this.bgmStartEvent()

                }
        },
        onHide() {
                this.logout();
        },
        onUnload() {
                this.logout();
                destroySDK();
                wx.offNetworkStatusChange()
        },
        onLoad() {
                // 监听网络状态
                this.onNetworkStatus();
        },
        onNetworkStatus() {
                const sys = wx.getSystemInfoSync();
                let i = 0, timer;
                // if (sys.platform === 'ios') {
                        wx.onNetworkStatusChange(res => {
                                console.warn("网络变化", res.isConnected, res.networkType, this.data.connectType, zg, new Date())
                        //         if (res.isConnected && this.data.connectType === 1 && zg) {
                        //                 console.error('connectType reLogin', this.data.connectType);
                        //                 this.reLogin();
                        //         }
                        })
                // }
        }
});