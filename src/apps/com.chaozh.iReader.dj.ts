import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chaozh.iReader.dj',
  name: '得间免费小说',
  groups: [
    {
      key: 1,
      name: '局部广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: [
            'com.qq.e.ads.PortraitADActivity',
            'com.zhangyue.iReader.read.ui.Activity_BookBrowser_TXT',
          ],
          matches: [
            '@[id*="ad_close"] - LinearLayout >(5,6) [text="广告"][visibleToUser=true]',
            '[text$="了解更多"] <<n [id="android:id/content"] + [text="关闭"][clickable=true][visibleToUser=true]',
            '[vid="tv_exit"][clickable=true][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/24879639', //底部卡片广告
            'https://i.gkd.li/i/24879692',
            'https://i.gkd.li/i/24879766',
            'https://i.gkd.li/i/24909685', //小说中途插入广告
            'https://i.gkd.li/i/25244345', //加入书架二次提示-直接退出
          ],
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.zhangyue.iReader.bookshelf.ui.ActivityBookShelf',
          matches:
            '@ImageView[clickable=true][childCount=0][width<50 && height<50] < FrameLayout <2 [id="android:id/content"]',
          snapshotUrls: [
            'https://i.gkd.li/i/24880989', //首页小红包
            'https://i.gkd.li/i/24881759',
          ],
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: [
            'com.zhangyue.iReader.ui.activity.ActivityContainer',
            'com.zhangyue.iReader.bookshelf.ui.ActivityBookShelf',
            'com.zhangyue.iReader.read.ui.Activity_BookBrowser_TXT',
          ],
          matches:
            '@[text="关闭"][clickable=true] <<n [id="com.zhangyue.module.ad:id/mix_ad_view" || id="com.zhangyue.module.ad:id/ad_splash_ad_layout"]',
          snapshotUrls: [
            'https://i.gkd.li/i/24884414', //听书播放器底部广告
            'https://i.gkd.li/i/24882622',
            'https://i.gkd.li/i/24883183', //京东广告_小说中途插入
          ],
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: [
            'com.zhangyue.app.shortplay.player.ui.activity.EpisodesSetPlayActivity',
            'com.zhangyue.iReader.read.ui.Activity_BookBrowser_TXT',
          ],
          matches:
            '[id="com.zhangyue.module.ad:id/close_ad" || id="com.zhangyue.module.ad:id/ad_close_2"]',
          snapshotUrls: [
            'https://i.gkd.li/i/24885716', //短剧底部卡片广告
            'https://i.gkd.li/i/24888022', //章节尾部插入横幅广告
          ],
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告',
      desc: '通过点击空白地方实现跳过广告非关闭策略',
      actionCd: 8000, //加cd等加载过去防止循环触发,如p2
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: [
            'com.zhangyue.iReader.read.ui.Activity_BookBrowser_TXT',
            'com.qq.e.ads.PortraitADActivity',
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          ],
          matches: [
            '[text="广告"][visibleToUser=true] <<n [id="com.zhangyue.module.ad:id/mix_ad_view"] <<n LinearLayout[childCount=4] > TextView + FrameLayout',
            '[text=""][visibleToUser=true]',
            '[text="关闭"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/25118364', //各种小说中途插入广告
            'https://i.gkd.li/i/25118663',
            'https://i.gkd.li/i/25118774',
            'https://i.gkd.li/i/25118320', //循环误触-画面与结构树不匹配，估计得多翻2页才刷新
          ],
        },
      ],
    },
    {
      key: 3,
      name: '更新提示',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.zhangyue.iReader.bookshelf.ui.ActivityBookShelf',
          matches:
            '[text="立即升级"][clickable=true][visibleToUser=true] -4 [vid="dialog_public_top_bar_title_close"]',
          snapshotUrls: 'https://i.gkd.li/i/25121594',
        },
      ],
    },
    {
      key: 4,
      name: '分段广告',
      rules: [
        {
          key: 0,
          activityIds: 'com.zhangyue.iReader.online.ui.ActivityFee',
          matches:
            '@Image[text.length=36][visibleToUser=true] + [text="纯净阅读免广告"]',
          snapshotUrls: 'https://i.gkd.li/i/25243163', //要米第一步
        },
        {
          key: 1,
          preKeys: [0],
          activityIds: 'com.zhangyue.iReader.online.ui.ActivityFee',
          matches: '@TextView + [text="别走！送你限时优惠"]',
          snapshotUrls: 'https://i.gkd.li/i/25243375', //球球给点米好不好嘛~
        },
      ],
    },

    // 存在无法解决的误触问题
    // {
    //   key: 3,
    //   name: '局部广告-书籍阅读页间断插入广告', //可点击，但是容易被骗。。。
    //   fastQuery: true,
    //   rules: [
    //     {
    //       key: 0,
    //       name: '中间单容器单广告',
    //       activityIds: 'com.zhangyue.iReader.read.ui.Activity_BookBrowser_TXT',
    //       matches:
    //         '@ImageView[id="com.zhangyue.module.ad:id/close"][width<25 && height<25]',
    //       snapshotUrls: [
    //         'https://i.gkd.li/i/24882824',
    //         'https://i.gkd.li/i/24882944',
    //         'https://i.gkd.li/i/24887834', //真机测试发现钓鱼假x关闭按钮3个，一旦点击会弹出两个层叠充值会员页面
    //         'https://i.gkd.li/i/24888200', //结果图
    //         'https://i.gkd.li/i/24888204',
    //       ],
    //     },
    //   ],
    // },
  ],
});
