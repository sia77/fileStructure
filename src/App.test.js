import { describe, it, expect, vi } from 'vitest';
import App from './App';
import * as DisplayModule from './components/DisplayHierarchy';
import data from './data/hierarchy.json';

describe('App()', () => {
  it('creates a <ul> with populated hierarchy', () => {
    // Spy on DisplayHierarchy to confirm it's called
    const spy = vi.spyOn(DisplayModule, 'DisplayHierarchy');

    const ul = App();

    // Root element is a <ul> with correct ID
    expect(ul.tagName).toBe('UL');
    expect(ul.id).toBe('hierarchy');

    // DisplayHierarchy should have been called
    expect(spy).toHaveBeenCalledWith(ul, data.root);

    spy.mockRestore(); // Clean up
  });

  it('toggles classes on click of element with id', () => {
    const ul = App();

    // Create a fake child <li> with an id
    const li = document.createElement('li');
    li.id = 'Test_1';
    ul.appendChild(li);

    // Simulate click
    li.click();

    expect(li.classList.contains('open')).toBe(true);
    expect(li.classList.contains('hide-children')).toBe(true);

    // Click again to toggle off
    li.click();

    expect(li.classList.contains('open')).toBe(false);
    expect(li.classList.contains('hide-children')).toBe(false);
  });
});