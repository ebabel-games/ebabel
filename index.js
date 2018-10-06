'use strict';

const { hexStringToInt, mockTHREEx, mockTHREE, mockDataStore } = require('ebabel-mocks');

const {
  deepCopy,
  dice,
  positive,
  randomPosition,
  randomPosOrNeg,
  reducedDistance,
  trait,
  countArrayElements,
  distance,
  guid,
  Ido,
  preventXss,
  random,
  randomList,
} = require('ebabel-utils');

const { keyboardControls, updatePlayerPositionRotation } = require('ebabel-keyboard-controls');
const light = require('ebabel-light');
const boundingBox = require('ebabel-bounding-box');
const skybox = require('ebabel-skybox');
const themeMusic = require('ebabel-theme-music');

module.exports = {
  random,
  guid,
  randomList,
  Ido,
  preventXss,
  countArrayElements,
  distance,
  light,
  boundingBox,
  skybox,
  hexStringToInt,
  mockTHREEx,
  mockTHREE,
  mockDataStore,
  deepCopy,
  dice,
  positive,
  randomPosition,
  randomPosOrNeg,
  reducedDistance,
  trait,
  keyboardControls,
  updatePlayerPositionRotation,
  themeMusic,
};
