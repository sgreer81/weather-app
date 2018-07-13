'use strict';

const redis = require('redis');
const host = process.env.REDIS_HOST | '127.0.0.1';

let client;
let redisGet = () => null;
let redisSet = () => null;
let redisConnected = false;

if (process.env.REDIS_HOST) {
    redisConnected = true;
    const { promisify } = require('util');
    client = redis.createClient({ host });
    redisGet = promisify(client.get).bind(client);
    redisSet = promisify(client.set).bind(client);
}

const set = async (key, value, ttl) => {
    if (redisConnected) {
        return null;
    }
    ttl = parseInt(ttl);

    try {
        return redisSet(key, value, 'EX', ttl);
    } catch (e) {
        console.error(e);
    }
};

const get = async key => {
    try {
        return redisGet(key);
    } catch (e) {
        console.error(e);
    }
};

module.exports = {
    set,
    get
};