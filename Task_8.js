let map = new Map();
map.set("RTS-strategy", "Planetary Anihilation");
map.set("Survival-game", "Subnautica");  
map.set("Just-intresting-game", "Oxugen not included");  
for (let i of map.keys()) 
{
    console.log(`Ключ - ${i}, значение - ${map.get(i)}`);
}