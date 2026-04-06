import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'ab.xd',
  name: '熊大',
  groups: [
    {
      key: 1,
      name: '权限提示-通知权限',
      desc: '点击[取消]',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'apps',
      rules: [
        {
          activityIds: '.page.activity.MainActivity',
            matches: ['text="通知服务未开启"]', '[text="取消"]'],
      
            snapshotUrls: 'https://i.gkd.li/i/114514',
        },
      ],
    },
  ],
});
