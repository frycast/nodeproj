import { describe, it, expect } from 'vitest';
import { config } from '../config';
import { loadSecrets } from '../utils/loadSecrets';

describe('config', () => {
  it('should load MYVAR from .env.test', () => { 
    expect(config.get('myvar')).toBe('this is a var in test mode');
  });
  it('should load secrets from secrets.example.json' , () => {
    loadSecrets();
    expect(config.get('secrets.mysecret.public')).toBe('123');
  });
})