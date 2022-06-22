import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000');
});

test('カウントアップボタンをクリックすると、カウントが増加すること', async ({
  page,
}) => {
  // data-testid 属性が count-up-button な要素をクリックする
  await page.locator('data-testid=count-up-button').click();
  // data-testid 属性が count な要素のテキストが1になっている事を確認
  await expect(page.locator('data-testid=count')).toContainText('1');
});
