import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'org.pms.v6.tools',
  name: '极简工具',
  groups: [
    {
      key: 0,
      name: '全屏弹窗',
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: 'org.pms.v6.tools.MainActivity',
          matches: '[id="org.pms.v6.tools:id/close_id"][text="关闭"][clickable=true][visibleToUser=true][width>10 && height>10]',
          snapshotUrls: 'https://i.gkd.li/i/88201',
        },
      ],
    },
  ],
});
