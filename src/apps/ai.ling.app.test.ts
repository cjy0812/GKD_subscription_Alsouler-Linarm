import { describe, it, expect } from 'vitest';
import appConfig from './ai.ling.app';

describe('ai.ling.app', () => {
  describe('Basic Structure', () => {
    it('should export a valid app configuration object', () => {
      expect(appConfig).toBeDefined();
      expect(typeof appConfig).toBe('object');
    });

    it('should have required top-level properties', () => {
      expect(appConfig).toHaveProperty('id');
      expect(appConfig).toHaveProperty('name');
      expect(appConfig).toHaveProperty('groups');
    });

    it('should have correct id value', () => {
      expect(appConfig.id).toBe('ai.ling.app');
    });

    it('should have correct name value', () => {
      expect(appConfig.name).toBe('Luka');
    });

    it('should have groups as an array', () => {
      expect(Array.isArray(appConfig.groups)).toBe(true);
    });
  });

  describe('Groups Array', () => {
    it('should have at least one group', () => {
      expect(appConfig.groups.length).toBeGreaterThan(0);
    });

    it('should have exactly one group defined', () => {
      expect(appConfig.groups.length).toBe(1);
    });

    describe('Group Structure', () => {
      const group = appConfig.groups[0];

      it('should have a numeric key property', () => {
        expect(group).toHaveProperty('key');
        expect(typeof group.key).toBe('number');
      });

      it('should have key value of 1', () => {
        expect(group.key).toBe(1);
      });

      it('should have a name property', () => {
        expect(group).toHaveProperty('name');
        expect(typeof group.name).toBe('string');
      });

      it('should have name "权限提示-通知权限"', () => {
        expect(group.name).toBe('权限提示-通知权限');
      });

      it('should have a desc property', () => {
        expect(group).toHaveProperty('desc');
        expect(typeof group.desc).toBe('string');
      });

      it('should have desc "点击[取消]"', () => {
        expect(group.desc).toBe('点击[取消]');
      });

      it('should have fastQuery enabled', () => {
        expect(group).toHaveProperty('fastQuery');
        expect(group.fastQuery).toBe(true);
      });

      it('should have matchTime set to 10000', () => {
        expect(group).toHaveProperty('matchTime');
        expect(group.matchTime).toBe(10000);
      });

      it('should have actionMaximum set to 1', () => {
        expect(group).toHaveProperty('actionMaximum');
        expect(group.actionMaximum).toBe(1);
      });

      it('should have resetMatch set to "app"', () => {
        expect(group).toHaveProperty('resetMatch');
        expect(group.resetMatch).toBe('app');
      });

      it('should have rules array', () => {
        expect(group).toHaveProperty('rules');
        expect(Array.isArray(group.rules)).toBe(true);
      });
    });

    describe('Rules Array', () => {
      const rules = appConfig.groups[0].rules;

      it('should have at least one rule', () => {
        expect(rules.length).toBeGreaterThan(0);
      });

      it('should have exactly one rule defined', () => {
        expect(rules.length).toBe(1);
      });

      describe('Rule Structure', () => {
        const rule = rules[0];

        it('should have activityIds property', () => {
          expect(rule).toHaveProperty('activityIds');
          expect(typeof rule.activityIds).toBe('string');
        });

        it('should have activityIds ".page.activity.MainActivity"', () => {
          expect(rule.activityIds).toBe('.page.activity.MainActivity');
        });

        it('should have matches property as an array', () => {
          expect(rule).toHaveProperty('matches');
          expect(Array.isArray(rule.matches)).toBe(true);
        });

        it('should have exactly two match conditions', () => {
          expect(rule.matches.length).toBe(2);
        });

        it('should have correct first match condition', () => {
          expect(rule.matches[0]).toBe('[text="通知服务未开启"]');
        });

        it('should have correct second match condition', () => {
          expect(rule.matches[1]).toBe('[text="取消"]');
        });

        it('should have snapshotUrls property', () => {
          expect(rule).toHaveProperty('snapshotUrls');
          expect(typeof rule.snapshotUrls).toBe('string');
        });

        it('should have valid snapshot URL', () => {
          expect(rule.snapshotUrls).toBe('https://i.gkd.li/i/15796616');
          expect(rule.snapshotUrls).toMatch(/^https?:\/\/.+/);
        });
      });
    });
  });

  describe('Edge Cases and Validation', () => {
    it('should not have undefined values for required fields', () => {
      expect(appConfig.id).not.toBeUndefined();
      expect(appConfig.name).not.toBeUndefined();
      expect(appConfig.groups).not.toBeUndefined();
    });

    it('should not have null values for required fields', () => {
      expect(appConfig.id).not.toBeNull();
      expect(appConfig.name).not.toBeNull();
      expect(appConfig.groups).not.toBeNull();
    });

    it('should have non-empty id string', () => {
      expect(appConfig.id.length).toBeGreaterThan(0);
    });

    it('should have non-empty name string', () => {
      expect(appConfig.name.length).toBeGreaterThan(0);
    });

    it('should have non-empty groups array', () => {
      expect(appConfig.groups.length).toBeGreaterThan(0);
    });

    it('should have valid group key that is a positive number', () => {
      const group = appConfig.groups[0];
      expect(group.key).toBeGreaterThan(0);
      expect(Number.isInteger(group.key)).toBe(true);
    });

    it('should have positive matchTime value', () => {
      const group = appConfig.groups[0];
      expect(group.matchTime).toBeGreaterThan(0);
    });

    it('should have positive actionMaximum value', () => {
      const group = appConfig.groups[0];
      expect(group.actionMaximum).toBeGreaterThan(0);
    });

    it('should have matches array with string elements', () => {
      const rule = appConfig.groups[0].rules[0];
      rule.matches.forEach((match) => {
        expect(typeof match).toBe('string');
        expect(match.length).toBeGreaterThan(0);
      });
    });

    it('should have activityIds starting with a dot', () => {
      const rule = appConfig.groups[0].rules[0];
      expect(rule.activityIds.startsWith('.')).toBe(true);
    });
  });

  describe('Type Safety and Immutability', () => {
    it('should maintain object structure after access', () => {
      const originalId = appConfig.id;
      const accessedId = appConfig.id;
      expect(accessedId).toBe(originalId);
    });

    it('should have consistent group reference', () => {
      const group1 = appConfig.groups[0];
      const group2 = appConfig.groups[0];
      expect(group1).toBe(group2);
    });

    it('should have consistent rule reference', () => {
      const rule1 = appConfig.groups[0].rules[0];
      const rule2 = appConfig.groups[0].rules[0];
      expect(rule1).toBe(rule2);
    });
  });

  describe('Configuration Completeness', () => {
    it('should have all essential properties in group for automation', () => {
      const group = appConfig.groups[0];
      const essentialProps = ['key', 'name', 'rules', 'fastQuery', 'matchTime', 'actionMaximum'];
      essentialProps.forEach((prop) => {
        expect(group).toHaveProperty(prop);
      });
    });

    it('should have all essential properties in rule for matching', () => {
      const rule = appConfig.groups[0].rules[0];
      const essentialProps = ['activityIds', 'matches', 'snapshotUrls'];
      essentialProps.forEach((prop) => {
        expect(rule).toHaveProperty(prop);
      });
    });
  });

  describe('Negative Cases', () => {
    it('should not have extra unexpected top-level properties', () => {
      const allowedProps = ['id', 'name', 'groups'];
      const actualProps = Object.keys(appConfig);
      actualProps.forEach((prop) => {
        expect(allowedProps).toContain(prop);
      });
    });

    it('should have exactly the expected number of groups', () => {
      // Ensures we're not missing or adding groups accidentally
      expect(appConfig.groups.length).toBe(1);
    });

    it('should have exactly the expected number of rules', () => {
      // Ensures rule array integrity
      expect(appConfig.groups[0].rules.length).toBe(1);
    });
  });

  describe('Regression Tests', () => {
    it('should maintain notification permission dismissal functionality', () => {
      // This test ensures the core purpose of this configuration is intact
      const group = appConfig.groups[0];
      expect(group.name).toContain('权限提示');
      expect(group.name).toContain('通知权限');
      expect(group.desc).toContain('取消');
    });

    it('should target the correct activity', () => {
      // Ensures we're targeting the right Android activity
      const rule = appConfig.groups[0].rules[0];
      expect(rule.activityIds).toContain('MainActivity');
    });

    it('should look for notification-related text', () => {
      // Ensures we're matching the right UI elements
      const rule = appConfig.groups[0].rules[0];
      const matchesText = rule.matches.join(' ');
      expect(matchesText).toContain('通知');
    });

    it('should have a cancel action', () => {
      // Ensures we're clicking the cancel button
      const rule = appConfig.groups[0].rules[0];
      const matchesText = rule.matches.join(' ');
      expect(matchesText).toContain('取消');
    });
  });

  describe('Boundary Tests', () => {
    it('should handle accessing group by valid index', () => {
      expect(() => appConfig.groups[0]).not.toThrow();
    });

    it('should handle accessing rule by valid index', () => {
      expect(() => appConfig.groups[0].rules[0]).not.toThrow();
    });

    it('should handle accessing match by valid index', () => {
      const rule = appConfig.groups[0].rules[0];
      expect(() => rule.matches[0]).not.toThrow();
      expect(() => rule.matches[1]).not.toThrow();
    });

    it('should return undefined for out-of-bounds group access', () => {
      expect(appConfig.groups[999]).toBeUndefined();
    });

    it('should return undefined for out-of-bounds rule access', () => {
      expect(appConfig.groups[0].rules[999]).toBeUndefined();
    });
  });
});