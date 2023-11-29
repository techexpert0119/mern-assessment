const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please provide a title"]
        },
        description: {
            type: String,
            required: [true, "Please provide a description"]
        },
        deadline: {
            type: Date,
            required: [true, "Please provide a deadline"],
            validate: {
                validator: function (value) {
                    return value.getTime() > new Date().getTime();
                },
                message: props => `${props.value} is a past date. Deadline must be a future date.`
            }
        },
    },
    { timestamps: true }
);

const Task = mongoose.model("Task", TaskSchema);
module.exports = Task;
