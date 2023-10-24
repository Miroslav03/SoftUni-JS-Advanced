function factory(library, orders) {
  const arr = []
  for (let i = 0; i < orders.length; i++) {
    const currentObj = orders[i];
    const commands = currentObj.parts;
    const obj = Object.assign({}, currentObj.template);
    for (const command of commands) {
      obj[command] = library[command]
    }
    arr.push(obj)
  }
  
  return arr
}

const library = {
  print: function () {
    console.log(`${this.name} is printing a page`);
  },
  scan: function () {
    console.log(`${this.name} is scanning a document`);
  },
  play: function (artist, track) {
    console.log(`${this.name} is playing '${track}' by ${artist}`);
  },
};


const orders = [
  {
    template: { name: 'ACME Printer' },
    parts: ['print']
  },
  {
    template: { name: 'Initech Scanner' },
    parts: ['scan']
  },
  {
    template: { name: 'ComTron Copier' },
    parts: ['scan', 'print']
  },
  {
    template: { name: 'BoomBox Stereo' },
    parts: ['play']
  }
];
const products = factory(library, orders);
console.log(products);

products[3].play(`Trap Connection `, `bad bitch 2`)