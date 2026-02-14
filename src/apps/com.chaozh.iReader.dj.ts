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
          matches:
            '@[id*="ad_close"] - LinearLayout >(5,6) [text="广告"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/24879639', //底部卡片广告
            'https://i.gkd.li/i/24879692',
            'https://i.gkd.li/i/24879766',
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
      name: '全屏广告-小说内自动划走广告', //通过各种办法触发划走而非点击关闭
      desc: '通过点击空白地方实现跳过广告非关闭策略',
      actionCd: 8000, //加cd等加载过去防止循环触发,如p2
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.zhangyue.iReader.read.ui.Activity_BookBrowser_TXT',
          matches:
            '@FrameLayout - [text$="赞助作者" || text$="正版内容" || text$="奖励" || text$="耕耘"] <<n [vid="bookview"]',
          snapshotUrls: [
            'https://i.gkd.li/i/25118364',
            'https://i.gkd.li/i/25307532',
            'https://i.gkd.li/i/24882824',
            'https://i.gkd.li/i/25118320', //p2_循环误触-画面与结构树不匹配，估计得多翻2页才刷新
          ],
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.qq.e.ads.PortraitADActivity',
          matches: [
            '[text=""][visibleToUser=true][index=parent.childCount.minus(1)]',
            '[text="关闭"][clickable=true][visibleToUser=true] - [id="android:id/content"] < FrameLayout +2 FrameLayout[index=parent.childCount.minus(1)]', //兜底规则
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/25118663',
            'https://i.gkd.li/i/24909685',
          ],
        },
        {
          key: 2,
          fastQuery: true,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '[text="关闭"][clickable=true][visibleToUser=true] - [id="android:id/content"] < FrameLayout +2 FrameLayout[index=parent.childCount.minus(1)]',
          snapshotUrls: [
            'https://i.gkd.li/i/25314831', //广告预加载准备
            'https://i.gkd.li/i/25314833', //广告现行
            'https://i.gkd.li/i/25118774',
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
      name: '分段广告-要米组合',
      desc: '关闭广告&假广告引发的被动技能反制',
      rules: [
        {
          key: 0,
          activityIds: 'com.zhangyue.iReader.online.ui.ActivityFee',
          matches:
            '@Image[text.length=36][visibleToUser=true] + [text="纯净阅读免广告"]',
          snapshotUrls: 'https://i.gkd.li/i/25243163', //要米第一步
        },
        {
          preKeys: [0],
          actionCd: 300,
          activityIds: 'com.zhangyue.iReader.online.ui.ActivityFee',
          matches: '@TextView + [text="别走！送你限时优惠"]',
          snapshotUrls: 'https://i.gkd.li/i/25243375', //球球给点米好不好嘛~
        },
      ],
    },
    {
      key: 5,
      name: '功能类-退出阅读跳过加书架提示',
      desc: '小说退出-加入书架提示-退出阅读',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.zhangyue.iReader.read.ui.Activity_BookBrowser_TXT',
          matches:
            '[vid="tv_add_book_self"] + [text="退出阅读"][clickable=true][visibleToUser=true][index=parent.childCount.minus(1)]',
          snapshotUrls: 'https://i.gkd.li/i/25244345',
        },
      ],
    },
  ],
});
