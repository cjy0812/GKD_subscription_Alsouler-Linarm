import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'ab.xer',
  name: '熊二',
  groups: [
    {
      key: 1,
      name: '权限提示-通知权限',
      desc: '点击[取消]',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.page.activity.MainActivity',
          matches: ['[text="通知服务未开启"]', '[text="取消"]'],
          snapshotUrls: 'https://i.gkd.li/i/26462136',
          exampleUrls: 'https://e.gkd.li/e335f324-0d13-4023-8640-d6d03d8f9250',
        },
      ],
    },
  ],
});
