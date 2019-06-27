class ChannelStats {
    constructor({ms}) {
        this.messageStats = new MessageStats(ms)
    }
}

module.exports = ChannelStats
