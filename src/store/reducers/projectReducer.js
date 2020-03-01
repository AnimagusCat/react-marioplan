const initState = {
    projects: [
        {id: "1", title: "hi i'm a turtle", content: "hey there"},
        {id: "2", title: "whaddup", content: "look at my egg"},
        {id: "3", title: "let's make pancakes", content: "oh i forgot eggs"}
    ]
}

const projectReducer = (state = initState, action) => {
    return state;
}

export default projectReducer