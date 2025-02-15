import healthIndicator from '../../health';




test('health > 50 returns "healthy"', () => {
  const character = { name: 'Маг', health: 90 };
  expect(healthIndicator(character)).toBe('healthy');
});

test('health between 15 and 50 returns "wounded"', () => {
  const character = { name: 'Маг', health: 30 };
  expect(healthIndicator(character)).toBe('wounded');
});

test('health < 15 returns "critical"', () => {
  const character = { name: 'Маг', health: 10 };
  expect(healthIndicator(character)).toBe('critical');
});

test('health = 50 returns "wounded"', () => {
  const character = { name: 'Маг', health: 50 };
  expect(healthIndicator(character)).toBe('wounded');
});

test('health = 15 returns "wounded"', () => {
  const character = { name: 'Маг', health: 15 };
  expect(healthIndicator(character)).toBe('wounded');
});