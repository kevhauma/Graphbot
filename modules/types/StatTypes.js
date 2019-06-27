let types = {
    messages: {
        timestamp: 1,
        user: 1,
        channel: 1
    },
    bans: {
        timestamp: 1,
        user: 1,
        channel: 1
    },
    membersJoined: {
        timestamp: 1,
        user: 1,
        channel: 1
    },
    reactions: {
        timestamp: 1,
        user: 1,
        channel: 1
    },
    membersTotal: {
        timestamp: 1,
        user: 1,
        channel: 1
    },
    pings: {
        timestamp: 1,
        user: 1,
        channel: 1
    },
    pictures: {
        timestamp: 1,
        user: 1,
        channel: 1
    }
}

module.exports = {
    types: Object.keys(types).map(x => x.toLowerCase())
}
