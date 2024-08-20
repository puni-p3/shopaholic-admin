"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    'transformer': {
        enabled: true,
        config: {
            responseTransforms: {
                removeAttributesKey: true,
                removeDataKey: true,
            },
        }
    },
});
