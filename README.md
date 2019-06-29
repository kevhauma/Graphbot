
GraphBot for discord
======

This discord bot will record activity in your server and can display static graphs for the various activities.

activities
 + messages (for each user or for each channel)
 + bans
 + reactions
 + pictures posted
 + members pinged
 + members joining/leaving
 + total membercount
 
 This bot saves that something happens, not what exactly happens, it does not keep the messages, which user joined,... etc

 
Link
======

use this link to let the bot join your server:
[Discord bot](
https://discordapp.com/api/oauth2/authorize?client_id=591755247417032765&permissions=0&scope=bot) 
 
Usage/commands
======
for the bot to react to your commands, you will need to **tag the bot** 

get the options for graphs by tagging the bot and mentioning "help"

`@GrahpBot help`

available options :


| call | description| values | default |
| :--: |:--:|:--:|:---:|:--:|
| -data / -d| are neat|    $1 | |
| -from / -f|  start date in format `YYYY/MM/DD`| any date | first record
| -to / -t |end date in format `YYYY/MM/DD`|   any date | today |
| -color -c | change color of graph by hex code|    any color hexcode | `#ff0000`
| -size / -s | change size (in pixels) of graph in format `width,height`|max: 1500,1000 | 700,300 
| -base / -b | change base of graph: starts at 0, or use min and max values| zero, relative | relative |
| -group / -g | group data points, max 100 points | hours, weeks, months, number  | 40 |
| -type | bar or line graph| bar, line | line |
| -compare | data over time, or compare|time, hours-day, days-week , days-month | time |
| users | tag users to see their relevant data |   any user(s) | @everyone |
| channels | tag a channel to see the relevant data|    any channel(s) | whole server |

### Example

`@GraphBot -data messages -from 2019/01/06 -to 2019/03/06 -size 800,200 -compare time  @coolUser -c #32cd32 #general`

which means:
graph:
 + the messages
 + from user @coolUser in the general channel
 + from 6 January 2019
 + to 6 March 2019
 + a canvas of 800 pixels wide and 200 pixels high 
 + compare the messages over time
 + in a brightgreen color


Installation
======

1. `npm install`
2.  change `.env.sample`  to `.env` and put your own token in it
3. `npm run start`




# WIP
Due to the time restraint of the discord hack week, I only got to the validation of the options and a mockup of the graph which random data.

so don't expect this to work just yet