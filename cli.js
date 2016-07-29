#!/usr/bin/env node

require('args-or-stdin')({ multi: true })
.then(require('spreader')(require('.')))
.catch(require('error-exit'))
