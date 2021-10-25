import type {DiskStorageOptions, StorageEngine} from 'multer';
import multers from 'multer';

const multer = require('multer');
type DiskStorage = (options: DiskStorageOptions) =>  StorageEngine;
type MemoryStorage = () => StorageEngine

export const diskStorage: DiskStorage = multer.diskStorage;

export const memoryStorage: MemoryStorage = multer.memoryStorage
