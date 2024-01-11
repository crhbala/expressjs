import mongoose from 'mongoose'

try {
    mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`)
} catch(error) {
    console.log(error);
}

export default mongoose