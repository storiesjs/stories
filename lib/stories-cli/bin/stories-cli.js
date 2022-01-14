#!/usr/bin/env -S NODE_ENV=production node

import { scanOnce } from '../dist/index.cjs';

scanOnce();