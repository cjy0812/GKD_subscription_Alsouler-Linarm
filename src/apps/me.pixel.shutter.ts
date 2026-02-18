import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'me.pixel.shutter',
  name: '像素快门',
  groups: [
    {
      key: 2,
      name: '评分引导',
      rules: [
        {
          activityIds: 'me.pixel.shutter.SettingActivity',
          matches: '[vid="dismiss_dialog_icon"]',
          action: 'clickCenter',
          snapshotUrls: 'https://i.gkd.li/i/77102',
        },
      ],
    },
    {
      key: 3,
      name: '自动切换模式',
      rules: [
        {
          key: 0,
          matches: '[text="高级模式"]',
          snapshotUrls: 'https://i.gkd.li/i/77103',
        },
        {
          key: 1,
          matches: '[text="确认切换"]',
          snapshotUrls: 'https://i.gkd.li/i/77104',
        },
      ],
    },
  ],
});
