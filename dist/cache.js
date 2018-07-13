'use strict';

const redis = require('redis');
const host = process.env.REDIS_HOST | '127.0.0.1';
const client = redis.createClient(6379, host);

const { promisify } = require('util');
const redisGet = promisify(client.get).bind(client);
const redisSet = promisify(client.set).bind(client);

const set = ({ key, value, ttl }) => {
    ttl = parseInt(ttl);
    redisSet(key, value, 'EX', ttl).then(() => Promise.resolve(value)).catch(e => console.error(e));
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