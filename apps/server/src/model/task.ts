import mongoose, { Schema } from "mongoose";

const task = new Schema({})
export const Task = mongoose.model("Task", task);