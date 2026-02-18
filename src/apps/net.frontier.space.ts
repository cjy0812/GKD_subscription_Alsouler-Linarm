import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'net.frontier.space',
  name: '边际空间',
  groups: [
    {
      key: 1,
      name: '局部广告',
      fastQuery: true,
      rules: [
        {
          matches: 'FrameLayout > LinearLayout > RelativeLayout > ImageView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/99210',
        },
      ],
    },
  ],
});
