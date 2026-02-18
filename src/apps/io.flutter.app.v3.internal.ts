import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'io.flutter.app.v3.internal',
  name: '极速文件',
  groups: [
    {
      key: 0,
      name: '广告弹窗-1',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          matches: '[text*="跳过"][text.length<10]',
          snapshotUrls: 'https://i.gkd.li/i/1582201',
        }
      ]
    },
    {
      key: 0, 
      name: '系统权限提示',
      name: '系统权限提示', 
      fastQuery: true,
      rules: [
        {
          activityIds: 'io.flutter.app.v3.internal.PermissionActivity',
          matches: '[vid="btn_allow"]',
          snapshotUrls: 'https://i.gkd.li/i/1582205'
        }
      ]
    },
    {
      key: 3,
      name: '侧边栏引导',
      fastQuery: true,
      rules: [
        {
          matches: '@[clickable=true] - [text="不再提示"]',
          exampleUrls: 'https://e.gkd.li/share/99201',
        }
      ]
    }
  ]
});
