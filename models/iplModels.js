import { model, Schema, } from "mongoose";

const schema = new Schema({
    team: {type: String, required: true},
    players:{type: [String], required: true},
    titleWon: {type: Number, required: true}
})

const iplTeam = model("IPL", schema)

export default iplTeam;