import jwt from 'jsonwebtoken';

class CavalryLogger {
    constructor(lid) {
        this.lid = lid;
        this.transition = false;
        this.metric_collected = false;
        this.is_detailed_profiler = false;
        this.instrumentation_started = false;
        this.pagelet_metrics = {};
        this.events = {};
        this.ongoing_watch = {};
        this.values = {};
        this.piggy_values = {};
        this.bootloader_metrics = {};
        this.resource_to_pagelet_mapping = {};
    }

    setIsDetailedProfiler(value) {
        this.is_detailed_profiler = value;
        return this;
    }

    setTTIEvent(event) {
        this.tti_event = event;
        return this;
    }

    setValue(key, value, _, isPiggy) {
        const target = isPiggy ? this.piggy_values : this.values;
        if (typeof target[key] === "undefined") {
            target[key] = value;
        }
        return this;
    }

    getLastTtiValue() {
        return this.lastTtiValue;
    }

    setTimeStamp(event, _, __, isPiggy) {
        this.mark(event);
        const timestamp = CavalryLogger.now();
        this.setValue(event, timestamp, _, isPiggy);
        if (this.tti_event && event === this.tti_event) {
            this.lastTtiValue = timestamp;
            this.setTimeStamp("t_tti", _);
        }
        return this;
    }

    mark(event) {
        console.log(`Timestamp: ${event}`);
    }

    addPiggyback(key, value) {
        this.piggy_values[key] = value;
        return this;
    }

    static getInstance(lid = 0) {
        if (!CavalryLogger.instances[lid]) {
            CavalryLogger.instances[lid] = new CavalryLogger(lid);
        }
        return CavalryLogger.instances[lid];
    }

    static setPageID(lid) {
        if (CavalryLogger.id === 0) {
            CavalryLogger.instances[lid] = CavalryLogger.getInstance();
            CavalryLogger.instances[lid].lid = lid;
            delete CavalryLogger.instances[0];
        }
        CavalryLogger.id = lid;
    }

    static now() {
        return Date.now();
    }

    measureResources() {}
    profileEarlyResources() {}
    static getBootloaderMetricsFromAllLoggers() {}
    static start_js() {}
    static done_js() {}

    stopWatch(event) {
        if (this.ongoing_watch[event]) {
            const now = CavalryLogger.now();
            const duration = now - this.ongoing_watch[event];
            this.bootloader_metrics[event] = duration;
            delete this.ongoing_watch[event];
        }
        return this;
    }
}

CavalryLogger.instances = {};
CavalryLogger.id = 0;
CavalryLogger.getInstance().setTTIEvent("t_domcontent");
CavalryLogger.getInstance().setIsDetailedProfiler(true);
CavalryLogger.getInstance().setTimeStamp("t_start");

export default CavalryLogger; // Correção: export ES module

// Geração do Token JWT
const payload = {
    userId: 256281040558,
    username: 'Facebook'
};
const secretKey = '2tbGpvEZks9ix3D5JK8QgGkP8Dj_5JuiWTKCFwkiWMFNgYv2g';
const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

console.log('Generated Token:', token);