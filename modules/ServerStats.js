class ServerStats {
    constructor({ms,cs}) {        
        this.memberStats = new MemberStats(ms)
        this.channelStats = new ChannelStats(cs)
        
    }

}


module.exports = ServerStats