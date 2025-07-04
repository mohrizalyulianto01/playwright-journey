import { test } from '@playwright/test';
import { submenuTest } from './modules/submenuFormy';


test.describe('all submenu', { tag: '@allsubmenu' }, submenuTest);

