import type {DiskStorageOptions, StorageEngine} from 'multer';
/**
 * 解决`const multer = require('multer')`变量，找不到ts类型的问题
 */
const multer = require('multer');
type DiskStorage = (options: DiskStorageOptions) =>  StorageEngine;
type MemoryStorage = () => StorageEngine

export const diskStorage: DiskStorage = multer.diskStorage;

export const memoryStorage: MemoryStorage = multer.memoryStorage
