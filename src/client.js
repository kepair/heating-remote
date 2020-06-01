import * as sapper from '@sapper/app';
import { googleAnalytics } from './ga.js';

sapper.start({
    target: document.querySelector('#sapper')
});
googleAnalytics('UA-167982656-1');