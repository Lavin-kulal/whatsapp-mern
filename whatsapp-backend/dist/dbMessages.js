"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const whatsappSchema = new mongoose_1.default.Schema({
    message: { type: String, required: true },
    name: { type: String, required: true },
    timestamp: { type: String, required: true },
    received: { type: Boolean, required: true },
});
exports.default = mongoose_1.default.model("MessageContent", whatsappSchema);
