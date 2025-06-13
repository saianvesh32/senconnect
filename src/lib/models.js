import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        min:3,
        max:20
    },
    email:{
        type:String,
        required:true,
        unique:true,
        max:50
    },
    password:{
        type:String,
      
    },
    img:{
        type:String,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
},{timestamps:true}
)

const meetupRequestSchema = new mongoose.Schema({
  juniorUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Refers to the User model
      required: true,
  },
  seniorUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Refers to the User model
      required: true,
  },
  date: {
      type: String,
      required: true,
  },
  timeFrom: {
      type: String,
      required: true,
  },
  timeTo: {
      type: String,
      required: true,
  },
  status: {
      type: String,
      default: 'Pending', // Can be 'Accepted', 'Rejected', or 'Pending'
  }
}, { timestamps: true });



const postSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
      },
      desc: {
        type: String,
        required: true,
      },
      img: {
        type: String,
      },
      userId: {
        type: String,
        required: true,
      },
      slug: {
        type: String,
        required: true,
        unique: true,
      },
    },
    { timestamps: true }
  );
  
  export const User = mongoose.models?.User || mongoose.model("User",userSchema);
  export const Post = mongoose.models?.Post || mongoose.model("Post",postSchema);
  export const MeetupRequest =   mongoose.models?.MeetupRequest || mongoose.model('MeetupRequest', meetupRequestSchema);