let templates = {
    messages: {
        timestamp: 1,
        user: 1,
        channel: 1
    },
    bans: {
        timestamp: 1,
        user: 1
    },
    membersJoined: {
        timestamp: 1,
        user: 1,
        type: 1
    },
    reactions: {
        timestamp: 1,
        user: 1,
        channel: 1
    },
    membersTotal: {
        timestamp: 1,
        total: 1,
    },
    pings: {
        timestamp: 1,
        ping: 1,
        channel: 1
    },
    pictures: {
        timestamp: 1,
        user: 1,
        channel: 1
    }
}

module.exports = {
    types: Object.keys(templates).map(x => x.toLowerCase()),
    templates
}
