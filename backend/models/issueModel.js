import mongoose from 'mongoose'

const issueSchema = mongoose.Schema(
  {
    
    
  },
  {
    timestamps: true,
  }
);



const Issue = mongoose.model('Issue', issueSchema)

export default Issue