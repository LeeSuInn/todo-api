import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            maxLength: 30,
            validate: {
                validator: function(title){
                    return title.split(' ').length > 1;
                },
                massage: 'Must contain at least 2 words.',
            },
        },
        description: {
            type: String,
        },
        isComplete: {
            type: Boolean,
            default: false,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);


const Task = mongoose.model('Task', TaskSchema);

export default Task;