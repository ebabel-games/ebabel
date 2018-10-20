'use strict';

const {
  hexStringToInt,
  mockTHREEx,
  mockTHREE,
  mockEG,
  mockCanvas,
  mockSocket,
  mockIo,
} = require('ebabel-mocks');

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

const {
  keyboardControls,
  updatePlayerPositionRotation,
} = require('ebabel-keyboard-controls');

const light = require('ebabel-light');
const boundingBox = require('ebabel-bounding-box');
const skybox = require('ebabel-skybox');
const audio = require('ebabel-audio');
const textSprite = require('ebabel-text-sprite');

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
  mockEG,
  mockCanvas,
  mockSocket,
  mockIo,
  deepCopy,
  dice,
  positive,
  randomPosition,
  randomPosOrNeg,
  reducedDistance,
  trait,
  keyboardControls,
  updatePlayerPositionRotation,
  audio,
  textSprite,
};
