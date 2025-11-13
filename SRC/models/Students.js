import {model,Schema} from 'mongoose';
const studentSchema = new Schema({
    Student_id:{
        type:String,
        required:true,
        unique:true
    },
    name:String,
    lastname:String,
    grade:Number,
    group:String,
    average:Number

},
{
    timestamps: true,
    versionKey: false
});
export default model('student',studentSchema);

