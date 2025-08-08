let questLog = ["Collect 10 Firefly Wings","Defeat the Goblin King","Find the Lost Sword of Oakhaven"];
console.log(questLog)

//step 2

const guests_length = questLog.length;
console.log(guests_length);

//step 3

const first_item = questLog[0]
console.log(first_item)

//step 4

const new_questLog = questLog.push("Deliver the Royal Scroll")
console.log(questLog)

//step 5

questLog.pop()
console.log(questLog)

//step 6

questLog.unshift("Rescue the Blacksmith's Cat")
console.log(questLog)

//step 7
questLog.shift("Rescue the Blacksmith's Cat")
console.log(questLog)

//step 8 

questLog.splice()
console.log(questLog)

//step 9




questLog.splice(1, 0, "Slay the Dragon of Mount Doom");

console.log(questLog);

//step 10


let join_quests = questLog.join("|");

console.log(join_quests);

