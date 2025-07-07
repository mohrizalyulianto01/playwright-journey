import { test } from '@playwright/test';
import { submenuTest } from '../Components/submenuFormy';


test.describe('all submenu', { tag: '@allsubmenu' }, submenuTest);

