import { describe, it, expect } from 'vitest';
import { config } from '../config';

describe('config', () => {
  it('should load MYVAR from .env.test', () => { 
    expect(config.get('myvar')).toBe('this is a var in test mode');
  });
  it('should load secrets from secrets.example.json' , () => {
    expect(config.get('secrets.mysecret.public')).toBe('123');
  });
})