import { expect, test } from '@playwright/test';

test('renders the home page', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle('Astro Basics');
  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'src/pages'
  );
});

test('hydrates the Vue island styled with Tailwind', async ({ page }) => {
  await page.goto('/');

  const button = page.getByRole('button', { name: 'Clicked 0 times' });
  await expect(button).toBeVisible();

  // Tailwind utility `bg-indigo-600` must be applied
  await expect(button).not.toHaveCSS('background-color', 'rgba(0, 0, 0, 0)');

  await button.click();
  await expect(
    page.getByRole('button', { name: 'Clicked 1 times' })
  ).toBeVisible();
});
