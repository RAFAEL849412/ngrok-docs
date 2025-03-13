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
        this.values = { t_cstart: Date.now() };
        this.piggy_values = {};
        this.bootloader_metrics = {};
        this.resource_to_pagelet_mapping = {};
        if (this.initializeInstrumentation) this.initializeInstrumentation();
    }

    setIsDetailedProfiler(value) {
        this.is_detailed_profiler = value;
        return this;
    }

    setTTIEvent(event) {
        this.tti_event = event;
        return this;
    }

    setValue(key, value, b, d) {
        let target = d ? this.piggy_values : this.values;
        if (typeof target[key] === "undefined") {
            target[key] = value;
        }
        return this;
    }

    getLastTtiValue() {
        return this.lastTtiValue;
    }

    setTimeStamp(key, b, c) {
        this.mark(key);
        let time = this.values.t_cstart || CavalryLogger.now();
        this.setValue(key, time, b, c);
        if (this.tti_event && key === this.tti_event) {
            this.lastTtiValue = time;
            this.setTimeStamp("t_tti", b);
        }
        return this;
    }

    mark(label) {
        console.timeStamp?.(label);
    }

    addPiggyback(key, value) {
        this.piggy_values[key] = value;
        return this;
    }

    static getInstance(lid = CavalryLogger.id) {
        if (!CavalryLogger.instances[lid]) {
            CavalryLogger.instances[lid] = new CavalryLogger(lid);
        }
        return CavalryLogger.instances[lid];
    }

    static setPageID(lid) {
        if (CavalryLogger.id === 0) {
            let instance = CavalryLogger.getInstance();
            CavalryLogger.instances[lid] = instance;
            instance.lid = lid;
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

    stopWatch(label) {
        if (this.ongoing_watch[label]) {
            let time = CavalryLogger.now();
            let duration = time - this.ongoing_watch[label];
            this.bootloader_metrics[label] = duration;
            let piggy = this.piggy_values;
            if (label.startsWith("bootload")) {
                piggy.t_resource_download = (piggy.t_resource_download || 0) + duration;
                piggy.resources_downloaded = (piggy.resources_downloaded || 0) + 1;
                if (piggy["tag_" + label] === "_EF_") {
                    piggy.t_pagelet_cssload_early_resources = time;
                }
            }
            delete this.ongoing_watch[label];
        }
        return this;
    }

    static getBootloaderMetricsFromAllLoggers() {
        let metrics = {};
        Object.values(CavalryLogger.instances).forEach(instance => {
            Object.assign(metrics, instance.bootloader_metrics);
        });
        return metrics;
    }
}

CavalryLogger.instances = {};
CavalryLogger.id = 0;

module.exports = CavalryLogger;

