export const iplIndex = (req, res)=>{
    res.send("get sucess")
}

export const iplCreator = (req, res)=>{
    //id, Team, Players, Cup

    console.log(req.body)

    return res.json(req.body)
}

export const iplUpdate =(req, res)=>{
    res.send("update sucess")
}

export const iplDelete = (req, res)=>{
    res.send("delete sucess")
}

