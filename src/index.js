'use strict';
import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import popUpShow from './modules/popUpShow';

popUpShow();