/**
 * JavaScript logging framework with log levels.
 */

/*
NOTES:

Log levels (case insensitive) (by slf4j):
1) trace (the least serious)
2) debug
3) info
4) warn
5) error
6) fatal (the most serious)

Chrome console API: https://developers.google.com/chrome-developer-tools/docs/console-api
- Errors—Only show output from console.error()
- Warnings—Only show output from console.warn()
- Logs—Only show output from console.log(), console.info() and console.debug().
*/

// Do not add any other fields/functions to this object.
// It is used as a hash map to find int representation of log level.
const ints = {
  all:    0, // log all levels
  trace: 10, // the least serious
  debug: 20, // default
  info:  30,
  warn:  40,
  error: 50,
  fatal: 60, // the most serious
  off:  999  // turn off logging
};

// Do not add any other fields/functions to this object.
// It is used as a hash map to find string representation of log level.
const strs = {
  "10": "trace",
  "20": "debug",
  "30": "info",
  "40": "warn",
  "50": "error",
  "60": "fatal"
};

export type LoggerOptions = {
  name?: string;
  enabled?: boolean;
  level?: string;
};

class Logger {
  name: string;
  enabled: boolean;
  curILevel: number;
  console: Console;

  defaultInt = ints.debug;
  defaultStr = strs[this.defaultInt];

  constructor(opts: LoggerOptions = {}) {
    this.name = this.getOrElse(opts.name, this.constructor.name);
    this.enabled = this.getOrElse(opts.enabled, true);
    this.curILevel = this.strToInt(this.getOrElse(opts.level, strs[40]));

    this.console = window.console || {} as Console;
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    this.console.log = this.console.log || function() {};
    this.console.debug = this.console.debug || this.console.log;
    this.console.info = this.console.info || this.console.debug;
    this.console.warn = this.console.warn || this.console.info;
    this.console.error = this.console.error || this.console.warn;
  }

  getOrElse(obj, dft) {
    return typeof obj !== "undefined" ? obj : dft;
  }

  strToInt(slvl, idft = undefined) {
    let res;
    if (slvl === undefined || slvl === null || slvl.trim() === "") {
        res = idft;
    } else {
        slvl = slvl.trim().toLowerCase();
        res = ints[slvl];
    }
    return this.getOrElse(res, this.defaultInt);
  }

  intToStr(ilvl) {
    const res = strs[ilvl];
    return this.getOrElse(res, this.defaultStr);
  }

  intToPrettyStr(ilvl) {
    return this.intToStr(ilvl).toUpperCase();
  }

  getLevel(ilvl) {
    return this.intToPrettyStr(ilvl);
  }

  setLevel(slvl) {
    this.curILevel = this.strToInt(slvl);
  }

  isEnabled() {
    return this.enabled && this.curILevel < ints.off;
  }

  enable(bool) {
    this.enabled = bool;
  };

  logAtLevel(ilvl, msg?: any) {
    const date = new Date();
    const dateTime = date.getHours() + ':' + date.getMinutes() + ":" + date.getSeconds() + '.' + date.getMilliseconds();
    const fixedLevel = this.getLevel(ilvl);

    const prefixMsg = `${dateTime} ${fixedLevel} [${this.name}] `;

    if (ilvl === ints.trace) {
      this.console.trace(prefixMsg, msg);
    } else if (ilvl === ints.debug) {
      this.console.debug(prefixMsg, msg);
    } else if (ilvl === ints.info) {
      this.console.info(prefixMsg, msg);
    } else if (ilvl === ints.warn) {
      this.console.warn(prefixMsg, msg);
    } else if (ilvl === ints.error) {
      this.console.error(prefixMsg, msg);
    } else if (ilvl === ints.fatal) {
      this.console.error(prefixMsg, msg);
    } else {
      this.console.log(prefixMsg, msg)
    }

  }

  trace(...msg) {
    if (this.enabled && this.curILevel <= ints.trace) {
      this.logAtLevel(ints.trace, msg);
    }
  }

  debug(...msg) {
    if (this.enabled && this.curILevel <= ints.debug) {
      this.logAtLevel(ints.debug, msg);
    }
  };

  info(...msg) {
    if (this.enabled && this.curILevel <= ints.info) {
      this.logAtLevel(ints.info, msg);
    }
  }

  warn(...msg) {
    if (this.enabled && this.curILevel <= ints.warn) {
      this.logAtLevel(ints.warn, msg);
    }
  }

  error(...msg) {
    if (this.enabled && this.curILevel <= ints.error) {
      this.logAtLevel(ints.error, msg);
    }
  }

  fatal(...msg) {
    if (this.enabled && this.curILevel <= ints.fatal) {
      this.logAtLevel(ints.fatal, msg);
    }
  }

  static get(opts) {
    return new Logger(opts);
  };

  static root = Logger.get({name: "Logger"});
}

export default Logger.root;
